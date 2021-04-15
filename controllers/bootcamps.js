const Bootcamp = require('../models/Bootcamp');


// @desc Get all bootcamps
// @route GET /api/v1/bootcamps
// @access Public
exports.getBootcamps = (req, res, next) => {

    res.status(200).json({
        success: true,
        msg: 'Show all bootcamps',
        hello: req.hello
    });

}
// @desc Get single bootcamps
// @route GET /api/v1/bootcamps/:id
// @access Public
exports.getBootcamp = (req, res, next) => {

    res.status(200).json({
        success: true,
        msg: `Show bootcamps ${req.params.id}`
    });

}
// @desc Create new bootcamps
// @route POST /api/v1/bootcamps/:id
// @access Private
exports.createBootcamps = async (req, res, next) => {
   
   try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
        success: true,
        data: bootcamp
    })
   } catch (error) {
        
        res.status(400).json({
            success: false
        })
   }
   
   
}
// @desc Update bootcamps
// @route PUT /api/v1/bootcamps/:id
// @access Private
exports.updateBootcamps = (req, res, next) => {

    res.status(200).json({
        success: true,
        msg: `Update bootcamps ${req.params.id}`
    });

}
// @desc delete bootcamps
// @route DELETE /api/v1/bootcamps/:id
// @access Private
exports.deleteBootcamps = (req, res, next) => {

    res.status(200).json({
        success: true,
        msg: `Delete bootcamps ${req.params.id}`
    });

}