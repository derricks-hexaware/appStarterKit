import React, { Component } from "react";
import { Text, View, StyleSheet, Alert,TouchableWithoutFeedback,Keyboard, Button, TextInput } from "react-native";
import Style from "./Style";

export class ForgotPassword extends Component {
  state = {
    username: "",
  };

  handleResetPassword = () => {
    // auth tool
      // .auth()
      // .sendPasswordResetEmail(this.state.username)
      // .then(
      //   () => {
      //     Alert.alert("Password reset e-mail has been sent");
      //   },
      //   (error) => {
      //     Alert.alert(error.message);
      //   }
      // );
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
      <View style={Style.container}>
        <TextInput
          placeholder="E-mail"
          leftIcon={<MaterialIcons name="email" size={15} color="black" />}
          value={this.state.username}
          onChangeText={(text) => this.setState({ username: text })}
        />
        <Button title="Reset password" onPress={this.handleResetPassword} />
      </View>
       </TouchableWithoutFeedback>
    );
  }
}

export default ForgotPassword;
