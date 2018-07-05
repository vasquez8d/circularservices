/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var jwt = require('jsonwebtoken');

module.exports = {
    login: function(req, res) {
        var dataResponse = {
            data_result : "",
            res_service : "",
            des_error : "",
            type_error: ""
        };
        var dataLogin = req.allParams();
        User
        .find({user_mail: dataLogin.user_mail, est_reg: 1}, 
            { select: ['user_id', 'user_mail', 'user_pri_nom', 'user_pw', 'rol_id']}
             )
        .then(function(registros){
            if(registros.length>0){
                    const pwDBEncrypt = registros[0].user_pw.toString();                    
                    if (dataLogin.user_pw == pwDBEncrypt){
                        dataResponse.data_result = registros[0];
                        dataResponse.data_result.user_pw = "";
                        var jwtKey = sails.config.values.jwtkey;
                        var _token = jwt.sign({ user: dataLogin.user_mail, password: dataLogin.user_pw }, jwtKey);
                        dataResponse.token = _token;
                        dataResponse.res_service = "ok";
                        res.json(dataResponse);
                    }else{
                        dataResponse.type_error = 'password';
                        dataResponse.res_service = 'La contraseña es incorrecta.';
                        res.json(dataResponse);
                    }
            }else{
                dataResponse.type_error = 'email';
                dataResponse.res_service = 'El usuario no existe o se encuentra deshabilitado.';
                res.json(dataResponse);
            }
        })
        .catch(function(err){
            dataResponse.res_service = 'Error obteniendo el usuario.';
            dataResponse.des_error = err;
            res.json(dataResponse);
        });
    },
    tokeninfo: function (req, res) {
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
          var userDecrypt = decoded;
          User.find({
              user_mail: userDecrypt.user,
              est_reg: 1
            }, {
              select: ['user_id', 'user_mail', 'rol_id', 'user_pri_nom']
            })
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
              dataResponse.res_service = "Error obteniendo el detalle de un usuario.";
              dataResponse.des_error = err;
              res.json(dataResponse);
            });
        }
      });
    },
};