var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire9f1a;e.register("iYmkp",function(a,t){Object.defineProperty(a.exports,"__esModule",{value:!0,configurable:!0}),Object.defineProperty(a.exports,"default",{get:()=>o,set:void 0,enumerable:!0,configurable:!0});var r=e("ayMG0"),i=e("acw62"),l=e("fmRoT"),s=e("ljFBh"),o=()=>{let[e,a]=(0,i.useState)({name:"",description:"",image:""}),t=async t=>{t.preventDefault();try{await (0,l.default).post(s.URL+"admin/cuisine",e,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}})}catch(e){console.log(e)}a({name:"",description:"",image:""})};return(0,r.jsxs)("div",{className:"mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 bg-gray-50 text-gray-800",children:[(0,r.jsx)("h1",{className:"text-3xl font-semibold text-center text-red-700",children:"Add Cuisine"}),(0,r.jsx)("div",{className:"mt-10 p-4 bg-white shadow-md",children:(0,r.jsxs)("form",{onSubmit:t,encType:"multipart/form-data",children:[(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"name",children:"Name"}),(0,r.jsx)("input",{type:"text",id:"name",placeholder:"Enter Cusine Name",className:"w-full px-3 py-2 border border-gray-300 rounded-md",value:e.name,onChange:t=>a({...e,name:t.target.value}),required:!0})]}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"description",children:"Description"}),(0,r.jsx)("textarea",{id:"description",placeholder:"Write About Cuisine!",className:"w-full px-3 py-2 border border-gray-300 rounded-md",rows:"4",value:e.description,onChange:t=>a({...e,description:t.target.value}),required:!0})]}),(0,r.jsxs)("div",{className:"mb-4",children:[(0,r.jsx)("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"image",children:"Image"}),(0,r.jsx)("input",{type:"file",id:"image",accept:"image/*",value:e.image,onChange:t=>a({...e,image:t.target.value})})]}),(0,r.jsx)("button",{type:"submit",className:"w-fit block mx-auto bg-green-600 text-white py-2 px-4 mt-5 rounded-md hover:bg-red-600 hover:shadow hover:shadow-red-800 transition ease-linear duration-200",children:"Add Cuisine"})]})})]})}});
//# sourceMappingURL=AddCuisine.01068ca2.js.map
