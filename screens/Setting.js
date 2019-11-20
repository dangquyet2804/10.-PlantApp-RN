import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, SafeAreaView, KeyboardAvoidingView, ImageBackground, TouchableOpacity, ScrollView, Dimensions, FlatList, TextInput, Switch} from 'react-native'
import avatar from '../assets/avatar.png';
import { Slider } from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';

class Setting extends Component {
    static navigationOptions = {
        header: null
    }
    state = {
        isEditName: false,
        isEditLocation: false,
        name: 'Paul',
        location: 'Milan',
        burget: 700,
        monthly: 1000,
        newsletter: false,
        notifications: true
    }
    render() {
        const {isEditLocation, name, location, isEditName} = this.state;
        const {tasks, editContent, navigation} = this.props;
        return (
             <ScrollView style={{backgroundColor: '#F5F4F7', flex: 1}}>
                <SafeAreaView style={{flex: 1, marginHorizontal: 20}}>
                    <View style={styles.header}>
                        <Text style={styles.brower}>Setting</Text>
                        <Image 
                            source={avatar}
                            style={styles.avatar}
                        />
                    </View>
                    <View>
                        <Text style={styles.label}>Username</Text>
                        <View style={styles.nameContainer}>
                            {
                                !isEditName ? 
                                <Text style={styles.name}>{name}</Text>
                                :
                                <TextInput 
                                    style={styles.name}
                                    onChangeText={(name) => this.setState({name})}
                                    value={name}
                                    autoFocus={true}
                                />
                            }
                            {
                                !isEditName ?
                                <TouchableOpacity onPress={() => this.setState({isEditName: !isEditName})}>
                                    <Text style={[styles.name, {color: '#24D696'}]}>Edit</Text>
                                </TouchableOpacity>
                                : 
                                <TouchableOpacity onPress={() => this.setState({isEditName: !isEditName})}>
                                    <Text style={[styles.name, {color: '#24D696'}]}>Save</Text>
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                    <View style={{marginTop: 10}}>
                        <Text style={styles.label}>Location</Text>
                        <View style={styles.nameContainer}>
                            {
                                !isEditLocation ? 
                                <Text style={styles.name}>{location}</Text>
                                :
                                <TextInput 
                                    style={styles.name}
                                    onChangeText={(location) => this.setState({location})}
                                    value={location}
                                    autoFocus={true}
                                />
                            }
                            {
                                !isEditLocation ?
                                <TouchableOpacity onPress={() => this.setState({isEditLocation: !isEditLocation})}>
                                    <Text style={[styles.name, {color: '#24D696'}]}>Edit</Text>
                                </TouchableOpacity>
                                : 
                                <TouchableOpacity onPress={() => this.setState({isEditLocation: !isEditLocation})}>
                                    <Text style={[styles.name, {color: '#24D696'}]}>Save</Text>
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                    <View style={{marginTop: 10}}>
                        <Text style={styles.label}>Email</Text>
                        <Text style={styles.name}>dangquyet2804@gmail.com</Text>
                    </View>
                    <View style={{backgroundColor: 'grey', height: 0.3, marginVertical: 10}} />
                    <View>
                        <Text style={styles.label}>Burget</Text>
                        <Slider
                            minimumValue={0}
                            maximumValue={1000}
                            style={{ height: 19, marginVertical: 10 }}
                            trackStyle={{ height: 6, borderRadius: 6 }}
                            minimumTrackTintColor="#2BDA8E"
                            maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
                            value={this.state.burget}
                            onValueChange={value => this.setState({ burget: value })}
                        />
                        <Text style={[styles.label, {textAlign: 'right'}]}>${this.state.burget.toFixed(0)}</Text>
                    </View>
                    <View style={{marginVertical: 10}}>
                        <Text style={styles.label}>Monthly Cap</Text>
                        <Slider
                            minimumValue={0}
                            maximumValue={5000}
                            style={{ height: 19, marginVertical: 10 }}
                            trackStyle={{ height: 6, borderRadius: 6 }}
                            minimumTrackTintColor="#2BDA8E"
                            maximumTrackTintColor="rgba(157, 163, 180, 0.10)"
                            value={this.state.monthly}
                            onValueChange={value => this.setState({ monthly: value })}
                        />
                        <Text style={[styles.label, {textAlign: 'right'}]}>${this.state.monthly.toFixed(0)}</Text>
                    </View>
                    <View style={{backgroundColor: 'grey', height: 0.3, marginVertical: 10}} />
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}}>
                        <Text style={styles.label}>Notifications</Text>
                        <Switch
                            value={this.state.notifications}
                            onValueChange={value => this.setState({ notifications: value })}
                        />
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10}}>
                        <Text style={styles.label}>Newsletter</Text>
                        <Switch
                            value={this.state.newsletter}
                            onValueChange={value => this.setState({ newsletter: value })}
                        />
                    </View>
                    <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Brower')}>
                        <AntDesign name="arrowleft" size={30} color="grey"/>
                    </TouchableOpacity>
                </SafeAreaView>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 130
    },
    brower: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 30
    },
    avatar: {
        width: 50,
        height: 50,
    },
    label: {
        fontFamily: 'OpenSans-Bold',
        color: 'grey'
    },
    nameContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 5,
    },
    name: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 14,
    },
    back: {
        position: 'absolute',
        left: 0,
        top: 50
    }
})
const mapStateToProps = (state, ownProps) => {
    return {
        tasks: state.tasks
    }
}
export default Setting
