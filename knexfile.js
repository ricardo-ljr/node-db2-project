// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3", //db driver
    connection: {
      filename: "./data/car-dealer.db3"
    }, // could be an object or a string
    useNullAsDefault: true //only needed for SQlite3
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
