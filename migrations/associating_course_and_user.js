module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'courses', // name of Source model
        'userCreatedId', // name of the key we're adding 
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'users', // name of Target model
            key: 'id', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      );
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn(
        'courses', // name of Source model
        'userCreatedId' // key we want to remove
      );
    }
  };