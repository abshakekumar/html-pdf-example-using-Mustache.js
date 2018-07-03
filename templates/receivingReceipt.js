var template = `
<style>
.main-container{font-size: 8px; max-width: 700px; margin: 0 auto;}
.table { width: 100%; text-align: left;}
.table-header{ font-size: 8px;}
.table-data{ font-size: 7px;}

{{{styles.page.css_string}}}
.main-container{ color: {{styles.page.font_color}}; font-size: {{styles.page.font_size}};}
</style>
<section class="{{styles.page.container_class}} main-container">
    <header>
        <section style="height: 25px; line-height: 20px; font-weight:bold;">
            <div style="font-size:13px">Warehouse Receiving Receipt for {{data.organisation_name}}</div>
            <div style="font-size:9px">(Date Printed : {{data.time_stamp}})</div>
        </section>
        <section style="padding-top:30px;">
            <div style="font-size:11px; text-decoration:underline; font-weight:bold;">{{data.shipment_no}}</div>
        </section>
    </header>

    <section style="padding:15px 0 10px 0; display:inline-block; width: 100%">
        <section style="width:45%; display:inline-block; font-weight:bold;">
            <div class='{{styles.page.text_header_class}}'>PO #:
            <span class='{{styles.page.text_data_class}}'  style="font-weight: normal">{{data.po_no}}</span></div>
            <div class='{{styles.page.text_header_class}}'> Origin :
                <span class='{{styles.page.text_data_class}}' style="font-weight: normal">{{data.origin}}</span>
            </div>
            <div class='{{styles.page.text_header_class}}'> Carrier :
                <span class='{{styles.page.text_data_class}}' style="font-weight: normal">{{data.carrier}}</span>
            </div>
            <div class='{{styles.page.text_header_class}}'> Waybill/Tracking Id :
                <span class='{{styles.page.text_data_class}}' style="font-weight: normal">{{data.tracking_id}}</span>
            </div>
            <div class='{{styles.page.text_header_class}}'> # of Cartons :
                <span class='{{styles.page.text_data_class}}' style="font-weight: normal">{{data.no_of_cartons}}</span>
            </div>
            <div class='{{styles.page.text_header_class}}'> Created By :
                <span class='{{styles.page.text_data_class}}' style="font-weight: normal">{{data.created_by}}</span>
            </div>
        </section>
        <section style="width:45%; display: inline-block; font-weight:bold; float: right;">
            <div class='{{styles.page.text_header_class}}'>Vessel/Voyage :
            <span class='{{styles.page.text_data_class}}'style="font-weight: normal">{{data.vessel}}</span>
            </div>
            
            <div class='{{styles.page.text_header_class}}'> Importer :
                <span class='{{styles.page.text_data_class}}' style="font-weight: normal">{{data.importer}}</span>
            </div>
            <div class='{{styles.page.text_header_class}}'> Importer Ref :
                <span class='{{styles.page.text_data_class}}' style="font-weight: normal">{{data.importer_ref}}</span>
            </div>
            <div class='{{styles.page.text_header_class}}'> Container # :
                <span class='{{styles.page.text_data_class}}' style="font-weight: normal">{{data.container_no}}</span>
            </div>
            <div class='{{styles.page.text_header_class}}'> Date Received :
                <span class='{{styles.page.text_data_class}}' style="font-weight: normal">{{data.date_received}}</span>
            </div>
            <div class='{{styles.page.text_header_class}}'> Received By :
                <span  class='{{styles.page.text_data_class}}' style="font-weight: normal">{{data.received_by}}5</span>
            </div>
        </section>
       
    </section>
    <div style="font-weight: bold; padding-top: 15px;">Total Units Expected : {{data.total_quantity_expected}}</div>
    <section style="padding-top: 15px; padding-bottom: 10px">
        <table  class='{{styles.table.table_class}} table'>
            <thead class='{{styles.table.header_class}} table-header'>
                <tr>
                    <th style="width:15%">SKU</th>
                    <th style="width:15%">UPC Code</th>
                    <th style="width:20%">Description</th>
                    <th style="width:5%">Qty</th>
                    <th style="width:15%">Category/ Unit Type</th>
                    <th style="width:15%"> Location</th>
                    <th style="width:10%">(Suggested)</th>
                </tr>
            </thead>
            <tbody class='{{styles.table.data_class}} table-data'>
            {{#data.table_data}}    
                <tr>
                        <td>{{sku}}</td>
                        <td>{{upc_code}}</td>
                        <td>{{desc}}</td>
                        <td>{{quantity}}</td>
                        <td>{{category}}</td>
                        <td>{{location}}</td>
                        <td>{{suggested}}</td>
                    </tr>
                    {{/data.table_data}}
                <tr>
                    <td colspan='3'></td>
                        <td style="font-weight: bold; border-top: 1px solid ; font-size:9px;">{{data.total_quantity}}</td></tr>
            </tbody>
        </table>
    </section>
`;

        var templateDataObject = {
            data: {
                table_data: [{
                    sku: 124,
                    upc_code: 21323,
                    desc: 2323213123213213,
                    quantity: 213,
                    category: 213,
                    location: 123,
                    suggested: 213
                },{
                    sku: 124,
                    upc_code: 21323,
                    desc: 2323213123213213,
                    quantity: 213,
                    category: 213,
                    location: 123,
                    suggested: 213
                }],
                // total_quantity: () => {
                //     console.log('This :', this);
                //     // console.log('This Data:', this.data);
                //     console.log('This table Data:', this.table_data);
                //     var total = this.data.table_data.reduce((collector, value)=> {quantity : collector.quantity + value.quantity});
                //     return total.quantity;
                // },
                total_quantity: '345',
                total_quantity_expected: '124',
                organisation_name: 'ALLTIMER',
                time_stamp: new Date(),
                shipment_no: 'Shipment SP18D1-MASTER-090717_S1',
                po_no: '2323',
                origin: '2323',
                carrier: '2323',
                tracking_id: '2323',
                no_of_cartons: '2323',
                created_by: '2323',
                vessel: '2323',
                importer: '2323',
                importer_ref: '2323',
                container_no: '2323',
                date_received: '2323',
                received_by: '2323'
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