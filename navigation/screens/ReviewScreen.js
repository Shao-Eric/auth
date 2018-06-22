import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';
class ReviewScreen extends Component {
  //adding static sets the property to the class instead of the instance
  //static color = 'red'
  //const screen = new ReviewScreen();
  //screen.color //undefined
  //ReviewScreen.color //'red'

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Review Jobs',
      headerRight: (
        <Button
          title="Settingsss"
          onPress={() => navigation.navigate('settings')}
          backgroundColor="rgba(0,0,0,0)"
          color="rgba(0,122,255,1)"
        />
      ),
      style: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      }
    };
  };
  render() {
    return (
      <View>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}

export default ReviewScreen;
