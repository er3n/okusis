import React from 'react';
import {Text, FlatList} from 'react-native';

import PassengerService from '../api/PassengerService';

export default class PassengerScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {passengers: []};
    }

    componentDidMount() {
        new PassengerService().getPassengers().then(passengers => {
            this.setState({passengers})
        }).catch(error=>{
            console.error(error);
        });;
    }

    render() {
        return (
            <FlatList
                data={this.state.passengers}
                renderItem={({item}) => <Text>{item.ogrenci.isim}</Text>}
            />

        );
    }
}