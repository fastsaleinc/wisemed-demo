import React from 'react';
import { View, Button, Text } from 'react-native';

const ErrorTab = () => {
  const throwError = () => {
    throw new Error('Este es un error simulado');
    
  };

  return (
    <View>
      <Button title="Lanzar Error" onPress={throwError} />
      <Text>Presiona el botón para simular un error</Text>
    </View>
  );
};

export default ErrorTab;
