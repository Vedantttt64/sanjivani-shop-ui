"use client"

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import AuthCard from '../components/ui/auth/AuthCard'
import { Check } from 'lucide-react'

const OTP_LENGTH = 6
const RESEND_SECONDS = 45

export default function VerifyOtpPage() {
  const router = useRouter()
  const [phone, setPhone] = useState<string>('')
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''))
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [resendCountdown, setResendCountdown] = useState(RESEND_SECONDS)
  const [resending, setResending] = useState(false)
  const [resendMessage, setResendMessage] = useState('')
  const [verified, setVerified] = useState(false)
  const inputRefs = useRef<Array<HTMLInputElement | null>>([])

  useEffect(() => {
    const stored = sessionStorage.getItem('otp_phone')
    if (!stored) {
      router.replace('/login')
      return
    }
    setPhone(stored)
  }, [router])

  useEffect(() => {
    if (resendCountdown <= 0) return
    const timer = setTimeout(() => setResendCountdown((c) => c - 1), 1000)
    return () => clearTimeout(timer)
  }, [resendCountdown])

  const handleOtpChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, '').slice(-1)
    const next = [...otp]
    next[index] = digit
    setOtp(next)
    setError('')

    if (digit && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (otp[index]) {
        const next = [...otp]
        next[index] = ''
        setOtp(next)
        if (index > 0) {
          inputRefs.current[index - 1]?.focus()
        }
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus()
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus()
    } else if (e.key === 'ArrowRight' && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const digits = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, OTP_LENGTH)
    if (!digits) return
    const next = Array(OTP_LENGTH).fill('')
    digits.split('').forEach((d, i) => { next[i] = d })
    setOtp(next)
    setError('')
    const nextIndex = Math.min(digits.length, OTP_LENGTH - 1)
    inputRefs.current[nextIndex]?.focus()
  }

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault()
    const code = otp.join('')
    if (code.length < OTP_LENGTH) {
      setError('Please enter all 6 digits.')
      return
    }
    setLoading(true)
    setError('')

    // Simulate backend response
    setTimeout(() => {
      setLoading(false)
      setVerified(true)

      // Delay before routing to show tick mark
      setTimeout(() => {
        const registered = JSON.parse(localStorage.getItem('registered_phones') || '[]')
        if (registered.includes(phone)) {
          router.push('/')
        } else {
          router.push('/register')
        }
      }, 700)
    }, 500)
  }

  const handleResend = useCallback(() => {
    if (resendCountdown > 0 || resending) return
    setResending(true)
    setResendMessage('')
    setError('')

    setTimeout(() => {
      setResendCountdown(RESEND_SECONDS)
      setResendMessage('Demo OTP resent for frontend testing.')
      setOtp(Array(OTP_LENGTH).fill(''))
      inputRefs.current[0]?.focus()
      setResending(false)
    }, 300)
  }, [resendCountdown, resending])

  const formatCountdown = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  const formatPhoneDisplay = (value: string) => {
    const digits = value.replace(/\D/g, '')
    if (!digits) return value
    if (digits.length <= 4) return digits
    const visibleStart = digits.slice(0, Math.min(2, digits.length - 4))
    const visibleEnd = digits.slice(-4)
    const masked = `${visibleStart}${'*'.repeat(Math.max(digits.length - visibleStart.length - 4, 0))}${visibleEnd}`
    return value.startsWith('+') ? `+${masked}` : masked
  }

  return (
    <AuthCard>
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-[#1a6e3c]">Verify your phone number</h1>
        <p className="text-sm mt-2 text-gray-600">
          Enter the 6-digit OTP sent to your phone number.
        </p>
        <p className="text-sm font-semibold text-gray-800 mt-1">{formatPhoneDisplay(phone) || '...'}</p>
      </div>

      <form onSubmit={handleVerify} className="flex flex-col gap-6" noValidate>
        <div className="flex justify-center gap-2 sm:gap-3" onPaste={handlePaste}>
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={(el) => { inputRefs.current[i] = el }}
              type="tel"
              inputMode="numeric"
              pattern="\d*"
              maxLength={1}
              autoComplete={i === 0 ? 'one-time-code' : 'off'}
              value={digit}
              disabled={verified}
              onChange={(e) => handleOtpChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              aria-label={`OTP digit ${i + 1}`}
              className={`w-10 h-12 sm:w-11 sm:h-12 text-center text-lg font-bold border rounded-md
                focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent
                transition text-gray-800
                ${error ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'}
                ${verified ? 'opacity-70 bg-gray-50' : ''}`}
            />
          ))}
        </div>

        {error && (
          <p className="text-xs text-red-500 text-center -mt-2" role="alert">{error}</p>
        )}

        {resendMessage && (
          <p className="text-xs text-green-600 text-center -mt-2">{resendMessage}</p>
        )}

        <button
          type="submit"
          disabled={loading || verified}
          className={`w-full h-11 md:h-12 text-white font-semibold rounded-md flex items-center justify-center
                     transition-colors duration-200 cursor-pointer disabled:opacity-60
                     ${verified ? 'bg-green-600 hover:bg-green-600' : 'bg-[#1a6e3c] hover:bg-[#155930]'}`}
        >
          {loading ? 'Verifying…' : verified ? (
            <>
              <Check className="w-5 h-5 mr-2" />
              Verified
            </>
          ) : 'Verify OTP'}
        </button>
      </form>

      {!verified && (
        <div className="mt-5 flex flex-col items-center gap-2 text-sm text-gray-600">
          {resendCountdown > 0 ? (
            <span>
              Resend OTP in{' '}
              <span className="font-semibold text-[#1a6e3c]">{formatCountdown(resendCountdown)}</span>
            </span>
          ) : (
            <button
              type="button"
              onClick={handleResend}
              disabled={resending}
              className="font-semibold text-[#1a6e8c] hover:underline cursor-pointer disabled:opacity-60"
            >
              {resending ? 'Sending…' : 'Resend OTP'}
            </button>
          )}

          <Link href="/login" className="text-gray-500 hover:underline text-xs">
            Change phone number
          </Link>
        </div>
      )}
    </AuthCard>
  )
}
