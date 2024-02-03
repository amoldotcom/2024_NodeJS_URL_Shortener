const { getAllDoc, deleteDocByID, createDoc, getLongURL } = require('../services/crudDB.js')

class indexController {

    static showURLGET = async (req, res, next) => {
        try {
            const allDoc = await getAllDoc();
            res.render('index', { title: 'URL Shortener API', data: allDoc });
        }
        catch (error) {
            next(error);
        }
    }

    static insertURLPOST = async (req, res, next) => {
        try {
            const result = await createDoc(req.body);
            res.redirect('/');
        }
        catch (error) {
            next(error);
        }
    }
    static deleteURLGET = async (req, res, next) => {
        try {
            const result = await deleteDocByID(req.params.id);
            res.redirect('/');
        }
        catch (error) {
            next(error);
        }
    }

    static toShortURLGET = async (req, res, next) => {
        try {
            const shortURL = req.params.id;
            const longURL = await getLongURL(shortURL);
            // console.log(longURL);
            res.redirect(longURL);
        }
        catch (error) {
            next(error);
        }
    }
};

module.exports = { indexController };