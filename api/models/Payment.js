/**
 * Payment.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'tbl_payments',
  attributes: {
    paym_id: {
      primaryKey: true,
      unique: true,
      autoIncrement: true,
      type: 'integer'
    },
    paym_mont: 'decimal',
    paym_card: 'string',
    paym_card_name: 'string',
    paym_status: {
      type: 'string',
      defaultsTo: '0'
    },
    paym_phone: 'string',
    paym_mail: 'string',
    paym_ubg_dst: 'string',
    paym_ubg_prv: 'string',
    paym_ugb_dpt: 'string',
    paym_dir: 'string',
    est_reg:  {
      type: 'integer',
      defaultsTo: 1
    },
    fec_reg: {
      type: 'string',
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
