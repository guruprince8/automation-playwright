import {test, expect} from '@playwright/test'
import { request } from 'http'

// https://www.lambdatest.com/learning-hub/playwright-api-testing
test('creat an exception case',async({request}) => {
    
    const response = await request.post('https://rebep.pegatsdemo.com/prweb/api/plexceptions/v1/create', {
        data:{
            "exception":{
                "batchOrTransactionDate":"20241129",
                "companyNumber":1040909376,
                "accountNumber":801241790,
                "batchNumber":6031,
                "transactionSequenceNumber":74423,
                "transactionCode":"HG6748",
                "actionCode":"ACT598",
                "checkDate":"20241130",
                "effectiveDate":"20241201",
                "transactionDescriptorCode":"BFCD6312",
                "interestAmount":120.134,
                "principalAmount":8732.01,
                "miscellaneousAmount":1.324,
                "errorCode":"ISG100",
                "errorMessage":"Payment failed"
            }
        },
        headers : {
            "Content-Type": "application/json",
            "Authorization":"Basic cHVuZWV0aDppbnN0YWxsMTIzNDUh"
        }
    });
    expect(response.ok()).toBeTruthy();
    expect((response).status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);
    expect(responseBody).toHaveProperty("exceptionCaseId");
});