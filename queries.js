const database = require('./database-connection');

module.exports = {
    list(tableName) {
      return database(tableName).select('*')
    },
  
    read(tableName, id) {
      return database(tableName).select('*').where('id', id).first()
    },
  
    create(tableName, item) {
      return database(tableName).insert(item).returning('*')
        .then(record => record[0])
    },
  
    update(tableName, id, item) {
      return database(tableName).update(item).where('id', id).returning('*')
        .then(record => record[0])
    },
  
    delete(tableName, id) {
      return database(tableName).delete().where('id', id)
    },
  }