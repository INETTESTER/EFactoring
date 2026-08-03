import http from "k6/http";

export function getListBar_Factor() {
  const url =
    "https://uatfactoring.one.th/service/factor/dashboard/getListBar";

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
  //console.log(`Response Body: ${response.body}`);

  // Return response
  return response;
}