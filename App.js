import React from 'react';
import { Text } from 'react-native';
import CameraRotas from './src/rotas/cameraRotas';
import Fonte from './src/componentes/Fonte';

export default function App() {
  const fonteCarregada = Fonte();

  if (!fonteCarregada) {
    return <Text>Carregando...</Text>;
  }

  return <CameraRotas />;
}
