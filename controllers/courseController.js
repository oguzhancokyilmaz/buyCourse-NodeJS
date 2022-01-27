const Course = require('../models/Course');

exports.createCourse = async (req, res) => {
  const course = await Course.create(req.body);
  try {
    res.status(201).json({
      // kurs oluştur sayfamız hazır olmadığı için 200 komutuyla, json dosyası dönüyoruz.
      status: 'success',
      course,
    });
  } catch {
    res.status(400).json({
      // kurs oluştur sayfamız hazır olmadığı için 200 komutuyla, json dosyası dönüyoruz.
      status: 'Bad Request',
      error,
    });
  }
};
