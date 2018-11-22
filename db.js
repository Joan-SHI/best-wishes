const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getMessages,
  getMessage,
  saveMessage,
  deletMessage,
  updateMessage
}

function getMessages(testDb) {
  const db = testDb || connection
  return db('messages').select()
}

function getMessage(id, testDb) {
  const db = testDb || connection
  return db('messages').where('id', id).first()
}

function saveMessage(message, testDb) {
  const db = testDb || connection
  return db('messages').insert(message)
}

function deletMessage(id, testDb) {
  const db = testDb || connection
  return db('messages').where('id', id).del()
}

function updateMessage(id, message, testDb) {
  const db = testDb || connection
  return db('messages').where('id', id).update(message)
}