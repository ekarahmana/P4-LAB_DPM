import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Scoreboard = ({ teamName, score, onIncrease, onDecrease }) => {
  return (
    <View style={styles.teamContainer}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={onIncrease} />
        <Button title="-" onPress={onDecrease} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  teamContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 48,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120,
  },
});

export default Scoreboard;
