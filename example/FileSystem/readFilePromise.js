const fs = require('fs').promises;

fs.readFile('./README.txt')
    .then((data)=>{
        console.log(data);
        console.log(data.toString());
    })
    .catch ((err) => {
        throw err;
    });
