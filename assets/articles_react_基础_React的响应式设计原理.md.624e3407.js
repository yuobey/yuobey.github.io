import{_ as s,c as a,o as n,a as p}from"./app.414cfcf5.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":3,"title":"\u4E00\uFF0C \u54CD\u5E94\u5F0F\u8BBE\u8BA1\u548C\u6570\u636E\u7ED1\u5B9A","slug":"\u4E00\uFF0C-\u54CD\u5E94\u5F0F\u8BBE\u8BA1\u548C\u6570\u636E\u7ED1\u5B9A","link":"#\u4E00\uFF0C-\u54CD\u5E94\u5F0F\u8BBE\u8BA1\u548C\u6570\u636E\u7ED1\u5B9A","children":[]},{"level":3,"title":"\u4E8C\uFF0C\u7ED1\u5B9A\u4E8B\u4EF6","slug":"\u4E8C\uFF0C\u7ED1\u5B9A\u4E8B\u4EF6","link":"#\u4E8C\uFF0C\u7ED1\u5B9A\u4E8B\u4EF6","children":[]}],"relativePath":"articles/react/\u57FA\u7840/React\u7684\u54CD\u5E94\u5F0F\u8BBE\u8BA1\u539F\u7406.md"}'),l={name:"articles/react/\u57FA\u7840/React\u7684\u54CD\u5E94\u5F0F\u8BBE\u8BA1\u539F\u7406.md"},o=p(`<h3 id="\u4E00\uFF0C-\u54CD\u5E94\u5F0F\u8BBE\u8BA1\u548C\u6570\u636E\u7ED1\u5B9A" tabindex="-1">\u4E00\uFF0C \u54CD\u5E94\u5F0F\u8BBE\u8BA1\u548C\u6570\u636E\u7ED1\u5B9A <a class="header-anchor" href="#\u4E00\uFF0C-\u54CD\u5E94\u5F0F\u8BBE\u8BA1\u548C\u6570\u636E\u7ED1\u5B9A" aria-hidden="true">#</a></h3><p>React\u4E0D\u5EFA\u8BAE\u4F60\u76F4\u63A5\u64CD\u4F5CDOM\u5143\u7D20,\u800C\u662F\u8981\u901A\u8FC7\u6570\u636E\u8FDB\u884C\u9A71\u52A8\uFF0C\u6539\u53D8\u754C\u9762\u4E2D\u7684\u6548\u679C\uFF08\u8FD9\u4E5F\u5C31\u662F\u6211\u4EEC\u7ECF\u5E38\u8BF4\u7684mvvm\u6846\u67B6\u6A21\u5F0F\uFF09\u3002 React\u4F1A\u6839\u636E\u6570\u636E\u7684\u53D8\u5316\uFF0C\u81EA\u52A8\u7684\u5E2E\u52A9\u4F60\u5B8C\u6210\u754C\u9762\u7684\u6539\u53D8\u3002\u6240\u4EE5\u5728\u5199React\u4EE3\u7801\u65F6\uFF0C\u4F60\u65E0\u9700\u5173\u6CE8DOM\u76F8\u5173\u7684\u64CD\u4F5C\uFF0C\u53EA\u9700\u8981\u5173\u6CE8\u6570\u636E\u7684\u64CD\u4F5C\u5C31\u53EF\u4EE5\u4E86 \u6211\u4EEC\u90FD\u77E5\u9053react\u662F\u90FD\u662F\u4F7F\u7528es6\u7684class \u7EE7\u627F\u5F0F\u5199\u6CD5\uFF0C\u5982\u5F15\u5165react\u7684Component\uFF0C\u7EC4\u4EF6\u90FD\u662F\u7EE7\u627F\u4E0EComponent class\u4E2D\u6709\u4E00\u4E2A\u6784\u9020\u51FD\u6570\uFF0Cconstructor react\u4E2D\u7684\u6570\u636E\u5B9A\u4E49\u90FD\u5728constructor \u4E2D\u8FDB\u884C \u4EE3\u7801\uFF1A</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> React</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Component</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TodoList</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Component</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">constructor</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">super</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">props</span><span style="color:#F07178;">) </span><span style="color:#676E95;">//\u8C03\u7528\u7236\u7C7B\u7684\u6784\u9020\u51FD\u6570\uFF0C\u56FA\u5B9A\u5199\u6CD5</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">={</span></span>
<span class="line"><span style="color:#F07178;">        inputValue</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u8BF7\u8F93\u5165</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#676E95;">// input\u4E2D\u7684\u503C</span></span>
<span class="line"><span style="color:#F07178;">        list</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u4ECA\u5929\u4E0D\u5403\u996D</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u8BB0\u5F97\u559D\u6C34</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]    </span><span style="color:#676E95;">//\u5217\u8868</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">render</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">     </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">={this.</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">inputValue</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">onChange</span><span style="color:#89DDFF;">={this.</span><span style="color:#A6ACCD;">inputChange</span><span style="color:#89DDFF;">} / &gt;</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \u6DFB\u52A0todo </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">       						</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    								 </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">map</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">)</span><span style="color:#C792EA;">=&gt;</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">                        </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;{</span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">}&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">                    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">) 							</span></span>
<span class="line"><span style="color:#A6ACCD;">		     					</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">             </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      )</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">export default TodoList;</span></span>
<span class="line"></span></code></pre></div><p>react\u548Cvue\u4E0A\u9762\u90FD\u8BF4\u5230\u662F\u6570\u636E\u9A71\u52A8\u6846\u67B6\uFF0C\u90FD\u6709\u6570\u636E\u7ED1\u5B9A\u7684\u6982\u5FF5\uFF0C\u540C\u6837\uFF0Creact\u4E5F\u662F\u91C7\u7528\u5B57\u9762\u91CF\u7684\u5F62\u5F0F\uFF0C\u7528{}\u6765\u663E\u793A\u5B57\u6BB5\uFF0C\u6BD4\u5982\u4E0A\u9762\u6211\u4EEC\u628AinputValue\u503C\u7ED1\u5B9A\u5230input\u6846\u4E2D\uFF0C\u53EA\u8981\u628A\u5B9A\u4E49\u7684\u5B57\u6BB5\uFF0C\u7528{}\u7684\u5F62\u5F0F\u8D4B\u503C\u5230input\u4E2D\u5C31\u53EF\u4EE5\u4E86\uFF0C\u5176\u5B9E\u8BF4\u767D\u4E86\u5C31\u662F\u5728JSX\u4E2D\u4F7F\u7528js\u4EE3\u7801</p><h3 id="\u4E8C\uFF0C\u7ED1\u5B9A\u4E8B\u4EF6" tabindex="-1">\u4E8C\uFF0C\u7ED1\u5B9A\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8C\uFF0C\u7ED1\u5B9A\u4E8B\u4EF6" aria-hidden="true">#</a></h3><p>\u6211\u4EEC\u9700\u8981\u4FEE\u6539input\u7684\u503C\uFF0C\u76F4\u63A5\u5728input\u53BB\u8F93\u5165\uFF0C\u4F1A\u53D1\u73B0\u662F\u65E0\u6548\u7684\uFF0C\u56E0\u4E3A\u8FD9\u65F6\u5019\u6211\u4EEC\u5DF2\u7ECF\u5F3A\u5236\u7ED1\u5B9A\u4E86\u5B9A\u4E49\u7684\u5B57\u6BB5\uFF0C\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u9700\u8981\u6539\u53D8input\u7684\u5185\u5BB9\uFF0C\u9700\u8981\u4F7F\u7528 **\u7ED1\u5B9A\u54CD\u5E94\u4E8B\u4EF6 **\u53BB\u5904\u7406\u3002 \u5982\u4E0A\u9762\u4E2Dinput\u8282\u70B9\u4E0A\u7684onChange\u7ED1\u5B9A\u7684\u4E8B\u4EF6inputChange \u8FD9\u65F6\uFF0C\u4EE3\u7801\u4E2D\u662F\u6CA1\u6709\u8BE5\u65B9\u6CD5\u7684\uFF0C\u6211\u4EEC\u5728rander\uFF08\uFF09\u540E\u6DFB\u52A0\u4EE3\u7801</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">inputChange</span><span style="color:#A6ACCD;">(e)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// console.log(e.target.value);</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// this.state.inputValue=e.target.value;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">setState</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        inputValue</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p>\u6709\u4E86\u8BE5\u4E8B\u4EF6\uFF0C\u6211\u4EEC\u4F1A\u4EE5\u4E3A\uFF0C\u5C31\u5B8C\u6210\u4E86\uFF0C\u6253\u5F00\u6D4F\u89C8\u5668\u63A7\u5236\u53F0\uFF0C\u4F1A\u53D1\u73B0\u62A5\u9519 \u539F\u56E0\u662F\uFF1Athis\u6307\u5411\u4E0D\u5BF9\uFF0C\u4F60\u9700\u8981\u91CD\u65B0\u7528bind\u8BBE\u7F6E\u4E00\u4E0B\u6307\u5411(ES6\u7684\u8BED\u6CD5)\u3002 \u8FD9\u65F6\u6211\u4EEC\u53EF\u4EE5\u5728 constructor \u4E2D\u6DFB\u52A0</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">inputChange </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">inputChange</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">bind</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">this</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>\u6216\u8005\u5728\u4E8B\u4EF6\u8C03\u7528\u65F6 \u6DFB\u52A0</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">input</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">value</span><span style="color:#89DDFF;">={this.</span><span style="color:#A6ACCD;">state</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">inputValue</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">onChange</span><span style="color:#89DDFF;">={this.</span><span style="color:#A6ACCD;">inputChange</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">bind</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">this</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">} /&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u8FDB\u884C\u7ED1\u5B9A\uFF0C\u8FD9\u6837\u5C31\u4E0D\u4F1A\u6709\u95EE\u9898\u4E86\u3002</p><p>\u6CE8\u610F\uFF1AinputChange \u4EE3\u7801\u4E2D \u6211\u4EEC\u901A\u8FC7this.state.inputValue=e.target.value; \u8FD9\u6837\u5C1D\u8BD5\u53BB\u8D4B\u503C\u6539\u53D8state\u4E2D\u7684value \u5176\u5B9E\u8FD9\u6837\u662F\u4E0D\u884C\u7684\uFF0C react\u4E2D\u89C4\u5B9A\u6211\u4EEC\u6539\u53D8state\u7684\u503C \u9700\u8981\u4F7F\u7528\u5176\u63D0\u4F9B\u7684this.setState \u65B9\u6CD5</p>`,13),t=[o];function e(c,r,D,F,y,C){return n(),a("div",null,t)}const u=s(l,[["render",e]]);export{A as __pageData,u as default};
