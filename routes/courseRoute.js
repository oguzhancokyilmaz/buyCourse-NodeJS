const express = require('express');
const courseController = require('../controllers/courseController');


const router = express.Router(); //express'de router diye bir fonksiyon var

router.route('/').post(courseController.createCourse); // http://localhost:3000/course - eğer 'yeniKurs' gelseydi route'dan http://localhost:3000/course/yeniKurs  gibi düşünecektik.

router.route('/').get(courseController.getAllCourses);
router.route('/:slug').get(courseController.getCourse);

module.exports = router;
