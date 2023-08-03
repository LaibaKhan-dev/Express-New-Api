const { connect } = require('mongoose')
const { Product } = require('./model')
require('dotenv').config()

// Category


const postCategories = async (req, res) => {

    const { name, price, brand, category, images, description, rating, thumbnail } = req.body;
    console.log({ name, price, brand, category, images, description, rating, thumbnail })

    try {

        await connect(process.env.MONGODB_URL)
        await Product.create({ name, price, brand, category, images, description, rating, thumbnail })

        res.json({
            message: "Category Added Successfully"
        })

    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

const getCategoryByName = async (req, res) => {
    const { name } = req.query;

    try {
        await connect(process.env.MONGODB_URL);
        const category = await Category.findOne({ name: name });

        if (!category) {
            return res.status(404).json({
                message: 'Category not found',
            });
        }

        res.json({
            category: category,
        });
    } catch (error) {
        res.json({
            message: error.message,
        });
    }
};

const getCategoryById = async (req, res) => {
    const { _id } = req.query;

    try {
        await connect(process.env.MONGODB_URL);
        const category = await Category.findById(_id);

        if (!category) {
            return res.status(404).json({
                message: 'Category not found',
            });
        }

        res.json({
            category: category,
        });
    } catch (error) {
        res.json({
            message: error.message,
        });
    }
};

const updateCategoryById = async (req, res) => {
    const productId = req.params.id;
    const { category } = req.body;

    try {
        await connect(process.env.MONGODB_URL);
        const updateCategoryById = await Product.findByIdAndUpdate(
            productId,
            { category },
            { new: true }
        );

        if (updateCategoryById) {
            res.json({
                message: "category updated successfully.",
                category: updateCategoryById,
            });
        } else {
            res.json({
                message: "category not found.",
            });
        }
    } catch (error) {
        res.json({
            message: error.message,
        });
    }
};

const deleteProductsByCategory = async (req, res) => {
    const { category } = req.body;

    try {
        await connect(process.env.MONGODB_URL);
        const deletedProducts = await Product.deleteMany({ category });

        if (deletedProducts.deletedCount === 0) {
            return res.status(404).json({
                message: 'No products found for the specified category'
            });
        }

        res.json({
            message: `Deleted ${deletedProducts.deletedCount} products with the category '${category}'`,
            deletedProducts
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// Brands


const postBrands = async (req, res) => {

    const { name, price, brand, category, images, description, rating, thumbnail } = req.body;
    console.log({ name, price, brand, category, images, description, rating, thumbnail })

    try {

        await connect(process.env.MONGODB_URL)
        await Product.create({ name, price, brand, category, images, description, rating, thumbnail })

        res.json({
            message: "Brand Added Successfully"
        })

    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

const getBrand = async (req, res) => {

    const { brand } = req.query

    try {
        await connect(process.env.MONGODB_URL)
        const product = await Product.findOne({ brand: brand })
        res.json(
            {
                product: product
            }
        )

    }

    catch (error) {
        res.json(
            {
                message: error.message
            }
        )

    }
}

const getBrandById = async (req, res) => {
    const { _id } = req.query;

    try {
        await connect(process.env.MONGODB_URL);
        const brand = await Product.findById(_id);

        if (!brand) {
            return res.status(404).json({
                message: 'Brand not found'
            });
        }

        res.json({
            brand: brand
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const updateBrandById = async (req, res) => {
    const productId = req.params.id;
    const { brand } = req.body;

    try {
        await connect(process.env.MONGODB_URL);
        const updateBrandById = await Product.findByIdAndUpdate(
            productId,
            { brand },
            { new: true }
        );

        if (updateBrandById) {
            res.json({
                message: "brand updated successfully.",
                category: updateBrandById,
            });
        } else {
            res.json({
                message: "brand not found.",
            });
        }
    } catch (error) {
        res.json({
            message: error.message,
        });
    }
};

const deleteProductsByBrand = async (req, res) => {
    const { brand } = req.body;

    try {
        await connect(process.env.MONGODB_URL);
        const deletedProducts = await Product.deleteMany({ brand });

        if (deletedProducts.deletedCount === 0) {
            return res.status(404).json({
                message: 'No products found for the specified brand'
            });
        }

        res.json({
            message: `Deleted ${deletedProducts.deletedCount} products with the brand '${brand}'`,
            deletedProducts
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};


// Products


const postProducts = async (req, res) => {

    const { name, price, brand, category, images, description, rating, thumbnail } = req.body;
    console.log({ name, price, brand, category, images, description, rating, thumbnail })

    try {

        await connect(process.env.MONGODB_URL)
        await Product.create({ name, price, brand, category, images, description, rating, thumbnail })

        res.json({
            message: "producttt"
        })

    } catch (error) {
        res.json({
            message: error.message
        })
    }
}

const getAllProducts = (req, res) => {
    res.json({
        products: [
            {
                "id": 1,
                "name": "iPhone 9",
                "description": "An apple mobile which is nothing like apple",
                "price": 549,
                "rating": 4.69,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
                "images": [
                    "https://i.dummyjson.com/data/products/1/1.jpg",
                    "https://i.dummyjson.com/data/products/1/2.jpg",
                    "https://i.dummyjson.com/data/products/1/3.jpg",
                    "https://i.dummyjson.com/data/products/1/4.jpg",
                    "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                ]
            },
            {
                "id": 2,
                "name": "iPhone X",
                "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
                "price": 899,
                "rating": 4.44,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
                "images": [
                    "https://i.dummyjson.com/data/products/2/1.jpg",
                    "https://i.dummyjson.com/data/products/2/2.jpg",
                    "https://i.dummyjson.com/data/products/2/3.jpg",
                    "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
                ]
            },
            {
                "id": 3,
                "name": "Samsung Universe 9",
                "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
                "price": 1249,
                "rating": 4.09,
                "brand": "Samsung",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
                "images": ["https://i.dummyjson.com/data/products/3/1.jpg"]
            },
            {
                "id": 4,
                "name": "OPPOF19",
                "description": "OPPO F19 is officially announced on April 2021.",
                "price": 280,
                "rating": 4.3,
                "brand": "OPPO",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
                "images": ["https://i.dummyjson.com/data/products/4/1.jpg",
                    "https://i.dummyjson.com/data/products/4/2.jpg",
                    "https://i.dummyjson.com/data/products/4/3.jpg",
                    "https://i.dummyjson.com/data/products/4/4.jpg",
                    "https://i.dummyjson.com/data/products/4/thumbnail.jpg"]
            },
            {
                "id": 5,
                "name": "Huawei P30",
                "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
                "price": 499,
                "rating": 4.09,
                "brand": "Huawei",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
                "images": ["https://i.dummyjson.com/data/products/5/1.jpg",
                    "https://i.dummyjson.com/data/products/5/2.jpg",
                    "https://i.dummyjson.com/data/products/5/3.jpg"]
            },
            {
                "id": 6,
                "name": "MacBook Pro",
                "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
                "price": 1749,
                "rating": 4.57,
                "brand": "Apple",
                "category": "laptops",
                "thumbnail": "https://i.dummyjson.com/data/products/6/thumbnail.png",
                "images": ["https://i.dummyjson.com/data/products/6/1.png",
                    "https://i.dummyjson.com/data/products/6/2.jpg",
                    "https://i.dummyjson.com/data/products/6/3.png",
                    "https://i.dummyjson.com/data/products/6/4.jpg"]
            },
            {
                "id": 7,
                "name": "Samsung Galaxy Book",
                "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
                "price": 1499,
                "rating": 4.25,
                "brand": "Samsung",
                "category": "laptops",
                "thumbnail": "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
                "images": ["https://i.dummyjson.com/data/products/7/1.jpg",
                    "https://i.dummyjson.com/data/products/7/2.jpg",
                    "https://i.dummyjson.com/data/products/7/3.jpg",
                    "https://i.dummyjson.com/data/products/7/thumbnail.jpg"]
            },
            {
                "id": 8,
                "name": "Microsoft Surface Laptop 4",
                "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
                "price": 1499,
                "rating": 4.43,
                "brand": "Microsoft Surface",
                "category": "laptops",
                "thumbnail": "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
                "images": ["https://i.dummyjson.com/data/products/8/1.jpg",
                    "https://i.dummyjson.com/data/products/8/2.jpg",
                    "https://i.dummyjson.com/data/products/8/3.jpg",
                    "https://i.dummyjson.com/data/products/8/4.jpg",
                    "https://i.dummyjson.com/data/products/8/thumbnail.jpg"]
            },
            {
                "id": 9,
                "name": "Infinix INBOOK",
                "description": "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty", "price": 1099,
                "rating": 4.54,
                "brand": "Infinix",
                "category": "laptops",
                "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
                "images": ["https://i.dummyjson.com/data/products/9/1.jpg",
                    "https://i.dummyjson.com/data/products/9/2.png",
                    "https://i.dummyjson.com/data/products/9/3.png",
                    "https://i.dummyjson.com/data/products/9/4.jpg",
                    "https://i.dummyjson.com/data/products/9/thumbnail.jpg"]
            },
            {
                "id": 10,
                "name": "HP Pavilion 15-DK1056WM",
                "description": "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
                "price": 1099,
                "rating": 4.43,
                "brand": "HP Pavilion",
                "category": "laptops",
                "thumbnail": "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
                "images": ["https://i.dummyjson.com/data/products/10/1.jpg",
                    "https://i.dummyjson.com/data/products/10/2.jpg",
                    "https://i.dummyjson.com/data/products/10/3.jpg",
                    "https://i.dummyjson.com/data/products/10/thumbnail.jpeg"]
            },
        ]

    })
}

const getProduct = async (req, res) => {

    const { name } = req.query

    try {
        await connect(process.env.MONGODB_URL)
        const product = await Product.findOne({ name: name })
        res.json(
            {
                product: product
            }
        )

    }

    catch (error) {
        res.json(
            {
                message: error.message
            }
        )

    }
}

const getProductByBrand = async (req, res) => {

    const { brand } = req.query

    try {
        await connect(process.env.MONGODB_URL)
        const product = await Product.findOne({ brand: brand })
        res.json(
            {
                product: product
            }
        )

    }

    catch (error) {
        res.json(
            {
                message: error.message
            }
        )

    }
}

const getProductByCategory = async (req, res) => {

    const { category } = req.query

    try {
        await connect(process.env.MONGODB_URL)
        const product = await Product.findOne({ category: category })
        res.json(
            {
                product: product
            }
        )

    }

    catch (error) {
        res.json(
            {
                message: error.message
            }
        )

    }
}

const getProductById = async (req, res) => {
    const { _id } = req.query;

    try {
        await connect(process.env.MONGODB_URL);
        const product = await Product.findById(_id);

        if (!product) {
            return res.status(404).json({
                message: 'Product not found'
            });
        }

        res.json({
            product: product
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const updateProduct = async (req, res) => {
    const productId = req.params.id;
    const { name, price, brand, category, images, description, rating, thumbnail } = req.body;

    try {
        await connect(process.env.MONGODB_URL);
        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            { name, price, brand, category, images, description, rating, thumbnail },
            { new: true }
        );

        if (updatedProduct) {
            res.json({
                message: "Product updated successfully.",
                product: updatedProduct,
            });
        } else {
            res.json({
                message: "Product not found.",
            });
        }
    } catch (error) {
        res.json({
            message: error.message,
        });
    }
};

const deleteProductById = async (req, res) => {
    const { _id } = req.params;

    try {
        await connect(process.env.MONGODB_URL);
        const deletedProduct = await Product.findByIdAndDelete(_id);

        if (!deletedProduct) {
            return res.status(404).json({
                message: 'Product not found'
            });
        }

        res.json({
            message: 'Product deleted successfully.',
            product: deletedProduct
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};








module.exports = { getAllProducts, postProducts, postBrands, postCategories, getProduct, getBrand, getProductByBrand, getBrandById, getProductByCategory, getCategoryByName, getCategoryById, getProductById, updateProduct, updateBrandById, updateCategoryById, deleteProductById, deleteProductsByCategory, deleteProductsByBrand, };