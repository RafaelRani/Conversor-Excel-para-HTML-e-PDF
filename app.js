var Reader = require("./Reader")
var Processor = require("./Processor")
var Table = require("./Table")
var HtmlParser = require("./HtmlParser")
var Writer = require("./Writer")
var PDFWriter = require("./PdfWriter")

var leitor = new Reader()
var escritor = new Writer()

async function main(){
    var dados = await leitor.read("./table.CSV") //faz a leitura do arquivo em uma string única
    var dadosProcessados = Processor.process(dados) //transforma essa string em um array com várias partes
    //faz a separação em cabeçalho da tabela, linhas da tabela e retorna num de linha e colunas
    var usuarios = new Table(dadosProcessados) 
    //transforma a tabela (cabeçallho e linhas) em um arquivo ejs e retorna esse arquivo em formato de String
    var html = await HtmlParser.parse(usuarios)
    //pega a string gerada e escreve em um arquivo html com nome gerado usando a data atual
    escritor.write(Date.now() + ".html", html)
    //pega a string gerada e escreve em um arquivo pdf
    PDFWriter.writePdf(Date.now() + ".pdf", html)
}

main()