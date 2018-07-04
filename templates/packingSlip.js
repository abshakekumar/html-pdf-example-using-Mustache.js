var template = `
   
<style>
    .main-container{font-size: 8px; max-width: 700px; margin: 0 auto;}
    .table { width: 100%; text-align: left;}
    .table-header { font-size: 8px;}
    .table-data { font-size: 7px;}
    .header { width: 30%; font-size: 8px; font-weight: bold;}
    .header-address { font-size: 8px; font-weight: normal;}
    .table.shipping-table { width: 50%; vertical-align: unset; padding: 10px 0;}
    .table.shipping-table td { vertical-align: unset; font-size:8px;}
    .data-columns {padding:15px 0 0 0; display:inline-block; width: 100%; position: relative;}
    .data-columns > section:first-child {width:40%; display:inline-block; font-weight:bold;}
    .data-columns > section:last-child {width:55%; display: inline-block; font-weight:bold; float: right;}
    .data-columns td { padding: 0;}
    .data-columns table { width: 100%; font-size:8px; font-weight: bold;}
    .data-columns td:first-child { width: 40%;}
    .data-columns td:last-child { font-weight: normal;}
    .data-columns > section:last-child tr:last-child { position: absolute; bottom: 3px;}
    .ship-to.data-columns section:last-child > div:last-child { position: absolute; bottom: 0;}
    .ship-header > span {padding-right: 20px; font-weight: bold; font-size: 10px;}
    img { width: 200px; height:100px; border: 2px solid red;}
    {{{styles.page.css_string}}}
    .main-container{ color: {{styles.page.font_color}}; font-size: {{styles.page.font_size}};}

</style>

    <section class="{{styles.page.container_class}} main-container">
        <header class="header">
            <section >
            <div>hello : {{data.imgsrc}}</div>
            <img src='{{data.imgsrc}}'/>
            <img src='file:///home/developer/Desktop/node_test/initial_modules/templates/sample1_l.jpg'/>
                <div class="header-title">{{data.organisation_name}}</div>
                <div class="header-address">
                    <div>{{data.address.street}}</div>
                    <div>{{data.address.location}}</div>
                    <div>{{data.address.country}}</div>
                </div>
            </section>
        </header>
        
        <section class='{{styles.page.section_class}}'>
            <table class='{{styles.table.table_class}} shipping-table table'>
                <tbody class='{{styles.table.data_class}} table-data'>
                    <tr valign='top'>
                            <td style="width: 20%; vertical-align: unset; font-weight: bold; font-size: 8px;">Ship To : </td>
                            <td>{{data.shipto.name}} , <div>{{data.shipto.address}}</div></td>
                        </tr>
                </tbody>
            </table>
        </section>

        <div class="ship-header">
            <span>SHIP :</span>
            <span>PREPAID GROUND</span>
            <span>PACKING SLIP ONLY</span>
        </div>
<section class="{{styles.page.section_class}} ship-to data-columns">
    <section>
    <table class='{{styles.table.table_class}}'>
        <tbody class='{{styles.table.data_class}}'>
            <tr>
                <td>Order ID:</td>
                <td>{{data.order_id}}</td>
            </tr>
            <tr>
                <td> PO # :</td>
                <td>{{data.po_no}}</td>
            </tr>
            <tr>
                <td>Order Terms :</td>
                <td>{{data.order_terms}}</td>
            </tr>
            <tr>
                <td>Start Date :</td>
                <td>{{data.start_date}}</td>
            </tr>
            <tr>
                <td>Expiry Date :</td>
                <td>{{data.expiry_date}}</td>
            </tr>
        </tbody>
    </table>
    </section>
    <section>
            <table class='{{styles.table.table_class}}'>
                    <tbody class='{{styles.table.data_class}}'>
                        <tr>
                            <td>Total Ordered :</td>
                            <td>{{data.total_ordered}}</td>
                        </tr>
                        <tr>
                            <td> Total Unavailable :</td>
                            <td>{{data.total_unavailable}}</td>
                        </tr>
                        <tr>
                            <td>Total Shipped :</td>
                            <td>{{data.total_shipped}}</td>
                        </tr>
                        <tr>
                            <td style="min-width:100px;">Order Notes :</td>
                            <td>{{data.order_notes}}</td>
                        </tr>
                    </tbody>
                </table>
    </section>

</section>
        
        <section class='{{styles.page.section_class}}' style="padding-top: 15px; padding-bottom: 10px">
            <table  class='{{styles.table.table_class}} table'>
                <thead class='{{styles.table.header_class}} table-header'>
                    <tr>
                        <th style="width:15%">SKU</th>
                        <th style="width:15%">UPC Code</th>
                        <th style="width:20%">Description</th>
                        <th style="width:5%">ORD</th>
                        <th style="width:5%">UA</th>
                        <th style="width:5%">SHP</th>
                        <th style="width:10%">Weight per item ({{data.weight_unit}})</th>
                        <th style="width:10%"> ExtendedWeight ({{data.weight_unit}})</th>
                        <th style="width:10%"></th>
                        <th style="width:5%">Type</th>
                        <th style="width:5%">Shipment Carton #</th>
                    </tr>
                </thead>
                <tbody class='{{styles.table.data_class}} table-data'>
                {{#data.table_data}}    
                <tr>
                        <td>{{sku}}</td>
                        <td>{{upc_code}}</td>
                        <td>{{desc}}</td>
                        <td>{{qrd}}</td>
                        <td>{{ua}}</td>
                        <td>{{shp}}</td>
                        <td>{{weight_per_item}}</td>
                        <td>{{extended_wt}}</td>
                        <td></td>
                        <td>{{type}}</td>
                        <td>{{shipment_carton_no}}</td>
                    </tr>
                    {{/data.table_data}}

                        <tr>
                            <td style="color: white">.</td>
                        </tr>
                    <tr style="font-size:8px;">
                        <td colspan='6'></td>
                            <td colspan="4" style="font-weight: bold; font-size:9px; text-align: right;">Total Cartons : </td>
                        <td>{{data.total_cartons}}</td></tr>
                            <tr style="font-size:8px;">
                                    <td colspan='6'></td>
                                        <td colspan="4" style="font-weight: bold; font-size:9px; text-align: right;">Total Weight({{data.weight_unit}}) : </td>
                                    <td>{{data.total_weight}}</td></tr>
                </tbody>
            </table>
        </section>
`;

        var templateDataObject = {
            data: {
                imgsrc:'',
                total_weight:345,
                total_cartons:45,
                weight_unit: 'wt1',
                order_notes: 'dasdasdasd asdasdasdasdsa',
                total_shipped: 'dasdasdasd asdasdasdasdsa',
                total_unavailable: 'dasdasdasd asdasdasdasdsa',
                totaltemplate_ordered: 'dasdasdasd asdasdasdasdsa',
                expiry_date: new Date(),
                start_date: new Date(),
                order_terms: 'dasdasdasd asdasdasdasdsa',
                po_no: 'dasdasdasd asdasdasdasdsa',
                order_id: 'dasdasdasd asdasdasdasdsa',
                address : {
                    street : 'sadasdasdasdsadsa',
                    location : '324234 234234 xgashdgasd asdhasdasdasd',
                    country: 'Caanda- 45455'
                },
                shipto: {
                    name: 'sdasdasdsa',
                    address: 'sadasdasd asd as das d dasd asd as das  dasd asd as das  dasd asd as das  dasd asd as das  as dasdd'
                },
                table_data: [{
                    sku: 124,
                    upc_code: 21323,
                    desc: 2323213123213213,
                    qrd: 213,
                    ua: 213,
                    shp: 123,
                    weight_per_item: 213,
                    extended_wt: 213,
                    type: 213,
                    shipment_carton_no: 213
                },{
                    sku: 124,
                    upc_code: 21323,
                    desc: 2323213123213213,
                    qrd: 213,
                    ua: 213,
                    shp: 123,
                    weight_per_item: 213,
                    extended_wt: 213,
                    type: 213,
                    shipment_carton_no: 213
                },{
                    sku: 124,
                    upc_code: 21323,
                    desc: 2323213123213213,
                    qrd: 213,
                    ua: 213,
                    shp: 123,
                    weight_per_item: 213,
                    extended_wt: 213,
                    type: 213,
                    shipment_carton_no: 213
                }],
                organisation_name: 'ALLTIMER'
            },
            styles: {
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