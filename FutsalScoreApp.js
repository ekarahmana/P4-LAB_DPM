// Import dependencies
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Scoreboard from './Scoreboard';
import ResetButton from './ResetButton';

const FutsalScoreApp = () => {
  // State for scores
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  // Function to increase score
  const increaseScore = (team) => {
    if (team === 'A') {
      const newScore = teamAScore + 1;
      setTeamAScore(newScore);
      if (newScore === 10) alert('TIM A MENANGGGG');
    } else {
      const newScore = teamBScore + 1;
      setTeamBScore(newScore);
      if (newScore === 10) alert('TIM B MENANG');
    }
  };

  // Function to decrease score
  const decreaseScore = (team) => {
    if (team === 'A') {
      if (teamAScore > 0) setTeamAScore(teamAScore - 1);
    } else {
      if (teamBScore > 0) setTeamBScore(teamBScore - 1);
    }
  };

  // Function to reset scores
  const resetScores = () => {
    setTeamAScore(0);
    setTeamBScore(0);
  };

  return (
    <View style={styles.container}>
      <Scoreboard
        teamName="Tim A"
        score={teamAScore}
        onIncrease={() => increaseScore('A')}
        onDecrease={() => decreaseScore('A')}
      />
      <Scoreboard
        teamName="Tim B"
        score={teamBScore}
        onIncrease={() => increaseScore('B')}
        onDecrease={() => decreaseScore('B')}
      />
      <ResetButton onReset={resetScores} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#61dafb',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default FutsalScoreApp;
