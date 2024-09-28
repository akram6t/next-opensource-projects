'use client'

import React from 'react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { UserIcon, LockIcon } from 'lucide-react'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function Login() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await axios.post('/api/login', { email, password })
      console.log(response);
      
      // Handle successful login
      router.push('/dashboard') // Redirect to dashboard or home page
    } catch (err) {
      console.log(err);
      
      setError('Invalid email or password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-card shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-forground">Login</h2>
      <form onSubmit={handleSubmit}>
        <Input
          icon={<UserIcon className="h-5 w-5 text-gray-400" />}
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          icon={<LockIcon className="h-5 w-5 text-gray-400" />}
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <Button type="submit" loading={loading}>
          Login
        </Button>
      </form>
      <div className="mt-4 text-center">
        <Link href="/auth/register" className="text-sm text-primary hover:underline">
          Don't have an account? Register
        </Link>
      </div>
      <div className="mt-2 text-center">
        <Link href="/auth/reset-password" className="text-sm text-primary hover:underline">
          Forgot your password?
        </Link>
      </div>
    </div>
  )
}