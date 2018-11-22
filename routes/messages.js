const express = require('express')

const db = require('../db')

const router = express.Router()

router.use(express.json())

router.get('/', (req, res) => {
  db.returnMessagesBasedOnIfTheyAreArchived()
    .then(messages => {
      res.json({ messages: messages })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getMessage(id)
    .then(message => {
      res.json({ message: message })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/', (req, res) => {
  console.log(req.body)

  const message = {
    to: req.body.to,
    from: req.body.from,
    body: req.body.message,
  }

  db.saveMessage(message)
    .then(ids => {
      res.status(201).json({ message_id: ids[0] })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.put('/:id', (req, res) => {
  const id = Number(req.params.id)

  const message = req.body

  db.updateMessage(id, message)
    .then(() => {
      res.json({ message: 'Done' })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)

  db.deleteMessage(id)
    .then(() => {
      res.json({ result: 'Done' })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router