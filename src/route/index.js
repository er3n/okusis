import MainScreen from '../components/MainScreen';
import LoginScreen from '../components/LoginScreen';
import ProfileScreen from '../components/ProfileScreen';
import {STATUSBAR_HEIGHT} from '../util/ScreenUtil';

const headerStyle = { paddingTop: STATUSBAR_HEIGHT };

export const Routes = {
    LoginScreen: {screen: LoginScreen, navigationOptions: {title: 'Giriş', headerStyle}},
    Main: {screen: MainScreen, navigationOptions: {title: 'Welcome', headerStyle}},
    Profile: {screen: ProfileScreen, navigationOptions: {title: 'Jame', headerStyle}}
};