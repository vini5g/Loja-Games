
exports.up = function(knex) {
    return knex.schema.createTable('tblGames', table => {
        table.increments('id').unsigned().primary();
        table.string('nome').notNullable();
        table.string('autor').notNullable();
        table.decimal('valor',9,2).notNullable();
        table.string('caminho_imagem').notNullable();

        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('tblGames');
};
