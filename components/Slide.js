import React, {Component} from 'react'
import { View, Text, Dimensions, StyleSheet, Image } from 'react-native'
import Swiper from 'react-native-swiper';
const { height, width } = Dimensions.get('window');

export default class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                require('../assets/illustration_1.png'),
                require('../assets/illustration_2.png'),
                require('../assets/illustration_3.png')
            ]
        }
    }
    
    render() {
        return (
            <View style={{height: '50%'}}>
                <Swiper
                autoplay
                autoplayTimeout={4}
                >
                    {
                        this.state.images.map((image, index) => {
                            return (
                                <View style={{flex: 1}} key={index}>
                                    <Image source={image} style={{width, flex: 1, height: 240}}/>
                                </View>
                            )
                        })
                    }
                </Swiper>
            </View>
        )
    }
}