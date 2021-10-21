import productCategories from '../assets/data/product_categories.json'
import products from '../assets/data/products.json'
import ships from '../assets/data/ships.json'
import restaurants from '../assets/data/restaurants.json'
import recipes from '../assets/data/recipes.json'

export const ProductCategories = [...productCategories]
export const Products = [...products]
export const Bateaux = {...ships}
export const Restaurants = {...restaurants}
export const Recettes = {...recipes}