import{_ as s,c as n,o as a,a as l}from"./app.414cfcf5.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4E00\uFF0C\u4EC0\u4E48\u662Freact\u7684\u751F\u547D\u5468\u671F\uFF1F","slug":"\u4E00\uFF0C\u4EC0\u4E48\u662Freact\u7684\u751F\u547D\u5468\u671F\uFF1F","link":"#\u4E00\uFF0C\u4EC0\u4E48\u662Freact\u7684\u751F\u547D\u5468\u671F\uFF1F","children":[]},{"level":3,"title":"\u4E8C\uFF0C\u6302\u8F7D\u9636\u6BB5","slug":"\u4E8C\uFF0C\u6302\u8F7D\u9636\u6BB5","link":"#\u4E8C\uFF0C\u6302\u8F7D\u9636\u6BB5","children":[]},{"level":3,"title":"\u4E09\uFF0C\u66F4\u65B0\u9636\u6BB5","slug":"\u4E09\uFF0C\u66F4\u65B0\u9636\u6BB5","link":"#\u4E09\uFF0C\u66F4\u65B0\u9636\u6BB5","children":[]},{"level":3,"title":"\u56DB\uFF0C\u5378\u8F7D\u9636\u6BB5componentWillUnmount ()","slug":"\u56DB\uFF0C\u5378\u8F7D\u9636\u6BB5componentwillunmount","link":"#\u56DB\uFF0C\u5378\u8F7D\u9636\u6BB5componentwillunmount","children":[]}],"relativePath":"articles/react/\u57FA\u7840/React\u7684\u751F\u547D\u5468\u671F.md"}'),p={name:"articles/react/\u57FA\u7840/React\u7684\u751F\u547D\u5468\u671F.md"},o=l(`<h3 id="\u4E00\uFF0C\u4EC0\u4E48\u662Freact\u7684\u751F\u547D\u5468\u671F\uFF1F" tabindex="-1">\u4E00\uFF0C\u4EC0\u4E48\u662Freact\u7684\u751F\u547D\u5468\u671F\uFF1F <a class="header-anchor" href="#\u4E00\uFF0C\u4EC0\u4E48\u662Freact\u7684\u751F\u547D\u5468\u671F\uFF1F" aria-hidden="true">#</a></h3><p>\u751F\u547D\u5468\u671F\u51FD\u6570\u6307\u5728\u67D0\u4E00\u4E2A\u65F6\u523B\u7EC4\u4EF6\u4F1A\u81EA\u52A8\u8C03\u7528\u6267\u884C\u7684\u51FD\u6570\uFF0C\u7C7B\u4F3C\u4E0E\u4E00\u4E2A\u7269\u54C1\u7684\u751F\u4EA7\u8FC7\u7A0B\uFF0C\u6709\u5404\u4E2A\u9636\u6BB5\u3002 \u5BF9\u6BD4\u5176\u4ED6\u6846\u67B6\u5982vue\uFF0Cvue\u81EA\u8EAB\u4E5F\u6709\u751F\u547D\u5468\u671F\uFF0C\u53EA\u4E0D\u8FC7vue\u7684\u751F\u547D\u5468\u671F\u6BD4\u8F83\u7B80\u5355\u3002 <strong>react\u7684\u751F\u547D\u5468\u671F</strong> React\u7684\u751F\u547D\u5468\u671F\u4ECE\u5E7F\u4E49\u4E0A\u5206\u4E3A\u4E09\u4E2A\u9636\u6BB5\uFF1A\u6302\u8F7D\u3001\u66F4\u65B0\u3001\u5378\u8F7D</p><h3 id="\u4E8C\uFF0C\u6302\u8F7D\u9636\u6BB5" tabindex="-1">\u4E8C\uFF0C\u6302\u8F7D<a href="https://jspang.com/detailed?id=46#toc371" target="_blank" rel="noreferrer">\u9636\u6BB5</a> <a class="header-anchor" href="#\u4E8C\uFF0C\u6302\u8F7D\u9636\u6BB5" aria-hidden="true">#</a></h3><p>Mounting\u9636\u6BB5\u53EB\u6302\u8F7D\u9636\u6BB5\uFF0C\u4F34\u968F\u7740\u6574\u4E2A\u865A\u62DFDOM\u7684\u751F\u6210\uFF0C\u5B83\u91CC\u8FB9\u6709\u4E09\u4E2A\u5C0F\u7684\u751F\u547D\u5468\u671F\u51FD\u6570\uFF0C\u5206\u522B\u662F\uFF1A</p><ol><li>componentWillMount : \u5728\u7EC4\u4EF6\u5373\u5C06\u88AB\u6302\u8F7D\u5230\u9875\u9762\u7684\u65F6\u523B\u6267\u884C\u3002</li><li>render : \u9875\u9762state\u6216props\u53D1\u751F\u53D8\u5316\u65F6\u6267\u884C\u3002</li><li>componentDidMount : \u7EC4\u4EF6\u6302\u8F7D\u5B8C\u6210\u65F6\u88AB\u6267\u884C\u3002</li></ol><p>\u6CE8\u610F\u7684\u662F\uFF1AcomponentWillMount\u548CcomponentDidMount\u8FD9\u4E24\u4E2A\u751F\u547D\u5468\u671F\u51FD\u6570\uFF0C\u53EA\u5728\u9875\u9762\u5237\u65B0\u8BD5\u6267\u884C\u4E00\u6B21\uFF0C\u800Crander\u51FD\u6570\u53EA\u8981props\u548Cstate\u53D8\u5316\uFF0C\u5C31\u4F1A\u6267\u884C</p><h3 id="\u4E09\uFF0C\u66F4\u65B0\u9636\u6BB5" tabindex="-1">\u4E09\uFF0C\u66F4\u65B0\u9636\u6BB5 <a class="header-anchor" href="#\u4E09\uFF0C\u66F4\u65B0\u9636\u6BB5" aria-hidden="true">#</a></h3><p>Updation\u9636\u6BB5,\u4E5F\u5C31\u662F\u7EC4\u4EF6\u53D1\u751F\u6539\u53D8\u7684\u66F4\u65B0\u9636\u6BB5\uFF0C\u8FD9\u662FReact\u751F\u547D\u5468\u671F\u4E2D\u6BD4\u8F83\u590D\u6742\u7684\u4E00\u90E8\u5206\uFF0C\u5B83\u6709\u4E24\u4E2A\u57FA\u672C\u90E8\u5206\u7EC4\u6210\uFF0C\u4E00\u4E2A\u662Fprops\u5C5E\u6027\u6539\u53D8\uFF0C\u4E00\u4E2A\u662Fstate\u72B6\u6001\u6539</p><ol><li>omponentWillReceiveProps (nextProps)</li></ol><ul><li>\u5B50\u7EC4\u4EF6\u5728\u63A5\u53D7\u7236\u7EC4\u4EF6\u6539\u53D8\u540E\u7684props\u9700\u8981\u91CD\u65B0\u6E32\u67D3\u7EC4\u4EF6\u65F6\u7528\u5230\u7684\u6BD4\u8F83\u591A</li><li>\u63A5\u53D7\u4E00\u4E2A\u53C2\u6570nextProps</li><li>\u901A\u8FC7\u5BF9\u6BD4nextProps\u548Cthis.props\uFF0C\u5C06nextProps\u7684state\u4E3A\u5F53\u524D\u7EC4\u4EF6\u7684state\uFF0C\u4ECE\u800C\u91CD\u65B0\u6E32\u67D3\u7EC4\u4EF6</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">componentWillReceiveProps</span><span style="color:#A6ACCD;"> (nextProps) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">nextProps</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">openNotice</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">openNotice</span><span style="color:#89DDFF;">&amp;&amp;this.</span><span style="color:#82AAFF;">setState</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        openNotice</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">nextProps</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">openNotice</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">\uFF0C</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">openNotice</span><span style="color:#F07178;">:</span><span style="color:#A6ACCD;">nextProps</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;">//\u5C06state\u66F4\u65B0\u4E3AnextProps,\u5728setState\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF08\u56DE\u8C03\uFF09\u53EF\u4EE5\u6253\u5370\u51FA\u65B0\u7684state</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>shouldComponentUpdate(nextProps,nextState)</li></ol><ul><li>\u4E3B\u8981\u7528\u4E8E\u6027\u80FD\u4F18\u5316(\u90E8\u5206\u66F4\u65B0)</li><li>\u552F\u4E00\u7528\u4E8E\u63A7\u5236\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\u7684\u751F\u547D\u5468\u671F\uFF0C\u7531\u4E8E\u5728react\u4E2D\uFF0CsetState\u4EE5\u540E\uFF0Cstate\u53D1\u751F\u53D8\u5316\uFF0C\u7EC4\u4EF6\u4F1A\u8FDB\u5165\u91CD\u65B0\u6E32\u67D3\u7684\u6D41\u7A0B\uFF0C\u5728\u8FD9\u91CCreturn false\u53EF\u4EE5\u963B\u6B62\u7EC4\u4EF6\u7684\u66F4\u65B0</li><li>\u56E0\u4E3Areact\u7236\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3\u4F1A\u5BFC\u81F4\u5176\u6240\u6709\u5B50\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5176\u5B9E\u6211\u4EEC\u662F\u4E0D\u9700\u8981\u6240\u6709\u5B50\u7EC4\u4EF6\u90FD\u8DDF\u7740\u91CD\u65B0\u6E32\u67D3\u7684\uFF0C\u56E0\u6B64\u9700\u8981\u5728\u5B50\u7EC4\u4EF6\u7684\u8BE5\u751F\u547D\u5468\u671F\u4E2D\u505A\u5224\u65AD</li><li>\u7B80\u5355\u70B9\u8BF4\uFF0C\u5C31\u662F\u8FD4\u56DEtrue\uFF0C\u5C31\u540C\u610F\u7EC4\u4EF6\u66F4\u65B0;\u8FD4\u56DEfalse,\u5C31\u53CD\u5BF9\u7EC4\u4EF6\u66F4\u65B0\u3002</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">//\u5B50\u7EC4\u4EF6\u4EE3\u7801 rander \u67E5\u770B</span></span>
<span class="line"><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">child-render</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> ( </span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={this.</span><span style="color:#A6ACCD;">handleClick</span><span style="color:#89DDFF;">}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">{this.</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">avname</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">\u4E3A\u4F60\u505A- </span><span style="color:#89DDFF;">{this.</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">content</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;">//\u6BCF\u6B21\u5F53\u7236\u7EC4\u4EF6\u4F20\u9012\u7684\u503C\u66F4\u65B0\u65F6\uFF0C\u4F1A\u5BFC\u81F4\u5B50\u7EC4\u4EF6\u5168\u90E8\u91CD\u65B0\u6E32\u67D3I\uFF08\u6027\u80FD\u95EE\u9898\uFF09</span></span>
<span class="line"><span style="color:#676E95;">//\u5C31\u53EF\u4EE5\u4F7F\u7528shouldComponentUpdate \u53BB\u63A7\u5236\u662F\u5426\u66F4\u65B0\u8BE5\u5B50\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#676E95;">// shouldComponentUpdate\u6709\u4E24\u4E2A\u53C2\u6570\uFF1A</span></span>
<span class="line"><span style="color:#676E95;">// nextProps:\u53D8\u5316\u540E\u7684\u5C5E\u6027;</span></span>
<span class="line"><span style="color:#676E95;">// nextState:\u53D8\u5316\u540E\u7684\u72B6\u6001;</span></span>
<span class="line"><span style="color:#82AAFF;">shouldComponentUpdate</span><span style="color:#A6ACCD;">(nextProps</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">nextState)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">nextProps</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">content</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">content</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;">else</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><ol start="3"><li>componentWillUpdate (nextProps,nextState)</li></ol><p>\u5728 shouldComponentUpdate \u4E4B\u540E\u88AB\u6267\u884C shouldComponentUpdate\u8FD4\u56DEtrue\u4EE5\u540E\uFF0C\u7EC4\u4EF6\u8FDB\u5165\u91CD\u65B0\u6E32\u67D3\u7684\u6D41\u7A0B\uFF0C\u8FDB\u5165componentWillUpdate,\u8FD9\u91CC\u540C\u6837\u53EF\u4EE5\u62FF\u5230nextProps\u548CnextState\u3002 shouldComponentUpdate\u8FD4\u56DEfalse\uFF0C\u8FD9\u4E2A\u51FD\u6570\u5C31\u4E0D\u4F1A\u88AB\u6267\u884C\u4E86\u3002</p><ol start="4"><li>componentDidUpdate(prevProps,prevState)</li></ol><p>componentDidUpdate\u5728\u7EC4\u4EF6\u66F4\u65B0\u4E4B\u540E\u6267\u884C\uFF0C\u5B83\u662F\u7EC4\u4EF6\u66F4\u65B0\u7684\u6700\u540E\u4E00\u4E2A\u73AF\u8282\u3002 \u7EC4\u4EF6\u66F4\u65B0\u5B8C\u6BD5\u540E\uFF0Creact\u53EA\u4F1A\u5728\u7B2C\u4E00\u6B21\u521D\u59CB\u5316\u6210\u529F\u4F1A\u8FDB\u5165componentDidmount,\u4E4B\u540E\u6BCF\u6B21\u91CD\u65B0\u6E32\u67D3\u540E\u90FD\u4F1A\u8FDB\u5165\u8FD9\u4E2A\u751F\u547D\u5468\u671F\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u62FF\u5230prevProps\u548CprevState\uFF0C\u5373\u66F4\u65B0\u524D\u7684props\u548Cstate\u3002</p><h3 id="\u56DB\uFF0C\u5378\u8F7D\u9636\u6BB5componentwillunmount" tabindex="-1">\u56DB\uFF0C\u5378\u8F7D\u9636\u6BB5componentWillUnmount () <a class="header-anchor" href="#\u56DB\uFF0C\u5378\u8F7D\u9636\u6BB5componentwillunmount" aria-hidden="true">#</a></h3><p>componentWillUnmount ()\u5728\u6B64\u5904\u5B8C\u6210\u7EC4\u4EF6\u7684\u5378\u8F7D\u548C\u6570\u636E\u7684\u9500\u6BC1\u3002</p><ol><li>clear\u4F60\u5728\u7EC4\u5EFA\u4E2D\u6240\u6709\u7684setTimeout,setInterval</li><li>\u79FB\u9664\u6240\u6709\u7EC4\u5EFA\u4E2D\u7684\u76D1\u542C removeEventListener</li><li>\u6709\u65F6\u5019\u6211\u4EEC\u4F1A\u78B0\u5230\u8FD9\u4E2Awarning:</li></ol><p>\u539F\u56E0\uFF1A\u56E0\u4E3A\u4F60\u5728\u7EC4\u4EF6\u4E2D\u7684ajax\u8BF7\u6C42\u8FD4\u56DEsetState,\u800C\u4F60\u7EC4\u4EF6\u9500\u6BC1\u7684\u65F6\u5019\uFF0C\u8BF7\u6C42\u8FD8\u672A\u5B8C\u6210\uFF0C\u56E0\u6B64\u4F1A\u62A5warning</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">componentDidMount</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">isMount</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">post</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">then</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">res</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">isMount</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">setState</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;">   </span><span style="color:#676E95;">// \u589E\u52A0\u6761\u4EF6ismount\u4E3Atrue\u65F6</span></span>
<span class="line"><span style="color:#F07178;">    aaa</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">res</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#82AAFF;">componentWillUnmount</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">isMount</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,23),e=[o];function t(c,r,F,i,y,D){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{C as __pageData,d as default};
