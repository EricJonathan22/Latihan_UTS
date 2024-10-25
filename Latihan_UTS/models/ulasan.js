const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");

const ulasanSchema = new mongoose.Schema({
    produk_id : {
        type:ObjectId,
        reff: 'produk',
        required: true,
    },
    pengguna_Id: {
        type:ObjectId,
        reff : 'pengguna',
        required : true,
    },
    rating: {
        type: Number,
    },
    komentar : {
        type: String,
    },
    tanggal_ulasan: {
        type: Date,
    },

});

const ulasan = mongoose.model('Kategori', KategoriSchema);
module.exports = ulasan;