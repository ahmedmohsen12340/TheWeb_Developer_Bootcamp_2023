import {franc} from 'franc'
import langs from 'langs'
import colors from 'colors'
const input = process.argv[2];
const word = franc(input);
const lang = langs.where("3", word)

if(lang==undefined)
    console.log("can't detect language".red)
else{
    console.log(lang.name.green);
}