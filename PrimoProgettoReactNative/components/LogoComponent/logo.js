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
            <Image source={logo}
            style={styles.img}/>
    );
  }
}

const styles = StyleSheet.create({

        img:{
            marginTop:'5%',
            marginLeft:'25%',
            width:'50%',
            height:'65%',
            zIndex:9,
/*             borderWidth: 3,
            borderColor: 'blue',  */
        }
});
