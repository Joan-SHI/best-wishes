const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getMessages,
  getMessage,
  saveMessage,
  deleteMessage,
  updateMessage,
  returnMessagesBasedOnIfTheyAreArchived
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

function deleteMessage(id, testDb) {
  const db = testDb || connection
  return db('messages').where('id', id).del()
}

function updateMessage(id, message, testDb) {
  const db = testDb || connection
  return db('messages').where('id', id).update(message)   
}

function returnMessagesBasedOnIfTheyAreArchived (testDb) {
  const db = testDb || connection
  return db ('messages')
    .where('archived', 0)
    .select()

}

// function showMessagesThatAreNotArchived(testDb) {
//   //0 == false
//   return returnMessagesBasedOnIfTheyAreArchived(0, testDb)
// }


// function showMessagesThatAreArchived(testDb) {
//   // 1 == true
//   return returnMessagesBasedOnIfTheyAreArchived(1, testDb)
// }
