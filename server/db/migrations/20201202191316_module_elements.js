exports.up = function (knex) {
  return knex.schema.createTable('module_elements', table => {
    table.increments('id')
    table.integer('module_id')
    table.text('type')
    table.text('content', 1000)
    table.integer('order_num')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('module_elements')
}
