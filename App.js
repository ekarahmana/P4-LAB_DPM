// Import dependencies
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import FutsalScoreApp from './FutsalScoreApp';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FutsalScoreApp />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
