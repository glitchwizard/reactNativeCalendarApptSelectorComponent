import React from 'react';
import Background from './components/background.tsx';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <Background />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "column",
  },
  calApptComponentContainer: {

  },
  image: {
    resizeMode: "contain",
    height: 318,
  }
});