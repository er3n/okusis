import React from 'react';

import {View, Button, Text, TextInput, Alert} from 'react-native';
import _ from 'lodash'
import AccountService from '../api/AccountService';

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {username: '', password: '', isProcessing: false};
    }

    submit() {

        //this.setState({isProcessing: true});

        new AccountService().authenticate(this.state.username, this.state.password);


    }


    render() {
        return (


            <View style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
            }}>

                <View>
                    <Text>Kullanıcı Bilgilerini Giriniz</Text>
                </View>

                <View style={{alignSelf: 'stretch'}}>

                    <TextInput
                        style={{height: 80, fontSize: 21, padding: 4}}
                        placeholder="Kullanıcı Adı"
                        autoCapitalize="none"
                        onChangeText={(username) => this.setState({username})}
                        value={this.state.username}
                    />

                </View>

                <View style={{alignSelf: 'stretch'}}>

                    <TextInput
                        style={{height: 80, fontSize: 21, padding: 4}}
                        placeholder="Şifre"
                        autoCapitalize="none"
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                    />

                </View>

                <View style={{alignSelf: 'stretch'}}>

                    <Button style={{width: 80}}
                            onPress={(e) => this.submit(e)}
                            title="Giriş"
                            disabled={_.isEmpty(this.state.username) || _.isEmpty(this.state.password) || this.state.isProcessing}
                    />

                </View>


            </View>

        );
    }
}