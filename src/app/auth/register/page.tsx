'use client'

import React from 'react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { UserIcon, LockIcon, MailIcon } from 'lucide-react'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function Register() {
  const [name, setName] = React.useState('')
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
      const response = await axios.post('/api/register', { name, email, password })
      console.log(response);
      
      // Handle successful registration
      router.push('/login') // Redirect to login page
    } catch (err) {
      console.log(err);
      
      setError('Registration failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-card shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-forground">Register</h2>
      <form onSubmit={handleSubmit}>
        <Input
          icon={<UserIcon className="h-5 w-5 text-gray-400" />}
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          icon={<MailIcon className="h-5 w-5 text-gray-400" />}
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
          Register
        </Button>
      </form>
      <div className="mt-4 text-center">
        <Link href="/auth/login" className="text-sm text-primary hover:underline">
          Already have an account? Login
        </Link>
      </div>
    </div>
  )
}