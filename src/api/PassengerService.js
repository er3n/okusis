import _ from 'lodash';
import {JWT_TOKEN} from './AccountService';

export default class PassengerService {

    async getPassengers() {

        let response = await fetch("http://www.ozelcozum.net/api/oku-yolcus", {
            headers: {
                'Authorization': JWT_TOKEN,
            }
        });
        let responseJson = await response.json();

        return responseJson;

    }

    async updatePassenger(passenger) {

        let response = await fetch("http://www.ozelcozum.net/api/oku-yolcus", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': JWT_TOKEN,
            },
            body: JSON.stringify(passenger)
        });

        return response;

    }


}