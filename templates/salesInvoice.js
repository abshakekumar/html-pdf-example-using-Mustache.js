
var template = `
<section class="main-container" style="font-size: 7px; max-width: 700px; margin: 0 auto;">
        <header>
            <section style="height: 25px; line-height: 20px;">
                <span style="font-size:20px">{{organisation.logo}}</span>
                <img src='{{{organisation.logoimg}}}' />
                <span style='float:right; font-weight:bold;'>INVOICE{{invoiceId}}</span>
            </section>
            <section style="padding-top:5px;">
                <div style="font-size:7px; font-style:italic; font-weight:bold;">{{organisation.name}}, {{organisation.address}}</div>
                <div style="font-style:italic;">phone: {{organisation.phone}} ~ fax: {{organisation.fax}} ~ email: {{organisation.email}}
                </div>
            </section>
        </header>

        <section style="padding:15px;">
            <section style="width:45%; display:inline-block; font-weight:bold;">
                <div>Bill To:</div>
                <div style="padding-right: 30%">{{bill_to.name}} {{bill_to.address}}</div>
                <div> Phn :
                    <span style="font-weight: normal">{{bill_to.name}}</span>
                </div>
                <div> Fax :
                    <span style="font-weight: normal">{{bill_to.fax}}</span>
                </div>
                <div> Email :
                    <span style="font-weight: normal">{{bill_to.email}}</span>
                </div>
                <div> Cnt :
                    <span style="font-weight: normal">{{bill_to.contact}}</span>
                </div>
            </section>
            <section style="width:45%; display: inline-block; font-weight:bold; float: right;">
                <div>Ship To:</div>
                <div style="padding-right: 30%">{{ship_to.name}} {{ship_to.address}}</div>
                <div> Phn :
                    <span style="font-weight: normal">{{ship_to.phone}}</span>
                </div>
                <div> Fax :
                    <span style="font-weight: normal">{{ship_to.fax}}</span>
                </div>
                <div> Email :
                    <span style="font-weight: normal">{{ship_to.email}}</span>
                </div>
                <div> Cnt :
                    <span style="font-weight: normal">{{ship_to.contact}}</span>
                </div>
            </section>
        </section>

        <section>
            <table  style="width: 100%; text-align: left;">
                <thead style="font-size:8px;">
                    <tr>
                        <th>Order Id</th>
                        <th>Sales Rep</th>
                        <th>Store PO</th>
                        <th>Cust Acct #</th>
                        <th>Invoice Items</th>
                        <th>Invoice Date</th>
                    </tr>
                </thead>
                <tbody style="font-size:7px; line-height:4px;">
                {{#order_table_data}}    
                <tr>
                        <td>{{order_id}}</td>
                        <td>{{sales_rep}}</td>
                        <td>{{store_po}}</td>
                        <td>{{cust_accno}}</td>
                        <td>{{invoice_items}}</td>
                        <td>{{invoice_date}}</td>
                    </tr>
                    {{/order_table_data}}
                </tbody>
            </table>
        </section>

        <section style="padding-top: 5px; font-weight: bold; padding-bottom: 20px;">
            <div> Customer Notes :
                <span style="font-weight: normal">{{customer_notes}}</span>
            </div>
            <div> Order Notes :
                <span style="font-weight: normal">{{order_notes}}</span>
            </div>
            <div> Payment Details :
                <span style="font-weight: normal">{{payment_details}}</span>
            </div>
            <div> Shipment Details :
                <span style="font-weight: normal">{{shipment_details}}</span>
            </div>
        </section>


        <section style="border: 1px solid rgba(0, 0, 0, 0.3); padding: 5px;">
            <div style="font-weight: bold">Invoice Detail</div>
            <table style="width: 100%; text-align: left;">
                <thead style="font-size:8px;">
                    <tr>
                        <th style="width: 20%">SKU</th>
                        <th style="width: 40%">Description</th>
                        <th style="width: 10%">Quality</th>
                        <th style="width: 15%; text-align: left;">Item Value</th>
                        <th style="width: 15%;text-align: left;">Line Total</th>
                    </tr>
                </thead>
                <tbody style="font-size:7px;">
                {{#invoice_table_data}}    
                <tr style="line-height:4px;">
                        <td>{{sku}}</td>
                        <td>{{description}}</td>
                        <td>{{quantity}}</td>
                        <td>{{item_value}}</td>
                        <td>{{line_total}}</td>
                    </tr>
                    {{/invoice_table_data}}
                    <tr>
                    <td style="color:white;">.</td>
                    </tr>
                    <tr style="line-height:5px;">
                    <td colspan='2'></td>
                    <td>{{quantity_count}}</td>
                        <td style="font-weight:bold; font-size:7px;">Value of Goods</td>
                        <td>{{value_of_goods}}</td></tr>
                    <tr style="line-height:4px;">
                    <td colspan='3'></td>
                        <td style="font-weight:bold; font-size:7px;">Shipping</td>
                        <td>{{shipping_cost}}</td></tr>
                    <tr style="line-height:4px;">
                    <td colspan='3'></td>
                        <td style="font-weight:bold; font-size:7px;">Additional</td>
                        <td>{{additional_cost}}</td></tr>
                    <tr style="line-height:4px;">
                    <td colspan='3'></td>
                        <td style="font-weight:bold; font-size:7px;">Charges</td>
                        <td>{{charges_cost}}</td></tr>
                    <tr style="line-height:4px;">
                    <td colspan='3'></td>
                        <td style="font-weight:bold; font-size:7px;">Discount</td>
                        <td>{{discount_cost}}</td></tr>
                    <tr style="line-height:4px;">
                    <td colspan='3'></td>
                        <td style="font-weight:bold; font-size:7px;">Credits</td>
                        <td>{{credits_cost}}</td></tr>
                    <tr style="line-height:4px;">
                    <td colspan='3'></td>
                        <td style="font-weight:bold; font-size:7px;">Subtotal</td>
                        <td>{{subtotal_cost}}</td></tr>
                    <tr style="line-height:4px;">
                    <td colspan='3'></td>
                        <td style="font-weight:bold; font-size:7px;">Tax</td>
                        <td>{{tax_cost}}</td></tr>
                    <tr style="line-height:4px;">
                    <td colspan='2' style="font-weight:bold; font-size:7px;">
                    GST #{{gst_no}}</td>
                        <td colspan='1'></td>
                        <td style="font-weight:bold; font-size:8px;">TOTAL</td>
                        <td>{{total_cost}}</td></tr>

                </tbody>
            </table>
            <div style="font-weight:bold; font-size:7px; text-align: right; padding: 5px 0 0 0"> All payments to be made to {{organisation.name}}
            </div>
    
        </section>

        <footer style="font-size:6px; font-style: italic; text-align: center; padding-top: 15px;">
            {{organisation.footer_text}}
        </footer>
    </section>
`;

var templateDataObject = {
    invoiceId: 'GST68386',
    gst_no: '8386',
    organisation: {
        logoimg: './templates/sample1_l.jpg',
        // logoimg: './sample1_l.jpg',
        logo: 'Test_Organisation',
        name: 'Supra Distribution',
        address: '#105-2433 Dollarton Hwy, North Vancouver BC Canada V7H 0A1 ',
        phone: '1234.567',
        fax: 'n/a',
        email: 'info@supradistribution.com',
        footer_text: 'G-SHOCK, ALL SUPRA DISTRIBUTION PRODUCTS ARE SOLD F.O.B POINT. 1.5% PER MONTH CHARGED ON OVERDUE ACCOUNTS.'
    },
    bill_to: {
        name: 'Test_Organisation',
        address: 'Supra Distribution , #105-2433 Dollarton Hwy, North Vancouver BC Canada V7H 0A1 ',
        phone: '1234.567',
        fax: 'n/a',
        email: 'info@supradistribution.com',
        contact: '244-4545'
    },
    ship_to: {
        name: 'Test_Organisation',
        address: 'Supra Distribution , #105-2433 Dollarton Hwy, North Vancouver BC Canada V7H 0A1 ',
        phone: '1234.567',
        fax: 'n/a',
        email: 'info@supradistribution.com',
        contact: '244-4545'
    },
    customer_notes: 'customer notes -- 123',
    order_notes: 'order notes -- 123',
    payment_details: 'payment details -- 123',
    shipment_details: 'shipment details -- 123',
    quantity_count: '23',
    order_table_data: [{
        order_id: '123',
        sales_rep: '123',
        store_po: '123',
        cust_accno: '123',
        invoice_items: '123',
        invoice_date: '123',
    }, {
        order_id: '123',
        sales_rep: '123',
        store_po: '123',
        cust_accno: '123',
        invoice_items: '123',
        invoice_date: '123',
    }, {
        order_id: '123',
        sales_rep: '123',
        store_po: '123',
        cust_accno: '123',
        invoice_items: '123',
        invoice_date: '123',
    }, {
        order_id: '123',
        sales_rep: '123',
        store_po: '123',
        cust_accno: '123',
        invoice_items: '123',
        invoice_date: '123',
    }],
    invoice_table_data: [{
        sku: '123-asfsf',
        description: 'sadsadsaf sdfsdfdsfdsfdsf',
        quantity: '13',
        item_value: '123',
        line_total: '123',
    }, {
        sku: '123',
        description: '123',
        quantity: '123',
        item_value: '123',
        line_total: '123',
    }, {
        sku: '123',
        description: '123',
        quantity: '123',
        item_value: '123',
        line_total: '123',
    }],
    value_of_goods: '123',
    additional_cost: '23',
    charges_cost: '34',
    total_cost: '34',
    credits_cost: '34',
    discount_cost: '34',
    shipping_cost: '34',
    subtotal_cost: '34',
    tax_cost: '34',
};

var template = {
    templateStructure: template,
    templateData: templateDataObject
};

module.exports = template;