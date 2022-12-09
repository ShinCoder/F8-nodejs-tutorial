// const Course = require("../models/Course");
// const { multipleMongooseToObject } = require("../../util/mongoose");
const db = require('../../config/db/index');

class MeController {
    // [GET] /me/stored/courses 
    storedCourses(req, res, next) {
        // Promise.all([Course.find({}), Course.countDocumentsDeleted()])
        //     .then(([courses, deletedCount]) => {
        //         res.render('me/stored-courses', {
        //             deletedCount: deletedCount, 
        //             courses: multipleMongooseToObject(courses) 
        //         })
        //     })
        //     .catch(error => next(error));

        Promise.all([
            db.select()
                .from('courses')
                .where('deleted', null)
                .orWhere('deleted', 0),
            db('courses')
                .count('_id as count')
                .where('deleted', 1)
        ])
            .then(([courses, deletedCount]) => {
                res.render('me/stored-courses', {
                    deletedCount: deletedCount[0].count,
                    courses: courses
                })
            })
            .catch(error => next(error));
    }

    // [GET] /me/trash/courses 
    trashCourses(req, res, next) {
        // Course.findDeleted({})
        //     .then(courses => { res.render('me/trash-courses', { courses: multipleMongooseToObject(courses) }) })
        //     .catch(error => next(error));

        db.select()
        .from('courses')
        .where('deleted', 1)
        .then(courses => res.render('me/trash-courses', { courses: courses }))
        .catch(error => next(error));
    }
}

module.exports = new MeController;
