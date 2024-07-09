// Types of dates for the object
export interface ProductEntry {
  idProduct: number
  nameProduct: string
  descriptionProduct: string
  priceProduct: number
  imgProduct: string
}

// export type NonSensitiveInfoProductEntry = Pick<ProductEntry, 'id_product' | 'name_product' | 'description_product'>

export type NonSensitiveInfoProductEntry = Omit<ProductEntry, 'price_product'>
