let express = require('express');
const connectDB = require('./src/Database/db');
const userrouter = require('./src/Controlle/user');
let app = express();

app.use(express.json());

require('dotenv').config({
    path:'./src/Config/.env'
});
const PORT = process.env.port || 5000;
const url = process.env.db_url;

app.get('/', (req, res) => {
    res.send('Welcome to E-commerce Backend');
})

app.use('/auth', userrouter);

app.listen(PORT, async() => {
    try{
        await connectDB(url);
        console.log(`Server is running on port ${PORT}`);
    }
    catch(error){
        console.log('Error connecting to database');
    }

})