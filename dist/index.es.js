import e,{useState as _,useEffect as t}from"react";var a={datepicker:"App-module_datepicker__P4Iex",datepicker__modal:"App-module_datepicker__modal__V1O9c",datepicker__modal__header:"App-module_datepicker__modal__header__ZSmQT",datepicker__modal__header__previous:"App-module_datepicker__modal__header__previous__gZlDv",datepicker__modal__header__p:"App-module_datepicker__modal__header__p__R5Q6j",datepicker__modal__header__home:"App-module_datepicker__modal__header__home__t0Bwb",datepicker__modal__header__next:"App-module_datepicker__modal__header__next__lc1Y8",datepicker__modal__table:"App-module_datepicker__modal__table__BQnHP",datepicker__modal__table__head__tr__th:"App-module_datepicker__modal__table__head__tr__th__RiNgw",datepicker__modal__table__body__tr__td:"App-module_datepicker__modal__table__body__tr__td__Jn1kN",datepicker__modal__table__body__tr__td__current:"App-module_datepicker__modal__table__body__tr__td__current__cSSUp",datepicker__modal__table__body__tr__td__current__back:"App-module_datepicker__modal__table__body__tr__td__current__back__CubAJ",datepicker__modal__table__body__tr__td__other:"App-module_datepicker__modal__table__body__tr__td__other__wwpSV"};function d({element:_,inputClick:t,setInputClick:a,inputValue:d,setInputValue:l,cssClass:o}){return e.createElement(r,{element:_,inputClick:t,setInputClick:a,inputValue:d,setInputValue:l,cssClass:o})}function r({element:d,inputClick:r,setInputClick:l,inputValue:o,setInputValue:c,cssClass:p}){const[i,n]=_(""),[m,s]=_(""),[u,h]=_(null);t((()=>{if(n(new Date),o.length>0){let e=o.split("/"),_=new Date(Number(e[0]).toString()+"/"+e[1]+"/"+e[2]);s(_)}else s(new Date)}),[o]),document.addEventListener("click",(e=>{e.target.classList.contains(p)||!0===r&&l(!1)}));function b(e,_){for(var t=new Date(Date.UTC(_,e,1)),a=[];t.getUTCMonth()===e;)a.push(new Date(t)),t.setUTCDate(t.getUTCDate()+1);return a}t((()=>{if(""!==i){let e=[],_=b(m.getMonth(),m.getFullYear()),t=b(m.getMonth(),m.getFullYear());console.log(_[0].getDay());for(let e=0;e<_[0].getDay();e++){let a=new Date(_[0]);a.setDate(a.getDate()-(e+1)),t.unshift(a)}for(let e=0;e<6-_[_.length-1].getDay();e++){let a=new Date(_[0]);a.setUTCDate(a.getUTCDate()+e),a.setUTCMonth(a.getUTCMonth()+1),t.push(a)}let a=[];for(let _=0;_<t.length;_++)a.push([t[_].getDate(),t[_].getMonth()]),(_+1)%7==0&&0!==_&&(e.push(a),a=[]);h(e)}}),[i,m]);const k=(e,_)=>{c(_+1+"/"+e+"/"+m.getFullYear()),l(!1)};return e.createElement(e.Fragment,null,m&&e.createElement("div",{className:a.datepicker},e.createElement("div",{className:`${p} ${a.datepicker__modal}`},e.createElement("div",{className:`${p} ${a.datepicker__modal__header}`},e.createElement("div",{onClick:()=>{(()=>{if(m.getMonth()!==i.getMonth()){let e=new Date(m);e.setMonth(e.getMonth()-1),s(e)}else if(i.getFullYear()!==m.getFullYear()){let e=new Date(m);e.setMonth(e.getMonth()-1),s(e)}})()},className:`${p} ${a.datepicker__modal__header__previous}`}),e.createElement("img",{onClick:()=>{s(i)},className:`${p} ${a.datepicker__modal__header__home}`,src:"../img/home.png",alt:""}),e.createElement("p",{className:`${p} ${a.datepicker__modal__header__p}`},{0:"Janvier",1:"Février",2:"Mars",3:"Avril",4:"Mai",5:"Juin",6:"Juillet",7:"Aout",8:"Septembre",9:"Octobre",10:"Novembre",11:"Décembre"}[m.getMonth()]),e.createElement("p",{className:`${p} ${a.datepicker__modal__header__p}`},m.getFullYear()),e.createElement("div",{onClick:()=>{(()=>{let e=new Date(m);e.setMonth(e.getMonth()+1),s(e)})()},className:`${p} ${a.datepicker__modal__header__next}`})),e.createElement("table",{className:`${p} ${a.datepicker__modal__table}`},e.createElement("thead",{className:`${p} `},e.createElement("tr",{className:`${p} `},e.createElement("th",{className:`${p} ${a.datepicker__modal__table__head__tr__th}`},"Dim"),e.createElement("th",{className:`${p} ${a.datepicker__modal__table__head__tr__th}`},"Lun"),e.createElement("th",{className:`${p} ${a.datepicker__modal__table__head__tr__th}`},"Mar"),e.createElement("th",{className:`${p} ${a.datepicker__modal__table__head__tr__th}`},"Mer"),e.createElement("th",{className:`${p} ${a.datepicker__modal__table__head__tr__th}`},"Jeu"),e.createElement("th",{className:`${p} ${a.datepicker__modal__table__head__tr__th}`},"Ven"),e.createElement("th",{className:`${p} ${a.datepicker__modal__table__head__tr__th}`}," ","Sam"))),e.createElement("tbody",{className:`${p}`},u?.map(((_,t)=>e.createElement("tr",{className:`${p}`,key:t},u[t].map(((_,t)=>{if(o.length>0){let d=o.split("/");if((d[0]-1).toString()===_[1].toString()&&d[1].toString()===_[0].toString())return e.createElement("td",{className:`${p} ${a.datepicker__modal__table__body__tr__td__current}`,key:t,onClick:()=>{k(_[0],_[1])}},_[0])}if(m.getMonth()===i.getMonth()&&i.getDate()===_[0]){if(o.length>0){if(o.split("/")[1].toString()!==i.getDate().toString())return e.createElement("td",{className:`${p} ${a.datepicker__modal__table__body__tr__td__current__back}`,key:t,onClick:()=>{k(_[0],_[1])}},_[0])}return e.createElement("td",{className:`${p} ${a.datepicker__modal__table__body__tr__td__current}`,key:t,onClick:()=>{k(_[0],_[1])}},_[0])}return _[1]!==m.getMonth()?e.createElement("td",{className:`${p} ${a.datepicker__modal__table__body__tr__td__other}`,key:t,onClick:()=>{k(_[0],_[1])}},_[0]):e.createElement("td",{className:`${p} ${a.datepicker__modal__table__body__tr__td}`,key:t,onClick:()=>{k(_[0],_[1])}},_[0])}))))))))))}!function(e,_){void 0===_&&(_={});var t=_.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],d=document.createElement("style");d.type="text/css","top"===t&&a.firstChild?a.insertBefore(d,a.firstChild):a.appendChild(d),d.styleSheet?d.styleSheet.cssText=e:d.appendChild(document.createTextNode(e))}}(".App-module_datepicker__P4Iex{margin-top:10px}.App-module_datepicker__modal__V1O9c{border:1px solid #000;border-radius:5px;width:224px}.App-module_datepicker__modal__header__ZSmQT{display:flex;justify-content:space-around}.App-module_datepicker__modal__header__previous__gZlDv{border-bottom:7px solid #0000;border-right:10px solid gray;border-top:7px solid #0000;height:0;width:0}.App-module_datepicker__modal__header__p__R5Q6j{margin:0}.App-module_datepicker__modal__header__home__t0Bwb{width:15px}.App-module_datepicker__modal__header__next__lc1Y8{border-bottom:7px solid #0000;border-left:10px solid gray;border-top:7px solid #0000;height:0;width:0}.App-module_datepicker__modal__table__BQnHP{border-collapse:collapse;box-sizing:border-box;margin:0;padding:0}.App-module_datepicker__modal__table__head__tr__th__RiNgw{background:#f1f1f1;border:1px solid #ddd;border-collapse:collapse;color:#999;cursor:default;font-weight:700;text-align:center;vertical-align:middle}.App-module_datepicker__modal__table__body__tr__td__Jn1kN{background:#f5f5f5;border:1px solid #ddd;border-collapse:collapse;color:#666;cursor:pointer;font-size:12px;height:25px;padding:0;text-align:center;width:14.2857142%}.App-module_datepicker__modal__table__body__tr__td__Jn1kN:hover{background-color:orange;color:#fff}.App-module_datepicker__modal__table__body__tr__td__current__cSSUp{background:blue;border:1px solid #ddd;border-collapse:collapse;color:#fff;cursor:pointer;font-size:12px;height:25px;padding:0;text-align:center;width:14.2857142%}.App-module_datepicker__modal__table__body__tr__td__current__cSSUp:hover{background-color:orange;color:#fff}.App-module_datepicker__modal__table__body__tr__td__current__back__CubAJ{background:#f5f5f5;border:1px solid #ddd;border-collapse:collapse;color:blue;cursor:pointer;font-size:12px;height:25px;padding:0;text-align:center;width:14.2857142%}.App-module_datepicker__modal__table__body__tr__td__current__back__CubAJ:hover{background-color:orange;color:#fff}.App-module_datepicker__modal__table__body__tr__td__other__wwpSV{background:#f5f5f5;border:1px solid #ddd;border-collapse:collapse;color:#666;cursor:pointer;font-size:12px;height:25px;opacity:.4;padding:0;text-align:center;width:14.2857142%}.App-module_datepicker__modal__table__body__tr__td__other__wwpSV:hover{background-color:orange;color:#fff}");export{d as default};
