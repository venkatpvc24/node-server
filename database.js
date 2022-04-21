import {Sequelize} from 'sequelize';


import {HOST} from './resource.js'


const sequelize = new Sequelize('loginDB', '', '', {
    dialect: 'sqlite',
    storage: '/home/venkatpvc/Documents/node-server/loginDB',
    logging: false,
});


export default sequelize;