import MainScreen from '../components/MainScreen';
import ProfileScreen from '../components/ProfileScreen';
import {STATUSBAR_HEIGHT} from '../util/ScreenUtil';

const headerStyle = { paddingTop: STATUSBAR_HEIGHT };

export const Routes = {
    Main: {screen: MainScreen, navigationOptions: {title: 'Welcome', headerStyle}},
    Profile: {screen: ProfileScreen, navigationOptions: {title: 'Jame', headerStyle}}
};