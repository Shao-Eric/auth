import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import Login from './src/components/Login';
import Spinner from './src/components/Spinner';
import CardSection from './src/components/CardSection'

export default class App extends React.Component {
  state={
    loggedIn:null
  }

  componentWillMount(){
    firebase.initializeApp({
    apiKey: "AIzaSyBnDyZYTldglg7yy6Eft0qTO1ax5upfNj0",
    authDomain: "disney-5517b.firebaseapp.com",
    databaseURL: "https://disney-5517b.firebaseio.com",
    projectId: "disney-5517b",
    storageBucket: "disney-5517b.appspot.com",
    messagingSenderId: "85484261912"
  });

  firebase.auth().onAuthStateChanged((user) =>{
      if(user){
        this.setState({loggedIn:true});
      }else{
        this.setState({loggedIn:false})
      }
    });
  }

renderContent(){
  switch(this.state.loggedIn){
    case true:
      return(
        <View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={()=> firebase.auth().signOut()}
        >
          <Text style={styles.buttonText}>Log Out</Text>
        </TouchableOpacity>
        </View>
      )

    case false:
      return(
        <Login />
      )
    default:
      return(
        <Spinner size="small" />
      )
  }
}

  render() {
    return (
      <View style={styles.viewContainer}>
          {this.renderContent()}
      </View>
    )
  }
}

const styles ={
  logoutContainer:{
    paddingVertical:12,
    marginBottom:15,
  },
  viewContainer:{
    flex:1,
  },
  buttonContainer:{
    backgroundColor:'red',
    paddingVertical:12,
    paddingTop:50
  },
  buttonText:{
    textAlign:'center',
    color:'#FFFFFF',
    fontWeight:'bold',
    fontSize:18
  },
}
