/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import HomeView from './src/home/home_view';

AppRegistry.registerComponent(appName, () => HomeView);
