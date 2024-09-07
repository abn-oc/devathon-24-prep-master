import postgres from "postgres";

const sql = postgres({
    host: 'localhost',
    port: 5432,
    database: 'prep-master',
    username: 'postgres',  
    password: 'admin'
});

export default sql;