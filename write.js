const fs = require ('fs');
const write = function(cmd="Nothing") {
    fs.writeFileSync('Note.txt', cmd);
}
module.exports=write