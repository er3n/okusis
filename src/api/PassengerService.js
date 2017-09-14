import _ from 'lodash';
import {JWT_TOKEN} from './AccountService';

export default class PassengerService {

    async getPassengers() {

        let response = await fetch("http://192.168.1.26:8080/api/oku-yolcus", {
            headers: {
                'Authorization': JWT_TOKEN,
            }
        });
        let responseJson = await response.json();

        return responseJson;

    }


}