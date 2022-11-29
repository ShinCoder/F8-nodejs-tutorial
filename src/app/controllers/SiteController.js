const Course = require("../models/Course");

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

        Course.find({})
            .then(courses => res.render('home', {
                
            }))
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
