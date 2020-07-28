import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button, colors } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import UserIcon from 'react-native-vector-icons/AntDesign'
import PwdIcon from 'react-native-vector-icons/Entypo'

export default class SignIn extends Component
{

    constructor(props) {
        super(props)
        this.state = {
            log: "",
            pwd: "",
            hideShow: true,
            icon: "eye"
        }
    }

    hideShow()
    {
        this.setState({hideShow: !this.state.hideShow})
        if(!this.state.hideShow)
            this.setState({icon: "eye"})
        else
            this.setState({icon: "eye-with-line"})

    }

    render () {
        return (
            <View style={styles.container}>
                <Input  placeholder="Username"
                        inputStyle={{marginTop: 30}} 
                        onChangeText={text => this.setState({log: text})}
                        rightIcon={
                            <UserIcon name="user" size={24} color="gray" style={{marginTop: 20}} />
                        }
                />
                <Input  secureTextEntry={this.state.hideShow} 
                        placeholder="Password" 
                        inputStyle={{marginTop: 20}}
                        onChangeText={text => this.setState({pwd: text})}
                        rightIcon={
                            <Button type="clear"
                                    buttonStyle={{marginTop: 20}}
                                    icon={
                                        <PwdIcon name={this.state.icon} size={24} color="gray" />
                                    }
                                    onPress={() => this.hideShow()}
                            />
                        }
                />
                <Button ViewComponent={LinearGradient}
                        title="connection"
                        linearGradientProps={{
                            colors: ['#ff0073', '#d400ff', '#0a00c9'],
                            start: {x: 0, y: 0.2},
                            end: {x: 1, y: 1}                        
                        }}
                        buttonStyle={{width: 200, alignSelf: 'center', marginTop: 20, borderRadius: 20}} 
                        onPress={() => this.props.nav.navigate('Market')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        alignSelf: 'center',
        height: 300,
        width: 300,
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 80,
    }
})