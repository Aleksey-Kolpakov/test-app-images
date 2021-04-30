(this["webpackJsonptest-app-images-react"]=this["webpackJsonptest-app-images-react"]||[]).push([[0],{20:function(e,t,c){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__ZmyKB","ImageGalleryItem-image":"ImageGalleryItem_ImageGalleryItem-image__2m23F"}},30:function(e,t,c){e.exports={ImageGallery:"ImageGallery_ImageGallery__3cALR"}},32:function(e,t,c){e.exports={App:"App_App__3moKm",title:"App_title__1p_y9"}},6:function(e,t,c){e.exports={Overlay:"Modal_Overlay__2f7__",Modal:"Modal_Modal__34NAP",imageFormDesk:"Modal_imageFormDesk__205Wt",commentsDesctop:"Modal_commentsDesctop__3iUDF",commentsBlock:"Modal_commentsBlock__cOoE2",commentsMobile:"Modal_commentsMobile__1k5Ld",authorText:"Modal_authorText__1jMnb",commentText:"Modal_commentText__150Wq",listItem:"Modal_listItem__3r505"}},79:function(e,t,c){},80:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),r=c(10),o=c.n(r),s=c(3),i=c(30),l=c.n(i),m=c(2),u={getImagesSucces:Object(m.b)("images/getImagesSucces"),getCommentsSucces:Object(m.b)("images/getCommentsSucces"),addCommentSucces:Object(m.b)("images/addCommentSucces"),getBigImageSucces:Object(m.b)("images/getBigImageSucces"),setError:Object(m.b)("setError"),resetError:Object(m.b)("resetError"),loaderOn:Object(m.b)("images/loaderOn"),loaderOff:Object(m.b)("images/loaderOff"),closeModal:Object(m.b)("images/closeModal"),openModal:Object(m.b)("images/openModal")},j=c(20),b=c.n(j),d=c(1),O=function(e){var t=e.src,c=e.id,a=Object(s.b)();return Object(d.jsx)("li",{onClick:function(){return a(u.openModal(c))},className:b.a.ImageGalleryItm,children:Object(d.jsx)("img",{src:t,alt:"",className:b.a["ImageGalleryItem-image"]})})},f=c(21),g=c.n(f),p=c(13),h=c(31),x=c(11),_=c.n(x),v=u.getImagesSucces,y=u.getCommentsSucces,I=u.addCommentSucces,M=u.getBigImageSucces,N=u.resetError,S=u.setError,k=u.loaderOn,F=u.loaderOff;_.a.defaults.baseURL="https://tzfrontend.herokuapp.com";var E,w,T,C,G,B=function(){return function(e){e(k()),e(N()),_.a.get("/images/").then((function(t){var c=t.data;e(v(c))})).catch((function(t){return e(S(t.message))})).finally((function(){return e(F())}))}},D=function(e){return function(){var t=Object(h.a)(g.a.mark((function t(c){var a,n,r,o,s,i;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(k()),c(N()),t.prev=2,a=_.a.get("/comments/".concat(e)),n=_.a.get("/images/".concat(e)),t.next=7,Promise.all([a,n]);case 7:r=t.sent,o=Object(p.a)(r,2),s=o[0],i=o[1],Array.isArray(s.data)&&c(y(s.data)),c(M(i.data.src)),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(2),c(S(t.t0.message));case 18:return t.prev=18,c(F()),t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[2,15,18,21]])})));return function(e){return t.apply(this,arguments)}}()},A=function(e){return function(t){t(k()),t(N()),_.a.post("/comments/add/",e).then((function(e){var c=e.data;return t(I(c))})).catch((function(e){return console.log(e)})).finally((function(){return t(F())}))}},L=c(15),K=c.n(L),P=function(e){return e.images},q=function(e){return e.comments},J=function(e){return e.bigImage},R=function(e){return e.isLoading},U=function(e){return e.error},W=function(e){return e.modalId},z=function(){var e=Object(s.c)(P),t=Object(s.c)(U),c=Object(s.c)(R),n=Object(s.b)();Object(a.useEffect)((function(){n(B())}),[]);var r=function(){console.log("working")};return Object(d.jsxs)(d.Fragment,{children:[t&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Error"}),Object(d.jsx)("p",{children:t})]}),c&&Object(d.jsx)(K.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80}),Object(d.jsx)("ul",{className:l.a.ImageGallery,children:e.map((function(e){return Object(d.jsx)(O,{id:e.image_id,src:e.src,openImage:r},e.image_id)}))})]})},Q=c(6),V=c.n(Q),X=c(9),Z=c.n(X),H=function(e){var t=e.id,c=Object(a.useState)(""),n=Object(p.a)(c,2),r=n[0],o=n[1],i=Object(a.useState)(""),l=Object(p.a)(i,2),m=l[0],u=l[1],j=Object(s.c)(U),b=Object(s.c)(R),O=Object(s.b)();return Object(d.jsxs)(d.Fragment,{children:[j&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"Error"}),Object(d.jsx)("p",{children:j})]}),b&&Object(d.jsx)(K.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80}),Object(d.jsxs)("form",{className:Z.a.form,onSubmit:function(e){e.preventDefault(),function(e){O(A(e))}({name:r,description:m,image_id:t}),o(""),u("")},children:[Object(d.jsx)("label",{className:Z.a.formLabel,children:Object(d.jsx)("input",{className:Z.a.input,type:"text",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",name:"authorName",value:r,onChange:function(e){var t=e.target.value;o(t)}})}),Object(d.jsx)("label",{className:Z.a.formLabel,children:Object(d.jsx)("input",{className:Z.a.input,type:"text",placeholder:"\u0412\u0430\u0448 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",name:"comment",value:m,onChange:function(e){var t=e.target.value;u(t)}})}),Object(d.jsx)("button",{className:Z.a.button,type:"submit",children:"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"})]})]})},Y=function(){var e=document.querySelector("#modal-root"),t=Object(s.c)(J),c=Object(s.c)(W),n=Object(s.c)(q),o=Object(s.b)(),i=function(){return o(u.closeModal())};Object(a.useEffect)((function(){o(D(c))}),[]);var l=function(e){"Escape"===e.code&&i()};return Object(a.useEffect)((function(){return window.addEventListener("keydown",l),function(){window.removeEventListener("keydown",l)}}),[]),Object(r.createPortal)(Object(d.jsx)("div",{onClick:function(e){e.target===e.currentTarget&&i()},className:V.a.Overlay,children:Object(d.jsxs)("div",{className:V.a.Modal,children:[Object(d.jsxs)("div",{className:V.a.imageFormDesk,children:[Object(d.jsx)("img",{src:t,alt:"image"}),Object(d.jsxs)("div",{className:V.a.commentsBlock,children:[Object(d.jsx)("ul",{className:V.a.commentsMobile,children:n.map((function(e){return Object(d.jsxs)("li",{className:V.a.listItem,children:[Object(d.jsx)("p",{className:V.a.authorText,children:e.name}),Object(d.jsx)("p",{className:V.a.commentText,children:e.description})]},e.id)}))}),Object(d.jsx)(H,{id:c})]})]}),Object(d.jsx)("ul",{className:V.a.commentsDesctop,children:n.map((function(e){return Object(d.jsxs)("li",{className:V.a.listItem,children:[Object(d.jsx)("p",{className:V.a.authorText,children:e.name}),Object(d.jsx)("p",{className:V.a.commentText,children:e.description})]},e.id)}))})]})}),e)},$=c(32),ee=c.n($),te=function(){var e=Object(s.c)(W);return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:ee.a.title,children:"Test App Aleksey Kolpakov"}),Object(d.jsx)(z,{}),e&&Object(d.jsx)(Y,{})]})},ce=c(8),ae=c(7),ne=c(16),re=u.getImagesSucces,oe=u.getCommentsSucces,se=u.addCommentSucces,ie=u.getBigImageSucces,le=u.resetError,me=u.setError,ue=u.loaderOn,je=u.loaderOff,be=u.closeModal,de=u.openModal,Oe=Object(m.c)([],Object(ae.a)({},re,(function(e,t){var c=t.payload;return Object(ne.a)(c)}))),fe=Object(m.c)([],(E={},Object(ae.a)(E,oe,(function(e,t){var c=t.payload;return Object(ne.a)(c)})),Object(ae.a)(E,se,(function(e,t){var c=t.payload;return[].concat(Object(ne.a)(e),[c])})),Object(ae.a)(E,be,(function(){return[]})),E)),ge=Object(m.c)("",(w={},Object(ae.a)(w,ie,(function(e,t){return t.payload})),Object(ae.a)(w,be,(function(){return[]})),w)),pe=Object(m.c)(!1,(T={},Object(ae.a)(T,le,(function(){return!1})),Object(ae.a)(T,me,(function(e,t){return t.payload})),T)),he=Object(m.c)(!1,(C={},Object(ae.a)(C,ue,(function(){return!0})),Object(ae.a)(C,je,(function(){return!1})),C)),xe=Object(m.c)("",(G={},Object(ae.a)(G,de,(function(e,t){return t.payload})),Object(ae.a)(G,be,(function(){return""})),G)),_e=Object(m.d)(),ve=Object(ce.b)({images:Oe,comments:fe,bigImage:ge,isLoading:he,error:pe,modalId:xe}),ye=Object(m.a)({reducer:ve,devTools:!1,middleware:_e});c(78),c(79);o.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(s.a,{store:ye,children:Object(d.jsx)(te,{})})}),document.getElementById("root"))},9:function(e,t,c){e.exports={form:"Form_form__1xb3b","modal-form":"Form_modal-form__3Qt2D",input:"Form_input__1xlM2",button:"Form_button__2XlvV"}}},[[80,1,2]]]);
//# sourceMappingURL=main.52b45293.chunk.js.map