import React from 'react';
import { StyleSheet, Text, View, Image,KeyboardAvoidingView, } from 'react-native';
import LoginForm from './LoginForm';
import firebase from 'firebase';


export default class App extends React.Component {


  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
      //logo:
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../images/disney.png')}
          />
          <Text style={styles.title}>The Disney World App</Text>
        </View>
        

        //form:
        <View style={styles.formContainer}>
          <LoginForm />
        </View>

      </KeyboardAvoidingView>
    );
  }
}

const styles = {
  container:{
    flex:1,
    backgroundColor:'#3498db',
    opacity:0.9
  },
  logoContainer:{
    alignItems:'center',
    flexGrow:1,
    justifyContent:'center',
    marginTop:35
  },
  logo:{
    width:150,
    height:150
  },
  title:{
    color:'#FFF',
    marginTop:30,
    width:160,
    textAlign:'center',
    opacity:0.8
  },
  joinContainer:{
    paddingVertical:12,
    marginBottom:15
  }
}
