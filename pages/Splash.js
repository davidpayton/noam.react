
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import { Button } from 'react-native';
import ActionBar from 'react-native-action-bar';
import PropTypes from 'prop-types';
import {StackNavigator,} from 'react-navigation';
import Main from './Main'
import DrawerLayout from 'react-native-drawer-layout'
import Menu from './Menu'
import Tab from './Tab'
const instructions = Platform.select({
  ios: 'Welcome to Noam,\n' +
    'your indoor assistant for\n' +
    'accessible buildings\n\n' +
    "We can tell you what's in\n" +
    "the building and where",
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class Splash extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      titleText: "Noam ",
      bodyText: "You're indoor assistant",
      drawerClosed: true,
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.setDrawerState = this.setDrawerState.bind(this);
  }

  setDrawerState(){
    this.setState({
      drawerClosed: !this.state.drawerClosed,
    });
  }

  toggleDrawer = () => {
    if(this.state.drawerClosed)
    {
      this.DRAWER.openDrawer();
    } else {
      this.DRAWER.closeDrawer();
    }
  }
   isLastUserplace(){  
    // real:  return( userLastPlaceID  == currentPlaceID)
    return true; // for wireframe  version
  }
  isBluetoothOn(){  
    // real:  return compassAPI.hasBlootooth() // or something like this
    return false; // for wireframe  version
  }
  _turnOnBluetooth()
  {
      console.log("bluetooth")
      Alert.alert("Please turn on your bluetooth!")
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

      <DrawerLayout
        drawerWidth={200}
        
        
        ref={drawerElement => {
          this.DRAWER = drawerElement;
        }}
        drawerPosition={DrawerLayout.positions.Right}
        onDrawerOpen={this.setDrawerState}
        onDrawerClose={this.setDrawerState}
        renderNavigationView={() => <Menu nav = {navigate}/>}
        >
                  <ActionBar
                    containerStyle={styles.bar}
                    titleStyle={styles.title}
                    title={'Noam'}
                    
                    leftIconName={'location'}
                    
                    onLeftPress={() => console.log('Left!')}
                    
                    rightIcons={[
                        {
                            name: 'menu',
                            onPress: this.toggleDrawer,
                        },
                    ]}
                />

      <Text style={styles.assistant}>
            <Text style={styles.welcome}>
              {this.state.titleText}
            </Text>
            <Text onPress={() => navigate('TabPage')}>
            {this.state.bodyText}
              </Text>
          </Text>

        <Text style={styles.instructions}>
          {instructions}
        </Text>

        <View style={styles.buttonContainer}>
          <Button onPress={this._turnOnBluetooth} title="Turn bluetooth on" color="#FFFFFF" accessibilityLabel="Tap on Me"/>
        </View>
        </DrawerLayout>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#F5FCFF',
  },

  welcome: {
    fontSize: 35,
    color: '#6600ff',

  },
  instructions: {
    marginTop: 40,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 80,
    fontSize: 20,
  },
  assistant:{
    fontSize: 24,
    marginTop:60,
    marginLeft: 20,
    marginRight: 20,

  },
  title:{
    textAlign: 'center',
    fontSize: 20,
  },
  buttonContainer: {
    backgroundColor: '#2E9298',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    marginRight: 20,
    marginLeft: 20,
  },
});
