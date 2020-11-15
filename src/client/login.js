import React, { useEffect, useRef, useState } from 'react'
import { TextField, Typography, Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import Layout from './layout'

const Login = () => {
  const passwordRef = useRef()
  const history = useHistory()
  useEffect(() => {
    // const cookieValue = document.cookie
    //   .split('; ').find(cookie => cookie.startsWith('token')).split('=')[1]
    let push = true
    fetch('/api/verify')
      .then(e => { if (e.ok && push) history.push('/files') })
      .catch(e => console.error(e))
    return () => { push = false }
  }, [history])

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const login = async () => {
    const req = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'content-type': 'application/json' }
    })
    if (!req.ok) setError((await req.json()).error)
    else history.push('/files')
  }

  return (
    <Layout>
      <form onSubmit={e => e.preventDefault()}>
        <TextField
          autoFocus
          fullWidth
          variant='outlined'
          color='primary'
          type='text'
          placeholder='Username'
          value={username}
          onChange={e => setUsername(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && passwordRef.current) { passwordRef.current.focus() } }}
        />
        <br /><br />
        <TextField
          inputRef={passwordRef}
          fullWidth
          variant='outlined'
          color='primary'
          type='password'
          placeholder='Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') { login() } }}
        />
        <br /><br />
        <Button fullWidth variant='outlined' color='secondary' onClick={login}>Login</Button>
      </form>
      {error && <Typography style={{ color: 'red' }}>{error}</Typography>}
    </Layout>
  )
}

export default Login
