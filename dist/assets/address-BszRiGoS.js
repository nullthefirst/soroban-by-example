import{u as l,j as s}from"./index-DXWx0YtR.js";import{P as n}from"./Playground-K3rNpSNo.js";const c={title:"Address",description:"Soroban Address"};function i(e){const r={a:"a",code:"code",div:"div",h1:"h1",h2:"h2",header:"header",pre:"pre",span:"span",...l(),...e.components};return s.jsxs(s.Fragment,{children:[s.jsxs(r.header,{children:[s.jsxs(r.h1,{id:"address",children:["Address",s.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#address",children:s.jsx(r.div,{"data-autolink-icon":!0})})]}),s.jsx(r.div,{role:"doc-subtitle",children:"Soroban Address"})]}),`
`,s.jsx(r.pre,{className:"shiki shiki-themes github-light github-dark-dimmed",style:{backgroundColor:"#fff","--shiki-dark-bg":"#22272e",color:"#24292e","--shiki-dark":"#adbac7"},tabIndex:"0",children:s.jsxs(r.code,{children:[s.jsx(r.span,{className:"line",children:s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"#![no_std]"})}),`
`,s.jsxs(r.span,{className:"line",children:[s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"use"}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" soroban_sdk"}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"{contract, contractimpl, "}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Env"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"Address"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", "}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:"String"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", log};"})]}),`
`,s.jsx(r.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(r.span,{className:"line",children:s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"#[contract]"})}),`
`,s.jsxs(r.span,{className:"line",children:[s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"pub"}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" struct"}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" DataTypes"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:";"})]}),`
`,s.jsx(r.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(r.span,{className:"line",children:s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"#[contractimpl]"})}),`
`,s.jsxs(r.span,{className:"line",children:[s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"impl"}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" DataTypes"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" {"})]}),`
`,s.jsxs(r.span,{className:"line",children:[s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"    pub"}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:" fn"}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:" address_type"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"(env"}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Env"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", strkey"}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:":"}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" String"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:") {"})]}),`
`,s.jsx(r.span,{className:"line",children:s.jsx(r.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        // Create an Address from a strkey"})}),`
`,s.jsxs(r.span,{className:"line",children:[s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        let"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" address "}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#F69D50"},children:" Address"}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"::"}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"from_string"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"strkey);"})]}),`
`,s.jsx(r.span,{className:"line",children:s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        "})}),`
`,s.jsx(r.span,{className:"line",children:s.jsx(r.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        // Log the Address as a string"})}),`
`,s.jsxs(r.span,{className:"line",children:[s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"        let"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" addr_str "}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"="}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:" address"}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"to_string"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,s.jsxs(r.span,{className:"line",children:[s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"        log!"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"("}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"&"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"env, "}),s.jsx(r.span,{style:{color:"#032F62","--shiki-dark":"#96D0FF"},children:'"Address: {}"'}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:", addr_str);"})]}),`
`,s.jsx(r.span,{className:"line","data-empty-line":!0,children:" "}),`
`,s.jsx(r.span,{className:"line",children:s.jsx(r.span,{style:{color:"#6A737D","--shiki-dark":"#768390"},children:"        // Ensure the address has authorized the current contract invocation"})}),`
`,s.jsxs(r.span,{className:"line",children:[s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"        address"}),s.jsx(r.span,{style:{color:"#D73A49","--shiki-dark":"#F47067"},children:"."}),s.jsx(r.span,{style:{color:"#6F42C1","--shiki-dark":"#DCBDFB"},children:"require_auth"}),s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"();"})]}),`
`,s.jsx(r.span,{className:"line",children:s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"    }"})}),`
`,s.jsx(r.span,{className:"line",children:s.jsx(r.span,{style:{color:"#24292E","--shiki-dark":"#ADBAC7"},children:"}"})})]})}),`
`,s.jsxs(r.h2,{id:"live-example",children:["Live Example",s.jsx(r.a,{"aria-hidden":"true",tabIndex:"-1",href:"#live-example",children:s.jsx(r.div,{"data-autolink-icon":!0})})]}),`
`,s.jsx(n,{okashiID:"bxpjqoylnzlqjwcdlngqglxsmukw"})]})}function o(e={}){const{wrapper:r}={...l(),...e.components};return r?s.jsx(r,{...e,children:s.jsx(i,{...e})}):i(e)}export{o as default,c as frontmatter};
