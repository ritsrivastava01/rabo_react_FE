(this.webpackJsonprabo_react_fe=this.webpackJsonprabo_react_fe||[]).push([[0],{59:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(13),c=a.n(s),i=a(8),o=a.n(i),l=a(12),u=a(14),m=a(19),d=a(15),p=a(20),b=a.n(p);function j(e){return h.apply(this,arguments)}function h(){return(h=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.post("https://demo-api.now.sh/users",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return v.apply(this,arguments)}function v(){return(v=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://demo-api.now.sh/users");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return new Promise((function(t){return setTimeout(t,e)}))}var x=a(1),g=function(e){var t=e.name,a=e.type,n=e.title,r=e.onChange,s=e.placeholder,c=e.error,i=e.value;return Object(x.jsxs)("div",{className:"mb-5",children:[Object(x.jsx)("label",{htmlFor:"input_"+t,children:n}),Object(x.jsx)("input",{type:a,name:t,id:"input_"+t,placeholder:s,onChange:r,value:i,required:!0,className:"form-control ".concat(c?"is-invalid":"")}),Object(x.jsx)("div",{className:"invalid-feedback",children:c})]})},w=function(e){var t=e.apiCallStatus,a=e.user,n=e.onChange,r=e.onSave,s=e.errors;return Object(x.jsxs)("form",{onSubmit:r,noValidate:!0,className:"container",children:[Object(x.jsxs)("div",{className:"row",children:[Object(x.jsxs)("div",{className:"col",children:[Object(x.jsx)(g,{type:"input",name:"fname",title:"First Name",placeholder:"Your first name",onChange:n,value:a.fname,error:s.fname}),Object(x.jsx)(g,{type:"text",name:"password",title:"Password",placeholder:"Your password",onChange:n,value:a.password,error:s.password})]}),Object(x.jsxs)("div",{className:"col",children:[Object(x.jsx)(g,{type:"input",name:"lname",title:"Last Name",placeholder:"Your last name",onChange:n,value:a.lname,error:s.lname}),Object(x.jsx)(g,{type:"email",name:"email",title:"Email",placeholder:"Your first name",onChange:n,value:a.email,error:s.email})]})]}),Object(x.jsx)("div",{className:" row justify-content-end pr-3 mt-5",children:Object(x.jsx)("button",{className:"btn btn btn-primary btn-lg col-5",type:"submit",disabled:t,children:t?"Saving...":"Save"})})]})},y=a(10),N={fname:"",lname:"",email:"",password:""},P=function(){var e=Object(n.useState)(N),t=Object(d.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)({}),c=Object(d.a)(s,2),i=c[0],p=c[1],b=Object(n.useState)(!1),h=Object(d.a)(b,2),v=h[0],g=h[1],P=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={firstName:a.fname,lastName:a.lname,email:a.email},e.prev=1,g(!0),e.next=5,j(t);case 5:return 200===e.sent.status&&y.b.success("User saved successfully!"),e.next=9,O(4e3);case 9:return e.next=11,f();case 11:e.sent.data&&y.b.success("User retrieved successfully!"),g(!1),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(1),g(!1),y.b.error("Something went wrong. Please try again!");case 20:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=a.fname,t=a.lname,n=a.password,r=a.email,s={};return e||(s.fname="Please enter the first name"),t||(s.lname="Please enter the last name"),r||(s.email="Please enter the valid email"),r&&!function(e){return new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$").test(e)}(r)&&(s.email="Please enter a valid Email."),n||(s.password="Please enter the password"),n&&!function(e,t,a){return!e.includes(t)&&!e.includes(a)&&/^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/.test(e)}(n,e,t)&&(s.password="Password should not include First or Last name.\n        Password Should contain minimum 8 character and\n        should include one capital and one small letter."),p(s),0===Object.keys(s).length};return Object(x.jsx)(w,{user:a,onChange:function(e){var t=e.target,n=t.name,s=t.value;a[n]=s,r((function(e){return Object(m.a)(Object(m.a)({},e),{},Object(u.a)({},n,s))}))},onSave:function(e){e.preventDefault(),S()&&P()},errors:i,apiCallStatus:v})},S=a(2),k=function(){return Object(x.jsx)("h1",{children:"Oops! Page not found"})},C=function(){return Object(x.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-warning mb-5 shadow-sm",children:[Object(x.jsx)("img",{src:"/rabo_react_FE/rabobank_logo.png",style:{height:50},alt:"Rabo bank Logo"}),Object(x.jsx)("h3",{className:"p-2",children:"RABO Bank login Page"})]})};a(57),a(58),a(59);var _=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(C,{children:" "}),Object(x.jsx)("div",{className:"container",children:Object(x.jsxs)(S.c,{children:[Object(x.jsx)(S.a,{path:"/",component:P}),Object(x.jsx)(S.a,{component:k})]})}),Object(x.jsx)(y.a,{autoClose:3e3,hideProgress:!0})]})},A=a(18);c.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(A.a,{children:Object(x.jsx)(_,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.b8de779a.chunk.js.map