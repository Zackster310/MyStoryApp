import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class LoginScreen extends React.Component{

    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            username: ""
        }
    }

    render(){
        return(
            <View style = {styles.container}>
                <View>
                    <TextInput placeholder = "email" keyboardType = "email-address" style = {styles.input} />
                    <TextInput placeholder = "password" secureTextEntry = {true} style = {styles.input} />
                </View>
                <View>
                    <TouchableOpacity style = {styles.button} >
                        <Text style = {styles.text} > Login </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button} >
                        <Text style = {styles.text} > Sign Up </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 200,
        height: 60,
        borderWidth: 2,
        borderRadius: 6,
        margin: 3,
    },
    button: {
        width: 65,
        height: 30,
        borderRadius: 10,
        backgroundColor: "#e8d66d",
        alignItems: 'center',
        margin: 10,
    },
    text: {
        alignSelf: 'center',
        margin: 3,
    }
})

