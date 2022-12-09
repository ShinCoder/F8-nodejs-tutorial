// const Course = require("../models/Course");
// const { multipleMongooseToObject } = require("../../util/mongoose");
const db = require('../../config/db/index');

class SiteController {
    // [GET] /
    index(req, res, next) {
        // Course.find({}, function (err, courses) {
        //     if (!err) {
        //         res.json(courses);
        //     } else {
        //         next(err);
        //     }
        // });

        // Course.find({})
        //     .then(courses => {
        //         res.render('home', {
        //             courses: multipleMongooseToObject(courses)
        //         });
        //     })
        //     .catch(error => next(error));
        // db.select()
        // .from('courses')
        // .where('deleted', null)
        // .then(temp => console.log(temp));

        db.select()
            .from('courses')
            .where('deleted', null)
            .orWhere('deleted', 0)
            .then(courses => res.render('home', { courses: courses }))
            .catch(error => next(error));
    }

    // [GET] /search
    search(req, res) {
        res.render('search', {
            look: req.query.search,
            empty: req.query.search == undefined || req.query.search == ''
        });
    }
}

module.exports = new SiteController;
