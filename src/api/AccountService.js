import {Alert} from 'react-native';

export default class AccountService {


    authenticate(username, password) {
        fetch("http://192.168.1.26:8080/api/authenticate", {
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
        })
            .then((response) => {
                if(response.status === 200){
                    return response.json();
                }else {
                    throw "Kullanici Adı/Şifre Hatalı";
                }
            })
            .then(responseJson=>{
                Alert.alert('Giris Basarili', responseJson.id_token);
            })
            .catch((error) => {
                Alert.alert('Giriş Basarısız', error);
            });
    }


}