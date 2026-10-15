'use strict';

const { orders } = require('../../constants/data');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('orders', orders, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('orders', null, {});
        await queryInterface.sequelize.query('ALTER SEQUENCE "orders_id_seq" RESTART WITH 1');
    },
};
