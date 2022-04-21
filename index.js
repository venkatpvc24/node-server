import express from 'express';

import {PORT} from './resource.js'
import sequelize from './database.js';
import router from './routes.js';

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('/home/venkatpvc/Documents/node-server/public'))

app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(router);

sequelize.sync();


app.listen(PORT, () => console.log(`app listening on PORT: ${PORT}`));