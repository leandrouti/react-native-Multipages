import React from 'react';
import {StyleSheet, Text, View, Button, Alert } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  header: {
    backgroundColor: '#eee'
  }
});


export default class Friends extends React.Component {
  static navigationOptions = {
    title: 'Friends',
    headerStyle: styles.header
  };

  constructor(props) {
    super(props);
    
    console.log(props.navigation.getParam('name'));
  }
  
  _showAlert() {
    Alert.alert("今から戻ります");
    this.props.navigation.goBack();
    this.props.navigation.navigate("Home");
  }

  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name', '');
    const age = navigation.getParam('age', '');


    return (
      <View style={styles.container}>
        <Text>Add Friends Here!</Text>

        <Text>{name}</Text>
        <Text>{age}</Text>


        <Button
          title="Add some friends"
          onPress={() => this.props.navigation.navigate('Friends')
        } />

        <Button
          title="Show Alert"
          onPress={this._showAlert.bind(this)} />
      </View>
    );
  }
}
