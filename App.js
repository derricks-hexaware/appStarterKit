import * as React from 'react';
import { Appearance, StatusBar } from 'react-native';
import { device, func } from './src/constants';

// main navigation stack
import RootStack from './src/navigation/RootStack';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      theme: 'light'
    };

    this.updateTheme = this.updateTheme.bind(this);
  }

  componentDidMount() {
    // get system preference
    const colorScheme = Appearance.getColorScheme();
    console.log('react-native::Appearance', colorScheme);

    // if light or dark
    if (colorScheme !== 'no-preference') {
      this.setState({
        theme: colorScheme
      });
    }
  }

  updateTheme(themeType) {
    this.setState({
      theme: themeType
    });
  }

  render() {
    const { isLoading, theme } = this.state;
    const iOSStatusType = theme === 'light' ? 'dark-content' : 'light-content';

    return (
      <React.Fragment>
        <StatusBar barStyle={device.iOS ? iOSStatusType : 'light-content'} />

        <RootStack theme={theme} />
      </React.Fragment>
    );
  }
}

export default App;
