const fs = require('fs');
const path = require('path');
const comidas = require('../data/menu.json')

module.exports = {
    detalleMenu: (req,res) => {

        let comidaId = comidas.find(comida => comida.id === +req.params.id)

        res.render('detalleMenu',{
            title: 'detalle del plato',
            comidaId
        })
    }
}