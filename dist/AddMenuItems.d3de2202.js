var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire9f1a;e.register("j7ADL",function(l,t){Object.defineProperty(l.exports,"__esModule",{value:!0,configurable:!0}),Object.defineProperty(l.exports,"default",{get:()=>n,set:void 0,enumerable:!0,configurable:!0});var a=e("ayMG0"),s=e("acw62"),n=()=>{let[e,l]=(0,s.useState)([]),[t,n]=(0,s.useState)(""),[d,r]=(0,s.useState)(0),[i,o]=(0,s.useState)(null),c=l=>{l.preventDefault(),console.log(e)};return(0,a.jsxs)("div",{className:"p-4 w-3/4 mx-auto",children:[(0,a.jsxs)("form",{className:"space-y-4",onSubmit:c,children:[(0,a.jsx)("label",{className:"block text-lg font-bold mb-2",children:"Upload Image:"}),(0,a.jsx)("input",{type:"file",onChange:e=>o(e.target.files[0]),accept:"image/*",className:"border rounded-md p-2"}),(0,a.jsx)("label",{className:"block text-lg font-bold mb-2",children:"Name:"}),(0,a.jsx)("input",{type:"text",value:t,onChange:e=>n(e.target.value),placeholder:"Enter item name",className:"w-full p-2 border rounded-md"}),(0,a.jsx)("label",{className:"block text-lg font-bold mb-2",children:"Price:"}),(0,a.jsx)("input",{type:"number",value:d,onChange:e=>r(parseFloat(e.target.value)),placeholder:"Enter price (e.g., 12.99)",className:"w-full p-2 border rounded-md"}),(0,a.jsxs)("div",{className:"buttons flex md:flex-row flex-col justify-center space-y-5 md:space-y-0 md:space-x-5 items-center",children:[(0,a.jsx)("button",{type:"button",onClick:a=>{a.preventDefault();let s={itemName:t,price:d,image:i?URL.createObjectURL(i):null};l([...e,s]),n(""),r(0),o(null)},className:"bg-green-500 text-white p-2 rounded-md",children:"Add More"}),(0,a.jsx)("button",{type:"submit",onClick:c,className:"bg-red-500 text-white p-2 rounded-md",children:"submit"})]})]}),e.length>0&&(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)("h2",{className:"text-lg font-semibold",children:"Added Menu Items:"}),(0,a.jsx)("ul",{className:"list-disc ml-4",children:e.map((e,l)=>(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:e.itemName})," - $",e.price,e.image&&(0,a.jsx)("img",{src:e.image,alt:e.itemName,className:"ml-2 w-24 h-20 "})]},l))})]})]})}});
//# sourceMappingURL=AddMenuItems.d3de2202.js.map
