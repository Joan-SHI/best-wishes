/* global test expect beforeEach afterEach */
const testEnv = require('../test-environment')

const db = require('../../db')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('getMessages gets all messages', () => {
  // One for each letter of the alphabet
  const expected = 12
  return db.getMessages(testDb)
    .then(messages => {
      const actual = messages.length
      expect(actual).toBe(expected)
    })
})

test('getMessage gets a message by ID', () => {
  const expected = 'Ollie'
  return db.getMessage(1, testDb)
    .then(message => {
      const actual = message.from
      expect(actual).toBe(expected)
    })
})

