import http from "k6/http";

export function getAmountAll_Factor() {
  const url =
    "https://uatfactoring.one.th/service/factor/dashboard/getAmountAll";

  const payload = JSON.stringify({
    platform_id: "2460437578782",
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