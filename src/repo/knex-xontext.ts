import knex from 'knex';

export const knexContext = knex({
    client: 'sqlite3',
    connection: {
        filename: 'mydb.db'
    }
})