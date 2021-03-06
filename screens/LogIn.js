import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, SafeAreaView, KeyboardAvoidingView, ImageBackground, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as firebase from 'firebase';

export default class LogIn extends Component {
    static navigationOptions = {
        header: null
    }
    state = {
        email: '',
        password: '',
        err: '',
        isHide: false
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "HomeStack" : "AuthStack");
        });
    }
    handleSignIn = () => {
        const {email, password, err} = this.state;
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(err => this.setState({err: err.message}))
    }
    hidePassword = () => {
        this.setState({
            isHide: !this.state.isHide
        })
    }
    render() {
        const {isHide, email, password, err} = this.state;
        const {navigate} = this.props.navigation
        return (
            <SafeAreaView style={styles.screen}>
                <KeyboardAvoidingView behavior="padding" enabled style={{flex: 1}}>
                    <View style={{flex: 1, justifyContent: 'center'}}>
                        <Text style={styles.login}>Login</Text>
                    </View>
                    <View style={{flex: 3}}>
                        {
                            err ? <Text style={[styles.label, {textAlign: 'center', color: 'red'}]}>{err}</Text> : null
                        }
                        <Text style={styles.label}>Email</Text>
                        <TextInput 
                            style={styles.input}
                            autoCapitalize="none"
                            secureTextEntry = {false}
                            keyboardType="email-address"
                            onChangeText={(email) => this.setState({email})}
                            value={email}
                        />                                     
                        <Text style={styles.label}>Password</Text>
                        <View style={styles.password}>
                        <TextInput 
                            style={[styles.input, {flex: 1}]}
                            autoCapitalize="none"
                            secureTextEntry = {isHide ? false : true}
                            onChangeText={(email) => this.setState({email})}
                            value={email}
                        />
                        {
                            !isHide ?
                            <TouchableOpacity onPress={this.hidePassword}>
                                <Entypo name="eye" size={20} color="grey" style={styles.icon}/>
                            </TouchableOpacity>
                            : 
                            <TouchableOpacity onPress={this.hidePassword}>
                                <Entypo name="eye-with-line" size={20} color="grey" style={styles.icon}/>
                            </TouchableOpacity>         
                        }                   
                        </View>
                        <TouchableOpacity onPress={this.handleSignIn}>
                            <LinearGradient 
                            style={styles.button}
                            colors={['#0DC8B3', '#24D696']}
                            >
                            <Text style={styles.title}>Login</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => null}>
                            <Text style={styles.forget}>Forget your Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.back} onPress={() => navigate('Welcome')}>
                        <AntDesign name="arrowleft" size={30} color="grey"/>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    login: {
        fontFamily: 'OpenSans-Bold',
        color: '#000',
        fontSize: 30
    },
    screen: {
        flex: 1,
        marginHorizontal: 20
    },
    input: {
        borderBottomWidth: 1,
        paddingVertical: 10,
        fontFamily: 'OpenSans-Light',
        borderBottomColor: 'grey',
        marginBottom: 5,
    },
    label: {
        marginVertical: 10,
        fontFamily: 'OpenSans-Bold',
        color: 'grey'
    },
    password: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    icon: {
        position: 'absolute',
        right: 0,
        top: 0,
    },
    button: {
        padding: 15,
        marginVertical: 5,
        borderRadius: 5,
        marginBottom: 20,
        marginTop: 30,
    },
    title: {
        fontFamily: 'OpenSans-Bold',
        textAlign: 'center',
        color: '#fff'
    },
    forget: {
        textAlign: 'center',
        fontFamily: 'OpenSans-Light',
        textDecorationLine: 'underline'
    },
    back: {
        position: 'absolute',
        left: 0,
        top: 0
    }
})
