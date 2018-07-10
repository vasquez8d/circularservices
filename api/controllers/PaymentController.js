/**
 * PaymentController
 *
 * @description :: Server-side logic for managing payments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var jwt = require('jsonwebtoken');
module.exports = {
    create: function(req, res)
    {
        var dataResponse = {
            data_result: "",
            res_service: "",
            des_error: ""
        };
        var jwtKey = sails.config.values.jwtkey;
        var dataToken = req.headers.authorization;
        jwt.verify(dataToken, jwtKey, function (err, decoded) {
            if (err) {
                dataResponse.res_service = "401 unauthorized";
                dataResponse.des_error = err;
                res.json(dataResponse);
            } else {
                var dataCreate = req.allParams();
                Payment.create(dataCreate, function (err, response) {
                    if (err) {
                        dataResponse.res_service = "Error creando el pago.";
                        dataResponse.des_error = err;
                        res.json(dataResponse);
                    } else {
                        response.save();
                        dataResponse.data_result = response;
                        dataResponse.res_service = "ok";
                        res.json(dataResponse);
                    }
                });
            }
        });
    },
    details: function(req, res){
        var dataResponse = {
            data_result: "",
            res_service: "",
            des_error: ""
        };
        var dataToken = req.headers.authorization;
        var jwtKey = sails.config.values.jwtkey;
        jwt.verify(dataToken, jwtKey, function (err, decoded) {
            if (err) {
                dataResponse.res_service = "401 unauthorized";
                dataResponse.des_error = err;
                res.json(dataResponse);
            } else {
                var dataDetails = req.allParams();
                try {
                    Payment.find({ paym_id: dataDetails.paym_id, est_reg: 1 })
                        .then(function (response) {
                            if (response.length > 0) {
                                dataResponse.data_result = response[0];
                                dataResponse.res_service = "ok";
                                res.json(dataResponse);
                            } else {
                                dataResponse.res_service = "No existen datos.";
                                res.json(dataResponse);
                            }
                        })
                        .catch(function (err) {
                            dataResponse.res_service = "Error obteniendo el detalle del pago.";
                            dataResponse.des_error = err;
                            res.json(dataResponse);
                        });
                } catch (err) {
                    console.log(err);
                }
            }
        });
    }
};

