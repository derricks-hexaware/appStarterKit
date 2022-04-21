import React, { Component, useState } from "react";
import {
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  Button, 
  Text,
  Image,
  Alert,
  TextInput,
  TouchableWithoutFeedback,
  TouchableHighlight,
  ImageBackground
} from "react-native";
import { SearchBar, Card } from "react-native-elements";
import { tabIconColor, tabBackgroundColor, primaryColor } from "../../constants";
import _ from "lodash";
import Style from "./Style";

export class Search extends Component {
  state = {
    data: [],
    searchText: "",
    loading: false,
    
  };

  renderCards = () => {
    const regex = /(<([^>]+)>)/ig;
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate("Details");
        }}
      >
        <Card style={{width: '100%'}} borderRadius = '13'>
        
            <Image style={{width: '110%', height: 150, marginHorizontal: -16, marginVertical: -16, borderTopLeftRadius: 13, borderTopRightRadius: 13}} />
          <View style={{ flexDirection: "row" }}>
           
             <Card.Title style ={{ marginBottom: 1, paddingTop: 28, color: '#000000'}} numberOfLines={1}>
              
            </Card.Title> 
          </View>
           
          <View style={{ flexDirection: "row" }}>
           
             <Card.FeaturedSubtitle style ={{ marginBottom: 1, marginTop: 5, color: '#000000'}} numberOfLines={3}>
             
            </Card.FeaturedSubtitle>
          </View>

          <Text
            style={{ marginLeft: 250, marginTop: 145, position: 'absolute', fontWeight: "bold", fontSize: 13, color: 'grey'}}
          >
          
          </Text>
        </Card>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={Style.container}>
       
        <View style={Style.searchView}>
        
          <SearchBar
            containerStyle={Style.searchBarContainer}
            inputStyle={Style.searchInput}
            inputContainerStyle={Style.searchInputContainer}
            searchIcon={null}
            placeholder="  Search"
            onChangeText={(text) => this.setState({ searchText: text })}
            value={this.state.searchText}
            round
          />
          <TouchableOpacity
            onPress={this.handleSearch}
            style={Style.searchIcon}
          >
            <AntDesign name="search1" size={25} color={tabIconColor} />
          </TouchableOpacity>

        </View>
         <View style={{flex: 2, position: 'absolute', bottom: 60, left: 15, zIndex: 999}}> 
          
          </View>
        
        <ScrollView style={Style.searchResults}>
          
            
        <View style={Style.container2}>
        </View>

        </ScrollView>
       
        <View style={Style.cameraButton}>
      <Text style={{fontSize:16}}></Text>
    </View>
    
      </View>
      
    );
  }
}

export default Search;
