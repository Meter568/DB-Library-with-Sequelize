'use strict';

const { books } = require('../../constants/data');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('books', books, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('books', null, {});
        await queryInterface.sequelize.query('ALTER SEQUENCE "books_id_seq" RESTART WITH 1');
    },
};
