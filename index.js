const db = require('./src/db/models');

const dbCheck = async () => {
    try {
        await db.sequelize.authenticate();
        console.log(`Connection with DB <<${process.env.DB_NAME.toUpperCase()}>> has been successfully done`);
    } catch (error) {
        console.log(`Cannot connect to DB: ${error.message}`);
    }
};

dbCheck();

const dropCountriesTable = async () => {
    try {
        await db.country.drop();
        console.log(`Table ${db.country.name} has been droped`);
    } catch (error) {
        console.log(`Cannot drop table: ${error.message}`);
    }
};

// dropCountriesTable();

const syncCountryTable = async () => {
    try {
        await db.country.sync();
    } catch (error) {
        console.log(`Cannot sync table: ${error.message}`);
    }
};

// syncCountryTable();
