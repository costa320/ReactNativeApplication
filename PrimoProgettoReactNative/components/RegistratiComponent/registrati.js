import React , { Component } from 'react';
import { StyleSheet, Text,TextInput,Button,Alert, View, TouchableWithoutFeedback, Animated,PixelRatio } from 'react-native';

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
                    <View style={styles.viewContainer}> 
                        <Text adjustsFontSizeToFit minimumFontScale={.5} numberOfLines={1} style={styles.btnRegistratiTextStyle}>Register</Text>
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
 Alert.alert('pixelRatio: '+pixelRatio) 

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

    /* BTN buttonRegistratiContainer */
    buttonRegistratiContainer:{
            width:"60%",
            height:'11%',
            marginLeft:"20%", 
            marginTop: '5%',  
            borderWidth: 2,
            borderColor: 'white', 
            backgroundColor: '#0066cc00',
        },
        viewContainer:{

                    },
        btnRegistratiTextStyle:{
            textAlign:'center',
            textAlignVertical: "center",
            fontSize:Font, 
            lineHeight:lineHeight,
            color:'white',
            fontFamily :'YatraOne-Regular',
        }
    /*end BTN buttonRegistratiContainer  */
});