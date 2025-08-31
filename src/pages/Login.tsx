import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { saveAuthToken, saveLoginName } from '@/lib/auth'
import { loginRequest } from '@/lib/api'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { FormEvent } from 'react'

export default function LoginPage() {
  const navigate = useNavigate()
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const disabled = useMemo(() => !(login && password), [login, password])

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    const ok = await loginRequest(login, password)
    if (ok) {
      saveAuthToken('1')
      saveLoginName(login)
      navigate('/')
    } else {
      setError('Invalid login or password')
    }
  }

  return (
    <div className="min-h-screen grid place-items-center bg-background">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="login">Login</Label>
              <Input id="login" value={login} onChange={(e) => setLogin(e.target.value)} autoComplete="username"/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                     autoComplete="current-password"/>
            </div>
            {error && <p className="text-sm text-red-400">{error}</p>}
            <Button type="submit" className="w-full" disabled={disabled}>Sign in</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}


