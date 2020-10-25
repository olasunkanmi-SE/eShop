import { Product } from "../models/product.js";
import {
  validateProduct,
  validateProductUpdate,
} from "../validation/product.js";

//Create a Product
export const createProduct = async (req, res) => {
  const { error } = validateProduct(req.body);
  if (error) {
    return res.status(400).json({ validationError: error.details[0].message });
  }

  let product = new Product({
    user: req.user._id,
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

//Get product by Id

export const getProductById = async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.status(200).json({ product });
  } else {
    return res.status(404).json({ message: "product does not exist" });
  }
};

//Get all products

export const getProducts = async (req, res) => {
  const products = await Product.find({}).sort({ createdAt: -1 });
  if (products.length > 0) {
    return res.status(200).json({ count: products.length, products });
  } else {
    return res.status(404).json({ message: "no products found" });
  }
};

//Update a Product

export const updateProduct = async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (product) {
    const { errors, isValid } = validateProductUpdate(req.body);
    if (isValid) {
      const productFields = {};
      if (req.body.name) {
        productFields.name = req.body.name;
      }
      if (req.body.brand) {
        productFields.brand = req.body.brand;
      }
      if (req.body.category) {
        productFields.category = req.body.category;
      }
      if (req.body.description) {
        productFields.description = req.body.description;
      }
      if (req.body.countInStock) {
        productFields.countInStock = req.body.countInStock;
      }
      if (req.body.price) {
        productFields.price = req.body.price;
      }
      product = await Product.findByIdAndUpdate(
        { _id: product._id },
        { $set: productFields },
        { new: true }
      );
      return res.status(201).json({
        message: "success",
        product,
        url: `http://localhost:5000/api/products/${product._id}`,
      });
    } else {
      return res.status(400).json({ errors });
    }
  } else {
    return res.status(404).json({ message: "Error: Product does not exist" });
  }
};

//Delete a Product

export const deleteProduct = async (req, res) => {
  let product = await Product.findById(req.params.id);
  if (product) {
    await Product.findOneAndRemove({ _id: product._id });
    return res.status(201).json({ message: "product deleted successfully" });
  } else {
    return res.status(404).json({ message: "product does not exist" });
  }
};
