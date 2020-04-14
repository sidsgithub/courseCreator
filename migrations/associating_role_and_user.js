module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'users', // name of Source model
        'roleId', // name of the key we're adding 
        {
          type: Sequelize.INTEGER,
          references: {
            model: 'roles', // name of Target model
            key: 'id', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      );
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn(
        'users', // name of Source model
        'roleId' // key we want to remove
      );
    }
  };