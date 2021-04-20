const Database = require('./config')


const initDb = {
    async init() {

const db = await Database()

await db.exec(`CREATE TABLE profile (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    avatar TEXT,
    monthly_budget INT,
    days_per_week INT,
    hours_per_day INT,
    vacation_per_year INT,
    value_hour INT
)`);

await db.exec(`CREATE TABLE jobs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    daily_hours INT,
    total_hours INT,
    created_at DATETIME
)`);

await db.run(`INSERT INTO profile (
    name,
    avatar,
    monthly_budget,
    days_per_week,
    hours_per_day, 
    vacation_per_year,
    value_hour
    ) VALUES (
        "Rayan Temochko",
        "https://instagram.fnvt1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/74525292_707900716371246_3653124230779764736_n.jpg?tp=1&_nc_ht=instagram.fnvt1-1.fna.fbcdn.net&_nc_ohc=TSj_-9-9ajQAX_TXWGV&edm=ABfd0MgAAAAA&ccb=7-4&oh=c87c7746bccf04c182dc79fcc9b4a765&oe=609D448E&_nc_sid=7bff83",
        3000,
        5,
        5,
        4,
        70
)`);

await db.run(`INSERT INTO jobs (
    name,
    daily_hours,
    total_hours,
    created_at
    )VALUES (
        "Pizzaria Guloso",
        2,
        1,
        1617514376018
)`);

await db.run(`INSERT INTO jobs (
    name,
    daily_hours,
    total_hours,
    created_at
    )VALUES (
        "OneTwo Projects",
        3,
        47,
        1617514376018
)`);

await db.close()
    }
}

initDb.init()