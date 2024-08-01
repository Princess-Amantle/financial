// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Paper, Title, TextInput, PasswordInput, Button, Text, Anchor, Notification, Center, Stack } from '@mantine/core';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Container size="xs" style={{ height: '100vh' }} padding={0}>
      <Center style={{ height: '100%' }}>
        <Paper padding="md" shadow="sm" style={{ borderRadius: 8, width: '100%', maxWidth: 400 }}>
          <Title order={1} align="center" mb="lg">Login</Title>
          <form onSubmit={handleSubmit}>
            <Stack spacing="md">
              <TextInput
                label="Email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                size="md"
              />
              <PasswordInput
                label="Password"
                placeholder="Your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                size="md"
              />
              <Button type="submit" fullWidth size="lg">
                Login
              </Button>
              {error && (
                <Notification color="red" mt="md" withCloseButton>
                  {error}
                </Notification>
              )}
              <Text align="center">
                Do not have an account? <Anchor href="/signup" size="sm">Register</Anchor>
              </Text>
            </Stack>
          </form>
        </Paper>
      </Center>
    </Container>
  );
}

export default Login;
