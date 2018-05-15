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

      handleLoginButtonClick(){

      }

  render() {
    return (
        <View style={styles.buttonLoginContainer}>
            <Button
                style={styles.btnLogin}
                onPress={()=>this.handleLoginButtonClick()}
                title="Learn More"
                accessibilityLabel="Learn more about this purple button"
                />
        </View>
    );
  }
}

const styles = StyleSheet.create({

    /* BTN logIn */
        buttonLoginContainer:{
            flex:1,
            borderWidth: 1,
            borderColor: '#d6d7da',
            marginTop: 550,           
            backgroundColor: 'rgba(255, 255, 255, 0)',
        },
        btnLogin:{
            textAlign:'center',
            lineHeight:58,
            fontSize:50,
            fontWeight:'800', 
            fontFamily :'Cochin',
        }
    /*end BTN logIn  */
});
