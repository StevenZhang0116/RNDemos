import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import DefaultStyles from './constants/default-styles';


const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
    });
}

export default function App() {
    const [userNumber, setUserNumber] = useState();
    const [guessRounds, setGuessRounds] = useState(0);
    const [dataLoaded, setDataLoaded] = useState(false);

    if (!dataLoaded) {
        return (
            <AppLoading
            startAsync = {fetchFonts}
            onFinish = {() => setDataLoaded(true)}
            onError = {(err) => console.log(err)}
            />
        );
    }

    fetchFonts();

    const configureNewGameHandler = () => {
        setGuessRounds(0);
        setUserNumber(null);
    };

    const startGameHandler = (selectedNumber) => {
        setUserNumber(selectedNumber);
        setGuessRounds(0);
    };

    const gameOverHandler = numOfRounds => {
        setGuessRounds(numOfRounds);
    };

    let content = <StartGameScreen onStartGame = {startGameHandler}/>;

    if (userNumber && guessRounds <= 0) {
        content = <GameScreen userChoice = {userNumber} onGameOver = {gameOverHandler} />;

    } else if (guessRounds > 0) {
        content = (
            <GameOverScreen
            roundsNumber = {guessRounds}
            userNumber = {userNumber}
            onRestart = {configureNewGameHandler}/>
        );
    }

    return (
        <SafeAreaView style = {styles.screen}>
      <Header title = "Guess a number"/>
      {content}
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});
