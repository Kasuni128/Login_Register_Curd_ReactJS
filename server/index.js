const express = require('express')
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(cors());


const db = require("./models");

//Router
const postRouter = require("./routes/Post");
app.use("/post", postRouter);

const usersRouter = require("./routes/Users");
app.use("/auth", usersRouter);

db.sequelize.sync().then(() =>{
    app.listen(3001, () => {
        console.log("Server running on port 3001");
    });
});
