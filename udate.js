const fs = require ('fs')
const update = function (note, oldNote) {
    const oNote = JSON.parse(oldNote)
    const  newNote = oNote.map(function(n,idx){
        if (n.id) {
            n.title = note.title
            n.body = note.body
            return n
        }
    })
}
module.exports=update