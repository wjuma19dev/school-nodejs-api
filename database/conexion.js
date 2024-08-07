import mysql  from 'mysql2/promise';

const db = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'nicolju29',
  database: 'school'
});

try {
  await db.connect()
  console.log('Base de datos online!')
} catch (error) {
  throw error
}

export default db;
