import{_ as a,o,c as p,t as D,n as h,r as F,b as s,d as t,e as l,a as y}from"./app.28b85194.js";const _={name:"Badge",props:{text:"",type:""}};function C(c,d,e,r,i,u){return o(),p("span",{class:h(["badge",e.type])},D(e.text),3)}const g=a(_,[["render",C],["__scopeId","data-v-5c8b1cba"]]),A={components:{Badge:g}},ss=JSON.parse('{"title":"Configs","description":"","frontmatter":{},"headers":[{"level":2,"title":"Available Props","slug":"available-props","link":"#available-props","children":[]},{"level":2,"title":"Slots","slug":"slots","link":"#slots","children":[{"level":3,"title":"Slides/Default","slug":"slides-default","link":"#slides-default","children":[]},{"level":3,"title":"Addons","slug":"addons","link":"#addons","children":[]},{"level":3,"title":"Slots Attributes","slug":"slots-attributes","link":"#slots-attributes","children":[]}]}],"relativePath":"configs.md"}'),b=s("h1",{id:"configs",tabindex:"-1"},[l("Configs "),s("a",{class:"header-anchor",href:"#configs","aria-hidden":"true"},"#")],-1),f=s("h2",{id:"available-props",tabindex:"-1"},[l("Available Props "),s("a",{class:"header-anchor",href:"#available-props","aria-hidden":"true"},"#")],-1),m=s("thead",null,[s("tr",null,[s("th",null,"Prop"),s("th",null,"Default"),s("th",null,"Description")])],-1),v=s("tr",null,[s("td",null,[s("code",null,"itemsToShow")]),s("td",null,"1"),s("td",null,"count of items to showed per view (can be a fraction).")],-1),x=s("tr",null,[s("td",null,[s("code",null,"itemsToScroll")]),s("td",null,"1"),s("td",null,"number of slides to be scrolled")],-1),B=s("td",null,[s("s",null,[s("code",null,"currentSlide")])],-1),S=s("td",null,[s("s",null,"0")],-1),k=s("s",null,"index number of the initial slide.",-1),q=l(),E=s("tr",null,[s("td",null,[s("code",null,"wrapAround")]),s("td",null,"false"),s("td",null,"enable infinite scrolling mode.")],-1),T=s("tr",null,[s("td",null,[s("code",null,"snapAlign")]),s("td",null,"'center'"),s("td",null,"controls the carousel position alignment, can be 'start', 'end', 'center[-odd|-even]'")],-1),N=s("tr",null,[s("td",null,[s("code",null,"transition")]),s("td",null,"300"),s("td",null,"sliding transition time in ms.")],-1),P=s("tr",null,[s("td",null,[s("code",null,"autoplay")]),s("td",null,"0"),s("td",null,"Auto play time in ms.")],-1),$=s("tr",null,[s("td",null,[s("code",null,"settings")]),s("td"),s("td",null,"an object to pass all settings.")],-1),V=s("tr",null,[s("td",null,[s("code",null,"breakpoints")]),s("td",null,"null"),s("td",null,"an object to pass all the breakpoints settings.")],-1),w=s("td",null,[s("code",null,"modelValue")],-1),I=s("td",null,"0",-1),j=l("index number of the initial slide. "),O=s("td",null,[s("code",null,"mouseDrag")],-1),U=s("td",null,"true",-1),z=l("toggle mouse dragging "),H=s("td",null,[s("code",null,"touchDrag")],-1),J=s("td",null,"true",-1),R=l("toggle pointer touch dragging "),W=s("td",null,[s("code",null,"pauseAutoplayOnHover")],-1),Y=s("td",null,"false",-1),G=l("toggle if auto play should pause on mouse hover "),K=s("td",null,[s("code",null,"dir")],-1),L=s("td",null,"ltr",-1),M=l("controls the carousel direction. Available values 'ltr', 'rtl' "),Q=y(`<h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h2><h3 id="slides-default" tabindex="-1">Slides/Default <a class="header-anchor" href="#slides-default" aria-hidden="true">#</a></h3><p>Used to render the carousel items. You can use either the default slot or wrap element in <code>slides</code> slot.</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&lt;Carousel&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#A6ACCD;"> #</span><span style="color:#C792EA;">slides</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Slide</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">slide</span><span style="color:#89DDFF;"> in </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> :</span><span style="color:#C792EA;">key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">slide</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Slide</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Carousel</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="addons" tabindex="-1">Addons <a class="header-anchor" href="#addons" aria-hidden="true">#</a></h3><p>Used to add display carousel addons components.</p><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">&lt;Carousel&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#A6ACCD;"> #</span><span style="color:#C792EA;">addons</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Navigation</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Pagination</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Carousel</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="slots-attributes" tabindex="-1">Slots Attributes <a class="header-anchor" href="#slots-attributes" aria-hidden="true">#</a></h3><table><thead><tr><th>Prop</th><th>Description</th></tr></thead><tbody><tr><td><code>slideWidth</code></td><td>the width of a single slide element.</td></tr><tr><td><code>currentSlide</code></td><td>index number of the current slide.</td></tr><tr><td><code>slidesCount</code></td><td>the count of all slides</td></tr></tbody></table><h4 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-hidden="true">#</a></h4><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki has-highlighted-lines"><code><span class="line"><span style="color:#A6ACCD;">&lt;Carousel&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;Slide v-for=&quot;slide in slides&quot; :key=&quot;slide&quot;&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;div class=&quot;carousel__item&quot;&gt;{{ slide }}&lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/Slide&gt;</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#C792EA;">addons</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> slidesCount </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Navigation</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-if</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">slidesCount</span><span style="color:#89DDFF;"> &gt; </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Carousel</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,11);function X(c,d,e,r,i,u){const n=F("Badge");return o(),p("div",null,[b,f,s("table",null,[m,s("tbody",null,[v,x,s("tr",null,[B,S,s("td",null,[k,q,t(n,{text:"Deprecated 0.1.20",type:"danger"})])]),E,T,N,P,$,V,s("tr",null,[w,I,s("td",null,[j,t(n,{text:"0.1.20"})])]),s("tr",null,[O,U,s("td",null,[z,t(n,{text:"0.1.23"})])]),s("tr",null,[H,J,s("td",null,[R,t(n,{text:"0.1.23"})])]),s("tr",null,[W,Y,s("td",null,[G,t(n,{text:"0.1.25"})])]),s("tr",null,[K,L,s("td",null,[M,t(n,{text:"0.1.38"})])])])]),Q])}const ls=a(A,[["render",X]]);export{ss as __pageData,ls as default};
