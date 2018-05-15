import React from 'react';
import { StyleSheet, Text,TextInput,Button,Alert, View } from 'react-native';

export default class LoginButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password:'',
        };
      }

  render() {
    return (
        <View style={styles.containerLogIn}>
            <Text>CIAOOO</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    containerLogIn: {
        /*             borderColor: 'red', borderWidth: 1, */
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
  },

    /* input username */
        containerUsernameInput:{

            width: 225, 
            height: 60, 
            backgroundColor: 'powderblue', 
        },
        usernameInputField:{
            textAlign:'center',
            lineHeight:65,
            fontSize:20,
            fontWeight:'bold',
            width: 225, 
            height: 60, 
            color:'white',
        },
    /* input username */

    /* input password */
        containerPasswordInput:{
            width: 225, 
            height: 60, 
            backgroundColor: 'skyblue', 
        },
        passwordInputField:{
            textAlign:'center',
            lineHeight:65,
            fontSize:20,
            fontWeight:'bold',
            width: 225, 
            height: 60, 
            color:'white',
        },
    /* end input password */

    /* BTN logIn */
        buttonLoginContainer:{
            width: 225, 
            height: 60, 
            backgroundColor: 'steelblue',
            alignItems: 'center',
        },
        btnLogIn:{
            textAlign:'center',
            lineHeight:58,
            fontSize:50,
            fontWeight:'800',
            width: 225, 
            height: 60, 
            color:'white',
        }
    /*end BTN logIn  */
});
