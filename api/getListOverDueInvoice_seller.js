import http from 'k6/http';

export function getListOverDueInvoice_seller() {
    const url = 'https://uatfactoring.one.th/service/seller/disburse/getListOverDueInvoice';

    const payload = JSON.stringify({
        sellerId: "8871508007916"
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = http.post(url, payload, params);

    //console.log(`Response Body: ${response.body}`);

    return response;
}