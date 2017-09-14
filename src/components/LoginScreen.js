import React from 'react';

import {View, Button, Text, TextInput, Alert} from 'react-native';
import _ from 'lodash'

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {username: '', password: '', isProcessing: false};
    }

    submit(e) {

        this.setState({isProcessing: true});

        fetch('https://aracla.com/api/models')
            .then((response) => response.json())
            .then((responseJson) => {
                Alert.alert('Hata', responseJson[0].code);
                this.setState({isProcessing: false});
            })
            .catch((error) => {
                console.error(error);
                this.setState({isProcessing: false});
            });


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
                            color="#841584"
                            disabled={_.isEmpty(this.state.username) || _.isEmpty(this.state.password) || this.state.isProcessing}
                    />

                </View>


            </View>

        );
    }
}