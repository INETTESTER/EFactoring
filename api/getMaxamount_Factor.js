import http from 'k6/http';

export function getMaxamount_Factor() {
  const url = 'https://uatfactoring.one.th/service/seller/dashboard/getMaxamount';

  const payload = JSON.stringify({
    seller_id: '8871508007916',
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