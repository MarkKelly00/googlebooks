(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(57)},50:function(e,t,a){},51:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(24),o=a.n(r),c=a(25),i=a(1),s=a(10);var u=function(e){var t=e.children;return l.a.createElement("div",{style:{height:120,clear:"both",paddingTop:20,textAlign:"center"},className:"jumbotron"},t)},m={backgroundColor:"#F8F8F8",borderTop:"1px solid #E7E7E7",textAlign:"center",padding:"20px",position:"fixed",left:"0",bottom:"0",height:"60px",width:"100%"},d={display:"block",padding:"20px",height:"60px",width:"100%"};var f=function(){return l.a.createElement("div",null,l.a.createElement("div",{style:d}),l.a.createElement("div",{style:m},l.a.createElement("a",{href:"https://markkelly.dev",target:"_blank"},"\xa9 2020 Mark Kelly")))},E=a(8),b=a.n(E),v={searchBooks:function(e){return b.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},createBook:function(e){return b.a.post("/api/books",e)},getBooks:function(){return b.a.get("/api/books")},getBook:function(e){return b.a.get("/api/books/"+e)},deleteBook:function(e){return b.a.delete("/api/books/"+e)},saveBook:function(e){return b.a.post("/api/books",e)}};function p(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function h(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}a(50);function g(e){var t=e.children;return l.a.createElement("div",{className:"col-lg-12"},l.a.createElement("div",{className:"col-md-12 list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t)))}function k(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}function N(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}function x(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var y=function(e){return l.a.createElement("span",Object.assign({className:"save-btn btn btn-primary float-right"},e,{role:"button",tabIndex:"0"}),"Save")};var B=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1];return l.a.createElement(p,{lg:!0},l.a.createElement(u,null,l.a.createElement("h1",{className:"display-5 text-info text-wrap"},"Google Book Search")),l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=e.target.search.value;v.searchBooks(t).then(function(e){console.log(e.data),r(e.data.items)}).catch(function(e){return console.log(e)})}},l.a.createElement(N,{onChange:function(){},name:"search",placeholder:"Search"}),l.a.createElement(x,{onClick:function(){},type:"submit"},"Search")),l.a.createElement(h,null,a.length?l.a.createElement(g,null,a.map(function(e){return l.a.createElement(k,{key:e.id},l.a.createElement("a",{href:"/books/"+e._id},l.a.createElement("img",{className:"mx-auto d-block",src:e.volumeInfo.imageLinks.thumbnail}),l.a.createElement("br",null),l.a.createElement("strong",null,l.a.createElement("div",{className:"text-center"},e.volumeInfo.title," by ",e.volumeInfo.authors))),l.a.createElement("p",null,e.volumeInfo.description),l.a.createElement(y,{onClick:function(){v.saveBook({title:e.volumeInfo.title,author:e.volumeInfo.authors,description:e.volumeInfo.description,image:e.volumeInfo.imageLinks.thumbnail,link:e.selfLink})}},"Save"))})):l.a.createElement("h3",null,"No Results to Display")),l.a.createElement(f,null))},w=a(27);a(51);var j=function(e){return l.a.createElement("span",Object.assign({className:"delete-btn btn btn-outline-primary"},e,{role:"button",tabIndex:"0"}),"\u2717")};var I=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)(function(){o()},[]);var o=function(){v.getBooks().then(function(e){return r(Object(w.a)(e.data))})};return console.log(a),l.a.createElement(p,{size:"md-6 sm-12"},a.length?l.a.createElement(g,null,a.map(function(e){return l.a.createElement(k,{key:e._id},l.a.createElement("a",{href:"/books/"+e._id},l.a.createElement("img",{className:"mx-auto d-block",src:e.image}),l.a.createElement("br",null),l.a.createElement("strong",null,l.a.createElement("div",{className:"text-center"},e.title," by ",e.author))),l.a.createElement("p",null,e.description),l.a.createElement(j,{onClick:function(){return t=e._id,void v.deleteBook(t).then(function(){return o()});var t}}))})):l.a.createElement("h3",null,"No Results to Display"),l.a.createElement(f,null))};var O=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-info"},l.a.createElement("a",{className:"navbar-brand",href:"/"},l.a.createElement("h3",null,l.a.createElement("i",{class:"fas fa-book"})," React Reading List")),l.a.createElement("div",{class:"col"},l.a.createElement("a",{className:"badge badge-primary text-wrap float-right",href:"/savedBooks"},l.a.createElement("h3",null,"My Books"))))};var S=function(){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(O,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:["/","/books"]},l.a.createElement(B,null)),l.a.createElement(i.a,{path:["/savedBooks"]},l.a.createElement(I,null)))))};o.a.render(l.a.createElement(S,null),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.caaaae85.chunk.js.map