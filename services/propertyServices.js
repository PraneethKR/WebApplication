const PropertyModel = require("../models/propertyModels.js")

exports.getallproperty = (req, res) => {
    const queryString = {};
    if (req.query.location) {
        queryString.location = req.query.location;
    }
    if (req.query.bestSeller) {
        queryString.bestSeller = req.query.bestSeller;
    }
    if (req.query.type) {
        queryString.type = req.query.type
    }

    PropertyModel.find(queryString).then((property) => {
        if (property.length > 0) {
            res.json({
                message: "The property list requested is below",
                data: property
            })
        }
        else {
            res.json({ Error: "No data found with given parameter values" })
        }
    })
        .catch((err) => {
            res.status(400).json({ Error: err })
        })
}

exports.getallpropertytypes = (req, res) => {
    PropertyModel.find({}, "type").then((propertyTypes) => {
        if (propertyTypes.length > 0) {
            res.json({
                message: "The PropertyTypes for the properties are as follows",
                data: propertyTypes
            })
        }
        else {
            res.json({ Error: "No data found" })
        }
    })
        .catch((err) => {
            res.status(400).json({ Error: err });
        })
}

exports.getApropertyid = (req, res) => {
    PropertyModel.findById(req.params.id).then((propertyType) => {
        if (propertyType) {
            res.json({
                message: `The Properties with the id ${req.params.id} is:`,
                data: propertyType
            })
        }
        else {
            res.status(404).json({ Error: `There is no property with id ${req.params.id}` })
        }
    })
        .catch((err) => {
            if (err.name === "CastError" && err.kind === "ObjectId") {
                res.status(404).json({ message: `No property with id: ${req.params.id} found` })
            }
            else {
                res.status(400).json({ "ERROR": err })
            }
        })
}

exports.createAProperty = (req, res) => {
    const property = new PropertyModel(req.body)

    property.save().then((property) => {
        res.status(201).json({ data: property })
    })
        .catch((err) => {
            res.status(400).json({ Error: err })
        })
}

exports.updateAproperty = (req, res) => {
    PropertyModel.findByIdAndUpdate(req.params.id, req.body).then((property) => {
        if (property) {
            res.json({
                message: `The property with id ${req.params.id} has been updated`,
            })
        }
        else {
            res.status(404).json({ Error: `There is no property with id ${req.params.id}` })
        }
    })
        .catch((err) => {
            if (err.name === "CastError" && err.kind === "ObjectId") {
                res.status(404).json({ message: `No property with id: ${req.params.id} found` })
            }
            else {
                res.status(400).json({ "ERROR": err })
            }
        })
}

exports.deleteAproperty = (req, res) => {
    PropertyModel.findByIdAndRemove(req.params.id)
        .then((property) => {
            if (property) {
                res.status(404).json({
                    message: `The property with id ${req.params.id} has been deleted`
                })
            }
            else {
                res.status(404).json({ Error: `There is no property with id ${req.params.id}` })
            }
        })
        .catch((err) => {
            if (err.name === "CastError" && err.kind === "ObjectId") {
                res.status(404).json({ message: `No property with id: ${req.params.id} found` })
            }
            else {
                res.status(400).json({ "ERROR": err })
            }
        })
}



