var pdf = require("html-pdf")

class PdfWriter {
    static writePdf(filename, html){
        var options = { format: 'Letter' }
        //criar um pdf para o arquivo filename
        pdf.create(html, options).toFile(filename,(err) => {})
    }
}

module.exports = PdfWriter