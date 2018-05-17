import React from 'react';
import { StyleSheet, Text,TextInput,Button,Alert, View,TouchableWithoutFeedback,PixelRatio } from 'react-native';

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
                    <View style={styles.viewContainer}>
                        <Text numberOfLines={1} style={styles.btnLogin}>Login</Text>
                    </View>
                </TouchableWithoutFeedback>
        </View>
    );
  }
}
/* dinamic font  */
var Font;
var lineHeight;
var pixelRatio = PixelRatio.get();
/* Alert.alert('pixelRatio: '+Font) */

switch(pixelRatio){
    case 1: Font=24;
        break;
    case 2: Font=24;
        break;
    case 3: Font=24;lineHeight=31;
        break;
    case 3.5:Font=35;
        break;
}

const styles = StyleSheet.create({

    /* BTN logIn */
        buttonLoginContainer:{
            width:"60%",
            height:'11%',
            marginLeft:"20%", 
            marginTop: '40%',      
            borderWidth: 2,
            borderColor: 'black', 
            backgroundColor: '#0066cc',
        },
        viewContainer:{


        },
        btnLogin:{
            textAlign:'center',
            lineHeight:lineHeight,
            textAlignVertical: "center",
            fontSize: Font,  
            color:'white',
            fontFamily :'YatraOne-Regular',
        }
    /*end BTN logIn  */
});
