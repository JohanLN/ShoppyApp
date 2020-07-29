import React, { Component } from 'react'
import { Text, ScrollView, Image, View } from 'react-native'

export default class Teaser extends Component
{
    render () {
        return (
            <View style={{marginBottom: 40}}>
                <Text style={{textAlign: 'center', marginBottom: 20, fontSize: 20}}>{this.props.id}</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
                <Image 
                        style={{width: 300, height: 200, borderRadius: 20, marginLeft: 10, marginRight: 10}}
                        source={{uri: "https://cdn.pixabay.com/photo/2015/03/26/09/41/tie-690084_960_720.jpg"}}
                    />
                <Image 
                    style={{width: 300, height: 200, borderRadius: 20, marginLeft: 10, marginRight: 10}}
                    source={{uri: "https://cdn.pixabay.com/photo/2015/03/26/09/41/tie-690084_960_720.jpg"}}
                />
                </ScrollView>
            </View>
        )
    }
}