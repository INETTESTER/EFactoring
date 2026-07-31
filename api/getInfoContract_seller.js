import http from 'k6/http';

export function getInfoContract_seller() {
    const url = 'https://uatfactoring.one.th/service/seller/contract/getInfoContract';

    const payload = JSON.stringify({
        sellerId: "8871508007916",
        accountOneId: "1334789002480590",
        contractId: "17834fdb-fef4-4530-b36f-f9fc55ca1841",
        platformId: "2460437578782"
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