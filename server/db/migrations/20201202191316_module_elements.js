exports.up = function (knex) {
  return knex.schema.createTable('module_elements', table => {
    table.increments('id')
    table.integer('module_id')
    table.string('url')
    table.string('text')
    table.integer('order_num')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('module_elements')
}