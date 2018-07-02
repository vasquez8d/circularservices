create table tbl_users
(user_id int,
user_mail VARCHAR(100),
user_pw VARCHAR(100),
user_pri_nom VARCHAR(50),
user_seg_nom VARCHAR(50),
user_ape_mat VARCHAR(50),
user_fec_nac VARCHAR(20),
user_num_cell VARCHAR(20),
user_dni VARCHAR(20),
rol_id int,
est_reg int,
fec_reg VARCHAR(50),
usu_reg int,
user_reg_provider VARCHAR(50),
user_reg_provider_id VARCHAR(50),
user_reg_provider_photo VARCHAR(200),
user_dir VARCHAR(150),
CONSTRAINT tbl_users_pk PRIMARY KEY (user_id));
create SEQUENCE tbl_users_seq START WITH 1 INCREMENT BY 1;
--nextval('tbl_users_seq'::regclass)

create table tbl_payments
(paym_id int,
paym_mont NUMERIC(10,2),
paym_card VARCHAR(100),
paym_card_name VARCHAR(150),
paym_status VARCHAR(1),
paym_phone VARCHAR(50),
paym_mail VARCHAR(50),
paym_ubg_dst VARCHAR(50),
paym_ubg_prv VARCHAR(50),
paym_ugb_dpt VARCHAR(50),
paym_dir VARCHAR(200),
est_reg int,
fec_reg VARCHAR(50),
usu_reg int,
CONSTRAINT tbl_payments_pk PRIMARY KEY (paym_id));
create SEQUENCE tbl_payments_seq START WITH 1 INCREMENT BY 1;
--nextval('tbl_payments_seq'::regclass)