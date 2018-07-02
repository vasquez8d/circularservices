/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'tbl_users',
  attributes: {
    user_id: {
      primaryKey: true,
      unique: true,
      autoIncrement: true,
      type: 'integer'
    },
    user_mail: {
      type: 'string',
      required: true,
      unique: true
    },
    user_pw: {
      type: 'string',
      required: true
    },
    user_pri_nom: {
      type: 'string',
      required: true
    },
    user_seg_nom: 'string',
    user_ape_pat: {
      type: 'string',
      required: true
    },
    user_ape_mat: 'string',
    user_fec_nac: 'string',
    user_num_cell: 'string',
    rol_id: {
      type: 'integer',
      required: true
    },
    user_reg_provider: {
      type: 'string'
    },
    user_reg_provider_id : {
      type: 'string'
    },
    user_dir : {
      type: 'string'
    },
    user_reg_provider_photo : {
      type: 'string',
      defaultsTo: 'assets/images/users/default.jpg'
    },
    user_dni : {
      type: 'string'
    },
    est_reg:  {
      type: 'integer',
      defaultsTo: 1
    },
    fec_reg: {
      type: 'datetime',
      defaultsTo: function () {
        return new Date();
      }
    },
    usu_reg: {
      type: 'integer',
      required: true
    }
  },
  autoCreatedAt: false,
  autoUpdatedAt: false
};

