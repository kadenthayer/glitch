LNPay.Initialize('pak_O0iUMxk8kK_qUzkT4YKFvp1ZsUtp');

let lnurlParams = {"num_satoshis":12,"memo":"SatsBack!"};
let myWallet = new LNPayWallet('wa_Opnn4kGOGBMnfCLFXtsDnjTb');
myWallet.getLnurl(lnurlParams,
    function(result) {
      console.log(result);
    }
);