import React from 'react';

import {StackNavigator} from 'react-navigation';
import {View, StyleSheet} from 'react-native';
import {Routes} from './route';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const RootApp = StackNavigator(Routes, {headerMode: 'screen'});

export default class AppRoot extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <RootApp/>
            </View>
        );
    }
}


