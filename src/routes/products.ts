import express from 'express' // ESModules
import * as productService from '../services/productServices'

const router = express.Router()

// ENDPOINTS:
router.get('/', (_req, res) => {
  res.send(productService.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const product = productService.findById(+req.params.id)

  return (product != null)
    ? res.send(product)
    : res.sendStatus(404)
})

router.post('/', (_req, res) => {
  res.send('Saving a product!')
})

router.post('/', (req, res) => {
  const { idProduct, nameProduct, descriptionProduct, priceProduct } = req.body

  const newProductEntry = productService.addEntry(
    idProduct,
    nameProduct,
    descriptionProduct,
    priceProduct
  )

  res.json(newProductEntry)
})

export default router
