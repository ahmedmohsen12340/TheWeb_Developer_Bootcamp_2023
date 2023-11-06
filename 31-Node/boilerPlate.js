const fs = require('fs');

const fileName = process.argv[2] || 'project';

try{
    fs.mkdirSync(`${fileName}`);
    
    fs.writeFileSync(`${fileName}/index.html`,'data'); // the second argument writed inside the file
    fs.writeFileSync(`${fileName}/master.css`,'data');
    fs.writeFileSync(`${fileName}/main.js`,'data');
}
catch(e){
    console.log(e);
}
