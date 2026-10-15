'use strict';

const { customers } = require('../../constants/data');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('customers', customers, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('customers', null, {});
        await queryInterface.sequelize.query('ALTER SEQUENCE "customers_id_seq" RESTART WITH 1');
    },
};
