import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc   Fetch all products
// @route  GET/api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  // in order to not use try-catch in every block, we will be using expres-async handler
  res.json(products);
});

// @desc   Fetch single product
// @route  GET/api/products/:id
// @access Public
const getProductByID = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("product not found");
  }
});

// @desc   Delete product
// @route  DELETE /api/products/:id
// @access Private , Admin

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "product removed" });
  } else {
    res.status(404);
    throw new Error("product not found");
  }
});

// @desc   Create a  product
// @route  POST /api/products
// @access Private , Admin

const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample Name",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    brand: "sample brand",
    category: "sample category",
    countInStock: 0,
    numReviews: 0,
    description: "sample description",
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @desc   Update a  product
// @route  PUT /api/products/:id
// @access Private , Admin

const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;

  const product = await  Product.findById(req.params.id)

  if(product)
  {
    product.name = name 
    product.price=price
    product.description = description
    product.brand=brand
    product.image=image
    product.category=category
    product.countInStock = countInStock

    const updatedProduct = await product.save();
    res.json(updatedProduct);  
  }else{
    res.status(404)
    throw new Error('product not found')
  }
  
});

export { getProducts, getProductByID, deleteProduct, createProduct, updateProduct};
