
exports.up = function(knex) {
    return knex.schema.createTable('tblUsuarios', table => {
        table.increments('id').unsigned().primary();
        table.string('nome').notNullable();
        table.string('email').unique().notNullable();
        table.string('senha', ).notNullable();
  
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tblUsuarios');
};
