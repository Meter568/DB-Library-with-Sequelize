'use strict';

const { authors } = require('../../constants/data');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('authors', authors, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('authors', null, {});
        await queryInterface.sequelize.query('ALTER SEQUENCE "authors_id_seq" RESTART WITH 1');
    },
};
