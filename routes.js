'use strict';

// import express and initialise router
import express from 'express';
const router = express.Router();

// import controllers
import start from './controllers/start.js';
import dashboard from './controllers/dashboard.js';
import about from './controllers/about.js';

// connect routes to controllers
router.get('/', start.index);
router.get('/dashboard', dashboard.index);
router.get('/about', about.index);

// export router module
export default router;