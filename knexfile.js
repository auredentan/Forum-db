// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/auredentan-forum',
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },

};
