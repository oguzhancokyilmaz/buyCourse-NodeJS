const Course = require('../models/Course');

exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);

    res.status(201).json({
      // kurs oluştur sayfamız hazır olmadığı için 200 komutuyla, json dosyası dönüyoruz.
      status: 'success',
      course,
    });
  } catch(error) {
    res.status(400).json({
      // kurs oluştur sayfamız hazır olmadığı için 200 komutuyla, json dosyası dönüyoruz.
      status: 'Bad Request',
      error,
    });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();

    res.status(200).render('courses', {
      courses,
      page_name: 'courses',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};

exports.getCourse = async (req, res) => {
  try {
    const course = await Course.findOne({slug: req.params.slug})

    res.status(200).render('course', {
      course,
      page_name: 'courses',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    });
  }
};