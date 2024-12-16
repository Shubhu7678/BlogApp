
export const addBlog = (req, res) => { 

    try {

        console.log(req.body);
        console.log(req.file);


    } catch (error) { 
        
        console.log("Error occured in add blog : ", error);
        return res.status(500).json({

            success: false,
            message : 'Internal Server Error in add blog'
        })
    }
}