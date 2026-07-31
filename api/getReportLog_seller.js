import http from 'k6/http';

export function getReportLog_seller() {
    const url = 'https://uatfactoring.one.th/service/seller/reportlog/getReportLog';

    const payload = JSON.stringify({
        seller_id: "8871508007916",
        limit: 50,
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