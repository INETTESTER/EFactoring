import http from "k6/http";

export function getSeller_Factor() {
  const url =
    "https://uatfactoring.one.th/service/factor/disburse/getSeller";

  const payload = JSON.stringify({
    platformId: "2460437578782",
    accountOneId: "1334789002480590",
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