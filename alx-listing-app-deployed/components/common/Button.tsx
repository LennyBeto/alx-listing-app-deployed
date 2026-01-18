import React from 'react'
import { ButtonProps } from '@/interfaces'

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium py-2 px-4 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {label}
    </button>
  )
}

export default Button
