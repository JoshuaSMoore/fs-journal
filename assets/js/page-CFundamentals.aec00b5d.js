(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{492:function(e,s,a){"use strict";a.r(s);var t=a(1),n=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"c-fundamentals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-fundamentals"}},[e._v("#")]),e._v(" C# Fundamentals")]),e._v(" "),a("p",[a("strong",[e._v("1.")]),e._v(" What is the purpose of a "),a("code",[e._v("namespace")]),e._v("?\n")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("The name of the appliction, and allows for a much easier way to basically import methods/data from other areas of the app. Instead of needing to look for a specific controller or service you are able to do Namespace.Controllers or Namespace.Services to be able to reference multiple services or controllers. \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("strong",[e._v("2.")]),e._v(" What is the difference between a "),a("code",[e._v("class")]),e._v(" and a "),a("code",[e._v("struct")]),e._v("?\n")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Structs are value type where Classes are reference type. Structs are stored on the stack where Classes are stored on the heap as well.\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("strong",[e._v("3.")]),e._v(" What is the method that returns an instance of a class, yet it has no return type?\n")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("void\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"example-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-1"}},[e._v("#")]),e._v(" Example 1")]),e._v(" "),a("div",{staticClass:"language-c# line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('abstract class Car\n{\n  ...\n  public virtual string Start()\n  {\n    return "Vroooom";\n  }\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("p",[a("strong",[e._v("5.")]),e._v(" In the example what is the access modifier of the "),a("code",[e._v("Start()")]),e._v(" method?\n")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("public\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("strong",[e._v("6.")]),e._v(" In the example what is "),a("code",[e._v("string")]),e._v(" an indication of?\n")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("the result of the method. \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("strong",[e._v("7.")]),e._v(" In the example what is "),a("code",[e._v("abstract")]),e._v(" preventing?\n")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("it is preventing Car from being modified in this instance.\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("strong",[e._v("8.")]),e._v(" In the example what is the purpose of "),a("code",[e._v("virtual")]),e._v("?\n")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("it is used to modify the method, so you could change the return string potentially.\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("strong",[e._v("9.")]),e._v(" Name four access modifiers:\n")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("public, private, internal, protected.\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("strong",[e._v("10.")]),e._v(" If you set a class or method to private, what can access it?\n")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("It can only be accessed within the same class or struct. \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);