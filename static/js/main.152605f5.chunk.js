(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,function(t){t.exports=JSON.parse('[{"id":0,"alt":"Ranitomeya Ventrimaculata","src":"https://smhttp-ssl-52271.nexcesscdn.net/media/catalog/product/r/a/ranitomeya_ventrimaculata_dendrobates_ventrimaculatus_blackwater_amazonian_poison_dart_frog_for_sale_joshs_frogs_side_1_1.jpg"},{"id":1,"alt":"Ranitomeya Lamasi Panguana","src":"https://smhttp-ssl-52271.nexcesscdn.net/media/catalog/product/r/a/ranitomeya_lamasi_panguana_poison_dart_thumbnail_for_sale_joshs_frogs_side.jpg"},{"id":2,"alt":"Ranitomeya Vanzolinii","src":"https://smhttp-ssl-52271.nexcesscdn.net/media/catalog/product/r/a/ranitomeya_vanzolinii_brazilian_poison_frog_josh_s_frogs_5.jpg"},{"id":3,"alt":"Ranitomeya Benedicta","src":"https://smhttp-ssl-52271.nexcesscdn.net/media/catalog/product/b/l/blessed_dart_frog_ranitomeya_benedicta_for_sale_poison_dart_frog_joshs_frogs_top_white.jpg"},{"id":4,"alt":"Phyllobates Terribilis","src":"https://smhttp-ssl-52271.nexcesscdn.net/media/catalog/product/m/i/mint_terribilis_front_1.jpg"},{"id":5,"alt":"Ranitomeya Imitator Chazuta","src":"https://smhttp-ssl-52271.nexcesscdn.net/media/catalog/product/i/m/imitator_dart_frog_ranitomeya_imitator_chazuta_thumbnail_dart_frog_for_sale_joshs_frogs_top_1.jpg"},{"id":6,"alt":"Ranitomeya Variabilis Highland","src":"https://smhttp-ssl-52271.nexcesscdn.net/media/catalog/product/r/a/ranitomeya_variabilis_highland_thumbnail_poison_dart_frog_for_sale_joshs_frogs_side_full_1_1.jpg"},{"id":7,"alt":"Dendrobates Leucomelas","src":"https://smhttp-ssl-52271.nexcesscdn.net/media/catalog/product/1/9/1996_leuc_top_1.jpg"},{"id":8,"alt":"Dendrobates Auratus Costa Rican","src":"https://smhttp-ssl-52271.nexcesscdn.net/media/catalog/product/c/o/costa_rican_auratus_side_2.jpg"},{"id":9,"alt":"Epipedobates Anthonyi Santa Isabel","src":"https://smhttp-ssl-52271.nexcesscdn.net/media/catalog/product/e/p/epipedobates_anthonyi_santa_isabel_-_phantasmal_poison_dart_frog_4_.jpg"},{"id":10,"alt":"Dendrobates Bakuis","src":"https://smhttp-ssl-52271.nexcesscdn.net/media/catalog/product/b/a/bakhuis_side2.jpg"},{"id":11,"alt":"Dendrobates Azueres","src":"https://smhttp-ssl-52271.nexcesscdn.net/media/catalog/product/p/e/petfrogsdartfrogsjoshsfrogs.jpg"}]')},,,function(t,e,a){t.exports=a(16)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var s=a(0),n=a.n(s),c=a(2),o=a.n(c);a(14);var r=function(t){var e=t.children;return n.a.createElement("div",{style:{height:300,clear:"both",textAlign:"center"},className:"jumbotron"},e)},i=a(3),l=a(4),d=a(7),m=a(5),_=a(8);var p=function(t){var e=t.children;return n.a.createElement("div",{style:{height:100,clear:"both",textAlign:"center"},className:"row"},e)},h={width:"150px",height:"auto"};var u=function(t){return n.a.createElement("div",{className:"card"},n.a.createElement("img",{className:"card-img",style:h,id:t.id,alt:t.alt,src:t.src,onClick:t.click}))},g=a(6),f=function(t){function e(){var t,a;Object(i.a)(this,e);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(a=Object(d.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(n)))).state={score:0,topScore:0,images:g,clicked:[]},a.clickedImage=function(t){var e=t.target.id;if(console.log(e),a.state.clicked.includes(e))console.log("Duplicate clicked!"),console.log(a.state.clicked),a.setState({score:0,clicked:[]});else{console.log("Unique clicked");var s=a.state.clicked;s.push(e),a.setState({score:a.state.score+1,topScore:Math.max(a.state.topScore,a.state.score+1),clicked:s}),console.log(a.state.clicked)}a.randomizeArray(a.state.images)},a.randomizeArray=function(t){for(var e=t.length-1;e>0;e--){var a=Math.floor(Math.random()*(e+1)),s=[t[a],t[e]];t[e]=s[0],t[a]=s[1]}},a}return Object(_.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return n.a.createElement("div",null,n.a.createElement(p,null,n.a.createElement("div",{className:"col-md-6 col-xs-2"},n.a.createElement("h5",null,"Your Score: ",this.state.score)),n.a.createElement("div",{className:"col-md-6 col-xs-2"},n.a.createElement("h5",null,"Top Score: ",this.state.topScore))),n.a.createElement("div",{className:"card-columns"},this.state.images.map((function(e){return n.a.createElement(u,{id:e.id,src:e.src,click:t.clickedImage})}))))}}]),e}(s.Component);a(15);var b=function(){return n.a.createElement("div",null,n.a.createElement(r,null,n.a.createElement("h1",null,"Clicky Game!"),n.a.createElement("h3",null,"Don't click on the same image twice")),n.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.152605f5.chunk.js.map