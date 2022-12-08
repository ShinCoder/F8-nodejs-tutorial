// const Course = require("../models/Course");
// const { mongooseToObject } = require("../../util/mongoose");
const db = require('../../config/db/index');

class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {
        // Course.findOne({ slug: req.params.slug })
        // .then(course => {
        //     res.render('courses/show', { course: mongooseToObject(course) });
        // })
        // .catch((error => next(error)));

        db('courses').where('slug', req.params.slug)
            .then(courses => {
                if (courses.length !== 0)
                    res.render('courses/show', { course: courses[0] });
                else throw new Error("404 not found");
            })
            .catch((error => next(error)));
    }

    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST] /courses/store
    async store(req, res, next) {
        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        // const course = new Course(req.body);
        // course.save()
        //     .then(() => res.redirect('/'))
        //     .catch(error => next(error));

        req.body.createdAt = (new Date).toISOString().slice(0, 19).replace('T', ' ');
        req.body.updatedAt = (new Date).toISOString().slice(0, 19).replace('T', ' ');
        req.body.slug = req.body.name.toLowerCase().replaceAll(" ", "-");

        await db('courses').insert(req.body);
        res.redirect('/');
    }

    // [GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', { course: mongooseToObject(course) }))
            .catch(error => next(error));
    }

    // [PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(error => next(error));
    }

    // [DELETE] /courses/:id
    destroy(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('/me/stored/courses'))
            .catch(error => next(error));
    }

    // [DELETE] /courses/:id/force
    forceDestroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/me/trash/courses'))
            .catch(error => next(error));
    }

    // [PATCH] /courses/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('/me/trash/courses'))
            .catch(error => next(error));
    }
}

module.exports = new CourseController; 
