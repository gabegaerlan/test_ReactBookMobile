/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
// had to add TextInput here to use it. 
import { Platform, StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.titleText}>
          BOOKMOBILE
        </Text>

        <View style={[styles.placement_view, styles.img_placement]}>
          <Image source = {require('./assets/bmobile.png')} style= {styles.image}/>
        </View>

        <View style={[styles.placement_view, styles.home_text]}>
          <Text>This is Home Text</Text>
        </View>

        <View style={[styles.placement_view, styles.btn_navigation]}>
          <Button onPress={() => {Alert.alert('This will take you to Main Menu');}} title='Main Menu'/>
          <Button onPress={() => {Alert.alert('This will take you to Locations');}} title='Locations'/>
          <Button onPress={() => {Alert.alert('This will take you to Assets');}} title='Assets'/>
          <Button onPress={() => {Alert.alert('This will take you to Alerts');}} title='Alerts'/>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
  },

  titleText: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },

  image: {
    height: 300,
    width: 400
  },

  placement_view: {
    flex: .5,
    fontSize: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },

  img_placement: {
    flex: 3,
    backgroundColor: '#DDFFF7'
  },

  home_text: {
    flex: 2,
    backgroundColor: '#98FFE7'
  },

  btn_navigation: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1EFFCC',
    alignItems: 'flex-end',
  }
});
