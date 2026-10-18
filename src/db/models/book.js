'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Book extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Book.init(
        {
            title: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            image: DataTypes.STRING,
            description: DataTypes.TEXT,
            genre_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            shelf_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'book',
        },
    );
    return Book;
};
