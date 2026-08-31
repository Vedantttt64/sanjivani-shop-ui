"use client"

import React, { useState } from 'react'
import { Phone } from 'lucide-react'
import { useRouter } from 'next/navigation'
import AuthCard from '../components/ui/auth/AuthCard'
import AuthInput from '../components/ui/auth/AuthInput'

export default function LoginPage() {
    const router = useRouter()
    const [phone, setPhone] = useState('')
    const [errors, setErrors] = useState<{ phone?: string; form?: string }>({})
    const [loading, setLoading] = useState(false)

    const validate = () => {
        const errs: typeof errors = {}
        if (!phone.trim()) errs.phone = 'Phone number is required.'
        else if (!/^\+?[\d\s\-().]{7,15}$/.test(phone.trim()))
            errs.phone = 'Enter a valid phone number.'
        return errs
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const errs = validate()
        if (Object.keys(errs).length) { setErrors(errs); return }
        setErrors({})
        setLoading(true)

        // Frontend-only: store phone and move to OTP verification
        sessionStorage.setItem('otp_phone', phone.trim())
        // TODO: real backend — call API to generate & send OTP to this number
        setTimeout(() => {
            router.push('/verify-otp')
            setLoading(false)
        }, 400)
    }

    return (
        <AuthCard>
            {/* Heading */}
            <div className="text-center mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-[#1a6e3c]">Welcome Back</h1>
                <p className="text-sm md:text-base mt-1">
                    <span className="text-orange-500">Please log in to continue</span>
                    {' '}
                    <span className="text-[#1a6e8c]">your healthcare journey.</span>
                </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6" noValidate>
                {/* Phone Number */}
                <AuthInput
                    label="Phone Number"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(v) => { setPhone(v); setErrors((e) => ({ ...e, phone: undefined })) }}
                    icon={<Phone size={16} />}
                    inputMode="numeric"
                    autoComplete="tel"
                    error={errors.phone}
                />

                {/* Form-level error */}
                {errors.form && (
                    <p className="text-xs text-red-500 text-center" role="alert">{errors.form}</p>
                )}

                {/* Generate OTP button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-11 md:h-12 mt-2 md:mt-4 bg-[#1a6e3c] hover:bg-[#155930] disabled:opacity-60 text-white font-semibold rounded-md flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer"
                >
                    {loading ? 'Sending OTP…' : 'Generate OTP'}
                </button>
            </form>

        </AuthCard>
    )
}
