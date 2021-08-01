import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import firebase from 'firebase'
import db from '../config';

export default class NewStoryScreen extends React.Component{

    constructor(){
        super()
        this.state = {
            title: "",
            story: "",
            userID: firebase.auth().currentUser.email
        }
    }

    addStory = () => {
        console.log("addStory function")
        db.collection("stories").add({
            "userID": this.state.userID,
            "story": this.state.story
        })
    }

    render(){
        return(
            <View style = {{flex: 1, alignItems: 'center',}}>
                <TextInput placeholder = "Title For Your Story"
                           style = {styles.title}
                           onChangeText = {text => {this.setState({title: text})}}
                />

                <TextInput placeholder = "Start a story" 
                           style = {styles.addition}
                           multiline
                           onChangeText = {text => {this.setState({story: text})}}
                />

                <TouchableOpacity style = {styles.button} onPress = {this.addStory}>
                    <Text> Confirm </Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        fontSize: 50,
        textDecorationLine: 'underline',
        margin: 20,
        marginTop: 100,
        borderWidth: 2,
    },
    addition: {
        borderWidth: 1.5,
        margin: 20
    },
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
})

