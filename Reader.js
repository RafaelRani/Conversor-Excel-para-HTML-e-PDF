//classe responsável por ler o arquivos e retornar o dados
const fs = require("fs") //fs = fileSystem: biblioteca responsável pela leitura de arquivos no computador
const util = require("util")

class Reader {
    constructor(){
        //util.promisify(): função que transforma uma função velha com callback(readFile()) em uma função nova com promisse (reader())
        this.reader = util.promisify(fs.readFile)
    }
    async read(filepath){
        try{
            return await this.reader(filepath, "utf-8") //leitura de arquivos precisa de espera
        }catch(err){
            return undefined
        }
    }
}

module.exports = Reader