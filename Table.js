class Table {

    constructor(arr){
        this.header = arr[0] //o cabeçalho é sempre a primeira linha
        arr.shift() //função que remove o primeiro elemento do array (o cabeçalho no caso)
        this.rows = arr //as linhas são o array inteiro sem a primeira linha (cabeçalho)
    }

    //campo virtual / atributo virtual
    get rowCount(){ //transforma um método em um atributo (precisa retornar algo)
        return this.rows.length -1 //tamanho do array, ou seja, a quantidade linhas da tabela
    }

    get columnCount(){
        return this.header.length
    }
}

module.exports = Table