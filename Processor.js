//classe responsável por processar os dados

class Processor {
    static process(data){
        //função para dividir a string em partes, retornando um array com as partes da string
        var a = data.split("\r\n") //onde tiver quebra de linha (\r ou \n) vai cortar a string e cada parte será um item do array
        var rows = []

        a.forEach(row =>{
            var arr = row.split(";") //onde tiver ";" vai cortar a string e cada parte será um item do array
            rows.push(arr) //adiciona ao array rows (que portanto será um array de arrys)
        })

        return rows
    }
}

module.exports = Processor