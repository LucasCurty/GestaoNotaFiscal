import { Pool } from 'pg';
import { env } from 'process';
require('dotenv').config();

const pool = new Pool({
  user: env.USER_DB, 
  host: env.HOST_DB,    
  database: env.NAME_DB,
  password: env.PASSWORD_DB, 
  port: Number(env.PORT_DB),
});

export async function ConnectionPostegress() {
  try {
    const client = await pool.connect();
    console.log('Conexão com o PostgreSQL estabelecida com sucesso!');

    const res = await client.query('SELECT NOW()');
    console.log('Hora atual do banco:', res.rows[0].now);

    client.release();
  } catch (err) {
    console.error('Erro ao conectar ao PostgreSQL:', err);
    
  }    
}
