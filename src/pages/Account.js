import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Button, ThemeProvider } from 'react-native-elements'
import Icon from 'react-native-vector-icons/AntDesign'


export default class Account extends Component
{
    render () {
        return (
            <LinearGradient start={{x: 0, y: 0.2}} end={{x: 1, y: 1}} colors={['#ff0073', '#d400ff', '#0a00c9']} style={{flex:1, justifyContent:'center'}}>
                <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: 40}}>\Username/</Text>
                <ThemeProvider theme={{ colors: { primary: "gray" }}}>
                    <View style={{height: 330, width: 300, backgroundColor: 'white', borderRadius: 30, alignSelf: 'center'}}>
                    <Button 
                            type='clear'
                            title='Delivery address'
                            buttonStyle={styles.buttonStyle}
                            icon={
                                    <Icon 
                                        name="right"
                                        size={15}
                                        color='gray'
                                    />
                            } iconRight
                            onPress={() => console.log('credit card')}
                        />
                        <Button 
                            type='clear'
                            title='Change mail address'
                            buttonStyle={styles.buttonStyle}
                            icon={
                                    <Icon 
                                        name="right"
                                        size={15}
                                        color='gray'
                                    />
                            } iconRight
                            onPress={() => console.log('mail')}
                        />
                        <Button 
                            type='clear'
                            title='Change password'
                            buttonStyle={styles.buttonStyle}
                            icon={
                                    <Icon 
                                        name="right"
                                        size={15}
                                        color='gray'
                                    />
                            } iconRight
                            onPress={() => console.log('pwd')}
                        />
                        <Button 
                            type='clear'
                            title='Change username'
                            buttonStyle={styles.buttonStyle}
                            icon={
                                    <Icon 
                                        name="right"
                                        size={15}
                                        color='gray'
                                    />
                            } iconRight
                            onPress={() => console.log('username')}
                        />
                        <Button 
                            type='clear'
                            title='Credit cards'
                            buttonStyle={styles.buttonStyle}
                            icon={
                                    <Icon 
                                        name="right"
                                        size={15}
                                        color='gray'
                                    />
                            } iconRight
                            onPress={() => console.log('credit card')}
                        />
                         <Button 
                            ViewComponent={LinearGradient}
                            title='Exit'
                            linearGradientProps={{
                                colors: ['#ff0073', '#d400ff', '#0a00c9'],
                                start: {x: 0, y: 0.2},
                                end: {x: 1, y: 1}                        
                            }}
                            buttonStyle={{width: 200, alignSelf: 'center', marginTop: 40, marginBottom: 20, borderRadius: 20}} 
                            onPress={() => this.props.navigation.navigate(this.props.route.params.initialRoute)}
                        />
                    </View>
                </ThemeProvider>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        borderBottomWidth: 1, 
        justifyContent:'space-between', 
        paddingRight: 30, 
        paddingLeft: 30, 
        paddingBottom: 10, 
        paddingTop: 10}
})