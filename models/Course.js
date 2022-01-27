const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  name: {
    type: String,
    unique: true, // uniq olmasını istiyoruz isimlerin
    required: true, // doldurulması zorunlu bilgi
  },
  description: {
    type: String,
    required: true, // doldurulması zorunlu bilgi
    trim: true, // Veri girerken başında ve sonunda oluşan boşlukları giderir :)
  },
  createdAt: {
    type: Date,
    default: Date.now, // doldurulması zorunlu bilgi
  },
});

const Course = mongoose.model('Course', CourseSchema); // döküman ismi,şema

module.exports = Course;
