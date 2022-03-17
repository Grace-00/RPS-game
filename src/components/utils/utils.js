import AsyncStorage from "@react-native-async-storage/async-storage"

export const storeData = async (key, value) => {
    try {
        let val = JSON.stringify(value)
        await AsyncStorage.setItem(key, val)
    } catch (e) {
        console.log('errore', e)
    }
}

export const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        let val = JSON.parse(jsonValue)

        return jsonValue != null ? val : null;
    } catch (e) {
        // error reading value
    }
}

export const getRandomNumber = (min, max) => {
    let num = Math.round(Math.random() * max - min) + min;
    return num;
}