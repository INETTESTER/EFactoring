import http from "k6/http";

export function getListSeller_Factor() {
  const url =
    "https://uatfactoring.one.th/service/factor/contract/getListSeller";

  const payload = JSON.stringify({
    accountOneId: "1334789002480590",
    platformId: "2460437578782",
    limit: 10,
    offset: 0,
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = http.post(url, payload, params);

  // Log response body
  //console.log(`Response Body: ${response.body}`);

  // Return response
  return response;
}