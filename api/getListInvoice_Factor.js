import http from 'k6/http';

const BASE_URL = 'https://uatfactoring.one.th';

export function getListInvoice_Factor() {
    const url = `${BASE_URL}/service/seller/disburse/getListInvoice`;

    const payload = JSON.stringify({
        sellerId: '8871508007916',
        sellerBranch: '00000',
        limit: 30,
        offset: 0,
        accountOneId: '1334789002480590',
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