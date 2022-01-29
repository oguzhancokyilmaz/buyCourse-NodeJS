const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slugify = require('slugify');

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
  slug: {
    type: String,
    unique: true,
  },
});

CourseSchema.pre('validate', function (next) { // pre veritabanına kaydetmeden önce yap.
  this.slug = slugify(this.name, { // burdaki modelin ismini slug yap
    lower: true,
    strict: true, // string karakterleri kullan  ':' varsa mesela alma
  });
  next();  // bir sonraki middleware'e geçmesi için next metodu kullandık
});

const Course = mongoose.model('Course', CourseSchema); // döküman ismi,şema

module.exports = Course;
