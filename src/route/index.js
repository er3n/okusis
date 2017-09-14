import MainScreen from '../components/MainScreen';
import LoginScreen from '../components/LoginScreen';
import ProfileScreen from '../components/ProfileScreen';
import RouteScreen from '../components/RouteScreen';
import PassengerScreen from '../components/PassengerScreen';
import {STATUSBAR_HEIGHT} from '../util/ScreenUtil';

const headerStyle = {paddingTop: STATUSBAR_HEIGHT};

export const Routes = {
    Route: {screen: RouteScreen, navigationOptions: {title: 'Redirect', headerLeft: null, headerStyle}},
    Main: {screen: MainScreen, navigationOptions: {title: 'Welcome', headerLeft: null, headerStyle}},
    Login: {screen: LoginScreen, navigationOptions: {title: 'Giriş', headerLeft: null, headerStyle}},
    Profile: {screen: ProfileScreen, navigationOptions: {title: 'Jame', headerStyle}},
    Passenger: {screen: PassengerScreen, navigationOptions: {title: 'Yolcu Listesi', headerStyle}}
};

