import productCategories from '../assets/data/product_categories.json'
import products from '../assets/data/products.json'
import ships from '../assets/data/ships.json'
import restaurants from '../assets/data/restaurants.json'
import recipes from '../assets/data/recipes.json'
import relayPoints from '../assets/data/relayPoints.json'
import contactJson from '../assets/data/contact.json'

export const ProductCategories = [...productCategories]
export const Products = [...products]
export const Bateaux = {...ships}
export const Restaurants = {...restaurants}
export const Recettes = {...recipes}
export const pointsRelais = [...relayPoints]
export const contact = {...contactJson}