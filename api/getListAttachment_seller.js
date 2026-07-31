import http from 'k6/http';

export function getListAttachment_seller() {
    const url = 'https://uatfactoring.one.th/service/seller/report/getListAttachment';

    const payload = JSON.stringify({
        invoiceId: "0b4ab5af-19bc-41db-83af-b2cf534a901a",
        limit: 10,
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