const fs = require('fs')
const colors = require('colors');

let data = '';

let listarTabla = (base, limite = 10) => {

    console.log('==========')
    console.log(`Tabla del ${ base} con limite en ${ limite}`.rainbow)
    console.log('==========')

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`);
    }

}


let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`)
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }


        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`)
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}