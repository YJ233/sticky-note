var Sequelize = require('sequelize')

var path = require('path')
var sequelize = new Sequelize(undefined, undefined, undefined, {
  host: 'localhost',
  dialect: 'sqlite',
  storage: path.join(__dirname,'../database/database.sqlite')
});

// sequelize
//   .authenticate()
//   .then(function(err) {
//     console.log('数据库连接成功');
//   })
//   .catch(function (err) {
//     console.log('不能连接database:', err);
//   });

	var Note = sequelize.define('user', {
  text: {
    type: Sequelize.STRING
  }
});

// Note.sync().then(function() {
// 	Note.create({text: 'hello word'})
// }).then(function() {
// 	Note.findAll({raw: true}).then(function(notes) {
// 		console.log(notes)
// 	})
// })

// Note.findAll({raw: true,where:{id:2}}).then(function(notes) {
// 	console.log(notes);
// })

module.exports.Note = Note
