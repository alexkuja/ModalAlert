import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modals from './src/components/Modals';

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const abrirModal = async () => {
    console.log(1)
    setShowModal(true);
    console.log(showModal)
  }

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => abrirModal()}>
        <Text>Press Me</Text> 
      </TouchableOpacity>
      {showModal ? (
        <>
      <Modals setShowModal={setShowModal}/>
      <Text>Messi</Text>
      </>
      ): (
        <Text>Hola</Text>
      )}
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
