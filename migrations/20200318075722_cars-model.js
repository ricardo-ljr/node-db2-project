exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();

    tbl
      .string("VIN", 255)
      .notNullable()
      .unique()
      .index();

    tbl.string("make", 255).notNullable();
    tbl.string("model", 255).notNullable();
    tbl.integer("mileage");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
