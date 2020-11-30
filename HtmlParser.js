var ejs = require("ejs")

class HtmlParser {
    static async parse(table){
        //ler arquivo ejs e retornar em formato de string
        return await ejs.renderFile("./table.ejs", {header: table.header, rows: table.rows})
    }
}

module.exports = HtmlParser