
import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,ImageBackground, Button,Alert } from 'react-native';
import imageBackground from './assets/img/background.jpg';
import LoginButton from './components/LogInComponent/logInButton';
import Logo from './components/LogoComponent/logo';
import RegistratiButton from './components/RegistratiComponent/registrati';
import RegisterView from './components/RegisterViewComponent/registerView';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
        displayRegisterView:false,
    };
  }
  setDisplayRegisterView=(input)=>{
    this.setState({displayRegisterView:input});
  }

  render() {
    return (
      <ImageBackground  style={styles.container} source={imageBackground}>
        <Logo/>
        <LoginButton/>
        <RegistratiButton setDisplayRegisterView={this.setDisplayRegisterView}/>
        
        <RegisterView setDisplayRegisterView={this.setDisplayRegisterView} displayRegisterView={this.state.displayRegisterView}/>
      </ImageBackground >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
