exports.up = function(knex, Promise) {
    return knex.schema.createTable('drinker', (table) => {
        table.increments('id');
        table.string('name');
        table.integer('weight');
        table.integer('drinks');
        table.timestamp('start').defaultTo(knex.fn.now());
        table.timestamp('end').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('drinker');
};