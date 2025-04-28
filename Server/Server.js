import songRouter from '../Routes/Routes.js'
import express from 'express'
const app = express();
app.use(express.json());
app.use('/api', songRouter);
const porta = 3000;
app.listen(porta, () => {
    console.log(`Server running on port ${porta}`);
});


