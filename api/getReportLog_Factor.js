import http from "k6/http";

export function getReportLog_Factor() {
  const url =
    "https://uatfactoring.one.th/service/factor/reportlog/getReportLog";

  const payload = JSON.stringify({
    platform_id: "2460437578782",
    limit: 50,
    offset: 0,
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