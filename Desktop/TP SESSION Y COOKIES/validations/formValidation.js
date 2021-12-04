const {check} = require('express-validator');

module.exports = [
    check('name')
    .notEmpty().withMenssage('Debes completar el nombre'),

    check('color')
    .notEmpty.withMenssage('Debes seleccionar el color'),

    check('email')
    .notEmpty().withMenssage('Debes completar el email')
    .isEmail().withMenssage('Email inválido'),

    check('age')
    .optional({nullable: true, checkFalsy: true}).isInt().withMenssage('Debes ingresar un número')
]