var http = require('http');
var fs = require('fs');
var path = require('path');
var htmlPdf = require('html-pdf');
var MushtacheModule = require('mustache');
var salesInvoiceTemplate = require('./templates/salesInvoice.js');
var receivingReceiptTemplate = require('./templates/receivingReceipt.js');
var packingSlipTemplate = require('./templates/packingSlip.js');
var commercialSlipTemplate = require('./templates/commercialInvoice.js');

var server = http.createServer(function(request, res) {
    var imageSrc = 'sample1_l.jpg',
        imageSrc = path.normalize(imageSrc);
    console.log('Normalized Path :', imageSrc);
    console.log('Request From :  ', request.url);
    if (request.url == '/test') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(MushtacheModule.render(salesInvoiceTemplate.templateStructure, salesInvoiceTemplate.templateData));
        res.end();
    }

    if (request.url == '/test/download') {
        salesInvoiceTemplate.templateData.imgsrc = imageSrc;
        console.log('Data image src :', salesInvoiceTemplate.templateData.imgsrc);
        const content = MushtacheModule.render(salesInvoiceTemplate.templateStructure, salesInvoiceTemplate.templateData);
        var htmlContent = fs.readFileSync('./test.html', 'utf8');
        var options = { format: 'Letter' };
        htmlPdf.create(htmlContent, options).toBuffer(function(err, rest) {
            var filename = 'testfile-test';
            filename = encodeURIComponent(filename) + '.pdf'
            res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"')
            res.setHeader('Content-type', 'application/pdf')
            res.write(rest);
            res.end();
        });
    }

    if (request.url == '/test/downloadhtml?id=templatetype') {
        console.log('dddddddddddddddddddddddddddddd');
    }
    if (request.url == '/test/downloadhtml/sales') {
        handlePdf('sales');
    }
    if (request.url == '/test/downloadhtml/receiving') {
        handlePdf('receiving');
    }
    if (request.url == '/test/downloadhtml/packing') {
        handlePdf('packing');
    }
    if (request.url == '/test/downloadhtml/commercial') {
        handlePdf('commercial');
    }

    function handlePdf(templatetype) {
        var basePath = path.resolve('templates');
        var options = {
            format: 'A4',
            "border": {
                "top": "1in", // default is 0, units: mm, cm, in, px
                "right": "0.5in",
                "bottom": "1in",
                "left": "0.5in"
            },
            base: `file://${basePath}/`
                // base: 'file:///home/developer/Desktop/node_test/initial_modules/templates/'
        };
        packingSlipTemplate.templateData.data.imgsrc = imageSrc;
        console.log('Template Type :', templatetype);
        var htmlContent = MushtacheModule.render(salesInvoiceTemplate.templateStructure, salesInvoiceTemplate.templateData);
        switch (templatetype) {
            case 'sales':
                htmlContent = MushtacheModule.render(salesInvoiceTemplate.templateStructure, salesInvoiceTemplate.templateData);
                break;
            case 'receiving':
                htmlContent = MushtacheModule.render(receivingReceiptTemplate.templateStructure, receivingReceiptTemplate.templateData);
                break;
            case 'packing':
                htmlContent = MushtacheModule.render(packingSlipTemplate.templateStructure, packingSlipTemplate.templateData);
                break;
            case 'commercial':
                htmlContent = MushtacheModule.render(commercialSlipTemplate.templateStructure, commercialSlipTemplate.templateData);
                break;

        }
        fs.writeFileSync('htmlstringContent.txt', htmlContent);
        htmlPdf.create(htmlContent, options).toStream(function(err, stream) {
            var filename = 'testfilehtml-inline';
            filename = encodeURIComponent(filename) + '.pdf'
                // this will download the pdf when it is requested from browser
                // res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"')
                // this will open the pdf when it is requested from browser
            res.setHeader('Content-disposition', 'inline; filename="' + filename + '"')
            res.setHeader('Content-type', 'application/pdf')
            stream.pipe(res);
        });
    }

});
server.listen(3232);

console.log('SERVER Stared at port:3232, running ......');