import React from 'react';
import {createSwitchNavigator, createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Welcome from '../screens/Welcome.js';
import LogIn from '../screens/LogIn.js';
import SignUp from '../screens/SignUp.js';
import Brower from '../screens/Brower.js';
import Explore from '../screens/Explore.js';
import Detail from '../screens/Detail.js';
import Setting from '../screens/Setting.js';

const AuthStack = createStackNavigator({
    Welcome: Welcome,
    LogIn: LogIn,
    SignUp: SignUp
})
const HomeStack = createStackNavigator({
    Brower: Brower,
    Setting: Setting,
    Explore: Explore,
    Detail: Detail
})
const Navigation = createSwitchNavigator({
    AuthStack: AuthStack,
    HomeStack: HomeStack
})
export default createAppContainer(Navigation);