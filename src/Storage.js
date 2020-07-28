import AsyncStorage from '@react-native-community/async-storage'

export default class Storage {

    static saveItem = async (item) => {
        try {
            if (!item)
                return false
            let toStore = JSON.parse(await AsyncStorage.getItem('items'))
            let nbToStore =  await AsyncStorage.getItem('nbItem')

            if (toStore == null)
                toStore = []

            toStore.push(item[0])
            nbToStore++

            console.log(toStore)

            await AsyncStorage.setItem('items', JSON.stringify(toStore))
            await AsyncStorage.setItem('nbItem', nbToStore.toString())
        }
        catch (err) {
            console.log(err)
        }
    }

    static saveItems = async (items, nbItem) => {
        try {
            if (!items)
                return false

                await AsyncStorage.setItem('items', JSON.stringify(items))
                await AsyncStorage.setItem('nbItem', nbItem.toString())
        }
        catch (err) {
            console.log(err)
        }
    }

    static getItems = async () => {
        try {
            let items = JSON.parse(await AsyncStorage.getItem('items'))
            let nbItem = await AsyncStorage.getItem('nbItem')
            if (!items || !nbItem)
                return false
            return ({items, nbItem})
        }
        catch (err) {
            console.log(err)
        }
    }
}