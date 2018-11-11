const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getUsers,
  getUser,
  saveUser,
  deleteUser,
  updateUser
}

function getUsers (testDb) {
  const db = testDb || connection
  return db('users').select()
}

function getUser (id, testDb) {
  const db = testDb || connection
  return db('users').where('id', id).first()
}

function saveUser(user, testDb) {
  const db = testDb || connection
  return db('users').insert(user)
}

function deleteUser(id, testDb) {
  const db = testDb || connection
  return db('users').where('id', id).del()
}

function updateUser(id, user, testDb) {
  const db = testDb || connection
  return db('users').where('id', id).update(user)
}
