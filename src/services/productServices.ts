import { ProductEntry, NonSensitiveInfoProductEntry } from '../types'
import productData from './products.json'

// Array to the type proriti created     Array ---> P[]
const products: ProductEntry[] = productData as ProductEntry[]

export const getEntries = (): ProductEntry[] => products

export const findById = (idProduct: number): ProductEntry | undefined => {
  const entry = products.find(p => p.idProduct === idProduct)
  return entry
}

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoProductEntry[] => {
  return products.map(({ idProduct, nameProduct, descriptionProduct, priceProduct }) => {
    return { idProduct, nameProduct, descriptionProduct, priceProduct }
  })
}

// export const addEntry = (idProduct: number, nameProduct: string, descriptionProduct: string, priceProduct: number): ProductEntry => {
//   const newProductEntry = {
//     idProduct: Math.max(...products.map(p => p.idProduct)) + 1,
//     nameProduct,
//     descriptionProduct,
//     priceProduct

//   }

//   products.push(newProductEntry)
//   return newProductEntry
// }
