// src/OnboardingPage.js
import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { db, auth } from './firebase';
import { doc, updateDoc, getDoc, setDoc } from 'firebase/firestore';

const OnboardingPage = ({ onComplete }) => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [income, setIncome] = useState(0); // Initialize as a number

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        console.log('User not authenticated');
        window.location.href = '/login';
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async () => {
    if (!user || !user.uid) {
      console.error('User or user.uid is undefined');
      return;
    }
  
    const docRef = doc(db, 'users', user.uid);
    const docSnap = await getDoc(docRef);
  
    if (!docSnap.exists()) {
      // Document doesn't exist; create it with initial data
      try {
        await setDoc(docRef, {
          name,
          monthlyIncome: parseInt(income, 10), // Ensure income is saved as an integer
        });
        onComplete();
      } catch (error) {
        console.error('Error creating document:', error);
      }
      return;
    }
  
    try {
      await updateDoc(docRef, {
        name,
        monthlyIncome: parseInt(income, 10), // Ensure income is saved as an integer
      });
      window.location.href = '/onboarding';
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      window.location.href = '/login';
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: 2 }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ width: '100%' }}
      >
        <Button variant="contained" color="secondary" onClick={handleLogout} sx={{ marginBottom: 2 }}>
          Logout
        </Button>
        <Typography variant="h4" component="h1" gutterBottom sx={{ marginBottom: 3 }}>
          Onboarding
        </Typography>
        <TextField
          label="Name"
          placeholder="Your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          variant="outlined"
          fullWidth
          margin="normal"
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Monthly Income"
          placeholder="Your monthly income"
          value={income}
          onChange={(event) => setIncome(event.target.value)}
          variant="outlined"
          type="number"
          fullWidth
          margin="normal"
          sx={{ marginBottom: 3 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ marginTop: 2 }}
          fullWidth
        >
          Complete Onboarding
        </Button>
      </Box>
    </Container>
  );
};

export default OnboardingPage;
