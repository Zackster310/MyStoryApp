import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import firebase from 'firebase'
import db from '../config';

export default class HomeScreen extends React.Component{
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity style = {styles.button}> 
                    <Text style = {styles.buttonText}> View Joined Stories</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button} onPress = {() => {this.props.navigation.navigate("StoryScreen")}}>
                    <Text style = {styles.buttonText}> Join Stories</Text>
                </TouchableOpacity>

                <TouchableOpacity style = {styles.button} onPress = {() => {this.props.navigation.navigate("NewStoryScreen")}}>
                    <Text style = {styles.buttonText}> Create Your Story </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 270,
        height: 60,
        borderWidth: 3,
        borderRadius: 5,
        backgroundColor: "#825c34",
        padding: 5,
        margin: 5,
    },
    buttonText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
    }
})