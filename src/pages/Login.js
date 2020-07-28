import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Button } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'

export default class Login extends Component
{

    constructor(props) {
        super(props)
        this.state = {
            create: false
        }
    }

    render () {
        return (
            <LinearGradient start={{x: 0, y: 0.2}} end={{x: 1, y: 1}} colors={['#ff0073', '#d400ff', '#0a00c9']} style={{flex:1, justifyContent:'center'}}>
                <Text style={{color: 'white', fontSize: 50, fontWeight: 'bold', textAlign: 'center'}}>ShoppyApp</Text>
                {!this.state.create ? (
                    <SignIn nav={this.props.navigation}/>
                ) :
                    <SignUp nav={this.props.navigation}/>
                }
                <TouchableOpacity onPress={() => {this.setState({create: !this.state.create})}}>
                    <Text style={{marginTop: 40, color: 'white', fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>SignUp !</Text>
                </TouchableOpacity>
            </LinearGradient>
        )
    }
}