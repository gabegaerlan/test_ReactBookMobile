import React, {Component} from 'react';
import { Platform, StyleSheet, Text, TextInput, Button, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
// import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default class RegisterPage extends Component {
    render() {
        return(
            <View style = {styles.container}>
                <View style = {styles.registerform}>
                    <TextInput style = {styles.input}>
                    placeholder = "Enter your name"
                    returnKeyType = "next"
                    onSubmitEditing = {() => this.emailinput.focus()}
                    </TextInput>
                    <TextInput style = {styles.input}>
                    placeholder = "Enter your email"
                    returnKeyType = "next"
                    onSubmitEditing = {() => this.passwordInput.focus()}
                    keyboardType = "email-address"
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    ref = {(input) => this.emailinput = input}
                    </TextInput>
                    <TextInput style = {styles.input}>
                    placeholder = "Enter passowrd"
                    returnKeyType = "go"
                    secureTextEntry
                    ref = {(input) => this.passwordInput = input}
                    </TextInput>
                    <TouchableOpacity style = {styles.buttoncontainer} onPress = {() => this.props.navigation.navigate('Login')}>
                    <Text style = {styles.buttontext}> Sign Up </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}