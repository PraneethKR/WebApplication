exports.createcustomerValidation = (req, res, next) => {
    const errors = [];
    if (!req.body.firstName || req.body.firstName === "") {
        errors.push({
            field: "firstName",
            message: "This is a mandatory field"
        })
    }
    if (!req.body.lastName || req.body.lastName === "") {
        errors.push({
            field: "lastName",
            message: "This is a mandatory field"
        })
    }
    if (!req.body.email || req.body.email === "") {
        errors.push({
            field: "email",
            message: "This is a mandatory field"
        })
    }
    if (!req.body.password || req.body.password === "") {
        errors.push({
            field: "password",
            message: "This is a mandatory field"
        })
    }
    if (errors.length > 0) {
        res.status(400).json({
            message: "The following are the errors found in the data",
            data: errors
        })
    }
    else {
        next();
    }


}

exports.validateCreateProperty = (req, res, next) => {
    const errors = [];
    if (!req.body.title || req.body.title === "") {
        errors.push({
            field: "title",
            message: "This is a mandatory field"
        })
    }
    if (!req.body.rentalPrice || req.body.rentalPrice === "") {
        errors.push({
            field: "rentalPrice",
            message: "This is a mandatory field"
        })
    }
    if (!req.body.type || req.body.type === "") {
        errors.push({
            field: "type",
            message: "This is a mandatory field"
        })
    }
    if (!req.body.location || req.body.location === "") {
        errors.push({
            field: "location",
            message: "This is a mandatory field"
        })
    }
    if ((req.body.bestSeller != true && req.body.bestSeller != false) || req.body.bestSeller === "") {
        errors.push({
            field: "bestSeller",
            message: "This is a mandatory field"
        })
    }
    if (!req.body.amenities || req.body.amenities.length == 0) {
        errors.push({
            field: "amenities",
            message: "This is a mandatory field"
        })
    }
    if (errors.length > 0) {
        res.status(400).json({
            message: "The following are the errors found in the data",
            data: errors
        })
    }
    else {
        next();
    }
}


exports.validatePutData = (req, res, next) => {
    const errors = [];
    if (req.body.__id === "") {
        errors.push({
            field: "__id",
            message: "__id cannot be updated"
        })
    }
    if (req.body.title === "") {
        errors.push({
            field: "title",
            message: "Field cannot be null"
        })
    }
    if (req.body.rentalPrice === "") {
        errors.push({
            field: "rentalPrice",
            message: "Field cannot be null"
        })
    }
    if (req.body.description === "") {
        errors.push({
            field: "description",
            message: "Field cannot be null"
        })
    }
    if (req.body.photo === "") {
        errors.push({
            field: "photo",
            message: "Field cannot be null"
        })
    }
    if (req.body.type === "") {
        errors.push({
            field: "type",
            message: "Field cannot be null"
        })
    }
    if (req.body.location === "") {
        errors.push({
            field: "location",
            message: "Field cannot be null"
        })
    }
    if (req.body.bestSeller === "") {
        errors.push({
            field: "bestSeller",
            message: "Field cannot be null"
        })
    }
    if (req.body.houseRules === "") {
        errors.push({
            field: "houseRules",
            message: "Field cannot be null"
        })
    }
    if (req.body.amenities === "") {
        errors.push({
            field: "amenities",
            message: "Field cannot be null"
        })
    }


    if (errors.length > 0) {
        res.status(400).json({
            message: "The following are the errors found in the data",
            data: errors
        })
    }
    else {
        next();
    }
}
