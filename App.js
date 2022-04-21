import React, { Component } from "react";
import { StyleSheet, Text, View, LogBox, StatusBar } from "react-native";
import { primaryColor } from "./constants";
import TabNavigation from "./navigation/TabNavigation"; 
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import AuthStack from "./navigation/AuthStack";
import { ThemeProvider } from "react-native-elements";


const theme = {
  colors: {
    primary: primaryColor, 
  },
};

if (LogBox) {
  LogBox.ignoreLogs(["Setting a timer"]);
  LogBox.ignoreLogs(["Require cycle"]);
}

export class App extends Component {
  state = {
    isAuthenticated: true,
  };

//   componentDidMount() {
//     firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
//   }

  onAuthStateChanged = (user) => {
    this.setState({ isAuthenticated: !!user });
  };

  render() {
    return (
      <View style={styles.container}>
        <ThemeProvider theme={theme}>
          <StatusBar style="auto" />
          <NavigationContainer>
            {this.state.isAuthenticated ? <TabNavigation /> : <AuthStack />}
          </NavigationContainer>
        </ThemeProvider>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default App;
