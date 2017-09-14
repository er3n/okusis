import {Alert} from 'react-native';

import {AsyncStorage} from 'react-native'
import _ from 'lodash';

export default class AccountService {

    static JWT_TOKEN = null;

    async loadUser() {

        JWT_TOKEN = await AsyncStorage.getItem('@OkusisStore:jwtToken');

        if (_.isEmpty(JWT_TOKEN)) {
            return null;
        }

        let response = await fetch("http://192.168.1.26:8080/api/authenticate", {
            headers: {
                'Authorization': JWT_TOKEN,
            }
        });

        if (response.status !== 200) {
            return null;
        }

        return JWT_TOKEN;

    }


    async authenticate(username, password, navigate) {

        let response = await fetch("http://192.168.1.26:8080/api/authenticate", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
                rememberMe: true
            })
        });

        if (response.status !== 200) {
            Alert.alert('Giris Başarısız', 'Hatalı Kullanıcı Adı yada Parola');
            return false;
        }


        let jwtTooken = response.headers.get("authorization");

        await AsyncStorage.setItem('@OkusisStore:jwtToken', jwtTooken);

        Alert.alert('Giris Basarili', "Anasayfaya yönlenmek için tamama basınız",
            [
                {text: 'Tamam', onPress: () => navigate("Route")},
            ],
            { cancelable: false });
        return true;
    }

    async unauthenticate(navigate) {

        await AsyncStorage.removeItem('@OkusisStore:jwtToken', null);

        navigate("Route");
    }


}