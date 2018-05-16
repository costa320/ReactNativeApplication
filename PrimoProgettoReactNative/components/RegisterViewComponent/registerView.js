import React , { Component } from 'react';
import { StyleSheet, Text,TextInput,Button,Alert, View, TouchableWithoutFeedback, Animated } from 'react-native';

export default class RegisterView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            transition: new Animated.Value(1000), 
        };
      }
      componentDidMount() {
          var displayRegisterView = this.props.displayRegisterView;
        if (displayRegisterView == true) this.startTransition();
        
      }
      componentWillReceiveProps(nextProps){
        var displayRegisterView = nextProps.displayRegisterView;
        if (displayRegisterView === true) this.startTransition();
      }


      startTransition=()=>{
        Animated.timing(                  // Animate over time
            this.state.transition,            // The animated value to drive
            {
              toValue: 20,                   // Animate to opacity: 1 (opaque)
              duration: 1000,              // Make it take a while
            }
          ).start(); 
      }

      EntraButtonClickHandle(){
          Alert.alert('SEI ENTRATO!')
      }


  render() {
    let { transition } = this.state;

    return (
                <Animated.View style={[styles.container,{marginLeft: transition}]}>
                    <Button
                        onPress={this.EntraButtonClickHandle}
                        title="ENTRA"
                        color="#841584"
                        accessibilityLabel="ENTRA"
                    />
                </Animated.View>
    );
  }
}

const styles = StyleSheet.create({

    container:{
            width:320,
            height:525,
            position:'absolute', 
            marginTop:20,
            borderWidth: 1,
            borderColor: '#d6d7da', 
            backgroundColor: 'white',
            zIndex:100,
        }

});