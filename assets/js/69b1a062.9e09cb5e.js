"use strict";(self.webpackChunkhabari_docs=self.webpackChunkhabari_docs||[]).push([[237],{7788:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>y,contentTitle:()=>m,default:()=>_,frontMatter:()=>h,metadata:()=>p,toc:()=>b});var i=a(5893),c=a(1151),r=a(3615),o=a(6775),t=a(8830);const s=[{title:"Body",children:[{key:"bank_code",dataType:"String",description:"Unique NIP code that identifies a bank. ",required:!0},{key:"account_number",dataType:"String",description:"Account number you want to transfer to",required:!0}]}],d=[{status:"200:OK",responseMsg:"Success",pill:t.O.greenColor,code:'{\n            "status": 200,\n            "success": true,\n            "message": "Success",\n            "data": {\n                "account_name": "JENNY SQUAD",\n                "account_number": "0123456789"\n            }\n}'},{status:"401:Unathorized",responseMsg:"No Authorization",pill:t.O.orangeColor,code:'{\n            "success": false,\n            "message": "",\n            "data": {}\n}'},{status:"403:Forbidden",responseMsg:"Invalid/Wrong API Keys",pill:t.O.orangeColor,code:'{\n            "success": false,\n            "message": "Merchant authentication failed",\n            "data": {}\n}'}],u=[{title:"Body",children:[{key:"transaction_reference",dataType:"String",description:"Unique Transaction Reference used to initiate a transfer. Please ensure that you append your merchant ID to the transaction Reference you are creating. This is compulsory as it will throw an error if you don't append it.",required:!0},{key:"amount",dataType:"String",description:"Amount to be transferred. Value is in Kobo.",required:!0},{key:"bank_code",dataType:"String",description:"Unique NIP Code that identifies a bank. ",required:!0},{key:"account_number",dataType:"String",description:"10-digit NUBAN account number to be transferred to. Must be an account that has been looked up and vetted to be transferred to.",required:!0},{key:"account_name",dataType:"String",description:"The account name tied to the account number you are transferring to which you have looked up using our look up API.",required:!0},{key:"currency_id",dataType:"String",description:"Takes only the value 'NGN'",required:!0},{key:"remark",dataType:"String",description:"A unique remark that will be sent with the transfer.",required:!0}]}],l=[{status:"200:OK",responseMsg:"Success",pill:t.O.greenColor},{status:"401:Unathorized",responseMsg:"No Authorization",pill:t.O.orangeColor,code:'{\n            "success": false,\n            "message": "",\n            "data": {}\n}'},{status:"403:Forbidden",responseMsg:"Invalid/Wrong API Keys",pill:t.O.orangeColor,code:'{\n            "success": false,\n            "message": "Merchant authentication failed",\n            "data": {}\n}'}],f=[{title:"Body",children:[{key:"transaction_reference",dataType:"String",description:"Unique Transaction Reference used to initiate a transfer. Please ensure that you append your merchant ID to the transaction Reference you are creating. This is compulsory as it will throw an error if you don't append it.",required:!0}]}],k=[{status:"200:OK",responseMsg:"Success",pill:t.O.greenColor},{status:"401:Unathorized",responseMsg:"No Authorization",pill:t.O.orangeColor,code:'{\n            "success": false,\n            "message": "",\n            "data": {}\n}'},{status:"403:Forbidden",responseMsg:"Invalid/Wrong API Keys",pill:t.O.orangeColor,code:'{\n            "success": false,\n            "message": "Merchant authentication failed",\n            "data": {}\n}'}],B=[{title:"Body",children:[{key:"page",dataType:"Integer",description:"Number of Pages",required:!1},{key:"perPage",dataType:"Integer",description:"Number of records per page",required:!1},{key:"dir",dataType:"String",description:"Allows you sort the records in either ascending or descending order. It takes the value 'ASC' or 'DESC'",required:!1}]}],M=[{status:"200:OK",responseMsg:"Success",pill:t.O.greenColor,code:'{\n            "status": 200,\n            "success": true,\n            "message": "Success",\n            "data": [\n                {\n                    "account_number_credited": "0254896325",\n                    "amount_debited": "2000",\n                    "total_amount_debited": "3000",\n                    "success": true,\n                    "recipient": "Dummy Dummy",\n                    "bank_code": "058",\n                    "transaction_reference": "4d665e98-802d-4cd7-b76c-c77eaba9e394",\n                    "transaction_status": "success",\n                    "switch_transaction": null\n                },\n                {\n                    "account_number_credited": "0254896325",\n                    "amount_debited": "2000",\n                    "total_amount_debited": "2500",\n                    "success": true,\n                    "recipient": "Dummy Dummy",\n                    "bank_code": "058",\n                    "transaction_reference": "bbf6ba99-07ae-463d-a8e5-8b11bd5702fa",\n                    "transaction_status": "success",\n                    "switch_transaction": null\n                },\n                {\n                    "account_number_credited": "0254896325",\n                    "amount_debited": "4000",\n                    "total_amount_debited": "4500",\n                    "success": true,\n                    "recipient": "Dummy Dummy",\n                    "bank_code": "058",\n                    "transaction_reference": "e344ed1d-dd1a-4e46-b964-66587a4ad4d4",\n                    "transaction_status": "success",\n                    "switch_transaction": null\n                },\n                {\n                    "account_number_credited": "0254896325",\n                    "amount_debited": "300000",\n                    "total_amount_debited": "300000",\n                    "success": false,\n                    "recipient": "Tee Fifi",\n                    "bank_code": "058",\n                    "transaction_reference": "03/13/2023_C15DBPRZ_Q2P8VPL9",\n                    "transaction_status": "pending",\n                    "switch_transaction": null\n                },\n                {\n                    "account_number_credited": "0254896325",\n                    "amount_debited": "300000",\n                    "total_amount_debited": "300000",\n                    "success": false,\n                    "recipient": "Tee Fifi",\n                    "bank_code": "058",\n                    "transaction_reference": "optional-sample-unique-id",\n                    "transaction_status": "pending",\n                    "switch_transaction": null\n                },\n                {\n                    "account_number_credited": "0254896325",\n                    "amount_debited": "300000",\n                    "total_amount_debited": "300000",\n                    "success": true,\n                    "recipient": "Hay Stack",\n                    "bank_code": "058",\n                    "transaction_reference": "e1f14484-b7dc-4528-8d79-d95fa66e8c69",\n                    "transaction_status": "success",\n                    "switch_transaction": null\n                },\n                {\n                    "account_number_credited": "0254896325",\n                    "amount_debited": "300000",\n                    "total_amount_debited": "300000",\n                    "success": true,\n                    "recipient": "Jenny Squad",\n                    "bank_code": "058",\n                    "transaction_reference": "43eb10c0-57d9-42eb-b8a7-4db299c65ced",\n                    "transaction_status": "success",\n                    "switch_transaction": null\n                }\n            ]\n}'},{status:"401:Unathorized",responseMsg:"No Authorization",pill:t.O.orangeColor,code:'{\n            "success": false,\n            "message": "",\n            "data": {}\n}'},{status:"403:Forbidden",responseMsg:"Invalid/Wrong API Keys",pill:t.O.orangeColor,code:'{\n            "success": false,\n            "message": "Merchant authentication failed",\n            "data": {}\n}'}],h={sidebar_position:1},m="Transfer API",p={id:"Transfer-API/transfer-apis",title:"Transfer API",description:"These are suites of API that allows you move funds from your Squad Wallet to a bank Account.",source:"@site/docs/Transfer-API/transfer-apis.mdx",sourceDirName:"Transfer-API",slug:"/Transfer-API/transfer-apis",permalink:"/Transfer-API/transfer-apis",draft:!1,unlisted:!1,editUrl:"https://github.com/HabariPay/habaripay.github.io/tree/main/docs/Transfer-API/transfer-apis.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Dynamic Virtual Account",permalink:"/Virtual-accounts/dynamic-virtual-account-v2"},next:{title:"Wallet Balance",permalink:"/Transfer-API/wallet-balance"}},y={},b=[{value:"These are suites of API that allows you move funds from your Squad Wallet to a bank Account.",id:"these-are-suites-of-api-that-allows-you-move-funds-from-your-squad-wallet-to-a-bank-account",level:5},{value:"Account Lookup",id:"account-lookup",level:3},{value:"Available Bank Codes",id:"available-bank-codes",level:4},{value:"Sample Request",id:"sample-request",level:4},{value:"Sample Response",id:"sample-response",level:4},{value:"Fund Transfer",id:"fund-transfer",level:3},{value:"Transaction Reference:",id:"transaction-reference",level:4},{value:"For instance:",id:"for-instance",level:4},{value:"ERROR CODE",id:"error-code",level:4},{value:"Sample Request",id:"sample-request-1",level:3},{value:"Re-query Transfer",id:"re-query-transfer",level:3},{value:"Sample Request",id:"sample-request-2",level:4},{value:"Get All Transfers",id:"get-all-transfers",level:3},{value:"Sample Response: 200-ok",id:"sample-response-200-ok",level:4}];function g(n){const e={admonition:"admonition",code:"code",h1:"h1",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"transfer-api",children:"Transfer API"}),"\n",(0,i.jsx)(e.h5,{id:"these-are-suites-of-api-that-allows-you-move-funds-from-your-squad-wallet-to-a-bank-account",children:"These are suites of API that allows you move funds from your Squad Wallet to a bank Account."}),"\n",(0,i.jsx)(e.admonition,{title:"Authorization",type:"caution",children:(0,i.jsx)(e.p,{children:"Any request made without the authorization key (secret key) will fail with a 401 (Unauthorized) response code."})}),"\n",(0,i.jsx)(e.admonition,{type:"info",children:(0,i.jsx)(e.p,{children:"The authorization key is sent via the request header as Bearer Token Authorization"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Example:"}),"\nAuthorization: Bearer sandbox_sk_94f2b798466408ef4d19e848ee1a4d1a3e93f104046f"]}),"\n",(0,i.jsx)(e.h3,{id:"account-lookup",children:"Account Lookup"}),"\n",(0,i.jsx)(e.p,{children:"This API allows you lookup/confirm the account name of the recipient you intend to credit. This should be done before initiating the transfer."}),"\n",(0,i.jsx)(r.Z,{items:s,parameters:!0,endpoint:"https://sandbox-api-d.squadco.com/payout/account/lookup",method:"POST",header:"This API allows you confirm Account Name to be transferred to."}),"\n",(0,i.jsx)(o.C,{items:d}),"\n",(0,i.jsx)(e.h4,{id:"available-bank-codes",children:"Available Bank Codes"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"000001       Sterling Bank\n000002       Keystone Bank\n000003       FCMB\n000004       United Bank for Africa\n000005       Diamond Bank\n000006       JAIZ Bank\n000007       Fidelity Bank\n000008       Polaris  Bank\n000009       Citi Bank\n000010       Ecobank Bank\n000011       Unity Bank\n000012       StanbicIBTC Bank\n000013       GTBank Plc\n000014       Access Bank\n000015       Zenith Bank Plc\n000016       First Bank of Nigeria\n000017       Wema Bank\n000018       Union Bank\n000019       Enterprise Bank\n000020       Heritage\n000021       Standard Chartered\n000022       Suntrust Bank\n000023       Providus Bank\n000024       Rand Merchant Bank\n000025       Titan Trust Bank\n000026       Taj Bank\n000027       Globus Bank\n000028       Central Bank of Nigeria\n000029       Lotus Bank\n000031       Premium Trust Bank\n000033       eNaira\n000034       Signature Bank\n000036       Optimus Bank\n050002       FEWCHORE FINANCE COMPANY LIMITED\n050003       SageGrey Finance Limited\n050005       AAA Finance\n050006       Branch International Financial Services\n050007       Tekla Finance Limited\n050009       Fast Credit\n050010       Fundquest Financial Services Limited\n050012       Enco Finance\n050013       Dignity Finance\n050013       Trinity Financial Services Limited\n400001       FSDH Merchant Bank\n060001       Coronation Merchant Bank\n060002       FBNQUEST Merchant Bank\n060003       Nova Merchant Bank\n060004       Greenwich Merchant Bank\n070007       Omoluabi savings and loans\n090001       ASOSavings & Loans\n090005       Trustbond Mortgage Bank\n090006       SafeTrust\n090107       FBN Mortgages Limited\n100024       Imperial Homes Mortgage Bank\n100028       AG Mortgage Bank\n070009       Gateway Mortgage Bank\n070010       Abbey Mortgage Bank\n070011       Refuge Mortgage Bank\n070012       Lagos Building Investment Company\n070013       Platinum Mortgage Bank\n070014       First Generation Mortgage Bank\n070015       Brent Mortgage Bank\n070016       Infinity Trust Mortgage Bank\n070019       MayFresh Mortgage Bank\n090003       Jubilee-Life Mortgage  Bank\n070017       Haggai Mortgage Bank Limited\n070021       Coop Mortgage Bank\n070023       Delta Trust Microfinance Bank\n070024       Homebase Mortgage Bank\n070025       Akwa Savings & Loans Limited\n070026       FHA Mortgage Bank\n090108       New Prudential Bank\n070001       NPF MicroFinance Bank\n070002       Fortis Microfinance Bank\n070006       Covenant MFB\n070008       Page Financials\n090004       Parralex Microfinance bank\n090097       Ekondo MFB\n090110       VFD MFB\n090111       FinaTrust Microfinance Bank\n090112       Seed Capital Microfinance Bank\n090114       Empire trust MFB\n090115       TCF MFB\n090116       AMML MFB\n090117       Boctrust Microfinance Bank\n090118       IBILE Microfinance Bank\n090119       Ohafia Microfinance Bank\n090120       Wetland Microfinance Bank\n090121       Hasal Microfinance Bank\n090122       Gowans Microfinance Bank\n090123       Verite Microfinance Bank\n090124       Xslnce Microfinance Bank\n090125       Regent Microfinance Bank\n090126       Fidfund Microfinance Bank\n090127       BC Kash Microfinance Bank\n090128       Ndiorah Microfinance Bank\n090129       Money Trust Microfinance Bank\n090130       Consumer Microfinance Bank\n090131       Allworkers Microfinance Bank\n090132       Richway Microfinance Bank\n090133       AL-Barakah Microfinance Bank\n090134       Accion Microfinance Bank\n090135       Personal Trust Microfinance Bank\n090136       Microcred Microfinance Bank\n090137       PecanTrust Microfinance Bank\n090138       Royal Exchange Microfinance Bank\n090139       Visa Microfinance Bank\n090140       Sagamu Microfinance Bank\n090141       Chikum Microfinance Bank\n090142       Yes Microfinance Bank\n090143       Apeks Microfinance Bank\n090144       CIT Microfinance Bank\n090145       Fullrange Microfinance Bank\n090146       Trident Microfinance Bank\n090147       Hackman Microfinance Bank\n090148       Bowen Microfinance Bank\n090149       IRL Microfinance Bank\n090150       Virtue Microfinance Bank\n090151       Mutual Trust Microfinance Bank\n090152       Nagarta Microfinance Bank\n090153       FFS Microfinance Bank\n090154       CEMCS Microfinance Bank\n090155       Advans La Fayette  Microfinance Bank\n090156       e-Barcs Microfinance Bank\n090157       Infinity Microfinance Bank\n090158       Futo Microfinance Bank\n090159       Credit Afrique Microfinance Bank\n090160       Addosser Microfinance Bank\n090161       Okpoga Microfinance Bank\n090162       Stanford Microfinance Bak\n090164       First Royal Microfinance Bank\n090165       Petra Microfinance Bank\n090166       Eso-E Microfinance Bank\n090167       Daylight Microfinance Bank\n090168       Gashua Microfinance Bank\n090169       Alpha Kapital Microfinance Bank\n090171       Mainstreet Microfinance Bank\n090172       Astrapolaris Microfinance Bank\n090173       Reliance Microfinance Bank\n090174       Malachy Microfinance Bank\n090175       HighStreet Microfinance Bank\n090176       Bosak Microfinance Bank\n090177       Lapo Microfinance Bank\n090178       GreenBank Microfinance Bank\n090179       FAST Microfinance Bank\n090180       Amju Unique Microfinance Bank\n090186       Girei Microfinance Bank\n090188       Baines Credit Microfinance Bank\n090189       Esan Microfinance Bank\n090190       Mutual Benefits Microfinance Bank\n090191       KCMB Microfinance Bank\n090192       Midland Microfinance Bank\n090193       Unical Microfinance Bank\n090194       NIRSAL Microfinance Bank\n090195       Grooming Microfinance Bank\n090196       Pennywise Microfinance Bank\n090197       ABU Microfinance Bank\n090198       RenMoney Microfinance Bank\n090205       New Dawn Microfinance Bank\n090251       UNN MFB\n090252       Yobe Microfinance Bank\n090254       Coalcamp Microfinance Bank\n090258       Imo State Microfinance Bank\n090259       Alekun Microfinance Bank\n090260       Above Only Microfinance Bank\n090261       Quickfund Microfinance Bank\n090262       Stellas Microfinance Bank\n090263       Navy Microfinance Bank\n090264       Auchi Microfinance Bank\n090265       Lovonus Microfinance Bank\n090266       Uniben Microfinance Bank\n090267       Kuda Microfinance Bank\n090268       Adeyemi College Staff Microfinance Bank\n090269       Greenville Microfinance Bank\n090270       AB Microfinance Bank\n090271       Lavender Microfinance Bank\n090272       Olabisi Onabanjo University Microfinance Bank\n090273       Emeralds Microfinance Bank\n090274       Prestige Microfinance Bank\n090276       Trustfund Microfinance Bank\n090277       Al-Hayat Microfinance Bank\n090278       Glory Microfinance Bank\n090279       Ikire Microfinance Bank\n090280       Megapraise Microfinance Bank\n090281       MintFinex Microfinance Bank\n090282       Arise Microfinance Bank\n090283       Nnew Women Microfinance Bank\n090285       First Option Microfinance Bank\n090286       Safe Haven Microfinance Bank\n090287       AssetMatrix Microfinance Bank\n090289       Pillar Microfinance Bank\n090290       FCT Microfinance Bank\n090291       Halal Credit Microfinance Bank\n090292       Afekhafe Microfinance Bank\n090293       Brethren Microfinance Bank\n090294       Eagle Flight Microfinance Bank\n090295       Omiye Microfinance Bank\n090296       Polyunwana Microfinance Bank\n090297       Alert Microfinance Bank\n090298       FedPoly Nasarawa Microfinance Bank\n090299       Kontagora Microfinance Bank\n090303       Purplemoney Microfinance Bank\n090304       Evangel Microfinance Bank\n090305       Sulspap Microfinance Bank\n090307       Aramoko Microfinance Bank\n090308       Brightway Microfinance Bank\n090310       EdFin Microfinance Bank\n090315       U & C Microfinance Bank\n090317       PatrickGold Microfinance Bank\n090318       Federal University Dutse Microfinance Bank\n090320       KadPoly Microfinance Bank\n090321       MayFair Microfinance Bank\n090322       Rephidim Microfinance Bank\n090323       Mainland Microfinance Bank\n090324       Ikenne Microfinance Bank\n090325       Sparkle\n090326       Balogun Gambari Microfinance Bank\n090327       Trust Microfinance Bank\n090328       Eyowo\n090329       Neptune Microfinance Bank\n090331       UNAAB Microfinance Bank\n090332       Evergreen Microfinance Bank\n090333       Oche Microfinance Bank\n090337       Iyeru Okin Microfinance Bank\n090352       Jessefield Microfinance Bank\n090336       BIPC Microfinance Bank\n090345       OAU Microfinance Bank\n090349       Nassarawa Microfinance Bank\n090360       CashConnect Microfinance Bank\n090362       Molusi Microfinance Bank\n090363       Headway Microfinance Bank\n090364       Nuture Microfinance Bank\n090365       Corestep Microfinance Bank\n090366       Firmus Microfinance Bank\n090369       Seedvest Microfinance Bank\n090370       Ilisan Microfinance Bank\n090372       Legend Microfinance Bank\n090373       Think Finance Microfinance Bank\n090374       Coastline Microfinance Bank\n090376       Apple Microfinance Bank\n090377       Isaleoyo Microfinance Bank\n090378       New Golden Pastures Microfinance Bank\n090385       GTI Microfinance Bank\n090386       Interland Microfinance Bank\n090389       EK-Reliable Microfinance Bank\n090391       Davodani Microfinance Bank\n090380       Conpro  Microfinance Bank\n090393       Bridgeway Microfinance Bank\n090394       Amac Microfinance Bank\n090395       Borgu  Microfinance Bank\n090396       Oscotech Microfinance Bank\n090399       Nwannegadi Microfinance Bank\n090398       Federal Polytechnic Nekede Microfinance Bank\n090401       Shepherd Trust Microfinance Bank\n090403       UDA Microfinance Bank\n090404       Olowolagba Microfinance Bank\n090405       Rolez Microfinance Bank\n090406       Business Support Microfinance Bank\n090409       FCMB BETA\n090408       GMB Microfinance Bank\n090410       Maritime Microfinance Bank\n090411       Giginya Microfinance bank\n090412       Preeminent Microfinance Bank\n090444       BOI Microfinance Bank\n090448       Moyofade Microfinance Bank\n090455       Mkobo Microfinance Bank\n090463       Rehoboth Microfinance Bank\n090464       Unimaid Microfinance Bank\n090468       OLOFIN OWENA Microfinance Bank\n090473       Assets Microfinance Bank\n090338       UniUyo Microfinance Bank\n090466       YCT Microfinance Bank\n090467       Good Neigbours Microfinance Bank\n090471       Oluchukwu Microfinance Bank\n090465       Maintrust Microfinance Bank\n090469       Aniocha Microfinance bank\n090472       Caretaker Microfinance Bank\n090475       Giant Stride Microfinance Bank\n090181       Balogun Fulani Microfinance Bank\n090474       Verdant Microfinance Bank\n090470       Changan RTS Microfinance Bank\n090476       Anchorage  Microfinance Bank\n090477       Light MFB\n090480       Cintrust Microfinance Bank\n090482       Fedeth Microfinance Bank\n090483       Ada Microfinance Bank\n090488       Ibu-Aje Microfinance Bank\n090489       Alvana Microfinance Bank\n090490       Chukwunenye MFB\n090491       Nsuk MFB\n090492       Oraukwu MFB\n090494       Boji MFB\n090495       Goodnews Microfinance Bank\n090496       Randalpha Microfinance Bank\n090499       Pristine Divitis Microfinance Bank\n090502       Shalom Microfinance Bank\n090503       Projects Microfinance Bank\n090504       Zikora Microfinance Bank\n090505       Nigerian Prisons Microfinance Bank\n090506       Solid Allianze MFB\n090507       FIMS MFB\n090513       SEAP Microfinance Bank\n090515       RIMA Growth Pathway Microfinance Bank\n090469       Aniocha Microfinance bank\n090516       Numo Microfinance Bank\n090517       Uhuru Microfinance Bank\n090518       Afemai Microfinance Bank\n090519       Iboma Fadama Microfinance Bank\n090523       Chase Microfinance Bank\n090524       Solidrock microfinance Bank\n090525       TripleA Microfinance Bank\n090526       Crescent Microfinance Bank\n090527       Ojokoro Microfinance Bank\n090528       Mgbidi Microfinance Bank\n090529       Ampersand Microfinance Bank\n090530       Confidence MFB\n090531       Aku Microfinance Bank\n090534       Polybadan Microfinance Bank\n090536       Ikoyi-Osun Microfinance Bank\n090537       Lobrem Microfinance Bank\n090538       BluePrint Investments Microfinance Bank\n090539       Enrich Microfinance Bank\n090540       Aztec Microfinance Bank\n090541       Excellent Microfinance Bank\n090542       Otuo Microfinance Bank\n090543       Iwoama Microfinance Bank\n090544       Aspire Microfinance Bank\n090545       Abulesoro Microfinance Bank\n090546       Ijebu-Ife Microfinance Bank\n090547       Rockshield Microfinance Bank\n090548       Ally Microfinance Bank\n090549       KC Microfinance Bank\n090550       Green Energy Microfinance Bank\n090551       FairMoney Microfinance Bank\n090553       Consistent Trust Microfinance Bank\n090554       Kayvee Microfinance Bank\n090555       BishopGate Microfinance Bank\n090556       Egwafin Microfinance Bank\n090557       Lifegate Microfinance Bank\n090558       Shongom Microfinance Bank\n090559       Shield Microfinance Bank\n090560       Tanadi Microfinance Bank\n090561       Akuchuckwu Microfinance Bank\n090562       Cedar Microfinance Bank\n090563       Balera Microfinance Bank\n090564       Supreme Microfinance Bank\n090565       Oke-Aro Oredegbe Microfinance Bank\n090566       Okuku Microfinance Bank\n090567       Orokam Microfinance Bank\n090568       Broadview Microfinance Bank\n090569       Qube Microfinance Bank\n090570       Iyamoye Microfinance Bank\n090571       Ilaro Poly Microfinance Bank\n090572       EWT Microfinance Bank\n090573       Snow MFB\n090575       First Midas Microfinance Bank\n090576       Octopus Microfinance Bank\n090579       Gbede Microfinance Bank\n090580       Otech Microfinance Bank\n090583       Stateside Microfinance Bank\n090574       GOLDMAN MFB\n090535       Nkpolu-Ust MFB\n090578       Iwade MFB Ltd\n090587       Microbiz MFB\n090588       Orisun MFB\n090589       Mercury MFB\n090591       Gabsyn Microfinance Bank Limited\n090593       Tasued Microfinance Bank\n090602       Kenechukwu Microfinance Bank\n090950       Waya Microfinance Bank\n090598       IBA Microfinance Bank\n090584       Island Microfinance Bank\n090600       Ave Maria Microfinance Bank\n090608       Akpo Microfinance Bank\n090609       Ummah  Microfinance Bank\n090610       Amoye Microfinance Bank\n090612       Medef Microfinance Bank\n090532       IBOLO Microfinance Bank\n090581       Banc Corp MFB\n090614       Flourish MFB\n090615       Beststar MFB\n090616       Rayyan MFB\n090603       Macrod MFB\n090620       Iyin Ekiti MFB\n090611       Creditville MFB\n090623       MAB Allianz MFB\n100001       FET\n100002       Paga\n100003       Parkway-ReadyCash\n100004       Opay Digital Services LTD\n100005       Cellulant\n100006       eTranzact\n100007       Stanbic IBTC @ease wallet\n100008       Ecobank Xpress Account\n100009       GTMobile\n100010       TeasyMobile\n100011       Mkudi\n100012       VTNetworks\n100013       AccessMobile\n100014       FBNMobile\n100036       Kegow (Chamsmobile)\n100016       FortisMobile\n100017       Hedonmark\n100018       ZenithMobile\n100019       Fidelity Mobile\n100020       MoneyBox\n100021       Eartholeum\n100022       GoMoney\n100023       TagPay\n100025       Zinternet Nigera Limited\n100026       One Finance\n100029       Innovectives Kesh\n100030       EcoMobile\n100031       FCMB Easy Account\n100032       Contec Global Infotech Limited (NowNow)\n100033       PalmPay Limited\n100034       Zenith Eazy Wallet\n100052       Access Yello\n100035       M36\n100039       TitanPaystack\n080002       Taj_Pinspay\n100027       Intellifin\n110001       PayAttitude Online\n110002       Flutterwave Technology Solutions Limited\n110003       Interswitch Limited\n110004       First Apple Limited\n110005       3line Card Management Limited\n110006       Paystack Payment Limited\n110007       Teamapt Limited\n110014       Cyberspace Limited\n110015       Vas2nets Limited\n110017       Crowdforce\n110032       Prophius\n090202       Accelerex Network Limited\n999999       NIP Virtual Bank\n120001       9Payment Service Bank\n120002       HopePSB\n120003       MoMo PSB\n120004       SmartCash PSB\n\n"})}),"\n",(0,i.jsx)(e.h4,{id:"sample-request",children:"Sample Request"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'{\n    "bank_code":"000013",\n    "account_number":"0123456789"\n}\n'})}),"\n",(0,i.jsx)(e.h4,{id:"sample-response",children:"Sample Response"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'{\n    "status": 200,\n    "success": true,\n    "message": "Success",\n    "data": {\n        "account_name": "JENNY SQUAD",\n        "account_number": "0123456789"\n    }\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"fund-transfer",children:"Fund Transfer"}),"\n",(0,i.jsx)(e.p,{children:"This API allows you to transfer funds from your Squad Wallet to the account you have looked up."}),"\n",(0,i.jsx)(e.admonition,{type:"caution",children:(0,i.jsx)(e.p,{children:"Please be informed that we will not be held liable for mistake in transferring to a wrong account or an account that wasn't looked up."})}),"\n",(0,i.jsx)(e.h4,{id:"transaction-reference",children:"Transaction Reference:"}),"\n",(0,i.jsx)(e.p,{children:"Transaction Reference used to initiate a transfer must be unique per transfer. Kindly ensure that you append your merchant ID to the transaction Reference you are creating. This is compulsory as it will throw an error if you don't append it."}),"\n",(0,i.jsx)(e.h4,{id:"for-instance",children:"For instance:"}),"\n",(0,i.jsx)(e.p,{children:"If my Squad Merchant ID is SBABCKDY and i want to create a transaction ref for my transfer, then I will have something like:"}),"\n",(0,i.jsx)(e.p,{children:'"transaction_reference":"SBABCKDY_12345".'}),"\n",(0,i.jsx)(e.h4,{id:"error-code",children:"ERROR CODE"}),"\n",(0,i.jsx)(e.p,{children:"These are the various error codes that you might get on the transfer API and the one you should re-query"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"ERROR CODES"}),(0,i.jsx)(e.th,{children:"DESCRIPTION"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"200"}),(0,i.jsx)(e.td,{children:"Success"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"400"}),(0,i.jsx)(e.td,{children:"Bad request"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"422"}),(0,i.jsx)(e.td,{children:"Unprocessed"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"424"}),(0,i.jsx)(e.td,{children:"Timeout/failed --- Should re-query"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"404"}),(0,i.jsx)(e.td,{children:"Not found"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"412"}),(0,i.jsx)(e.td,{children:"reversed"})]})]})]}),"\n",(0,i.jsx)(r.Z,{items:u,parameters:!0,endpoint:"https://sandbox-api-d.squadco.com/payout/transfer",method:"POST",summary:"This is for movement of funds from Squad Wallet to any bank account (GTB at the moment)"}),"\n",(0,i.jsx)(o.C,{items:l}),"\n",(0,i.jsx)(e.h3,{id:"sample-request-1",children:"Sample Request"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'{\n    "remark": "for test transfer to my customer",\n    "bank_code":"000013",\n    "currency_id": "NGN",\n    "amount": "100",\n    "account_number":"0123456789",\n    "transaction_reference":"SBABCKDY_12345",\n    "account_name":"BOLUS PAUL"\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"re-query-transfer",children:"Re-query Transfer"}),"\n",(0,i.jsx)(e.p,{children:"This API allows you re-query the status of a transfer made to know if it was successful, failed, reversed or pending."}),"\n",(0,i.jsx)(r.Z,{items:f,parameters:!0,endpoint:"https://sandbox-api-d.squadco.com/payout/requery",method:"POST",header:"This API allows you re-query the status of a transfer"}),"\n",(0,i.jsx)(o.C,{items:k}),"\n",(0,i.jsx)(e.h4,{id:"sample-request-2",children:"Sample Request"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'{\n    "transaction_reference": "47484093994949"\n}\n'})}),"\n",(0,i.jsx)(e.h3,{id:"get-all-transfers",children:"Get All Transfers"}),"\n",(0,i.jsx)(e.p,{children:"This API Allows you retrieve the details of all transfers you have done from your Squad Wallet using this transfer solution."}),"\n",(0,i.jsx)(r.Z,{items:B,parameters:!0,endpoint:"https://sandbox-api-d.squadco.com/payout/list",method:"GET",header:"This API gets the details of all transfers you have done from your Squad Wallet "}),"\n",(0,i.jsx)(o.C,{items:M}),"\n",(0,i.jsx)(e.h4,{id:"sample-response-200-ok",children:"Sample Response: 200-ok"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'{\n    "status": 200,\n    "success": true,\n    "message": "Success",\n    "data": [\n        {\n            "account_number_credited": "0254896325",\n            "amount_debited": "2000",\n            "total_amount_debited": "3000",\n            "success": true,\n            "recipient": "Dummy Dummy",\n            "bank_code": "058",\n            "transaction_reference": "4d665e98-802d-4cd7-b76c-c77eaba9e394",\n            "transaction_status": "success",\n            "switch_transaction": null\n        },\n        {\n            "account_number_credited": "0254896325",\n            "amount_debited": "2000",\n            "total_amount_debited": "2500",\n            "success": true,\n            "recipient": "Dummy Dummy",\n            "bank_code": "058",\n            "transaction_reference": "bbf6ba99-07ae-463d-a8e5-8b11bd5702fa",\n            "transaction_status": "success",\n            "switch_transaction": null\n        },\n        {\n            "account_number_credited": "0254896325",\n            "amount_debited": "4000",\n            "total_amount_debited": "4500",\n            "success": true,\n            "recipient": "Dummy Dummy",\n            "bank_code": "058",\n            "transaction_reference": "e344ed1d-dd1a-4e46-b964-66587a4ad4d4",\n            "transaction_status": "success",\n            "switch_transaction": null\n        },\n        {\n            "account_number_credited": "0254896325",\n            "amount_debited": "300000",\n            "total_amount_debited": "300000",\n            "success": false,\n            "recipient": "Tee Fifi",\n            "bank_code": "058",\n            "transaction_reference": "03/13/2023_C15DBPRZ_Q2P8VPL9",\n            "transaction_status": "pending",\n            "switch_transaction": null\n        },\n        {\n            "account_number_credited": "0254896325",\n            "amount_debited": "300000",\n            "total_amount_debited": "300000",\n            "success": false,\n            "recipient": "Tee Fifi",\n            "bank_code": "058",\n            "transaction_reference": "optional-sample-unique-id",\n            "transaction_status": "pending",\n            "switch_transaction": null\n        },\n        {\n            "account_number_credited": "0254896325",\n            "amount_debited": "300000",\n            "total_amount_debited": "300000",\n            "success": true,\n            "recipient": "Hay Stack",\n            "bank_code": "058",\n            "transaction_reference": "e1f14484-b7dc-4528-8d79-d95fa66e8c69",\n            "transaction_status": "success",\n            "switch_transaction": null\n        },\n        {\n            "account_number_credited": "0254896325",\n            "amount_debited": "300000",\n            "total_amount_debited": "300000",\n            "success": true,\n            "recipient": "Jenny Squad",\n            "bank_code": "058",\n            "transaction_reference": "43eb10c0-57d9-42eb-b8a7-4db299c65ced",\n            "transaction_status": "success",\n            "switch_transaction": null\n        }\n    ]\n}\n'})})]})}function _(n={}){const{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(g,{...n})}):g(n)}},8830:(n,e,a)=>{a.d(e,{O:()=>i});const i={greenColor:"bg-[#217837]",orangeColor:"bg-[#A94A09]"}}}]);