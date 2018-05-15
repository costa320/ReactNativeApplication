import React from 'react';
import { StyleSheet, Text, View,ImageBackground  } from 'react-native';
/* components */
/* import LogIn from './components/LogInComponent/logIn'; */
import backgroundImage from './assets/img/background.jpg';
import LoginButton from './components/LogInComponent/logInButton';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <ImageBackground  style={styles.container} source={backgroundImage}>
        <LoginButton/>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
