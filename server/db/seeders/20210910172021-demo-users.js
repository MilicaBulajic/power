'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@email.com",
          name: "Jon Doe",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "test@email.com",
          name: "Test User",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: true }
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
