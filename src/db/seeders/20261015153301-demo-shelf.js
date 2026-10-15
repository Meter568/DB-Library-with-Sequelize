'use strict';

const { shelves } = require('../../constants/data');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('shelves', shelves, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('shelves', null, {});
        await queryInterface.sequelize.query('ALTER SEQUENCE "shelves_id_seq" RESTART WITH 1');
    },
};
