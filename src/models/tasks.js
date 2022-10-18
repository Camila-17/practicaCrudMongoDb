const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nombre: String,
    correo: String, 
    rolU: String,
    contraseña: String
});

module.exports = mongoose.model('tasks', UserSchema);