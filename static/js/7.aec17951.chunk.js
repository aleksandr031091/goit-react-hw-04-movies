(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[7],{84:function(t,e,c){"use strict";c.r(e),c.d(e,"default",(function(){return u}));var r=c(16),n=c(17),a=c(19),i=c(18),s=c(0),o=c(37),h=c(1),u=function(t){Object(a.a)(c,t);var e=Object(i.a)(c);function c(){var t;Object(r.a)(this,c);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={credits:[]},t}return Object(n.a)(c,[{key:"componentDidMount",value:function(){var t=this;Object(o.d)(this.props.match.params.movieId).then((function(e){t.setState({credits:e})})).catch((function(t){return console.log(t)}))}},{key:"render",value:function(){var t=this.state.credits;return Object(h.jsx)("div",{children:Object(h.jsx)("ul",{children:t&&t.cast&&t.cast.map((function(t){return Object(h.jsxs)("li",{children:[t.profile_path&&Object(h.jsx)("img",{src:o.b+t.profile_path,alt:t.name}),Object(h.jsx)("p",{children:t.name}),Object(h.jsxs)("p",{children:["Character: ",t.character]})]},t.credit_id)}))})})}}]),c}(s.Component)}}]);
//# sourceMappingURL=7.aec17951.chunk.js.map