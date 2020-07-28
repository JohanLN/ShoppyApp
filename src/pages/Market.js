import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import MyHeader from '../components/MyHeader'
import Teaser from '../components/Teaser'
import Menu from '../components/Menu'

export default class Market extends Component
{
    render () {
        return (
            <View>
                <MyHeader />
                <Text>Welcome to the ShoppApp market !</Text>
                <TouchableOpacity>
                    <ScrollView>
                        <Teaser />
                    </ScrollView>
                </TouchableOpacity>
                <Menu />
            </View>
        )
    }
}