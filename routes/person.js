var express = require('express');
var router = express.Router();

var Person = require('../models/Person');


router.get('/', function(req, res, next){
    Person.find((function(err, data){
            if(err){
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
                });
            }
            res.status(200).json({
                message: 'success',
                obj: data
            });
            
        })
    );
});

router.patch('/:id', function(req, res, next){
    Person.findById(req.params.id, function(err, docs){
        if(err){
                    return res.status(500).json({
                        title: 'An error occured',
                        error: err
                    });
                }
                if(!docs){
                    return res.status(500).json({
                        title: 'No data found',
                        error: { message:'Message not found' }
                    });
                }
                docs.Name = req.body.Name;
                docs.Age = req.body.Age;
                docs.Gender = req.body.Gender;
                docs.Mobile_Number = req.body.Mobile_Number;
                docs.save(function(err, result){
                    if(err){
                    return res.status(500).json({
                        title: 'An error occured',
                        error: err
                    });
                }
                res.status(201).json({
                    message: 'Updated Message ',
                    obj: result
                });
                });
    });
});

router.delete('/:id', function(req, res, next){
    Person.findById(req.params.id, function(err, docs){
        if(err){
                    return res.status(500).json({
                        title: 'An error occured',
                        error: err
                    });
                }
                if(!docs){
                    return res.status(500).json({
                        title: 'No docs found',
                        error: { message:'docs not found' }
                    });
                }
                docs.remove(function(err, result){
                    if(err){
                    return res.status(500).json({
                        title: 'An error occured',
                        error: err
                    });
                }
                res.status(201).json({
                    message: 'Deleted data ',
                    obj: result
                });
                });
    });
});

module.exports = router;