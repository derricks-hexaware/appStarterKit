import React, { Component } from "react";
import { Text, View, StyleSheet, Alert, Image, Platform, KeyboardAvoidingView } from "react-native";
import { Input, Button } from "react-native-elements";
import Style from "./Style";

export class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleLogin = () => {
    // auth tool
      // .auth()
      // .signInWithEmailAndPassword(this.state.username, this.state.password)
      // .then(
      //   () => {},
      //   (error) => {
      //     Alert.alert(error.message);
      //   }
      // );
  };
  handleRegister = () => {
    this.props.navigation.navigate("Register");
  };
  handleForgetPassword = () => {
    this.props.navigation.navigate("ForgotPassword");
  };

  render() {
    return (
      <KeyboardAvoidingView style={Style.container}>
        <Input
          placeholder="E-mail"
          leftIcon={<MaterialIcons name="email" size={15} color="black" />}
          value={this.state.username}
          onChangeText={(text) => this.setState({ username: text })}
        />
        <Input
          placeholder="Password"
          leftIcon={<MaterialIcons name="lock" size={15} color="black" />}
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={(text) => this.setState({ password: text })}
        />

        <Button title="Login" onPress={this.handleLogin} />
        <Button title="Register" type="clear" onPress={this.handleRegister} />
        <Button
          title="Forgot password?"
          type="clear"
          onPress={this.handleForgetPassword}
        />
      </KeyboardAvoidingView>
    );
  }
}

export default Login;
