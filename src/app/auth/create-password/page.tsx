'use client'

import React from 'react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { LockIcon } from 'lucide-react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function CreatePassword() {
  const [password, setPassword] = React.useState('')
  const [confirmPassword, setConfirmPassword] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }
    setLoading(true)
    setError('')

    try {
      // Assume we have a token in the URL query params
      const token = new URLSearchParams(window.location.search).get('token')
      const response = await axios.post('/api/create-password', { password, token })
      console.log(response);
      
      // Handle successful password creation
      router.push('/login')
    } catch (err) {
      console.log(err);
      
      setError('Failed to create password. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-card shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-forground">Create New Password</h2>
      <form onSubmit={handleSubmit}>
        <Input
          icon={<LockIcon className="h-5 w-5 text-gray-400" />}
          label="New Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Input
          icon={<LockIcon className="h-5 w-5 text-gray-400" />}
          label="Confirm New Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <Button type="submit" loading={loading}>
          Create Password
        </Button>
      </form>
    </div>
  )
}