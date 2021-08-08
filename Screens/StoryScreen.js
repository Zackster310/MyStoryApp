import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import firebase from 'firebase'
import db from '../config';

export default class StoryScreen extends React.Component{

    constructor(){
        super()
        this.state = {
            title: "",
            currentStory: "",
            addedStory: "",
            userID: firebase.auth().currentUser.email
        }
    }

    getStory = () => {
        db.collection("stories").where("userID","!=",this.state.userID).onSnapshot((snapshot) => {
            var allStories = []
            snapshot.docs.map((doc) => {
                var story = doc.data()
                allStories.push(story)
            })
            var min = Math.ceil(0); 
            var max = Math.floor(allStories.length);  
            var number = Math.floor(Math.random() * (max - min) + min);

            console.log("number:", number)
            console.log(allStories[number], "allStories")
            console.log(allStories[number].story, "story")

            this.setState({
                title: allStories[number].title,
                currentStory: allStories[number].story
            })
        })
    }

    updateStory = () => {
        db.collection("stories").where("title", "==", this.state.title).update({
            'story': this.state.addedStory
        })
        console.log(this.state.story, "story")
    }

    componentDidMount(){
        this.getStory()
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

                <TouchableOpacity style = {styles.button} onPress = {this.updateStory} >
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
        marginTop: 100
    },
    story: {
        fontSize: 20,
        margin: 20
    },
    addition: {
        borderWidth:1.5,
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

