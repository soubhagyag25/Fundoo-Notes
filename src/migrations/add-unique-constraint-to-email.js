'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Fundoo Users', 'email', {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Fundoo Users', 'email', {
      type: Sequelize.STRING,
      allowNull: true,
      unique: false,
    });
  }
};
