import { Product } from "../models/product";
import { validateProduct } from "../validation/product";

//Create a Product
export const createProduct = async (req, res) => {
  const { error } = validateProduct(req.body);
  if (error) {
    return res.status(400).json({ validationError: error.details[0].message });
  }
  let product = new Product({
    name: req.body.name,
    image: req.body.image,
    brand: req.body.brand,
    category: req.body.category,
    price: req.body.price,
    description: req.body.description,
  });

  await product.save();
  return res.status(201).json({
    message: "product created successfully",
    product,
    url: `http:localhost:5000/api/products/${product._id}`,
  });
};
