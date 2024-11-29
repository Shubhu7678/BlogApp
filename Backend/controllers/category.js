import Category from '../models/Category.js';

export const addCategory = async (req, res) => { 

    try {

        const { name, description } = req.body;

        if (!name || !description) { 

            return res.status(400).json({

                success: false,
                message : 'All fields are required'
            })
        }

        const categoryExist = await Category.findOne({ name });

        if (categoryExist) { 

            return res.status(400).json({

                success: false,
                message : 'Category already exists'
            })
        }

        const category = await Category.create({ name, description });

        return res.status(200).json({

            success: true,
            message: 'Category created successfully',
            data : category
        });

    } catch (error) { 

        console.log("Error occured : ", error);
        return res.status(500).json({

            success: false,
            message: 'Internal Server Error',
        })

    }
}

export const getAllCategories = async (req, res) => { 

    try {
         
        const categories = await Category.find({});

        return res.status(200).json({

            success: true,
            message: 'Categories fetched successfully',
            data: categories
        });

    } catch (error) { 

        return res.status(500).json({

            success: false,
            message: 'Internal Server Error',
        })
    }
}

export const getCategoryById = async (req, res) => { 

    try {
        const { categoryId } = req.params;

        const categoryDetails = await Category.findById({ _id: categoryId });

        if (!categoryDetails) { 

            return res.status(400).json({

                success: false,
                message : 'Category does not exist'
            })
        }

        return res.status(200).json({

            success: true,
            message: 'Category fetched successfully',
            data : categoryDetails,
        })

    } catch (error) { 

        console.log("Error occured : ", error);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}