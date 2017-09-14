import React from 'react';
import {Text, FlatList, View, Switch} from 'react-native';
import PassengerService from '../api/PassengerService';

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
                renderItem={({item}) =>
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text>{item.ogrenci.isim}</Text>
                        <Switch disabled={false} value={item.bindiMi}
                                onValueChange={() => this.ogrenciDurumuDegisti(item)}/>
                    </View>
                }
            />

        );
    }
}