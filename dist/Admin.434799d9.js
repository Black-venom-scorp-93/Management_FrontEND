var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire9f1a;e.register("8YUP7",function(s,t){Object.defineProperty(s.exports,"__esModule",{value:!0,configurable:!0}),Object.defineProperty(s.exports,"default",{get:()=>d,set:void 0,enumerable:!0,configurable:!0});var r=e("ayMG0"),o=e("fmRoT"),a=e("acw62"),i=e("9KNE7"),n=e("ljFBh"),l=e("lzNIT"),d=()=>{let[e,s]=(0,a.useState)([]);(0,a.useEffect)(()=>{t()},[]);let t=async()=>{try{let e=await (0,o.default).get(n.URL+"admin/orders",{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});s(e.data.orders),e.data.success?(0,i.toast).success(e.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}):(0,i.toast).error(e.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}catch(e){console.log(e.stack),(0,i.toast).error("You are not an admin",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}},d=async e=>{try{let t=await (0,o.default).delete(n.URL+"admin/order/"+e,{headers:{Authorization:`Bearer ${localStorage.getItem("token")}`}});s(t.data.orders),t.data.success?(0,i.toast).success(t.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}):(0,i.toast).error(t.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}catch(e){console.log(e.stack),(0,i.toast).error("Order cannot be deleted",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.ToastContainer,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light"}),0!==e.length?(0,r.jsxs)("div",{className:"mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 space-y-8 py-10 bg-gray-50 text-gray-800",children:[(0,r.jsxs)("div",{className:"buttons flex flex-row justify-center space-x-5",children:[(0,r.jsx)(l.Link,{to:"/admin/addcuisine",className:"w-fit block mx-auto bg-green-600 text-white py-2 px-4 mt-5 rounded-md hover:font-semibold hover:bg-red-600 hover:shadow hover:shadow-red-800 transition ease-linear duration-200",children:"Add Cuisine"}),(0,r.jsx)(l.Link,{to:"/admin/contact",className:"w-fit block mx-auto bg-transparent outline hover:outline-none outline-1  py-2 px-4 mt-5 rounded-md hover:font-semibold hover:bg-red-600 hover:text-white hover:shadow hover:shadow-red-800 transition ease-linear duration-200",children:"Contacts"}),(0,r.jsx)(l.Link,{to:"/admin/users",className:"w-fit block mx-auto bg-transparent outline hover:outline-none outline-1 py-2 px-4 mt-5 rounded-md hover:font-semibold hover:bg-red-600  hover:text-white hover:shadow hover:shadow-red-800 transition ease-linear duration-200",children:"Users"})]}),(0,r.jsx)("h1",{className:"text-3xl font-semibold text-center text-red-700",children:"Pending Orders To Process"}),(0,r.jsx)("ul",{className:"divide-y divide-red-600",children:e.map(e=>(0,r.jsxs)("li",{className:"p-4 bg-white shadow-md",children:[(0,r.jsx)("div",{className:"text-lg font-bold mb-2",children:e.name}),(0,r.jsx)("div",{className:"mb-3",children:e.address}),(0,r.jsx)("ul",{children:e.cartItems.map(e=>(0,r.jsx)("li",{className:"flex flex-col py-4 sm:py-6 sm:flex-row sm:justify-between border-b border-gray-300",children:(0,r.jsxs)("div",{className:"flex w-full space-x-2 sm:space-x-4",children:[(0,r.jsx)("img",{className:"flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500",src:n.MENU_IMG_URL+e?.menuItem?.card?.info?.imageId,alt:e?.menuItem?.card?.info?.name}),(0,r.jsxs)("div",{className:"flex flex-col justify-between w-full pb-4",children:[(0,r.jsx)("p",{className:"text-gray-600",children:e?.name}),(0,r.jsx)("h3",{className:"text-lg font-semibold",children:e?.menuItem?.card?.info?.name}),(0,r.jsx)("p",{className:"text-gray-600",children:e?.menuItem?.card?.info?.description}),(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsx)("div",{className:"text-sm line-through text-gray-400",children:"₹75.50"}),(0,r.jsx)("div",{className:"text-lg font-semibold",children:e?.menuItem?.card?.info?.price?(0,r.jsxs)("p",{children:["₹",e?.menuItem?.card?.info?.price/100]}):(0,r.jsxs)("p",{children:["₹",e?.menuItem?.card?.info?.defaultPrice/100]})})]})]})]})},e?.menuItem?.card?.info?.id))}),(0,r.jsxs)("div",{className:"flex justify-between items-center mt-5",children:[(0,r.jsx)("button",{type:"button",className:"bg-green-600 text-white py-2 px-4 rounded-md hover:bg-red-600 hover:shadow hover:shadow-red-800 transition ease-linear duration-200",onClick:()=>d(e._id),children:"Done"}),(0,r.jsxs)("div",{className:"text-lg font-semibold",children:["Total Price: ₹",e.totalPrice]})]})]},e._id))})]}):(0,r.jsx)("p",{className:"text-2xl text-center font-black px-4 sm:px-6 lg:px-8 py-10 bg-gray-50 text-gray-800",children:"No orders to display!"})]})}});
//# sourceMappingURL=Admin.434799d9.js.map