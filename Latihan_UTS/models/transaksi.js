const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");

const transaksiSchema = new mongoose.Schema({
    produk_id : {
        type:ObjectId,
        reff : 'produk',
        required : true,
    },
    pengguna_Id: {
        type:Number,
        reff : "pengguna",
        required : true,
    },
    jumlah:{
        type: Date,
    },
    total_harga : {
        type:Number,
    },
    tanggal_transaksi: {
        type: Date,
        reff : 'kategori',
        required : true,
    },

});

const transaksi = mongoose.model('transaksi', KategoriSchema);
module.exports = transaksi;