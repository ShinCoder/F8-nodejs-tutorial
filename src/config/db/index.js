// const mongoose = require('mongoose');

// async function connect() {
//     try {
//         await mongoose.connect('mongodb://127.0.0.1:27017/f8_education_dev');
//         console.log("Connect successfully");
//     } catch (error) {
//         console.log("Connect failure");
//     }
// }

// module.exports = { connect };

const knex = require('knex')({
    client: 'mysql2',
    version: '15.1',
    connection: {
      host : '127.0.0.1',
      port : 3306,
      user : 'root',
      password : '',
      database : 'f8_education_dev'
    }
});

module.exports = knex;
