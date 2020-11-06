import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { ImageBackground, StyleSheet, Text, TextInput, View } from "react-native";
import { Button, Card } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";

const image = require('../assets/android.png');


export default class Login extends Component {
  state = {
    name: '',
    lastname: ''
  }


  Name = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  Lastname = (e) => {
    this.setState({
      lastname: e.target.value
    })
  }

  render() {
    const user = {
      name: this.state.name,
      lastname: this.state.lastname
    }
    return (
      <SafeAreaProvider>
        <StatusBar style='auto' />
        <View style={styles.container}>
          <View style={styles.barra} />
          <ImageBackground source={image} style={styles.image}>
            <View style={styles.fondo}>
              <View style={styles.reyeno} />
              <Card containerStyle={styles.Form} >
                <Card.Title>Registrate</Card.Title>
                <Card.Divider />
                <View style={styles.Spacio2} />
                <Text style={styles.texto}>Nombre</Text>
                <TextInput style={styles.Input}
                  onChange={this.Name}
                />
                <Text style={styles.texto}>Apellido</Text>
                <TextInput style={styles.Input}
                  onChange={this.Lastname}
                />
                <View style={styles.Spacio} />
                <Button
                  title='Sigiente'
                  onPress={() => this.props.navigation.navigate('Regis',user)}
                />
                <View style={styles.Spacio} />
                <View style={styles.Spacio2} />
              </Card>
            </View>
          </ImageBackground>
        </View>
      </SafeAreaProvider>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  barra: {
    flex: 0.1,
    backgroundColor: 'rgb(223, 223, 223)',
  },
  image: {
    flex: 2,
    resizeMode: "cover",
    justifyContent: "center"
  },
  fondo: {
    flex: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.411)'
  },
  Form: {
    borderRadius: 20
  },
  reyeno: {

    width: 340,
    height: 100
  },
  Input: {
    width: 340,
    padding: 5,
    margin: 5,
    height: 50,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    fontSize: 20

  },
  texto: {
    fontSize: 15,
    padding: 5,
    margin: 5,
  },
  Spacio: {
    height: 50
  },
  Spacio2: {
    height: 40
  }
});
