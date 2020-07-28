import AsyncStorage from '@react-native-community/async-storage'

export default class Storage {

    static saveItems = async (items) => {
        try {
            let toStore = JSON.parse(await AsyncStorage.getItem('items'))
            let nbToStore =  await AsyncStorage.getItem('nbItem')

            if (toStore == null)
                toStore = []

            toStore.push(items[0])
            nbToStore++

            await AsyncStorage.setItem('items', JSON.stringify(toStore))
            await AsyncStorage.setItem('nbItem', nbToStore.toString())
        }
        catch (err) {
            console.log(err)
        }
    }

    static getItems = async () => {
        try {
            let items = JSON.parse(await AsyncStorage.getItem('items'))
            let nbItem = await AsyncStorage.getItem('nbItem')
            return ({items, nbItem})
        }
        catch (err) {
            console.log(err)
        }
    }
}