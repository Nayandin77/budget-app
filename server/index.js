import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from './routes/user.js';
import monthRoutes from './routes/month.js';

const app = express();

dotenv.config();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

// api calls
app.use('/api/user', userRoutes);
app.use('/api/month', monthRoutes);

app.get("/api", function(res, req, next) {
    console.log("Home route");
    next("Test");
});

const PORT = process.env.PORT || 5100;

mongoose.connect(process.env.CONNTECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);