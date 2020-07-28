import React, { Component } from 'react'
import { Text, ScrollView, Image, View } from 'react-native'

export default class Teaser extends Component
{
    render () {
        return (
            <View>
                <Text style={{textAlign: 'center', marginBottom: 20, fontSize: 20}}>A Shop</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                <Image 
                        style={{width: 250, height: 250, borderRadius: 20, marginLeft: 30}}
                        source={{uri: "https://cdn.pixabay.com/photo/2015/03/26/09/41/tie-690084_960_720.jpg"}}
                    />
                <Image 
                    style={{width: 250, height: 250, borderRadius: 20, marginLeft: 30}}
                    source={{uri: "https://cdn.pixabay.com/photo/2015/03/26/09/41/tie-690084_960_720.jpg"}}
                />
                </ScrollView>
            </View>
        )
    }
}