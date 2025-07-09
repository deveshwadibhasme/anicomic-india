import{r as n,j as e}from"./index-Uz2kpvPp.js";const i="/assets/name-logo-pLdGtYYE.png",o="/assets/image-ewU1qfNg.png",c=()=>(n.useEffect(()=>{const t=document.getElementById("verificationDate"),r=new Date,s={year:"numeric",month:"long",day:"numeric"};setTimeout(()=>{t&&(t.textContent=r.toLocaleDateString("en-US",s))},1e3),document.querySelectorAll(".bg-white").forEach(a=>{a.addEventListener("mouseenter",()=>{a.style.transform="translateY(-2px)",a.style.boxShadow="0 10px 25px rgba(0,0,0,0.1)"}),a.addEventListener("mouseleave",()=>{a.style.transform="translateY(0)",a.style.boxShadow="0 1px 3px rgba(0,0,0,0.1)"})})},[]),e.jsxs("div",{className:"relative  min-h-screen flex items-center justify-center px-5 py-10 overflow-x-hidden",children:[e.jsx("style",{children:`
          body {
            font-family: 'Inter', sans-serif;
          }
          .brand-font {
            font-family: 'Poppins', sans-serif;
          }
           @keyframes fadeInDown {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
        }.animate-fade-in-down {
            animation: fadeInDown 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
            animation-delay: 0.2s;
            opacity: 0;
        }
        .animate-fade-in-left {
            animation: fadeInLeft 0.8s ease-out forwards;
            animation-delay: 0.4s;
            opacity: 0;
        } 
        .glass-effect {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .gradient-text {
            background: linear-gradient(45deg, #f97316, #ea580c);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .design-pattern {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image: 
                radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%);
            pointer-events: none;
        }
        `}),e.jsxs("div",{className:"relative z-10 w-full max-w-4xl glass-effect p-8 md:p-12 rounded-2xl shadow-2xl border-t-8 border-orange-400 hover:scale-[1.02] transform transition-all duration-500 animate-pulse-subtle text-center",children:[e.jsx("div",{className:"design-pattern"}),e.jsx("div",{className:"mb-8 flex items-center justify-center animate-fade-in-down",children:[i,o].map((t,r)=>e.jsxs("div",{className:"relative h-30 w-30 md:h-40 md:w-40 rounded-full flex-shrink-0 mx-2",children:[e.jsx("img",{src:t,alt:"Creative Design",className:"mx-auto rounded-full shadow-2xl border-4 border-white h-full w-full object-cover animate-float"}),e.jsx("div",{className:"absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-2 shadow-lg",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})})]},r))}),e.jsxs("div",{className:"mb-10",children:[e.jsx("h1",{className:"text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-4 animate-fade-in-down brand-font w-full",children:"Certificate Verified!"}),e.jsx("div",{className:"w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-6 rounded-full"}),e.jsxs("p",{className:"text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed animate-fade-in-up",children:["This digital certificate has been successfully authenticated by",e.jsx("span",{className:"font-bold gradient-text text-3xl md:text-4xl brand-font",children:" Kraftor"})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-8 mb-8 text-left shadow-lg animate-fade-in-left relative overflow-hidden",children:[e.jsx("div",{className:"shimmer absolute inset-0"}),e.jsxs("div",{className:"relative z-10",children:[e.jsxs("div",{className:"flex items-center mb-6",children:[e.jsx("div",{className:"bg-green-100 p-3 rounded-full mr-4",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-8 w-8 text-green-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})}),e.jsx("h2",{className:"text-2xl font-bold text-gray-800 brand-font",children:"Verification Details"})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsx("div",{className:"bg-white p-4 rounded-lg shadow-sm",children:e.jsxs("p",{className:"text-gray-800 text-lg mb-2",children:[e.jsx("span",{className:"font-semibold text-orange-600",children:"Status:"})," ",e.jsx("span",{className:"font-bold text-green-700 text-xl",children:"✓ Authenticated"})]})}),e.jsx("div",{className:"bg-white p-4 rounded-lg shadow-sm",children:e.jsxs("p",{className:"text-gray-800 text-lg",children:[e.jsx("span",{className:"font-semibold text-orange-600",children:"Verified:"})," ",e.jsx("span",{id:"verificationDate",className:"font-bold text-orange-700",children:"Loading..."})]})})]}),e.jsx("div",{className:"mt-6 p-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg",children:e.jsxs("p",{className:"text-gray-700 text-base leading-relaxed",children:[e.jsx("span",{className:"font-semibold text-orange-700",children:"About Kraftor:"})," ","We are a premium graphic design studio dedicated to transforming your creative vision into stunning visual experiences. Our certified designs meet the highest industry standards."]})})]})]}),e.jsxs("div",{className:"bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 rounded-xl shadow-lg animate-fade-in-up",children:[e.jsx("h3",{className:"text-xl font-bold mb-4 brand-font",children:"Need More Information?"}),e.jsx("p",{className:"mb-4",children:"For inquiries about our graphic design services or certificate authenticity:"}),e.jsxs("a",{href:"mailto:info@kraftor.com",className:"inline-flex items-center bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5 mr-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"})}),"info@anicomic.com"]})]}),e.jsxs("div",{className:"mt-8 pt-6 border-t border-orange-200",children:[e.jsx("div",{className:"flex justify-center items-center space-x-6 mb-4",children:["M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z","M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z","M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"].map((t,r)=>e.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center",children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:t})})},r))}),e.jsx("p",{className:"text-lg text-gray-600 brand-font font-medium",children:"Crafting Visual Excellence Since Day One"})]})]})]}));export{c as default};
