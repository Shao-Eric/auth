import React, {Component} from 'react';
import {Text, View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner, CardSection} from './src/components/common';
import LoginForm from './src/components/LoginForm';


class App extends Component{
  state = {loggedIn: null};

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyD17emRvz1rEBDOz2nhWeeTSR8IIcC9oSw",
      authDomain: "authentication-c856e.firebaseapp.com",
      databaseURL: "https://authentication-c856e.firebaseio.com",
      projectId: "authentication-c856e",
      storageBucket: "authentication-c856e.appspot.com",
      messagingSenderId: "258772857353"
  });

  firebase.auth().onAuthStateChanged((user) => {
    if(user){
      this.setState({ loggedIn: true });
    }else{
      this.setState({ loggedIn: false });
    }
  });
  }

  renderContent(){
    switch(this.state.loggedIn){
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />
      default:
        return <Spinner size="large"/>
    }
  }

  render(){
    return(
      <View>
        <Header headerText="Authentication"/>
        {this.renderContent()}
      </View>
    )
  }
}
export default App;
