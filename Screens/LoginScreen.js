import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import firebase from 'firebase'
import db from '../config';


export default class LoginScreen extends React.Component{

    constructor(){
        super();
        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            username: "",
            isModalVisible: false,
        }
    }

    userSignUp = (email, password, confirmPassword) => {
        if (password !== confirmPassword) {
          return Alert.alert("password doesn't match\nCheck your password.");
        } else {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
              db.collection("users").add({
                username: this.state.username,
                email: this.state.email,
              });
              return Alert.alert("User Added Successfully", "", [
                {
                  text: "OK",
                  onPress: () => this.setState({ isModalVisible: false })
                }
              ]);
            })
            .catch(error => {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              return Alert.alert(errorMessage);
            });
        }
    };
    
    userLogin = (email, password) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          this.props.navigation.navigate("HomeScreen");
        })
        .catch(error => {
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage);
        });
    };

    showModal = () => {
      return (
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.isModalVisible}
        >
          <View style={styles.modalContainer}>
            <ScrollView style={{ width: "100%" }}>
              <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                <Text style={styles.modalTitle}>Sign Up</Text>
                <TextInput
                  style={styles.formTextInput}
                  placeholder={"Username"}
                  maxLength={16}
                  onChangeText={text => {
                    this.setState({
                      username: text
                    });
                  }}
                />
                <TextInput
                  style={styles.formTextInput}
                  placeholder={"Email"}
                  keyboardType={"email-address"}
                  onChangeText={text => {
                    this.setState({
                      email: text
                    });
                  }}
                />
                <TextInput
                  style={styles.formTextInput}
                  placeholder={"Password"}
                  secureTextEntry={true}
                  onChangeText={text => {
                    this.setState({
                      password: text
                    });
                  }}
                />
                <TextInput
                  style={styles.formTextInput}
                  placeholder={"Confrim Password"}
                  secureTextEntry={true}
                  onChangeText={text => {
                    this.setState({
                      confirmPassword: text
                    });
                  }}
                />
                <View style={styles.modalBackButton}>
                  <TouchableOpacity
                    style={styles.registerButton}
                    onPress={() =>
                      this.userSignUp(
                        this.state.email,
                        this.state.password,
                        this.state.confirmPassword
                      )
                    }
                  >
                    <Text style={styles.registerButtonText}>Register</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.modalBackButton}>
                  <TouchableOpacity
                    style={styles.cancelButton}
                    onPress={() => this.setState({ isModalVisible: false })}
                  >
                    <Text style={{ color: "#ff5722" }}>Cancel</Text>
                  </TouchableOpacity>
                </View>
                </KeyboardAvoidingView>
            </ScrollView>
            </View>
        </Modal>
        );
    };

    render(){
        return(
            <View style = {styles.container}>
                {this.showModal()}
                <View>
                    <TextInput placeholder = "email" keyboardType = "email-address" style = {styles.input} 
                               onChangeText = {text => {this.setState({email: text})}}
                    />
                    <TextInput placeholder = "password" secureTextEntry = {true} style = {styles.input} 
                               onChangeText = {text => {this.setState({password: text})}}
                    />
                </View>
                <View>
                    <TouchableOpacity style = {styles.button}  
                                      onPress={() => {
                                        this.userLogin(this.state.email, this.state.password);
                                       }}
                    >
                        <Text style = {styles.text} > Login </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button} 
                                      onPress={() => this.setState({ isModalVisible: true })}
                    >
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
    },
    KeyboardAvoidingView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
      modalTitle: {
        justifyContent: "center",
        alignSelf: "center",
        fontSize: 30,
        color: "#ff5722",
        margin: 50
      },
      modalContainer: {
        flex: 1,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffff",
        marginRight: 30,
        marginLeft: 30,
        marginTop: 80,
        marginBottom: 80
      },
      formTextInput: {
        width: "75%",
        height: 35,
        alignSelf: "center",
        borderColor: "#ffab91",
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 20,
        padding: 10
      },
      registerButton: {
        width: 200,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 30
      },
      registerButtonText: {
        color: "#ff5722",
        fontSize: 15,
        fontWeight: "bold"
      },
      cancelButton: {
        width: 200,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5
      },
})

