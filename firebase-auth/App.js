import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import firebase from 'firebase';

export default class App extends React.Component {
  componentDidMount(){
    const config = {
      apiKey: "AIzaSyDTgnDLfVTzs9YQMfzwkCM75ZSwxz1mBdw",
      authDomain: "authentication-2f71a.firebaseapp.com",
      databaseURL: "https://authentication-2f71a.firebaseio.com",
      projectId: "authentication-2f71a",
      storageBucket: "authentication-2f71a.appspot.com",
      messagingSenderId: "748005494118"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
