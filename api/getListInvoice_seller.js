import http from 'k6/http';

export function getListInvoice_seller() {
    const url = 'https://uatfactoring.one.th/service/seller/disburse/getListInvoice';

    const payload = JSON.stringify({
        sellerId: "8871508007916",
        sellerBranch: "00000",
        limit: 30,
        offset: 0,
        accountOneId: "1334789002480590"
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