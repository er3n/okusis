
import React from 'react';
import {Text, View, Switch} from 'react-native';
import PassengerService from '../api/PassengerService';

export default class PassengerItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {passenger: this.props.passenger};
    }

    togglePassengerStatus() {

        var passengerCopy = {...this.state.passenger, bindiMi: !this.state.passenger.bindiMi}

        new PassengerService().updatePassenger(passengerCopy).then(() => {
            this.setState({passenger: passengerCopy})
        });

    }

    render() {

        return (
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text>{this.state.passenger.ogrenci.isim}</Text>
                <Switch disabled={false} value={this.state.passenger.bindiMi}
                        onValueChange={() => this.togglePassengerStatus()}/>
            </View>

        );
    }


}