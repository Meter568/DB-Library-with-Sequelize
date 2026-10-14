const db = require('./src/db/models');

const dbCheck = async () => {
    try {
        await db.sequelize.authenticate();
        console.log(`Connection with DB <<${process.env.DB_NAME.toUpperCase()}>> has been successfully done`);
    } catch (error) {
        console.log(`Cannot connect to DB: ${error.message}`);
    }
};

