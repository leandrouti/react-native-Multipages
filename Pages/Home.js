import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#fee'
  }
});

export default class Home extends React.Component {

  static navigationOptions = {
    title: 'Home',
    headerStyle: styles.header
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>We have no friends!</Text>

        <Button
          title="Add some friends"
          onPress={() => this.props.navigation.navigate('Friends')
        } />
        <Button
          title="Add Friend Jane"
          onPress={() => this.props.navigation.navigate('Friends', {name: 'Jane', age: 30})
        } />
      </View>
    );
  }
}

