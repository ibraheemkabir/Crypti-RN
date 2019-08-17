import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Crypti, Footer } from './src/components';
import { Provider } from 'react-redux';
import Store from './src/store'

export default function App() {
  return (
    <Provider store={Store}>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <Header />
        <Crypti />
      </View>
    </Provider>

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
