const fs = require('fs');
const path = require('path');
const comidas = require('../data/menu.json')


module.exports = {
    index: (req,res) => {

        res.render('index',{
            title: 'Pimienta & Sal',
            comidas
        })
    },

    about: (req,res) => {
        res.render('about',{
            title:'About'
        })
    }
}