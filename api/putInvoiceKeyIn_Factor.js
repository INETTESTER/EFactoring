import http from 'k6/http';

export function putInvoiceKeyIn_Factor() {
  const url = 'https://uatfactoring.one.th/service/seller/importdata/putInvoiceKeyIn';

  const payload = JSON.stringify({
    sellerId: '8871508007916',
    sellerBranch: '00000',
    sellerName: 'เซลเลอร์',
    platformId: '8871508007916',
    accountOneId: '1334789002480590',
    data_inv: [
      {
        invoiceID: 'loadtest-0000',
        type: {
          text: 'ใบแจ้งหนี้',
          value: 'invoice',
        },
        buyerID: '5541274224078',
        buyerBranch: '11112',
        buyerName: 'บริษัท ทดสอบ จำกัด',
        issueDate: '2026-07-01T00:00:00',
        amount: '999',
        dueDate: '2026-08-31T00:00:00',
        PORef: 'PO',
        fileInvoice: [],
        fileAttachment: [],
        totalFiles: '0',
      },
    ],
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