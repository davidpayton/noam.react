import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Splash from './pages/Splash';
import Main from './pages/Main';
import Tab from './pages/Tab';
import AutoUpdate from './pages/setting_pages/AutoUpdate';
import Calibrate from './pages/setting_pages/Calibrate';
import Personal from './pages/setting_pages/Personal';
import Profile from './pages/setting_pages/Profile';
import SetHome from './pages/setting_pages/SetHome';
import Voice from './pages/setting_pages/Voice';
import Help from './pages/Help'
const App = StackNavigator(
    {
        SplashPage: {
            screen: Splash,
            navigationOptions: {
                headermode: 'screen',
                header: null
              },

        },
        MainPage: {
            screen: Main,
            navigationOptions: {
                headermode: 'screen',
                header: null
              },
        },
        TabPage:{
            screen:Tab,
            navigationOptions: {
                headermode: 'screen',
                header: null
              },
        },

        AutoUpdate: {
            screen: AutoUpdate,
            navigationOptions: {
                headermode: 'screen',
                header: null
              },

        },
        Calibrate: {
            screen: Calibrate,
            navigationOptions: {
                headermode: 'screen',
                header: null
              },
        },
        Personal:{
            screen:Personal,
            navigationOptions: {
                headermode: 'screen',
                header: null
              },
            },
        Profile:{
            screen:Profile,
            navigationOptions: {
                headermode: 'screen',
                header: null
              }, 
            },  
         SetHome:{
            screen:SetHome,
            navigationOptions: {
                headermode: 'screen',
                header: null
              },   

                           

        },

        Voice:{
            screen:Voice,
            navigationOptions: {
                headermode: 'screen',
                header: null
              },  
            },  
            Help:{
                screen:Help,
                navigationOptions: {
                    headermode: 'screen',
                    header: null
                  }, 
            },
    },

    {
        initialRouteName: 'SplashPage',
      }
);

export default App;

