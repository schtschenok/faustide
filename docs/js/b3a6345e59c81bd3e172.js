"use strict";
(self["webpackChunkfausteditorweb"] = self["webpackChunkfausteditorweb"] || []).push([["node_modules_monaco-editor_esm_vs_basic-languages_mips_mips_js"],{

/***/ "./node_modules/monaco-editor/esm/vs/basic-languages/mips/mips.js":
/*!************************************************************************!*\
  !*** ./node_modules/monaco-editor/esm/vs/basic-languages/mips/mips.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conf: () => (/* binding */ conf),
/* harmony export */   language: () => (/* binding */ language)
/* harmony export */ });
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.1(547870b6881302c5b4ff32173c16d06009e3588f)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/mips/mips.ts
var conf = {
  wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#%\^\&\*\(\)\=\$\-\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
  comments: {
    blockComment: ["###", "###"],
    lineComment: "#"
  },
  folding: {
    markers: {
      start: new RegExp("^\\s*#region\\b"),
      end: new RegExp("^\\s*#endregion\\b")
    }
  }
};
var language = {
  defaultToken: "",
  ignoreCase: false,
  tokenPostfix: ".mips",
  regEx: /\/(?!\/\/)(?:[^\/\\]|\\.)*\/[igm]*/,
  keywords: [
    ".data",
    ".text",
    "syscall",
    "trap",
    "add",
    "addu",
    "addi",
    "addiu",
    "and",
    "andi",
    "div",
    "divu",
    "mult",
    "multu",
    "nor",
    "or",
    "ori",
    "sll",
    "slv",
    "sra",
    "srav",
    "srl",
    "srlv",
    "sub",
    "subu",
    "xor",
    "xori",
    "lhi",
    "lho",
    "lhi",
    "llo",
    "slt",
    "slti",
    "sltu",
    "sltiu",
    "beq",
    "bgtz",
    "blez",
    "bne",
    "j",
    "jal",
    "jalr",
    "jr",
    "lb",
    "lbu",
    "lh",
    "lhu",
    "lw",
    "li",
    "la",
    "sb",
    "sh",
    "sw",
    "mfhi",
    "mflo",
    "mthi",
    "mtlo",
    "move"
  ],
  symbols: /[\.,\:]+/,
  escapes: /\\(?:[abfnrtv\\"'$]|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
  tokenizer: {
    root: [
      [/\$[a-zA-Z_]\w*/, "variable.predefined"],
      [
        /[.a-zA-Z_]\w*/,
        {
          cases: {
            this: "variable.predefined",
            "@keywords": { token: "keyword.$0" },
            "@default": ""
          }
        }
      ],
      [/[ \t\r\n]+/, ""],
      [/#.*$/, "comment"],
      ["///", { token: "regexp", next: "@hereregexp" }],
      [/^(\s*)(@regEx)/, ["", "regexp"]],
      [/(\,)(\s*)(@regEx)/, ["delimiter", "", "regexp"]],
      [/(\:)(\s*)(@regEx)/, ["delimiter", "", "regexp"]],
      [/@symbols/, "delimiter"],
      [/\d+[eE]([\-+]?\d+)?/, "number.float"],
      [/\d+\.\d+([eE][\-+]?\d+)?/, "number.float"],
      [/0[xX][0-9a-fA-F]+/, "number.hex"],
      [/0[0-7]+(?!\d)/, "number.octal"],
      [/\d+/, "number"],
      [/[,.]/, "delimiter"],
      [/"""/, "string", '@herestring."""'],
      [/'''/, "string", "@herestring.'''"],
      [
        /"/,
        {
          cases: {
            "@eos": "string",
            "@default": { token: "string", next: '@string."' }
          }
        }
      ],
      [
        /'/,
        {
          cases: {
            "@eos": "string",
            "@default": { token: "string", next: "@string.'" }
          }
        }
      ]
    ],
    string: [
      [/[^"'\#\\]+/, "string"],
      [/@escapes/, "string.escape"],
      [/\./, "string.escape.invalid"],
      [/\./, "string.escape.invalid"],
      [
        /#{/,
        {
          cases: {
            '$S2=="': {
              token: "string",
              next: "root.interpolatedstring"
            },
            "@default": "string"
          }
        }
      ],
      [
        /["']/,
        {
          cases: {
            "$#==$S2": { token: "string", next: "@pop" },
            "@default": "string"
          }
        }
      ],
      [/#/, "string"]
    ],
    herestring: [
      [
        /("""|''')/,
        {
          cases: {
            "$1==$S2": { token: "string", next: "@pop" },
            "@default": "string"
          }
        }
      ],
      [/[^#\\'"]+/, "string"],
      [/['"]+/, "string"],
      [/@escapes/, "string.escape"],
      [/\./, "string.escape.invalid"],
      [/#{/, { token: "string.quote", next: "root.interpolatedstring" }],
      [/#/, "string"]
    ],
    comment: [
      [/[^#]+/, "comment"],
      [/#/, "comment"]
    ],
    hereregexp: [
      [/[^\\\/#]+/, "regexp"],
      [/\\./, "regexp"],
      [/#.*$/, "comment"],
      ["///[igm]*", { token: "regexp", next: "@pop" }],
      [/\//, "regexp"]
    ]
  }
};



/***/ })

}]);
//# sourceMappingURL=b3a6345e59c81bd3e172.js.map