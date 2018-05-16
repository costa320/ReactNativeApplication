import React , { Component } from 'react';
import { StyleSheet, Text,TextInput,Button,Alert, View, TouchableWithoutFeedback, Animated } from 'react-native';

export default class RegistratiButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           /*  transition: new Animated.Value(0),  */
        };
      }
      componentDidMount() {
                       // Starts the animation
      }

      handleregistratiButtonClick=()=>{
        /* Alert.alert('You tapped the button!'); */

/*         Animated.timing(                  // Animate over time
            this.state.transition,            // The animated value to drive
            {
              toValue: 100,                   // Animate to opacity: 1 (opaque)
              duration: 1000,              // Make it take a while
            }
          ).start();  */
          this.props.setDisplayRegisterView(true);
      }

  render() {
    /* let { transition } = this.state; */

    return (
        <View style={styles.buttonRegistratiContainer}>
                

{/*             <View style={{flex: 1}}>
                <Animated.View style={{width:50, height: 50, backgroundColor: 'powderblue',marginLeft: transition}}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </Animated.View>
            </View> */}

                <TouchableWithoutFeedback  onPress={this.handleregistratiButtonClick}>
                    <View>
                        <Text style={styles.btnRegistratiTextStyle}>Register</Text>
                    </View>
                </TouchableWithoutFeedback>
        </View>         

    );
  }
}

const styles = StyleSheet.create({

    /* BTN buttonRegistratiContainer */
    buttonRegistratiContainer:{
            width:260,
            height:25,
            marginLeft:50,
            marginRight:50,
            borderWidth: 1,
            borderColor: '#d6d7da', 
            marginTop: 15,           
            backgroundColor: '#0066cc00',
        },
        btnRegistratiTextStyle:{
            textAlign:'center',
            lineHeight:25,
            fontSize:15,
            color:'white',
            fontFamily :'YatraOne-Regular',
        }
    /*end BTN buttonRegistratiContainer  */
});