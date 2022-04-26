import * as React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View } from 'react-native';
import { gStyle } from '../constants';

// components
import Touch from '../components/Touch';

const Home = ({ navigation }) => {
  const theme = 'dark';

  return (
    <View style={gStyle.container[theme]}>
      <ScrollView contentContainerStyle={gStyle.contentContainer}>
        <Text style={gStyle.text[theme]}>Home</Text>

        <View style={gStyle.spacer64} />

        <Touch
          onPress={() => navigation.navigate('StackMulti')}
          text="Jump to Multi tab"
        />

        <Touch onPress={() => null} text="Light theme" />
        <Touch onPress={() => null} text="Dark theme" />
      </ScrollView>
    </View>
  );
};

Home.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default Home;
