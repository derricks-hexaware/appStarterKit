import React, { Component } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Platform
} from "react-native";
import { Button, Card } from "react-native-elements";
import _ from "lodash";
import Style from "./Style";


export class Home extends Component {
  state = {
    uid: "",
    items: []
  };

  renderCards = (item) => {
    const regex = /(<([^>]+)>)/ig;
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate("Details", item);
        }}
      >
        <Card style={Style.productCards} borderRadius = '13'>
        
          <View style={{ flexDirection: "row" }}>
           
             <Card.Title style ={{ marginBottom: 1, paddingTop: 28, color: '#000000'}} numberOfLines={1}>
              {/* Add product card title here */}
            </Card.Title>
          </View>
           
          <View style={{ flexDirection: "row" }}>
           
             <Card.FeaturedSubtitle style ={{ marginBottom: 1, marginTop: 5, color: '#000000'}} numberOfLines={3}>
             {/* Add product description or subtitle here */}
            </Card.FeaturedSubtitle>
          </View>

        </Card>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}> 
        <ScrollView>
        {this.state.items &&
            this.state.items.map((item) => this.renderCards(item))}
        </ScrollView>
      </View>
    );
  }
}

export default Home;
