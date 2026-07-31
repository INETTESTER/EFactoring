import http from 'k6/http';


export function getListGroup_Factor() {
    const url = 'https://uatfactoring.one.th/service/seller/report/getListGroup';

    const payload = JSON.stringify({
        sellerId: '8871508007916',
        accountOneId: '1334789002480590',
        limit: 30,
        offset: 0,
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