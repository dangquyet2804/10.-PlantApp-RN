import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Explore extends Component {
    static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title'),
    headerStyle: {
        backgroundColor: '#00a79d'
    },
        headerTintColor: '#fff'
  });
    render() {
        return (
            <View>
                <Text> Explore </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
