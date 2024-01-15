"use strict";(self.webpackChunkhabari_docs=self.webpackChunkhabari_docs||[]).push([[676],{8028:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>A,contentTitle:()=>g,default:()=>f,frontMatter:()=>h,metadata:()=>T,toc:()=>y});var a=t(5893),i=t(1151),d=t(3615),s=t(6775),r=t(8830);const o=[{title:"Query",children:[{key:"perPage",dataType:"Integer",description:"Number of transactions per page",required:!0},{key:"page",dataType:"Integer",description:"page number",required:!0},{key:"date_from",dataType:"date",description:"Format : YYYY-MM-DD, Start Date",required:!1},{key:"date_to",dataType:"date",description:"Format : YYYY-MM-DD, End Date",required:!1},{key:"sort_by",dataType:"String",description:"Sorting Parameter. This can have a value of 'createdAt'",required:!1},{key:"sort_by_dir",dataType:"String",description:"This arranges the transactions in ascending or descending order. Possible values are 'ASC' - ascending order, 'DESC' - descending order",required:!1}]}],l=[{status:"200:OK",responseMsg:"Success",pill:r.O.greenColor,code:'{\n            "status": 200,\n            "success": true,\n            "message": "Success",\n            "data": {\n                "count": 8,\n                "rows": [\n                    {\n                        "id": "1",\n                        "amount": "10000",\n                        "status": 0,\n                        "card": "5074 *** *** 2234",\n                        "createdAt": "2021-12-08T15:05:10.316Z",\n                        "updatedAt": "2021-12-08T15:05:10.316Z",\n                        "deletedAt": null,\n                        "merchant_id": "1",\n                        "terminal_id": "1",\n                        "location_id": "1"\n                    },\n                    {\n                        "id": "2",\n                        "amount": "50000",\n                        "status": 0,\n                        "card": "5074 *** *** 2234",\n                        "createdAt": "2021-12-08T15:05:10.316Z",\n                        "updatedAt": "2021-12-08T15:05:10.316Z",\n                        "deletedAt": null,\n                        "merchant_id": "1",\n                        "terminal_id": "1",\n                        "location_id": "1"\n                    },\n                    {\n                        "id": "3",\n                        "amount": "100000",\n                        "status": 0,\n                        "card": "5074 *** *** 2234",\n                        "createdAt": "2021-12-08T15:05:10.316Z",\n                        "updatedAt": "2021-12-08T15:05:10.316Z",\n                        "deletedAt": null,\n                        "merchant_id": "1",\n                        "terminal_id": "2",\n                        "location_id": "2"\n                    },\n                    {\n                        "id": "4",\n                        "amount": "7000",\n                        "status": 0,\n                        "card": "5074 *** *** 2234",\n                        "createdAt": "2021-12-08T15:05:10.316Z",\n                        "updatedAt": "2021-12-08T15:05:10.316Z",\n                        "deletedAt": null,\n                        "merchant_id": "1",\n                        "terminal_id": "2",\n                        "location_id": "2"\n                    },\n                    {\n                        "id": "5",\n                        "amount": "10000",\n                        "status": 0,\n                        "card": "5074 *** *** 2234",\n                        "createdAt": "2021-12-08T15:05:10.316Z",\n                        "updatedAt": "2021-12-08T15:05:10.316Z",\n                        "deletedAt": null,\n                        "merchant_id": "1",\n                        "terminal_id": "3",\n                        "location_id": "2"\n                    },\n                    {\n                        "id": "6",\n                        "amount": "35000",\n                        "status": 0,\n                        "card": "5074 *** *** 2234",\n                        "createdAt": "2021-12-08T15:05:10.316Z",\n                        "updatedAt": "2021-12-08T15:05:10.316Z",\n                        "deletedAt": null,\n                        "merchant_id": "1",\n                        "terminal_id": "3",\n                        "location_id": "2"\n                    },\n                    {\n                        "id": "7",\n                        "amount": "10000",\n                        "status": 0,\n                        "card": "5074 *** *** 2234",\n                        "createdAt": "2021-12-08T15:05:10.316Z",\n                        "updatedAt": "2021-12-08T15:05:10.316Z",\n                        "deletedAt": null,\n                        "merchant_id": "1",\n                        "terminal_id": "4",\n                        "location_id": "3"\n                    },\n                    {\n                        "id": "8",\n                        "amount": "22000",\n                        "status": 0,\n                        "card": "5074 *** *** 2234",\n                        "createdAt": "2021-12-08T15:05:10.316Z",\n                        "updatedAt": "2021-12-08T15:05:10.316Z",\n                        "deletedAt": null,\n                        "merchant_id": "1",\n                        "terminal_id": "4",\n                        "location_id": "3"\n                    }\n                ]\n            }\n}'},{status:"401:Unathorized",responseMsg:"No API key",pill:r.O.orangeColor,code:'{\n            "success": false,\n            "message": "",\n            "data": {}\n}'},{status:"404:Not Found",responseMsg:"Not Profiled for SquadPOS",pill:r.O.orangeColor,code:'{\n            "status": 404,\n            "success": false,\n            "message": "Merchant does not exist",\n            "data": {}\n}'}],c=[{title:"Header",children:[{key:"content-type",dataType:"String",description:"application/json",required:!0}]},{title:"Body",children:[{key:"email",dataType:"String",description:"unique email to be associated to the terminal being created",required:!0},{key:"name",dataType:"String",description:"Name to be associated to the terminal",required:!0},{key:"phone",dataType:"String",description:"11 digit phone number to be associated to the terminal",required:!0},{key:"location_id",dataType:"Integer",description:"unique ID that identifies a particular location",required:!0}]}],u=[{status:"200:OK",responseMsg:"Success",pill:r.O.greenColor,code:'{\n            "status": 200,\n            "success": true,\n            "message": "Success",\n            "data": {\n                "enabled": false,\n                "id": "8",\n                "name": "Sample name",\n                "phone": "090123456789",\n                "email": "Sample@email.com",\n                "location_id": "1",\n                "updatedAt": "2021-11-12T10:02:09.413Z",\n                "createdAt": "2021-11-12T10:02:09.413Z",\n                "deletedAt": null,\n                "merchant_id": null\n            }\n}'},{status:"401:Unathorized",responseMsg:"No API key",pill:r.O.orangeColor,code:'{\n            "success": false,\n            "message": "",\n            "data": {}\n}'},{status:"404:Not Found",responseMsg:"Not Profiled for SquadPOS",pill:r.O.orangeColor,code:'{\n            "status": 404,\n            "success": false,\n            "message": "Merchant does not exist",\n            "data": {}\n}'}],p=[{title:"Query",children:[{key:"perPage",dataType:"Integer",description:"Number of results per page",required:!0},{key:"page",dataType:"Integer",description:"Page Number",required:!0},{key:"location_id",dataType:"Integer",description:"an ID that identifies a location",required:!1},{key:"sort_by",dataType:"String",description:"Sorting Parameter. This can have a value of 'createdAt'",required:!1},{key:"sort_by_dir",dataType:"String",description:"This arranges the transactions in ascending or descending order. Possible values are 'ASC' - ascending order, 'DESC' - descending order",required:!1},{key:"date_from",dataType:"date",description:"Format : YYYY-MM-DD, Start Date",required:!1},{key:"date_to",dataType:"date",description:"Format : YYYY-MM-DD End Date",required:!1},{key:"active",dataType:"Boolean",description:"It takes a value of 'True' or 'False'",required:!1}]}],m=[{status:"200:OK",responseMsg:"Success",pill:r.O.greenColor,code:'{\n            "status": 200,\n            "success": true,\n            "message": "Success",\n            "data": {\n                "count": 4,\n                "rows": [\n                    {\n                        "id": "2",\n                        "merchant_id": "1",\n                        "name": "Terminal 2",\n                        "email": "merchant1.terminal2@example.com",\n                        "phone": "090123456789",\n                        "registered": false,\n                        "enabled": false,\n                        "active": false,\n                        "createdAt": "2021-11-20T16:11:21.570Z",\n                        "updatedAt": "2021-11-20T16:11:21.570Z",\n                        "deletedAt": null,\n                        "location_id": "2",\n                        "location": {\n                            "id": "2",\n                            "name": "Abuja",\n                            "createdAt": "2021-11-20T16:11:21.410Z",\n                            "updatedAt": "2021-11-20T16:11:21.410Z",\n                            "deletedAt": null\n                        }\n                    },\n                    {\n                        "id": "3",\n                        "merchant_id": "1",\n                        "name": "Terminal 3",\n                        "email": "merchant1.terminal3@example.com",\n                        "phone": "090123456789",\n                        "registered": false,\n                        "enabled": false,\n                        "active": false,\n                        "createdAt": "2021-11-20T16:11:21.570Z",\n                        "updatedAt": "2021-11-20T16:11:21.570Z",\n                        "deletedAt": null,\n                        "location_id": "2",\n                        "location": {\n                            "id": "2",\n                            "name": "Abuja",\n                            "createdAt": "2021-11-20T16:11:21.410Z",\n                            "updatedAt": "2021-11-20T16:11:21.410Z",\n                            "deletedAt": null\n                        }\n                    },\n                    {\n                        "id": "4",\n                        "merchant_id": "1",\n                        "name": "Terminal 4",\n                        "email": "merchant1.terminal4@example.com",\n                        "phone": "090123456789",\n                        "registered": false,\n                        "enabled": false,\n                        "active": false,\n                        "createdAt": "2021-11-20T16:11:21.570Z",\n                        "updatedAt": "2021-11-20T16:11:21.570Z",\n                        "deletedAt": null,\n                        "location_id": "3",\n                        "location": {\n                            "id": "3",\n                            "name": "Enugu",\n                            "createdAt": "2021-11-20T16:11:21.410Z",\n                            "updatedAt": "2021-11-20T16:11:21.410Z",\n                            "deletedAt": null\n                        }\n                    },\n                    {\n                        "id": "1",\n                        "merchant_id": "1",\n                        "name": "Terminal 1",\n                        "email": "merchant1.terminal1@example.com",\n                        "phone": "090123456789",\n                        "registered": false,\n                        "enabled": false,\n                        "active": true,\n                        "createdAt": "2021-11-20T16:11:21.570Z",\n                        "updatedAt": "2021-11-20T16:24:29.624Z",\n                        "deletedAt": null,\n                        "location_id": "1",\n                        "location": {\n                            "id": "1",\n                            "name": "Lagos",\n                            "createdAt": "2021-11-20T16:11:21.410Z",\n                            "updatedAt": "2021-11-20T16:11:21.410Z",\n                            "deletedAt": null\n                        }\n                    }\n                ]\n            }\n}'},{status:"401:Unathorized",responseMsg:"No API key",pill:r.O.orangeColor,code:'{\n            "success": false,\n            "message": "",\n            "data": {}\n}'},{status:"404:Not Found",responseMsg:"Not Profiled",pill:r.O.orangeColor,code:'{\n            "status": 404,\n            "success": false,\n            "message": "Merchant does not exist",\n            "data": {}\n}'}],h={sidebar_position:2},g="API Documentation",T={id:"Squad-POS/api-documentation",title:"API Documentation",description:"Any request made without the authorization key (secret key) will fail with a 401 (Unauthorized) response code.",source:"@site/docs/Squad-POS/api-documentation.mdx",sourceDirName:"Squad-POS",slug:"/Squad-POS/api-documentation",permalink:"/Squad-POS/api-documentation",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Squad-POS/api-documentation.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/Squad-POS/getting-started"},next:{title:"Disputes & Chargebacks",permalink:"/Others/disputes-chargebacks"}},A={},y=[{value:"Get all Transactions",id:"get-all-transactions",level:3},{value:"Create Terminal",id:"create-terminal",level:3},{value:"Sample Request",id:"sample-request",level:4},{value:"Get all Terminals",id:"get-all-terminals",level:3},{value:"GO LIVE - Production",id:"go-live---production",level:3}];function S(e){const n={admonition:"admonition",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"api-documentation",children:"API Documentation"}),"\n",(0,a.jsx)(n.admonition,{title:"Authorization",type:"caution",children:(0,a.jsx)(n.p,{children:"Any request made without the authorization key (secret key) will fail with a 401 (Unauthorized) response code."})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"The authorization key is sent via the request header as Bearer Token Authorization"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Example:"}),"\nAuthorization: Bearer sandbox_sk_94f2b798466408ef4d19e848ee1a4d1a3e93f104046f"]}),"\n",(0,a.jsx)(n.h3,{id:"get-all-transactions",children:"Get all Transactions"}),"\n",(0,a.jsx)(n.p,{children:"This API allows you get all your SquadPOS transactions"}),"\n",(0,a.jsx)(d.Z,{items:o,parameters:!0,endpoint:"https://sandbox-api-d.squadco.com/softpos/transactions?perPage&page",method:"GET",header:"Allows you get all your Squad POS transactions"}),"\n",(0,a.jsx)(s.C,{items:l}),"\n",(0,a.jsx)(n.h3,{id:"create-terminal",children:"Create Terminal"}),"\n",(0,a.jsx)(n.p,{children:"This API allows yopu create multiple SquadPOS terminals which are associated to your squad account"}),"\n",(0,a.jsx)(d.Z,{items:c,parameters:!0,endpoint:"https://sandbox-api-d.squadco.com/softpos/terminal",method:"POST"}),"\n",(0,a.jsx)(s.C,{items:u}),"\n",(0,a.jsx)(n.h4,{id:"sample-request",children:"Sample Request"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n    "name": "Sample name",\n    "email": "Sample@email.com",\n    "phone": "090123456789",\n    "location_id": 1\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"get-all-terminals",children:"Get all Terminals"}),"\n",(0,a.jsx)(n.p,{children:"This API allows you see all SquadPOS terminals created and associated to your account."}),"\n",(0,a.jsx)(d.Z,{items:p,parameters:!0,endpoint:"https://sandbox-api-d.squadco.com/softpos/terminals",method:"GET"}),"\n",(0,a.jsx)(s.C,{items:m}),"\n",(0,a.jsx)(n.h3,{id:"go-live---production",children:"GO LIVE - Production"}),"\n",(0,a.jsx)(n.p,{children:"To Use this API on production:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Kindly change the base URL of the endpoint from sandbox-api-d.squadco.com to api-d.squadco.com"}),"\n",(0,a.jsx)(n.li,{children:"Get production keys from your production environment on dashboard.squadco.com and replace as authorization keys.:::"}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(S,{...e})}):S(e)}}}]);