import {Alert} from 'react-native';

import {AsyncStorage} from 'react-native'

export default class AccountService {


    async authenticate(username, password) {

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
        await AsyncStorage.setItem('@OkusisStore:username', username);

        let dbTooken = await AsyncStorage.getItem('@OkusisStore:username');

        Alert.alert('Giris Basarili', username);
        return true;
    }

    async unauthenticate(username, password) {

        await AsyncStorage.setItem('@OkusisStore:jwtToken', null);
        await AsyncStorage.setItem('@OkusisStore:username', null);
    }


}