import express from 'express';

import {login, signup, isAuth} from './auth.js'
const router = express.Router();


router.get('/', (req, res) => {
    //res.status(404).json({message: "page not found"});
    res.sendFile("/home/venkatpvc/Documents/node-server/view.html");
})

router.post('/login', login);

router.post('/signup', signup);

router.get('/private', isAuth);


export default router;