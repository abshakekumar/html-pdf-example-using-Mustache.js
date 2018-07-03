var template = `
   
<style>
    .main-container{font-size: 8px; max-width: 700px; margin: 0 auto;}
    .table { width: 100%; text-align: left; border-collapse: collapse; border: 1px solid gray;}
    .table-header { font-size: 8px;}
    .table-data { font-size: 7px;}
    .header { width: 70%; font-size: 12px; font-weight: bold; margin: 0 auto; text-align: center;}
    .header-address { font-size: 8px; font-weight: normal;}
    .table.shipping-table { vertical-align: unset; padding: 10px 5px;}
    .table.shipping-table td { vertical-align: unset; font-size:8px;}
    .data-columns {padding:15px 0 0 0; display:inline-block; width: 100%; position: relative;}
    .data-columns > section:first-child {width:40%; display:inline-block; font-weight:bold;}
    .data-columns > section:last-child {width:55%; display: inline-block; font-weight:bold; float: right;}
    .data-columns td { padding: 0;}
    .data-columns table { width: 100%; font-size:8px; font-weight: bold; 
        margin:15px 5px; outline: 1px solid gray;
        border-collapse: initial;}
    .data-columns td:first-child { width: 40%;}
    .data-columns td:last-child { font-weight: normal;}
    .ship-to.data-columns section:last-child > div:last-child { position: absolute; bottom: 0;}
    .ship-header > span {padding-right: 20px; font-weight: bold; font-size: 10px;}
    img { width: 200px; height:100px;}
    .header .image { height: 100px; width: 100px; margin:0 auto; padding-bottom: 10px;}
    .declaration-section { padding-top: 25px;}
    .declaration-section .text-field { margin-left: 10px; font-size: 6px; display: inline-block; border-bottom: 1px solid; padding-bottom : 1px;}
    .declaration-section .text-field:first-child { width: 40%;  padding-top: 20px;}
    .declaration-section .text-field:last-child { width: 30%;}
    .outline-tr { border-top: 1px solid gray;}
    {{{styles.page.css_string}}}
    .main-container{ color: {{styles.page.font_color}}; font-size: {{styles.page.font_size}};}

</style>

    <section class="{{styles.page.container_class}} main-container">
        <header class="header">
            <img class='{{styles.imageclass}} image' src='{{data.imgsrc}}'/>
                <div class="header-title">{{data.invoice_name}}</div>
                    <div>Invoice #  {{data.invoice_no}}</div>
        </header>
        
        <section class="data-columns">
                <section class="left-section">
                        <table class='{{styles.table.table_class}} shipping-table table'>
                                <tbody class='{{styles.table.data_class}} table-data'>
                                    
                                            <tr><td style="width: 20%; vertical-align: unset; font-weight: bold; font-size: 8px;">EXPORTER : </td></tr>
                                            <tr><td>{{data.exporter.name}} ,<div>{{data.exporter.address}}</div></td></tr>
                                    
                                </tbody>
                            </table>
                </section>
                <section class="right-section">

                        <table class='{{styles.table.table_class}} shipping-table table'>
                                <tbody class='{{styles.table.data_class}} table-data'>
                                    
                                            <tr><td style="width: 20%; vertical-align: unset; font-weight: bold; font-size: 8px;">IMPORTER / SOLD TO : </td></tr>
                                            <tr><td>{{data.importer.name}} ,<div>{{data.importer.address}}</div></td></tr>
                                    
                                </tbody>
                            </table>

                        <table class='{{styles.table.table_class}} shipping-table table'>
                                <tbody class='{{styles.table.data_class}} table-data'>
                                    
                                            <tr><td style="width: 20%; vertical-align: unset; font-weight: bold; font-size: 8px;">SHIP TO : </td></tr>
                                            <tr><td>{{data.shipto.name}} ,<div>{{data.shipto.address}}</div></td></tr>
                                    
                                </tbody>
                            </table>
                </section>
                
            </section>

        <section style="padding-top: 15px; padding-bottom: 10px">
            <table  class='{{styles.table.table_class}} table'>
                <thead class='{{styles.table.header_class}} table-header'>
                    <tr>
                        <th style="width:10%">PO #</th>
                        <th style="width:15%">SKU</th>
                        <th style="width:5%">UPC</th>
                        <th style="width:5%">ASIN</th>
                        <th style="width:15%">TITLE</th>
                        <th style="width:5%">QTY</th>
                        <th style="width:5%">COO</th>
                        <th style="width:5%"> Knit/ Woven</th>
                        <th style="width:10%">Fabrication</th>
                        <th style="width:5%">HTS #</th>
                        <th style="width:5%">MFR ID</th>
                        <th style="width:5%">Cost</th>
                        <th style="width:10%">Line Total</th>
                    </tr>
                </thead>
                <tbody class='{{styles.table.data_class}} table-data'>
                {{#data.table_data}}    
                <tr>
                        <td>{{po_no}}</td>
                        <td>{{sku}}</td>
                        <td>{{upc}}</td>
                        <td>{{asin}}</td>
                        <td>{{title}}</td>
                        <td>{{qty}}</td>
                        <td>{{coo}}</td>
                        <td>{{knit}}</td>
                        <td>{{fabrication}}</td>
                        <td>{{hts_no}}</td>
                        <td>{{mfr_id}}</td>
                        <td>{{cost}}</td>
                        <td>{{total}} {{data.currency}}</td>
                    </tr>
                    {{/data.table_data}}
                    <tr> <td colspan='13' style='padding-bottom:10px;'></td></tr>
                    <tr class='outline-tr' style="font-weight: bold; font-size:8px;">
                    <td colspan='6'>Sub Total</td>
                    <td colspan='6'></td>
                    <td colspan='1'>{{data.sub_total}} {{data.currency}}</td>
                    </tr>
                    <tr class='outline-tr' style="font-weight: bold; font-size:8px;">
                    <td colspan='6'>Discounts</td>
                    <td colspan='6'></td>
                    <td colspan='1'>{{data.discount}} {{data.currency}}</td>
                    </tr>
                    <tr class='outline-tr' style="font-weight: bold; font-size:8px;">
                    <td colspan='6'>Freight Charge</td>
                    <td colspan='6'></td>
                    <td colspan='1'>{{data.freight_charge}} {{data.currency}}</td>
                    </tr>
                    <tr class='outline-tr' style="font-weight: bold; font-size:8px;">
                    <td colspan='5'>Total</td>
                    <td colspan='3'>{{data.total_quantity}}</td>
                    <td colspan='4'></td>
                    <td colspan='1'>{{data.total}} {{data.currency}}</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section class=" declaration-section">
            <div>I hereby certify this commercial invoice to be true and correct.</div>
            <div>
                <div class='text-field'>Shipper/Title</div>
                <div class='text-field'>Date</div>
            </div>
        </section>
        </section>
`;

        var templateDataObject = {
            data: {
                total:'454545',
                total_quantity:'454545',
                freight_charge:'454545',
                discount:'454545',
                sub_total:'454545',
                invoice_name:'COMMERCIAL INVOICE',
                imgsrc:'sample1_l.jpg',
                invoice_no: '10597_B001',
                shipto: {
                    name: 'ship  sfdfdf',
                    address: 'sadasdasd asd as das d dasd asd as das  dasd asd as das  dasd asd as das  dasd asd as das  as dasdd'
                },
                exporter: {
                    name: 'expodfdfdf ',
                    address: 'sadasdasd asd as das d dasd asd as das  dasd asd as das  dasd asd as das  dasd asd as das  as dasdd'
                },
                importer: {
                    name: 'impo sdfgdfgfg',
                    address: 'sadasdasd asd as dasfsdfd dsdfgfg '
                },
                table_data: [{
                    po_no:'r',
                    sku: 124,
                    upc: 21323,
                    asin: '232321312vfdg fgfg dfdfgf dfgdfgfgfdgfdgfdg3213213',
                    title: 213,
                    qty: 213,
                    coo: 123,
                    knit: 213,
                    fabrication: 213,
                    hts_no: 213,
                    mfr_id: 213,
                    cost: 213,
                    total: 213
                },{
                    po_no: 'sds',
                    sku: 124,
                    upc: 21323,
                    asin: 2323213123213213,
                    title: 213,
                    qty: 213,
                    coo: 123,
                    knit: 213,
                    fabrication: 213,
                    hts_no: 213,
                    mfr_id: 213,
                    cost: 213,
                    total: 213
                },{
                    po_no: 'dfdf',
                    sku: 124,
                    upc: 21323,
                    asin: 2323213123213213,
                    title: 213,
                    qty: 213,
                    coo: 123,
                    knit: 213,
                    fabrication: 213,
                    hts_no: 213,
                    mfr_id: 213,
                    cost: 213,
                    total: 213
                }],
                organisation_name: 'ALLTIMER',
                currency: '$'
            },
            styles: {
                imageclass: 'image-class',
                page: {
                    // css_string: ` .text-header-provided { font-size:14px; color: red;}
                    // .text-data-provided { font-size:15px; color: orange;}
                    // .table-header-provided { font-size:13px; color: green;}
                    // .table-data-provided { font-size:10px; color: cyan;}
                    // .table-data-provided  td:nth-child(3) { font-size:12px; color: red; background: green;}
                    // `,
                    font_size: '8px',
                    font_color: '',
                    text_header_class: 'text-header-provided',
                    text_data_class: 'text-data-provided',
                    section_class: 'section-provided',
                    container_class: 'container-provided'
                },
                table: {
                    table_class: 'table-provided',
                    header_class: 'table-header-provided',
                    data_class: 'table-data-provided'
                }
            }
        };

        var template = {
            templateStructure: template,
            templateData: templateDataObject
        };

        module.exports = template;