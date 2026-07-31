import http from "k6/http";

export function getGroupInvoice_Factor() {
  const url =
    "https://uatfactoring.one.th/service/factor/disburse/getGroupInvoice";

  const payload = JSON.stringify({
    platformId: "2460437578782",
    accountOneId: "1334789002480590",
    sellerTaxId: "8871508007916",
    limit: 20,
    offset: 0,
    status: "SENTED",
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = http.post(url, payload, params);

  // Log response body
  console.log(`Response Body: ${response.body}`);

  // Return response
  return response;
}