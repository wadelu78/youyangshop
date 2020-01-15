const mongoose = require('mongoose')

const config = require('config')

const db = config.get('mongoURI')

const connectDB = async () => {

  //The async/await version
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      //the next two lines is used to get rid of some deprecation warnings
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    console.log('MongoDB connected')
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }

  //The promise version
  //I also need to get rid of the "async" keyword before the arrow function

  // mongoose.connect(db, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true
  // })
  //   .then(() => console.log('MongoDB Connected'))
  //   .catch(err => {
  //     console.error(err.message)
  //     process.exit(1)
  //   })
}

module.exports = connectDB