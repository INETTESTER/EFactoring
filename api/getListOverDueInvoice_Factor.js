import http from 'k6/http';

const BASE_URL = 'https://uatfactoring.one.th';

export function getListOverDueInvoice_Factor() {
    const url = `${BASE_URL}/service/seller/disburse/getListOverDueInvoice`;

    const payload = JSON.stringify({
        sellerId: '8871508007916',
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = http.post(url, payload, params);

    // Log response body
    //console.log(response.body);

    // Return response
    return response;
}