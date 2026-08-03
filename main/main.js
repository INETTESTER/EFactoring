//=============================== import API =================================
import { sleep } from 'k6';
import { error_check } from '../check/check.js';
import { scenario } from 'k6/execution';
import { getListFactor_seller } from '../api/getListFactor_seller.js';
import { getInfoContract_seller } from '../api/getInfoContract_seller.js';
import { getMaxamount_seller } from '../api/getMaxamount_seller.js';
import { putInvoiceKeyIn_seller } from '../api/putInvoiceKeyIn_seller.js';
import { getListInvoice_seller } from '../api/getListInvoice_seller.js';
import { getListOverDueInvoice_seller } from '../api/getListOverDueInvoice_seller.js';
import { getListAttachment_seller } from '../api/getListAttachment_seller.js';
import { getListGroup_seller } from '../api/getListGroup_seller.js';
import { getReportLog_seller } from '../api/getReportLog_seller.js';
import { getListSeller_Factor } from '../api/getListSeller_Factor.js';
import { getListBuyer_Factor } from '../api/getListBuyer_Factor.js';
import { getAmountAll_Factor } from '../api/getAmountAll_Factor.js';
import { getListBar_Factor } from '../api/getListBar_Factor.js';
import { getSeller_Factor } from '../api/getSeller_Factor.js';
import { getGroupInvoice_Factor } from '../api/getGroupInvoice_Factor.js';
import { getInvoicePrepareToFinance_Factor } from '../api/getInvoicePrepareToFinance_Factor.js';
import { getReportLog_Factor } from '../api/getReportLog_Factor.js';
import { getListInterestedCustomer_Factor } from '../api/getListInterestedCustomer_Factor.js';



//============================================================================

export default function () {    //เรียกใช้ API ใน export default function
  //------------ seller
  //response = getListFactor_seller()    //1
  //response = getInfoContract_seller()  //2
  //response = getMaxamount_seller()       //3
  //response = putInvoiceKeyIn_seller()    //4
  //response = getListInvoice_seller()      //5
  //response = getListOverDueInvoice_seller()  //6
  //response = getListAttachment_seller()    //7
  //response = getListGroup_seller()      //8
  //response = getReportLog_seller()    //9

  //------------ Factor
  //response = getListSeller_Factor()   //1 
  //response = getListBuyer_Factor()   //2 
  //response = getAmountAll_Factor()    //3 Remerk By Dev not Test.
  //response = getListBar_Factor()   //4 
  //response = getSeller_Factor()    //5 
  //response = getGroupInvoice_Factor()   //6 
  //response = getInvoicePrepareToFinance_Factor()   //7 
  //response = getReportLog_Factor()    //8 
  response = getListInterestedCustomer_Factor()    //9

  error_check(response);
  sleep(1)
}











































































const cid = __ENV.cid || "1";
const id = __ENV.id || "1";
const projectname = __ENV.projectname || "1";
const user = __ENV.user || "1";
const durationx = __ENV.durationx || "1";
let response;
const scenariox = __ENV.scenariox || "1";
let options;
const vusx = Math.ceil(user / durationx);
if (scenariox == 1) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    discardResponseBodies: false,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
        gracefulStop: '120s',
      },
    },
  };
}
else if (scenariox == 2) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    vus: user,
    duration: durationx + 's',
    gracefulStop: '120s',
  };
}
else if (scenariox == 3) {
  options = {
    http: {
      timeout: '300s'
    },
    insecureSkipTLSVerify: true,
    scenarios: {
      example_scenario: {
        executor: 'constant-arrival-rate',
        // rate: user,
        // timeUnit: durationx+'s',
        rate: vusx,
        timeUnit: '1s',
        preAllocatedVUs: user,
        duration: durationx + 's', // ระบุระยะเวลาที่ต้องการให้ทดสอบ
        gracefulStop: '120s',
      },
    },
  };
}
else {
  options = {
    insecureSkipTLSVerify: true,
    discardResponseBodies: true,
    scenarios: {
      contacts: {
        executor: 'per-vu-iterations',
        vus: vusx,
        iterations: durationx,
        maxDuration: '10m',
      },
    },
  };
}
export { options };