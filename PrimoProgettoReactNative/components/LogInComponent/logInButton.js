import React from 'react';
import { StyleSheet, Text,TextInput,Button,Alert, View,TouchableWithoutFeedback } from 'react-native';

export default class LoginButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
      }

      handleLoginButtonClick(){
        Alert.alert('11111111111111!!!!!!!')
      }

  render() {
    return (
        <View style={styles.buttonLoginContainer}>
                <TouchableWithoutFeedback  onPress={this.handleLoginButtonClick}>
                    <View>
                        <Text style={styles.btnLogin}>Login</Text>
                    </View>
                </TouchableWithoutFeedback>
        </View>
    );
  }
}

const styles = StyleSheet.create({

    /* BTN logIn */
        buttonLoginContainer:{
            width:260,
            height:35,
            marginLeft:50,
            marginRight:50,
/*             borderWidth: 1,
            borderColor: '#d6d7da', */
            marginTop: 125,           
            backgroundColor: '#0066cc',
        },
        btnLogin:{
            textAlign:'center',
            lineHeight:38,
            fontSize:25,
            color:'white',
            fontFamily :'YatraOne-Regular',
        }
    /*end BTN logIn  */
});
