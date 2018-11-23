/* global jest test expect */
const request = require('supertest')

const server = require('../../server')

jest.mock('../../db', () => ({
  getMessage: (id) => Promise.resolve(
    {id: 1, to: 'Cathy', body: 'Ollie is an awesome guy', from: 'Ollie', like_count: 100, color: 'red', archived: false}
  ),
  getMessages: () => Promise.resolve([
    {id: 1, to: 'Cathy', body: 'Ollie is an awesome guy', from: 'Ollie', like_count: 100, color: 'red', archived: false},
    {id: 2, to: 'Cathy', body: 'Ollie is an awesome guy', from: 'Ollie', like_count: 100, color: 'red', archived: false}
  ])
}))

test('/messasges returns all messages', () => {
  const expected = 2
  return request(server)
    .get('/messages')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      expect(res.body.messages.length).toBe(expected)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})

test('/messages/:id returns a message by ID', () => {
  const expected = 'Cathy'
  return request(server)
    .get('/messages/1')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(res => {
      expect(res.body.messages.id).toBe(1)
      expect(res.body.messages.to).toBe(expected)
    })
    .catch(err => {
      expect(err).toBeFalsy()
    })
})

