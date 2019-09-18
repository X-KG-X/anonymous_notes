//Models
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/notes_db', {useNewUrlParser: true});


var NoteSchema= new mongoose.Schema({
    note:{type:String, required:[true, "Note is required and it must be at least 3 characters long"], minlength:[3, "Note needs to have at least 3 characters"]}
},
{
    timestamps:true
})

const Note = mongoose.model("Note", NoteSchema);
module.exports = Note;
// Note.create({note:"The new coffee shop has really good cold brew!"})