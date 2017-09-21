import {Alert} from 'react-native';

import {AsyncStorage} from 'react-native'
import _ from 'lodash';

export let JWT_TOKEN = null;

export async function loadUser() {

    JWT_TOKEN = await AsyncStorage.getItem('@OkusisStore:jwtToken');

    if (_.isEmpty(JWT_TOKEN)) {
        return null;
    }

    let response = await fetch("http://www.ozelcozum.net/api/authenticate", {
        headers: {
            'Authorization': JWT_TOKEN,
        }
    });

    if (response.status !== 200) {
        return null;
    }

    return JWT_TOKEN;

}

export async function authenticate(username, password, navigate) {

    let response = await fetch("http://www.ozelcozum.net/api/authenticate", {
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
        {cancelable: false});
    return true;
}


export async function unauthenticate(navigate) {

    await AsyncStorage.removeItem('@OkusisStore:jwtToken', null);

    navigate("Route");
}