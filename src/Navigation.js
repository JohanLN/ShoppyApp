import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './pages/Login'
import Market from './pages/Market'
import Account from './pages/Account'
import Shop from './pages/Shop'

const Stack = createStackNavigator()

export default function Navigation()
{
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode={"none"} initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Market" component={Market} />
                <Stack.Screen name="Account" component={Account} />
                <Stack.Screen name="Shop" component={Shop} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}