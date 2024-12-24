import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ResetButton = ({ onReset }) => {
  return (
    <View style={styles.resetContainer}>
      <Button title="Reset" onPress={onReset} />
    </View>
  );
};

const styles = StyleSheet.create({
  resetContainer: {
    marginTop: 30,
  },
});

export default ResetButton;
