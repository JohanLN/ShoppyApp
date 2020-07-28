import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Button, colors } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient'
import UserIcon from 'react-native-vector-icons/AntDesign'
import PwdIcon from 'react-native-vector-icons/Entypo'

export default class SignUp extends Component
{

    constructor(props) {
        super(props)
        this.state = {
            log: "",
            pwd: "",
            cpwd: "",
            errLog: "",
            errPwd: "",
            hideShow: true,
            cHideShow: true,
            icon: "eye",
            cIcon: "eye"
        }
    }

    hideShow(item)
    {
        if (item === "pwd") {
            this.setState({hideShow: !this.state.hideShow})
            if(!this.state.hideShow)
                this.setState({icon: "eye"})
            else
                this.setState({icon: "eye-with-line"})
        }
        else {
            this.setState({cHideShow: !this.state.cHideShow})
            if(!this.state.cHideShow)
                this.setState({cIcon: "eye"})
            else
                this.setState({cIcon: "eye-with-line"})
        }
    }

    checkInfos() {
        if (this.state.log === "") {
            this.setState({errLog: "You must set a username"})
            return
        }
        if (this.state.pwd === "" || this.state.cpwd === "") {
            this.setState({errPwd: "You must set a password"})
            return
        }
        if (this.state.pwd === this.state.cpwd) {
            this.props.nav.navigate('Market')
        }
        else {
            this.setState({errPwd: "Passwords must be the same"})
            return
        }
    }

    render () {
        return (
            <View style={styles.container}>
                <Input  onChangeText={text => this.setState({log: text})}
                        placeholder="Username" 
                        inputStyle={{marginTop: 30}}
                        errorStyle={{color: 'red'}}
                        errorMessage={this.state.errLog}
                        rightIcon={
                            <UserIcon name="user" size={24} style={{marginTop: 20}} />
                        }
                />
                <Input  onChangeText={text => this.setState({pwd: text})}
                        secureTextEntry={this.state.hideShow}
                        placeholder="Password" 
                        inputStyle={{marginTop: 20}}
                        rightIcon={
                            <Button 
                                type='clear'
                                buttonStyle={{marginTop: 20}}
                                icon={
                                    <PwdIcon name={this.state.icon} size={24} color="gray" />
                                }
                                onPress={() => this.hideShow('pwd')}
                            />
                        }
                />
                <Input  onChangeText={text => this.setState({cpwd: text})} 
                        secureTextEntry={this.state.cHideShow} 
                        placeholder="Confirm password" 
                        inputStyle={{marginTop: 20}}
                        errorStyle={{color: 'red'}}
                        errorMessage={this.state.errPwd}
                        rightIcon={
                            <Button 
                                type='clear'
                                buttonStyle={{marginTop: 20}}
                                icon={
                                    <PwdIcon name={this.state.cIcon} size={24} color="gray" />
                                }
                                onPress={() => this.hideShow("cpwd")}
                            />
                        }
                />
                <Button ViewComponent={LinearGradient}
                        title="Create account"
                        linearGradientProps={{
                            colors: ['#ff0073', '#d400ff', '#0a00c9'],
                            start: {x: 0, y: 0.2},
                            end: {x: 1, y: 1}                        
                        }}
                        buttonStyle={{width: 200, alignSelf: 'center', marginTop: 20, borderRadius: 20}}
                        onPress={() => this.checkInfos()} />
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        alignSelf: 'center',
        height: 400,
        width: 300,
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: 80,
        padding: 20
    }
})