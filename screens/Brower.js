import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, SafeAreaView, KeyboardAvoidingView, ImageBackground, TouchableOpacity, ScrollView, Dimensions, FlatList} from 'react-native'
import avatar from '../assets/avatar.png';
import data from './data';
import Catagory from '../components/Catagory';
const { height, width } = Dimensions.get('window');

export default class Brower extends Component {
    static navigationOptions = {
        header: null
    }
    state = {
        index: 1
    }
    separator = () => <View style={{backgroundColor: 'greyLighter', height: 10}} />;
    render() {
        const {index} = this.state;
        return (
            <View style={{backgroundColor: '#F5F4F7', flex: 1}}>
                <SafeAreaView style={{flex: 1, marginHorizontal: 20}}>
                    <View style={styles.header}>
                        <Text style={styles.brower}>Brower</Text>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Setting')}
                        >
                            <Image 
                                source={avatar}
                                style={styles.avatar}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => this.setState({index: 1})}
                            style={styles.default, index===1 ? styles.onselect : null}
                        >
                            <Text style={[styles.select, index===1 ? {color: '#24D696'} : null]}>Products</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({index: 2})}
                            style={styles.default, index===2 ? styles.onselect : null}
                        >
                            <Text style={[styles.select, index===2 ? {color: '#24D696'} : null]}>Inspirations</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({index: 3})}
                            style={styles.default, index===3 ? styles.onselect : null}
                        >
                            <Text style={[styles.select, index===3 ? {color: '#24D696'} : null]}>Shop</Text>
                        </TouchableOpacity>
                    </View>
                    {
                        index === 1 ? 
                        (
                            <FlatList
                                style={{marginTop: 20, backgroundColor: '#F6F5F8'}}
                                ItemSeparatorComponent={this.separator}
                                numColumns={2}
                                data={data}
                                keyExtractor={data => data.id}
                                renderItem={({item, index}) => {
                                    return (
                                        <Catagory
                                            image={item.image} name={item.name} count={item.count} index={index}
                                            onPress={() => this.props.navigation.navigate('Explore', {title: item.name})}
                                        />
                                    )
                                }}
                            />
                        )
                        : null
                    }
                </SafeAreaView>
            </View>
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
    select: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 17,
        color: 'grey',
        textAlign: 'center'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#e5dfdf',
    },
    onselect: {
        borderBottomWidth: 3,
        borderBottomColor: '#24D696',
        paddingBottom: 15,
        paddingHorizontal: 10,
    },
    default: {
        borderBottomWidth: 3,
        paddingBottom: 15,
        paddingHorizontal: 10,
    }
})
