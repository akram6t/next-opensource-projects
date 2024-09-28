'use client'

import React from 'react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { MailIcon } from 'lucide-react'
import Link from 'next/link'
import axios from 'axios'

export default function ResetPassword() {
  const [email, setEmail] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [message, setMessage] = React.useState('')
  const [error, setError] = React.useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')

    try {
      const response = await axios.post('/api/reset-password', { email })
      setMessage('If an account exists for this email, you will receive password reset instructions.')
    } catch (err) {
      setError('Failed to send reset instructions. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-card shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-forground">Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <Input
          icon={<MailIcon className="h-5 w-5 text-gray-400" />}
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {message && <p className="text-green-500 text-sm mb-4">{message}</p>}
        <Button type="submit" loading={loading}>
          Send Reset Instructions
        </Button>
      </form>
      <div className="mt-4 text-center">
        <Link href="/auth/login" className="text-sm text-primary hover:underline">
          Remember your password? Login
        </Link>
      </div>
    </div>
  )
}