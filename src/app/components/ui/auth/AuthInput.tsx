"use client"

import React, { useState, ReactNode } from 'react'
import { Eye, EyeOff } from 'lucide-react'

export type AuthInputProps = {
  label: string
  type: string
  placeholder?: string
  value: string
  onChange: (value: string) => void
  icon: ReactNode
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode']
  autoComplete?: string
  maxLength?: number
  readOnly?: boolean
  /** Show password toggle eye icon (only valid when type="password") */
  showToggle?: boolean
  /** Optional inline validation error shown below the input */
  error?: string
}

export default function AuthInput({
  label,
  type,
  placeholder,
  value,
  onChange,
  icon,
  inputMode,
  autoComplete,
  maxLength,
  readOnly = false,
  showToggle = false,
  error,
}: AuthInputProps) {
  const [visible, setVisible] = useState(false)
  const inputType = showToggle ? (visible ? 'text' : 'password') : type

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm md:text-base font-semibold text-gray-700">{label}</label>
      <div className="relative">
        {/* Left icon */}
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 pointer-events-none">
          {icon}
        </span>

        <input
          type={inputType}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          inputMode={inputMode}
          autoComplete={autoComplete}
          maxLength={maxLength}
          readOnly={readOnly}
          className="w-full h-11 md:h-12 pl-10 pr-10 md:text-base border border-gray-300 rounded-md text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition"
        />

        {/* Right eye toggle */}
        {showToggle && (
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 transition"
            aria-label={visible ? 'Hide password' : 'Show password'}
          >
            {visible ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
      {error && (
        <p className="text-xs text-red-500 mt-0.5" role="alert">{error}</p>
      )}
    </div>
  )
}
