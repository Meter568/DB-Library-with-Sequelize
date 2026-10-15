'use strict';

const { countries } = require('../../constants/data');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('countries', countries, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('countries', null, {});
        await queryInterface.sequelize.query('ALTER SEQUENCE "countries_id_seq" RESTART WITH 1');
    },
};
