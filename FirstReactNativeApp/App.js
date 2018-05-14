import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
/* components */
import LogIn from './components/LogInComponent/logIn';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <LogIn/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
