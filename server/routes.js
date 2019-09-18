//routes

const controller = require("./controllers");
const path = require("path");

module.exports = function(app){
    app.get('/notes', controller.all)
    app.post('/note', controller.add)
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}