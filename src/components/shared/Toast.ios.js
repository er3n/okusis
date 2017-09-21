import {ToastAndroid} from 'react-native';

export default function toast(message) {
    ToastAndroid.show(message, ToastAndroid.LONG);
}

