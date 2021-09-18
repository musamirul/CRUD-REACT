//npm install express body-parsel mysql
//npm install nodemon
//npm run devStart
//npm install body-parser
//npm install cors
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'cruddb',
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
/*db.connect(function(err){
    if(err) throw err;
    console.log("connected");
})*/

/*app.get('/',(req,res)=>{
    TEST SQLInsert
        const sqlInsert = "INSERT INTO movie_review (movieName, movieReview) VALUES ('batman','nice movie');"
    db.query(sqlInsert, (err,result)=>{
        res.send("hello pedor")
    })
    
});*/

app.post("/api/insert",(req,res)=>{
    const movieName = req.body.movieName;
    const movieReview = req.body.movieReview;

    const sqlInsert = "INSERT INTO movie_review (movieName,movieReview) VALUES(?,?);"
    db.query(sqlInsert,[movieName,movieReview],(err,result)=>{
        console.log(result);
    });
})
app.listen(3001,()=>{
    console.log("running on port 3001");
});

