
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

function Input({
  label,
  id,
  error,
  className = '',
  inputType = 'text',
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false)

  const isPassword = inputType === 'password'
  const actualType = isPassword && showPassword ? 'text' : inputType

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-medium text-main-text"
        >
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={id}
          type={actualType}
          className={[
            'w-full rounded-none border border-border bg-surface px-4 py-3',
            'text-main-text placeholder:text-secondary-text',
            'transition-colors duration-200',
            'focus:border-primary focus:outline-none',
            'disabled:cursor-not-allowed disabled:opacity-50',
            isPassword ? 'pr-12' : '',
            error ? 'border-red-500' : '',
            className,
          ].join(' ')}
          {...props}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((current) => !current)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary-text transition-colors hover:text-primary"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  )
}

export default Input
