import { useFonts, Ubuntu_400Regular, Ubuntu_700Bold } from '@expo-google-fonts/ubuntu';

export default function Fonte() {
  const [fonteCarregada] = useFonts({
    "UbuntuBold": Ubuntu_700Bold, 
    "UbuntuRegular": Ubuntu_400Regular,
  });

  return fonteCarregada;
}
