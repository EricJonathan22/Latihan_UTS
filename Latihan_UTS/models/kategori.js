const { default: mongoose } = require("mongoose");
const moongose = require("mongoose");

const KategoriSchema = new mongoose.Schema({
    nama_kategori : {
        type:String,
    },
    deskripsi: {
        type:String,
    },
    created_at:{
        type: Date,
    },
    updated_at : {
        type:Date,
    },
    status: {
        type: Boolean,
    },

});

const kategori = mongoose.model('Kategori', KategoriSchema);
module.exports = kategori;