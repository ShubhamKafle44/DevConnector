const express =require('express');
const connectDB = require('./config/db')


const app =express();

connectDB()

// Init middleware
app.use(express.json({extended: false}));


//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts' , require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 5000
app.get('/',(req,res)=> res.send('API Running'));
app.listen(PORT,()=> console.log(`Server started ${PORT}`))