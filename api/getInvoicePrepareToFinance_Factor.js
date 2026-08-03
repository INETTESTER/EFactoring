import http from "k6/http";

export function getInvoicePrepareToFinance_Factor() {
  const url =
    "https://uatfactoring.one.th/service/factor/reportlog/getInvoicePrepareToFinance";

  const payload = JSON.stringify({
    platformId: "2460437578782",
    platformBranch: "00000",
    accountOneId: "1334789002480590",
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