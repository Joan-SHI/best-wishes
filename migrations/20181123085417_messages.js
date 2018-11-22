
exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', table => {
    table.increments('id').primary()
    table.string('to')
    table.string('message')
    table.string('from')
    table.integer('like_count')
    table.string('color')
    table.boolean('archived')
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('messages')
};
