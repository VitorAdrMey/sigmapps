import React, { useContext } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import TemaContext, { TemaProvider } from './src/contexts/TemaContext';
import HomeScreen from './src/components/HomeScreen'; // Use importação padrão se foi exportado como padrão
import TrocaTema from './src/components/TrocaTema';

export default function App() {
  let tema = useContext(TemaContext);
  return (
    <TemaProvider>
      <PaperProvider theme={tema}>
        <TrocaTema />
      </PaperProvider>
    </TemaProvider>
  );
}