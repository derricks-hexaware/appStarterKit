import React, { Component } from "react";
import { Text, View, StyleSheet, Alert, TextInput, Button } from "react-native";
import Login from '../login/Login';
import Style from "./Style";

export class Register extends Component {
  state = {
    username: "",
    password: "",
    confirmPassword: "",
  };

  handleRegister = () => {
    if (this.state.password !== this.state.confirmPassword) {
      Alert.alert("Passwords don't match");
      return;
    }
    // auth tool
      // .auth()
      // .createUserWithEmailAndPassword(this.state.username, this.state.password)
      // .then(
      //   () => {},
      //   (error) => {
      //     Alert.alert(error.message);
      //   }
      // );
  };

  render() {
    return (
      <View style={Style.container}>
        <TextInput
          placeholder="E-mail"
          value={this.state.username}
          onChangeText={(text) => this.setState({ username: text })}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(text) => this.setState({ password: text })}
        />
        <TextInput
          placeholder="Confirm password"
          secureTextEntry={true}
          value={this.state.confirmPassword}
          onChangeText={(text) => this.setState({ confirmPassword: text })}
        />

        <Button title="Register" onPress={this.handleRegister} />
      </View>
    );
  }
}

export default Register;
