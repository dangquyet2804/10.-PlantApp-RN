import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';

const Catagory = ({image, name, count, onPress, index}) => {
    return (
        <TouchableOpacity style={[styles.catagory, index%2 !==0 ? {marginLeft: 10} : null]} onPress={onPress}>
            <View style={styles.imageConatiner}>
                <Image 
                    source={image}
                />
            </View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.count}>{count} products</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    catagory: {
        width:'50%',
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    name: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 16,
        marginBottom: 5,
    },
    count: {
        fontFamily: 'OpenSans-Light',
        fontSize: 14
    },
    imageConatiner: {
        width: 60,
        height: 60,
        backgroundColor: '#E8FBF7',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginBottom: 15,
    }
});
export default Catagory
