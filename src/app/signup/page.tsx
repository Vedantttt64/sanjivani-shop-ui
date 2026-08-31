"use client"

import React, { useEffect, useState } from 'react'
import { User, Phone } from 'lucide-react'
import { useRouter } from 'next/navigation'
import AuthCard from '../components/ui/auth/AuthCard'
import AuthInput from '../components/ui/auth/AuthInput'

type Fields = {
  fullName?: string
  phone?: string
  form?: string
}

export default function SignupPage() {
  const router = useRouter()
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [errors, setErrors] = useState<Fields>({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const storedPhone = sessionStorage.getItem('otp_phone')
    if (storedPhone) {
      setPhone(storedPhone)
    }
  }, [])

  const clearField = (field: keyof Fields) =>
    setErrors((e) => ({ ...e, [field]: undefined }))

  const validate = (): Fields => {
    const errs: Fields = {}
    if (!fullName.trim()) errs.fullName = 'Full name is required.'
    if (!phone.trim()) errs.form = 'Your verified phone number is missing. Please return to login.'
    return errs
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setLoading(true)

    // Save registration mock to localStorage
    setTimeout(() => {
      const registered = JSON.parse(localStorage.getItem('registered_phones') || '[]')
      if (!registered.includes(phone)) {
        registered.push(phone)
        localStorage.setItem('registered_phones', JSON.stringify(registered))
      }
      router.push('/')
      setLoading(false)
    }, 300)
  }

  return (
    <AuthCard>
      {/* Heading */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800 leading-snug">
          Complete Your<br />Registration
        </h1>
        <p className="text-sm mt-1 text-orange-500">
          Finish setting up your SANJIVANI profile.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
        {/* Full Name */}
        <AuthInput
          label="Full Name"
          type="text"
          placeholder="Jane Doe"
          value={fullName}
          onChange={(v) => { setFullName(v); clearField('fullName') }}
          icon={<User size={16} />}
          error={errors.fullName}
        />

        {/* Verified phone */}
        <AuthInput
          label="Verified Phone Number"
          type="tel"
          placeholder="Verified phone number"
          value={phone}
          onChange={() => undefined}
          icon={<Phone size={16} />}
          inputMode="numeric"
          autoComplete="tel"
          error={errors.phone}
          readOnly
        />

        {/* Form-level error */}
        {errors.form && (
          <p className="text-xs text-red-500 text-center" role="alert">{errors.form}</p>
        )}

        {/* Register button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full h-11 md:h-12 mt-2 md:mt-4 bg-[#1a6e3c] hover:bg-[#155930] disabled:opacity-60 text-white font-semibold rounded-md transition-colors duration-200 cursor-pointer"
        >
          {loading ? 'Registering…' : 'Register'}
        </button>
      </form>

    </AuthCard>
  )
}
