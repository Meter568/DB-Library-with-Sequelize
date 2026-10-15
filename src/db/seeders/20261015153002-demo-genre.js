'use strict';

const { genres } = require('../../constants/data');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('genres', genres, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('genres', null, {});
        await queryInterface.sequelize.query('ALTER SEQUENCE "genres_id_seq" RESTART WITH 1');
    },
};
