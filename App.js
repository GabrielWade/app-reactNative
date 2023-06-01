import React from 'react';
import { StatusBar, SafeAreaView, Text, View } from 'react-native';
import { useFonts, Ubuntu_400Regular, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';


import Index from './src/telas/Home';
import Camera from './src/telas/Camera/camera';
export default function App() {
  const [fonteCarregada] = useFonts({
    "UbuntuBold": Ubuntu_700Bold, 
    "UbuntuRegular": Ubuntu_400Regular,
  });

  if (!fonteCarregada) {
    return <Text>Carregando...</Text>
  }

  return (
    <SafeAreaView>
      <StatusBar />
        <Index />
    </SafeAreaView>
  );
}

