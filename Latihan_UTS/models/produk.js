const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");

const produkSchema = new mongoose.Schema({
    nama: {
        type:String,
    },
    deskripsi: {
        type:String,
    },
    harga:{
        type: Number,
    },
    stok: {
        type:Number,
    },
    kategori_id: {
        type: mongoose.Schema.Types.ObjectId,
        reff: "Kategori",
        required:true,
    },

});

const Produk = mongoose.model('produk', produkSchema);
module.exports = Produk;