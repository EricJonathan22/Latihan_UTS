const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");

const supplierSchema = new mongoose.Schema({
    nama_supplier: {
        type:String,
    },
    alamat: {
        type:String,
    },
    kontak:{
        type: String,
    },
    email: {
        type:String,
    },
    tanggal_mendaftar: {
        type: Date,

    },

});

const supplier = mongoose.model('supplier', supplierSchema);
module.exports = supplier;