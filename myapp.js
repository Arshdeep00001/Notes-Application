const fs=require('fs')
//const { title } = require('process')
const { demandOption } = require('yargs')
const yargs=require('yargs')

yargs.command({
    command:'add',
    describe:'Add Note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'String'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'String'
        }
    },
    handler:function(argv){
        //fs.appendFileSync('notes.txt', argv.title + " - ") //Adds text(i.e. the notes) typed in Console to a File notes.txt
        //fs.appendFileSync('notes.txt', argv.body + "\n")
        
    }
})
console.log(yargs.argv)