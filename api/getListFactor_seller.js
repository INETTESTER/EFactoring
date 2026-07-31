import http from 'k6/http';

export function getListFactor_seller() {
    const url = 'https://uatfactoring.one.th/service/seller/contract/getListFactor';

    const payload = JSON.stringify({
        accountOneId: "1334789002480590",
        sellerId: "8871508007916",
        limit: 20,
        offset: 0
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