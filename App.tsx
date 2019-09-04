import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Crypti, Footer } from './src/components';
import { Provider } from 'react-redux';
import Store from './src/store'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Details from './src/pages/details'
class HomeScreen extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <Header />
          <Crypti nav={this.props.navigation} />
        </View>
      </Provider>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    }
  },
  details: {
    screen: Details,
  }
});

export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
