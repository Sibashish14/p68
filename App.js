import * as React from 'react';
import {View,Text} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Facebook from './screens/Face.js';
import Instagram from './screens/Insta.js';

export default class App extends React.Component{
  render(){
    return<AppContainer/>
 }
}
const TabNavigator=createBottomTabNavigator({
  facebook:Facebook,
  instagram:Instagram
});

const AppContainer=createAppContainer(TabNavigator);