import React from 'react';

import {Text, AsyncStorage} from 'react-native';
import {loadUser} from '../api/AccountService';
import _ from 'lodash';


export default class RouteScreen extends React.Component {

    componentDidMount() {

        loadUser().then(jwtToken=>{
            if(_.isEmpty(jwtToken)){
                this.props.navigation.navigate('Login');
            }else{
                this.props.navigation.navigate('Main');
            }
        });

    }

    render() {
        return (
            <Text>Redirecting...</Text>
        );
    }
}