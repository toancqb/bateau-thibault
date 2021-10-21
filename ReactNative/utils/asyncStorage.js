import AsyncStorage from '@react-native-async-storage/async-storage';

export const retrieveCartFromLocalStorage = async () => {
    try {
      const products = await AsyncStorage.getItem('cart')
      return JSON.parse(products).filter(p => p !== null)
    } catch (e) {
      // saving error
      console.log(e)
      return []
    }
  }

export const storeCartToAsyncStorage = async (products) => {
    try {
      await AsyncStorage.setItem('cart', JSON.stringify(products))
    } catch (e) {
      // saving error
      console.log(e)
    }
  }