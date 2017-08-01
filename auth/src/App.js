import React, { Component } from 'react';

import {View} from 'react-native';



import  firebase  from 'firebase';
import  {Header}  from './components/common';
import  LogInForm from './components/LogInForm';

 class App extends Component {

     componentWillMount()
     {
         firebase.initializeApp({
             apiKey: 'AIzaSyDcmMqu8C9zWQcDf482WOj4J0PGlgOYZW0',
             authDomain: 'auth-react-native-855b8.firebaseapp.com',
             databaseURL: 'https://auth-react-native-855b8.firebaseio.com',
             projectId: 'auth-react-native-855b8',
             storageBucket: 'auth-react-native-855b8.appspot.com',
             messagingSenderId: '657522420050'
         });
     }

    render() {
        return (
            <View >
                <Header headerText="Log In" />
                <LogInForm/>

            </View>
        );
    }
}

export default App;


