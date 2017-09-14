import React from 'react';
import {Button, View} from 'react-native';
import AccountService from '../api/AccountService';

export default class MainScreen extends React.Component {

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Button
                    title="Go to Jane's profile"
                    onPress={() =>
                        navigate('Profile', {name: 'Jane'})
                    }
                />

                <Button
                    title="Çıkış"
                    onPress={() => new AccountService().unauthenticate(navigate)
                    }
                />

            </View>

        );
    }
}