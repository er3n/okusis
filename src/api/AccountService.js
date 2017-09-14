import {Alert} from 'react-native';

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

        if(response.status !== 200){
            Alert.alert('Giris Başarısız', 'Hatalı Kullanıcı Adı yada Parola');
            return false;
        }


        let jwtTooken = response.headers.get("authorization");
        Alert.alert('Giris Basarili', jwtTooken);
        return true;
    }


}