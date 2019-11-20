import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, SafeAreaView, KeyboardAvoidingView, ImageBackground, TouchableOpacity, ScrollView} from 'react-native'
import Slide from '../components/Slide.js';
import { LinearGradient } from 'expo-linear-gradient';
import Modal from "react-native-modal";

export default class Welcome extends Component {
    static navigationOptions = {
        header: null
    }
    state = {
        isModalVisible: false
    };
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    render() {
        const {navigate} = this.props.navigation
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#f7f7f7'}}>
                <View style={styles.header}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 30, fontFamily: 'OpenSans-Bold'}}>Your home. </Text>
                        <Text style={{fontSize: 30, fontFamily: 'OpenSans-Bold', color: '#4dd599'}}>Greener.</Text>
                    </View>
                    <Text style={{fontSize: 20, fontFamily: 'OpenSans-Light', color: 'grey', marginTop: 10}}>Enjoy the experience.</Text>
                </View>
                <Slide style={styles.slide}/>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigate('LogIn')}>
                        <LinearGradient 
                        style={styles.screen}
                        colors={['#0DC8B3', '#24D696']}
                        >
                        <Text style={styles.title}>Login</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigate('SignUp')}>
                        <View style={styles.signUp}>
                            <Text style={[styles.title, {color: '#000'}]}>SignUp</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.text} onPress={this.toggleModal}>
                    <Text style={styles.term}>Terms of service</Text>
                </TouchableOpacity>
                <Modal 
                    isVisible={this.state.isModalVisible}
                    backdropColor="#fff"
                    backdropOpacity={1}     
                >
                    <SafeAreaView style={{ flex: 1 }}>
                        <Text style={[styles.title, {color: '#000', fontSize: 25}]}>Terms of Service</Text>
                        <ScrollView>
                            <Text style={styles.term}>
                            1. Your use of the Service is at your sole risk. The service is provided on an "as is" and "as available" basis.  
                            </Text>
                            <Text style={styles.term}>
                            2. Support for Expo services is only available in English, via e-mail.
                            </Text>
                            <Text style={styles.term}>
                            3. You understand that Expo uses third-party vendors and hosting partners to provide the necessary hardware, software, networking, storage, and related technology required to run the Service.
                            </Text>
                            <Text style={styles.term}>
                            4. You must not modify, adapt or hack the Service or modify another website so as to falsely imply that it is associated with the Service, Expo, or any other Expo service. 
                            </Text>
                            <Text style={styles.term}>
                            5. You may use the Expo Pages static hosting service solely as permitted and intended to host your organization pages, personal pages, or project pages, and for no other purpose. You may not use Expo Pages in violation of Expo's trademark or other rights or in violation of applicable law. Expo reserves the right at all times to reclaim any Expo subdomain without liability to you.
                            </Text>
                            <Text style={styles.term}>
                            6. You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service without the express written permission by Expo.
                            </Text>
                            <Text style={styles.term}>
                            7. We may, but have no obligation to, remove Content and Accounts containing Content that we determine in our sole discretion are unlawful, offensive, threatening, libelous, defamatory, pornographic, obscene or otherwise objectionable or violates any party's intellectual property or these Terms of Service.
                            </Text>
                            <Text style={styles.term}>
                            8. Verbal, physical, written or other abuse (including threats of abuse or retribution) of any Expo customer, employee, member, or officer will result in immediate account termination.
                            </Text>
                            <Text style={styles.term}>
                            9. You understand that the technical processing and transmission of the Service, including your Content, may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices.
                            </Text>
                            <Text style={styles.term}>
                            10. You must not upload, post, host, or transmit unsolicited e-mail, SMSs, or "spam" messages.
                            </Text>
                        </ScrollView>
                        <TouchableOpacity onPress={this.toggleModal}>
                            <LinearGradient 
                            style={[styles.screen, {marginBottom: 0}]}
                            colors={['#0DC8B3', '#24D696']}
                            >
                            <Text style={styles.title}>I Understand</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </SafeAreaView>
                </Modal>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    screen: {
        padding: 15,
        marginVertical: 5,
        marginHorizontal: 30,
        borderRadius: 5,
        marginBottom: 10,
    },
    signUp: {
        padding: 15,
        marginVertical: 5,
        marginHorizontal: 30,
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: '#fff',
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowOffset: {width: 2, height: 2,},
        elevation: 5,
    },
    title: {
        fontFamily: 'OpenSans-Bold',
        textAlign: 'center',
        color: '#fff'
    },
    term: {
        fontSize: 14, 
        fontFamily: 'OpenSans-Bold',
        color: 'grey',
        margin: 5
    }
})
