import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import firebase from 'firebase'
import db from '../config';

export default class StoryScreen extends React.Component{

    constructor(){
        super()
        this.state = {
            title: "title",
            currentStory: "story",
            addedStory: "",
        }
    }

    render(){
        return(
            <View style = {{flex: 1, alignItems: 'center',}}>
                <Text style = {styles.title}> {this.state.title} </Text>
                <Text style = {styles.story}> {this.state.currentStory} </Text>

                <TextInput placeholder = "Your addition to the story" 
                           style = {styles.addition}
                           multiline
                           onChangeText = {text => {this.setState({addedStory: text})}}
                />

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
        marginTop: 100
    },
    story: {
        fontSize: 20,
        margin: 20
    },
    addition: {
        borderWidth:1.5,
        margin: 20
    }
})