import React from 'react';
import {Text, FlatList, View, Switch} from 'react-native';
import PassengerService from '../api/PassengerService';
import PassengerItem from './PassengerItem';

export default class PassengerScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {passengers: []};
    }

    loadPassengers() {
        new PassengerService().getPassengers().then(passengers => {
            this.setState({passengers})
        }).catch(error => {
            console.error(error);
        });
    }

    componentDidMount() {
        this.loadPassengers();
    }

    ogrenciDurumuDegisti(item) {
        item.bindiMi = !item.bindiMi;

        new PassengerService().updatePassenger(item).then(() => {
            this.loadPassengers();
        });

    }

    render() {

        return (
            <FlatList
                data={this.state.passengers}
                keyExtractor={(item, index) => item.id}
                renderItem={({item}) =>
                    <PassengerItem passenger={item}/>
                }
            />

        );
    }
}