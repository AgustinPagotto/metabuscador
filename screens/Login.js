import React, { Component } from 'react';
import { withNavigation} from 'react-navigation';
import FirebaseLogin from "../FirebaseLogin";


const Login = ({navigation}) => {

    return(
        <FirebaseLogin login = {()=> navigation.navigate('SearchScreen')}
        />

    )
}

export default Login;