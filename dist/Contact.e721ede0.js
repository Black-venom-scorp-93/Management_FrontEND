var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire9f1a;e.register("bvWc2",function(s,t){Object.defineProperty(s.exports,"__esModule",{value:!0,configurable:!0}),Object.defineProperty(s.exports,"default",{get:()=>n,set:void 0,enumerable:!0,configurable:!0});var a=e("ayMG0"),r=e("fmRoT"),o=e("acw62"),l=e("9KNE7"),i=e("ljFBh"),n=()=>{let[e,s]=(0,o.useState)({email:"",subject:"",message:""}),[t,n]=(0,o.useState)(!1),c=async()=>{try{let s=await (0,r.default).post(i.URL+"user/contact",e);s.data.success?(n(!1),(0,l.toast).success(s.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})):(n(!1),(0,l.toast).error(s.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}))}catch(e){n(!1),(0,l.toast).error(e.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}};return(0,a.jsxs)("section",{className:"bg-white",children:[(0,a.jsx)(l.ToastContainer,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),(0,a.jsxs)("div",{className:"py-8 lg:py-16 px-4 mx-auto max-w-screen-md",children:[(0,a.jsx)("h2",{className:"mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900",children:"Contact Us"}),(0,a.jsx)("p",{className:"mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl",children:"Got a technical issue? Want to send feedback about our services? Need details about our Business plan? Let us know."}),(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault(),n(!0),c(),s({email:"",subject:"",message:""})},className:"space-y-8",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-gray-900",children:"Your email"}),(0,a.jsx)("input",{value:e.email,onChange:t=>s({...e,email:t.target.value}),type:"email",id:"email",className:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5",placeholder:"name@flowbite.com",required:!0})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"subject",className:"block mb-2 text-sm font-medium text-gray-900",children:"Subject"}),(0,a.jsx)("input",{value:e.subject,onChange:t=>s({...e,subject:t.target.value}),type:"text",id:"subject",className:"block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500",placeholder:"Let us know how we can help you",required:!0})]}),(0,a.jsxs)("div",{className:"sm:col-span-2",children:[(0,a.jsx)("label",{htmlFor:"message",className:"block mb-2 text-sm font-medium text-gray-900",children:"Your message"}),(0,a.jsx)("textarea",{value:e.message,onChange:t=>s({...e,message:t.target.value}),id:"message",rows:"6",className:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500",placeholder:"Leave a comment..."})]}),(0,a.jsx)("button",{type:"submit",className:"py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300",children:t?(0,a.jsx)("span",{children:"Sending.."}):(0,a.jsx)("span",{children:"Send Message"})})]})]})]})}});
//# sourceMappingURL=Contact.e721ede0.js.map