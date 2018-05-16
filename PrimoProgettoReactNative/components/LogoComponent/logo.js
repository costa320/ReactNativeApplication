import React from 'react';
import { StyleSheet, Text,TextInput,Button,Alert, View, Image } from 'react-native';
import logo from '../../assets/img/logo.png';

export default class Logo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
      }

  render() {
    return (
        <View style={styles.imgContainer}>
            <Image source={logo}
            style={styles.img}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    /* BTN Logo */
        imgContainer:{
            marginTop:110,
            marginLeft:45,
            zIndex:9,
        },
        img:{
            width:225,
            height:225,
            zIndex:9,
        }
    /*end BTN Logo  */
});
