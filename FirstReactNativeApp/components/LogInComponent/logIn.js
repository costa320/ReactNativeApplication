import React from 'react';
import { StyleSheet, Text,TextInput,Button,Alert, View } from 'react-native';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password:'',
        };
      }


      setUsername(input){
        this.setState({username:input});
      }
      setPassword(input){
        this.setState({password:input});
      }

      usernameControl(input){
          if(input && input !== '' && input.trim().length >=3)  return input;
          else  return 'error';
      }
      passwordControl(input){
        if(input && input !== '' && input.trim().length >=8)return input;
        else  return 'error';
    }
      
      LoginPressed(){
            var username = this.state.username,
                password = this.state.password,
                userControl = false,
                passwControl = false;

            if(this.usernameControl(username) === 'error'){
                /* lo username non ha passato i controlli */
                userControl=false;
                Alert.alert('Controlla che lo username sia di almeno 3 caratteri, non può essere vuoto, e non puo contenere caratteri speciali e spazi')
            }
            else{
                /* lo username ha passato i controlli */
                userControl=true;

                if(this.passwordControl(password) === 'error'){
                    /* la password non ha passato i controlli */
                    passwControl=false;
                    Alert.alert('Controlla che la passowrd sia di almeno 8 caratteri, non può essere vuota, e non puo contenere caratteri speciali')
                }//end if
                else{
                    /* la password ha passato i controlli */
                    passwControl=true;
                    
                    /* QUA VERRA' fatto il login */
                    if(userControl === true && passwControl === true){
                        Alert.alert('Hai effettuato il Log In correttamente')
                    }//end if
                    else{
                        Alert.alert('Errore Log In')
                    }/* end else */
                }//end else
            }//end else
      }//end function

  render() {
    return (
        <View style={styles.containerLogIn}>
            <View style={styles.containerUsernameInput}>
                <TextInput
                    style={styles.usernameInputField}
                    placeholder="Username"
                    onChangeText={(usernameValue)=>this.setUsername(usernameValue)}
                />
            </View>
            <View style={styles.containerPasswordInput}>
                <TextInput
                    style={styles.passwordInputField}
                    secureTextEntry={true}
                    placeholder="Password"
                    onChangeText={(passwordValue)=>this.setPassword(passwordValue)}
                />
            </View>
            <View style={styles.buttonLoginContainer}>
                <Text
                    style={styles.btnLogIn}
                    onPress={() => this.LoginPressed()}>
                    LogIn
                </Text>
            </View>
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
