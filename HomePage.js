import React, {Component} from 'react';
import { Platform, StyleSheet, Text, TextInput, Button, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
// import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default class HomePage extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text style = {styles.text}> Welcome to HomePage</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding:  20,
        flex: 1,
        backgroundColor: '#ecf0f1',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20
    }

});