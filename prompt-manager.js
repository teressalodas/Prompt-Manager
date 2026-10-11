// ==UserScript==
// @name                Prompt Manager
// @namespace           https://github.com/teressalodas/Prompt-Manager
// @version             0.0.61
// @author              teressalodas
// @icon                data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCIgeTE9IjAiIHgyPSIuNCIgeTI9IjEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzJjNGM4MiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzBiMWEzZCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJiIiB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZGNkZGUyIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiByeD0iMTEiIGZpbGw9IiM5YWE1YzAiLz48cmVjdCB4PSIyLjYiIHk9IjIuNiIgd2lkdGg9IjU4LjgiIGhlaWdodD0iNTguOCIgcng9IjEwLjUiIGZpbGw9InVybCgjYSkiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC44KSIgZmlsbD0iIzdkODhhNSI+PHBhdGggZD0iTTE2IDE2LjRMMTguNyAxMFExOSA5LjUgMTkuNyA5LjVIMzlDNDkuNCA5LjUgNTQuOSAxNC44IDU0LjkgMjQuNFM0OS40IDM5LjYgMzkgMzkuNkgyNVEyMyAzOS42IDIzLjMgMzdMMjMuOCAzNS42UTI0LjQgMzIuMyAyOC4xIDMyLjNIMzlDNDMuMSAzMi4zIDQ1LjUgMjkgNDUuNSAyNC40UzQzLjEgMTYuNCAzOSAxNi40WiIvPjxwYXRoIGQ9Ik0xNi42IDI0LjRIMjNRMjMuNSAyNC40IDIzLjQgMjVMMTkgNTNRMTguOCA1NSAxNi45IDU1SDExLjNRMTAgNTUgMTAuMyA1My44WiIvPjwvZz48ZyBmaWxsPSJ1cmwoI2IpIj48cGF0aCBkPSJNMTYgMTYuNEwxOC43IDEwUTE5IDkuNSAxOS43IDkuNUgzOUM0OS40IDkuNSA1NC45IDE0LjggNTQuOSAyNC40UzQ5LjQgMzkuNiAzOSAzOS42SDI1UTIzIDM5LjYgMjMuMyAzN0wyMy44IDM1LjZRMjQuNCAzMi4zIDI4LjEgMzIuM0gzOUM0My4xIDMyLjMgNDUuNSAyOSA0NS41IDI0LjRTNDMuMSAxNi40IDM5IDE2LjRaIi8+PHBhdGggZD0iTTE2LjYgMjQuNEgyM1EyMy41IDI0LjQgMjMuNCAyNUwxOSA1M1ExOC44IDU1IDE2LjkgNTVIMTEuM1ExMCA1NSAxMC4zIDUzLjhaIi8+PC9nPjxjaXJjbGUgY3g9IjUzIiBjeT0iNTMuNCIgcj0iMi40IiBmaWxsPSIjZjVhNjIzIiBzdHJva2U9IiNlOWQ5YjgiIHN0cm9rZS13aWR0aD0iLjMiLz48L3N2Zz4=
// @description         通用提示词管理器：提示词增强、动态提示词、快速粘贴、自动附加文件、快捷键与多套自定义 AI 接口。
// @match               *://chat.deepseek.com/*
// @match               *://*.doubao.com/*
// @match               *://*.qianwen.com/*
// @match               *://yuanbao.tencent.com/*
// @match               *://*.kimi.com/*
// @match               *://chatgpt.com/*
// @match               *://claude.ai/*
// @match               *://gemini.google.com/*
// @match               *://grok.com/*
// @match               *://chat.qwen.ai/*
// @match               *://chat.z.ai/*
// @match               *://arena.ai/*
// @match               *://gist.github.com/*
// @connect             gist.githubusercontent.com
// @connect             raw.githubusercontent.com
// @connect             gist.github.com
// @connect             *
// @grant               GM_getValue
// @grant               GM_setValue
// @grant               GM_listValues
// @grant               GM_deleteValue
// @grant               GM_xmlhttpRequest
// @grant               GM_registerMenuCommand
// @run-at              document-end
// @noframes
// @compatible          chrome
// @compatible          edge
// @compatible          firefox
// ==/UserScript==

const MP_EMBEDDED_CSS = ":root{--mp-font-stack-i18n:\"Roboto Slab\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Microsoft YaHei\",\"PingFang SC\",\"Hiragino Sans GB\",\"Heiti SC\",\"Apple SD Gothic Neo\",\"Noto Sans CJK SC\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";--mp-font-family-base:var(--mp-font-stack-i18n);--mp-font-family-heading:var(--mp-font-stack-i18n);--mp-font-family-editor:\"JetBrains Mono\",var(--mp-font-stack-i18n);--mp-font-family-button:var(--mp-font-stack-i18n);--mp-bg-primary:#fff;--mp-bg-secondary:#f8f9fa;--mp-bg-tertiary:#e2e4e6;--mp-bg-overlay:rgba(10,10,10,0.5);--mp-text-primary:#212529;--mp-text-secondary:#495057;--mp-text-tertiary:#868e96;--mp-text-buttons:#fff;--mp-border-primary:#dee2e6;--mp-border-secondary:#ced4da;--mp-accent-primary:#7071fc;--mp-accent-primary-hover:#595ac9;--mp-accent-edit:#fab005;--mp-accent-edit-hover:#f08c00;--mp-accent-close:#f03e3e;--mp-accent-close-hover:#c92a2a;--mp-btn-export-bg:rgba(34,129,207,0.1);--mp-btn-export-color:#2281cf;--mp-btn-add-bg:rgba(32,201,97,0.1);--mp-btn-add-color:#20c961;--mp-btn-import-bg:rgba(253,126,20,0.1);--mp-btn-import-color:#fd7e14;--mp-switch-knob:#fff;--mp-shadow-sm:0 1px 2px rgba(0,0,0,0.04);--mp-shadow-md:0 4px 12px rgba(0,0,0,0.1);--mp-shadow-lg:0 10px 30px rgba(0,0,0,0.1);--mp-border-radius-sm:4px;--mp-border-radius-md:8px;--mp-border-radius-lg:16px;--mp-transition-fast:0.2s cubic-bezier(0.25,1,0.5,1);--mp-syntax-escape:#ff6b6b;--mp-syntax-ignore-fence:#868e96;--mp-syntax-ignore-content:#adb5bd;--mp-syntax-quote-fence:#2b8a3e;--mp-syntax-quote-content:#40c057;--mp-syntax-var-keyword:#15aabf;--mp-syntax-var-flag:#0c8599;--mp-syntax-file-keyword:#e64980;--mp-syntax-sel-fence:#4c6ef5;--mp-syntax-sel-header:#3b5bdb;--mp-syntax-sel-multi:#339af0;--mp-syntax-sel-single:#ff8787;--mp-syntax-sel-id:#da77f2;--mp-syntax-sel-other:#fa7b05;--mp-syntax-sel-sep:#adb5bd;--mp-syntax-free-bracket:#fab005;--mp-syntax-free-label:#e67700;--mp-syntax-in-bracket:#d6336c;--mp-syntax-in-label:#a61e4d;--mp-syntax-in-eq:#f06595;--mp-syntax-sil-bracket:#845ef7;--mp-syntax-sil-label:#6741d9;--mp-syntax-sil-eq:#b197fc;--mp-syntax-var:#099268;--mp-syntax-context:#868e96;--mp-syntax-def-sep:#f03e3e;--mp-syntax-def-val:#ff8787;--mp-syntax-sel-checked:#20c997;--mp-syntax-caret:var(--mp-text-primary,#000);--mp-syntax-selection:color-mix(in srgb,var(--mp-accent-primary,#4c6ef5) 30%,transparent)}@media (prefers-color-scheme:dark){:root{--mp-bg-primary:#212529;--mp-bg-secondary:#2c2c30;--mp-bg-tertiary:#343a40;--mp-bg-overlay:rgba(0,0,0,0.7);--mp-text-primary:#f8f9fa;--mp-text-secondary:#e9ecef;--mp-text-tertiary:#adb5bd;--mp-text-buttons:#fff;--mp-border-primary:#495057;--mp-border-secondary:#868e96;--mp-accent-primary:#8586ff;--mp-accent-primary-hover:#9fa0ff;--mp-accent-edit:#fcc419;--mp-accent-edit-hover:#ffe066;--mp-accent-close:#ff6b6b;--mp-accent-close-hover:#ff8787;--mp-btn-export-bg:rgba(116,192,252,0.15);--mp-btn-export-color:#74c0fc;--mp-btn-add-bg:rgba(105,219,124,0.15);--mp-btn-add-color:#69db7c;--mp-btn-import-bg:rgba(255,169,77,0.15);--mp-btn-import-color:#ffa94d;--mp-switch-knob:#fff;--mp-shadow-sm:0 1px 2px rgba(0,0,0,0.3);--mp-shadow-md:0 4px 12px rgba(0,0,0,0.4);--mp-shadow-lg:0 10px 30px rgba(0,0,0,0.5);--mp-syntax-escape:#ff8787;--mp-syntax-ignore-fence:#adb5bd;--mp-syntax-ignore-content:#868e96;--mp-syntax-quote-fence:#69db7c;--mp-syntax-quote-content:#b2f2bb;--mp-syntax-var-keyword:#3bc9db;--mp-syntax-var-flag:#99e9f2;--mp-syntax-file-keyword:#f783ac;--mp-syntax-sel-fence:#91a7ff;--mp-syntax-sel-header:#bac8ff;--mp-syntax-sel-multi:#74c0fc;--mp-syntax-sel-single:#ffc9c9;--mp-syntax-sel-id:#e599f7;--mp-syntax-sel-other:#fa7b05;--mp-syntax-sel-sep:#868e96;--mp-syntax-free-bracket:#ffd43b;--mp-syntax-free-label:#fab005;--mp-syntax-in-bracket:#f06595;--mp-syntax-in-label:#fcc2d7;--mp-syntax-in-eq:#faa2c1;--mp-syntax-sil-bracket:#b197fc;--mp-syntax-sil-label:#d0bfff;--mp-syntax-sil-eq:#9775fa;--mp-syntax-var:#38d9a9;--mp-syntax-context:#ced4da;--mp-syntax-def-sep:#ff6b6b;--mp-syntax-def-val:#ffc9c9;--mp-syntax-sel-checked:#63e6be}}.mp-prompt-wrapper{position:relative;width:36px;height:36px;margin:0 4px;display:inline-flex;vertical-align:middle;z-index:1000}.mp-sliding-pill-container{position:absolute;width:36px;height:36px;box-sizing:border-box;justify-content:space-between;background-color:var(--mp-bg-primary);border:1px solid var(--mp-border-primary);border-radius:var(--mp-border-radius-lg);box-shadow:var(--mp-shadow-sm);overflow:hidden;z-index:1000;transition:width var(--mp-transition-fast),height var(--mp-transition-fast),background-color var(--mp-transition-fast),border-color var(--mp-transition-fast)}.mp-btn-part,.mp-sliding-pill-container{display:flex;align-items:center;padding:0}.mp-btn-part{justify-content:center;flex:0 0 34px;width:34px;height:34px;background:transparent;border:none;margin:0;cursor:pointer;color:var(--mp-text-secondary);transition:color var(--mp-transition-fast)}.mp-btn-part svg{display:block;width:20px;height:20px;margin:0 auto;pointer-events:none;flex-shrink:0}.mp-btn-main{opacity:1}.mp-btn-ai,.mp-btn-paste{flex:0 0 0;width:0;height:0;opacity:0;overflow:hidden;transition:flex-basis var(--mp-transition-fast),width var(--mp-transition-fast),height var(--mp-transition-fast),opacity var(--mp-transition-fast),transform var(--mp-transition-fast)}.mp-sliding-pill-container:hover .mp-btn-ai,.mp-sliding-pill-container:hover .mp-btn-paste{flex:0 0 34px;width:34px;height:34px;opacity:1;transform:translate(0)}.mp-sliding-pill-container:hover{background-color:var(--mp-bg-tertiary);border-color:var(--mp-accent-primary);box-shadow:var(--mp-shadow-md)}.mp-btn-part:hover{color:var(--mp-accent-primary)}.mp-sliding-pill-container:active{background-color:var(--mp-bg-secondary)}.mp-dir-top{bottom:0;left:0;flex-direction:column}.mp-dir-top:hover{height:112px}.mp-dir-top .mp-btn-ai,.mp-dir-top .mp-btn-paste{transform:translateY(10px)}.mp-dir-bottom{top:0;left:0;flex-direction:column-reverse}.mp-dir-bottom:hover{height:112px}.mp-dir-bottom .mp-btn-ai,.mp-dir-bottom .mp-btn-paste{transform:translateY(-10px)}.mp-dir-left{top:0;right:0;flex-direction:row}.mp-dir-left:hover{width:112px}.mp-dir-left .mp-btn-ai,.mp-dir-left .mp-btn-paste{transform:translateX(10px)}.mp-dir-right{top:0;left:0;flex-direction:row-reverse}.mp-dir-right:hover{width:112px}.mp-dir-right .mp-btn-ai,.mp-dir-right .mp-btn-paste{transform:translateX(-10px)}.mp-sliding-pill-container:after,.mp-sliding-pill-container:before{content:\"\";position:absolute;background-color:var(--mp-border-primary);opacity:0;transition:opacity var(--mp-transition-fast);pointer-events:none;z-index:1001}.mp-sliding-pill-container:hover:after,.mp-sliding-pill-container:hover:before{opacity:1}.mp-dir-bottom:before,.mp-dir-top:before{width:26px;height:1px;left:50%;transform:translateX(-50%);top:37px}.mp-dir-bottom:after,.mp-dir-top:after{width:26px;height:1px;left:50%;transform:translateX(-50%);top:75px}.mp-dir-left:before,.mp-dir-right:before{width:1px;height:26px;top:50%;transform:translateY(-50%);left:37px}.mp-dir-left:after,.mp-dir-right:after{width:1px;height:26px;top:50%;transform:translateY(-50%);left:75px}.mp-hidden{display:none!important}.mp-scroll-invisible{overflow-y:auto!important;scrollbar-width:none!important;-ms-overflow-style:none!important;scroll-behavior:smooth}.mp-scroll-invisible::-webkit-scrollbar{display:none;width:0;height:0}.mp-scroll-wrapper{position:relative;display:flex;flex-direction:column;flex:1;overflow:hidden;min-height:0;max-width:100%;box-sizing:border-box}.mp-scroll-arrow{position:absolute;left:0;right:0;height:28px;display:flex;align-items:center;justify-content:center;color:var(--mp-text-tertiary);cursor:pointer;opacity:0;pointer-events:none;transition:opacity .2s ease,color .2s ease;z-index:10}.mp-scroll-arrow.up{top:0;background:linear-gradient(180deg,color-mix(in srgb,var(--mp-scroll-bg,var(--mp-bg-primary)),transparent 40%) 30%,transparent)}.mp-scroll-arrow.down{bottom:0;background:linear-gradient(0deg,color-mix(in srgb,var(--mp-scroll-bg,var(--mp-bg-primary)),transparent 40%) 30%,transparent)}.mp-scroll-arrow:hover{color:var(--mp-accent-primary)}.mp-scroll-arrow.visible{opacity:1;pointer-events:auto}.mp-scroll-arrow svg{width:20px;height:20px;filter:drop-shadow(0 1px 2px rgba(0,0,0,.1))}#AB_modal_box_el #__ap_text,#prompt-menu-container #__ap_text,.mp-modal-box .form-group:has(#__ap_text) .form-textarea{border:none!important;box-shadow:none!important;background-color:transparent!important;padding:16px;width:100%;height:100%;font-family:var(--mp-font-family-editor)!important}.mp-modal-box .form-group:has(#__ap_text) .mp-scroll-wrapper{border:1px solid var(--mp-border-primary);border-radius:var(--mp-border-radius-md);background-color:var(--mp-bg-secondary);transition:border-color .2s,box-shadow .2s;overflow:hidden!important;display:flex;flex-direction:column;height:300px}.mp-modal-box .form-group:has(#__ap_text) .mp-scroll-wrapper:focus-within{border-color:var(--mp-accent-primary);box-shadow:0 0 0 3px color-mix(in srgb,var(--mp-accent-primary) 25%,transparent)}.mp-modal-box.mp-expanded .form-group:has(#__ap_text) .mp-scroll-wrapper{height:100%!important}.mp-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:var(--mp-bg-overlay);z-index:99990;display:flex;justify-content:center;align-items:center;backdrop-filter:blur(4px);opacity:0;visibility:hidden;transition:opacity var(--mp-transition-fast),visibility var(--mp-transition-fast)}.mp-overlay.visible{opacity:1;visibility:visible}.mp-modal-box{font-family:var(--mp-font-family-base)!important;background-color:var(--mp-bg-primary);border-radius:var(--mp-border-radius-lg);padding:24px!important;box-shadow:var(--mp-shadow-lg);width:min(93vw,800px)!important;border:1px solid var(--mp-border-primary)!important;transform:scale(.95) translateY(10px);opacity:0;transition:transform var(--mp-transition-fast),opacity var(--mp-transition-fast),width .3s cubic-bezier(.4,0,.2,1),height .3s cubic-bezier(.4,0,.2,1)!important;position:relative!important;display:flex!important;flex-direction:column!important;max-height:90vh!important}.modal-title,.mp-modal-box{color:var(--mp-text-primary)}.modal-title{font-family:var(--mp-font-family-heading)!important;font-size:18px;font-weight:600;margin:0 0 20px;text-align:center;flex-shrink:0}.modal-footer{display:flex;justify-content:center;margin-top:16px;flex-shrink:0}.mp-modal-box.mp-expanded{width:95vw!important;max-width:95vw!important;height:93vh!important;max-height:93vh!important;display:flex!important;flex-direction:column!important}.mp-modal-box.mp-expanded .form-group:has(#__ap_text){flex:1;display:flex;flex-direction:column;min-height:0;margin-bottom:15px}.mp-modal-box.mp-expanded .modal-title{display:block!important;visibility:visible!important;text-align:center;margin-bottom:20px;flex-shrink:0}.mp-modal-box.mp-expanded .form-group:has(.form-textarea){flex:1;display:flex;flex-direction:column;min-height:0;margin-bottom:24px}.mp-modal-box.mp-expanded .mp-scroll-wrapper{flex:1;height:100%!important}.mp-modal-box.mp-expanded .form-textarea{height:100%!important}.mp-modal-box.mp-expanded .mp-switch-container{padding-top:8px}.mp-overlay.visible .mp-modal-box{transform:scale(1) translateY(0);opacity:1}.mp-modal-close-btn,.mp-modal-info-btn,.mp-modal-shop-btn{position:absolute;top:12px;background:none;border:none;color:var(--mp-text-tertiary);cursor:pointer;width:32px;height:32px;border-radius:50%;transition:transform .3s ease,color .3s ease,background-color .3s ease;display:flex;justify-content:center;align-items:center;padding:0;z-index:20}.mp-modal-close-btn{right:12px}.mp-modal-info-btn{right:88px}.mp-modal-shop-btn{right:126px;cursor:default!important}.mp-modal-close-btn:hover{transform:rotate(90deg);color:var(--mp-accent-close);background-color:color-mix(in srgb,var(--mp-accent-close) 15%,transparent)}.mp-modal-info-btn:hover,.mp-modal-shop-btn:hover{transform:scale(1.1);color:var(--mp-accent-primary);background-color:color-mix(in srgb,var(--mp-accent-primary) 15%,transparent)}.mp-modal-close-btn svg,.mp-modal-info-btn svg,.mp-modal-shop-btn svg{width:20px;height:20px;stroke:currentColor;stroke-width:2.5;fill:none}.mp-modal-info-btn svg{stroke-width:0;fill:currentColor}.mp-modal-expand-btn{position:absolute;top:12px;right:50px;background:none;border:none;color:var(--mp-text-tertiary);cursor:pointer;width:32px;height:32px;border-radius:50%;transition:transform .3s ease,color .3s ease,background-color .3s ease;display:flex;justify-content:center;align-items:center;padding:0;z-index:20}.mp-modal-expand-btn:hover{transform:scale(1.1);color:var(--mp-accent-primary);background-color:color-mix(in srgb,var(--mp-accent-primary) 15%,transparent)}.mp-modal-expand-btn svg,.mp-modal-shop-btn svg{width:20px;height:20px;stroke:currentColor;stroke-width:2;fill:none}.mp-diff-modal-overlay .mp-modal-box{width:95vw!important;height:93vh!important;max-width:none!important;display:flex!important;flex-direction:column!important}.mp-diff-container{display:flex;flex-direction:column;gap:16px;flex:1;min-height:0;margin-bottom:0}@media (min-width:768px){.mp-diff-container{flex-direction:row}}.mp-diff-column{flex:1;display:flex;flex-direction:column;gap:8px;min-width:0;min-height:0}.mp-diff-label{font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:var(--mp-accent-primary);display:flex;align-items:center;gap:8px;flex-shrink:0;justify-content:space-around}.mp-diff-textarea{width:100%!important;flex:1!important;padding:16px!important;border-radius:var(--mp-border-radius-md)!important;border:1px solid var(--mp-border-primary)!important;background-color:var(--mp-bg-secondary)!important;color:var(--mp-text-primary)!important;font-family:var(--mp-font-family-editor)!important;font-size:15px!important;resize:none!important;line-height:1.6!important;box-sizing:border-box!important}.mp-diff-actions{display:flex;gap:12px;justify-content:space-around;margin-top:20px;flex-shrink:0}.mp-diff-actions button{padding:10px 20px;border-radius:var(--mp-border-radius-md);cursor:pointer;font-weight:500;display:inline-flex;align-items:center;justify-content:center}.mp-diff-actions .save-button{background:var(--mp-accent-primary);color:var(--mp-text-buttons);border:none}#__ap_enhance_loading{z-index:100000}.mp-loading-content{display:flex;flex-direction:column;align-items:center;gap:15px;color:var(--mp-accent-primary);font-family:var(--mp-font-family-editor)}.mp-loading-icon{width:50px;height:50px}.mp-loading-text{font-size:16px;font-weight:500}.mp-label-wrapper{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;gap:8px}.mp-label-left{display:flex;align-items:center;flex:1;min-width:0}.mp-label-right,.mp-modal-right-controls{display:flex;align-items:center;gap:4px;flex-shrink:0}.mp-label-wrapper .form-label{margin-bottom:0!important;white-space:normal;overflow:hidden;text-overflow:ellipsis}.mp-enhance-ai-btn,.mp-help-icon,.mp-link-btn,.mp-paste-btn{background:transparent;border:none;cursor:pointer;color:var(--mp-accent-primary);display:flex;align-items:center;justify-content:center;padding:4px;border-radius:var(--mp-border-radius-sm);transition:transform .2s ease,opacity .2s ease,background-color .2s ease;opacity:.8;outline:none;flex-shrink:0}.mp-enhance-ai-btn:hover,.mp-help-icon:hover,.mp-link-btn:hover,.mp-paste-btn:hover{transform:scale(1.1);opacity:1}.mp-enhance-ai-btn svg,.mp-help-icon svg,.mp-link-btn svg,.mp-paste-btn svg{width:16px;height:16px;fill:currentColor;display:block}.mp-enhance-ai-btn.loading{width:22px;height:22px;pointer-events:none}.mp-context-bubble{display:none;background-color:var(--mp-bg-tertiary);border-left:3px solid var(--mp-accent-primary);padding:8px 12px;margin-bottom:12px;font-size:13px;color:var(--mp-text-secondary);line-height:1.4;animation:mp-fade-in-down .2s ease-out forwards;width:100%;box-sizing:border-box;white-space:normal;overflow-wrap:break-word;word-break:break-word}.mp-context-bubble.visible{display:block}.mp-context-bubble strong{color:var(--mp-text-primary);font-weight:600}@keyframes mp-fade-in-down{0%{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}@keyframes mp-spin{to{transform:rotate(1turn)}}.prompt-menu{position:fixed;min-width:350px;max-width:450px;background-color:var(--mp-bg-primary);border:1px solid var(--mp-border-primary);border-radius:var(--mp-border-radius-lg);box-shadow:var(--mp-shadow-lg);z-index:99990;display:flex;flex-direction:column;user-select:none;color:var(--mp-text-primary)!important;font-family:var(--mp-font-family-base)!important;overflow:hidden;opacity:0;visibility:hidden;transform:scale(.95);transform-origin:top left;transition:opacity .2s ease,transform .2s ease,visibility 0s linear .2s}.prompt-menu.visible{opacity:1;visibility:visible;transform:scale(1);transition-delay:0s}.prompt-menu-list{max-height:350px;padding:4px;overflow-y:auto;overflow-x:hidden;position:relative}.prompt-item-row{position:relative;display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-radius:var(--mp-border-radius-md);cursor:pointer;transition:background-color .15s ease-in-out;overflow:hidden}.prompt-item-row.drag-mode,.prompt-item-row:hover{background-color:var(--mp-bg-tertiary)}.prompt-item-row.drag-mode{border:1px dashed var(--mp-accent-primary);cursor:move}.prompt-item-row.drag-mode:active{cursor:grabbing}.prompt-title{font-family:var(--mp-font-family-heading)!important;font-size:14px;font-weight:500;flex:1;padding-right:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:var(--mp-text-secondary);transition:opacity .2s}.prompt-item-row:hover .prompt-title{color:var(--mp-accent-primary);mask-image:linear-gradient(90deg,#000 60%,transparent);-webkit-mask-image:linear-gradient(90deg,#000 60%,transparent)}.prompt-item-row.nav-selected{background-color:var(--mp-bg-tertiary)!important;border:1px solid var(--mp-accent-primary)!important}.prompt-item-row.nav-selected .prompt-title{color:var(--mp-accent-primary)!important}.prompt-actions{position:absolute;right:0;top:0;bottom:0;padding-left:20px;padding-right:8px;display:flex;align-items:center;gap:4px;background:linear-gradient(90deg,transparent 0,var(--mp-bg-tertiary) 20%,var(--mp-bg-tertiary));transform:translateX(110%);transition:transform .25s cubic-bezier(.25,1,.5,1);z-index:2}.prompt-item-row.drag-mode .prompt-actions,.prompt-item-row:hover .prompt-actions{transform:translateX(0)}.action-btn{background:transparent;border:none;cursor:pointer;width:28px;height:28px;border-radius:var(--mp-border-radius-sm);transition:all .15s ease;display:flex;align-items:center;justify-content:center;line-height:0;color:var(--mp-text-secondary);font-family:var(--mp-font-family-button)!important}.action-btn svg{width:16px;height:16px;display:block}.action-btn:hover{transform:scale(1.1)}.action-btn.edit:hover{color:var(--mp-accent-edit)}.action-btn.copy:hover{color:var(--mp-accent-primary)}.action-btn.delete:hover{color:var(--mp-accent-close)}.action-btn.pin:hover{color:var(--mp-accent-edit)}.action-btn.restore:hover{color:var(--mp-btn-add-color)}.action-btn.unpin{color:var(--mp-accent-primary)}.action-btn.drag:hover{color:var(--mp-btn-export-color)}.menu-footer-grid{display:grid;grid-template-columns:1fr 1fr 1fr;border-top:1px solid var(--mp-border-primary);background-color:var(--mp-bg-secondary);flex-shrink:0}.menu-footer-btn{display:flex;align-items:center;justify-content:center;background:transparent;border:none;cursor:pointer;padding:12px 0;color:var(--mp-text-secondary);transition:all .2s ease;height:auto;font-family:var(--mp-font-family-button)!important}.menu-footer-btn:not(:last-child){border-right:1px solid var(--mp-border-primary)}.menu-footer-btn svg{width:20px;height:20px;transition:transform .2s cubic-bezier(.34,1.56,.64,1)}.menu-footer-btn:hover svg{transform:scale(1.2)}.menu-footer-btn.btn-export:hover{background-color:var(--mp-btn-export-bg);color:var(--mp-btn-export-color)}.menu-footer-btn.btn-add:hover{background-color:var(--mp-btn-add-bg);color:var(--mp-btn-add-color);transform:none}.menu-footer-btn.btn-add:hover svg{transform:scale(1.4)}.menu-footer-btn.btn-import:hover{background-color:var(--mp-btn-import-bg);color:var(--mp-btn-import-color)}.menu-header-grid{display:grid;grid-template-columns:1fr 1fr 1fr;border-bottom:1px solid var(--mp-border-primary);background-color:var(--mp-bg-secondary);flex-shrink:0;position:relative;overflow:hidden}.menu-search-overlay{position:absolute;inset:0;background:var(--mp-bg-secondary);display:flex;align-items:center;padding:0 8px;gap:8px;transform:translateX(110%);transition:transform .25s cubic-bezier(.25,1,.5,1);z-index:5}.menu-search-input{flex:1;width:100%;padding:6px 12px;border:1px solid var(--mp-border-primary);border-radius:var(--mp-border-radius-md);font-family:var(--mp-font-family-base)!important;background:var(--mp-bg-primary);color:var(--mp-text-primary);outline:none;transition:border-color .2s}.menu-search-input:focus{border-color:var(--mp-accent-primary)}.menu-header-btn{display:flex;align-items:center;justify-content:center;background:transparent;border:none;cursor:pointer;padding:12px 0;color:var(--mp-text-secondary);transition:all .2s ease;font-family:var(--mp-font-family-button)!important}.menu-header-btn:not(:last-child):not(.btn-close-search){border-right:1px solid var(--mp-border-primary)}.menu-header-btn svg{width:20px;height:20px;transition:transform .2s cubic-bezier(.34,1.56,.64,1)}.menu-header-btn:hover{color:var(--mp-accent-primary)}.menu-header-btn:hover svg{transform:scale(1.2)}.menu-header-btn.active{color:var(--mp-accent-primary)}.mp-expanded-overlay{position:fixed;top:0;left:0;width:100vw;height:100vh;background:var(--mp-bg-overlay);backdrop-filter:blur(4px);z-index:100000;display:flex;align-items:center;justify-content:center;animation:mpFadeIn .2s ease}.mp-expanded-modal{width:93vw;height:93vh;background:var(--mp-bg-primary);border:1px solid var(--mp-border-primary);border-radius:var(--mp-border-radius-lg);box-shadow:var(--mp-shadow-lg);display:flex;flex-direction:column;overflow:hidden;position:relative;font-family:var(--mp-font-family-base)!important}.mp-expanded-header{display:flex;align-items:center;justify-content:space-between;padding:12px 20px;border-bottom:1px solid var(--mp-border-primary);background:var(--mp-bg-secondary);gap:16px;flex-shrink:0}.mp-expanded-search-container{flex:1;display:flex}.mp-expanded-search{width:100%;padding:8px 12px;border:1px solid var(--mp-border-primary);border-radius:var(--mp-border-radius-md);font-family:var(--mp-font-family-base)!important;background:var(--mp-bg-primary);color:var(--mp-text-primary);outline:none;transition:border-color .2s}.mp-expanded-search:focus{border-color:var(--mp-accent-primary)}.mp-expanded-actions-left{display:flex;align-items:center;gap:8px}.mp-pinned-action-btn.has-selection{background:rgba(240,62,62,.1);color:var(--mp-accent-close);border-color:var(--mp-accent-close)}.mp-expanded-list{flex:1;overflow-y:auto;overflow-x:hidden;padding:16px;display:grid;gap:12px;align-content:start;position:relative}.prompt-item-row.expanded-mode{border:1px solid var(--mp-border-primary);background:var(--mp-bg-secondary);align-items:center;padding:12px 16px;min-width:0;min-height:70px;height:auto}.prompt-item-row.expanded-mode:hover{border-color:var(--mp-accent-primary)}.prompt-item-row.expanded-mode .prompt-actions{position:relative;transform:none;background:transparent;padding-left:8px;opacity:1;flex-shrink:0}.prompt-item-row.expanded-mode .prompt-title{white-space:normal;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;line-height:1.4;word-break:break-word}.mp-expanded-filter-dropdown{position:fixed;z-index:100001}@keyframes mpFadeIn{0%{opacity:0}to{opacity:1}}.mp-pinned-action-btn.btn-close:hover,.mp-pinned-action-btn.btn-delete.active,.mp-pinned-action-btn.btn-delete:hover{background:var(--mp-accent-close)!important;border-color:var(--mp-accent-close-hover)!important;color:var(--mp-text-buttons)!important}.mp-pinned-action-btn.btn-cols:hover{background:var(--mp-accent-edit)!important;border-color:var(--mp-accent-edit-hover)!important;color:var(--mp-text-buttons)!important}.mp-pinned-action-btn.btn-add:hover{background:var(--mp-btn-add-color)!important;border-color:var(--mp-btn-add-color)!important;color:var(--mp-text-buttons)!important}.mp-pinned-action-btn.btn-export:hover{background:var(--mp-btn-export-color)!important;border-color:var(--mp-btn-export-color)!important;color:var(--mp-text-buttons)!important}.mp-pinned-action-btn.btn-import:hover{background:var(--mp-btn-import-color)!important;border-color:var(--mp-btn-import-color)!important;color:var(--mp-text-buttons)!important}.mp-pinned-action-btn.btn-save:hover,.mp-pinned-action-btn.btn-select-all.active{background:var(--mp-accent-primary)!important;border-color:var(--mp-accent-primary-hover,var(--mp-accent-primary))!important;color:var(--mp-text-buttons)!important}.form-group{display:flex;flex-direction:column;margin-bottom:15px;flex-shrink:0}.form-label{margin-bottom:8px;font-size:14px!important;font-weight:700!important;color:var(--mp-text-secondary);display:block;width:100%;white-space:normal;overflow-wrap:break-word;word-break:break-word}.form-input,.form-textarea{background-color:var(--mp-bg-secondary)!important;color:var(--mp-text-primary)!important;border:1px solid var(--mp-border-primary)!important;border-radius:var(--mp-border-radius-md);padding:10px;width:100%;box-sizing:border-box;transition:border-color .2s,box-shadow .2s;outline:0!important;font-family:var(--mp-font-family-editor)!important;font-size:14px!important}.form-textarea{height:300px!important;resize:none!important;display:block}.form-input:focus,.form-textarea:focus{border-color:var(--mp-accent-primary)!important;box-shadow:0 0 0 3px color-mix(in srgb,var(--mp-accent-primary) 25%,transparent)!important}.form-input::placeholder,.form-textarea::placeholder,.lang-search-input::placeholder,.menu-search-input::placeholder,.mp-search-input::placeholder{color:var(--mp-text-tertiary)!important;opacity:.7}.mp-switch-container{display:flex;justify-content:space-between;align-items:center;padding:8px 12px!important;margin:0 0 15px;flex-shrink:0;background-color:var(--mp-bg-secondary);border:1px solid var(--mp-border-primary);border-radius:var(--mp-border-radius-md);gap:10px}.mp-switch{display:flex;align-items:center;gap:8px}.mp-switch input[type=checkbox]{height:0;width:0;visibility:hidden;position:absolute}.mp-switch label{cursor:pointer;text-indent:-9999px;width:40px;height:22px;background:var(--mp-bg-tertiary);display:block;border-radius:100px;position:relative;transition:background-color var(--mp-transition-fast)}.mp-switch label:after{content:\"\";position:absolute;top:3px;left:3px;width:16px;height:16px;background:var(--mp-switch-knob);border-radius:90px;transition:.3s cubic-bezier(.25,1,.5,1);box-shadow:var(--mp-shadow-sm)}.mp-switch input:checked+label{background:var(--mp-accent-primary)}.mp-switch input:checked+label:after{left:calc(100% - 3px);transform:translateX(-100%)}.mp-switch .switch-text{font-size:13px;font-weight:500;color:var(--mp-text-secondary);cursor:pointer;user-select:none}.mp-prompt-shortcut{flex:1;max-width:140px;font-family:var(--mp-font-family-base);padding:4px!important;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mp-prompt-shortcut[data-shortcut]:not([data-shortcut=\"\"]){color:var(--mp-accent-primary)}.mp-checkbox,.mp-filter-checkbox,.mp-option-item input[type=checkbox]{-webkit-appearance:none!important;appearance:none!important;width:18px!important;height:18px!important;border:1px solid var(--mp-border-primary)!important;border-radius:var(--mp-border-radius-sm)!important;background-color:var(--mp-bg-secondary)!important;cursor:pointer!important;margin:0!important;display:grid!important;place-content:center!important;transition:all .2s ease}.mp-checkbox:checked,.mp-filter-item.selected .mp-filter-checkbox,.mp-option-item input[type=checkbox]:checked{background-color:var(--mp-accent-primary)!important;border-color:var(--mp-accent-primary)!important}.mp-checkbox:before,.mp-filter-checkbox:before,.mp-option-item input[type=checkbox]:before{content:\"\";width:10px;height:10px;clip-path:polygon(14% 44%,0 65%,50% 100%,100% 16%,80% 0,43% 62%);background-color:var(--mp-text-buttons);transform:scale(0);transition:transform .15s ease-in-out}.mp-checkbox:checked:before,.mp-filter-item.selected .mp-filter-checkbox:before,.mp-option-item input[type=checkbox]:checked:before{transform:scale(1)}#__ap_placeholders_container{padding:4px;margin-top:15px;box-sizing:border-box;transition:padding-top .2s ease}.mp-option-group{display:flex;flex-direction:column;gap:4px;margin-bottom:12px;padding:8px;border:1px solid var(--mp-border-primary);border-radius:var(--mp-border-radius-md);background-color:var(--mp-bg-tertiary);max-height:none!important;overflow:visible!important}.mp-option-item{display:flex;align-items:center;gap:10px;font-size:13px;cursor:pointer;padding:8px 8px 8px 12px!important;border-radius:var(--mp-border-radius-sm);background-color:var(--mp-bg-primary);transition:background-color .2s;user-select:none;border-left:5px solid transparent;position:relative}.mp-option-item:hover{background-color:var(--mp-bg-secondary)}.mp-modal-box.mp-expanded #__ap_placeholders_container{max-height:none!important;height:100%!important;flex:1;display:flex;flex-direction:column;min-height:0}.mp-modal-box.mp-expanded #__ap_placeholders_container .mp-scroll-wrapper{height:100%!important;flex:1}.dynamic-input{min-height:45px!important;line-height:1.5;font-family:var(--mp-font-family-editor)!important}.mp-dynamic-dropzone{position:relative;min-height:90px;border:2px dashed var(--mp-border-primary);border-radius:var(--mp-border-radius-md);margin-bottom:12px;align-items:center;transition:border-color .2s ease;box-shadow:none!important;background-color:transparent}.mp-dynamic-dropzone.drag-over{border-color:var(--mp-accent-primary)}.mp-dynamic-grid-w100{width:100%}.mp-hidden-file-input{position:absolute;width:1px;height:1px;opacity:0;pointer-events:none;z-index:-1}.mp-empty-state-container{display:flex;flex-direction:column;align-items:center;gap:8px;padding:16px}.menu-search-container,.mp-search-container{position:sticky;top:0;z-index:10;display:flex;flex-direction:column;flex-shrink:0}.menu-search-container{padding:10px 12px;background-color:var(--mp-bg-secondary);border-bottom:1px solid var(--mp-border-primary)}.lang-search-input,.menu-search-input,.mp-search-input,.mp-system-prompt-search-input{width:100%;padding:10px 12px;border-radius:var(--mp-border-radius-md);border:1px solid var(--mp-border-primary);background-color:var(--mp-bg-secondary);color:var(--mp-text-primary);font-family:var(--mp-font-family-editor)!important;font-size:13px;box-sizing:border-box;outline:none;transition:border-color .2s}.menu-search-input{background-color:var(--mp-bg-primary)!important}.lang-search-input,.mp-system-prompt-search-input{margin-bottom:12px}.lang-search-input:focus,.menu-search-input:focus,.mp-search-input:focus,.mp-system-prompt-search-input:focus{border-color:var(--mp-accent-primary);outline:none!important}.mp-export-actions{display:flex;justify-content:space-between;align-items:center;margin-top:20px;margin-bottom:20px;font-size:13px;color:var(--mp-text-secondary);border-bottom:1px solid var(--mp-border-primary);padding-bottom:16px}.mp-checkbox-wrapper{display:flex;align-items:center;cursor:pointer;user-select:none}.mp-export-list{display:flex;flex-direction:column;gap:4px;margin:0 -8px;padding:0 8px}.mp-export-item{display:flex;align-items:center;padding:8px;border-radius:var(--mp-border-radius-md);transition:background .15s;cursor:pointer;border:1px solid transparent}.mp-export-item:hover{background-color:var(--mp-bg-tertiary);border-color:var(--mp-border-primary)}.mp-item-content{display:flex;flex-direction:column;overflow:hidden;margin-left:12px}.mp-item-title{font-size:14px;font-weight:500;color:var(--mp-text-primary)}.mp-item-preview,.mp-item-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mp-item-preview{font-size:12px;color:var(--mp-text-tertiary);margin-top:2px}.mp-export-buttons{display:flex;gap:10px;margin-top:20px;justify-content:flex-end;border-top:1px solid var(--mp-border-primary);padding-top:16px;flex-shrink:0;font-family:var(--mp-font-family-button)!important}.lang-box,.mp-system-prompt-select-box{width:min(90vw,500px)!important}.mp-system-prompt-select-box{padding:20px!important}.lang-button,.mp-system-prompt-button{all:unset;box-sizing:border-box;display:block;width:100%;padding:12px 20px;border-radius:var(--mp-border-radius-md);background-color:var(--mp-bg-secondary);color:var(--mp-text-primary);border:1px solid var(--mp-border-primary);font-weight:500;cursor:pointer;text-align:center;transition:all .2s ease;font-family:var(--mp-font-family-button)!important;flex-shrink:0}.mp-system-prompt-button{display:flex!important;flex-direction:column;align-items:center;gap:4px}.mp-system-prompt-list-container{display:flex;flex-direction:column;gap:8px;max-height:400px;overflow-y:auto}.mp-system-prompt-button-title{font-weight:600;font-size:14px}.mp-system-prompt-button-comment{font-weight:400;font-size:12px;color:var(--mp-text-secondary);display:block;width:100%;white-space:normal;overflow-wrap:break-word;word-break:break-word}.lang-button:hover,.mp-system-prompt-button:hover{transform:translateY(-2px);box-shadow:var(--mp-shadow-sm);background-color:var(--mp-bg-tertiary)}.lang-button.selected,.mp-system-prompt-button.is-focused{border-color:var(--mp-accent-primary);color:var(--mp-accent-primary);background-color:color-mix(in srgb,var(--mp-accent-primary) 5%,transparent);font-weight:600}.save-button{padding:10px 28px;border-radius:var(--mp-border-radius-md);background-color:var(--mp-accent-primary);color:var(--mp-text-buttons);border:none;font-weight:600;cursor:pointer;transition:all .2s ease-in-out;font-family:var(--mp-font-family-button)!important;margin-bottom:5px}.save-button:hover{background-color:var(--mp-accent-primary-hover)}.mp-btn-secondary{background:transparent;border:1px solid var(--mp-border-secondary);color:var(--mp-text-secondary)}.mp-btn-secondary:hover{background-color:var(--mp-bg-tertiary);color:var(--mp-text-primary)}.mp-info-table{display:flex;flex-direction:column;border:1px solid var(--mp-border-primary);border-radius:var(--mp-border-radius-md);overflow:hidden;margin-top:8px}.mp-info-row{display:flex}.mp-info-row:not(:last-child){border-bottom:1px solid var(--mp-border-primary)}.mp-info-col{padding:16px;display:flex;flex-direction:column;justify-content:center}.mp-info-col:not(:last-child){border-right:1px solid var(--mp-border-primary)}.mp-info-title-col{flex:0 0 35%}.mp-info-desc-col,.mp-info-title-col{background-color:var(--mp-bg-secondary);text-align:left}.mp-info-desc-col{flex:1}.mp-info-col h3{font-size:14px;font-weight:600;color:var(--mp-text-primary);margin:0;font-family:var(--mp-font-family-heading)!important}.mp-info-col p{font-size:13px;color:var(--mp-text-secondary);line-height:1.5;margin:0}.mp-inline-menu{position:fixed;width:500px;max-height:300px;background-color:var(--mp-bg-primary)!important;border:1px solid var(--mp-border-primary);border-radius:var(--mp-border-radius-md);box-shadow:var(--mp-shadow-lg);z-index:2147483647!important;display:flex;flex-direction:column;opacity:0;visibility:hidden;transform:translateY(10px);transition:opacity .1s,transform .1s,visibility 0s linear .1s;overflow:hidden;font-family:var(--mp-font-family-base)!important}.mp-inline-menu.visible{opacity:1;visibility:visible;transform:translateY(0);transition-delay:0s}.mp-inline-list{padding:4px;pointer-events:auto}.mp-inline-item,.mp-inline-list{display:flex;flex-direction:column}.mp-inline-item{padding:8px 12px;cursor:pointer;border-radius:var(--mp-border-radius-sm);font-size:13px;color:var(--mp-text-primary);align-items:flex-start;justify-content:center;gap:3px;transition:background-color .1s}.mp-inline-item:hover{background-color:var(--mp-bg-tertiary)}.mp-inline-item.selected{background-color:var(--mp-accent-primary);color:var(--mp-text-buttons)!important}.mp-inline-title{font-weight:500;line-height:1.3}.mp-inline-preview,.mp-inline-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;font-family:var(--mp-font-family-heading)!important}.mp-inline-preview{font-weight:400;font-size:12px;color:var(--mp-text-tertiary);line-height:1.2}.mp-inline-item.selected .mp-inline-preview{color:var(--mp-text-buttons)!important;opacity:.8}.mp-tooltip{position:fixed;z-index:2147483647;pointer-events:none;display:flex;flex-direction:column;align-items:center;opacity:0;transform:scale(.95) translateY(4px);transition:opacity .15s cubic-bezier(.4,0,.2,1),transform .15s cubic-bezier(.4,0,.2,1)}.mp-tooltip-interactive{pointer-events:auto}.mp-tooltip.visible{opacity:1;transform:scale(1) translateY(0)}.mp-tooltip-left,.mp-tooltip-right{flex-direction:row;align-items:center}.mp-tooltip-content{font-family:var(--mp-font-family-button)!important;background-color:var(--mp-text-primary);color:var(--mp-bg-primary);padding:0;border-radius:var(--mp-border-radius-sm);max-width:450px;width:max-content;white-space:normal;word-wrap:break-word;overflow-wrap:break-word;text-align:center;font-size:13px;font-weight:500;box-shadow:var(--mp-shadow-md);line-height:1.4;display:flex;flex-direction:column;overflow:hidden}.mp-tooltip-text{display:block;padding:10px 14px}.mp-tooltip-text+.mp-tooltip-actions{border-top:1px solid color-mix(in srgb,var(--mp-border-primary),transparent 70%)}.mp-tooltip-actions{display:flex;width:100%}.mp-tooltip-actions-row{flex-direction:row}.mp-tooltip-actions-column{flex-direction:column}.mp-tooltip-btn{font-family:var(--mp-font-family-button)!important;flex:1;display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:10px 14px;border:none;border-radius:0;background-color:transparent;color:inherit;font-size:12px;font-weight:600;cursor:pointer;transition:var(--mp-transition-fast);white-space:nowrap}.mp-tooltip-actions-row .mp-tooltip-btn:not(:last-child){border-right:1px solid color-mix(in srgb,var(--mp-border-primary),transparent 70%)}.mp-tooltip-actions-column .mp-tooltip-btn:not(:last-child){border-bottom:1px solid color-mix(in srgb,var(--mp-border-primary),transparent 70%)}.mp-tooltip-btn:focus,.mp-tooltip-btn:hover{background-color:var(--mp-accent-primary);color:var(--mp-text-buttons)}.mp-tooltip-btn:focus{outline:none}.mp-tooltip-btn-icon{width:14px;height:14px;display:flex;align-items:center;justify-content:center}.mp-tooltip-btn-icon svg{width:100%;height:100%;fill:currentColor}.mp-tooltip-arrow{width:0;height:0;margin:0;flex-shrink:0;z-index:1}.mp-tooltip-top .mp-tooltip-arrow{border-left:6px solid transparent;border-right:6px solid transparent;border-top:6px solid var(--mp-text-primary)}.mp-tooltip-bottom .mp-tooltip-arrow{border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid var(--mp-text-primary);order:-1}.mp-tooltip-left .mp-tooltip-arrow{border-top:6px solid transparent;border-bottom:6px solid transparent;border-left:6px solid var(--mp-text-primary)}.mp-tooltip-right .mp-tooltip-arrow{border-top:6px solid transparent;border-bottom:6px solid transparent;border-right:6px solid var(--mp-text-primary);order:-1}.mp-tooltip-preview-container{padding:12px;width:320px;max-width:90vw;display:flex;flex-direction:column}.mp-tooltip-preview-text{max-height:200px;overflow-y:auto;background-color:color-mix(in srgb,var(--mp-bg-primary),transparent 85%);border:1px solid color-mix(in srgb,var(--mp-bg-primary),transparent 70%);border-radius:var(--mp-border-radius-sm);padding:13px;font-family:var(--mp-font-family-editor);font-size:12px;font-weight:300;color:var(--mp-bg-primary);line-height:1.5;white-space:pre-wrap;text-align:left;-webkit-hyphens:manual;hyphens:manual;overflow-wrap:break-word}.mp-tooltip-preview-container .mp-scroll-arrow.up{top:0;background:linear-gradient(180deg,color-mix(in srgb,var(--mp-text-primary),transparent 30%) 30%,transparent);color:var(--mp-bg-primary)}.mp-tooltip-preview-container .mp-scroll-arrow.down{bottom:0;background:linear-gradient(0deg,color-mix(in srgb,var(--mp-text-primary),transparent 30%) 30%,transparent);color:var(--mp-bg-primary)}@keyframes mp-fade-in-up{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.mp-settings-container{display:flex;flex-direction:column;height:100%;overflow:hidden;font-family:var(--mp-font-family-base)!important}.mp-tabs-header{display:flex;justify-content:center;align-items:center;border-bottom:1px solid var(--mp-border-primary);padding:0 16px;margin-bottom:16px;flex-shrink:0;gap:8px}.mp-tab-btn{font-family:var(--mp-font-family-button)!important;flex:1;background:none;padding:12px 4px;font-size:14px;font-weight:600;color:var(--mp-text-secondary);cursor:pointer;border:none;border-bottom:2px solid transparent;transition:all .2s;text-align:center;border-radius:4px 4px 0 0}.mp-tab-btn:hover{color:var(--mp-text-primary);background-color:var(--mp-bg-tertiary)}.mp-tab-btn.active{color:var(--mp-accent-primary);border-bottom-color:var(--mp-accent-primary)}.mp-tab-content{display:none!important;flex-direction:column;gap:4px;animation:mp-fade-in-up .2s ease}.mp-tab-content.active{display:flex!important}.mp-form-group,.mp-label{margin-bottom:10px}.mp-label{font-size:14px;font-weight:600;color:var(--mp-text-primary);display:block}.mp-label-row{display:flex;align-items:center;gap:8px;margin-bottom:8px}.mp-settings-switch-container{display:flex;justify-content:space-between;align-items:center;background:var(--mp-bg-secondary);border:1px solid var(--mp-border-primary);padding:12px;border-radius:var(--mp-border-radius-md);margin:0}#mp-nav-lbl,#mp-preview-prompt-lbl,#mp-smart-predict-lbl,#mp-syntax-lbl{font-size:13px;font-weight:400;color:var(--mp-text-primary);cursor:help;text-decoration:underline dotted;text-decoration-color:color-mix(in srgb,var(--mp-text-secondary) 60%,transparent);text-underline-offset:3px;text-decoration-thickness:1px}.mp-action-btn-full{width:100%;padding:12px 16px;background-color:var(--mp-bg-secondary);border:1px solid var(--mp-border-primary);border-radius:var(--mp-border-radius-md);color:var(--mp-text-tertiary);font-weight:500;cursor:pointer;display:flex;justify-content:space-between;align-items:center;transition:all .2s;font-family:var(--mp-font-family-button)!important}.mp-action-btn-full:hover{background-color:var(--mp-bg-tertiary);border-color:var(--mp-accent-primary);color:var(--mp-accent-primary)}.mp-btn-icon{display:flex;align-items:center;justify-content:center}.mp-segmented-control{display:flex;background-color:var(--mp-bg-tertiary);border-radius:var(--mp-border-radius-md);padding:4px;gap:4px;width:100%;box-sizing:border-box}.mp-segment-opt{flex:1;display:flex;align-items:center;justify-content:center;gap:8px;padding:8px 4px;font-size:13px;font-weight:500;color:var(--mp-text-secondary);cursor:pointer;border-radius:var(--mp-border-radius-sm);transition:all .2s cubic-bezier(.25,1,.5,1);user-select:none;border:1px solid transparent}.mp-segment-opt:hover{color:var(--mp-accent-primary);background-color:rgba(0,0,0,.02)}.mp-segment-opt.selected{background-color:var(--mp-bg-primary);border-color:var(--mp-border-primary);box-shadow:0 1px 3px rgba(0,0,0,.08);font-weight:600}.mp-segment-opt.selected,.mp-segment-opt.selected svg{color:var(--mp-accent-primary)}.mp-shortcut-scroll-container,.mp-theme-scroll-container{padding:4px!important;border:none!important;margin:0!important;background:transparent!important;box-sizing:border-box!important;width:100%!important}.mp-shortcut-wrapper-fixed,.mp-theme-wrapper-fixed{flex:none!important;height:auto!important;max-height:165px!important;width:100%!important;box-sizing:border-box!important;margin-top:12px!important;overflow:hidden;position:relative}.mp-shortcut-option,.mp-shortcut-wrapper-fixed,.mp-theme-option,.mp-theme-wrapper-fixed{border:1px solid var(--mp-border-primary);background-color:var(--mp-bg-secondary);border-radius:var(--mp-border-radius-md)}.mp-shortcut-option,.mp-theme-option{flex-shrink:0;padding:12px;cursor:pointer;display:flex;align-items:center;justify-content:center;text-align:center;font-size:13px;font-weight:500;color:var(--mp-text-secondary);transition:all .2s ease;box-sizing:border-box}@keyframes mp-pulse-recording{0%{box-shadow:0 0 0 0 color-mix(in srgb,var(--mp-accent-edit) 40%,transparent)}to{box-shadow:0 0 0 6px transparent}}.mp-shortcut-option.recording{border-color:var(--mp-accent-edit)!important;color:var(--mp-accent-edit)!important;background-color:color-mix(in srgb,var(--mp-accent-edit) 10%,var(--mp-bg-primary))!important;font-weight:700!important;animation:mp-pulse-recording 1.5s infinite}.mp-shortcut-option:last-child,.mp-theme-option:last-child{margin-bottom:0}.mp-shortcut-option:hover,.mp-theme-option:hover{background-color:var(--mp-bg-tertiary);color:var(--mp-text-primary);box-shadow:var(--mp-shadow-sm);border:1px solid var(--mp-accent-primary)}.mp-shortcut-option.selected,.mp-theme-option.selected{background-color:color-mix(in srgb,var(--mp-accent-primary) 10%,var(--mp-bg-primary));color:var(--mp-accent-primary);border-color:var(--mp-accent-primary);font-weight:700;box-shadow:var(--mp-shadow-md)}.mp-theme-option{margin:5px;width:auto}.mp-shortcut-option{margin:0 0 5px;width:100%;background-color:color-mix(in srgb,var(--mp-bg-primary) 45%,transparent)}.mp-shortcut-option:last-child{margin-bottom:0}.mp-settings-footer{display:flex;justify-content:center;align-items:center;padding-top:16px;margin-top:10px;border-top:1px solid var(--mp-border-primary);flex-shrink:0}.mp-settings-footer .save-button{min-width:160px}.mp-theme-action-row{display:flex;gap:8px;padding:0 5px;margin:5px 0 8px;flex-shrink:0;width:100%;box-sizing:border-box}.mp-theme-split-btn{flex:1;display:flex;align-items:center;justify-content:center;padding:10px;border-radius:var(--mp-border-radius-md);border:1px dashed var(--mp-border-primary);color:var(--mp-text-secondary);background-color:var(--mp-bg-secondary);cursor:pointer;transition:all .2s ease;font-size:13px;font-weight:500}.mp-theme-split-btn:hover{background-color:var(--mp-bg-tertiary);border-color:var(--mp-accent-primary);color:var(--mp-accent-primary);box-shadow:var(--mp-shadow-sm)}.hide-api-key{-webkit-text-security:disc}#mp_ai_api_key_input{margin-bottom:8px}#mp_ai_sys_prompt_input{margin-top:8px;min-height:60px;resize:vertical;width:100%;box-sizing:border-box}.mp-form-hint{color:var(--mp-text-tertiary);font-size:11px;margin-top:4px;display:block}.mp-nav-switch{position:fixed;top:50%;right:20px;transform:translateY(-50%);display:flex;flex-direction:column;background-color:var(--mp-bg-secondary);border:1px solid var(--mp-border-primary);border-radius:var(--mp-border-radius-md);box-shadow:var(--mp-shadow-md);z-index:10000;padding:4px;gap:6px;transition:opacity .3s ease}.mp-nav-switch[style*=\"display: none\"]{pointer-events:none}.mp-nav-btn{width:32px;height:32px;display:flex;align-items:center;justify-content:center;color:var(--mp-text-secondary);border-radius:var(--mp-border-radius-sm);cursor:pointer;transition:all .2s ease;position:relative}.mp-nav-btn svg{width:20px;height:20px}.mp-nav-btn:hover{background-color:var(--mp-bg-tertiary);color:var(--mp-accent-primary);transform:scale(1.05)}.mp-nav-btn:active{transform:scale(.95)}.mp-nav-list-popup{position:absolute;right:45px;top:50%;transform:translateY(-50%) scale(.95);width:300px;max-height:500px;background-color:var(--mp-bg-primary);border:1px solid var(--mp-border-primary);border-radius:var(--mp-border-radius-md);box-shadow:var(--mp-shadow-lg);opacity:0;visibility:hidden;transition:all .2s cubic-bezier(.165,.84,.44,1);display:flex;flex-direction:column;z-index:10001;overflow:visible}.mp-nav-list-popup.active{opacity:1;visibility:visible;transform:translateY(-50%) scale(1)}.mp-keep-open-btn{position:absolute;left:-40px;top:calc(50% + 21px);margin-top:-16px;opacity:0;visibility:hidden;pointer-events:none;transition:all .3s ease;z-index:10002}.mp-keep-open-btn:after{content:\"\";position:absolute;right:-15px;top:-10px;bottom:-10px;width:15px}.mp-keep-open-btn:hover,.mp-nav-list-popup:hover .mp-keep-open-btn{opacity:1;visibility:visible;pointer-events:auto}.mp-nav-header{display:flex;justify-content:space-between;background-color:var(--mp-bg-secondary);border-bottom:1px solid var(--mp-border-primary);padding:6px;gap:4px;flex-shrink:0;border-top-left-radius:inherit;border-top-right-radius:inherit}.mp-nav-tab{flex:1;display:flex;align-items:center;justify-content:center;padding:6px;border-radius:6px;cursor:pointer;color:var(--mp-text-secondary);transition:background .2s,color .2s}.mp-nav-tab:hover{background-color:var(--mp-bg-tertiary)}.mp-nav-tab.active{background-color:var(--mp-accent-primary);color:var(--mp-text-buttons)}.mp-nav-tab svg{width:18px;height:18px;pointer-events:none}.mp-nav-scroll-area{overflow-y:auto;flex:1;scrollbar-width:none;-ms-overflow-style:none;border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mp-nav-scroll-area::-webkit-scrollbar{display:none}.mp-nav-item-wrapper{display:flex;flex-direction:column;border-bottom:1px solid var(--mp-bg-tertiary)}.mp-nav-item-wrapper:last-child{border-bottom:none}.mp-nav-list-item{padding:10px 12px;font-family:var(--mp-font-family-base);font-size:13px;color:var(--mp-text-secondary);cursor:pointer;display:flex;align-items:center;gap:10px;transition:background .1s;position:relative;overflow:hidden}.mp-nav-list-item.main-msg-item{border-bottom:none!important}.mp-nav-list-item.current-item,.mp-nav-list-item:hover{background-color:var(--mp-bg-tertiary)}.mp-nav-list-item.current-item{color:var(--mp-accent-primary);border-left:3px solid var(--mp-accent-primary);font-weight:500}.mp-nav-idx-badge{font-size:10px;background:var(--mp-bg-secondary);padding:0;border-radius:4px;min-width:24px;height:20px;display:flex;align-items:center;justify-content:center;color:var(--mp-text-primary);flex-shrink:0;position:relative;overflow:hidden}.mp-nav-idx-badge.has-topics{cursor:pointer;transition:background-color .2s,color .2s}.mp-nav-idx-badge.has-topics:hover,.mp-nav-item-wrapper.expanded .mp-nav-idx-badge.has-topics{background-color:var(--mp-accent-primary);color:var(--mp-text-buttons)}.mp-nav-idx-number{transition:opacity .2s,transform .2s}.mp-nav-expand-icon{position:absolute;display:flex;align-items:center;justify-content:center;opacity:0;transform:scale(.5) rotate(0deg);transition:opacity .2s,transform .2s cubic-bezier(.165,.84,.44,1)}.mp-nav-expand-icon svg{width:16px;height:16px}.mp-nav-idx-badge.has-topics:hover .mp-nav-idx-number,.mp-nav-item-wrapper.expanded .mp-nav-idx-badge.has-topics .mp-nav-idx-number{opacity:0;transform:scale(.5)}.mp-nav-idx-badge.has-topics:hover .mp-nav-expand-icon{opacity:1;transform:scale(1) rotate(0deg)}.mp-nav-item-wrapper.expanded .mp-nav-idx-badge.has-topics .mp-nav-expand-icon{opacity:1;transform:scale(1) rotate(90deg)}.mp-nav-preview-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}.mp-nav-type-icon{width:13px!important;height:13px!important;flex-shrink:0!important;color:var(--mp-accent-primary)!important;margin-left:auto!important;opacity:1!important;display:flex!important;align-items:center!important}.mp-nav-submenu{font-family:var(--mp-font-family-base);display:none;flex-direction:column;background-color:var(--mp-bg-primary);border-left:2px solid var(--mp-bg-tertiary);margin-left:24px;margin-right:12px;margin-bottom:6px;border-bottom-left-radius:4px;overflow:hidden}.mp-nav-item-wrapper.expanded .mp-nav-submenu{display:flex;animation:mpFadeInDrop .2s ease forwards}.mp-nav-sub-item{padding:6px 8px;font-size:11.5px;color:var(--mp-text-secondary);cursor:pointer;display:flex;align-items:center;transition:background .1s,color .1s;position:relative;overflow:hidden}.mp-nav-sub-item:hover{background-color:var(--mp-bg-tertiary);color:var(--mp-text-primary)}.mp-nav-sub-item:before{content:\"\";position:absolute;left:-2px;top:50%;width:6px;height:2px;background-color:var(--mp-bg-tertiary)}.mp-nav-sub-item:hover:before{background-color:var(--mp-accent-primary)}.mp-nav-sub-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.mp-nav-sub-item.level-1{padding-left:8px;font-weight:500}.mp-nav-sub-item.level-2{padding-left:16px}.mp-nav-sub-item.level-3{padding-left:24px;font-size:11px;opacity:.9}.mp-nav-sub-item.level-4{padding-left:32px;font-size:10.5px;opacity:.8}.mp-nav-sub-item.level-5{padding-left:40px;font-size:10px;opacity:.7}.mp-nav-sub-item.level-6{padding-left:48px;font-size:10px;opacity:.6}.mp-nav-sub-item.current-item{background-color:var(--mp-bg-tertiary);color:var(--mp-accent-primary);font-weight:500}.mp-nav-sub-item.current-item:before{background-color:var(--mp-accent-primary)}.mp-nav-msg-actions{position:absolute;right:0;top:0;bottom:0;padding-left:24px;padding-right:12px;display:flex;align-items:center;gap:4px;background:linear-gradient(90deg,transparent 0,var(--mp-bg-tertiary) 30%,var(--mp-bg-tertiary));transform:translateX(110%);transition:transform .25s cubic-bezier(.25,1,.5,1);z-index:2}.mp-nav-list-item:hover .mp-nav-msg-actions,.mp-nav-sub-item:hover .mp-nav-msg-actions{transform:translateX(0)}.mp-pin-btn{width:24px;height:24px;display:flex;align-items:center;justify-content:center;border-radius:4px;color:var(--mp-text-secondary);cursor:pointer;transition:all .2s}.mp-pin-btn:hover{color:var(--mp-accent-edit)}.mp-pin-btn.is-pinned{color:var(--mp-accent-primary)}.mp-pin-btn svg{width:14px;height:14px}.mp-pinned-carousel-wrapper{position:fixed;top:15px;left:50%;transform:translateX(-50%);z-index:9999;display:flex;align-items:center;gap:8px;pointer-events:none;transition:opacity .3s}.mp-pinned-carousel-wrapper.mp-orient-h{flex-direction:column;padding-bottom:20px}.mp-pinned-carousel-wrapper.mp-orient-v{flex-direction:row;padding-right:20px;gap:15px!important}.mp-pinned-main-wrapper{display:flex;align-items:center;gap:10px;pointer-events:none;transition:opacity .3s ease}.mp-orient-v .mp-pinned-main-wrapper{flex-direction:column}.mp-pinned-carousel-wrapper.is-hidden .mp-pinned-main-wrapper{opacity:0;pointer-events:none}.mp-pinned-carousel-wrapper.is-hidden .mp-pinned-main-wrapper,.mp-pinned-carousel-wrapper.is-hidden .mp-pinned-main-wrapper *{pointer-events:none!important}.mp-orient-h .mp-pinned-viewport{max-width:80vw;overflow:hidden;display:flex;justify-content:center;padding:40px 10px;margin:-40px -10px;mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent);-webkit-mask-image:linear-gradient(90deg,transparent,#000 10%,#000 90%,transparent);min-height:fit-content}.mp-orient-v .mp-pinned-viewport{height:50vh;max-height:350px;width:fit-content;max-width:80vw;overflow:hidden;display:flex;align-items:center;padding:40px 28px;margin:-40px -28px;mask-image:linear-gradient(180deg,transparent,#000 10%,#000 90%,transparent);-webkit-mask-image:linear-gradient(180deg,transparent,#000 10%,#000 90%,transparent)}.mp-orient-h .mp-pinned-track{padding:10px 0}.mp-orient-h .mp-pinned-track,.mp-orient-v .mp-pinned-track{display:flex;align-items:center;gap:12px;transition:transform .4s cubic-bezier(.25,1,.5,1);pointer-events:auto}.mp-orient-v .mp-pinned-track{flex-direction:column;padding:0 10px}.mp-pinned-viewport.is-single-item{mask-image:none!important;-webkit-mask-image:none!important;overflow:visible}.mp-pinned-viewport.is-single-item .mp-pinned-card{opacity:1;transform:scale(1.1);background-color:color-mix(in srgb,var(--mp-accent-primary) 10%,var(--mp-bg-primary));border-color:var(--mp-accent-primary-hover);color:var(--mp-accent-primary);pointer-events:auto}.mp-pinned-card{background:var(--mp-accent-primary);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid var(--mp-border-secondary);border-radius:var(--mp-border-radius-lg);padding:6px 16px;color:var(--mp-text-buttons);font-family:var(--mp-font-family-base);font-size:12px;white-space:nowrap;cursor:pointer;display:flex;align-items:center;gap:4px;transition:all .4s cubic-bezier(.25,1,.5,1);transform:scale(.85);box-shadow:0 4px 12px rgba(0,0,0,.15);min-width:140px;max-width:200px;box-sizing:border-box;flex-shrink:0}.mp-pinned-card:hover{background-color:var(--mp-accent-primary-hover)}.mp-pinned-card.active-center{opacity:1;transform:scale(1.2);background-color:color-mix(in srgb,var(--mp-accent-primary) 10%,var(--mp-bg-primary));border-color:var(--mp-accent-primary-hover);box-shadow:var(--mp-shadow-md);color:var(--mp-accent-primary)}.mp-drag-mode .mp-pinned-card{cursor:default;pointer-events:none}.mp-pinned-card-text{flex:1;overflow:hidden;text-overflow:ellipsis;text-align:center;user-select:none}.mp-pinned-card-unpin{display:flex;align-items:center;justify-content:center;opacity:.6;transition:all .2s}.mp-pinned-card-unpin:hover{opacity:1;color:var(--mp-accent-primary);transform:scale(1.1)}.mp-pinned-card-unpin svg{width:12px;height:12px;pointer-events:none}.mp-carousel-nav{pointer-events:auto;background:var(--mp-bg-secondary);backdrop-filter:blur(8px);color:var(--mp-text-secondary);border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;opacity:.6;z-index:2;border:1px solid var(--mp-text-secondary);flex-shrink:0}.mp-carousel-nav:hover{opacity:1;transform:scale(1.1);background:var(--mp-accent-primary);color:var(--mp-text-buttons)}.mp-carousel-nav.left svg{transform:rotate(180deg)}.mp-carousel-nav.up svg{transform:rotate(-90deg)}.mp-carousel-nav.down svg{transform:rotate(90deg)}.mp-carousel-nav.right svg{transform:rotate(0deg)}.mp-carousel-nav svg{width:14px;height:14px;pointer-events:none}.mp-pinned-actions-panel{display:flex;align-items:center;justify-content:center;gap:8px;opacity:0;transform:scale(.8);transition:all .3s cubic-bezier(.25,1,.5,1);pointer-events:auto;flex-shrink:0}.mp-orient-v .mp-pinned-actions-panel{flex-direction:column}.mp-pinned-carousel-wrapper.is-list-mode .mp-pinned-actions-panel,.mp-pinned-carousel-wrapper.mp-drag-mode .mp-pinned-actions-panel,.mp-pinned-carousel-wrapper:hover .mp-pinned-actions-panel{opacity:1;transform:scale(1)}.mp-pinned-action-btn{background:var(--mp-bg-secondary);backdrop-filter:blur(8px);color:var(--mp-text-secondary);border-radius:var(--mp-border-radius-lg);border:1px solid hsla(0,0%,100%,.1);border-color:var(--mp-text-secondary);width:32px;height:32px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s;flex-shrink:0}.mp-pinned-action-btn.active,.mp-pinned-action-btn:hover{background:var(--mp-accent-primary);color:var(--mp-text-buttons);transform:scale(1.1)}.mp-pinned-action-btn.delete-btn:hover,.mp-pinned-action-btn.mp-reset-btn:hover{background:var(--mp-accent-close);border-color:var(--mp-accent-close-hover)}.mp-pinned-action-btn.mp-save-btn:hover{background:#22c55e;border-color:#006826;color:#fff}.mp-pinned-action-btn svg{width:16px;height:16px;display:block;margin:auto;pointer-events:none}.mp-pinned-carousel-wrapper.mp-drag-mode{cursor:grab}.mp-pinned-carousel-wrapper.mp-drag-mode.mp-is-being-dragged{cursor:grabbing}body.mp-dragging-active,body.mp-dragging-active *{cursor:grabbing!important;user-select:none!important}.mp-drag-crosshair{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;z-index:10;width:0;height:0}.mp-drag-ch-line{position:absolute;background:var(--mp-accent-primary);opacity:.5}.mp-drag-ch-h{width:48px;height:1px;top:0;left:50%;transform:translateX(-50%)}.mp-drag-ch-v{width:1px;height:48px;left:0;top:50%;transform:translateY(-50%)}.mp-drag-ch-dot{position:absolute;width:6px;height:6px;background:var(--mp-accent-primary);border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);box-shadow:0 0 10px var(--mp-accent-primary),0 0 20px rgba(0,0,0,.3)}.mp-rulers-container{position:fixed;top:0;left:0;width:100vw;height:100vh;z-index:9998;pointer-events:none}.mp-ruler-screen-v{width:0;height:100vh;top:0;left:50vw;border-left:1px dashed color-mix(in sRGB,var(--mp-text-primary),transparent 50%);border-right:1px dashed color-mix(in sRGB,var(--mp-text-primary),transparent 50%)}.mp-ruler-screen-h,.mp-ruler-screen-v{position:absolute;background:var(--mp-bg-overlay)}.mp-ruler-screen-h{height:0;width:100vw;left:0;top:50vh;border-top:1px dashed color-mix(in sRGB,var(--mp-text-primary),transparent 50%);border-bottom:1px dashed color-mix(in sRGB,var(--mp-text-primary),transparent 50%)}.mp-ruler-carousel-v{width:1px;height:100vh;top:0;transition:left .04s linear,opacity .2s,box-shadow .2s}.mp-ruler-carousel-h,.mp-ruler-carousel-v{position:absolute;background:var(--mp-accent-primary);opacity:.3}.mp-ruler-carousel-h{height:1px;width:100vw;left:0;transition:top .04s linear,opacity .2s,box-shadow .2s}.mp-rulers-container.mp-snapped-x .mp-ruler-carousel-v,.mp-rulers-container.mp-snapped-y .mp-ruler-carousel-h{opacity:.85;box-shadow:0 0 14px var(--mp-accent-primary),0 0 4px var(--mp-accent-primary)}.mp-ruler-label{position:absolute;font-size:9px;font-weight:700;letter-spacing:.5px;color:hsla(0,0%,100%,.2);pointer-events:none;font-family:var(--mp-font-family-base),monospace}.mp-ruler-label-v{top:10px;transform:translateX(-50%)}.mp-ruler-label-h{left:10px;transform:translateY(-50%)}.mp-pinned-carousel-wrapper.is-list-mode .mp-pinned-viewport{mask-image:none!important;-webkit-mask-image:none!important;max-height:400px;min-height:auto;display:block;overflow-y:auto;overflow-x:hidden;width:300px;padding:10px 0;margin:0;scroll-behavior:smooth;-ms-overflow-style:none;scrollbar-width:none}.mp-pinned-carousel-wrapper.is-list-mode .mp-pinned-viewport::-webkit-scrollbar{display:none}.mp-pinned-carousel-wrapper.is-list-mode .mp-pinned-track{flex-direction:column!important;align-items:center;gap:8px;width:100%;padding:0}@keyframes mpHighlightPulse{0%{transform:scale(1);outline:2px solid transparent;box-shadow:none}20%{transform:scale(1.02);outline:2px solid var(--mp-accent-primary);box-shadow:0 0 15px var(--mp-accent-primary)}80%{transform:scale(1.02);outline:2px solid var(--mp-accent-primary);box-shadow:0 0 15px var(--mp-accent-primary)}to{transform:scale(1);outline:2px solid transparent;box-shadow:none}}.mp-highlight-anim{animation:mpHighlightPulse 2s ease-in-out forwards}@keyframes mpFadeInDrop{0%{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}.mp-backup-section{display:flex;flex-direction:column;gap:12px}.mp-backup-subtitle{font-size:14px;font-weight:600;color:var(--mp-text-primary);margin:0;display:flex;align-items:center;gap:8px}.mp-backup-subtitle svg{width:16px;height:16px;fill:var(--mp-text-secondary)}.mp-backup-divider{height:1px;background-color:var(--mp-border-primary);margin:20px 0}.mp-backup-list{display:flex;flex-direction:column;gap:6px;max-height:240px;overflow-y:auto;padding-right:4px}.mp-backup-item{display:flex;align-items:center;padding:10px 12px;background-color:var(--mp-bg-secondary);border:1px solid var(--mp-border-primary);border-radius:var(--mp-border-radius-md);cursor:pointer;transition:background-color .15s,border-color .15s}.mp-backup-item:hover{background-color:var(--mp-bg-tertiary);border-color:var(--mp-accent-primary)}.mp-backup-item-content{margin-left:12px;display:flex;flex-direction:column}.mp-backup-item-title{font-size:13px;font-weight:500;color:var(--mp-text-primary)}.mp-backup-item-desc{font-size:11px;color:var(--mp-text-tertiary);margin-top:2px}.mp-backup-warning{font-size:11px;color:var(--mp-accent-close);background-color:rgba(240,62,62,.1);padding:8px 12px;border-radius:var(--mp-border-radius-sm);line-height:1.4;text-align:center;font-weight:600}.mp-backup-actions{display:flex;gap:10px;margin-top:12px;justify-content:flex-end}.mp-backup-actions .save-button{flex:1}.mp-form-row{display:flex;gap:12px!important;width:100%!important;margin-bottom:16px!important;font-size:13px!important}.mp-form-row>.mp-form-group{flex:1;margin-bottom:0}@media (max-width:400px){.mp-form-row{flex-direction:column;gap:16px}.mp-form-row>.mp-form-group{margin-bottom:0}}.mp-tag-badge{display:inline-flex;align-items:center;gap:4px;padding:4px 10px;border-radius:var(--mp-border-radius-sm);font-family:var(--mp-font-family-base);font-size:11px;font-weight:500;line-height:1;white-space:nowrap;cursor:default;user-select:none;transition:transform .2s ease;color:var(--mp-text-buttons)}.prompt-tags-container{display:flex;gap:6px;flex-wrap:wrap;margin-top:6px}.mp-tags-modal-content{display:flex;flex-direction:column;gap:16px;max-height:60vh;overflow:hidden;padding-right:4px;scrollbar-width:none}.mp-tags-modal-content::-webkit-scrollbar{display:none}.mp-tag-form{display:flex;flex-direction:column;gap:12px;padding:16px;background-color:var(--mp-bg-secondary);border-radius:var(--mp-border-radius-md);border:1px solid var(--mp-border-primary)}.mp-tag-form-row{display:flex;gap:12px;align-items:flex-end;justify-content:space-around;width:100%;box-sizing:border-box}.mp-tag-color-group{display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;max-width:160px;min-width:80px}.mp-tag-color-label{font-family:var(--mp-font-family-base);font-size:11px;color:var(--mp-text-secondary)}.mp-tag-color-input{width:100%;height:32px;padding:0;margin:0;border:2px solid var(--mp-border-primary);border-radius:var(--mp-border-radius-sm);cursor:pointer;background:none;overflow:hidden;box-sizing:border-box;display:block}.mp-tag-color-input::-webkit-color-swatch-wrapper{padding:0}.mp-tag-color-input::-webkit-color-swatch{border:none;border-radius:2px}.mp-tag-color-input::-moz-color-swatch{border:none;border-radius:2px}.mp-tags-list{display:flex;flex-direction:column;gap:6px}.mp-tag-item{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background-color:var(--mp-bg-secondary);border-radius:var(--mp-border-radius-md);border:1px solid var(--mp-border-primary);transition:background-color .2s ease,border-color .2s ease}.mp-tag-item:hover{background-color:var(--mp-bg-tertiary);border-color:var(--mp-border-secondary)}.mp-tag-item-info{gap:12px;flex:1;min-width:0}.mp-tag-item-info,.mp-tag-item-preview{display:flex;align-items:center}.mp-tag-item-details{display:flex;flex-direction:column;gap:2px;min-width:0;flex:1}.mp-tag-item-comment{font-family:var(--mp-font-family-base);font-size:12px;color:var(--mp-text-tertiary);display:block;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mp-tag-item-actions{display:flex;gap:2px;flex-shrink:0}.mp-tag-action-btn{background:none;border:none;cursor:pointer;width:28px;height:28px;border-radius:var(--mp-border-radius-sm);transition:all .15s ease;display:flex;align-items:center;justify-content:center;color:var(--mp-text-secondary);font-family:var(--mp-font-family-button)}.mp-tag-action-btn:hover{background-color:rgba(0,0,0,.05);transform:scale(1.1)}.mp-tag-action-btn.edit:hover{color:var(--mp-accent-edit)}.mp-tag-action-btn.delete:hover{color:var(--mp-accent-close)}.mp-tag-action-btn svg{width:16px;height:16px}.mp-tags-empty{text-align:center;padding:32px;color:var(--mp-text-tertiary);font-family:var(--mp-font-family-base)}.mp-filter-btn{position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;width:28px;height:28px;border-radius:var(--mp-border-radius-sm);display:flex;align-items:center;justify-content:center;color:var(--mp-text-secondary);transition:all .2s ease;z-index:5;margin-right:5px}.mp-filter-btn:hover{background-color:rgba(0,0,0,.05);transform:translateY(-50%) scale(1.1)}.mp-filter-btn.active,.mp-filter-btn:hover{color:var(--mp-accent-primary)}.mp-filter-btn svg{width:16px;height:16px}.mp-filter-dropdown{position:fixed;min-width:100px;max-width:200px;background-color:var(--mp-bg-primary);border:1px solid var(--mp-border-primary);border-radius:var(--mp-border-radius-md);box-shadow:var(--mp-shadow-lg);display:none;flex-direction:column;max-height:280px;overflow:hidden}.mp-filter-dropdown.visible{display:flex;flex-direction:column}.mp-filter-header{display:flex;justify-content:space-around;flex-direction:row-reverse;align-items:center;padding:4px 6px;border-bottom:1px solid var(--mp-border-primary);background-color:var(--mp-bg-secondary);gap:2px}.mp-filter-manage-btn{background:none;border:none;cursor:pointer;width:28px;height:28px;border-radius:var(--mp-border-radius-sm);display:flex;align-items:center;justify-content:center;color:var(--mp-text-secondary);transition:all .2s ease}.mp-filter-manage-btn:hover{background-color:rgba(0,0,0,.05);transform:scale(1.1);color:var(--mp-accent-edit)}.mp-filter-manage-btn svg{width:16px;height:16px}.mp-filter-clear-btn{background:none;border:none;cursor:pointer;width:28px;height:28px;border-radius:var(--mp-border-radius-sm);display:flex;align-items:center;justify-content:center;color:var(--mp-text-secondary);transition:all .2s ease}.mp-filter-clear-btn:hover{background-color:rgba(0,0,0,.05);transform:scale(1.1);color:var(--mp-accent-close)}.mp-filter-clear-btn svg{width:16px;height:16px}.mp-filter-list{overflow-y:auto;padding:4px;flex:1;scrollbar-width:none}.mp-filter-list::-webkit-scrollbar{display:none}.mp-filter-item{display:flex;align-items:center;gap:10px;padding:7px 10px;cursor:pointer;border-radius:var(--mp-border-radius-sm);transition:background-color .15s ease,box-shadow .15s ease}.mp-filter-item+.mp-filter-item{margin-top:1px}.mp-filter-item.selected,.mp-filter-item:hover{background-color:var(--mp-bg-tertiary)}.mp-filter-tag-preview{flex:1;min-width:0}.mp-filter-empty{padding:24px 16px;text-align:center;color:var(--mp-text-tertiary);font-family:var(--mp-font-family-base);font-size:13px}.mp-accordions-row{display:flex;gap:10px;margin-bottom:15px;flex-shrink:0;align-items:flex-start}.mp-accordions-row>.mp-files-accordion,.mp-accordions-row>.mp-tags-accordion{flex:1;margin:0}.mp-files-accordion,.mp-tags-accordion{border:1px solid var(--mp-border-primary);border-radius:var(--mp-border-radius-md);background-color:var(--mp-bg-secondary);overflow:hidden;margin-top:10px;margin-bottom:20px;flex-shrink:0;transition:border-color .2s;display:flex;flex-direction:column}.mp-files-accordion:hover,.mp-tags-accordion:hover{border-color:var(--mp-accent-primary)}.mp-accordion-header{padding:8px 12px;background-color:var(--mp-bg-secondary);cursor:pointer;font-size:13px;font-weight:600;color:var(--mp-text-secondary);display:flex;justify-content:space-between;align-items:center;user-select:none;transition:background .2s;border-bottom:1px solid transparent;flex-shrink:0}.mp-accordion-header:hover{color:var(--mp-text-primary);background-color:var(--mp-bg-tertiary)}.mp-accordion-header svg{width:16px;height:16px;transition:transform .2s ease;opacity:.6}.mp-files-accordion.open .mp-accordion-header,.mp-tags-accordion.open .mp-accordion-header{border-bottom:1px solid var(--mp-border-primary);background-color:var(--mp-bg-tertiary)}.mp-files-accordion.open .mp-accordion-header svg:last-child,.mp-tags-accordion.open .mp-accordion-header svg:last-child{transform:rotate(180deg);opacity:1;color:var(--mp-accent-primary)}.mp-accordion-content{display:none;background-color:var(--mp-bg-primary);position:relative;flex-direction:column}.mp-files-accordion.open .mp-accordion-content,.mp-tags-accordion.open .mp-accordion-content{display:flex;flex-direction:column;height:190px}.mp-accordion-content .mp-scroll-wrapper{flex:1;display:flex;flex-direction:column;min-height:0}.mp-file-scroll-wrapper,.mp-tags-scroll-wrapper{flex:1;height:100%;overflow-y:auto;padding:12px 10px;scrollbar-width:none;-ms-overflow-style:none;box-sizing:border-box}.mp-dynamic-dropzone.empty-state,.mp-file-scroll-wrapper.empty-state,.mp-tags-scroll-wrapper.empty-state{height:100%;display:flex;justify-content:center;cursor:pointer;background:linear-gradient(135deg,color-mix(in srgb,var(--mp-accent-primary) 8%,transparent),color-mix(in srgb,var(--mp-accent-primary) 3%,transparent));box-shadow:0 8px 32px 0 rgba(0,0,0,.08),inset 0 1px 1px 0 hsla(0,0%,100%,.2)}.mp-file-scroll-wrapper.empty-state:hover,.mp-tags-scroll-wrapper.empty-state:hover{background:linear-gradient(135deg,color-mix(in srgb,var(--mp-accent-primary) 12%,transparent),color-mix(in srgb,var(--mp-accent-primary) 5%,transparent));border-color:var(--mp-accent-primary);box-shadow:0 12px 40px 0 rgba(0,0,0,.12),inset 0 1px 1px 0 hsla(0,0%,100%,.3)}.mp-file-grid.empty-state,.mp-tags-grid.empty-state{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;width:100%;pointer-events:none}.mp-file-empty-icon,.mp-tags-empty-icon{width:48px;height:48px;color:var(--mp-accent-primary);opacity:.8;display:flex;align-items:center;justify-content:center}.mp-file-empty-text,.mp-tags-empty-text{color:var(--mp-text-primary);font-size:14px;font-weight:600;text-align:center}.mp-file-empty-subtext,.mp-tags-empty-subtext{color:var(--mp-text-secondary);font-size:12px;text-align:center}.mp-file-scroll-wrapper::-webkit-scrollbar,.mp-tags-scroll-wrapper::-webkit-scrollbar{display:none}.mp-file-grid{display:grid;grid-template-columns:repeat(auto-fill,70px);gap:10px}.mp-file-grid,.mp-tags-grid{justify-content:center;width:100%}.mp-tags-grid{display:flex;flex-wrap:wrap;gap:8px}.mp-add-file-card,.mp-file-card{position:relative;width:100%;height:70px;border-radius:6px;flex-shrink:0;cursor:pointer;transition:all .2s ease;box-sizing:border-box}.mp-file-card{background:var(--mp-bg-secondary);border:1px solid var(--mp-border-primary);overflow:hidden}.mp-add-file-card,.mp-file-card{display:flex;align-items:center;justify-content:center}.mp-add-file-card{border:2px dashed var(--mp-border-primary);color:var(--mp-text-tertiary);background:transparent}.mp-add-file-card:hover,.mp-dynamic-dropzone:hover{border-color:var(--mp-accent-primary);color:var(--mp-accent-primary);background-color:color-mix(in srgb,var(--mp-accent-primary) 5%,transparent)}.mp-add-icon{width:24px;height:24px;stroke:currentColor;stroke-width:2}.mp-file-card.inactive{opacity:.5;filter:grayscale(100%)}.mp-file-card.inactive:hover{opacity:.9;filter:grayscale(0);border-color:var(--mp-text-tertiary)}.mp-file-card.active{opacity:1;border-color:var(--mp-accent-primary);box-shadow:0 0 0 2px color-mix(in srgb,var(--mp-accent-primary) 20%,transparent)}.mp-file-thumb{width:100%;height:100%;object-fit:cover}.mp-file-icon-gen{width:28px;height:28px;color:var(--mp-text-secondary)}.mp-file-delete-perm{position:absolute;top:2px;right:2px;width:16px;height:16px;background:rgba(0,0,0,.6);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;opacity:0;transition:opacity .2s;z-index:10}.mp-file-delete-perm:hover{background-color:var(--mp-accent-close)}.mp-file-card:hover .mp-file-delete-perm{opacity:1}.mp-tag-select-item{display:inline-flex;align-items:center;padding:6px 12px;border-radius:var(--mp-border-radius-sm);font-family:var(--mp-font-family-base);font-size:12px;font-weight:500;cursor:pointer;transition:all .2s ease;background-color:var(--mp-bg-tertiary);color:var(--mp-text-tertiary);border:1px solid transparent}.mp-tag-select-item:hover{transform:scale(1.05);opacity:.9}.mp-tag-select-item.active{border-color:hsla(0,0%,100%,.3);box-shadow:0 2px 8px rgba(0,0,0,.15)}.mp-tags-accordion-footer{display:flex;justify-content:center;padding:8px;border-top:1px solid var(--mp-border-primary);background-color:var(--mp-bg-secondary);flex-shrink:0;position:relative;z-index:10}.mp-tags-manage-btn{display:flex;align-items:center;gap:6px;background:none;border:none;cursor:pointer;color:var(--mp-accent-primary);font-family:var(--mp-font-family-button);font-size:12px;font-weight:500;padding:6px 12px;border-radius:var(--mp-border-radius-sm);transition:background-color .2s ease}.mp-tags-manage-btn:hover{background-color:color-mix(in srgb,var(--mp-accent-primary) 15%,transparent)}.mp-tags-manage-btn svg{width:14px;height:14px}.mp-icon-container{display:flex;align-items:center;justify-content:center;cursor:help;width:16px;height:16px;color:var(--mp-accent-primary)}.mp-syntax-container{position:relative!important;width:100%;height:100%}.mp-syntax-backdrop{position:absolute!important;top:0;left:0;right:0;bottom:0;overflow:hidden;pointer-events:none;z-index:0;font-family:var(--mp-font-family-editor)!important;font-size:inherit;font-weight:400!important;font-style:normal!important;line-height:inherit;letter-spacing:normal;word-spacing:normal;text-transform:none;text-indent:0;text-shadow:none!important;text-decoration:none!important;white-space:pre-wrap;overflow-wrap:break-word;word-wrap:break-word;word-break:normal;padding:16px;margin:0;border:none;box-sizing:border-box;color:var(--mp-text-primary);background:transparent;user-select:none;-webkit-user-select:none}textarea.mp-syntax-enabled{position:relative!important;z-index:1;background:transparent!important;color:transparent!important;-webkit-text-fill-color:transparent!important;white-space:pre-wrap!important;overflow-wrap:break-word!important;word-wrap:break-word!important;word-break:normal!important;caret-color:var(--mp-syntax-caret)!important}textarea.mp-syntax-enabled::-moz-selection,textarea.mp-syntax-enabled::selection{background:var(--mp-syntax-selection)!important}.mp-syn-esc{color:var(--mp-syntax-escape)}.mp-syn-ign-f{color:var(--mp-syntax-ignore-fence);opacity:.8}.mp-syn-ign-c{color:var(--mp-syntax-ignore-content);opacity:.6}.mp-syn-qt-f{color:var(--mp-syntax-quote-fence)}.mp-syn-qt-c{color:var(--mp-syntax-quote-content)}.mp-syn-dt-f,.mp-syn-dt-k{color:var(--mp-syntax-var-keyword)}.mp-syn-fl-k,.mp-syn-fl-p,.mp-syn-fl-t{color:var(--mp-syntax-file-keyword)}.mp-syn-sl-f{color:var(--mp-syntax-sel-fence)}.mp-syn-sl-h,.mp-syn-sl-hh{color:var(--mp-syntax-sel-header)}.mp-syn-sl-sep{color:var(--mp-syntax-sel-sep);opacity:.7}.mp-syn-sl-p-multi{color:var(--mp-syntax-sel-multi)}.mp-syn-sl-p-single{color:var(--mp-syntax-sel-single)}.mp-syn-sl-p-id{color:var(--mp-syntax-sel-id)}.mp-syn-sl-p-other{color:var(--mp-syntax-sel-other)}.mp-syn-def-s{color:var(--mp-syntax-def-sep)}.mp-syn-def-v{color:var(--mp-syntax-def-val)}.mp-syn-sel-chk{color:var(--mp-syntax-sel-checked)}.mp-syn-free-b,.mp-syn-free-l{color:var(--mp-syntax-free-label);background-color:color-mix(in srgb,var(--mp-syntax-free-bracket) 25%,transparent)}.mp-syn-in-b{color:var(--mp-syntax-in-bracket)}.mp-syn-in-l{color:var(--mp-syntax-in-label)}.mp-syn-in-e{color:var(--mp-syntax-in-eq)}.mp-syn-sil-b{color:var(--mp-syntax-sil-bracket)}.mp-syn-sil-l{color:var(--mp-syntax-sil-label)}.mp-syn-sil-e{color:var(--mp-syntax-sil-eq)}.mp-syn-in-c{color:var(--mp-syntax-context);opacity:.7}.mp-syn-in-v,.mp-syn-sil-v,.mp-syn-var{color:var(--mp-syntax-var)}.mp-syn-var{border-bottom:1px dotted var(--mp-syntax-var)}.mp-syntax-backdrop,textarea.mp-syntax-enabled{tab-size:4;-moz-tab-size:4}.mp-syntax-backdrop span{font-weight:inherit;font-style:inherit}.mp-syntax-backdrop span[class*=mp-syn-]{text-decoration:none!important;text-shadow:none!important}.mp-gist-import-btn{display:inline-flex;align-items:center;justify-content:center;gap:.25rem;padding:.5rem;height:1.75rem;font-size:.75rem;font-weight:500;font-family:var(--mp-font-family-button);line-height:1.625;border-radius:6px;border:1px solid var(--mp-border-secondary);cursor:pointer;background-color:var(--mp-accent-primary);color:var(--mp-text-buttons);box-shadow:var(--mp-shadow-sm);transition:all var(--mp-transition-fast);margin-right:8px;vertical-align:middle;text-decoration:none}.mp-gist-import-btn:hover{background-color:color-mix(in srgb,var(--mp-accent-primary) 10%,var(--mp-bg-primary));color:var(--mp-accent-primary);border-color:var(--mp-accent-primary);box-shadow:var(--mp-shadow-md)}.mp-gist-import-btn:active{transform:scale(.98)}.file-actions{display:flex}.mp-gist-import-btn[data-state=imported],.mp-gist-import-btn[data-state=imported]:active,.mp-gist-import-btn[data-state=imported]:hover{background-color:var(--mp-bg-tertiary);color:var(--mp-text-secondary);box-shadow:none;transform:none;border-color:var(--mp-text-secondary);opacity:.7;cursor:not-allowed!important;pointer-events:auto!important}#mp-notification-container{position:fixed;top:24px;left:50%;transform:translateX(-50%);z-index:999999;display:flex;flex-direction:column;gap:12px;pointer-events:none;align-items:center}.mp-notification{background-color:color-mix(in srgb,var(--mp-accent-primary) 10%,var(--mp-bg-primary));color:var(--mp-accent-primary);border:1px solid var(--mp-accent-primary);padding:10px 20px;border-radius:var(--mp-border-radius-md);box-shadow:var(--mp-shadow-md);font-family:var(--mp-font-family-button);font-size:14px;font-weight:500;opacity:0;transform:translateY(-20px);transition:all var(--mp-transition-fast);display:flex;align-items:center;pointer-events:auto}.mp-notification.mp-show{opacity:1;transform:translateY(0)}.mp-notification.mp-error{background-color:color-mix(in srgb,var(--mp-accent-close) 10%,var(--mp-bg-primary));color:var(--mp-accent-close);border-color:var(--mp-accent-close);box-shadow:0 4px 12px color-mix(in srgb,var(--mp-accent-close) 25%,transparent)}.mp-prompt-meta-highlight{border:2px solid var(--mp-accent-primary)!important;border-radius:6px!important;padding:8px!important;background-color:color-mix(in srgb,var(--mp-accent-primary) 10%,var(--mp-bg-primary))!important;box-shadow:0 0 12px color-mix(in srgb,var(--mp-accent-primary) 40%,transparent)!important;transition:all var(--mp-transition-fast) ease-in-out;cursor:pointer}.mp-prompt-meta-highlight:hover{background-color:color-mix(in srgb,var(--mp-accent-primary) 15%,var(--mp-bg-primary))!important;box-shadow:0 0 16px color-mix(in srgb,var(--mp-accent-primary) 60%,transparent)!important}.mp-prompt-meta-highlight,.mp-prompt-meta-highlight a,.mp-prompt-meta-highlight li,.mp-prompt-meta-highlight span,.mp-prompt-meta-highlight strong,.mp-prompt-meta-highlight svg{color:var(--mp-accent-primary)!important}.mp-prompt-meta-highlight svg{fill:var(--mp-accent-primary)!important}.mp-patreon-button{background-color:#f96854!important;color:#fff!important;display:flex!important;justify-content:center;align-items:center;text-decoration:none;margin-top:8px;transition:filter .2s ease-in-out,transform .1s ease;border:none;cursor:pointer}.mp-patreon-button:hover{filter:brightness(1.1);text-decoration:none;color:#fff!important}.mp-patreon-button:active{filter:brightness(.9);transform:scale(.99)}.kfds-lyt-width-100.mp-patreon-button{box-sizing:border-box}.mp-expanded-filter-dropdown,.mp-filter-dropdown{z-index:100005!important}#__ap_settings_overlay{z-index:99990!important;position:fixed!important}#__ap_lang_modal_overlay{z-index:99999!important;position:fixed!important}#__ap_lang_modal_overlay .lang-box{z-index:100000!important;position:relative!important}.empty-state{padding:10px;text-align:center;color:var(--mp-text-tertiary);font-size:14px}.mp-dialogo-overlay{position:fixed;inset:0;z-index:2147483647;display:flex;align-items:center;justify-content:center;background:var(--mp-bg-overlay);opacity:0;transition:opacity var(--mp-transition-fast);pointer-events:none;padding:16px}.mp-dialogo-overlay.mp-dialogo-visible{opacity:1;pointer-events:auto}.mp-dialogo{background:var(--mp-bg-secondary);border-radius:var(--mp-border-radius-lg);box-shadow:var(--mp-shadow-lg);border:1px solid var(--mp-border-primary);width:100%;max-width:420px;display:flex;flex-direction:column;max-height:calc(100vh - 64px);transform:scale(.95) translateY(10px);opacity:0;transition:transform var(--mp-transition-fast),opacity var(--mp-transition-fast);font-family:var(--mp-font-family-base);outline:none}.mp-dialogo-overlay.mp-dialogo-visible .mp-dialogo{transform:scale(1) translateY(0);opacity:1}.mp-dialogo-header{display:flex;align-items:center;justify-content:space-between;padding:20px 20px 0}.mp-dialogo-title{font-family:var(--mp-font-family-heading);font-size:16px;font-weight:600;color:var(--mp-text-primary);margin:0;line-height:1.3}.mp-dialogo-body{padding:16px 20px;flex:1;overflow-y:auto;min-height:0}.mp-dialogo-message{font-size:14px;line-height:1.6;color:var(--mp-text-secondary);margin:0;overflow-wrap:break-word;word-break:break-word}.mp-dialogo-header:empty+.mp-dialogo-body{padding-top:20px}.mp-dialogo-body::-webkit-scrollbar{width:6px}.mp-dialogo-body::-webkit-scrollbar-track{background:transparent}.mp-dialogo-body::-webkit-scrollbar-thumb{background:var(--mp-border-primary);border-radius:10px}.mp-dialogo-body::-webkit-scrollbar-thumb:hover{background:var(--mp-text-tertiary)}.mp-dialogo-body{scrollbar-width:thin;scrollbar-color:var(--mp-border-primary) transparent}.mp-dialogo-footer{display:flex;align-items:center;justify-content:flex-end;gap:8px;padding:4px 20px 20px}.mp-dialogo-footer:empty{display:none}.mp-dialogo-footer-checkbox{display:flex;align-items:center;margin-right:auto;font-size:12px;color:var(--mp-text-tertiary);user-select:none;cursor:pointer;line-height:1}.mp-dialogo-footer-checkbox .mp-checkbox{margin:0;width:14px;height:14px;flex-shrink:0}.mp-dialogo-footer-checkbox span{margin-left:6px}.mp-dialogo-btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:8px 16px;border:1px solid transparent;border-radius:var(--mp-border-radius-sm);font-family:var(--mp-font-family-button);font-size:13px;font-weight:500;cursor:pointer;transition:all var(--mp-transition-fast);white-space:nowrap;line-height:1.4}.mp-dialogo-btn:hover,.save-button:hover{box-shadow:4px 4px 0 0 var(--mp-text-primary);transform:translate(-2px,-2px)}.mp-dialogo-btn:active,.save-button:active{box-shadow:0 0 0 0 var(--mp-text-primary);transform:translate(0)}.mp-dialogo-btn:focus-visible{outline:2px solid var(--mp-accent-primary);outline-offset:2px}.mp-dialogo-btn-icon{display:flex;align-items:center;justify-content:center;width:16px;height:16px;flex-shrink:0}.mp-dialogo-btn-icon svg{width:100%;height:100%}.mp-dialogo-btn-primary{background:var(--mp-accent-primary);color:var(--mp-text-buttons);border-color:var(--mp-accent-primary)}.mp-dialogo-btn-primary:hover{background:var(--mp-accent-primary-hover);border-color:var(--mp-accent-primary-hover)}.mp-dialogo-btn-secondary{background:transparent;color:var(--mp-text-secondary);border-color:var(--mp-text-primary)}.mp-dialogo-btn-secondary:hover{background:var(--mp-bg-tertiary);color:var(--mp-text-primary);border-color:var(--mp-text-primary)}.mp-dialogo-btn-danger{background:var(--mp-accent-close);color:var(--mp-text-buttons);border-color:var(--mp-accent-close)}.mp-dialogo-btn-danger:hover{background:var(--mp-accent-close-hover);border-color:var(--mp-accent-close-hover)}.mp-dialogo-btn-edit{background:var(--mp-accent-edit);color:var(--mp-text-buttons);border-color:var(--mp-accent-edit)}.mp-dialogo-btn-edit:hover{background:var(--mp-accent-edit-hover);border-color:var(--mp-accent-edit-hover)}.mp-shared-changelog-btn{display:inline-block;font-size:13px;color:var(--mp-accent-primary);cursor:pointer;margin-bottom:10px;text-decoration:underline}.mp-shared-changelog-content{background:var(--mp-bg-secondary);border:1px solid var(--mp-border-primary);border-radius:var(--mp-border-radius-md);padding:10px;font-size:13px;color:var(--mp-text-secondary);max-height:250px;overflow-y:auto;margin-bottom:15px;white-space:pre-wrap;word-break:break-word;overflow-wrap:break-word}.mp-shared-changelog-content h1,.mp-shared-changelog-content h2,.mp-shared-changelog-content h3,.mp-shared-changelog-content h4,.mp-shared-changelog-content h5,.mp-shared-changelog-content h6{margin-top:0;margin-bottom:8px;color:var(--mp-text-primary)}.mp-shared-changelog-content p{margin:0 0 8px}.mp-shared-inline-code{background:var(--mp-bg-tertiary);padding:2px 4px;border-radius:3px;font-family:var(--mp-font-family-editor);color:var(--mp-accent-close)}.mp-shared-block-code{background:var(--mp-bg-tertiary);padding:10px;border-radius:var(--mp-border-radius-sm);overflow-x:auto;max-height:200px;white-space:pre-wrap;word-wrap:break-word;margin-bottom:8px;display:block}.mp-shared-block-code,.mp-shared-changelog-content code{font-family:var(--mp-font-family-editor)!important}.mp-shared-version-highlight{color:var(--mp-btn-add-color)}.mp-shared-info{margin-bottom:15px;padding:12px;background:var(--mp-bg-secondary);border-radius:var(--mp-border-radius-md);border:1px solid var(--mp-border-primary)}.mp-shared-info-manager{margin-top:15px;margin-bottom:0;padding:10px}.mp-shared-info-header{display:flex;justify-content:space-between;align-items:flex-start;gap:10px}.mp-shared-info-header.align-center{align-items:center}.mp-shared-info-list{font-size:13px;color:var(--mp-text-secondary);display:flex;flex-direction:column;gap:6px}.mp-shared-info-label{color:var(--mp-accent-primary)}.mp-shared-btn-secondary{background-color:var(--mp-bg-tertiary)!important;color:var(--mp-text-primary)!important;border:1px solid var(--mp-border-primary)!important}.mp-shared-btn-secondary:hover{background-color:var(--mp-bg-secondary)!important;opacity:.9}.mp-shared-btn-cancel{background:var(--mp-bg-secondary)!important;color:var(--mp-text-primary)!important;border:1px solid var(--mp-border-primary)!important}.mp-diff-column-full{width:100%!important}.mp-shared-cl-overlay{z-index:99995!important}.mp-shared-cl-box{max-width:600px!important;max-height:80vh!important;display:flex!important;flex-direction:column!important;cursor:default}.mp-shared-cl-title{flex-shrink:0;margin-bottom:15px}.mp-shared-cl-body{flex-grow:1;overflow-y:auto;max-height:none!important;margin-bottom:0!important;text-align:left}.mp-shared-intervals{display:flex;gap:10px;flex-wrap:wrap;padding:8px 12px;justify-content:space-between;align-items:center;background-color:var(--mp-bg-secondary);border-radius:var(--mp-border-radius-md);border:1px solid var(--mp-border-primary)}.mp-shared-interval-label{display:flex;align-items:center;gap:5px;cursor:pointer;font-size:13px;color:var(--mp-text-secondary)}.mp-shared-version-badge{color:var(--mp-btn-add-color);font-weight:600;font-size:14px}.mp-shared-info-subtext{font-size:12px;color:var(--mp-text-secondary);margin-top:5px}.mp-shared-info-actions{margin-top:10px;display:flex;gap:8px}.mp-shared-info-actions .flex-1{flex:1}.mp-shared-form-group{margin-top:15px}.mp-shared-modal-footer{margin-top:20px}.mp-diff-view{width:100%!important;flex:1!important;padding:16px!important;border-radius:var(--mp-border-radius-md)!important;border:1px solid var(--mp-border-primary)!important;background-color:var(--mp-bg-secondary)!important;color:var(--mp-text-primary)!important;font-family:var(--mp-font-family-editor)!important;font-size:15px!important;line-height:1.6!important;box-sizing:border-box!important;overflow-y:auto!important;white-space:pre-wrap!important;word-break:break-all!important}.mp-diff-line-unchanged{color:var(--mp-text-primary)}.mp-diff-line-removed{background-color:rgba(239,68,68,.15)!important;color:#ef4444!important;display:block;width:100%}.mp-diff-line-added{background-color:rgba(16,185,129,.15)!important;color:#10b981!important;display:block;width:100%}.mp-diff-line-empty{background-color:transparent;opacity:.3;user-select:none}.mp-diff-column{position:relative!important}.mp-diff-enhanced-edit-btn{position:absolute!important;bottom:12px;right:12px;z-index:10;opacity:.35;transition:opacity .2s ease,transform .2s ease}.mp-diff-enhanced-edit-btn.active,.mp-diff-enhanced-edit-btn:hover{opacity:1!important}.save-button:has(svg){display:inline-flex!important;align-items:center!important;justify-content:center!important}.save-button svg{width:18px!important;height:18px!important;display:block!important;margin:0!important;pointer-events:none}input#__ap_shared_url{color:var(--mp-accent-primary)!important;font-weight:300!important}";

(function() {
    'use strict';
    let isInitialized = false,
      isInitializing = false,
      currentPlatform = null,
      settingsModal = null,
      currentPlaceholderModal = null,
      currentModal = null,
      currentMenu = null,
      currentButton = null,
      pageObserver = null,
      qianwenHealthTimer = null,
      scriptPolicy = null;
    const policyNames = ["PromptManagerPolicy", "dompurify", "default", "cwm-policy"];
    if (window.trustedTypes && window.trustedTypes.createPolicy)
      for (const e of policyNames) try {
        scriptPolicy = window.trustedTypes.createPolicy(e, {
          createHTML: e => e
        });
        break
      } catch (e) {}

    function setSafeInnerHTML(e, t) {
      e && (e.innerHTML = scriptPolicy ? scriptPolicy.createHTML(t) : t)
    }
    const platformSelectors = {
        chatgpt: "#prompt-textarea",
        deepseek: "textarea.ds-scroll-area",
        doubao: 'textarea, [contenteditable="true"]',
        qianwen: 'div[role="textbox"][data-slate-editor="true"], [contenteditable="true"]',
        qwen: ".message-input-textarea",
        zai: "textarea#chat-input",
        yuanbao: 'div.ql-editor[contenteditable="true"]',
        kimi: 'div.chat-input-editor[contenteditable="true"]',
        claude: 'div.ProseMirror[contenteditable="true"]',
        gemini: 'div.ql-editor[contenteditable="true"]',
        grok: 'div.tiptap.ProseMirror[contenteditable="true"], textarea',
        arena: 'textarea[name="message"]'
      },
      LANG_STORAGE_KEY = "UserScriptLang";
    const SUPPORTED_LANGS = ["zh-CN","en"],
      translations = {
  "zh-CN": {"langName":"简体中文","title":"标题","settings":"设置","openConfig":"打开设置","basic":"基础","advanced":"高级","save":"保存","close":"关闭","edit":"编辑","delete":"删除","insert":"插入","select":"选择一个选项:","selectAll":"全选","expand":"展开","collapse":"折叠","pin":"固定","unpin":"取消固定","move":"移动","prompt":"提示词","prompts":"提示词列表","newPrompt":"新建提示词","noSavedPrompts":"没有保存的提示词。","noSearchResults":"未找到匹配的提示词。","countPrompts":"{count} 个提示词","requiredFields":"标题和提示词内容为必填项。","confirmDelete":"确认删除提示词 \"{title}\" 吗?","colorMode":"色彩模式","auto":"自动","light":"亮色","dark":"暗色","search":"搜索","languageSettings":"语言","fillPlaceholders":"填写信息","enablePlaceholders":"动态提示词","autoExecute":"自动发送","smartPredict":"智能预测","smartPredictDesc":"通过自动完成语法、闭合符号和建议变量，简化动态提示词模式下的编写。","featureSettings":"高级选项","filesLabel":"文件","addCardTitle":"添加文件","addCards":"点击选择或拖拽添加","import":"导入提示词","export":"导出提示词","exportGist":"导出到 Gist","inserirGist":"插入到 Gist","imported":"已导入","promptsImported":"成功导入 {count} 个提示词！","errorImporting":"导入文件出错: {error}","errorReadingJSON":"读取 JSON 文件出错。请检查格式。","noPromptsToExport":"没有可导出的提示词。","filesCounter":"文件 ({active}/{total})","confirmDeleteFile":"从内存中删除文件？","confirmLargeFile":"文件较大 ({fileSizeMB}MB)。是否仍要继续？","backupRestoreT":"备份与恢复","exportData":"导出数据","importData":"导入数据","aiSettings":"AI 设置","aiSettingsDesc":"每套配置的 API Key、Base URL、模型与系统提示词","promptBdesc":"所有保存的提示词","themeBackupDesc":"当前主题设置（亮色/暗色模式）","shortcuts":"快捷键","shortcutsDesc":"键盘快捷键设置","prediction":"预测","predictionDesc":"文本预测设置","language":"语言","languageDesc":"界面语言偏好","importWarning":"警告：导入设置将覆盖当前数据。建议先进行备份。","selectFile":"选择文件","exportFile":"导出文件","nothingSelected":"未选择任何类别。","confirmImportB":"这将用文件中的设置替换您当前的设置。是否继续？（{count} 个项目）","importSuccess":"备份导入成功！页面将重新加载。","backupRestore":"备份","exportImport":"导出/导入","globalFiles":"全局文件","globalFilesDesc":"全局保存的文件或附件","aiEnhanceSettings":"“优化提示词”设置","enhanceTooltip":"优化提示词","compareTitle":"对比提示词","originalLabel":"原版","enhancedLabel":"润色版","keepOriginal":"保留原版","useEnhanced":"使用润色版","aiSysPromptInput":"自定义系统提示词 (可选)","noTextToEnhance":"在尝试优化之前，请输入您的提示词","editorNotFound":"未能找到 {platform} 的输入框，请刷新页面后重试。","apiKeyTitle":"需要 API Key","apiKeyDesc":"要配置 API Key 并选择模型，请进入高级设置。","missingKeyError":"缺少 API Key。","invalidResponse":"无效响应。","processError":"处理响应时出错。","connectionError":"API 连接错误。","enhancingPrompt":"正在优化提示词","shortcutsSettings":"快捷键设置","restore":"恢复默认","pressKeyToRecord":"按下按键...","altN":"打开“新建提示词”窗口","altP":"打开提示词列表","altE":"使用 AI 优化提示词","ctrlEnter":"保存并发送当前提示词","shiftEnter":"在动态提示词窗口中换行","shareGist":"分享到 GitHub Gist","tagsManager":"管理标签","tagsInUse":"正在使用的标签","exTag":"例如: img, video, txt...","exCommTag":"例如: 图像生成器","manageTags":"管理标签","createTag":"创建标签","saveTag":"保存","tagName":"标签名称","tagBgColor":"背景颜色","tagTextColor":"文字颜色","tagComment":"备注 (可选)","tagExists":"已存在同名标签","confirmDeleteTag":"确定删除标签 \"{name}\" 吗？它将从所有提示词中移除。","noTags":"创建新标签","filter":"筛选","clearFilters":"清除筛选","tagsLabel":"标签 ({active}/{total})","tags":"标签","syntaxHighlight":"语法高亮","syntaxHighlightDesc":"启用或禁用提示词编辑器中的语法高亮。","syntaxBackupDesc":"语法高亮设置。","syntaxHighlightWarning":"需要重新加载页面以应用更改。","paste":"粘贴","description":"描述","promptSelectTitle":"选择指令","otherOption":"其他","typeHere":"在此输入...","saveEditor":"保存当前提示词而不关闭编辑器","saveSuccess":"保存成功！","confirmUnsaved":"您有未保存的更改。确定不保存就退出吗？","confirmDownloads":"您即将下载 {count} 个独立文件。是否继续？","confirmDownload":"确认下载","dontShowAgain":"不再显示","cancel":"取消","confirm":"确认","exportJsonTitle":"导出为 JSON","exportJsonChoice":"您已选择 {count} 个提示词。您想导出为单个文件还是多个独立文件？","exportSingleFile":"单个文件","exportSeparateFiles":"多个独立文件","aviso":"警告","error":"错误","tagError":"标签名称是必填项。","restoreSuccess":"恢复成功！","resetCaret":"重置输入框光标","deleteSuccess":"删除成功！","saveAndExit":"保存并退出","localFile":"本地文件","localImport":"选择您希望导入提示词的方式。","deletePrompts":"删除 {title} 提示词？","colunas":"列","sortManual":"手动排序","sortAZ":"字母顺序 (A-Z)","sortZA":"字母倒序 (Z-A)","sortNewest":"最新","sortOldest":"最早","sortTags":"按标签分组","sortMostUsed":"最常用","sortLeastUsed":"最少用","copy":"复制","copyT":" (副本)","copySuccess":"复制成功！","sharedPromptConfig":"外部 Prompt","fetchError":"获取元数据失败: ","invalidMetadata":"无效的 JSON。title、version 和 prompt 是必填项。","invalidPromptUrl":"Prompt URL 必须是来自批准来源的 .txt 或 .md 文件。","fetchPromptError":"获取 Prompt 失败: ","updateAvailable":"有可用更新","version":"版本","author":"作者","summary":"摘要","readme":"自述文件","currentVersion":"当前版本","newVersion":"新版本","updateNow":"立即更新","importConfirm":"确认导入","neverUpdate":"从不更新","day":"天","days":"天","metadataUrl":"JSON 元数据 URL","autoUpdateFreq":"更新频率","apply":"应用","sharedRemoved":"共享链接已移除。","invalidUrl":"无效的 URL。仅接受 .json 格式的 Gist、GitHub、GitLab 或 JSDelivr。","promptUpdated":"Prompt 更新成功！","promptImported":"Prompt 已导入并关联！","checkUpdate":"立即更新","alreadyUpToDate":"Prompt 已是最新版本。","IMGnull":"图片不可用：","IMGblock":"图片已屏蔽：","colorTitle":"自定义颜色","colorDialogTitle":"标题颜色","colorDialogMessage":"选择您想对此提示词的标题颜色执行的操作。","changeColor":"更改颜色","removeColor":"移除颜色","diff":"查看差异","editText":"编辑文本","ctrlAltP":"在展开模式下打开提示词列表","pp":"提示词预览","ppDesc":"在常规和展开提示词列表中，将鼠标悬停在提示词上时显示预览。","ln":"常规列表","le":"展开列表","shortcutInfo":"按 Backspace/Delete 清除快捷键","shortcut":"快捷键","aiKeyPlaceholder":"API 密钥","baseURL":"Base URL","model":"模型","noApiConfig":"还没有 API 配置，点 + 新增一个。","cfgName":"配置名称","cfgNamePlaceholder":"例如：我的 OpenAI","cfgNameDefault":"配置","aiCfgHint":"Base URL 填到 /v1 即可，会自动补上 /chat/completions；API Key 可用逗号或空格分隔多个，轮流使用。","missingEndpointError":"未配置 Base URL，请在「设置 → AI 增强」中填写。"},
  "en": {"langName":"English","title":"Title","settings":"Settings","openConfig":"Open Settings","basic":"Basic","advanced":"Advanced","save":"Save","close":"Close","edit":"Edit","delete":"Delete","insert":"Insert","select":"Select an option:","selectAll":"Select All","expand":"Expand","collapse":"Collapse","pin":"Pin","unpin":"Unpin","move":"Move","prompt":"Prompt","prompts":"Prompts","newPrompt":"New Prompt","noSavedPrompts":"No saved prompts.","noSearchResults":"No prompts match search.","countPrompts":"{count} prompts","requiredFields":"Title and Prompt are required.","confirmDelete":"Delete prompt \"{title}\"?","colorMode":"Color Mode","auto":"Auto","light":"Light","dark":"Dark","search":"Search","languageSettings":"Language","fillPlaceholders":"Fill in Information","enablePlaceholders":"Dynamic Prompt","autoExecute":"Auto Send","smartPredict":"Smart Predict","smartPredictDesc":"Facilitates writing in Dynamic Prompt mode by completing syntax, closing symbols, and suggesting variables.","featureSettings":"Advanced Options","filesLabel":"Files","addCardTitle":"Add Files","addCards":"click to select or drag to add","import":"Import Prompt","export":"Export Prompt","exportGist":"Export to Gist","inserirGist":"Insert into Gist","imported":"Imported","promptsImported":"{count} prompts imported successfully!","errorImporting":"Error importing file: {error}","errorReadingJSON":"Error reading JSON file. Check formatting.","noPromptsToExport":"No prompts to export.","filesCounter":"Files ({active}/{total})","confirmDeleteFile":"Delete file from memory?","confirmLargeFile":"Large file ({fileSizeMB}MB). Continue anyway?","backupRestoreT":"Backup and Restore","exportData":"Export Data","importData":"Import Data","aiSettings":"AI Settings","aiSettingsDesc":"API keys, base URL, model and system prompt for each configuration","promptBdesc":"All saved prompts","themeBackupDesc":"Current theme settings (Light/Dark mode)","shortcuts":"Shortcuts","shortcutsDesc":"Keyboard shortcut settings","prediction":"Prediction","predictionDesc":"Text prediction settings","language":"Language","languageDesc":"Interface language preference","importWarning":"Warning: Importing settings will overwrite current data. It is recommended to make a backup first.","selectFile":"Select File","exportFile":"Export File","nothingSelected":"No category selected.","confirmImportB":"This will replace your current settings with those from the file. Do you want to continue? ({count} items)","importSuccess":"Backup imported successfully! The page will reload.","backupRestore":"Backup","exportImport":"Export/Import","globalFiles":"Global Files","globalFilesDesc":"Files or attachments saved globally","aiEnhanceSettings":"\"Enhance Prompt\" Settings","enhanceTooltip":"Enhance Prompt","compareTitle":"Compare Prompts","originalLabel":"Original","enhancedLabel":"Enhanced Version","keepOriginal":"Keep Original","useEnhanced":"Use Enhanced","aiSysPromptInput":"Custom System Prompt (Optional)","noTextToEnhance":"Enter your prompt before trying to enhance it","editorNotFound":"Could not find the text input for {platform}. Refresh the page and try again.","apiKeyTitle":"API Key Required","apiKeyDesc":"To configure your API Key and select the Model, go to advanced settings.","missingKeyError":"API Key missing.","invalidResponse":"Invalid response.","processError":"Error processing response.","connectionError":"Connection error with API.","enhancingPrompt":"Enhancing Prompt","shortcutsSettings":"Keyboard Shortcuts","restore":"Restore Default","pressKeyToRecord":"Press a key...","altN":"Opens New Prompt creation window","altP":"Opens Prompt List","altE":"Enhance Prompt with AI","ctrlEnter":"Save and Send current prompt","shiftEnter":"Adds Line Break in Dynamic Prompt modal","shareGist":"Share on GitHub Gist","tagsManager":"Manage Tags","tagsInUse":"Tags in Use","exTag":"Ex: img, video, txt...","exCommTag":"Ex: Image Generators","manageTags":"Manage Tags","createTag":"Create Tag","saveTag":"Save","tagName":"Tag Name","tagBgColor":"Background Color","tagTextColor":"Text Color","tagComment":"Comment (optional)","tagExists":"A tag with this name already exists","confirmDeleteTag":"Delete the tag \"{name}\"? It will be removed from all prompts.","noTags":"Create new Tags","filter":"Filter","clearFilters":"Clear Filters","tagsLabel":"Tags ({active}/{total})","tags":"Tags","syntaxHighlight":"Syntax Highlighting","syntaxHighlightDesc":"Enables or disables syntax highlighting in the prompt editor.","syntaxBackupDesc":"Syntax highlighting settings.","syntaxHighlightWarning":"Requires page reload to apply changes.","paste":"Paste","description":"Description","promptSelectTitle":"Choose the Instruction","otherOption":"Other","typeHere":"Type here...","saveEditor":"Save current prompt without closing the editor","saveSuccess":"Saved Successfully!","confirmUnsaved":"You have unsaved changes. Exit without saving?","confirmDownloads":"You are about to download {count} individual files. Continue?","confirmDownload":"Confirm Download","dontShowAgain":"Don't show again","cancel":"Cancel","confirm":"Confirm","exportJsonTitle":"Export as JSON","exportJsonChoice":"You have selected {count} prompts. Do you want to export as a single file or as separate files?","exportSingleFile":"Single File","exportSeparateFiles":"Separate Files","aviso":"Warning","error":"Error","tagError":"Tag Name is required.","restoreSuccess":"Restored Successfully!","resetCaret":"Reset Input Caret","deleteSuccess":"Deleted Successfully!","saveAndExit":"Save and Exit","localFile":"Local File","localImport":"Select how you want to import your prompts.","deletePrompts":"Delete {title} prompts?","colunas":"Columns","sortManual":"Manual Order","sortAZ":"Alphabetical Order (A-Z)","sortZA":"Alphabetical Order (Z-A)","sortNewest":"Newest","sortOldest":"Oldest","sortTags":"Group by Tags","sortMostUsed":"Most Used","sortLeastUsed":"Least Used","copy":"Copy","copyT":" (Copy)","copySuccess":"Copied Successfully!","sharedPromptConfig":"External Prompt","fetchError":"Failed to fetch metadata: ","invalidMetadata":"Invalid JSON. title, version, and prompt are required.","invalidPromptUrl":"Prompt URL must be .txt or .md from approved sources.","fetchPromptError":"Failed to fetch prompt: ","updateAvailable":"Update Available","version":"Version","author":"Author","summary":"Summary","readme":"README","currentVersion":"Current Version","newVersion":"New Version","updateNow":"Update Now","importConfirm":"Confirm Import","neverUpdate":"Never Update","day":"day","days":"days","metadataUrl":"JSON Metadata URL","autoUpdateFreq":"Update Frequency","apply":"Apply","sharedRemoved":"Share link removed.","invalidUrl":"Invalid URL. Only Gist, GitHub, GitLab, or JSDelivr in .json format are accepted.","promptUpdated":"Prompt updated successfully!","promptImported":"Prompt imported and linked!","checkUpdate":"Update Now","alreadyUpToDate":"The prompt is already up to date.","IMGnull":"Image Unavailable: ","IMGblock":"Image Blocked: ","colorTitle":"Customize Color","colorDialogTitle":"Title Color","colorDialogMessage":"Choose what you want to do with the title color of this prompt.","changeColor":"Change Color","removeColor":"Remove Color","diff":"View Differences","editText":"Edit Text","ctrlAltP":"Opens the Prompt List in Expanded Mode","pp":"Prompt Preview","ppDesc":"Displays the prompt preview when hovering over it in the Normal and Expanded prompt list.","ln":"Normal List","le":"Expanded List","shortcutInfo":"Backspace/Delete to clear the Shortcut","shortcut":"Shortcut","aiKeyPlaceholder":"API Key","baseURL":"Base URL","model":"Model","noApiConfig":"No API configuration yet. Click + to add one.","cfgName":"Configuration name","cfgNamePlaceholder":"e.g. My OpenAI","cfgNameDefault":"Configuration","aiCfgHint":"Enter the Base URL up to /v1 - /chat/completions is appended automatically. Separate multiple API keys with commas or spaces to rotate them.","missingEndpointError":"Base URL is not configured. Please fill it in Settings → AI Enhance."}
      };
    let currentLang = "en",
      languageModal = null;

    function getTranslation(e, t = {}) {
      let n = translations[currentLang]?.[e] || translations.en[e];
      return Object.entries(t).forEach(([e, t]) => n = n.replace(`{${e}}`, t)), n
    }
    async function determineLanguage() {
      const e = await GM_getValue("UserScriptLang");
      if (e && SUPPORTED_LANGS.includes(e)) return void(currentLang = e);
      const t = (navigator.language || navigator.userLanguage || "").toLowerCase();
      currentLang = /^zh/.test(t) ? "zh-CN" : "en"
    }
    let currentActiveFileIds = new Set;
    async function getGlobalFiles() {
      return await GM_getValue("GlobalFiles", [])
    }
    async function saveGlobalFile(e) {
      const t = await getGlobalFiles();
      return t.find(t => t.name === e.name && t.size === e.size) || (t.push(e), await GM_setValue("GlobalFiles", t)), t
    }
    async function deleteGlobalFile(e) {
      let t = await getGlobalFiles();
      t = t.filter(t => t.id !== e), await GM_setValue("GlobalFiles", t)
    }

    function dataURLtoFile(e, t) {
      for (var n = e.split(","), a = n[0].match(/:(.*?);/)[1], o = atob(n[1]), s = o.length, r = new Uint8Array(s); s--;) r[s] = o.charCodeAt(s);
      return new File([r], t, {
        type: a
      })
    }
    const
      DEFAULT_TAGS_CONFIG = {
        tags: {},
        activeFilters: [],
        sortMode: "manual"
      };
    let currentTagsConfig = JSON.parse(JSON.stringify(DEFAULT_TAGS_CONFIG)),
      tagsModal = null,
      currentPromptTags = new Set;
    async function loadTagsConfig() {
      const e = await GM_getValue("PromptTags", null);
      currentTagsConfig = e ? {
        ...DEFAULT_TAGS_CONFIG,
        ...e
      } : JSON.parse(JSON.stringify(DEFAULT_TAGS_CONFIG))
    }
    async function saveTagsConfig() {
      await GM_setValue("PromptTags", currentTagsConfig)
    }

    function getTagStyle(e) {
      return {
        backgroundColor: e.bgColor || "#7071fc",
        color: e.textColor || "#ffffff"
      }
    }
    async function createOrUpdateTag(e) {
      const {
        name: t,
        bgColor: n,
        textColor: a,
        comment: o
      } = e;
      if (!t) return false;
      const s = t.toLowerCase().trim();
      return currentTagsConfig.tags[s] = {
        name: t.trim(),
        bgColor: n || "#7071fc",
        textColor: a || "#ffffff",
        comment: o || ""
      }, await saveTagsConfig(), true
    }
    async function deleteTag(e) {
      const t = e.toLowerCase().trim();
      delete currentTagsConfig.tags[t];
      const n = await getAll();
      for (const e of n) e.tags && e.tags.includes(t) && (e.tags = e.tags.filter(e => e !== t), await updateById(e.id, {
        tags: e.tags
      }));
      currentTagsConfig.activeFilters = currentTagsConfig.activeFilters.filter(e => e !== t), await saveTagsConfig()
    }

    function getTag(e) {
      const t = e.toLowerCase().trim();
      return currentTagsConfig.tags[t] || null
    }

    function getAllTags() {
      return Object.values(currentTagsConfig.tags)
    }
    async function toggleTagFilter(e) {
      const t = e.toLowerCase().trim(),
        n = currentTagsConfig.activeFilters.indexOf(t);
      n > -1 ? currentTagsConfig.activeFilters.splice(n, 1) : currentTagsConfig.activeFilters.push(t), await saveTagsConfig()
    }
    async function clearTagFilters() {
      currentTagsConfig.activeFilters = [], currentTagsConfig.sortMode = "manual", await saveTagsConfig()
    }

    function isTagFilterActive(e) {
      const t = e.toLowerCase().trim();
      return currentTagsConfig.activeFilters.includes(t)
    }

    function promptMatchesFilter(e) {
      return 0 === currentTagsConfig.activeFilters.length || !(!e.tags || 0 === e.tags.length) && e.tags.some(e => currentTagsConfig.activeFilters.includes(e.toLowerCase()))
    }

    function generatePromptId() {
      const e = new Date,
        t = (e, t = 2) => String(e).padStart(t, "0");
      return [e.getFullYear(), t(e.getMonth() + 1), t(e.getDate()), t(e.getHours()), t(e.getMinutes()), t(e.getSeconds()), t(e.getMilliseconds(), 3)].join("") + t(Math.floor(1e3 * performance.now() % 1e3), 3) + t(Math.floor(1e3 * Math.random()), 3)
    }

    function normalizePositions(e) {
      return e.forEach((e, t) => {
        e.position = t + 1
      }), e
    }
    async function getRawPrompts() {
      return await GM_getValue("Prompts", {})
    }
    async function saveRawPrompts(e) {
      await GM_setValue("Prompts", e)
    }

    function promptsToStorage(e) {
      const t = {};
      return e.forEach(e => {
        const {
          id: n,
          ...a
        } = e;
        t[n] = a
      }), t
    }

    window.__apCustomShortcutsMap = [];
    const debounce = (e, t) => {
      let n;
      return (...a) => {
        clearTimeout(n), n = setTimeout(() => e.apply(this, a), t)
      }
    };
    async function getAll() {
      let e = await getRawPrompts();
      if (Array.isArray(e)) {
        const t = {};
        e.forEach((e, n) => {
          const a = e.id || generatePromptId() + String(n).padStart(3, "0"),
            {
              id: o,
              position: s,
              ...r
            } = e;
          t[a] = {
            ...r,
            position: n + 1
          }
        }), await saveRawPrompts(t), e = t
      }
      const t = Object.entries(e).map(([e, t]) => ({
        id: e,
        ...t
      }));
      return t.sort((e, t) => (e.position || 0) - (t.position || 0)), normalizePositions(t), window.__apCustomShortcutsMap = t.filter(e => e.shortcut).map(e => ({
        shortcut: e.shortcut,
        prompt: e
      })), t
    }
    async function addItem(e) {
      const t = await getAll(),
        n = generatePromptId(),
        a = document.querySelector("#__ap_title"),
        o = document.querySelector("#__ap_custom_shortcut_btn"),
        s = document.querySelector("#__ap_modal_overlay");
      s && !s.classList.contains("mp-hidden") && a && (e.color = a.dataset.promptColor || "", o && (e.shortcut = o.dataset.shortcut || ""));
      const r = {
        id: n,
        title: e.title || "",
        color: e.color || "",
        text: e.text || "",
        usePlaceholders: e.usePlaceholders || false,
        autoExecute: e.autoExecute || false,
        isFixed: e.isFixed || false,
        activeFileIds: e.activeFileIds || [],
        shortcut: e.shortcut || "",
        tags: e.tags || [],
        usageCount: e.usageCount || 0,
        isShared: e.isShared || false,
        sharedUrl: e.sharedUrl || "",
        updateInterval: undefined !== e.updateInterval ? e.updateInterval : 7,
        lastUpdateCheck: e.lastUpdateCheck || Date.now(),
        version: e.version || "1.0.0",
        author: e.author || "",
        summary: e.summary || "",
        changelogText: e.changelogText || "",
        position: 0
      };
      let i = t.findIndex(e => !e.isFixed);
      return -1 === i && (i = t.length), t.splice(i, 0, r), normalizePositions(t), await saveRawPrompts(promptsToStorage(t)), r
    }
    async function updateById(e, t) {
      const n = await getRawPrompts();
      if (Array.isArray(n)) return await getAll(), updateById(e, t);
      if (!n[e]) return false;
      const a = document.querySelector("#__ap_title"),
        o = document.querySelector("#__ap_custom_shortcut_btn"),
        s = document.querySelector("#__ap_modal_overlay");
      s && !s.classList.contains("mp-hidden") && s.dataset.promptId === e && undefined !== t.title && (t.color = a.dataset.promptColor || "", o && (t.shortcut = o.dataset.shortcut || ""));
      const r = {
        ...t
      };
      return delete r.id, delete r.position, n[e] = {
        ...n[e],
        ...r
      }, await saveRawPrompts(n), true
    }
    async function removeById(e) {
      const t = (await getAll()).filter(t => t.id !== e);
      normalizePositions(t), await saveRawPrompts(promptsToStorage(t))
    }
    const THEME_STORAGE_KEY = "Theme",
      DEFAULT_THEME_CONFIG = {
        mode: "auto"
      };
    let mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)"),
      currentThemeConfig = JSON.parse(JSON.stringify(DEFAULT_THEME_CONFIG));
    const DEFAULT_THEME_VARS = {
      light: {
          "--mp-bg-primary": "#ffffff",
          "--mp-bg-secondary": "#f8f9fa",
          "--mp-bg-tertiary": "#e2e4e6",
          "--mp-bg-overlay": "rgba(10, 10, 10, 0.5)",
          "--mp-bg-disabled": "#e9ecef",
          "--mp-text-primary": "#212529",
          "--mp-text-secondary": "#495057",
          "--mp-text-tertiary": "#868e96",
          "--mp-text-buttons": "#ffffff",
          "--mp-text-disabled": "#adb5bd",
          "--mp-border-primary": "#dee2e6",
          "--mp-border-secondary": "#ced4da",
          "--mp-focus-ring": "rgba(112, 113, 252, 0.4)",
          "--mp-accent-primary": "#7071fc",
          "--mp-accent-primary-hover": "#595ac9",
          "--mp-success": "#28a745",
          "--mp-warning": "#ffc107",
          "--mp-error": "#dc3545",
          "--mp-info": "#17a2b8",
          "--mp-switch-knob": "#ffffff",
          "--mp-shadow-sm": "0 1px 2px rgba(0, 0, 0, 0.04)",
          "--mp-shadow-md": "0 4px 12px rgba(0, 0, 0, 0.1)",
          "--mp-syntax-escape": "#ff6b6b",
          "--mp-syntax-ignore-fence": "#868e96",
          "--mp-syntax-ignore-content": "#adb5bd",
          "--mp-syntax-quote-fence": "#2b8a3e",
          "--mp-syntax-quote-content": "#40c057",
          "--mp-syntax-var-keyword": "#15aabf",
          "--mp-syntax-var-flag": "#0c8599",
          "--mp-syntax-file-keyword": "#e64980",
          "--mp-syntax-sel-fence": "#4c6ef5",
          "--mp-syntax-sel-header": "#3b5bdb",
          "--mp-syntax-sel-multi": "#339af0",
          "--mp-syntax-sel-single": "#ff8787",
          "--mp-syntax-sel-id": "#da77f2",
          "--mp-syntax-sel-other": "#fa7b05",
          "--mp-syntax-sel-sep": "#adb5bd",
          "--mp-syntax-free-bracket": "#fab005",
          "--mp-syntax-free-label": "#e67700",
          "--mp-syntax-in-bracket": "#d6336c",
          "--mp-syntax-in-label": "#a61e4d",
          "--mp-syntax-in-eq": "#f06595",
          "--mp-syntax-sil-bracket": "#845ef7",
          "--mp-syntax-sil-label": "#6741d9",
          "--mp-syntax-sil-eq": "#b197fc",
          "--mp-syntax-var": "#099268",
          "--mp-syntax-context": "#868e96",
          "--mp-syntax-def-sep": "#f03e3e",
          "--mp-syntax-def-val": "#ff8787",
          "--mp-syntax-sel-checked": "#20c997",
          "--mp-syntax-caret": "var(--mp-text-primary, #000000)",
          "--mp-syntax-selection": "color-mix(in srgb, var(--mp-accent-primary, #4c6ef5) 30%, transparent)"
        },
        dark: {
          "--mp-bg-primary": "#212529",
          "--mp-bg-secondary": "#2c2c30",
          "--mp-bg-tertiary": "#343a40",
          "--mp-bg-overlay": "rgba(0, 0, 0, 0.7)",
          "--mp-bg-disabled": "#3d4248",
          "--mp-text-primary": "#f8f9fa",
          "--mp-text-secondary": "#e9ecef",
          "--mp-text-tertiary": "#adb5bd",
          "--mp-text-buttons": "#ffffff",
          "--mp-text-disabled": "#6c757d",
          "--mp-border-primary": "#495057",
          "--mp-border-secondary": "#868e96",
          "--mp-focus-ring": "rgba(112, 113, 252, 0.6)",
          "--mp-accent-primary": "#7071fc",
          "--mp-accent-primary-hover": "#595ac9",
          "--mp-success": "#34c759",
          "--mp-warning": "#ff9f0a",
          "--mp-error": "#ff4d4f",
          "--mp-info": "#5ac8fa",
          "--mp-switch-knob": "#ffffff",
          "--mp-shadow-sm": "0 1px 2px rgba(0, 0, 0, 0.15)",
          "--mp-shadow-md": "0 4px 12px rgba(0, 0, 0, 0.25)",
          "--mp-syntax-escape": "#ff8787",
          "--mp-syntax-ignore-fence": "#adb5bd",
          "--mp-syntax-ignore-content": "#868e96",
          "--mp-syntax-quote-fence": "#69db7c",
          "--mp-syntax-quote-content": "#b2f2bb",
          "--mp-syntax-var-keyword": "#3bc9db",
          "--mp-syntax-var-flag": "#99e9f2",
          "--mp-syntax-file-keyword": "#f783ac",
          "--mp-syntax-sel-fence": "#91a7ff",
          "--mp-syntax-sel-header": "#bac8ff",
          "--mp-syntax-sel-multi": "#74c0fc",
          "--mp-syntax-sel-single": "#ffc9c9",
          "--mp-syntax-sel-id": "#e599f7",
          "--mp-syntax-sel-other": "#fa7b05",
          "--mp-syntax-sel-sep": "#868e96",
          "--mp-syntax-free-bracket": "#ffd43b",
          "--mp-syntax-free-label": "#fab005",
          "--mp-syntax-in-bracket": "#f06595",
          "--mp-syntax-in-label": "#fcc2d7",
          "--mp-syntax-in-eq": "#faa2c1",
          "--mp-syntax-sil-bracket": "#b197fc",
          "--mp-syntax-sil-label": "#d0bfff",
          "--mp-syntax-sil-eq": "#9775fa",
          "--mp-syntax-var": "#38d9a9",
          "--mp-syntax-context": "#ced4da",
          "--mp-syntax-def-sep": "#ff6b6b",
          "--mp-syntax-def-val": "#ffc9c9",
          "--mp-syntax-sel-checked": "#63e6be"
        }
    };

    function applyTheme(e) {
      if (!e) return;
      let t = e.mode;
      "auto" === t && (t = mediaQueryList.matches ? "dark" : "light");
      const n = DEFAULT_THEME_VARS[t] || DEFAULT_THEME_VARS.light,
        a = document.getElementById("mp-theme-override"),
        o = document.createElement("style");
      a && a.remove(), o.id = "mp-theme-override";
      let s = ":root {";
      Object.entries(n).forEach(([e, t]) => {
        "object" != typeof t && (s += `${e}: ${t} !important;`)
      }), s += "}", setSafeInnerHTML(o, s), document.head.appendChild(o), document.documentElement.setAttribute("data-mp-theme", t)
    }

    async function loadThemeConfig() {
      const e = await GM_getValue(THEME_STORAGE_KEY);
      if (e) try {
        const t = JSON.parse(e);
        currentThemeConfig = {
          mode: ["auto", "light", "dark"].includes(t && t.mode) ? t.mode : "auto"
        }
      } catch (e) {
        console.error(e)
      }
      applyTheme(currentThemeConfig)
    }

    async function saveThemeConfig(e) {
      currentThemeConfig = {
        ...currentThemeConfig,
        ...e
      }, ["auto", "light", "dark"].includes(currentThemeConfig.mode) || (currentThemeConfig.mode = "auto"), await GM_setValue(THEME_STORAGE_KEY, JSON.stringify(currentThemeConfig)), applyTheme(currentThemeConfig)
    }

    const EXTRA_STYLE_ID = "pml-extra-styles",
      EXTRA_STYLESHEET = ".mp-ai-cfg-toolbar{display:flex;gap:6px;align-items:center;margin-bottom:8px}.mp-ai-cfg-toolbar select{flex:1;min-width:0}.mp-ai-cfg-btn{flex:0 0 auto;width:32px;height:32px;display:flex;align-items:center;justify-content:center;padding:0;border:1px solid var(--mp-border-primary);border-radius:8px;background:var(--mp-bg-secondary);color:var(--mp-text-primary);cursor:pointer;transition:background .15s ease}.mp-ai-cfg-btn:hover{background:var(--mp-bg-tertiary)}.mp-ai-cfg-btn.mp-ai-cfg-danger{color:var(--mp-accent-close);border-color:var(--mp-accent-close)}.mp-ai-cfg-btn[disabled]{opacity:.4;cursor:not-allowed}.mp-ai-cfg-field{margin-bottom:8px}.mp-ai-cfg-label{display:block;font-size:11px;font-family:var(--mp-font-family-base);color:var(--mp-text-secondary);margin-bottom:4px}.mp-ai-cfg-hint{font-size:11px;color:var(--mp-text-tertiary);margin-top:4px;line-height:1.5}.mp-ai-cfg-empty{padding:10px;text-align:center;font-size:12px;color:var(--mp-text-tertiary);border:1px dashed var(--mp-border-primary);border-radius:8px}.mp-ai-cfg-hidden{display:none !important}";

    function injectGlobalStyles() {
      const e = "pml-styles";
      if (!document.getElementById(e)) {
        const t = MP_EMBEDDED_CSS ||
          ".mp-overlay{position:fixed;inset:0}.mp-modal{position:relative}.mp-hidden{display:none}",
          n = document.createElement("style");
        n.id = e, setSafeInnerHTML(n, t), document.head.appendChild(n)
      }
      if (document.getElementById(EXTRA_STYLE_ID)) return;
      const a = document.createElement("style");
      a.id = EXTRA_STYLE_ID, setSafeInnerHTML(a, EXTRA_STYLESHEET), document.head.appendChild(a)
    }

    function createCustomTooltip(e, t, n = "top", a = true) {
      if (!e) return;
      e._removeTooltipEvents && e._removeTooltipEvents();
      let o = null,
        s = null;
      const r = `tooltip-${Math.random().toString(36).substr(2,9)}`;
      e.setAttribute("aria-describedby", r), e.setAttribute("tabindex", "0");
      const i = "string" == typeof t ? {
          text: t
        } : t,
        l = i.actions && i.actions.length > 0 || i.previewMode,
        c = () => {
          if (clearTimeout(s), !document.body.contains(e)) return;
          if (window.clearAllCustomTooltips(), o) return;
          o = document.createElement("div"), o.className = `mp-tooltip mp-tooltip-${n}`, l && o.classList.add("mp-tooltip-interactive"), o.setAttribute("role", "tooltip"), o.setAttribute("id", r), o.style.visibility = "hidden", l && (o.addEventListener("mouseenter", () => clearTimeout(s)), o.addEventListener("mouseleave", () => {
            s = setTimeout(() => d(true), 150)
          }));
          const t = document.createElement("div");
          if (t.className = "mp-tooltip-content", i.previewMode && i.text) {
            const e = document.createElement("div");
            e.className = "mp-tooltip-preview-container";
            const n = document.createElement("div");
            n.className = "mp-tooltip-preview-text", n.textContent = i.text, e.appendChild(n), t.appendChild(e), requestAnimationFrame(() => {
              if ("function" == typeof setupEnhancedScroll) {
                const e = setupEnhancedScroll(n, null, "var(--mp-border-radius-sm)");
                e && (e.style.overflow = "hidden")
              }
            })
          } else if (i.text) {
            const e = document.createElement("div");
            e.className = "mp-tooltip-text", e.textContent = i.text, t.appendChild(e)
          }
          if (i.actions && i.actions.length > 0) {
            const e = document.createElement("div");
            e.className = `mp-tooltip-actions mp-tooltip-actions-${i.layout||"row"}`, i.actions.forEach(t => {
              const n = document.createElement("button");
              if (n.className = "mp-tooltip-btn", t.icon) {
                const e = document.createElement("span");
                e.className = "mp-tooltip-btn-icon", "string" == typeof t.icon ? "function" == typeof setSafeInnerHTML ? setSafeInnerHTML(e, t.icon) : e.innerHTML = t.icon : t.icon instanceof HTMLElement && e.appendChild(t.icon), n.appendChild(e)
              }
              if (t.label) {
                const e = document.createElement("span");
                e.textContent = t.label, n.appendChild(e)
              }
              t.style && Object.assign(n.style, t.style), n.addEventListener("click", e => {
                e.stopPropagation(), "function" == typeof t.action && t.action(), d(true)
              }), e.appendChild(n)
            }), t.appendChild(e)
          }
          const a = document.createElement("div");
          a.className = "mp-tooltip-arrow", o.appendChild(t), o.appendChild(a), document.body.appendChild(o), o.offsetWidth;
          const c = e.getBoundingClientRect(),
            p = o.offsetWidth,
            m = o.offsetHeight;
          let u, g;
          "bottom" === n ? u = c.bottom + 8 + window.scrollY : "top" === n ? u = c.top - m - 8 + window.scrollY : "left" === n ? (u = c.top + c.height / 2 - m / 2 + window.scrollY, g = c.left - p - 8) : "right" === n && (u = c.top + c.height / 2 - m / 2 + window.scrollY, g = c.right + 8), "top" !== n && "bottom" !== n || (g = c.left + c.width / 2 - p / 2);
          g < 10 ? g = 10 : g + p > window.innerWidth - 10 && (g = window.innerWidth - p - 10), u < window.scrollY && (u = 10 + window.scrollY), o.style.left = `${Math.round(g)}px`, o.style.top = `${Math.round(u)}px`, requestAnimationFrame(() => {
            o && (o.style.visibility = "visible", o.classList.add("visible"))
          })
        },
        d = (e = false) => {
          if (clearTimeout(s), !o) return;
          const t = o;
          o = null, t.classList.remove("visible");
          setTimeout(() => {
            document.body.contains(t) && document.body.removeChild(t)
          }, e ? 0 : 150)
        },
        p = () => c(),
        m = () => {
          s = setTimeout(() => d(false), 100)
        },
        u = () => c(),
        g = () => d(true),
        f = () => setTimeout(() => d(true), 10),
        h = () => {
          a && window.clearAllCustomTooltips()
        };
      e.addEventListener("mouseenter", p), e.addEventListener("mouseleave", m), e.addEventListener("focus", u), e.addEventListener("blur", g), e.addEventListener("mousedown", f), e.addEventListener("click", h), e._removeTooltipEvents = () => {
        e.removeEventListener("mouseenter", p), e.removeEventListener("mouseleave", m), e.removeEventListener("focus", u), e.removeEventListener("blur", g), e.removeEventListener("mousedown", f), e.removeEventListener("click", h), d(true)
      }
    }
    window.clearAllCustomTooltips = () => {
      document.querySelectorAll(".mp-tooltip").forEach(e => {
        document.body.contains(e) && document.body.removeChild(e)
      })
    };

    function getDontShowAgain(e) {
      try {
        return !!GM_getValue("DontShowAgain", {})[e]
      } catch (e) {
        return false
      }
    }

    function setDontShowAgain(e) {
      try {
        const t = GM_getValue("DontShowAgain", {});
        t[e] = true, GM_setValue("DontShowAgain", t)
      } catch (e) {}
    }

    function createDialogo(e) {
      const t = "string" == typeof e ? {
        type: "alert",
        message: e
      } : {
        ...e
      };
      t.title || (t.title = getTranslation("aviso"));
      const n = t.dontShowAgainId;
      return n && getDontShowAgain(n) ? Promise.resolve("dont_show_again") : new Promise(e => {
        const a = "alert" === t.type && !t.actions,
          o = false !== t.closable && !a,
          s = document.createElement("div");
        s.className = "mp-dialogo-overlay", s.setAttribute("role", "presentation");
        const r = document.createElement("div");
        r.className = "mp-dialogo", r.setAttribute("role", "dialog"), r.setAttribute("aria-modal", "true"), t.title && r.setAttribute("aria-label", t.title), t.width && (r.style.maxWidth = t.width), r.onclick = e => e.stopPropagation();
        const i = document.createElement("div");
        if (i.className = "mp-dialogo-header", t.title) {
          const e = document.createElement("h3");
          e.className = "mp-dialogo-title", e.textContent = t.title, i.appendChild(e)
        }
        if (o) {
          const e = document.createElement("button");
          e.className = "mp-modal-close-btn", setSafeInnerHTML(e, ICONS.close), e.addEventListener("click", () => g()), i.appendChild(e)
        }
        r.appendChild(i);
        const l = document.createElement("div");
        if (l.className = "mp-dialogo-body", t.message)
          if ("string" == typeof t.message) {
            const e = document.createElement("p");
            e.className = "mp-dialogo-message", e.textContent = t.message, l.appendChild(e)
          } else t.message instanceof HTMLElement && l.appendChild(t.message);
        t.content instanceof HTMLElement && l.appendChild(t.content), r.appendChild(l);
        const c = document.createElement("div");
        c.className = "mp-dialogo-footer";
        let d = null;
        if (n) {
          const e = document.createElement("label");
          e.className = "mp-dialogo-footer-checkbox", d = document.createElement("input"), d.type = "checkbox", d.className = "mp-checkbox";
          const t = document.createElement("span");
          t.textContent = getTranslation("dontShowAgain"), e.appendChild(d), e.appendChild(t), c.appendChild(e)
        }
        let p = t.actions;
        p || (p = "confirm" === t.type ? [{
          label: getTranslation("cancel"),
          style: "danger",
          value: false
        }, {
          label: getTranslation("confirm"),
          style: "primary",
          value: true
        }] : [{
          label: "OK",
          style: "primary",
          value: undefined
        }]), p.forEach((e, t) => {
          const a = document.createElement("button");
          if (a.className = `mp-dialogo-btn mp-dialogo-btn-${e.style||"primary"}`, e.icon) {
            const t = document.createElement("span");
            t.className = "mp-dialogo-btn-icon", "string" == typeof e.icon ? setSafeInnerHTML(t, e.icon) : e.icon instanceof HTMLElement && t.appendChild(e.icon), a.appendChild(t)
          }
          if (e.label) {
            const t = document.createElement("span");
            t.textContent = e.label, a.appendChild(t)
          }
          const o = undefined !== e.value ? e.value : t;
          a.addEventListener("click", t => {
            t.stopPropagation(), "function" == typeof e.action && e.action(), n && d && d.checked && setDontShowAgain(n), g(o)
          }), c.appendChild(a)
        }), r.appendChild(c), s.appendChild(r), document.body.appendChild(s), requestAnimationFrame(() => {
          s.classList.add("mp-dialogo-visible")
        });
        let m = false;
        const u = "confirm" !== t.type && undefined;

        function g(t = u) {
          m || (m = true, s.classList.remove("mp-dialogo-visible"), setTimeout(() => {
            document.body.contains(s) && document.body.removeChild(s), e(t)
          }, 200))
        }
        setTimeout(() => {
          const e = c.querySelector("button");
          e && e.focus()
        }, 150)
      })
    }

    function showNotification(e, t = "success") {
      let n = document.getElementById("mp-notification-container");
      n || (n = document.createElement("div"), n.id = "mp-notification-container", document.body.appendChild(n));
      const a = document.createElement("div");
      a.className = `mp-notification mp-${t}`, setSafeInnerHTML(a, `<span>${e}</span>`), n.appendChild(a), requestAnimationFrame(() => {
        a.classList.add("mp-show")
      }), setTimeout(() => {
        a.classList.remove("mp-show"), setTimeout(() => a.remove(), 300)
      }, 3e3)
    }
    const ICONS = {
        cloudFile: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.913 7.029C7.751 5.772 9.626 4 12.5 4c2.13 0 3.65 1.08 4.607 2.33a7.1 7.1 0 0 1 1.285 2.745c.785.127 1.695.43 2.505 1.014C22.092 10.948 23 12.373 23 14.5s-.908 3.551-2.103 4.412C19.753 19.735 18.41 20 17.5 20H13v-6.586l1.293 1.293a1 1 0 0 0 1.414-1.414l-3-3a1 1 0 0 0-1.414 0l-3 3a1 1 0 1 0 1.414 1.414L11 13.414V20H7.5c-1.077 0-2.67-.315-4.022-1.288C2.075 17.701 1 16.026 1 13.5s1.075-4.201 2.478-5.212c1.124-.809 2.413-1.163 3.435-1.26z" fill="currentColor"/></svg>',
        monitor: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
        globo: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
        plus: '<svg xmlns="http://www.w3.org/2000/svg" class="mp-add-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>',
        sol: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',
        lua: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>',
        close: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M195.2 195.2a64 64 0 0 1 90.5 0L512 421.5l226.3-226.3a64 64 0 0 1 90.5 90.5L602.5 512l226.3 226.3a64 64 0 0 1-90.5 90.5L512 602.5 285.7 828.8a64 64 0 0 1-90.5-90.5L421.5 512 195.2 285.7a64 64 0 0 1 0-90.5"/></svg>',
        file: '<svg xmlns="http://www.w3.org/2000/svg" class="mp-file-icon-gen" fill="none" viewBox="0 0 24 28"><path d="m16.5 0 7 7v15.6c0 2.25 0 3.38-.57 4.16a3 3 0 0 1-.67.67c-.79.57-1.91.57-4.16.57H5.9c-2.25 0-3.37 0-4.16-.57a3 3 0 0 1-.67-.67C.5 25.97.5 24.85.5 22.6V5.4c0-2.25 0-3.38.57-4.16a3 3 0 0 1 .67-.67C2.52 0 3.65 0 5.9 0z" fill="url(#a)"/><path d="m16.5 0 7 7h-3.8c-1.12 0-1.68 0-2.1-.22a2 2 0 0 1-.88-.87c-.22-.43-.22-.99-.22-2.11z" fill="var(--mp-switch-knob)" fill-opacity=".55"/><path d="M6 11.78c0-.43.35-.78.78-.78h10.44a.78.78 0 1 1 0 1.57H6.78a.8.8 0 0 1-.78-.79m0 4c0-.43.35-.78.78-.78h10.44a.78.78 0 1 1 0 1.57H6.78a.8.8 0 0 1-.78-.79m.11 4.04c0-.44.35-.79.79-.79h6.32a.78.78 0 1 1 0 1.57H6.9a.8.8 0 0 1-.79-.78" fill="var(--mp-switch-knob)"/><defs><linearGradient id="a" x1="1.5" y1="-1" x2="23.5" y2="28" gradientUnits="userSpaceOnUse"><stop stop-color="var(--mp-accent-primary)"/><stop offset="1" stop-color="var(--mp-accent-primary-hover)"/></linearGradient></defs></svg>',
        expand: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>',
        collapse: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/></svg>',
        folder: '<svg xmlns="http://www.w3.org/2000/svg" style="width:16px;height:16px;margin-right:8px;vertical-align:text-bottom;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>',
        chevron: '<svg xmlns="http://www.w3.org/2000/svg" class="mp-acc-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 9l6 6 6-6"/></svg>',
        edit: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 416 432"><path fill="currentColor" d="m366 237 45 35q7 6 3 14l-43 74q-4 8-13 4l-53-21q-18 13-36 21l-8 56q-1 9-11 9h-85q-9 0-11-9l-8-56q-19-8-36-21l-53 21q-9 3-13-4L1 286q-4-8 3-14l45-35q-1-12-1-21t1-21L4 160q-7-6-3-14l43-74q5-8 13-4l53 21q18-13 36-21l8-56q2-9 11-9h85q10 0 11 9l8 56q19 8 36 21l53-21q9-3 13 4l43 74q4 8-3 14l-45 35q2 12 2 21t-2 21m-158.5 54q30.5 0 52.5-22t22-53-22-53-52.5-22-52.5 22-22 53 22 53 52.5 22"/></svg>',
        delete: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 304 384"><path fill="currentColor" d="M21 341V85h256v256q0 18-12.5 30.5T235 384H64q-18 0-30.5-12.5T21 341M299 21v43H0V21h75L96 0h107l21 21z"/></svg>',
        export: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M21 14a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 0 0-2 0v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1m-9.71 1.71a1 1 0 0 0 .33.21 1 1 0 0 0 .76 0 1 1 0 0 0 .33-.21l4-4a1 1 0 0 0-1.42-1.42L13 12.59V3a1 1 0 0 0-2 0v9.59l-2.29-2.3a1 1 0 1 0-1.42 1.42Z"/></svg>',
        add: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path fill="currentColor" fill-rule="evenodd" d="M8 1a1 1 0 0 0-2 0v5H1a1 1 0 0 0 0 2h5v5a1 1 0 1 0 2 0V8h5a1 1 0 1 0 0-2H8z" clip-rule="evenodd"/></svg>',
        import: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M8.71 7.71 11 5.41V15a1 1 0 0 0 2 0V5.41l2.29 2.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-4-4a1 1 0 0 0-.33-.21 1 1 0 0 0-.76 0 1 1 0 0 0-.33.21l-4 4a1 1 0 1 0 1.42 1.42M21 14a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 0 0-2 0v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1"/></svg>',
        info: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12ZM9 5h2v2H9V5Zm0 4h2v6H9V9Z"/></svg>',
        drag: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M278.6 9.4a32 32 0 0 0-45.3 0l-64 64A32 32 0 0 0 192 128h32v96h-96v-32a32.1 32.1 0 0 0-54.7-22.7l-64 64a32 32 0 0 0 0 45.3l64 64A32 32 0 0 0 128 320v-32h96v96h-32a32.1 32.1 0 0 0-22.7 54.7l64 64a32 32 0 0 0 45.3 0l64-64A32 32 0 0 0 320 384h-32v-96h96v32a32.1 32.1 0 0 0 54.7 22.7l64-64a32 32 0 0 0 0-45.3l-64-64A32 32 0 0 0 384 192v32h-96v-96h32a32.1 32.1 0 0 0 22.7-54.7l-64-64z"/></svg>',
        pin: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="17" x2="12" y2="22"></line><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"></path></svg>',
        save: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="currentColor" d="M11.5 12A2.5 2.5 0 0 1 9 9.5V3H7.5A4.5 4.5 0 0 0 3 7.5v17a4.5 4.5 0 0 0 4 4.47V18.5A2.5 2.5 0 0 1 9.5 16h13a2.5 2.5 0 0 1 2.5 2.5v10.47a4.5 4.5 0 0 0 4-4.47V10.45a4.5 4.5 0 0 0-1.32-3.18l-2.95-2.95A4.5 4.5 0 0 0 22 3.02V9.5a2.5 2.5 0 0 1-2.5 2.5zM20 3h-9v6.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5zm3 26H9V18.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5z"/></svg>',
        restore: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" fill-rule="evenodd" d="M256 448A192 192 0 0 1 65.5 279.8l42.3-5.3a149.4 149.4 0 1 0 25.6-103.8h80v42.6H64V64h42.7v71.3A192 192 0 1 1 256 448" clip-rule="evenodd"/></svg>',
        magic: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>',
        loading: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" style="width:100%;height:100%;display:block;"><circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-dasharray="80" stroke-dashoffset="20"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.8s" repeatCount="indefinite" /></circle></svg>',
        prompts: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M9.812 1.238a1 1 0 0 1 .73 1.11l-.023.115-3.106 11.591a1 1 0 0 1-1.956-.403l.024-.114L8.587 1.946a1 1 0 0 1 1.225-.708M4.707 4.293a1 1 0 0 1 0 1.414L2.414 8l2.293 2.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0m6.586 0a1 1 0 0 1 1.32-.083l.094.083 3 3a1 1 0 0 1 .083 1.32l-.083.094-3 3a1 1 0 0 1-1.497-1.32l.083-.094L13.586 8l-2.293-2.293a1 1 0 0 1 0-1.414"/></svg>',
        navUp: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M9.3 5.7a1 1 0 0 1 1.4 0l5.8 5.7a1 1 0 0 1-1.4 1.5L10 7.8l-5 5a1 1 0 1 1-1.5-1.4z"/></svg>',
        navMenu: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.1 5.5H15M5 10h10M5 14.4h10"/></svg>',
        navDown: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" transform="rotate(180)" viewBox="0 0 20 20"><path fill="currentColor" d="M9.3 5.7a1 1 0 0 1 1.4 0l5.8 5.7a1 1 0 0 1-1.4 1.5L10 7.8l-5 5a1 1 0 1 1-1.5-1.4z"/></svg>',
        expImp: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m21 16-4 4-4-4m4 4V4M3 8l4-4 4 4M7 4v16"/></svg>',
        tag: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',
        filter: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
        filterAct: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
        paste: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M12.75 2c1.16 0 2.11.88 2.24 2h1.76A2.25 2.25 0 0 1 19 6.1v.15a.75.75 0 0 1-.65.74l-.1.01a.75.75 0 0 1-.74-.65l-.01-.1a.75.75 0 0 0-.65-.74l-.1-.01h-2.13a2.2 2.2 0 0 1-1.87 1h-3.5a2.2 2.2 0 0 1-1.87-1H5.25a.75.75 0 0 0-.74.65l-.01.1v13.5c0 .39.28.7.65.75h3.1a.75.75 0 0 1 .74.65l.01.1a.75.75 0 0 1-.75.75h-3a2.25 2.25 0 0 1-2.24-2.1L3 19.77V6.24A2.25 2.25 0 0 1 5.1 4h1.91a2.25 2.25 0 0 1 2.24-2zm6 6A2.25 2.25 0 0 1 21 10.1v9.65A2.25 2.25 0 0 1 18.9 22h-6.65a2.25 2.25 0 0 1-2.24-2.1l-.01-.15v-9.5a2.25 2.25 0 0 1 2.1-2.24l.15-.01zm-6-4.5h-3.5a.75.75 0 0 0 0 1.5h3.5a.75.75 0 1 0 0-1.5"/></svg>',
        search: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M12.6 23.26h-.02l-.07.03h-.03l-.07-.03h-.03v.01l-.02.43v.02l.02.02.1.07h.02l.11-.07.01-.02v-.02l-.01-.42q0-.02-.02-.02m.27-.11-.19.09-.01.01v.01l.02.43v.02l.2.1.04-.01v-.02l-.03-.61q0-.02-.02-.02m-.72 0h-.02l-.01.02-.03.61.01.03h.02l.2-.1.01-.02.02-.43v-.01l-.01-.01z"/><path fill="currentColor" d="M10.5 4a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M2 10.5a8.5 8.5 0 1 1 15.18 5.26l3.65 3.65a1 1 0 0 1-1.42 1.42l-3.65-3.65A8.5 8.5 0 0 1 2 10.5M9.5 7a1 1 0 0 1 1-1 4.5 4.5 0 0 1 4.5 4.5 1 1 0 1 1-2 0A2.5 2.5 0 0 0 10.5 8a1 1 0 0 1-1-1"/></g></svg>',
        expand2: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M8.74 12.96c-.27.04-1.06.12-2.08.12-1.25 0-2.47-.14-3.65-.27a2.1 2.1 0 0 1-1.83-1.84 32 32 0 0 1-.26-3.63c0-1.17.1-2.02.14-2.3"/><path d="M3.9 8.25a2.1 2.1 0 0 0 1.84 1.84q1.3.17 2.66.18c.91 0 1.8-.09 2.67-.18a2.1 2.1 0 0 0 1.83-1.84q.16-1.3.18-2.65c.02-1.35-.08-1.8-.18-2.65a2.1 2.1 0 0 0-1.83-1.84C10.2 1 9.3.9 8.4.9s-1.8.1-2.66.2a2.1 2.1 0 0 0-1.83 1.84q-.17 1.29-.18 2.65c-.01 1.36.08 1.79.18 2.65m2.82-.97 3.23-3.23"/><path d="M9.95 6.87c.53-.53.53-1.94 0-2.82-.88-.53-2.3-.53-2.82 0"/></g></svg>',
        grid2: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 2h6a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m10 0h6a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1"/></svg>',
        grid3: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 2h2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m5 1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm9-1h2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1"/></svg>',
        check: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 12 4.95 4.95 10.6-10.6m-20.5 5.7L7 17M17.6 6.4l-5.3 5.3"/></svg>',
        copy: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M352 115h90a6 6 0 0 0 6-6 28 28 0 0 0-10-21.3l-77.1-64.2a37 37 0 0 0-20.6-7.4 7.4 7.4 0 0 0-7.4 7.4V96c.1 10.5 8.6 19 19.1 19" fill="currentColor"/><path d="M307 96V16H176a32 32 0 0 0-32 32v336a32 32 0 0 0 32 32h240a32 32 0 0 0 32-32V141h-96a45 45 0 0 1-45-45" fill="currentColor"/><path d="M116 412V80H96a32 32 0 0 0-32 32v352a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32v-20H148a32 32 0 0 1-32-32" fill="currentColor"/></svg>',
        link: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path fill="currentColor" d="M4.83 15h2.91a5 5 0 0 1-1.55-2H5a3 3 0 1 1 0-6h3a3 3 0 0 1 2.82 4h2.1a5 5 0 0 0 .08-.83v-.34A4.83 4.83 0 0 0 8.17 5H4.83A4.83 4.83 0 0 0 0 9.83v.34A4.83 4.83 0 0 0 4.83 15"/><path fill="currentColor" d="M15.17 5h-2.91a5 5 0 0 1 1.55 2H15a3 3 0 1 1 0 6h-3a3 3 0 0 1-2.82-4h-2.1a5 5 0 0 0-.08.83v.34A4.83 4.83 0 0 0 11.83 15h3.34A4.83 4.83 0 0 0 20 10.17v-.34A4.83 4.83 0 0 0 15.17 5"/></svg>',
        color: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M20 20H4c-1.1 0-2 .9-2 2s.9 2 2 2h16c1.1 0 2-.9 2-2s-.9-2-2-2M7.11 17c.48 0 .91-.3 1.06-.75l1.01-2.83h5.65l.99 2.82c.16.46.59.76 1.07.76.79 0 1.33-.79 1.05-1.52L13.69 4.17a1.8 1.8 0 0 0-3.38 0L6.06 15.48c-.28.73.27 1.52 1.05 1.52m4.83-11.4h.12l2.03 5.79H9.91z"/></svg>'
      };

    function createPromptButton(e = "top") {
      const t = document.createElement("div");
      t.className = "mp-prompt-wrapper";
      const n = document.createElement("div");
      n.className = `mp-sliding-pill-container mp-dir-${e}`;
      const a = "left" === e || "right" === e ? "top" : "left",
        o = document.createElement("button");
      o.type = "button", o.className = "mp-btn-part mp-btn-ai", o.setAttribute("data-testid", "composer-button-ai-enhance"), setSafeInnerHTML(o, ICONS.magic), createCustomTooltip(o, getTranslation("enhanceTooltip"), a), o.addEventListener("click", e => {
        e.stopPropagation(), handleInstantPageEnhancement()
      });
      const s = document.createElement("button");
      s.type = "button", s.className = "mp-btn-part mp-btn-paste", s.setAttribute("data-testid", "composer-button-paste"), setSafeInnerHTML(s, ICONS.paste), createCustomTooltip(s, getTranslation("paste"), a), s.addEventListener("click", async e => {
        e.stopPropagation();
        try {
          let e = "";
          const t = [];
          try {
            const n = await navigator.clipboard.read();
            for (const a of n)
              for (const n of a.types)
                if ("text/plain" === n) {
                  const t = await a.getType(n);
                  e = await t.text()
                } else if (!n.startsWith("text/")) {
              const e = await a.getType(n),
                o = n.split("/")[1] || "bin",
                s = new File([e], `clipboard-${Date.now()}.${o}`, {
                  type: n
                });
              t.push(s)
            }
          } catch (t) {
            try {
              e = await navigator.clipboard.readText()
            } catch (e) {}
          }(e || t.length > 0) && await insertPrompt({
            text: e,
            dynamicFiles: t
          }, true, true)
        } catch (e) {}
      });
      const r = document.createElement("button");
      return r.type = "button", r.className = "mp-btn-part mp-btn-main", r.setAttribute("data-testid", "composer-button-prompts"), setSafeInnerHTML(r, ICONS.prompts), createCustomTooltip(r, getTranslation("prompts"), a), n.appendChild(o), n.appendChild(s), n.appendChild(r), t.appendChild(n), t
    }

    function createSettingsModal() {
      let themeDraft = {
        ...currentThemeConfig
      };
      const overlay = document.createElement("div");
      overlay.className = "mp-overlay mp-hidden", overlay.id = "__ap_settings_overlay";
      overlay.onclick = e => {
        e.target === overlay && (applyTheme(currentThemeConfig), hideModal(overlay))
      };
      const box = document.createElement("div");
      box.className = "mp-modal-box", box.style.width = "420px !important", box.style.maxHeight = "85vh !important", box.onclick = e => e.stopPropagation();
      const html = ` <div class="mp-settings-container"><div class="mp-tabs-header"><button class="mp-tab-btn active" data-tab="basic">${getTranslation("basic")}</button><button class="mp-tab-btn" data-tab="advanced">${getTranslation("advanced")}</button></div><div class="mp-scroll-wrapper" style="flex:1; overflow:hidden;"><div id="mp-settings-scroll-area" style="padding: 0 4px 12px 4px; overflow-y: auto;"><div class="mp-tab-content active" id="tab-basic" style="margin-bottom: 16px; margin-top: 16px;"><div class="mp-form-row"><div class="mp-form-group"><label class="mp-label">${getTranslation("languageSettings")}</label><button id="mp-btn-open-lang" class="mp-action-btn-full"><span id="mp-current-lang-display" style="font-weight:600;">${translations[currentLang]?.langName||currentLang}</span><span class="mp-btn-icon">${ICONS.globo}</span></button></div><div class="mp-form-group"><label class="mp-label">${getTranslation("backupRestore")}</label><button id="mp-btn-open-backup" class="mp-action-btn-full"><span style="font-weight:600;">${getTranslation("exportImport")}</span><span class="mp-btn-icon">${ICONS.expImp}</span></button></div></div><div class="mp-form-group" style="margin-bottom: 0px;"><label class="mp-label">${getTranslation("colorMode")}</label><div class="mp-segmented-control"><div class="mp-segment-opt" data-val="auto">${ICONS.monitor} <span>${getTranslation("auto")}</span></div><div class="mp-segment-opt" data-val="light">${ICONS.sol} <span>${getTranslation("light")}</span></div><div class="mp-segment-opt" data-val="dark">${ICONS.lua} <span>${getTranslation("dark")}</span></div></div></div></div><div class="mp-tab-content" id="tab-advanced" style="margin-bottom: 16px; margin-top: 16px;"><div class="mp-form-group"><label class="mp-label">${getTranslation("featureSettings")}</label><div class="mp-settings-switch-container" style="margin-bottom: 8px;"><span id="mp-preview-prompt-lbl">${getTranslation("pp")}</span><div style="display: flex; gap: 12px; align-items: center;"><div style="display: flex; align-items: center; gap: 6px;"><span style="font-size: 11px; color: var(--mp-text-secondary); font-family: var(--mp-font-family-base);">${getTranslation("ln")}</span><div class="mp-switch"><input type="checkbox" id="mp_setting_preview_normal" /><label for="mp_setting_preview_normal">Toggle</label></div></div><div style="display: flex; align-items: center; gap: 6px;"><span style="font-size: 11px; color: var(--mp-text-secondary); font-family: var(--mp-font-family-base);">${getTranslation("le")}</span><div class="mp-switch"><input type="checkbox" id="mp_setting_preview_expand" /><label for="mp_setting_preview_expand">Toggle</label></div></div></div></div><div class="mp-settings-switch-container" style="margin-bottom: 8px;"><span id="mp-smart-predict-lbl"> ${getTranslation("smartPredict")} </span><div class="mp-switch"><input type="checkbox" id="mp_setting_prediction" /><label for="mp_setting_prediction">Toggle</label></div></div><div class="mp-settings-switch-container"><span id="mp-syntax-lbl"> ${getTranslation("syntaxHighlight")} </span><div style="display: flex; align-items: center; gap: 8px;"><div class="mp-switch"><span id="mp-syntax-info-icon" style="cursor: help !important;" class="mp-help-icon">${ICONS.info}</span><input type="checkbox" id="mp_setting_syntax" /><label for="mp_setting_syntax">Toggle</label></div></div></div></div><div class="mp-form-group"><label class="mp-label mp-label-row" style="display: flex; justify-content: space-between; align-items: center;"> ${getTranslation("aiEnhanceSettings")} </label><div class="mp-ai-cfg-toolbar"><select id="mp_ai_active_select" class="form-input"></select><button type="button" id="mp_ai_add_btn" class="mp-ai-cfg-btn">${ICONS.plus}</button><button type="button" id="mp_ai_del_btn" class="mp-ai-cfg-btn mp-ai-cfg-danger">${ICONS.delete}</button></div><div id="mp_ai_cfg_empty" class="mp-ai-cfg-empty mp-ai-cfg-hidden">${getTranslation("noApiConfig")}</div><div id="mp_ai_cfg_form"><div class="mp-ai-cfg-field"><label class="mp-ai-cfg-label" for="mp_ai_name_input">${getTranslation("cfgName")}</label><input type="text" id="mp_ai_name_input" class="form-input" placeholder="${getTranslation("cfgNamePlaceholder")}"></div><div class="mp-ai-cfg-field"><label class="mp-ai-cfg-label" for="mp_ai_base_url_input">${getTranslation("baseURL")}</label><input type="text" id="mp_ai_base_url_input" class="form-input" placeholder="https://api.openai.com/v1"></div><div class="mp-ai-cfg-field"><label class="mp-ai-cfg-label" for="mp_ai_api_key_input">${getTranslation("aiKeyPlaceholder")}</label><input type="text" id="mp_ai_api_key_input" class="form-input hide-api-key" placeholder="sk-..."></div><div class="mp-ai-cfg-field"><label class="mp-ai-cfg-label" for="mp_ai_model_input">${getTranslation("model")}</label><input type="text" id="mp_ai_model_input" class="form-input" placeholder="gpt-4o-mini"></div><div class="mp-ai-cfg-field"><label class="mp-ai-cfg-label" for="mp_ai_sys_prompt_input">${getTranslation("aiSysPromptInput")}</label><textarea id="mp_ai_sys_prompt_input" class="form-input" placeholder="${getTranslation("aiSysPromptInput")}"></textarea></div><div class="mp-ai-cfg-hint">${getTranslation("aiCfgHint")}</div></div></div><div class="mp-form-group" style="margin-bottom: 0px;"><label class="mp-label">${getTranslation("shortcutsSettings")}</label><div class="mp-shortcut-scroll-container" id="mp-shortcuts-list-container"></div></div></div></div></div><div class="mp-settings-footer"><button class="save-button" id="mp-settings-save">${getTranslation("save")}</button></div></div> `;
      setSafeInnerHTML(box, html), overlay.appendChild(box);

      const shortcutList = box.querySelector("#mp-shortcuts-list-container"),
        shortcutLabel = shortcutList.parentElement.querySelector(".mp-label");
      shortcutLabel && (shortcutLabel.textContent = getTranslation("shortcutsSettings"));

      const renderShortcuts = () => {
        setSafeInnerHTML(shortcutList, "");
        const resetBtn = document.createElement("div");
        resetBtn.className = "mp-shortcut-option", setSafeInnerHTML(resetBtn, ICONS.restore), resetBtn.style.border = "1px dashed var(--mp-border-primary)", resetBtn.style.color = "var(--mp-accent-close)", resetBtn.style.backgroundColor = "transparent";
        const resetSvg = resetBtn.querySelector("svg");
        resetSvg && (resetSvg.style.width = "20px", resetSvg.style.height = "20px", resetSvg.style.display = "block"), resetBtn.onmouseenter = () => resetBtn.style.borderColor = "var(--mp-accent-close)", resetBtn.onmouseleave = () => resetBtn.style.borderColor = "var(--mp-border-primary)", resetBtn.onclick = async () => {
          const ok = await createDialogo({
            message: getTranslation("restore") + "?",
            type: "confirm",
            dontShowAgainId: "restore-shortcuts"
          });
          true !== ok && "dont_show_again" !== ok || (currentShortcuts = JSON.parse(JSON.stringify(DEFAULT_SHORTCUTS)), renderShortcuts(), "function" == typeof showNotification && showNotification(getTranslation("restoreSuccess")))
        }, createCustomTooltip(resetBtn, getTranslation("restore"), "right"), shortcutList.appendChild(resetBtn), Object.keys(currentShortcuts).forEach(name => {
          const item = currentShortcuts[name],
            el = document.createElement("div");
          el.className = "mp-shortcut-option", el.textContent = item.keys, createCustomTooltip(el, {
            text: getTranslation(item.descKey),
            actions: [{
              label: getTranslation("restore"),
              icon: ICONS.restore,
              action: () => {
                currentShortcuts[name].keys = DEFAULT_SHORTCUTS[name].keys, renderShortcuts()
              }
            }]
          }, "right"), el.onclick = ev => {
            ev.stopPropagation();
            const original = el.textContent;
            el.textContent = getTranslation("pressKeyToRecord"), el.classList.add("recording"), shortcutList.querySelectorAll(".recording").forEach(o => {
              o !== el && o.classList.remove("recording")
            });
            const onKey = ev2 => {
                if (ev2.preventDefault(), ev2.stopPropagation(), ["Control", "Alt", "Shift", "Meta"].includes(ev2.key)) return;
                const parts = [];
                ev2.ctrlKey && parts.push("Ctrl"), ev2.altKey && parts.push("Alt"), ev2.shiftKey && parts.push("Shift");
                let key = ev2.key.toUpperCase();
                "Space" === ev2.code && (key = "Space"), " " === key && (key = "Space"), parts.push(key);
                currentShortcuts[name].keys = parts.join("+"), stopRecording(), renderShortcuts()
              },
              stopRecording = () => {
                document.removeEventListener("keydown", onKey, true), document.removeEventListener("mousedown", onClickAway, true), el.classList.remove("recording")
              },
              onClickAway = ev2 => {
                ev2.target !== el && (stopRecording(), el.textContent = original)
              };
            document.addEventListener("keydown", onKey, true), document.addEventListener("mousedown", onClickAway, true)
          }, shortcutList.appendChild(el)
        })
      };
      if (renderShortcuts(), shortcutList && !shortcutList.parentElement.classList.contains("mp-shortcut-wrapper-fixed")) {
        const scroller = setupEnhancedScroll(shortcutList, "var(--mp-bg-secondary)", "var(--mp-border-radius-md)");
        scroller && (scroller.classList.add("mp-shortcut-wrapper-fixed"), shortcutList.style.border = "none", shortcutList.style.background = "transparent", shortcutList.style.boxShadow = "none", shortcutList.style.width = "100%")
      }

      const tabs = box.querySelectorAll(".mp-tab-btn");
      tabs.forEach(tab => {
        tab.onclick = () => {
          tabs.forEach(o => o.classList.remove("active")), box.querySelectorAll(".mp-tab-content").forEach(o => o.classList.remove("active")), tab.classList.add("active");
          const id = `tab-${tab.getAttribute("data-tab")}`;
          box.querySelector(`#${id}`) && box.querySelector(`#${id}`).classList.add("active")
        }
      });

      const segments = box.querySelectorAll(".mp-segment-opt"),
        renderSegments = () => {
          segments.forEach(o => o.classList.toggle("selected", o.getAttribute("data-val") === themeDraft.mode))
        };
      renderSegments(), segments.forEach(seg => {
        seg.onclick = () => {
          themeDraft.mode = seg.getAttribute("data-val"), renderSegments(), applyTheme(themeDraft)
        }
      }), box.querySelector("#mp-btn-open-lang").onclick = () => {
        languageModal || (languageModal = createLanguageModal(), document.body.appendChild(languageModal)), showModal(languageModal)
      }, box.querySelector("#mp-btn-open-backup").onclick = openBackupManager;

      const predictLabel = box.querySelector("#mp-smart-predict-lbl");
      predictLabel && createCustomTooltip(predictLabel, getTranslation("smartPredictDesc"), "left");
      const previewLabel = box.querySelector("#mp-preview-prompt-lbl");
      previewLabel && createCustomTooltip(previewLabel, getTranslation("ppDesc"), "left");
      const syntaxLabel = box.querySelector("#mp-syntax-lbl");
      syntaxLabel && createCustomTooltip(syntaxLabel, getTranslation("syntaxHighlightDesc"), "left");
      const syntaxInfo = box.querySelector("#mp-syntax-info-icon");
      syntaxInfo && createCustomTooltip(syntaxInfo, getTranslation("syntaxHighlightWarning"), "right");
      const syntaxSwitch = box.querySelector("#mp_setting_syntax");
      syntaxSwitch && (syntaxSwitch.checked = currentSyntaxConfig.enabled, syntaxSwitch.onchange = () => {
        currentSyntaxConfig.enabled = syntaxSwitch.checked, syntaxSwitch.checked || SyntaxHighlighter.detach()
      });
      const predictSwitch = box.querySelector("#mp_setting_prediction");
      predictSwitch && (predictSwitch.checked = currentPredictionConfig.enabled, predictSwitch.onchange = () => {
        currentPredictionConfig.enabled = predictSwitch.checked
      });
      const previewNormal = box.querySelector("#mp_setting_preview_normal");
      previewNormal && (previewNormal.checked = currentPreviewPromptConfig.normal, previewNormal.onchange = () => {
        currentPreviewPromptConfig.normal = previewNormal.checked
      });
      const previewExpand = box.querySelector("#mp_setting_preview_expand");
      previewExpand && (previewExpand.checked = currentPreviewPromptConfig.expand, previewExpand.onchange = () => {
        currentPreviewPromptConfig.expand = previewExpand.checked
      });

      const aiDraft = {
          configs: cloneAIConfigs(currentAIConfig.configs),
          activeId: currentAIConfig.activeId || ""
        },
        aiSelect = box.querySelector("#mp_ai_active_select"),
        aiAddBtn = box.querySelector("#mp_ai_add_btn"),
        aiDelBtn = box.querySelector("#mp_ai_del_btn"),
        aiForm = box.querySelector("#mp_ai_cfg_form"),
        aiEmpty = box.querySelector("#mp_ai_cfg_empty"),
        aiName = box.querySelector("#mp_ai_name_input"),
        aiBaseUrl = box.querySelector("#mp_ai_base_url_input"),
        aiKey = box.querySelector("#mp_ai_api_key_input"),
        aiModel = box.querySelector("#mp_ai_model_input"),
        aiSys = box.querySelector("#mp_ai_sys_prompt_input"),
        getActiveDraft = () => aiDraft.configs.find(e => e.id === aiDraft.activeId) || null,
        flushAiFields = () => {
          const cfg = getActiveDraft();
          if (!cfg) return;
          cfg.name = aiName.value.trim() || cfg.name, cfg.baseUrl = aiBaseUrl.value.trim(), cfg.apiKey = aiKey.value.trim(), cfg.model = aiModel.value.trim(), cfg.systemPrompt = aiSys.value
        },
        renderAiSelect = () => {
          setSafeInnerHTML(aiSelect, aiDraft.configs.map(e => `<option value="${escapeHtmlText(e.id)}">${escapeHtmlText(e.name)}</option>`).join(""));
          aiDraft.configs.some(e => e.id === aiDraft.activeId) || (aiDraft.activeId = aiDraft.configs[0] ? aiDraft.configs[0].id : ""), aiSelect.value = aiDraft.activeId
        },
        renderAiForm = () => {
          const cfg = getActiveDraft();
          aiForm.classList.toggle("mp-ai-cfg-hidden", !cfg), aiEmpty.classList.toggle("mp-ai-cfg-hidden", !!cfg), aiDelBtn.disabled = !cfg, aiAddBtn.disabled = false;
          if (!cfg) return;
          aiName.value = cfg.name || "", aiBaseUrl.value = cfg.baseUrl || "", aiKey.value = cfg.apiKey || "", aiModel.value = cfg.model || "", aiSys.value = cfg.systemPrompt || ""
        },
        renderAi = () => {
          renderAiSelect(), renderAiForm()
        };

      aiSelect.onchange = () => {
        flushAiFields(), aiDraft.activeId = aiSelect.value, renderAiForm()
      }, aiAddBtn.onclick = () => {
        flushAiFields();
        const cfg = {
          id: generateAIConfigId(),
          name: `${getTranslation("cfgNameDefault")} ${aiDraft.configs.length + 1}`,
          baseUrl: "",
          apiKey: "",
          model: "",
          systemPrompt: DEFAULT_AI_SYSTEM_PROMPT,
          keyIndex: 0
        };
        aiDraft.configs.push(cfg), aiDraft.activeId = cfg.id, renderAi(), aiName.focus(), aiName.select()
      }, aiDelBtn.onclick = async () => {
        const cfg = getActiveDraft();
        if (!cfg) return;
        const ok = await createDialogo({
          message: `${getTranslation("delete")} "${cfg.name}"?`,
          type: "confirm"
        });
        true !== ok && "dont_show_again" !== ok || (aiDraft.configs = aiDraft.configs.filter(e => e.id !== cfg.id), aiDraft.activeId === cfg.id && (aiDraft.activeId = aiDraft.configs[0] ? aiDraft.configs[0].id : ""), renderAi())
      }, [aiBaseUrl, aiKey, aiModel, aiSys].forEach(el => {
        el.addEventListener("input", flushAiFields)
      }), aiName.addEventListener("input", () => {
        flushAiFields();
        const cfg = getActiveDraft();
        if (!cfg) return;
        const opt = Array.from(aiSelect.options).find(e => e.value === cfg.id);
        opt && (opt.textContent = cfg.name)
      }), renderAi();

      return setupEnhancedScroll(box.querySelector("#mp-settings-scroll-area")), box.querySelector("#mp-settings-save").onclick = async () => {
        flushAiFields(), await saveThemeConfig(themeDraft), syntaxSwitch && saveSyntaxConfig({
          enabled: syntaxSwitch.checked
        }), predictSwitch && savePredictionConfig({
          enabled: predictSwitch.checked
        }), previewNormal && previewExpand && savePreviewPromptConfig({
          normal: previewNormal.checked,
          expand: previewExpand.checked
        }), saveShortcutsConfig(), await saveAIConfig({
          configs: aiDraft.configs,
          activeId: aiDraft.activeId
        }), hideModal(overlay)
      }, overlay.resetToCurrent = () => {
        themeDraft = {
          ...currentThemeConfig
        }, renderShortcuts(), renderSegments(), aiDraft.configs = cloneAIConfigs(currentAIConfig.configs), aiDraft.activeId = currentAIConfig.activeId || "", renderAi();
        const langDisplay = box.querySelector("#mp-current-lang-display");
        langDisplay && (langDisplay.textContent = translations[currentLang]?.langName || currentLang), tabs[0].click()
      }, overlay
    }

    function parsePromptInternal(e) {
      if (!e) return {
        processedText: "",
        ignoreMap: new Map,
        selectMap: new Map,
        inputMap: new Map,
        fileMap: new Map
      };
      let t = e;
      const n = new Map,
        a = new Map,
        o = new Map,
        s = new Map;
      let r = 0,
        i = 0,
        l = 0,
        c = 0;
      const d = e => {
          if (!e) return "";
          let t = e.replace(/^[ \t]*\r?\n/, "");
          return t = t.replace(/\r?\n[ \t]*$/, ""), t
        },
        p = e => {
          if ("string" != typeof e) return e;
          let t = e;
          return n.forEach((e, n) => {
            n.startsWith("__ESC_CHAR_") && (t = t.split(n).join(e))
          }), t
        };
      t = t.replace(/([ \t]*)(#+)ignore[ \t]*(?:\r?\n)?([\s\S]*?)(?:\r?\n)?[ \t]*\2end/g, (e, t, a, o) => {
        const s = `__IGNORE_BLK_${r++}__`;
        return n.set(s, o), s
      }), t = t.replace(/\\([#\[\]{}:])/g, (e, t) => {
        const a = `__ESC_CHAR_${r++}__`;
        return n.set(a, t), a
      });
      t = t.replace(/('{2})((?:(?!\1)[\s\S])*)\1/g, (e, t, a) => {
        const o = `__QUOTE_${r++}__`;
        return n.set(o, a), o
      }), t = t.replace(/#(date|time)((?:-[YMDHS]{2})*)(?:\+(date|time)((?:-[YMDHS]{2})*))?/gi, (e, t, n, a, o) => {
        const s = new Date,
          r = String(s.getDate()).padStart(2, "0"),
          i = String(s.getMonth() + 1).padStart(2, "0"),
          l = String(s.getFullYear()).slice(-2),
          c = String(s.getHours()).padStart(2, "0"),
          d = String(s.getMinutes()).padStart(2, "0"),
          p = String(s.getSeconds()).padStart(2, "0");

        function m(e, t) {
          if (!e) return "";
          const n = (t || "").toUpperCase();
          let a = [];
          return "date" === e.toLowerCase() ? (n.includes("-DD") || a.push(r), n.includes("-MM") || a.push(i), n.includes("-YY") || a.push(l), a.join("/")) : "time" === e.toLowerCase() ? (n.includes("-HH") || a.push(c), n.includes("-MM") || a.push(d), n.includes("-SS") || a.push(p), a.join(":")) : ""
        }
        let u = m(t, n),
          g = m(a, o);
        return u && g ? `${u} - ${g}` : u || g || e
      }), t = t.replace(/#file(?:\(([^)]+)\))?/gi, (e, t) => {
        const n = t ? t.trim() : getTranslation("addCardTitle");
        let a = null;
        for (const [e, t] of s.entries())
          if (t.title === n) {
            a = e;
            break
          } if (a) return a;
        const o = `__FILE_${c++}__`;
        return s.set(o, {
          title: n
        }), o
      });
      return t = t.replace(/([ \t]*)(#+)start[ \t]*(?:\r?\n)?([\s\S]*?)(?:\r?\n)?[ \t]*\2end/g, (e, t, o, s) => {
        const r = `__SELECT_${i++}__`,
          l = [];
        let c = null;
        const m = !s.includes("\n"),
          u = /(?:#\s*(?!start|end)(.*?)(?:\(([^)]*)\))?\s*(?=\/\/|\r?\n|$))|(?:([+\-]|\d+)\s*\[([^\]]*)\](?:\(([^)]*)\))?)|(?:(\[#\])(?:\(([^)]*)\))?)|(?:(__QUOTE_\d+__)|'([^'\\]*(?:\\.[^'\\]*)*)')/g;
        let g;
        for (; null !== (g = u.exec(s));)
          if (undefined !== g[1]) {
            const e = p(g[1].trim()),
              t = g[2] ? p(g[2]) : null;
            e && (l.push({
              type: "header",
              label: e,
              comment: t
            }), c = null)
          } else if (g[3]) {
          const e = g[3];
          let t = p(g[4]),
            n = g[5] ? p(g[5]) : null,
            a = false;
          const o = t.match(/(.*?)\s*::\s*x\s*$/i);
          o && (t = o[1], a = true);
          let s = "+" === e ? "multi" : "-" === e ? "sovereign" : "id";
          c = {
            label: t,
            value: t,
            type: s,
            id: "id" === s ? e : null,
            isDefault: a,
            comment: n
          }, l.push(c)
        } else if (g[6]) {
          let e = g[7] ? p(g[7]) : null;
          c = {
            label: getTranslation("otherOption"),
            value: "",
            type: "other",
            id: null,
            comment: e
          }, l.push(c)
        } else if (c) {
          let e = null;
          if (g[8]) {
            const t = g[8];
            n.has(t) && (e = d(n.get(t)))
          } else undefined !== g[9] && (e = d(g[9]), e = e.replace(/\\'/g, "'"));
          null !== e && (c.inputs = [], e = e.replace(/\[([^\]]+?)\]/g, (e, t) => {
            if (t.startsWith("__") && t.endsWith("__")) return e;
            let n = t,
              a = "";
            const o = t.indexOf("::"); - 1 !== o && (n = t.substring(0, o), a = t.substring(o + 2));
            const s = `__OPT_INPUT_${c.inputs.length}__`;
            return c.inputs.push({
              key: s,
              label: p(n.trim()),
              defaultValue: p(a.trim())
            }), s
          }), c.value = p(e))
        }
        return a.set(r, {
          title: getTranslation("select"),
          options: l,
          isInline: m,
          indent: t
        }), r
      }), t = t.replace(/\[([^\]=:]+?)\s*=\s*(\$[a-zA-Z0-9_]+)(?:\s*::\s*([^\]]*?))?\](?:\(([^)]*)\))?/g, (e, t, n, a, s) => {
        if (t.startsWith("__") && t.endsWith("__")) return e;
        const r = `__INPUT_${l++}__`;
        let i = s || "";
        return o.set(r, {
          label: p(t.trim()),
          varName: n.trim(),
          defaultValue: a ? p(a.trim()) : "",
          context: p(i),
          silent: false
        }), r
      }), t = t.replace(/\{([^}=:]+?)\s*=\s*(\$[a-zA-Z0-9_]+)(?:\s*::\s*([^}]*?))?\}(?:\(([^)]*)\))?/g, (e, t, n, a, s) => {
        if (t.startsWith("__") && t.endsWith("__")) return e;
        const r = `__INPUT_${l++}__`;
        let i = s || "";
        return o.set(r, {
          label: p(t.trim()),
          varName: n.trim(),
          defaultValue: a ? p(a.trim()) : "",
          context: p(i),
          silent: true
        }), r
      }), t = t.replace(/\[([^\]]+?)\](?:\(([^)]*)\))?/g, (e, t, n) => {
        if (t.startsWith("__") && t.endsWith("__")) return e;
        if (o.has(e)) return e;
        let a = t,
          s = "";
        const r = t.indexOf("::"); - 1 !== r && (a = t.substring(0, r), s = t.substring(r + 2));
        const i = `__INPUT_${l++}__`;
        let c = n || "";
        return o.set(i, {
          label: p(a.trim()),
          varName: null,
          defaultValue: p(s.trim()),
          context: p(c),
          silent: false
        }), i
      }), {
        processedText: t,
        ignoreMap: n,
        selectMap: a,
        inputMap: o,
        fileMap: s
      }
    }

    function createPlaceholderModal() {
      const e = document.createElement("div");
      e.className = "mp-overlay mp-hidden", e.id = "__ap_placeholder_modal_overlay";
      const t = document.createElement("div");
      t.className = "mp-modal-box", t.onclick = e => e.stopPropagation();
      const n = ` <button class=mp-modal-expand-btn id=__ap_ph_expand_btn>${ICONS.expand}</button> <button class=mp-modal-close-btn id=__ap_close_placeholder aria-label="${getTranslation("close")}">${ICONS.close}</button><h2 class=modal-title id=__ap_placeholder_modal_title>${getTranslation("fillPlaceholders")}</h2><div id=__ap_placeholders_container></div><div class=modal-footer><button class=save-button id=__ap_insert_prompt>${getTranslation("insert")}</button></div>`;
      setSafeInnerHTML(t, n), e.appendChild(t);
      const a = t.querySelector("#__ap_placeholders_container");
      a.style.maxHeight = "450px", setupEnhancedScroll(a);
      const o = t.querySelector("#__ap_ph_expand_btn");
      createCustomTooltip(t.querySelector("#__ap_close_placeholder"), getTranslation("close"), "bottom"), createCustomTooltip(o, getTranslation("expand"), "bottom");
      let s = false;
      return o.onclick = e => {
        e.stopPropagation(), s = !s, t.classList.toggle("mp-expanded", s), setSafeInnerHTML(o, s ? ICONS.collapse : ICONS.expand);
        const n = getTranslation(s ? "collapse" : "expand");
        createCustomTooltip(o, n, "bottom"), setTimeout(() => {
          a.updateScrollArrows && a.updateScrollArrows()
        }, 350)
      }, e
    }

    function createPromptMenu() {
      const e = document.createElement("div");
      return e.className = "prompt-menu", e.id = "prompt-menu-container", e
    }

    function createPromptModal() {
      const e = document.createElement("div");
      e.className = "mp-overlay mp-hidden", e.id = "__ap_modal_overlay";
      const t = document.createElement("div");
      t.className = "mp-modal-box", t.id = "__ap_modal_box_el", t.style.cssText = "overflow: hidden; display: flex; flex-direction: column; position: relative;", t.onclick = e => e.stopPropagation(), setSafeInnerHTML(t, ` <button class=mp-modal-expand-btn id=__ap_expand_btn>${ICONS.expand}</button> <button class=mp-modal-close-btn id=__ap_close_prompt>${ICONS.close}</button> `);
      const n = document.createElement("div");
      n.id = "__ap_inner_content_scroll", n.style.cssText = "height: 100%; width: 100%; display: flex; flex-direction: column;", setSafeInnerHTML(n, `<h2 class=modal-title style=flex-shrink:0;margin-top:10px>${getTranslation("newPrompt")}</h2><div class=form-group style=flex-shrink:0><div class=mp-label-wrapper><label for=__ap_title class=form-label style=margin-bottom:0>${getTranslation("title")}</label><div class=mp-modal-right-controls><button class=mp-link-btn id=__ap_color_btn_modal><span class=icon>${ICONS.color}</span></button></div></div><input id=__ap_title class=form-input></div><div class=form-group style=height:400px><div class=mp-label-wrapper><label for=__ap_text class=form-label style=margin-bottom:0>${getTranslation("prompt")}</label><div class=mp-modal-right-controls><button class=mp-link-btn id=__ap_link_btn_modal><span class=icon>${ICONS.link}</span></button> <button class=mp-enhance-ai-btn id=__ap_enhance_btn><span class=icon>${ICONS.magic}</span></button> <button class=mp-paste-btn id=__ap_paste_btn_modal>${ICONS.paste}</button></div></div><textarea class=form-textarea id=__ap_text spellcheck=false style=height:100%!important;resize:none></textarea></div><div class=mp-accordions-row><div class=mp-files-accordion id=__ap_files_accordion><div class=mp-accordion-header id=__ap_files_header><div style=display:flex;align-items:center;gap:8px>${ICONS.folder}<span id=__ap_files_label>${getTranslation("filesLabel")}</span></div>${ICONS.chevron}</div><div class=mp-accordion-content id=__ap_files_content><div class=mp-file-scroll-wrapper id=__ap_file_scroll_wrapper><div class=mp-file-grid id=__ap_file_grid></div></div><input id=__ap_file_input type=file multiple style=display:none></div></div><div class=mp-tags-accordion id=__ap_tags_accordion><div class=mp-accordion-header id=__ap_tags_header><div style=display:flex;align-items:center;gap:8px>${ICONS.tag}<span id=__ap_tags_label>${getTranslation("tags")}</span></div>${ICONS.chevron}</div><div class=mp-accordion-content id=__ap_tags_content><div class=mp-tags-scroll-wrapper id=__ap_tags_scroll_wrapper><div class=mp-tags-grid id=__ap_tags_grid></div></div><div class=mp-tags-accordion-footer><button class=mp-tags-manage-btn id=__ap_tags_manage>${ICONS.edit}<span>${getTranslation("manageTags")}</span></button></div></div></div></div><div class=mp-switch-container><div class=mp-switch style=flex:1><input id=__ap_use_placeholders type=checkbox><label for=__ap_use_placeholders>Toggle</label><span class=switch-text onclick='document.getElementById("__ap_use_placeholders").click()'>${getTranslation("enablePlaceholders")}</span></div><div class=mp-switch style=flex:1><input id=__ap_auto_execute type=checkbox><label for=__ap_auto_execute>Toggle</label><span class=switch-text onclick='document.getElementById("__ap_auto_execute").click()'>${getTranslation("autoExecute")}</span></div><span class=mp-help-icon id=shortcutInfo style=cursor:help!important>${ICONS.info}</span><div class="mp-prompt-shortcut mp-shortcut-option"id=__ap_custom_shortcut_btn data-shortcut="">${getTranslation("shortcut")}</div></div><div class=modal-footer style=flex-shrink:0;margin-top:auto><button class=save-button id=__ap_save>${getTranslation("save")}</button></div>`), t.appendChild(n), e.appendChild(t);
      const a = t.querySelector("#__ap_files_accordion"),
        o = t.querySelector("#__ap_files_header"),
        s = t.querySelector("#__ap_file_scroll_wrapper"),
        r = t.querySelector("#__ap_file_input"),
        i = t.querySelector("#__ap_file_grid"),
        l = t.querySelector("#__ap_files_label"),
        c = t.querySelector("#__ap_tags_accordion"),
        d = t.querySelector("#__ap_tags_header"),
        p = t.querySelector("#__ap_tags_scroll_wrapper"),
        m = t.querySelector("#__ap_tags_grid"),
        u = t.querySelector("#__ap_tags_label"),
        g = t.querySelector("#__ap_tags_manage"),
        f = t.querySelector("#__ap_enhance_btn"),
        h = t.querySelector("#__ap_text"),
        v = t.querySelector("#__ap_paste_btn_modal"),
        y = t.querySelector("#__ap_link_btn_modal"),
        b = t.querySelector("#__ap_color_btn_modal"),
        x = t.querySelector("#__ap_title"),
        C = t.querySelector("#__ap_custom_shortcut_btn");
      new MutationObserver(async () => {
        if (!e.classList.contains("mp-hidden")) {
          const t = e.dataset.promptId;
          if (t) {
            const e = (await getAll()).find(e => e.id === t);
            e && e.color ? (x.style.setProperty("color", e.color, "important"), x.dataset.promptColor = e.color) : (x.style.removeProperty("color"), x.dataset.promptColor = ""), e && e.shortcut ? (C.dataset.shortcut = e.shortcut, C.textContent = e.shortcut) : (C.dataset.shortcut = "", C.textContent = getTranslation("shortcut"))
          } else x.style.removeProperty("color"), x.dataset.promptColor = "", C.dataset.shortcut = "", C.textContent = getTranslation("shortcut")
        }
      }).observe(e, {
        attributes: true,
        attributeFilter: ["data-prompt-id", "class"]
      }), createCustomTooltip(b, getTranslation("colorTitle"), "top"), b.addEventListener("click", async e => {
        e.preventDefault(), e.stopPropagation();
        const t = await createDialogo({
          title: getTranslation("colorDialogTitle"),
          message: getTranslation("colorDialogMessage"),
          actions: [{
            label: getTranslation("changeColor"),
            value: "change",
            style: "primary"
          }, {
            label: getTranslation("removeColor"),
            value: "remove",
            style: "danger"
          }, {
            label: getTranslation("cancel"),
            value: "cancel",
            style: "secondary"
          }]
        });
        if ("change" === t) {
          const e = document.createElement("input");
          e.type = "color", e.value = x.dataset.promptColor || "#cccccc", e.style.position = "absolute", e.style.opacity = "0", e.style.width = "1px", e.style.height = "1px", document.body.appendChild(e), e.addEventListener("input", e => {
            const t = e.target.value;
            x.style.setProperty("color", t, "important"), x.dataset.promptColor = t
          }), e.addEventListener("change", () => {
            e.parentNode && e.remove()
          }), setTimeout(() => {
            e.click()
          }, 10)
        } else "remove" === t && (x.style.removeProperty("color"), x.dataset.promptColor = "")
      }), C && C.addEventListener("click", e => {
        e.stopPropagation();
        C.textContent;
        C.textContent = getTranslation("pressKeyToRecord"), C.classList.add("recording");
        const t = e => {
            if (e.preventDefault(), e.stopPropagation(), "Backspace" === e.key || "Delete" === e.key) return C.dataset.shortcut = "", C.textContent = getTranslation("shortcut"), void n();
            if (["Control", "Alt", "Shift", "Meta"].includes(e.key)) return;
            const t = [];
            e.ctrlKey && t.push("Ctrl"), e.altKey && t.push("Alt"), e.shiftKey && t.push("Shift");
            let a = e.key.toUpperCase();
            "Space" === e.code && (a = "Space"), " " === a && (a = "Space"), t.push(a);
            const o = t.join("+");
            C.dataset.shortcut = o, C.textContent = o, n()
          },
          n = () => {
            document.removeEventListener("keydown", t, true), document.removeEventListener("mousedown", a, true), C.classList.remove("recording")
          },
          a = e => {
            e.target !== C && (n(), C.textContent = C.dataset.shortcut || getTranslation("shortcut"))
          };
        document.addEventListener("keydown", t, true), document.addEventListener("mousedown", a, true)
      });
      const w = t.querySelector("#shortcutInfo");
      w && createCustomTooltip(w, getTranslation("shortcutInfo"), "left"), createCustomTooltip(y, getTranslation("sharedPromptConfig"), "top"), y.addEventListener("click", e => {
        e.preventDefault(), e.stopPropagation(), openSharedPromptManager(currentModal.dataset.promptId)
      }), o.addEventListener("click", e => {
        e.stopPropagation(), a.classList.toggle("open"), a.classList.contains("open") && s.updateScrollArrows && setTimeout(() => s.updateScrollArrows(), 50)
      }), d.addEventListener("click", e => {
        e.stopPropagation(), c.classList.toggle("open"), c.classList.contains("open") && p.updateScrollArrows && setTimeout(() => p.updateScrollArrows(), 50)
      }), g.addEventListener("click", e => {
        e.stopPropagation(), openTagsManager()
      }), t.renderTagsSelector = () => {
        const e = getAllTags(),
          n = currentPromptTags.size,
          a = e.length;
        if (u.textContent = 0 === a ? getTranslation("tags") : getTranslation("tagsLabel").replace("{active}", n).replace("{total}", a), setSafeInnerHTML(m, ""), 0 === e.length) {
          p.classList.add("empty-state"), m.classList.add("empty-state");
          const e = document.createElement("div");
          e.className = "mp-tags-empty-icon", setSafeInnerHTML(e, ICONS.tag);
          const t = document.createElement("div");
          return t.className = "mp-tags-empty-text", t.textContent = getTranslation("noTags"), m.appendChild(e), m.appendChild(t), void(p.onclick = e => {
            e.stopPropagation(), openTagsManager()
          })
        }
        p.classList.remove("empty-state"), m.classList.remove("empty-state"), p.onclick = null, e.forEach(e => {
          const n = e.name.toLowerCase(),
            a = currentPromptTags.has(n),
            o = document.createElement("div");
          if (o.className = "mp-tag-select-item " + (a ? "active" : ""), a) {
            const t = getTagStyle(e);
            o.style.backgroundColor = t.backgroundColor, o.style.color = t.color
          } else o.style.backgroundColor = "", o.style.color = "";
          o.textContent = e.name, e.comment && createCustomTooltip(o, e.comment, "bottom"), o.addEventListener("click", e => {
            e.stopPropagation(), currentPromptTags.has(n) ? currentPromptTags.delete(n) : currentPromptTags.add(n), t.renderTagsSelector()
          }), m.appendChild(o)
        })
      }, h.addEventListener("keydown", e => {
        isShortcutPressed(e, "enhancePrompt") && (e.preventDefault(), e.stopPropagation(), f.click())
      }), createCustomTooltip(f, getTranslation("enhanceTooltip"), "top"), f.onclick = () => {
        const e = h.value.trim();
        if (!e) return void showNotification(getTranslation("noTextToEnhance"), "error");
        triggerAIEnhancement(e, {
          get value() {
            return h.value
          },
          set value(e) {
            h.value = e, h.dispatchEvent(new Event("input", {
              bubbles: true,
              composed: true
            })), h.dispatchEvent(new Event("change", {
              bubbles: true
            })), h.focus()
          },
          syntaxClear: () => {
            h.syntaxClear && h.syntaxClear()
          },
          syntaxUpdate: () => {
            h.syntaxUpdate && h.syntaxUpdate()
          }
        }, f)
      }, createCustomTooltip(v, getTranslation("paste"), "top"), v.addEventListener("click", async e => {
        e.preventDefault(), e.stopPropagation();
        try {
          const e = await navigator.clipboard.readText();
          if (e) {
            const t = h.selectionStart,
              n = h.selectionEnd,
              a = h.value;
            h.value = a.substring(0, t) + e + a.substring(n), h.selectionStart = h.selectionEnd = t + e.length, h.dispatchEvent(new Event("input", {
              bubbles: true
            })), h.focus()
          }
        } catch (e) {}
      });
      const T = t.querySelector("#__ap_close_prompt");
      async function S(e) {
        for (const n of e) {
          if (n.size > 5242880) {
            const e = (n.size / 1024 / 1024).toFixed(1);
            if (false === await createDialogo({
                message: getTranslation("confirmLargeFile").replace("{fileSizeMB}", e),
                type: "confirm",
                dontShowAgainId: "confirm-large-file"
              })) continue
          }
          const e = new FileReader;
          e.onload = async e => {
            const o = {
              id: Date.now() + Math.random().toString(36).substr(2, 9),
              name: n.name,
              type: n.type,
              size: n.size,
              data: e.target.result
            };
            await saveGlobalFile(o), currentActiveFileIds.add(o.id), t.renderGlobalFiles && (a.classList.contains("open") || a.classList.add("open"), t.renderGlobalFiles())
          }, e.readAsDataURL(n)
        }
      }
      createCustomTooltip(T, getTranslation("close"), "bottom"), T.onclick = () => {
        SyntaxHighlighter.detach(), e.classList.add("mp-hidden"), setTimeout(() => e.remove(), 200)
      }, h.addEventListener("input", function() {
        setTimeout(() => {
          if (this.selectionEnd === this.value.length) {
            this.scrollTop = this.scrollHeight;
            const e = this.closest(".prompt-editor-scroll-wrapper");
            e && (e.scrollTop = e.scrollHeight)
          }
        }, 10)
      }), attachSmartEditorLogic(h), setTimeout(() => {
        const e = setupEnhancedScroll(h, null, "var(--mp-border-radius-md)");
        e && e.classList.add("prompt-editor-scroll-wrapper"), setTimeout(() => SyntaxHighlighter.attach(h), 10), setupEnhancedScroll(s, null, "0"), setupEnhancedScroll(p, null, "0");
        const t = setupEnhancedScroll(n);
        t && (t.style.height = "100%", t.style.width = "100%", t.style.borderRadius = "inherit")
      }, 0), t.renderGlobalFiles = async () => {
        const e = await getGlobalFiles();
        setSafeInnerHTML(i, "");
        let n = 0;
        if (e.forEach(e => {
            currentActiveFileIds.has(e.id) && n++
          }), l.textContent = getTranslation("filesCounter").replace("{active}", n).replace("{total}", e.length), 0 === e.length) {
          s.classList.add("empty-state"), i.classList.add("empty-state");
          const e = document.createElement("div");
          e.className = "mp-file-empty-icon", setSafeInnerHTML(e, `${ICONS.cloudFile}`);
          const t = document.createElement("div");
          t.className = "mp-file-empty-text", t.textContent = getTranslation("addCardTitle");
          const n = document.createElement("div");
          return n.className = "mp-file-empty-subtext", n.textContent = getTranslation("addCards"), i.appendChild(e), i.appendChild(t), i.appendChild(n), void(s.onclick = e => {
            e.stopPropagation(), r.click()
          })
        }
        s.classList.remove("empty-state"), i.classList.remove("empty-state"), s.onclick = null;
        const a = document.createElement("div");
        a.className = "mp-add-file-card", createCustomTooltip(a, getTranslation("addCardTitle"), "bottom"), setSafeInnerHTML(a, `${ICONS.plus}`), a.addEventListener("click", e => {
          e.stopPropagation(), r.click()
        }), i.appendChild(a), e.forEach(e => {
          const n = currentActiveFileIds.has(e.id),
            a = document.createElement("div");
          a.className = "mp-file-card " + (n ? "active" : "inactive"), createCustomTooltip(a, e.name, "bottom"), a.addEventListener("click", n => {
            n.stopPropagation(), currentActiveFileIds.has(e.id) ? currentActiveFileIds.delete(e.id) : currentActiveFileIds.add(e.id), t.renderGlobalFiles()
          });
          const o = document.createElement("div");
          o.className = "mp-file-delete-perm", setSafeInnerHTML(o, `${ICONS.close}`), o.addEventListener("click", async n => {
            n.stopPropagation();
            await createDialogo({
              message: getTranslation("confirmDeleteFile"),
              type: "confirm"
            }) && (await deleteGlobalFile(e.id), currentActiveFileIds.delete(e.id), t.renderGlobalFiles(), "function" == typeof showNotification && showNotification(getTranslation("deleteSuccess")))
          });
          let s = "";
          s = e.type.startsWith("image/") ? `<img src="${e.data}" class="mp-file-thumb">` : `${ICONS.file}`, setSafeInnerHTML(a, s), a.appendChild(o), i.appendChild(a)
        }), s.updateScrollArrows && setTimeout(() => s.updateScrollArrows(), 50)
      }, s.addEventListener("dragover", e => {
        e.preventDefault(), e.stopPropagation()
      }), s.addEventListener("drop", async e => {
        e.preventDefault(), e.stopPropagation(), S(e.dataTransfer.files)
      }), r.addEventListener("change", e => {
        S(e.target.files), r.value = ""
      });
      const E = t.querySelector("#__ap_expand_btn");
      let M = false;
      return createCustomTooltip(E, getTranslation("expand"), "bottom"), E.onclick = e => {
        e.stopPropagation(), M = !M, M ? (t.classList.add("mp-expanded"), setSafeInnerHTML(E, `${ICONS.collapse}`), createCustomTooltip(E, getTranslation("collapse"), "bottom")) : (t.classList.remove("mp-expanded"), setSafeInnerHTML(E, `${ICONS.expand}`), createCustomTooltip(E, getTranslation("expand"), "bottom")), setTimeout(() => {
          h.updateScrollArrows && h.updateScrollArrows()
        }, 350)
      }, t.loadPromptTags = e => {
        currentPromptTags = new Set(e || []), t.renderTagsSelector()
      }, t.getCurrentTags = () => Array.from(currentPromptTags), e
    }

    function diffLines(e, t) {
      const n = (e || "").split("\n"),
        a = (t || "").split("\n"),
        o = Array(n.length + 1).fill(null).map(() => Array(a.length + 1).fill(0));
      for (let e = 1; e <= n.length; e++)
        for (let t = 1; t <= a.length; t++) n[e - 1] === a[t - 1] ? o[e][t] = o[e - 1][t - 1] + 1 : o[e][t] = Math.max(o[e - 1][t], o[e][t - 1]);
      let s = n.length,
        r = a.length;
      const i = [];
      for (; s > 0 || r > 0;) s > 0 && r > 0 && n[s - 1] === a[r - 1] ? (i.unshift({
        type: "unchanged",
        text: n[s - 1]
      }), s--, r--) : r > 0 && (0 === s || o[s][r - 1] >= o[s - 1][r]) ? (i.unshift({
        type: "added",
        text: a[r - 1]
      }), r--) : (i.unshift({
        type: "removed",
        text: n[s - 1]
      }), s--);
      return i
    }

    function getSideBySideDiff(e, t) {
      const n = diffLines(e, t),
        a = [],
        o = [],
        s = e => e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
      let r = 0;
      for (; r < n.length;)
        if ("unchanged" === n[r].type) {
          const e = s(n[r].text);
          a.push(`<div class="mp-diff-line-unchanged">${e||"&nbsp;"}</div>`), o.push(`<div class="mp-diff-line-unchanged">${e||"&nbsp;"}</div>`), r++
        } else {
          const e = [],
            t = [];
          for (; r < n.length && "unchanged" !== n[r].type;) "removed" === n[r].type && e.push(n[r].text), "added" === n[r].type && t.push(n[r].text), r++;
          const i = Math.max(e.length, t.length);
          for (let n = 0; n < i; n++) {
            const r = e[n],
              i = t[n];
            undefined !== r ? a.push(`<div class="mp-diff-line-removed">${s(r)||"&nbsp;"}</div>`) : a.push('<div class="mp-diff-line-empty">&nbsp;</div>'), undefined !== i ? o.push(`<div class="mp-diff-line-added">${s(i)||"&nbsp;"}</div>`) : o.push('<div class="mp-diff-line-empty">&nbsp;</div>')
          }
        } return {
        left: a.join(""),
        right: o.join("")
      }
    }

    function syncScroll(e, t) {
      if (!e || !t) return;
      let n = false;
      e.onscroll = () => {
        n || (n = true, t.scrollTop = e.scrollTop, t.scrollLeft = e.scrollLeft, n = false)
      }, t.onscroll = () => {
        n || (n = true, e.scrollTop = t.scrollTop, e.scrollLeft = t.scrollLeft, n = false)
      }
    }

    function isValidWhiteListUrl(e, t) {
      try {
        const n = new URL(e);
        return !!["raw.githubusercontent.com", "gist.githubusercontent.com", "cdn.jsdelivr.net", "gitlab.com"].includes(n.hostname) && !(t && !n.pathname.endsWith(t))
      } catch (e) {
        return false
      }
    }

    function compareVersions(e, t) {
      const n = (e || "0").split(".").map(Number),
        a = (t || "0").split(".").map(Number);
      for (let e = 0; e < Math.max(n.length, a.length); e++) {
        const t = n[e] || 0,
          o = a[e] || 0;
        if (t > o) return 1;
        if (t < o) return -1
      }
      return 0
    }

    function escapeHtmlText(e) {
      return e ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;") : ""
    }

    function fetchImageBlob(e) {
      return new Promise((t, n) => {
        let a = e;
        try {
          const t = new URL(e);
          t.searchParams.set("_t", Date.now()), a = t.toString()
        } catch (e) {}
        GM_xmlhttpRequest({
          method: "GET",
          url: a,
          responseType: "blob",
          nocache: true,
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache"
          },
          onload: e => {
            e.status >= 200 && e.status < 300 && e.response ? t(e.response) : n(new Error(""))
          },
          onerror: () => n(new Error(""))
        })
      })
    }
    async function simpleMarkdownToHtml(e) {
      if (!e) return "";
      e = escapeHtmlText(e);
      const t = [];
      e = e.replace(/```([\s\S]*?)```/gim, (e, n) => {
        let a = n.replace(/^[a-z0-9_-]*\n/i, "");
        return t.push(`<pre class="mp-shared-block-code"><code>${a}</code></pre>`), `__CB${t.length-1}__`
      });
      const n = [];
      e = e.replace(/`([^`\n]+)`/g, (e, t) => (n.push(`<code class="mp-shared-inline-code">${t}</code>`), `__IC${n.length-1}__`));
      const a = /!\[([^\]]*)\]\(([^)]+)\)/gim,
        o = [];
      let s;
      for (; null !== (s = a.exec(e));) o.push({
        full: s[0],
        alt: s[1],
        url: s[2]
      });
      for (const t of o) {
        const n = t.url.replace(/&amp;/g, "&");
        if (isValidWhiteListUrl(n)) try {
          const a = await fetchImageBlob(n),
            o = `<div class="mp-shared-img-container" style="display: flex; flex-direction: row; justify-content: center; align-items: center; width: 100%; clear: both; margin: 16px 0;"><img src="${URL.createObjectURL(a)}" alt="${escapeHtmlText(t.alt)}" style="max-width: 100%; max-height: 250px; object-fit: contain; border-radius: var(--mp-border-radius-sm); display: block; margin: 0 auto;" /></div>\n                    `.trim();
          e = e.split(t.full).join(o)
        } catch (n) {
          e = e.split(t.full).join(`<div style="display: flex; justify-content: center; width: 100%; margin: 8px 0;"><span style="color: var(--mp-text-secondary);">[${getTranslation("IMGnull")}${escapeHtmlText(t.alt)}]</span></div>`)
        } else e = e.split(t.full).join(`<div style="display: flex; justify-content: center; width: 100%; margin: 8px 0;"><span style="color: red;">[${getTranslation("IMGblock")}${escapeHtmlText(n)}]</span></div>`)
      }
      const r = e.split(/\r?\n/);
      let i = false;
      for (let e = 0; e < r.length; e++) {
        let t = r[e].trim();
        if ("---" !== t)
          if (t.startsWith("# ")) r[e] = `<h1>${t.substring(2)}</h1>`;
          else if (t.startsWith("## ")) r[e] = `<h2>${t.substring(3)}</h2>`;
        else if (t.startsWith("### ")) r[e] = `<h3>${t.substring(4)}</h3>`;
        else if (t.startsWith("#### ")) r[e] = `<h4>${t.substring(5)}</h4>`;
        else if (t.startsWith("##### ")) r[e] = `<h5>${t.substring(6)}</h5>`;
        else if (t.startsWith("###### ")) r[e] = `<h6>${t.substring(7)}</h6>`;
        else if (t.startsWith("- ") || t.startsWith("* ")) {
          let n = t.substring(2);
          i ? r[e] = `<li>${n}</li>` : (r[e] = `<ul><li>${n}</li>`, i = true)
        } else i && (r[e - 1] = r[e - 1] + "</ul>", i = false);
        else r[e] = '<hr class="mp-shared-hr" style="border: 0; height: 1px; background: var(--mp-border-primary); margin: 16px 0;" />'
      }
      return i && (r[r.length - 1] = r[r.length - 1] + "</ul>"), e = (e = (e = (e = (e = (e = (e = r.join("\n")).replace(/\*\*(.*?)\*\*/gim, "<b>$1</b>")).replace(/\*(.*?)\*/gim, '<em style="font-style: italic !important;">$1</em>')).replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2" target="_blank" style="color:var(--mp-accent-primary); text-decoration:underline;">$1</a>')).replace(/\n/g, (e, t, n) => "<br>")).replace(/<br><(h[1-6]|hr|ul|ol|pre|div)/gim, "<$1")).replace(/<\/(h[1-6]|hr|ul|ol|pre|div)><br>/gim, "</$1>"), n.forEach((t, n) => {
        e = e.split(`__IC${n}__`).join(t)
      }), t.forEach((t, n) => {
        e = (e = (e = e.split(`<br>__CB${n}__`).join(t)).split(`__CB${n}__<br>`).join(t)).split(`__CB${n}__`).join(t)
      }), e
    }

    function fetchWithGM(e) {
      return new Promise((t, n) => {
        let a = e;
        try {
          const t = new URL(e);
          t.searchParams.set("_t", Date.now()), a = t.toString()
        } catch (e) {}
        GM_xmlhttpRequest({
          method: "GET",
          url: a,
          nocache: true,
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            Expires: "0"
          },
          onload: e => {
            e.status >= 200 && e.status < 300 ? t(e.responseText) : n(new Error(`${getTranslation("fetchError")}${e.status}`))
          },
          onerror: () => {
            n(new Error(getTranslation("fetchError")))
          }
        })
      })
    }

    function sanitizeJSONString(e) {
      let t = e.replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (e, t) => t ? "" : e);
      return t = t.replace(/,\s*([\]}])/g, "$1"), t
    }
    async function fetchSharedPromptData(e) {
      let t;
      try {
        const n = await fetchWithGM(e);
        try {
          t = JSON.parse(sanitizeJSONString(n))
        } catch (e) {
          t = JSON.parse(n)
        }
      } catch (e) {
        throw new Error(getTranslation("invalidMetadata"))
      }
      if (!t.title || !t.version || !t.prompt) throw new Error(getTranslation("invalidMetadata"));
      t.title = escapeHtmlText(t.title.replace(/\n/g, "").substring(0, 50));
      const n = escapeHtmlText((t.summary || "").replace(/\n/g, "").substring(0, 200)),
        a = escapeHtmlText(t.author || "");
      if (!isValidWhiteListUrl(t.prompt, ".txt") && !isValidWhiteListUrl(t.prompt, ".md")) throw new Error(getTranslation("invalidPromptUrl"));
      const o = await fetchWithGM(t.prompt).catch(e => {
        throw new Error(`${getTranslation("fetchPromptError")}${e.message}`)
      });
      let s = "";
      if (t.changelog && (isValidWhiteListUrl(t.changelog, ".txt") || isValidWhiteListUrl(t.changelog, ".md"))) try {
        s = await fetchWithGM(t.changelog)
      } catch (e) {}
      return {
        title: t.title,
        version: t.version,
        author: a,
        summary: n,
        promptText: o,
        changelogText: s,
        usePlaceholders: true === t.usePlaceholders,
        autoExecute: true === t.autoExecute
      }
    }

    function showSharedPromptConfirmModal(e, t, n, a = null) {
      return new Promise(o => {
        const s = document.createElement("div");
        s.className = "mp-overlay mp-diff-modal-overlay", s.id = "__ap_shared_update_overlay";
        const r = document.createElement("div");
        r.className = "mp-modal-box";
        const i = !e || "0.0.0" === e.version,
          l = a || getTranslation("updateAvailable");
        let c = "";
        c = i ? `<span class="mp-shared-version-highlight">${t.version}</span>` : `${e.version} &rarr; <span class="mp-shared-version-highlight">${t.version}</span>`;
        let d = "";
        if (i) d = ` <div class="mp-diff-column mp-diff-column-full"> <div class="mp-diff-label">${getTranslation("prompt")}</div> <div class="mp-diff-view">${t.promptText.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</div> </div> `;
        else {
          const n = getSideBySideDiff(e.text, t.promptText);
          d = ` <div class="mp-diff-column"> <div class="mp-diff-label">${getTranslation("currentVersion")}</div> <div id="__ap_shared_diff_original" class="mp-diff-view">${n.left}</div> </div> <div class="mp-diff-column"> <div class="mp-diff-label">${getTranslation("newVersion")}</div> <div id="__ap_shared_diff_new" class="mp-diff-view">${n.right}</div> </div> `
        }
        setSafeInnerHTML(r, ` <button class=mp-modal-close-btn id=__ap_diff_close>${ICONS.close}</button><h2 class=modal-title>${l}</h2><div class=mp-shared-info><div class=mp-shared-info-header><div class=mp-shared-info-list><div><strong class=mp-shared-info-label>${getTranslation("title")}:</strong> ${t.title}</div><div><strong class=mp-shared-info-label>${getTranslation("version")}:</strong> ${c}</div><div><strong class=mp-shared-info-label>${getTranslation("author")}:</strong> ${t.author||"N/A"}</div>${t.summary?`<div><strong class=mp-shared-info-label>${getTranslation("summary")}:</strong> ${t.summary}</div>`:""}</div>${n?`<button class="save-button mp-shared-btn-secondary"id=__ap_toggle_changelog>${getTranslation("readme")}</button>`:""}</div></div><div class=mp-diff-container>${d}</div><div class=mp-diff-actions><button class="save-button mp-shared-btn-cancel"id=__ap_diff_cancel>${getTranslation("cancel")}</button> <button class=save-button id=__ap_diff_accept>${getTranslation(i?"import":"updateNow")}</button></div>`), s.appendChild(r), document.body.appendChild(s), i || syncScroll(r.querySelector("#__ap_shared_diff_original"), r.querySelector("#__ap_shared_diff_new")), n && (r.querySelector("#__ap_toggle_changelog").onclick = () => {
          const e = document.createElement("div");
          e.className = "mp-overlay mp-hidden mp-shared-cl-overlay";
          const a = document.createElement("div");
          a.className = "mp-modal-box mp-shared-cl-box", setSafeInnerHTML(a, ` <button class=mp-modal-close-btn id=__ap_close_cl_update>${ICONS.close}</button><h2 class="modal-title mp-shared-cl-title">${t.title}</h2><div class="mp-shared-changelog-content mp-shared-cl-body">${n}</div>`), e.appendChild(a), document.body.appendChild(e);
          a.querySelector("#__ap_close_cl_update").onclick = t => {
            t.stopPropagation(), e.classList.remove("visible"), setTimeout(() => e.remove(), 200)
          }, requestAnimationFrame(() => {
            e.classList.remove("mp-hidden"), e.classList.add("visible")
          })
        });
        const p = e => {
          s.classList.remove("visible"), setTimeout(() => {
            s.remove(), o(e)
          }, 200)
        };
        r.querySelector("#__ap_diff_close").onclick = () => p(false), r.querySelector("#__ap_diff_cancel").onclick = () => p(false), r.querySelector("#__ap_diff_accept").onclick = () => p(true), requestAnimationFrame(() => s.classList.add("visible"))
      })
    }
    async function openSharedPromptManager(e) {
      let t = (await getAll()).find(t => t.id === e),
        n = t?.sharedUrl || "",
        a = undefined !== t?.updateInterval ? t.updateInterval : 7;
      const o = `<div class=mp-shared-intervals><label class=mp-shared-interval-label><input class="mp-checkbox mp-interval-cb"type=checkbox value=1> 1 ${getTranslation("day")}</label> <label class=mp-shared-interval-label><input class="mp-checkbox mp-interval-cb"type=checkbox value=3> 3 ${getTranslation("days")}</label> <label class=mp-shared-interval-label><input class="mp-checkbox mp-interval-cb"type=checkbox value=7> 7 ${getTranslation("days")}</label> <label class=mp-shared-interval-label><input class="mp-checkbox mp-interval-cb"type=checkbox value=30> 30 ${getTranslation("days")}</label> <label class=mp-shared-interval-label><input class="mp-checkbox mp-interval-cb"type=checkbox value=0> ${getTranslation("neverUpdate")}</label></div>`;
      let s = "";
      t?.isShared && (s = `<div class="mp-shared-info mp-shared-info-manager"><div class="align-center mp-shared-info-header"><strong class=mp-shared-info-label>${t.title}</strong> <span class=mp-shared-version-badge>v${t.version}</span></div><div class=mp-shared-info-subtext><strong class=mp-shared-info-label>${getTranslation("author")}:</strong> ${t.author||"N/A"}<br><strong class=mp-shared-info-label>${getTranslation("summary")}:</strong> ${t.summary||"N/A"}</div><div class=mp-shared-info-actions><button class="flex-1 save-button"id=__ap_shared_update_now>${getTranslation("checkUpdate")}</button> ${t.changelogText?`<button class="flex-1 save-button mp-shared-btn-secondary"id=__ap_shared_view_changelog>${getTranslation("readme")}</button>`:""}</div></div>`);
      const r = document.createElement("div");
      r.className = "mp-overlay mp-hidden", r.id = "__ap_shared_overlay";
      const i = document.createElement("div");
      i.className = "mp-modal-box", setSafeInnerHTML(i, ` <button class=mp-modal-close-btn id=__ap_shared_close>${ICONS.close}</button><h2 class=modal-title>${getTranslation("sharedPromptConfig")}</h2><div class="form-group mp-shared-form-group"><label class=form-label>${getTranslation("metadataUrl")}</label> <input class=form-input id=__ap_shared_url placeholder=https://raw.githubusercontent.com/*/*/main/*/meta.json value=${n}></div><div class=form-group><label class=form-label>${getTranslation("autoUpdateFreq")}</label> ${o}</div>${s}<div class="modal-footer mp-shared-modal-footer"><button class=save-button id=__ap_shared_apply>${getTranslation("apply")}</button></div>`), r.appendChild(i), document.body.appendChild(r);
      const l = () => {
        r.classList.remove("visible"), setTimeout(() => r.remove(), 200)
      };
      i.querySelector("#__ap_shared_close").onclick = l;
      const c = i.querySelectorAll(".mp-interval-cb");
      c.forEach(e => {
        parseInt(e.value, 10) === a && (e.checked = true), e.addEventListener("change", e => {
          e.target.checked ? c.forEach(t => {
            t !== e.target && (t.checked = false)
          }) : e.target.checked = true
        })
      });
      const p = i.querySelector("#__ap_shared_apply");
      p.onclick = async () => {
        const e = i.querySelector("#__ap_shared_url").value.trim(),
          n = i.querySelector(".mp-interval-cb:checked"),
          a = n ? parseInt(n.value, 10) : 7;
        if (e)
          if (isValidWhiteListUrl(e, ".json")) try {
            p.disabled = true, setSafeInnerHTML(p, ICONS.loading);
            const n = await fetchSharedPromptData(e),
              o = n.changelogText ? await simpleMarkdownToHtml(n.changelogText) : null,
              s = t && t.isShared,
              r = s ? t : t || {
                version: "0.0.0",
                text: ""
              };
            if (!await showSharedPromptConfirmModal(r, n, o, s ? null : getTranslation("importConfirm"))) return p.disabled = false, void(p.textContent = getTranslation("apply"));
            if (t && t.isShared) await updateById(t.id, {
              sharedUrl: e,
              updateInterval: a,
              title: n.title,
              text: n.promptText,
              usePlaceholders: n.usePlaceholders,
              autoExecute: n.autoExecute,
              version: n.version,
              author: n.author,
              summary: n.summary,
              changelogText: n.changelogText,
              lastUpdateCheck: Date.now()
            }), showNotification(getTranslation("promptUpdated"), "success");
            else {
              if (t) await updateById(t.id, {
                isShared: true,
                sharedUrl: e,
                updateInterval: a,
                title: n.title,
                text: n.promptText,
                usePlaceholders: n.usePlaceholders,
                autoExecute: n.autoExecute,
                version: n.version,
                author: n.author,
                summary: n.summary,
                changelogText: n.changelogText,
                lastUpdateCheck: Date.now()
              });
              else {
                const o = await addItem({
                  title: n.title,
                  text: n.promptText,
                  usePlaceholders: n.usePlaceholders,
                  autoExecute: n.autoExecute,
                  isShared: true,
                  sharedUrl: e,
                  updateInterval: a,
                  version: n.version,
                  author: n.author,
                  summary: n.summary,
                  changelogText: n.changelogText,
                  lastUpdateCheck: Date.now()
                });
                t = o, currentModal && (currentModal.dataset.promptId = o.id)
              }
              showNotification(getTranslation("promptImported"), "success")
            }
            if (l(), currentModal && currentModal.dataset.promptId) {
              const e = (await getAll()).find(e => e.id === currentModal.dataset.promptId);
              e && openPromptModal(e)
            }
          } catch (e) {
            createDialogo({
              message: e.message,
              type: "alert",
              title: getTranslation("error")
            }), p.disabled = false, p.textContent = getTranslation("apply")
          } else createDialogo({
            message: getTranslation("invalidUrl"),
            type: "alert",
            title: getTranslation("error")
          });
          else t?.isShared ? (await updateById(t.id, {
            isShared: false,
            sharedUrl: "",
            updateInterval: 7
          }), showNotification(getTranslation("sharedRemoved"), "success"), l(), currentModal && currentModal.dataset.promptId === t.id && openPromptModal(await getAll().then(e => e.find(e => e.id === t.id)))) : l()
      };
      const m = i.querySelector("#__ap_shared_update_now");
      m && (m.onclick = async () => {
        m.disabled = true, setSafeInnerHTML(m, ICONS.loading);
        try {
          const e = await fetchSharedPromptData(t.sharedUrl);
          if (compareVersions(e.version, t.version) > 0) {
            const n = e.changelogText ? await simpleMarkdownToHtml(e.changelogText) : null;
            if (await showSharedPromptConfirmModal(t, e, n)) {
              await updateById(t.id, {
                title: e.title,
                text: e.promptText,
                usePlaceholders: e.usePlaceholders,
                autoExecute: e.autoExecute,
                version: e.version,
                author: e.author,
                summary: e.summary,
                changelogText: e.changelogText,
                lastUpdateCheck: Date.now()
              }), showNotification(getTranslation("promptUpdated"), "success"), l();
              openPromptModal((await getAll()).find(e => e.id === t.id))
            }
          } else await updateById(t.id, {
            lastUpdateCheck: Date.now()
          }), showNotification(getTranslation("alreadyUpToDate"), "info")
        } catch (e) {
          createDialogo({
            message: e.message,
            type: "alert",
            title: getTranslation("error")
          })
        }
        m && (m.disabled = false, m.textContent = getTranslation("checkUpdate"))
      });
      const u = i.querySelector("#__ap_shared_view_changelog");
      u && (u.onclick = async () => {
        const e = await simpleMarkdownToHtml(t.changelogText || ""),
          n = document.createElement("div");
        n.className = "mp-overlay mp-hidden mp-shared-cl-overlay";
        const a = document.createElement("div");
        a.className = "mp-modal-box mp-shared-cl-box", setSafeInnerHTML(a, `<button id="__ap_close_cl_modal" class="mp-modal-close-btn">${ICONS.close}</button><h2 class="modal-title mp-shared-cl-title">${t.title}</h2><div class="mp-shared-changelog-content mp-shared-cl-body">${e}</div>`), n.appendChild(a), document.body.appendChild(n);
        a.querySelector("#__ap_close_cl_modal").onclick = e => {
          e.stopPropagation(), n.classList.remove("visible"), a.querySelectorAll("img").forEach(e => {
            e.src.startsWith("blob:") && URL.revokeObjectURL(e.src)
          }), setTimeout(() => n.remove(), 200)
        }, requestAnimationFrame(() => {
          n.classList.remove("mp-hidden"), n.classList.add("visible")
        })
      }), requestAnimationFrame(() => {
        r.classList.remove("mp-hidden"), r.classList.add("visible")
      })
    }
    async function checkAllSharedPromptsUpdates() {
      const e = await getAll(),
        t = Date.now();
      for (const n of e)
        if (n.isShared && n.updateInterval > 0) {
          const e = 24 * n.updateInterval * 60 * 60 * 1e3;
          if (t - (n.lastUpdateCheck || 0) >= e) try {
            const e = await fetchSharedPromptData(n.sharedUrl);
            if (compareVersions(e.version, n.version) > 0) {
              const a = e.changelogText ? await simpleMarkdownToHtml(e.changelogText) : null;
              await showSharedPromptConfirmModal(n, e, a) ? (await updateById(n.id, {
                title: e.title,
                text: e.promptText,
                usePlaceholders: e.usePlaceholders,
                autoExecute: e.autoExecute,
                version: e.version,
                author: e.author,
                summary: e.summary,
                changelogText: e.changelogText,
                lastUpdateCheck: t
              }), "function" == typeof showNotification && showNotification(getTranslation("promptUpdated"), "success")) : await updateById(n.id, {
                lastUpdateCheck: t
              })
            } else await updateById(n.id, {
              lastUpdateCheck: t
            })
          } catch (e) {}
        }
    }

    function showAIDiffModal(e, t, n) {
      const a = document.createElement("div");
      a.className = "mp-overlay mp-diff-modal-overlay", a.id = "__ap_diff_overlay";
      const o = document.createElement("div");
      o.className = "mp-modal-box";
      let s = false,
        r = t;
      const i = () => {
          setSafeInnerHTML(o, ` <button id="__ap_diff_close" class="mp-modal-close-btn">${ICONS.close}</button> <h2 class="modal-title">${getTranslation("compareTitle")}</h2> <div class="mp-diff-container"> ${(()=>{if(s)return` <div class="mp-diff-column"> <div class="mp-diff-label">${getTranslation("originalLabel")}</div> <textarea id="__ap_diff_original" class="mp-diff-textarea" readonly>${e}</textarea> </div> <div class="mp-diff-column"> <div class="mp-diff-label">${getTranslation("enhancedLabel")}</div> <button id="__ap_diff_toggle_mode" class="mp-pinned-action-btn mp-diff-enhanced-edit-btn active" type="button"> ${ICONS.edit} </button> <textarea id="__ap_diff_enhanced" class="mp-diff-textarea">${r}</textarea> </div> `;{const t=getSideBySideDiff(e,r);return` <div class="mp-diff-column"> <div class="mp-diff-label">${getTranslation("originalLabel")}</div> <div id="__ap_diff_original_view" class="mp-diff-view">${t.left}</div> </div> <div class="mp-diff-column"> <div class="mp-diff-label">${getTranslation("enhancedLabel")}</div> <button id="__ap_diff_toggle_mode" class="mp-pinned-action-btn mp-diff-enhanced-edit-btn" type="button"> ${ICONS.edit} </button> <div id="__ap_diff_enhanced_view" class="mp-diff-view">${t.right}</div> </div> `}})()} </div> <div class="mp-diff-actions"> <button id="__ap_diff_cancel" class="save-button mp-shared-btn-cancel">${getTranslation("keepOriginal")}</button> <button id="__ap_diff_accept" class="save-button">${getTranslation("useEnhanced")}</button> </div> `), o.querySelector("#__ap_diff_close").onclick = l, o.querySelector("#__ap_diff_cancel").onclick = l, o.querySelector("#__ap_diff_accept").onclick = () => {
            const e = s ? o.querySelector("#__ap_diff_enhanced").value : r;
            n.value = e, n.syntaxClear && n.syntaxClear(), n.syntaxUpdate && n.syntaxUpdate(), l()
          };
          const t = o.querySelector("#__ap_diff_toggle_mode");
          if (t) {
            createCustomTooltip(t, getTranslation(s ? "diff" : "editText"), "left"), t.onclick = () => {
              s ? (r = o.querySelector("#__ap_diff_enhanced").value, s = false) : s = true, i()
            }
          }
          s ? syncScroll(o.querySelector("#__ap_diff_original"), o.querySelector("#__ap_diff_enhanced")) : syncScroll(o.querySelector("#__ap_diff_original_view"), o.querySelector("#__ap_diff_enhanced_view"))
        },
        l = () => {
          a.classList.remove("visible"), setTimeout(() => a.remove(), 200)
        };
      i(), a.appendChild(o), document.body.appendChild(a), requestAnimationFrame(() => a.classList.add("visible"))
    }

    function openPromptModal(e = null) {
      if (!currentModal) return;
      const t = !!e,
        n = e?.isShared || false;
      currentModal.dataset.promptId = e?.id || "", currentModal.dataset.originalTitle = e?.title || "", currentModal.dataset.originalText = e?.text || "", currentModal.querySelector(".modal-title").textContent = getTranslation(t ? "edit" : "newPrompt");
      const a = document.getElementById("__ap_title");
      a.value = e?.title || "", a.disabled = n;
      const o = document.getElementById("__ap_text");
      o.value = e?.text || "", o.disabled = n, o.syntaxClear && o.syntaxClear(), o.syntaxUpdate && o.syntaxUpdate(), o.dispatchEvent(new Event("input", {
        bubbles: true
      }));
      const s = document.getElementById("__ap_use_placeholders");
      s.checked = e?.usePlaceholders || false, s.disabled = n;
      const r = document.getElementById("__ap_auto_execute");
      r.checked = e?.autoExecute || false, r.disabled = false;
      const i = document.getElementById("__ap_save");
      i && (i.style.display = "block");
      const l = document.getElementById("__ap_paste_btn_modal");
      l && (l.style.display = n ? "none" : "inline-flex");
      const c = document.getElementById("__ap_enhance_btn");
      c && (c.style.display = n ? "none" : "inline-flex"), currentActiveFileIds = new Set(e?.activeFileIds || []);
      const d = currentModal.querySelector(".mp-modal-box"),
        p = d.querySelector("#__ap_files_accordion") || d.querySelector("#__ap_accordion"),
        m = d.querySelector("#__ap_tags_accordion");
      p && p.classList.remove("open"), m && m.classList.remove("open"), d && d.renderGlobalFiles && d.renderGlobalFiles(), d && d.loadPromptTags && d.loadPromptTags(e?.tags || []);
      const u = document.getElementById("__ap_tags_manage");
      u && (u.style.display = "flex"), showModal(currentModal), n || setTimeout(() => a.focus(), 100)
    }

    function createLanguageModal() {
      const overlay = document.createElement("div");
      overlay.className = "mp-overlay mp-hidden lang-overlay", overlay.id = "__ap_lang_modal_overlay", overlay.onclick = () => hideModal(overlay);
      const box = document.createElement("div");
      box.className = "mp-modal-box lang-box", box.onclick = e => e.stopPropagation();
      const list = document.createElement("div");

      function renderList() {
        setSafeInnerHTML(list, "");
        Object.keys(translations).forEach((code, index) => {
          const btn = document.createElement("button");
          btn.className = "lang-button", btn.textContent = translations[code].langName, code === currentLang && btn.classList.add("selected"), btn.style.animation = "mp-fade-in-up .3s ease forwards", btn.style.animationDelay = `${Math.min(30*index,200)}ms`, btn.style.opacity = "0", btn.onclick = async () => {
            await GM_setValue("UserScriptLang", code), window.location.reload()
          }, list.appendChild(btn)
        })
      }
      list.style.display = "flex", list.style.flexDirection = "column", list.style.gap = "8px", list.style.maxHeight = "400px", renderList(), box.appendChild(list), setupEnhancedScroll(list), overlay.appendChild(box);
      return overlay
    }

    function showModal(e) {
      e && (e.classList.remove("mp-hidden"), setTimeout(() => e.classList.add("visible"), 10))
    }

    function hideModal(e) {
      e && (e.classList.remove("visible"), setTimeout(() => e.classList.add("mp-hidden"), 200))
    }
    async function openBackupManager() {
      closeMenu();
      const e = document.createElement("div");
      e.className = "mp-overlay", e.id = "__ap_backup_overlay";
      const t = document.createElement("div");
      t.className = "mp-modal-box", t.style.width = "450px !important", t.onclick = e => e.stopPropagation();
      const n = [{
        key: "aiSettings",
        label: getTranslation("aiSettings"),
        desc: getTranslation("aiSettingsDesc"),
        storageKey: AI_SETTINGS_KEY,
        defaultVal: DEFAULT_AI_CONFIG
      }, {
        key: "prompts",
        label: getTranslation("prompts"),
        desc: getTranslation("promptBdesc"),
        storageKey: "Prompts",
        defaultVal: []
      }, {
        key: "globalFiles",
        label: getTranslation("globalFiles"),
        desc: getTranslation("globalFilesDesc"),
        storageKey: "GlobalFiles",
        defaultVal: {}
      }, {
        key: "tags",
        label: getTranslation("tagsManager"),
        desc: getTranslation("tagsInUse"),
        storageKey: "PromptTags",
        defaultVal: DEFAULT_TAGS_CONFIG
      }, {
        key: "colorMode",
        label: getTranslation("colorMode"),
        desc: getTranslation("themeBackupDesc"),
        storageKey: "Theme",
        defaultVal: DEFAULT_THEME_CONFIG
      }, {
        key: "shortcuts",
        label: getTranslation("shortcuts"),
        desc: getTranslation("shortcutsDesc"),
        storageKey: SHORTCUTS_STORAGE_KEY,
        defaultVal: DEFAULT_SHORTCUTS
      }, {
        key: "prediction",
        label: getTranslation("prediction"),
        desc: getTranslation("predictionDesc"),
        storageKey: PREDICTION_STORAGE_KEY,
        defaultVal: DEFAULT_PREDICTION_CONFIG
      }, {
        key: "syntaxHighlight",
        label: getTranslation("syntaxHighlight"),
        desc: getTranslation("syntaxBackupDesc"),
        storageKey: SYNTAX_STORAGE_KEY,
        defaultVal: DEFAULT_SYNTAX_CONFIG
      }, {
        key: "lang",
        label: getTranslation("language"),
        desc: getTranslation("languageDesc"),
        storageKey: "UserScriptLang",
        defaultVal: "en"
      }];
      setSafeInnerHTML(t, ` <button class=mp-modal-close-btn id=__ap_close_backup>${ICONS.close}</button><h2 class=modal-title>${getTranslation("backupRestoreT")}</h2><div class=mp-backup-section><div class=mp-backup-subtitle>${ICONS.export} <span>${getTranslation("exportData")}</span></div><div class=mp-export-actions style=border:none;margin-top:0;padding-bottom:0;margin-bottom:8px><label class=mp-checkbox-wrapper style=cursor:pointer;user-select:none><input checked class=mp-checkbox id=__ap_backup_select_all type=checkbox> <span style=margin-left:8px>${getTranslation("selectAll")}</span></label></div><div class="mp-backup-list mp-scroll-wrapper"id=__ap_backup_list></div><div class=mp-backup-actions><button class=save-button id=__ap_do_export_backup>${getTranslation("exportFile")}</button></div></div><div class=mp-backup-divider></div><div class=mp-backup-section><div class=mp-backup-subtitle>${ICONS.import} <span>${getTranslation("importData")}</span></div><div class=mp-backup-warning>${getTranslation("importWarning")}</div><div class=mp-backup-actions style=justify-content:center><button class="save-button mp-btn-secondary"id=__ap_do_import_backup>${getTranslation("selectFile")}</button></div></div>`), e.appendChild(t), document.body.appendChild(e);
      const a = t.querySelector("#__ap_backup_list");
      a.style.maxHeight = "220px !important", setupEnhancedScroll(a), n.forEach(e => {
        const t = document.createElement("div");
        t.className = "mp-backup-item";
        const n = document.createElement("div");
        n.className = "mp-checkbox-wrapper";
        const o = document.createElement("input");
        o.type = "checkbox", o.className = "mp-checkbox backup-selector", o.dataset.key = e.key, o.dataset.storageKey = e.storageKey, o.checked = true, n.appendChild(o);
        const r = document.createElement("div");
        r.className = "mp-backup-item-content";
        const i = document.createElement("div");
        i.className = "mp-backup-item-title", i.textContent = e.label;
        const l = document.createElement("div");
        l.className = "mp-backup-item-desc", l.textContent = e.desc, r.appendChild(i), r.appendChild(l), t.onclick = e => {
          "checkbox" !== e.target.type && (o.checked = !o.checked, s())
        }, o.onchange = s, t.appendChild(n), t.appendChild(r), a.appendChild(t)
      });
      const o = t.querySelector("#__ap_backup_select_all");

      function s() {
        const e = a.querySelectorAll(".backup-selector"),
          t = Array.from(e).every(e => e.checked),
          n = Array.from(e).some(e => e.checked);
        o.checked = t, o.indeterminate = n && !t
      }
      o.onchange = e => {
        a.querySelectorAll(".backup-selector").forEach(t => t.checked = e.target.checked)
      }, t.querySelector("#__ap_do_export_backup").onclick = async () => {
        const t = Array.from(a.querySelectorAll(".backup-selector:checked"));
        if (0 === t.length) return void showNotification(getTranslation("nothingSelected"), "error");
        const n = {
          meta: {
            scriptName: "Prompt Manager",
            version: "26.4.0",
            exportDate: (new Date).toISOString()
          },
          data: {}
        };
        for (const e of t) {
          const t = e.dataset.storageKey,
            a = await GM_getValue(t);
          null != a && (n.data[t] = a)
        }
        const o = new Blob([JSON.stringify(n, null, 2)], {
            type: "application/json"
          }),
          s = document.createElement("a");
        s.href = URL.createObjectURL(o);
        const r = new Date,
          i = r.toLocaleDateString(navigator.language).replace(/\//g, "-"),
          l = r.toLocaleTimeString(navigator.language, {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          }).replace(/:/g, "-");
        s.download = `Backup_PromptManager_${i}_${l}.mp.backup.json`, s.click(), URL.revokeObjectURL(s.href), closeModal(e)
      }, t.querySelector("#__ap_do_import_backup").onclick = () => {
        const t = document.createElement("input");
        t.type = "file", t.accept = ".mp.backup.json", t.onchange = t => {
          const n = t.target.files[0];
          if (!n) return;
          const a = new FileReader;
          a.onload = async t => {
            try {
              const n = JSON.parse(t.target.result);
              if (!n || !n.data) throw new Error("Invalid format");
              const a = Object.keys(n.data);
              if (0 === a.length) throw new Error("Empty file");
              if (!await createDialogo({
                  message: getTranslation("confirmImportB", {
                    count: a.length
                  }),
                  type: "confirm"
                })) return;
              for (const e of a) await GM_setValue(e, n.data[e]);
              showNotification(getTranslation("importSuccess")), closeModal(e), location.reload()
            } catch (e) {
              await createDialogo({
                title: getTranslation("error"),
                message: getTranslation("errorImporting", {
                  error: e.message
                }),
                type: "alert"
              })
            }
          }, a.readAsText(n)
        }, t.click()
      }, t.querySelector("#__ap_close_backup").onclick = () => closeModal(e), e.onclick = t => {
        t.target === e && closeModal(e)
      }, setTimeout(() => e.classList.add("visible"), 10)
    }

    function closeModal(e) {
      e.classList.remove("visible"), setTimeout(() => e.remove(), 200)
    }

    function createTagsManagerModal() {
      const e = document.createElement("div");
      e.className = "mp-overlay mp-hidden", e.id = "__mp_tags_overlay";
      const t = document.createElement("div");
      t.className = "mp-modal-box", t.id = "__mp_tags_box", t.style.cssText = "max-width: 500px;", t.onclick = e => e.stopPropagation();
      let n = null;
      const a = () => {
          const s = null !== n,
            r = s ? getTag(n) : null;
          setSafeInnerHTML(t, ` <button id="__mp_tags_close" class="mp-modal-close-btn">${ICONS.close}</button><h2 class="modal-title">${getTranslation("tagsManager")}</h2><div class="mp-tags-modal-content" id="__mp_tags_content_scroll"><div class="mp-tag-form"><div class="form-group"><label for="__mp_tag_name" class="form-label">${getTranslation("tagName")}</label><input id="__mp_tag_name" class="form-input" placeholder="${getTranslation("exTag")}" value="${s?r.name:""}" ${s?'readonly style="opacity:0.6;cursor:not-allowed;"':""} /></div><div class="form-group" style="margin-bottom: 0px !important;"><label for="__mp_tag_comment" class="form-label">${getTranslation("tagComment")}</label><input id="__mp_tag_comment" class="form-input" placeholder="${getTranslation("exCommTag")}" value="${s&&r.comment||""}" /></div><div class="mp-tag-form-row"><div class="mp-tag-color-group"><label class="mp-tag-color-label">${getTranslation("tagBgColor")}</label><input id="__mp_tag_bg_color" type="color" class="mp-tag-color-input" value="${s&&r.bgColor||"#7071fc"}" /></div><div class="mp-tag-color-group"><label class="mp-tag-color-label">${getTranslation("tagTextColor")}</label><input id="__mp_tag_text_color" type="color" class="mp-tag-color-input" value="${s&&r.textColor||"#ffffff"}" /></div></div><button id="__mp_create_tag" class="save-button">${getTranslation(s?"saveTag":"createTag")}</button></div><div id="__mp_tags_list" class="mp-tags-list"></div></div> `);
          t.querySelector("#__mp_tags_close").onclick = () => {
            n = null, hideModal(e)
          };
          t.querySelector("#__mp_create_tag").onclick = async () => {
            const e = t.querySelector("#__mp_tag_name"),
              o = t.querySelector("#__mp_tag_bg_color"),
              s = t.querySelector("#__mp_tag_text_color"),
              r = t.querySelector("#__mp_tag_comment"),
              i = e.value.trim();
            if (!i) return void showNotification(getTranslation("tagError"), "error");
            const l = i.toLowerCase();
            if (!n && currentTagsConfig.tags[l]) return void showNotification(getTranslation("tagExists", "error"));
            if (await createOrUpdateTag({
                name: i,
                bgColor: o.value,
                textColor: s.value,
                comment: r.value.trim()
              }), n = null, a(), currentModal) {
              const e = currentModal.querySelector(".mp-modal-box");
              e && e.renderTagsSelector && e.renderTagsSelector()
            }
            const c = t.querySelector("#__mp_tag_name");
            c && c.focus()
          }, o(), setTimeout(() => {
            const e = t.querySelector("#__mp_tags_content_scroll");
            e && setupEnhancedScroll(e, null, "var(--mp-border-radius-md)")
          }, 0)
        },
        o = () => {
          const e = t.querySelector("#__mp_tags_list");
          if (!e) return;
          const s = getAllTags();
          0 !== s.length ? (setSafeInnerHTML(e, ""), s.forEach(t => {
            const s = document.createElement("div");
            s.className = "mp-tag-item";
            const r = document.createElement("div");
            r.className = "mp-tag-item-info";
            const i = document.createElement("div");
            i.className = "mp-tag-item-preview";
            const l = createTagBadge(t);
            i.appendChild(l);
            const c = document.createElement("div");
            if (c.className = "mp-tag-item-details", t.comment) {
              const e = document.createElement("div");
              e.className = "mp-tag-item-comment", e.textContent = t.comment, c.appendChild(e)
            }
            r.appendChild(i), r.appendChild(c);
            const d = document.createElement("div");
            d.className = "mp-tag-item-actions";
            const p = document.createElement("button");
            p.className = "mp-tag-action-btn edit", setSafeInnerHTML(p, ICONS.edit), createCustomTooltip(p, getTranslation("edit"), "top"), p.onclick = () => {
              n = t.name.toLowerCase(), a()
            }, d.appendChild(p);
            const m = document.createElement("button");
            m.className = "mp-tag-action-btn delete", setSafeInnerHTML(m, ICONS.delete), createCustomTooltip(m, getTranslation("delete"), "top"), m.onclick = async () => {
              const e = await createDialogo({
                message: getTranslation("confirmDeleteTag").replace("{name}", t.name),
                type: "confirm",
                dontShowAgainId: "confirme-delete-tag"
              });
              if ((true === e || "dont_show_again" === e) && (await deleteTag(t.name), showNotification(getTranslation("deleteSuccess")), o(), currentMenu && currentMenu.classList.contains("visible") && refreshMenu(), currentModal)) {
                const e = currentModal.querySelector(".mp-modal-box");
                e && e.renderTagsSelector && e.renderTagsSelector()
              }
            }, d.appendChild(m), s.appendChild(r), s.appendChild(d), e.appendChild(s)
          })) : setSafeInnerHTML(e, `<div class="mp-tags-empty">${getTranslation("noTags")}</div>`)
        };
      return t.renderContent = a, e.appendChild(t), e
    }

    function createTagBadge(e) {
      const t = document.createElement("div");
      t.className = "mp-tag-badge";
      const n = getTagStyle(e);
      t.style.backgroundColor = n.backgroundColor, t.style.color = n.color;
      const a = document.createElement("span");
      return a.textContent = e.name, t.appendChild(a), e.comment && createCustomTooltip(t, e.comment, "left"), t
    }

    function openTagsManager() {
      tagsModal || (tagsModal = createTagsManagerModal(), document.body.appendChild(tagsModal));
      const e = tagsModal.querySelector("#__mp_tags_box");
      e.renderContent && e.renderContent(), showModal(tagsModal), setTimeout(() => {
        const e = tagsModal.querySelector("#__mp_tag_name");
        e && e.focus()
      }, 100)
    }

    function setupEnhancedScroll(e, t = null, n = null) {
      if (!e) return;
      const a = window.getComputedStyle(e),
        o = a.marginBottom,
        s = a.marginTop;
      e.classList.add("mp-scroll-invisible");
      const r = document.createElement("div");
      r.className = "mp-scroll-wrapper", t && r.style.setProperty("--mp-scroll-bg", t), n && (r.style.borderRadius = n), r.style.marginBottom = o, r.style.marginTop = s, e.style.marginBottom = "0", e.style.marginTop = "0", e.parentNode.insertBefore(r, e), r.appendChild(e);
      const i = e => {
          const t = document.createElement("div");
          return t.className = `mp-scroll-arrow ${e}`, setSafeInnerHTML(t, "up" === e ? `${ICONS.navUp}` : `${ICONS.navDown}`), t
        },
        l = i("up"),
        c = i("down");
      r.appendChild(l), r.appendChild(c);
      const d = () => {
        const {
          scrollTop: t,
          scrollHeight: n,
          clientHeight: a
        } = e;
        t > 1 ? l.classList.add("visible") : l.classList.remove("visible"), n - t - a > 1 ? c.classList.add("visible") : c.classList.remove("visible")
      };
      l.onclick = t => {
        t.stopPropagation(), e.scrollBy({
          top: -100,
          behavior: "smooth"
        })
      }, c.onclick = t => {
        t.stopPropagation(), e.scrollBy({
          top: 100,
          behavior: "smooth"
        })
      }, e.addEventListener("scroll", d);
      new MutationObserver(d).observe(e, {
        childList: true,
        subtree: true
      });
      return new ResizeObserver(d).observe(e), e.updateScrollArrows = d, setTimeout(d, 0), r
    }

    function moveCursorToEnd(e) {
      setTimeout(() => {
        try {
                    if (isComposingIn(e)) return;
          if (e.focus(), "gemini" === currentPlatform) {
            const t = window.getSelection(),
              n = document.createRange();
            n.selectNodeContents(e), n.collapse(false), t.removeAllRanges(), t.addRange(n), e.scrollTop = e.scrollHeight
          }  else if ("chatgpt" === currentPlatform || "claude" === currentPlatform || "grok" === currentPlatform) {
            const t = window.getSelection(),
              n = document.createRange();
            if (n.selectNodeContents(e), n.collapse(false), t.removeAllRanges(), t.addRange(n), "grok" === currentPlatform) e.scrollTop = e.scrollHeight;
            else {
              const t = e.parentElement;
              t && (t.scrollTop = t.scrollHeight)
            }
          }  else if ("TEXTAREA" === e.tagName || "INPUT" === e.tagName) {
            const t = (e.value || "").length;
            e.setSelectionRange ? e.setSelectionRange(t, t) : e.selectionStart = e.selectionEnd = t, e.scrollTop = e.scrollHeight
          } else {
            if (restoreEditorCaret(e)) {
              e.scrollTop = e.scrollHeight;
              return
            }
            if (isFrameworkEditor(e)) return;
            const t = window.getSelection(),
              n = document.createRange();
            n.selectNodeContents(e), n.collapse(false), t && (t.removeAllRanges(), t.addRange(n)), e.scrollTop = e.scrollHeight
          }
        } catch (e) {}
      }, 10)
    }

    function positionMenu(e, t) {
      const n = t.getBoundingClientRect(),
        a = e.offsetHeight,
        o = e.offsetWidth,
        s = window.innerHeight,
        r = window.innerWidth;
      let i, l;
      const c = s - n.bottom - 8,
        d = n.top - 8;
      i = c >= a ? n.bottom + 8 : d >= a ? n.top - a - 8 : Math.max(8, s - a - 8);
      const p = r - n.left - 8,
        m = n.right - 8;
      l = p >= o ? n.left : m >= o ? n.right - o : (r - o) / 2, e.style.top = `${Math.max(8,Math.min(i,s-a-8))}px`, e.style.left = `${Math.max(8,Math.min(l,r-o-8))}px`
    }
    setTimeout(checkAllSharedPromptsUpdates, 6e3);
    const PREVIEW_PROMPT_STORAGE_KEY = "PreviewPrompt",
      DEFAULT_PREVIEW_PROMPT_CONFIG = {
        normal: true,
        expand: true
      };
    let currentPreviewPromptConfig = DEFAULT_PREVIEW_PROMPT_CONFIG;

    function savePreviewPromptConfig(e) {
      currentPreviewPromptConfig = {
        ...currentPreviewPromptConfig,
        ...e
      };
      try {
        GM_setValue(PREVIEW_PROMPT_STORAGE_KEY, JSON.stringify(currentPreviewPromptConfig))
      } catch (e) {
        console.error(e)
      }
    }

    function loadPreviewPromptConfig() {
      try {
        const e = GM_getValue(PREVIEW_PROMPT_STORAGE_KEY);
        e && (currentPreviewPromptConfig = {
          ...DEFAULT_PREVIEW_PROMPT_CONFIG,
          ...JSON.parse(e)
        })
      } catch (e) {}
    }

    function applyGlobalSortMode(e, t) {
      return t && "manual" !== t ? e.sort((e, n) => {
        if ("tags" === t) {
          const t = e.tags && e.tags.length ? e.tags.slice().sort().join(",").toLowerCase() : "zzzz",
            a = n.tags && n.tags.length ? n.tags.slice().sort().join(",").toLowerCase() : "zzzz";
          return t !== a ? t.localeCompare(a) : (e.title || "").localeCompare(n.title || "")
        }
        return "az" === t ? (e.title || "").localeCompare(n.title || "") : "za" === t ? (n.title || "").localeCompare(e.title || "") : "most_used" === t ? (n.usageCount || 0) - (e.usageCount || 0) : "least_used" === t ? (e.usageCount || 0) - (n.usageCount || 0) : "newest" === t ? String(n.id || "").localeCompare(String(e.id || "")) : "oldest" === t ? String(e.id || "").localeCompare(String(n.id || "")) : 0
      }) : e
    }

    function buildSharedFilterDropdown({
      dropdownClass: e,
      selectId: t,
      onStateChange: n,
      onManageClick: a
    }) {
      const o = document.createElement("div");
      o.className = e, o.addEventListener("click", e => e.stopPropagation()), o.addEventListener("mousedown", e => e.stopPropagation());
      const s = document.createElement("div");
      s.className = "mp-filter-header";
      const r = document.createElement("button");
      r.className = "mp-filter-manage-btn", setSafeInnerHTML(r, ICONS.edit), "function" == typeof createCustomTooltip && createCustomTooltip(r, getTranslation("tagsManager"), "top"), r.onclick = e => {
        e.stopPropagation(), o.classList.remove("visible"), a()
      };
      const i = document.createElement("button");
      i.className = "mp-filter-clear-btn", setSafeInnerHTML(i, ICONS.delete), "function" == typeof createCustomTooltip && createCustomTooltip(i, getTranslation("clearFilters"), "top"), i.onclick = async e => {
        e.stopPropagation(), await clearTagFilters(), window.__mpSortMode = "manual", o.rebuild(), n()
      }, s.appendChild(r), s.appendChild(i), o.appendChild(s);
      const l = document.createElement("div");
      setSafeInnerHTML(l, `<div style="padding:8px 12px;border-bottom:1px solid var(--mp-border-primary)"><select id=${t} style="width:100%;padding:6px;border-radius:var(--mp-border-radius-sm);background:var(--mp-bg-secondary);color:var(--mp-text-primary);border:1px solid var(--mp-border-primary);cursor:pointer;outline:0"><option value=manual>${getTranslation("sortManual")}<option value=az>${getTranslation("sortAZ")}<option value=za>${getTranslation("sortZA")}<option value=most_used>${getTranslation("sortMostUsed")}<option value=least_used>${getTranslation("sortLeastUsed")}<option value=newest>${getTranslation("sortNewest")}<option value=oldest>${getTranslation("sortOldest")}<option value=tags>${getTranslation("sortTags")}</select></div>`);
      const c = l.querySelector(`#${t}`);
      o.appendChild(l);
      const d = document.createElement("div");
      return d.className = "mp-filter-list", o.appendChild(d), "function" == typeof setupEnhancedScroll && setupEnhancedScroll(d), o.rebuild = () => {
        window.__mpSortMode || (window.__mpSortMode = currentTagsConfig.sortMode || "manual"), c.value = window.__mpSortMode, setSafeInnerHTML(d, "");
        const e = getAllTags();
        if (0 === e.length) {
          const e = document.createElement("div");
          e.className = "mp-filter-empty", e.textContent = getTranslation("noTags"), d.appendChild(e)
        } else e.forEach(e => {
          const t = e.name.toLowerCase(),
            a = isTagFilterActive(t),
            o = document.createElement("div");
          o.className = "mp-filter-item " + (a ? "selected" : ""), o.dataset.tagName = t;
          const s = document.createElement("div");
          s.className = "mp-filter-checkbox";
          const r = document.createElement("div");
          r.className = "mp-filter-tag-preview", r.appendChild(createTagBadge(e)), o.appendChild(r), o.appendChild(s), o.addEventListener("click", async e => {
            e.stopPropagation(), await toggleTagFilter(t), o.classList.toggle("selected"), n()
          }), d.appendChild(o)
        })
      }, c.onchange = e => {
        window.__mpSortMode = e.target.value, currentTagsConfig.sortMode = e.target.value, saveTagsConfig(), n()
      }, o.rebuild(), o
    }
    let _abrirPesquisaComAtalho = false;
    async function refreshMenu(e = null, t = false) {
      if (!currentMenu) return;
      const n = currentMenu.querySelector("#prompt-menu-list-el"),
        a = n ? n.scrollTop : 0;
      setSafeInnerHTML(currentMenu, "");
      let o = -1;
      document.querySelectorAll(".mp-filter-dropdown").forEach(e => e.remove());
      const s = await getAll(),
        r = document.createElement("div");
      r.className = "menu-header-grid";
      const i = (e, t, n, a) => {
          const o = document.createElement("button");
          return o.className = `menu-header-btn ${e}`, setSafeInnerHTML(o, t), "function" == typeof createCustomTooltip && createCustomTooltip(o, n, "top"), o.onclick = a, o
        },
        l = document.createElement("div");
      l.className = "menu-search-overlay";
      const c = document.createElement("input");
      c.className = "menu-search-input", c.placeholder = getTranslation("search"), c.type = "text", c.autocomplete = "off", c.onclick = e => e.stopPropagation(), c.style.padding = "6.5px 12px";
      const d = document.createElement("button");
      d.className = "menu-header-btn", d.style.border = "none", d.style.padding = "0 8px", setSafeInnerHTML(d, ICONS.close), d.onclick = e => {
        e.stopPropagation(), l.style.transform = "translateX(110%)", c.value = "", c.dispatchEvent(new Event("input"))
      }, l.appendChild(c), l.appendChild(d);
      const p = i("btn-search", ICONS.search, getTranslation("search"), e => {
          e.stopPropagation(), l.style.transform = "translateX(0)", setTimeout(() => c.focus(), 50)
        }),
        m = i("btn-expand", ICONS.expand2, getTranslation("expand"), e => {
          e.stopPropagation(), closeMenu(), openExpandedPromptMenu()
        }),
        u = i("btn-filter", ICONS.filter, getTranslation("filter"), e => {
          e.stopPropagation(), v = !v, v ? (h(), f.classList.add("visible")) : f.classList.remove("visible")
        }),
        g = () => {
          const e = undefined !== currentTagsConfig && currentTagsConfig.activeFilters && currentTagsConfig.activeFilters.length > 0,
            t = window.__mpSortMode && "manual" !== window.__mpSortMode;
          e || t ? (u.classList.add("active"), setSafeInnerHTML(u, ICONS.filterAct || ICONS.filter)) : (u.classList.remove("active"), setSafeInnerHTML(u, ICONS.filter))
        };
      g(), r.appendChild(p), r.appendChild(m), r.appendChild(u), r.appendChild(l), currentMenu.appendChild(r);
      const f = buildSharedFilterDropdown({
        dropdownClass: "mp-filter-dropdown",
        selectId: "mp-sort-select-normal",
        onStateChange: () => {
          g(), S()
        },
        onManageClick: () => {
          v = false, openTagsManager()
        }
      });
      f.id = "__mp_filter_dropdown";
      const h = () => {
        const e = u.getBoundingClientRect();
        f.style.position = "fixed", f.style.top = `${e.bottom+8}px`;
        let t = e.left;
        t + 220 > window.innerWidth && (t = window.innerWidth - 228), f.style.left = `${t}px`, f.style.maxHeight = "280px"
      };
      let v = false;
      const y = e => {
        f.contains(e.target) || e.target === u || u.contains(e.target) || (f.classList.remove("visible"), v = false)
      };
      setTimeout(() => {
        document.addEventListener("click", y)
      }, 0), document.body.appendChild(f);
      const b = document.createElement("div");
      b.className = "prompt-menu-list", b.id = "prompt-menu-list-el";
      const x = document.createElement("div");
      x.className = "empty-state", b.appendChild(x);
      const C = () => {
          const e = Array.from(b.querySelectorAll(".prompt-item-row")).filter(e => "none" !== e.style.display);
          if (b.querySelectorAll(".prompt-item-row.nav-selected").forEach(e => e.classList.remove("nav-selected")), o >= 0 && o < e.length) {
            const t = e[o];
            t.classList.add("nav-selected"), t.scrollIntoView({
              block: "nearest",
              behavior: "smooth"
            })
          }
        },
        w = (e, t, n, a) => {
          const o = document.createElement("button");
          return o.className = `action-btn ${e}`, setSafeInnerHTML(o, t), "function" == typeof createCustomTooltip && createCustomTooltip(o, n, "top"), o.onclick = e => {
            e.stopPropagation(), a(e)
          }, o
        },
        _ = (n, a, o) => {
          let s = n.querySelector(".prompt-actions");
          if (s || (s = document.createElement("div"), s.className = "prompt-actions", n.appendChild(s)), setSafeInnerHTML(s, ""), o) {
            n.classList.add("drag-mode"), n.draggable = true;
            const e = a.isFixed ? getTranslation("unpin") : getTranslation("pin"),
              t = a.isFixed ? "unpin" : "pin";
            s.appendChild(w(t, ICONS.pin, e, async () => {
              a.isFixed = !a.isFixed, await updateById(a.id, {
                isFixed: a.isFixed
              }), _(n, a, true)
            })), s.appendChild(w("restore", ICONS.save, getTranslation("save"), () => {
              _(n, a, false)
            }))
          } else n.classList.remove("drag-mode"), n.draggable = false, s.appendChild(w("edit", ICONS.edit, getTranslation("edit"), () => openPromptModal(a))), s.appendChild(w("copy", ICONS.copy, getTranslation("copy"), async () => {
            const n = await getRawPrompts(),
              o = generatePromptId(),
              {
                id: s,
                isShared: r,
                sharedUrl: i,
                updateInterval: l,
                lastUpdateCheck: c,
                version: d,
                author: p,
                summary: m,
                changelogText: u,
                ...g
              } = a;
            n[o] = {
              ...g,
              title: a.title + getTranslation("copyT"),
              usageCount: 0,
              isFixed: false,
              isShared: false
            }, await saveRawPrompts(n), "function" == typeof showNotification && showNotification(getTranslation("copySuccess"), "success"), await refreshMenu(e, t)
          })), s.appendChild(w("delete", ICONS.delete, getTranslation("delete"), async () => {
            if (await createDialogo({
                message: getTranslation("confirmDelete", {
                  title: a.title
                }),
                type: "confirm"
              })) {
              await removeById(a.id), "function" == typeof showNotification && showNotification(getTranslation("deleteSuccess")), n.remove();
              0 === b.querySelectorAll(".prompt-item-row").length && (x.textContent = getTranslation("noSavedPrompts"), x.style.display = "block")
            }
          })), s.appendChild(w("drag", ICONS.drag, getTranslation("move"), () => _(n, a, true))), a.isFixed && s.appendChild(w("unpin", ICONS.pin, getTranslation("unpin"), async () => {
            a.isFixed = false, await updateById(a.id, {
              isFixed: false
            }), _(n, a, false)
          }))
        },
        T = async (e, t) => {
          if (e === t) return;
          const n = b.querySelector(`[data-prompt-id="${e}"]`),
            a = b.querySelector(`[data-prompt-id="${t}"]`);
          if (!n || !a) return;
          const o = Array.from(b.querySelectorAll(".prompt-item-row"));
          o.indexOf(n) < o.indexOf(a) ? a.after(n) : a.before(n), await (async () => {
            const e = b.querySelectorAll(".prompt-item-row"),
              t = await getRawPrompts();
            let n = 1;
            e.forEach(e => {
              const a = e.dataset.promptId;
              t[a] && (t[a].position = n++)
            }), await saveRawPrompts(t)
          })()
        }, S = () => {
          b.querySelectorAll(".prompt-item-row").forEach(e => e.remove());
          let t = s.filter(e => promptMatchesFilter(e));
          t = applyGlobalSortMode(t, window.__mpSortMode || "manual");
          const n = c.value.toLowerCase();
          if (0 === t.length) {
            const e = undefined !== currentTagsConfig && currentTagsConfig.activeFilters && currentTagsConfig.activeFilters.length > 0;
            return x.textContent = getTranslation(e ? "noSearchResults" : "noSavedPrompts"), void(x.style.display = "block")
          }
          x.style.display = "none", x.textContent = getTranslation("noSearchResults");
          let a = 0;
          t.forEach(t => {
            const s = document.createElement("div");
            s.className = "prompt-item-row", s.dataset.searchText = (t.title + " " + t.text).toLowerCase(), s.dataset.promptId = t.id, n && !s.dataset.searchText.includes(n) ? s.style.display = "none" : (s.style.display = "flex", a++), s.addEventListener("dragstart", e => {
              e.stopPropagation(), e.dataTransfer.effectAllowed = "move", e.dataTransfer.setData("text/plain", t.id), s.style.opacity = "0.5"
            }), s.addEventListener("dragover", e => {
              e.preventDefault(), e.stopPropagation(), e.dataTransfer.dropEffect = "move", s.classList.add("nav-selected");
              const t = b.getBoundingClientRect(),
                n = e.clientY - t.top;
              n < 40 ? b.scrollTop -= 10 : n > t.height - 40 && (b.scrollTop += 10)
            }), s.addEventListener("dragleave", e => {
              e.stopPropagation(), s.classList.remove("nav-selected")
            }), s.addEventListener("dragend", e => {
              e.stopPropagation(), s.style.opacity = "1", b.querySelectorAll(".prompt-item-row").forEach(e => e.classList.remove("nav-selected"))
            }), s.addEventListener("drop", e => {
              e.stopPropagation(), e.preventDefault(), s.classList.remove("nav-selected");
              const n = e.dataTransfer.getData("text/plain");
              n && T(n, t.id)
            }), s.onmouseenter = () => {
              b.querySelector(".drag-mode") || (o = -1, C())
            }, undefined !== currentPreviewPromptConfig && currentPreviewPromptConfig.normal && t.text && createCustomTooltip(s, {
              previewMode: true,
              text: t.text
            }, "left");
            const r = document.createElement("div");
            r.style.cssText = "flex: 1; display: flex; flex-direction: column; overflow: hidden;";
            const i = document.createElement("div");
            i.className = "prompt-title", i.textContent = t.title, t.color && i.style.setProperty("color", t.color, "important");
            const l = async () => {
              s.classList.contains("drag-mode") || (t.usageCount = (t.usageCount || 0) + 1, await updateById(t.id, {
                usageCount: t.usageCount
              }), undefined !== currentPlaceholderModal && currentPlaceholderModal && (currentPlaceholderModal.dataset.fromInline = "false"), t.usePlaceholders ? openPlaceholderModal(t) : insertPrompt(t), closeMenu())
            };
            if (i.onclick = e => {
                e.stopPropagation(), l()
              }, s.executeItem = l, r.appendChild(i), t.tags && t.tags.length > 0) {
              const e = document.createElement("div");
              e.className = "prompt-tags-container", t.tags.forEach(t => {
                const n = getTag(t);
                n && e.appendChild(createTagBadge(n))
              }), r.appendChild(e)
            }
            s.appendChild(r);
            const c = t.id === e;
            _(s, t, c), b.appendChild(s)
          }), 0 === a && n && (x.style.display = "block")
        };
      S(), currentMenu.appendChild(b), setupEnhancedScroll(b), e ? a > 0 ? b.scrollTop = a : setTimeout(() => {
        const t = b.querySelector(`[data-prompt-id="${e}"]`);
        t && t.scrollIntoView({
          block: "nearest"
        })
      }, 50) : a > 0 && (b.scrollTop = a), c.oninput = e => {
        const t = e.target.value.toLowerCase(),
          n = b.querySelectorAll(".prompt-item-row");
        let a = 0;
        o = -1, n.forEach(e => {
          e.dataset.searchText && e.dataset.searchText.includes(t) ? (e.style.display = "flex", a++) : e.style.display = "none"
        }), C(), x.style.display = 0 === a ? "block" : "none"
      }, c.onkeydown = e => {
        if ("Escape" === e.key) return void closeMenu();
        const t = Array.from(b.querySelectorAll(".prompt-item-row")).filter(e => "none" !== e.style.display);
        0 !== t.length && ("ArrowDown" === e.key ? (e.preventDefault(), o++, o >= t.length && (o = 0), C()) : "ArrowUp" === e.key ? (e.preventDefault(), o--, o < 0 && (o = t.length - 1), C()) : "Enter" === e.key && o >= 0 && t[o].executeItem && (e.preventDefault(), t[o].executeItem()))
      };
      const E = document.createElement("div");
      E.className = "menu-footer-grid";
      const M = (e, t, n, a) => {
        const o = document.createElement("button");
        return o.className = `menu-footer-btn ${e}`, setSafeInnerHTML(o, t), "function" == typeof createCustomTooltip && createCustomTooltip(o, n, "bottom"), o.onclick = a, o
      };
      E.appendChild(M("btn-export", ICONS.export, getTranslation("export"), e => {
        e.stopPropagation(), exportPrompts()
      })), E.appendChild(M("btn-add", ICONS.add, getTranslation("newPrompt"), e => {
        e.stopPropagation(), openPromptModal()
      })), E.appendChild(M("btn-import", ICONS.import, getTranslation("import"), e => {
        e.stopPropagation(), importPrompts()
      })), currentMenu.appendChild(E), _abrirPesquisaComAtalho && (l.style.transform = "translateX(0)", setTimeout(() => c.focus(), 50), _abrirPesquisaComAtalho = false), currentMenu._filterCleanup = () => {
        document.removeEventListener("click", y), f.parentNode && f.remove()
      }
    }
    async function openExpandedPromptMenu() {
      const e = "Columns";
      let t = await getAll(),
        n = await Promise.resolve(GM_getValue(e, 3)),
        a = false,
        o = false,
        s = new Set,
        r = -1,
        i = -1,
        l = null,
        c = 0;
      const d = document.createElement("div");
      d.className = "mp-expanded-overlay", d.onclick = e => {
        e.target === d && z()
      };
      const p = document.createElement("div");
      p.className = "mp-expanded-modal";
      const m = document.createElement("div");
      m.className = "mp-expanded-header";
      const u = document.createElement("div");
      u.className = "mp-expanded-actions-left";
      const g = document.createElement("div");
      g.className = "mp-expanded-search-container";
      const f = document.createElement("input");
      f.className = "mp-expanded-search", f.placeholder = getTranslation("search"), f.type = "text", g.appendChild(f);
      const h = document.createElement("div");
      h.className = "mp-expanded-list", h.style.gridTemplateColumns = `repeat(${n}, minmax(0, 1fr))`;
      const v = (e, t, n, a) => {
          const o = document.createElement("button");
          return o.className = `mp-pinned-action-btn ${e}`, setSafeInnerHTML(o, t), "function" == typeof createCustomTooltip && createCustomTooltip(o, n, "bottom"), o.onclick = a, o
        },
        y = () => {
          const e = a || o;
          if (A.style.display = e ? "none" : "flex", P.style.display = e ? "none" : "flex", I.style.display = e ? "none" : "flex", k.style.display = e ? "none" : "flex", x.style.display = e ? "none" : "flex", C.style.display = e ? "none" : "flex", b.style.display = e ? "none" : "flex", w.style.display = e ? "none" : "flex", _.style.display = o ? "flex" : "none", T.style.display = o ? "flex" : "none", S.style.display = o ? "flex" : "none", E.style.display = a ? "flex" : "none", M.style.display = a ? "flex" : "none", o) {
            const e = Array.from(h.querySelectorAll(".prompt-item-row")).filter(e => "none" !== e.style.display);
            e.length > 0 && e.every(e => s.has(e.dataset.promptId)) ? _.classList.add("active") : _.classList.remove("active"), T.classList.toggle("has-selection", s.size > 0)
          }
        },
        b = v("btn-add", ICONS.add, getTranslation("newPrompt"), () => {
          z(), openPromptModal()
        }),
        x = v("btn-export", ICONS.export, getTranslation("export"), () => {
          z(), exportPrompts()
        }),
        C = v("btn-import", ICONS.import, getTranslation("import"), () => {
          z(), importPrompts()
        }),
        w = v("btn-close", ICONS.close, getTranslation("close"), () => z()),
        _ = v("btn-select-all", ICONS.check, getTranslation("selectAll"), () => {
          const e = Array.from(h.querySelectorAll(".prompt-item-row")).filter(e => "none" !== e.style.display);
          e.length > 0 && e.every(e => s.has(e.dataset.promptId)) ? e.forEach(e => s.delete(e.dataset.promptId)) : e.forEach(e => s.add(e.dataset.promptId)), y(), V()
        }),
        T = v("btn-delete", ICONS.delete, getTranslation("delete"), async () => {
          s.size > 0 && await N()
        }),
        S = v("btn-close", ICONS.close, getTranslation("close"), () => {
          o = false, s.clear(), y(), V()
        }),
        E = v("btn-save", ICONS.save, getTranslation("save"), async () => {
          await H(), t = await getAll(), a = false, y(), V()
        }),
        M = v("btn-close", ICONS.close, getTranslation("close"), async () => {
          a = false, t = await getAll(), y(), V()
        }),
        I = v("btn-move", ICONS.drag, getTranslation("move"), () => {
          a = true, document.querySelector(".mp-expanded-filter-dropdown") && document.querySelector(".mp-expanded-filter-dropdown").classList.remove("visible"), y(), V()
        }),
        k = v("btn-delete", ICONS.delete, getTranslation("delete"), () => {
          o = true, document.querySelector(".mp-expanded-filter-dropdown") && document.querySelector(".mp-expanded-filter-dropdown").classList.remove("visible"), y(), V()
        }),
        N = async () => {
          if (await createDialogo({
              message: getTranslation("deletePrompts", {
                title: s.size
              }),
              type: "confirm"
            })) {
            for (let e of s) await removeById(e);
            "function" == typeof showNotification && showNotification(getTranslation("deleteSuccess")), t = await getAll(), o = false, s.clear(), r = -1, y(), V()
          }
        }, L = e => 1 === e ? ICONS.navMenu : 2 === e ? ICONS.grid2 : ICONS.grid3, P = v("btn-cols", L(n), getTranslation("colunas"), async () => {
          n = n >= 3 ? 1 : n + 1, setSafeInnerHTML(P, L(n)), await Promise.resolve(GM_setValue(e, n)), h.style.gridTemplateColumns = `repeat(${n}, minmax(0, 1fr))`
        }), A = v("btn-filter", ICONS.filter, getTranslation("filter"), e => {
          e.stopPropagation(), O(A)
        }), $ = () => {
          const e = undefined !== currentTagsConfig && currentTagsConfig.activeFilters && currentTagsConfig.activeFilters.length > 0,
            t = window.__mpSortMode && "manual" !== window.__mpSortMode;
          e || t ? (A.classList.add("active"), setSafeInnerHTML(A, ICONS.filterAct || ICONS.filter)) : (A.classList.remove("active"), setSafeInnerHTML(A, ICONS.filter))
        };
      $(), u.appendChild(A), u.appendChild(P), u.appendChild(_), u.appendChild(T), u.appendChild(S), u.appendChild(E), u.appendChild(M), u.appendChild(I), u.appendChild(k), u.appendChild(x), u.appendChild(C), u.appendChild(b), u.appendChild(w), y(), m.appendChild(g), m.appendChild(u), p.appendChild(m);
      const q = buildSharedFilterDropdown({
        dropdownClass: "mp-filter-dropdown mp-expanded-filter-dropdown",
        selectId: "mp-sort-select-expanded",
        onStateChange: () => {
          $(), V()
        },
        onManageClick: () => {
          z(), openTagsManager()
        }
      });
      document.body.appendChild(q);
      const O = e => {
          if (q.classList.contains("visible")) q.classList.remove("visible");
          else {
            q.rebuild();
            const t = e.getBoundingClientRect();
            q.style.position = "fixed", q.style.top = `${t.bottom+8}px`;
            let n = t.left;
            n + 220 > window.innerWidth && (n = window.innerWidth - 228), q.style.left = `${n}px`, q.style.maxHeight = "280px", q.classList.add("visible")
          }
        },
        D = e => {
          q.contains(e.target) || A.contains(e.target) || q.classList.remove("visible")
        };
      document.addEventListener("click", D);
      const F = document.createElement("div");
      F.className = "empty-state", p.appendChild(h), p.appendChild(F), setupEnhancedScroll(h);
      const H = async () => {
        const e = h.querySelectorAll(".prompt-item-row"),
          t = await getRawPrompts();
        let n = 1;
        e.forEach(e => {
          const a = e.dataset.promptId;
          t[a] && (t[a].position = n++)
        }), await saveRawPrompts(t)
      }, R = e => {
        c !== e && (c = e, l && clearInterval(l), l = setInterval(() => {
          h.scrollTop += c
        }, 20))
      }, G = () => {
        l && (clearInterval(l), l = null), c = 0
      }, B = e => {
        if (!e) return;
        const t = h.getBoundingClientRect();
        e >= t.top && e <= t.top + 80 ? R(-15) : e <= t.bottom && e >= t.bottom - 80 ? R(15) : G()
      };
      h.addEventListener("dragover", e => {
        a && (e.preventDefault(), B(e.clientY))
      }), h.addEventListener("dragleave", e => {
        h.contains(e.relatedTarget) || G()
      }), h.addEventListener("drop", () => G());
      const U = (e, t, n, a) => {
          const o = document.createElement("button");
          return o.className = `action-btn ${e}`, setSafeInnerHTML(o, t), "function" == typeof createCustomTooltip && createCustomTooltip(o, n, "top"), o.onclick = e => {
            e.stopPropagation(), a(e)
          }, o
        },
        V = () => {
          setSafeInnerHTML(h, "");
          let e = t.filter(e => promptMatchesFilter(e));
          e = applyGlobalSortMode(e, window.__mpSortMode || "manual");
          const i = f.value.toLowerCase();
          if (0 === e.length) {
            const e = undefined !== currentTagsConfig && currentTagsConfig.activeFilters && currentTagsConfig.activeFilters.length > 0;
            return F.textContent = getTranslation(e ? "noSearchResults" : "noSavedPrompts"), void(F.style.display = "block")
          }
          F.style.display = "none", F.textContent = getTranslation("noSearchResults");
          let l = 0,
            c = 0;
          e.forEach(e => {
            const d = document.createElement("div");
            if (d.className = "prompt-item-row expanded-mode", d.dataset.searchText = (e.title + " " + e.text).toLowerCase(), d.dataset.promptId = e.id, i && !d.dataset.searchText.includes(i) ? d.style.display = "none" : (d.style.display = "flex", l++, c++), n > 1 && !o) {
              const e = document.createElement("div");
              e.className = "mp-prompt-index", e.style.cssText = "font-family: var(--mp-font-family-base); color: var(--mp-text-secondary); font-size: 11px; min-width: 20px; text-align: center; opacity: 0.6; font-weight: bold;", e.textContent = "none" === d.style.display ? "" : c, d.appendChild(e)
            }
            if (o) {
              d.style.cursor = "pointer";
              const t = document.createElement("div");
              t.style.paddingRight = "12px", t.style.display = "flex", t.style.alignItems = "center";
              const n = document.createElement("input");
              n.type = "checkbox", n.className = "mp-checkbox", n.checked = s.has(e.id), n.style.pointerEvents = "none", t.appendChild(n), d.appendChild(t)
            }
            const p = document.createElement("div");
            p.style.cssText = "flex: 1; display: flex; flex-direction: column; overflow: hidden; min-width: 0; padding: 0 8px; justify-content: center;";
            const m = document.createElement("div");
            if (m.className = "prompt-title", m.textContent = e.title, e.color && m.style.setProperty("color", e.color, "important"), p.appendChild(m), e.tags && e.tags.length > 0) {
              const t = document.createElement("div");
              t.className = "prompt-tags-container", e.tags.forEach(e => {
                const n = getTag(e);
                n && t.appendChild(createTagBadge(n))
              }), p.appendChild(t)
            }
            d.appendChild(p);
            const u = document.createElement("div");
            if (u.className = "prompt-actions", a) {
              d.classList.add("drag-mode"), d.draggable = true, d.style.border = "1px dashed var(--mp-accent-primary)";
              const n = e.isFixed ? getTranslation("unpin") : getTranslation("pin"),
                a = e.isFixed ? "unpin" : "pin",
                o = async n => {
                  const a = n.currentTarget;
                  e.isFixed = !e.isFixed, await updateById(e.id, {
                    isFixed: e.isFixed
                  });
                  const s = t.find(t => t.id === e.id);
                  s && (s.isFixed = e.isFixed);
                  const r = e.isFixed ? getTranslation("unpin") : getTranslation("pin"),
                    i = e.isFixed ? "unpin" : "pin",
                    l = U(i, ICONS.pin, r, o);
                  a.replaceWith(l)
                };
              u.appendChild(U(a, ICONS.pin, n, o)), d.addEventListener("dragstart", t => {
                t.stopPropagation(), t.dataTransfer.effectAllowed = "move", t.dataTransfer.setData("text/plain", e.id), d.style.opacity = "0.5"
              }), d.addEventListener("drag", e => {
                e.clientY > 0 && B(e.clientY)
              }), d.addEventListener("dragover", e => {
                e.preventDefault(), e.stopPropagation(), e.dataTransfer.dropEffect = "move", d.classList.add("nav-selected"), B(e.clientY)
              }), d.addEventListener("dragleave", e => {
                e.stopPropagation(), d.classList.remove("nav-selected")
              }), d.addEventListener("dragend", e => {
                e.stopPropagation(), d.style.opacity = "1", h.querySelectorAll(".prompt-item-row").forEach(e => e.classList.remove("nav-selected")), G()
              }), d.addEventListener("drop", t => {
                t.stopPropagation(), t.preventDefault(), d.classList.remove("nav-selected");
                const n = t.dataTransfer.getData("text/plain");
                n && (async (e, t) => {
                  if (e === t) return;
                  const n = h.querySelector(`[data-prompt-id="${e}"]`),
                    a = h.querySelector(`[data-prompt-id="${t}"]`);
                  if (!n || !a) return;
                  const o = Array.from(h.querySelectorAll(".prompt-item-row"));
                  o.indexOf(n) < o.indexOf(a) ? a.after(n) : a.before(n)
                })(n, e.id), G()
              })
            } else o || (u.appendChild(U("edit", ICONS.edit, getTranslation("edit"), () => {
              z(), openPromptModal(e)
            })), u.appendChild(U("copy", ICONS.copy, getTranslation("copy"), async () => {
              const n = await getRawPrompts(),
                a = generatePromptId(),
                {
                  id: o,
                  isShared: s,
                  sharedUrl: r,
                  updateInterval: i,
                  lastUpdateCheck: l,
                  version: c,
                  author: d,
                  summary: p,
                  changelogText: m,
                  ...u
                } = e;
              n[a] = {
                ...u,
                title: e.title + getTranslation("copyT"),
                usageCount: 0,
                isFixed: false,
                isShared: false
              }, await saveRawPrompts(n), "function" == typeof showNotification && showNotification(getTranslation("copySuccess"), "success"), t = await getAll(), V()
            })), u.appendChild(U("delete", ICONS.delete, getTranslation("delete"), async () => {
              await createDialogo({
                message: getTranslation("confirmDelete", {
                  title: e.title
                }),
                type: "confirm"
              }) && (await removeById(e.id), "function" == typeof showNotification && showNotification(getTranslation("deleteSuccess")), t = await getAll(), V())
            })), e.isFixed && u.appendChild(U("unpin", ICONS.pin, getTranslation("unpin"), async () => {
              e.isFixed = false, await updateById(e.id, {
                isFixed: false
              }), t = await getAll(), V()
            })));
            d.appendChild(u), h.appendChild(d);
            const g = async () => {
              a || o || (e.usageCount = (e.usageCount || 0) + 1, await updateById(e.id, {
                usageCount: e.usageCount
              }), undefined !== currentPlaceholderModal && currentPlaceholderModal && (currentPlaceholderModal.dataset.fromInline = "false"), e.usePlaceholders ? openPlaceholderModal(e) : insertPrompt(e), z())
            };
            d.executeItem = g, undefined !== currentPreviewPromptConfig && currentPreviewPromptConfig.expand && e.text && !a && !o && createCustomTooltip(d, {
              previewMode: true,
              text: e.text
            }, "left"), d.onclick = t => {
              if (t.stopPropagation(), o) {
                const n = Array.from(h.querySelectorAll(".prompt-item-row")).filter(e => "none" !== e.style.display),
                  a = n.indexOf(d),
                  o = !s.has(e.id);
                if (t.shiftKey && -1 !== r) {
                  const e = Math.min(a, r),
                    t = Math.max(a, r);
                  for (let a = e; a <= t; a++) {
                    const e = n[a].dataset.promptId;
                    o ? s.add(e) : s.delete(e);
                    const t = n[a].querySelector(".mp-checkbox");
                    t && (t.checked = s.has(e))
                  }
                } else {
                  o ? s.add(e.id) : s.delete(e.id);
                  const t = d.querySelector(".mp-checkbox");
                  t && (t.checked = s.has(e.id))
                }
                r = a, y()
              } else a || g()
            }
          }), 0 === l && i && (F.style.display = "block")
        };
      V();
      const j = e => {
          e.forEach((e, t) => {
            t === i ? (e.classList.add("nav-selected"), e.scrollIntoView({
              block: "nearest"
            })) : e.classList.remove("nav-selected")
          })
        },
        K = e => {
          if (!d.parentNode) return;
          const t = Array.from(h.querySelectorAll(".prompt-item-row")).filter(e => "none" !== e.style.display);
          0 !== t.length && ("ArrowDown" === e.key ? (e.preventDefault(), i = -1 === i ? 0 : (i + 1) % t.length, j(t)) : "ArrowUp" === e.key ? (e.preventDefault(), i = -1 === i ? t.length - 1 : (i - 1 + t.length) % t.length, j(t)) : "Enter" === e.key && i >= 0 && i < t.length && (e.preventDefault(), t[i].executeItem && t[i].executeItem()))
        };
      document.addEventListener("keydown", K), f.oninput = () => {
        i = -1, r = -1, V()
      };
      const z = () => {
        document.removeEventListener("keydown", K), document.removeEventListener("click", D), q.parentNode && q.remove();
        d.querySelectorAll("button, [aria-describedby]").forEach(e => {
          "function" == typeof e._removeTooltipEvents && e._removeTooltipEvents()
        }), d.parentNode && d.parentNode.removeChild(d)
      };
      d.appendChild(p), document.body.appendChild(d), setTimeout(() => f.focus(), 50)
    }

    function closeMenu() {
      currentMenu && (currentMenu._filterCleanup && currentMenu._filterCleanup(), currentMenu.classList.contains("visible") && currentMenu.classList.remove("visible")), document.querySelectorAll(".mp-filter-dropdown").forEach(e => e.remove())
    }

    function openPlaceholderModal(e) {
      const {
        processedText: t,
        ignoreMap: n,
        selectMap: a,
        inputMap: o,
        fileMap: s
      } = parsePromptInternal(e.text);
      if (0 === a.size && 0 === o.size && 0 === s.size) {
        let a = t;
        n.forEach((e, t) => {
          a = a.replace(t, e)
        });
        return void insertPrompt({
          ...e,
          text: a
        })
      }
      if (!currentPlaceholderModal) return;
      const r = document.getElementById("__ap_placeholder_modal_title");
      r && (r.textContent = e.title || getTranslation("fillPlaceholders"), e.color ? r.style.setProperty("color", e.color, "important") : r.style.removeProperty("color"));
      const i = document.getElementById("__ap_placeholders_container");
      setSafeInnerHTML(i, ""), currentPlaceholderModal.dataset.parseData = JSON.stringify({
        processedText: t,
        ignoreMap: Array.from(n.entries()),
        selectMap: Array.from(a.entries()),
        inputMap: Array.from(o.entries()),
        fileMap: Array.from(s.entries())
      }), currentPlaceholderModal.dataset.promptId = e.id || "", currentPlaceholderModal.dataset.originalItem = JSON.stringify(e), currentPlaceholderModal._tempFiles || (currentPlaceholderModal._tempFiles = new Map), currentPlaceholderModal._tempFiles.clear();
      const l = t.match(/__(FILE|INPUT|SELECT)_\d+__/g) || [],
        c = new Set;
      l.forEach(e => {
        if (!c.has(e))
          if (c.add(e), e.startsWith("__FILE_") && s.has(e)) {
            const t = s.get(e),
              n = document.createElement("div");
            n.className = "form-group", n.dataset.fileKey = e;
            const a = document.createElement("label");
            a.className = "form-label", a.textContent = t.title, n.appendChild(a);
            const o = document.createElement("div");
            o.className = "mp-file-scroll-wrapper mp-dynamic-dropzone";
            const r = document.createElement("div");
            r.className = "mp-file-grid mp-dynamic-grid-w100", o.appendChild(r);
            const l = document.createElement("input");
            l.type = "file", l.multiple = true, l.className = "mp-hidden-file-input", n.appendChild(o), n.appendChild(l);
            const c = () => {
              const t = currentPlaceholderModal._tempFiles.get(e) || [];
              if (setSafeInnerHTML(r, ""), 0 === t.length) {
                r.classList.add("empty-state"), o.classList.add("empty-state");
                const e = document.createElement("div");
                e.className = "mp-empty-state-container";
                const t = document.createElement("div");
                t.className = "mp-file-empty-icon", setSafeInnerHTML(t, ICONS.cloudFile);
                const n = document.createElement("div");
                n.className = "mp-file-empty-subtext", n.textContent = getTranslation("addCards"), e.appendChild(t), e.appendChild(n), r.appendChild(e)
              } else {
                r.classList.remove("empty-state"), o.classList.remove("empty-state");
                const e = document.createElement("div");
                e.className = "mp-add-file-card", setSafeInnerHTML(e, ICONS.plus), e.onclick = e => {
                  e.stopPropagation(), l.click()
                }, r.appendChild(e), t.forEach((e, n) => {
                  const a = document.createElement("div");
                  a.className = "mp-file-card active", createCustomTooltip(a, e.name, "bottom");
                  const o = document.createElement("div");
                  if (o.className = "mp-file-delete-perm", setSafeInnerHTML(o, ICONS.close), o.onclick = e => {
                      e.stopPropagation(), e.preventDefault(), t.splice(n, 1), c()
                    }, e.type.startsWith("image/")) {
                    const t = document.createElement("img");
                    t.className = "mp-file-thumb", t.src = URL.createObjectURL(e), a.appendChild(t)
                  } else setSafeInnerHTML(a, ICONS.file);
                  a.appendChild(o), r.appendChild(a)
                })
              }
            };
            currentPlaceholderModal._tempFiles.set(e, []), c(), o.onclick = e => {
              e.target.closest(".mp-file-delete-perm") || l.click()
            }, o.ondragover = e => {
              e.preventDefault(), o.classList.add("drag-over")
            }, o.ondragleave = e => {
              e.preventDefault(), o.classList.remove("drag-over")
            }, o.ondrop = t => {
              if (t.preventDefault(), o.classList.remove("drag-over"), t.dataTransfer.files && t.dataTransfer.files.length > 0) {
                const n = Array.from(t.dataTransfer.files);
                (currentPlaceholderModal._tempFiles.get(e) || []).push(...n), c()
              }
            }, l.onchange = t => {
              if (t.target.files && t.target.files.length > 0) {
                const n = Array.from(t.target.files);
                (currentPlaceholderModal._tempFiles.get(e) || []).push(...n), c(), l.value = ""
              }
            }, i.appendChild(n)
          } else if (e.startsWith("__INPUT_") && o.has(e)) {
          const t = o.get(e),
            s = "string" == typeof t ? t : t.label;
          let r = "object" == typeof t && t.context ? t.context : null;
          r && (o.forEach((e, t) => {
            if (r.includes(t)) {
              const n = "string" == typeof e ? e : e.label;
              r = r.split(t).join(`[${n}]`)
            }
          }), a.forEach((e, t) => {
            r.includes(t) && (r = r.split(t).join(`[List: ${e.title}]`))
          }), n.forEach((e, t) => {
            r.includes(t) && (r = r.split(t).join("[...Code/Block...]"))
          }));
          const l = document.createElement("div");
          l.className = "form-group", l.style.marginBottom = "12px";
          const c = document.createElement("textarea");
          c.className = "form-input dynamic-input", c.dataset.key = e, c.rows = 1, c.style.resize = "vertical", c.style.height = "auto", c.placeholder = t.varName ? t.varName : "", t.defaultValue && (c.value = t.defaultValue);
          const d = document.createElement("div");
          d.className = "mp-label-wrapper";
          const p = document.createElement("div");
          p.className = "mp-label-left";
          const m = document.createElement("label");
          m.className = "form-label", m.textContent = s, m.style.marginBottom = "0", p.appendChild(m), d.appendChild(p);
          const u = document.createElement("div");
          if (u.className = "mp-label-right", r) {
            const e = document.createElement("button");
            e.className = "mp-help-icon", e.type = "button", setSafeInnerHTML(e, `${ICONS.info}`), createCustomTooltip(e, getTranslation("description"), "top"), e.onclick = e => {
              e.stopPropagation(), l.querySelector(".mp-context-bubble").classList.toggle("visible")
            }, u.appendChild(e)
          }
          const g = document.createElement("button");
          g.className = "mp-enhance-ai-btn", g.type = "button", setSafeInnerHTML(g, `${ICONS.magic}`), createCustomTooltip(g, getTranslation("enhanceTooltip"), "top"), g.addEventListener("click", e => {
            e.preventDefault(), e.stopPropagation(), handleTextareaEnhancement(c, g)
          }), u.appendChild(g);
          const f = document.createElement("button");
          if (f.className = "mp-paste-btn", f.type = "button", setSafeInnerHTML(f, `${ICONS.paste}`), createCustomTooltip(f, getTranslation("paste"), "top"), f.addEventListener("click", async e => {
              e.preventDefault(), e.stopPropagation();
              try {
                const e = await navigator.clipboard.readText();
                if (e) {
                  const t = c.selectionStart,
                    n = c.selectionEnd,
                    a = c.value;
                  c.value = a.substring(0, t) + e + a.substring(n), c.selectionStart = c.selectionEnd = t + e.length, c.dispatchEvent(new Event("input", {
                    bubbles: true
                  })), c.focus()
                }
              } catch (e) {}
            }), u.appendChild(f), d.appendChild(u), l.appendChild(d), r) {
            const e = document.createElement("div");
            e.className = "mp-context-bubble", e.textContent = r, l.appendChild(e)
          }
          c.addEventListener("keydown", e => {
            if (!e.isComposing && 229 !== e.keyCode) {
              if (isShortcutPressed(e, "lineBreak")) {
                e.preventDefault(), e.stopPropagation();
                const t = c.selectionStart,
                  n = c.selectionEnd,
                  a = c.value;
                return c.value = a.substring(0, t) + "\n" + a.substring(n), c.selectionStart = c.selectionEnd = t + 1, void c.dispatchEvent(new Event("input", {
                  bubbles: true
                }))
              }
              if (isShortcutPressed(e, "saveSend")) return e.preventDefault(), e.stopPropagation(), void document.getElementById("__ap_insert_prompt").click();
              if (isShortcutPressed(e, "enhancePrompt")) return e.preventDefault(), e.stopPropagation(), void(document.activeElement === c && handleTextareaEnhancement(c, g));
              if ("Enter" === e.key) {
                if (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) return;
                e.preventDefault(), e.stopPropagation(), document.getElementById("__ap_insert_prompt").click()
              }
            }
          }), l.appendChild(c), i.appendChild(l)
        } else if (e.startsWith("__SELECT_") && a.has(e)) {
          const t = a.get(e),
            n = document.createElement("div");
          n.dataset.selectKey = e, n.style.marginBottom = "16px";
          let o = null;
          if (t.options.length > 0 && "header" !== t.options[0].type) {
            const e = document.createElement("label");
            e.className = "form-label", e.textContent = t.title, e.style.marginBottom = "6px", n.appendChild(e), o = document.createElement("div"), o.className = "mp-option-group", n.appendChild(o)
          }
          t.options.forEach(e => {
            if ("header" === e.type) {
              if (n.children.length > 0) {
                const e = document.createElement("div");
                e.style.height = "8px", n.appendChild(e)
              }
              const t = document.createElement("div");
              t.style.width = "100%";
              const a = document.createElement("div");
              a.className = "mp-label-wrapper";
              const s = document.createElement("div");
              s.className = "mp-label-left";
              const r = document.createElement("label");
              if (r.className = "form-label", r.textContent = e.label, s.appendChild(r), a.appendChild(s), e.comment) {
                const e = document.createElement("div");
                e.className = "mp-label-right";
                const n = document.createElement("button");
                n.className = "mp-help-icon", n.type = "button", setSafeInnerHTML(n, `${ICONS.info}`), createCustomTooltip(n, getTranslation("description"), "top"), n.onclick = e => {
                  e.stopPropagation(), e.preventDefault();
                  const n = t.querySelector(".mp-context-bubble");
                  n && n.classList.toggle("visible")
                }, e.appendChild(n), a.appendChild(e)
              }
              if (t.appendChild(a), e.comment) {
                const n = document.createElement("div");
                n.className = "mp-context-bubble", n.textContent = e.comment, t.appendChild(n)
              }
              n.appendChild(t), o = document.createElement("div"), o.className = "mp-option-group", n.appendChild(o)
            } else {
              o || (o = document.createElement("div"), o.className = "mp-option-group", n.appendChild(o));
              const t = document.createElement("label");
              if (t.className = "mp-option-item", "id" === e.type && e.id) {
                const n = getColorForId(e.id);
                t.style.cssText = `border-left: 5px solid ${n} !important; padding-left: 8px; flex-wrap: wrap;`
              } else "sovereign" === e.type ? (t.style.cssText = "border-left: 5px solid #FF4444 !important; padding-left: 8px; flex-wrap: wrap;", t.style.color = "var(--mp-accent-close)", t.style.fontWeight = "600") : "other" === e.type ? (t.style.cssText = "border-left: 5px solid var(--mp-accent-primary) !important; padding-left: 8px; flex-wrap: wrap;", t.style.color = "var(--mp-accent-primary)", t.style.fontWeight = "600") : (t.style.borderLeft = "5px solid transparent", t.style.flexWrap = "wrap");
              const a = document.createElement("input");
              a.type = "checkbox", a.className = "mp-checkbox", a.dataset.type = e.type, e.id && (a.dataset.id = e.id), a.value = e.value, a.onchange = function() {
                const e = this.closest(".mp-option-group");
                if (this.checked) {
                  const t = Array.from(e.querySelectorAll('input[type="checkbox"]')),
                    n = this.dataset.type,
                    a = this.dataset.id;
                  t.forEach(e => {
                    e !== this && ("sovereign" === n ? e.checked = false : "other" === n ? "sovereign" === e.dataset.type && (e.checked = false) : ("sovereign" === e.dataset.type && (e.checked = false), "id" === n && "id" === e.dataset.type && e.dataset.id === a && (e.checked = false)))
                  })
                }
                Array.from(e.querySelectorAll('input[type="checkbox"]')).forEach(e => {
                  const t = e.closest(".mp-option-item").querySelector(".mp-other-container");
                  if (t)
                    if (e.checked) {
                      t.style.display = "flex";
                      const e = t.querySelector(".mp-other-input");
                      e && setTimeout(() => e.focus(), 50)
                    } else {
                      t.style.display = "none";
                      t.querySelectorAll(".mp-other-input").forEach(e => {
                        e.value = e.dataset.defValue || ""
                      })
                    }
                })
              }, e.isDefault && (a.checked = true, setTimeout(() => a.dispatchEvent(new Event("change")), 10));
              const s = document.createElement("span");
              s.className = "mp-option-text", s.textContent = e.label, s.style.flex = "1";
              const r = document.createElement("div");
              if (r.style.cssText = "display: flex; align-items: center; gap: 8px; width: 100%; white-space: normal; overflow-wrap: break-word; word-break: break-word;", r.appendChild(a), r.appendChild(s), e.comment) {
                const e = document.createElement("button");
                e.className = "mp-help-icon", e.type = "button", setSafeInnerHTML(e, `${ICONS.info}`), createCustomTooltip(e, getTranslation("description"), "top"), e.onclick = e => {
                  e.preventDefault(), e.stopPropagation();
                  const n = t.querySelector(".mp-context-bubble");
                  n && (n.classList.toggle("visible"), n.style.marginBottom = "0")
                }, r.appendChild(e)
              }
              if (t.appendChild(r), e.comment) {
                const n = document.createElement("div");
                n.className = "mp-context-bubble", n.textContent = e.comment, t.appendChild(n)
              }
              if ("other" === e.type || e.inputs && e.inputs.length > 0) {
                const n = document.createElement("div");
                n.className = "mp-other-container", n.style.cssText = "display: none; width: 100%; margin-top: 8px; flex-direction: column; gap: 8px;", n.onclick = e => e.stopPropagation(), n.onkeydown = e => e.stopPropagation();
                const a = (e, t, n, a) => {
                  const o = document.createElement("div");
                  o.style.cssText = "display: flex; flex-direction: column; width: 100%;";
                  const s = document.createElement("div");
                  s.className = "mp-label-right", s.style.cssText = "display: flex; justify-content: flex-end; margin-bottom: 4px;";
                  const r = document.createElement("button");
                  r.className = "mp-enhance-ai-btn", r.type = "button", setSafeInnerHTML(r, `${ICONS.magic}`), createCustomTooltip(r, getTranslation("enhanceTooltip"), "top");
                  const i = document.createElement("button");
                  i.className = "mp-paste-btn", i.type = "button", setSafeInnerHTML(i, `${ICONS.paste}`), createCustomTooltip(i, getTranslation("paste"), "top"), s.appendChild(r), s.appendChild(i);
                  const l = document.createElement("textarea");
                  return l.className = "form-input dynamic-input mp-other-input", l.placeholder = e, l.dataset.defValue = t || "", t && (l.value = t), n && (l.dataset.optInputKey = n), a && (l.dataset.isOther = "true"), l.rows = 2, l.style.resize = "vertical", l.style.height = "auto", r.addEventListener("click", e => {
                    e.preventDefault(), e.stopPropagation(), handleTextareaEnhancement(l, r)
                  }), i.addEventListener("click", async e => {
                    e.preventDefault(), e.stopPropagation();
                    try {
                      const e = await navigator.clipboard.readText();
                      if (e) {
                        const t = l.selectionStart,
                          n = l.selectionEnd,
                          a = l.value;
                        l.value = a.substring(0, t) + e + a.substring(n), l.selectionStart = l.selectionEnd = t + e.length, l.dispatchEvent(new Event("input", {
                          bubbles: true
                        })), l.focus()
                      }
                    } catch (e) {}
                  }), l.addEventListener("keydown", e => {
                    if (!e.isComposing && 229 !== e.keyCode) {
                      if ("function" == typeof isShortcutPressed) {
                        if (isShortcutPressed(e, "lineBreak")) {
                          e.preventDefault(), e.stopPropagation();
                          const t = l.selectionStart,
                            n = l.selectionEnd,
                            a = l.value;
                          return l.value = a.substring(0, t) + "\n" + a.substring(n), l.selectionStart = l.selectionEnd = t + 1, void l.dispatchEvent(new Event("input", {
                            bubbles: true
                          }))
                        }
                        if (isShortcutPressed(e, "saveSend")) {
                          e.preventDefault(), e.stopPropagation();
                          const t = document.getElementById("__ap_insert_prompt");
                          return void(t && t.click())
                        }
                        if (isShortcutPressed(e, "enhancePrompt")) return e.preventDefault(), e.stopPropagation(), void(document.activeElement === l && "function" == typeof handleTextareaEnhancement && handleTextareaEnhancement(l, r))
                      }
                      if ("Enter" === e.key) {
                        if (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) return;
                        e.preventDefault(), e.stopPropagation();
                        const t = document.getElementById("__ap_insert_prompt");
                        t && t.click()
                      }
                    }
                  }), o.appendChild(s), o.appendChild(l), o
                };
                if ("other" === e.type) {
                  const e = a(getTranslation("typeHere"), "", null, true);
                  n.appendChild(e)
                }
                e.inputs && e.inputs.length > 0 && e.inputs.forEach(e => {
                  const t = a(e.label, e.defaultValue, e.key, false);
                  n.appendChild(t)
                }), t.appendChild(n)
              }
              o.appendChild(t)
            }
          }), i.appendChild(n)
        }
      }), showModal(currentPlaceholderModal), setTimeout(() => i.querySelector('textarea, input:not([type="file"])')?.focus(), 100)
    }
    const mpColorPalette = ["var(--mp-syntax-quote-fence)", "var(--mp-syntax-var-keyword)", "var(--mp-syntax-file-keyword)", "var(--mp-syntax-sel-fence)", "var(--mp-syntax-sel-multi)", "var(--mp-syntax-sel-single)", "var(--mp-syntax-sel-id)", "var(--mp-syntax-sel-other)", "var(--mp-syntax-free-bracket)"];

    function getColorForId(e) {
      if (!e) return "transparent";
      let t = String(e),
        n = 0;
      for (let e = 0; e < t.length; e++) n = t.charCodeAt(e) + ((n << 5) - n);
      const a = Math.abs(n) % mpColorPalette.length;
      return mpColorPalette[a]
    }

    let inlineMenu = null,
      inlineMenuCurrentItems = [],
      inlineMenuIndex = 0;

    function createInlineMenu() {
      if (inlineMenu) return inlineMenu;
      const e = document.createElement("div");
      return e.className = "mp-inline-menu", document.body.appendChild(e), inlineMenu = e, e
    }

    function closeInlineMenu() {
      inlineMenu && (inlineMenu.classList.remove("visible"), inlineMenuCurrentItems = [], inlineMenuIndex = 0)
    }

    function renderInlineList(e, t) {
      if (inlineMenu || createInlineMenu(), setSafeInnerHTML(inlineMenu, ""), 0 === e.length) return void closeInlineMenu();
      const n = document.createElement("div");
      n.className = "mp-inline-list", e.forEach((e, a) => {
        const o = document.createElement("div");
        o.className = "mp-inline-item " + (a === inlineMenuIndex ? "selected" : ""), o.onmousedown = n => {
          n.preventDefault(), n.stopPropagation(), completeInlinePrompt(e, t)
        };
        const s = document.createElement("span");
        s.className = "mp-inline-title", s.textContent = e.title;
        const r = document.createElement("span");
        r.className = "mp-inline-preview";
        const i = (e.text || "").replace(/\s+/g, " ").trim();
        r.textContent = i ? i.substring(0, 150) + (i.length > 150 ? "…" : "") : "", o.appendChild(s), r.textContent && o.appendChild(r), n.appendChild(o)
      }), inlineMenu.appendChild(n), setupEnhancedScroll(n);
      const a = n.children[inlineMenuIndex];
      a && a.scrollIntoView({
        block: "nearest"
      })
    }

    function updateInlineVisuals() {
      if (!inlineMenu) return;
      const e = inlineMenu.querySelector(".mp-inline-list"),
        t = inlineMenu.querySelectorAll(".mp-inline-item");
      e && t.forEach((n, a) => {
        a === inlineMenuIndex ? (n.classList.add("selected"), 0 === a ? e.scrollTop = 0 : a === t.length - 1 ? e.scrollTop = e.scrollHeight : n.scrollIntoView({
          block: "nearest",
          behavior: "auto"
        })) : n.classList.remove("selected")
      })
    }

    function positionInlineMenu(e) {
      if (!inlineMenu) return;
      const t = e.getBoundingClientRect(),
        n = window.innerHeight - t.top + 8,
        a = t.left;
      inlineMenu.style.bottom = `${n}px`, inlineMenu.style.left = `${a}px`, a + 300 > window.innerWidth && (inlineMenu.style.left = "auto", inlineMenu.style.right = "20px")
    }

    function getTextBeforeCaret(e) {
      if ("TEXTAREA" === e.tagName || "INPUT" === e.tagName) return e.value.substring(0, e.selectionEnd);
      const t = window.getSelection();
      if (t.rangeCount > 0) {
        const e = t.getRangeAt(0);
        return 3 === e.startContainer.nodeType ? e.startContainer.textContent.substring(0, e.startOffset) : ""
      }
      return ""
    }
    async function completeInlinePrompt(e, t) {
      const n = resolveEditor();
      if (!n) return;
      n.focus();
      const a = getTextBeforeCaret(n).match(/(?:^|\s)(#[^\s]*)$/);
      let o = a && a[1] ? a[1].length : (t ? t.length : 0) + 1,
        s = null;
      if ("TEXTAREA" === n.tagName || "INPUT" === n.tagName) {
        if ("number" == typeof n.selectionEnd) {
          const e = Math.max(0, n.selectionEnd - o),
            t = n.selectionEnd;
          n.setRangeText ? n.setRangeText("", e, t, "end") : (n.value = n.value.slice(0, e) + n.value.slice(t), n.selectionEnd = e), s = {
            type: "input",
            start: n.selectionEnd,
            end: n.selectionEnd
          }
        }
      } else {
        const e = window.getSelection();
        if (e.rangeCount > 0) {
          const t = e.getRangeAt(0);
          if (3 === t.startContainer.nodeType) {
            const e = t.startOffset,
              n = Math.max(0, e - o);
            t.setStart(t.startContainer, n), t.setEnd(t.startContainer, e), t.deleteContents(), s = {
              type: "contenteditable",
              node: t.startContainer,
              offset: t.startOffset
            }
          } else {
            for (let e = 0; e < o; e++) document.execCommand("delete", false, null);
            try {
              const t = e.getRangeAt(0);
              s = {
                type: "contenteditable",
                node: t.startContainer,
                offset: t.startOffset
              }
            } catch (e) {}
          }
        }
      }
      closeInlineMenu(), e.usePlaceholders ? (currentPlaceholderModal && (currentPlaceholderModal.dataset.fromInline = "true", currentPlaceholderModal._savedCursor = s), openPlaceholderModal(e, -1)) : await insertPrompt(e, -1, true, true)
    }

    function setupInlineSuggestion(e) {
      if (e.dataset.mpInlineActive) return;
      e.dataset.mpInlineActive = "true";
      let t = false;
      e.addEventListener("keydown", n => {
        if (inlineMenu && inlineMenu.classList.contains("visible"))
          if ("ArrowDown" === n.key) n.preventDefault(), n.stopPropagation(), inlineMenuIndex = (inlineMenuIndex + 1) % inlineMenuCurrentItems.length, updateInlineVisuals();
          else if ("ArrowUp" === n.key) n.preventDefault(), n.stopPropagation(), inlineMenuIndex = (inlineMenuIndex - 1 + inlineMenuCurrentItems.length) % inlineMenuCurrentItems.length, updateInlineVisuals();
        else if ("Enter" === n.key || "Tab" === n.key) {
          if (inlineMenuCurrentItems[inlineMenuIndex]) {
            n.preventDefault(), n.stopPropagation(), n.stopImmediatePropagation(), t = true;
            const a = getTextBeforeCaret(e).match(/(?:^|\s)(#[^\s]*)$/),
              o = a ? a[1] : "";
            completeInlinePrompt(inlineMenuCurrentItems[inlineMenuIndex], o)
          }
        } else "Escape" === n.key && (n.preventDefault(), closeInlineMenu())
      }, true), e.addEventListener("keypress", e => {
        !t || "Enter" !== e.key && "Tab" !== e.key || (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation())
      }, true), e.addEventListener("keyup", e => {
        !t || "Enter" !== e.key && "Tab" !== e.key || (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), t = false)
      }, true), e.addEventListener("input", debounce(async t => {
        const n = getTextBeforeCaret(e).match(/(?:^|\s)#([^\s]*)$/);
        if (n) {
          const t = n[1],
            a = t.toLowerCase().replace(/-/g, " "),
            o = await getAll();
          inlineMenuCurrentItems = o.filter(e => e.title.toLowerCase().includes(a)).slice(0, 8), inlineMenuCurrentItems.length > 0 ? (inlineMenuIndex = 0, renderInlineList(inlineMenuCurrentItems, t), positionInlineMenu(e), inlineMenu && inlineMenu.classList.add("visible")) : closeInlineMenu()
        } else closeInlineMenu()
      }, 100)), document.addEventListener("click", t => {
        inlineMenu && inlineMenu.classList.contains("visible") && !inlineMenu.contains(t.target) && t.target !== e && closeInlineMenu()
      })
    }
    const PREDICTION_STORAGE_KEY = "Prediction",
      DEFAULT_PREDICTION_CONFIG = {
        enabled: true
      },
      TAG_MEMORY = {
        active: false,
        list: [],
        index: 0,
        startPos: 0,
        typed: ""
      };
    let currentPredictionConfig = DEFAULT_PREDICTION_CONFIG,
      macroMemory = {
        active: false,
        text: "",
        startIndex: 0,
        hashCount: 0
      },
      varMemory = {
        active: false,
        list: [],
        index: 0,
        startPos: 0,
        typed: ""
      };

    function loadPredictionConfig() {
      currentPredictionConfig = GM_getValue(PREDICTION_STORAGE_KEY, DEFAULT_PREDICTION_CONFIG)
    }
    async function savePredictionConfig(e) {
      currentPredictionConfig = e, await GM_setValue(PREDICTION_STORAGE_KEY, e)
    }

    function attachSmartEditorLogic(e) {
      if (!e) return;
      const t = {
          "(": ")",
          "[": "]",
          "{": "}",
          '"': '"',
          "'": "'",
          "`": "`",
          "<": ">"
        },
        n = new Set(Object.values(t)),
        a = () => {
          varMemory.active = false, varMemory.list = [], varMemory.typed = ""
        },
        o = () => {
          TAG_MEMORY.active = false, TAG_MEMORY.list = [], TAG_MEMORY.typed = ""
        };
      e.addEventListener("keydown", function(e) {
        if (!currentPredictionConfig.enabled) return;
        if (e.isComposing || 229 === e.keyCode) return;
        const s = this.selectionStart,
          r = this.selectionEnd,
          i = this.value,
          l = e.key,
          c = s !== r;
        if ("Backquote" === e.key && e.shiftKey) {
          if (e.preventDefault(), c) {
            const e = i.substring(s, r);
            this.setRangeText("`" + e + "`", s, r, "select"), this.selectionStart = s + 1, this.selectionEnd = s + 1 + e.length
          } else this.setRangeText("``", s, r, "end"), this.selectionStart = s + 1, this.selectionEnd = s + 1;
          return
        }
        const d = varMemory.active ? varMemory : TAG_MEMORY.active ? TAG_MEMORY : null;
        if (d)
          if (s < d.startPos) varMemory.active && a(), TAG_MEMORY.active && o();
          else {
            if ("ArrowUp" === e.key || "ArrowDown" === e.key) {
              if (e.preventDefault(), d.list.length <= 1) return;
              "ArrowUp" === e.key ? d.index = (d.index + 1) % d.list.length : d.index = (d.index - 1 + d.list.length) % d.list.length;
              const t = d.list[d.index],
                n = ("string" == typeof t ? t : t.label).substring(d.typed.length);
              return void this.setRangeText(n, d.startPos + d.typed.length, r, "select")
            }
            if (["Enter", "Tab", "ArrowRight"].includes(e.key)) {
              if (e.preventDefault(), TAG_MEMORY.active) {
                const e = TAG_MEMORY.list[TAG_MEMORY.index],
                  t = "string" == typeof e ? e : e.label;
                this.setRangeText("", d.startPos, r, "select");
                let n = t,
                  a = 0,
                  o = 0;
                "file" === e.type ? (n = "#file", a = 0, o = 0) : "file-title" === e.type ? (n = "#file(Title)", a = 6, o = 5) : "start-block" === e.type ? (n = "#start\n# Title\n+ []\n+ []\n+ []\n[#]\n#end", a = 9, o = 5) : "start-inline" === e.type && (n = "#start # Title // + [] // + [] // + [] // [#] #end", a = 9, o = 5), this.setRangeText(n, d.startPos, d.startPos, "end"), o > 0 ? (this.selectionStart = d.startPos + a, this.selectionEnd = d.startPos + a + o) : a > 0 ? (this.selectionStart = d.startPos + a, this.selectionEnd = d.startPos + a) : (this.selectionStart = d.startPos + n.length, this.selectionEnd = d.startPos + n.length)
              } else this.selectionStart = r, this.selectionEnd = r;
              return varMemory.active && a(), void(TAG_MEMORY.active && o())
            }
            if ("Escape" === e.key) return e.preventDefault(), this.setRangeText("", d.startPos + d.typed.length, r, "end"), varMemory.active && a(), void(TAG_MEMORY.active && o())
          } if ("#" === l && c) return macroMemory.text = i.substring(s, r), macroMemory.startIndex = s, macroMemory.active = true, void(macroMemory.hashCount = 1);
        if (macroMemory.active)
          if (s !== macroMemory.startIndex + macroMemory.hashCount) macroMemory.active = false, macroMemory.text = "";
          else {
            if ("#" === l) return void macroMemory.hashCount++;
            const t = l ? l.toLowerCase() : "";
            if (["s", "i"].includes(t)) {
              e.preventDefault();
              const n = "#".repeat(macroMemory.hashCount);
              let a = "";
              return "s" === t ? a = `${n}start\n${macroMemory.text}\n${n}end` : "i" === t && (a = `${n}ignore\n${macroMemory.text}\n${n}end`), this.setRangeText(a, macroMemory.startIndex, s, "select"), macroMemory.active = false, void(macroMemory.text = "")
            } ["Shift", "Control", "Alt", "CapsLock", "Meta"].includes(e.key) || (macroMemory.active = false, macroMemory.text = "")
          } if (c && t[l]) {
          e.preventDefault();
          const n = i.substring(s, r),
            a = l + n + t[l];
          return this.setRangeText(a, s, r, "select"), this.selectionStart = s + 1, void(this.selectionEnd = s + 1 + n.length)
        }
        if (!c && n.has(l) && i[s] === l) return e.preventDefault(), this.selectionStart = s + 1, void(this.selectionEnd = s + 1);
        if ("Backspace" === e.key && !c && s > 0)
          if (d);
          else {
            const n = i[s - 1],
              a = i[s];
            t[n] === a && (e.preventDefault(), this.setRangeText("", s - 1, s + 1, "end"))
          }
        else if (!c && t[l]) {
          if (d) return;
          if ("`" === l && !e.shiftKey) return e.preventDefault(), this.setRangeText("``", s, r, "end"), this.selectionStart = s + 1, void(this.selectionEnd = s + 1);
          if ("`" !== l) return e.preventDefault(), this.setRangeText(l + t[l], s, r, "end"), this.selectionStart = s + 1, void(this.selectionEnd = s + 1)
        }
      }), e.addEventListener("input", function(e) {
        if (!currentPredictionConfig.enabled) return;
        if (e.isComposing || e.inputType && e.inputType.startsWith("insertComposition")) return;
        if (macroMemory.active) return;
        const t = this.selectionStart,
          n = this.value,
          s = e.data;
        if ("$" === s || " " === s) {
          const e = n.substring(0, t),
            a = " " === s && /(?:\[[^\]]*?|\{[^\}]*?)=\s$/.test(e);
          if ("$" === s || a) {
            const n = /(?:\[[^\]]*?=\s*|\{[^\}]*?=\s*)(\$[\w]+)[^\]}]*?(?:\]|\})/g;
            let o;
            const r = [];
            for (; null !== (o = n.exec(e));) r.push(o[1]);
            if ("$" === s) {
              if (r.length > 0) {
                const e = [...new Set(r.reverse())];
                varMemory.active = true, varMemory.list = e, varMemory.index = 0, varMemory.startPos = t - 1, varMemory.typed = "$";
                const n = e[0];
                this.setRangeText(n.substring(1), t, t, "select")
              }
            } else if (a) {
              const e = r.length > 0 ? [...new Set(r.reverse())] : ["$"];
              this.setRangeText("$", t, t, "end"), varMemory.active = true, varMemory.list = e, varMemory.index = 0, varMemory.startPos = t, varMemory.typed = "$";
              const n = e[0];
              n.length > 1 && this.setRangeText(n.substring(1), t + 1, t + 1, "select")
            }
            return
          }
        }
        if ("#" === s) {
          const e = n.substring(0, t - 1);
          if ("" === e || /[\s\n]$/.test(e)) return TAG_MEMORY.active = true, TAG_MEMORY.startPos = t - 1, TAG_MEMORY.typed = "#", void(TAG_MEMORY.list = [])
        }
        if (varMemory.active || TAG_MEMORY.active) {
          const r = varMemory.active ? varMemory : TAG_MEMORY;
          if ("deleteContentBackward" === e.inputType || "deleteContentForward" === e.inputType) return t <= r.startPos ? (varMemory.active && a(), void(TAG_MEMORY.active && o())) : (r.typed = n.substring(r.startPos, t), varMemory.active && a(), void(TAG_MEMORY.active && o()));
          if (!s) return;
          if (r.typed += s, TAG_MEMORY.active) {
            const e = r.typed.substring(1).toLowerCase();
            let t = [];
            e.startsWith("d") ? t = [{
              label: "#date",
              type: "simple"
            }, {
              label: "#date-DD",
              type: "simple"
            }, {
              label: "#date-MM",
              type: "simple"
            }, {
              label: "#date-YY",
              type: "simple"
            }, {
              label: "#date+time",
              type: "simple"
            }] : e.startsWith("t") ? t = [{
              label: "#time",
              type: "simple"
            }, {
              label: "#time-HH",
              type: "simple"
            }, {
              label: "#time-MM",
              type: "simple"
            }, {
              label: "#time-SS",
              type: "simple"
            }, {
              label: "#time+date",
              type: "simple"
            }] : e.startsWith("f") ? t = [{
              label: "#file",
              type: "file"
            }, {
              label: "#file(Title)",
              type: "file-title"
            }] : e.startsWith("s") && (t = [{
              label: "#start (Block)",
              type: "start-block"
            }, {
              label: "#start (Inline)",
              type: "start-inline"
            }]), r.list = t.filter(e => e.label.toLowerCase().startsWith(r.typed.toLowerCase()))
          } else if (varMemory.active) {
            const e = r.list.filter(e => e.startsWith(r.typed));
            r.list = e
          }
          if (r.list.length > 0) {
            r.index = 0;
            const e = r.list[0],
              n = ("string" == typeof e ? e : e.label).substring(r.typed.length);
            return void this.setRangeText(n, t, t, "select")
          }
          TAG_MEMORY.active && o(), varMemory.active && a()
        }
        const r = s ? s.toLowerCase() : "";
        if (["e", "i", "s"].includes(r)) {
          const e = n.substring(0, t).match(/(^|[\s\n])(#+)([eiEIsS])$/);
          if (e) {
            const n = e[2],
              a = e[3].toLowerCase();
            let o = "",
              s = t;
            const r = t - (n.length + 1);
            "i" === a ? (o = `${n}ignore\n\n${n}end`, s = r + n.length + 7) : "s" === a ? (o = `${n}start\n\n${n}end`, s = r + n.length + 6) : "e" === a && (o = `${n}end`, s = r + o.length), this.setRangeText(o, r, t, "select"), this.selectionStart = s, this.selectionEnd = s
          }
        }
      });
      const s = e.setRangeText.bind(e);
      e.setRangeText = function(...e) {
        s(...e), this.syntaxUpdate && this.syntaxUpdate()
      }
    }
    const SHORTCUTS_STORAGE_KEY = "ShortcutsConfig",
      DEFAULT_SHORTCUTS = {
        newPrompt: {
          keys: "Alt+N",
          descKey: "altN"
        },
        listPrompts: {
          keys: "Alt+P",
          descKey: "altP"
        },
        saveSend: {
          keys: "Ctrl+Enter",
          descKey: "ctrlEnter"
        },
        saveEditor: {
          keys: "Ctrl+S",
          descKey: "saveEditor"
        },
        lineBreak: {
          keys: "Shift+Enter",
          descKey: "shiftEnter"
        },
        enhancePrompt: {
          keys: "Alt+E",
          descKey: "altE"
        },
        expandedMode: {
          keys: "Ctrl+Alt+P",
          descKey: "ctrlAltP"
        }
      };
    let currentShortcuts = JSON.parse(JSON.stringify(DEFAULT_SHORTCUTS));

    function loadShortcuts() {
      const e = GM_getValue(SHORTCUTS_STORAGE_KEY);
      if (e) try {
        const t = JSON.parse(e);
        currentShortcuts = {
          ...DEFAULT_SHORTCUTS,
          ...t
        }, Object.keys(DEFAULT_SHORTCUTS).forEach(e => {
          currentShortcuts[e] && (currentShortcuts[e].descKey = DEFAULT_SHORTCUTS[e].descKey)
        })
      } catch (e) {
        console.error(e)
      }
    }

    function saveShortcutsConfig() {
      GM_setValue(SHORTCUTS_STORAGE_KEY, JSON.stringify(currentShortcuts))
    }

    function isShortcutPressed(e, t) {
      if (!currentShortcuts[t]) return false;
      const n = currentShortcuts[t].keys.toUpperCase().split("+"),
        a = n[n.length - 1],
        o = n.includes("CTRL"),
        s = n.includes("ALT"),
        r = n.includes("SHIFT");
      if (e.ctrlKey !== o) return false;
      if (e.altKey !== s) return false;
      if (e.shiftKey !== r) return false;
      const i = e.code ? e.code.toUpperCase() : "",
        l = e.key ? e.key.toUpperCase() : "";
      return 1 === a.length ? l === a || i === `KEY${a}` || i === `DIGIT${a}` : l === a || i === a
    }
    const AI_SETTINGS_KEY = "AISettings",
      DEFAULT_AI_SYSTEM_PROMPT = '你是一名专业提示词工程师。优化用户的提示词，使其对于大语言模型来说更清晰、详尽且有效。仅输出优化后的提示词文本，使用与用户相同的语言。不要添加诸如 “这是优化后的提示词：” 之类的引言。',
      DEFAULT_AI_CONFIG = {
        configs: [],
        activeId: ""
      };
    let currentAIConfig = JSON.parse(JSON.stringify(DEFAULT_AI_CONFIG));

    function parseSystemPrompts(e) {
      if (!e || "string" != typeof e) return null;
      const t = /([^{()\n]+?)\s*(?:\(([^)]+)\))?\s*\{\{([\s\S]*?)\}\}/g,
        n = [];
      let a;
      for (; null !== (a = t.exec(e));) n.push({
        title: a[1].trim(),
        comment: a[2] ? a[2].trim() : null,
        prompt: a[3].trim()
      });
      return n.length < 2 ? null : n
    }

    function generateAIConfigId() {
      return `aicfg_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`
    }

    function cloneAIConfigs(e) {
      return Array.isArray(e) ? JSON.parse(JSON.stringify(e)) : []
    }

    function normalizeAIConfigs(e) {
      return (Array.isArray(e) ? e : []).filter(e => e && "object" == typeof e).map((e, t) => ({
        id: e.id || generateAIConfigId(),
        name: (e.name || "").trim() || `${getTranslation("cfgNameDefault")} ${t+1}`,
        baseUrl: (e.baseUrl || "").trim(),
        apiKey: (e.apiKey || "").trim(),
        model: (e.model || "").trim(),
        systemPrompt: "string" == typeof e.systemPrompt && e.systemPrompt.length > 0 ? e.systemPrompt : DEFAULT_AI_SYSTEM_PROMPT,
        keyIndex: Number.isInteger(e.keyIndex) ? e.keyIndex : 0
      }))
    }

    function migrateLegacyAIConfig(e) {
      const t = e && "string" == typeof e.customEndpoint ? e.customEndpoint : "",
        n = e && "string" == typeof e.customModel ? e.customModel : "",
        a = e && "string" == typeof e.apiKeyCustom ? e.apiKeyCustom : "";
      return t || n || a ? {
        configs: normalizeAIConfigs([{
          name: getTranslation("cfgNameDefault"),
          baseUrl: t,
          apiKey: a,
          model: n,
          systemPrompt: e.systemPrompt || DEFAULT_AI_SYSTEM_PROMPT,
          keyIndex: e.keyIndexCustom || 0
        }]),
        activeId: ""
      } : null
    }

    function resolveAIChatEndpoint(e) {
      const t = (e || "").trim().replace(/\/+$/, "");
      return t ? /\/chat\/completions$/i.test(t) ? t : /\/v\d+$/i.test(t) ? `${t}/chat/completions` : `${t}/v1/chat/completions` : ""
    }

    function getActiveAIConfig() {
      const e = currentAIConfig.configs || [];
      return e.find(e => e.id === currentAIConfig.activeId) || e[0] || null
    }

    function getRotatingApiKey(e) {
      const t = ((e && e.apiKey) || "").split(/[,\s]+/).filter(e => "" !== e.trim());
      if (0 === t.length) return null;
      let n = Number.isInteger(e.keyIndex) ? e.keyIndex : 0;
      n >= t.length && (n = 0), e.keyIndex = (n + 1) % t.length, saveAIConfig();
      return t[n]
    }

    async function loadAIConfig() {
      const e = await GM_getValue(AI_SETTINGS_KEY, null);
      if (e && Array.isArray(e.configs)) {
        const t = normalizeAIConfigs(e.configs);
        currentAIConfig = {
          configs: t,
          activeId: t.some(t => t.id === e.activeId) ? e.activeId : (t[0] ? t[0].id : "")
        }
      } else if (e && "object" == typeof e) {
        currentAIConfig = migrateLegacyAIConfig(e) || JSON.parse(JSON.stringify(DEFAULT_AI_CONFIG))
      } else currentAIConfig = JSON.parse(JSON.stringify(DEFAULT_AI_CONFIG));
      currentAIConfig.configs.some(e => e.id === currentAIConfig.activeId) || (currentAIConfig.activeId = currentAIConfig.configs[0] ? currentAIConfig.configs[0].id : "")
    }

    async function saveAIConfig(e) {
      e && "object" == typeof e && (currentAIConfig = {
        ...currentAIConfig,
        ...e
      }), currentAIConfig.configs = normalizeAIConfigs(currentAIConfig.configs), currentAIConfig.configs.some(e => e.id === currentAIConfig.activeId) || (currentAIConfig.activeId = currentAIConfig.configs[0] ? currentAIConfig.configs[0].id : ""), await GM_setValue(AI_SETTINGS_KEY, currentAIConfig)
    }

    async function callAI_API(e, t = null) {
      const n = getActiveAIConfig();
      if (!n) throw new Error(getTranslation("missingKeyError"));
      const a = getRotatingApiKey(n);
      if (!a) throw new Error(getTranslation("missingKeyError"));
      const o = resolveAIChatEndpoint(n.baseUrl);
      if (!o) throw new Error(getTranslation("missingEndpointError"));
      const s = t || ("string" == typeof n.systemPrompt && "" !== n.systemPrompt.trim() ? n.systemPrompt : DEFAULT_AI_SYSTEM_PROMPT),
        r = n.model || "gpt-4o-mini",
        i = n.name || "custom";
      return new Promise((t, n) => {
        GM_xmlhttpRequest({
          method: "POST",
          url: o,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${a}`
          },
          data: JSON.stringify({
            model: r,
            messages: [{
              role: "system",
              content: s
            }, {
              role: "user",
              content: e
            }],
            temperature: .7
          }),
          onload: e => {
            if (200 === e.status) try {
              const n = JSON.parse(e.responseText);
              n.choices && n.choices.length > 0 && n.choices[0].message ? t(n.choices[0].message.content.trim()) : n(new Error(n.error && n.error.message || getTranslation("invalidResponse")))
            } catch (e) {
              console.error(e), n(new Error(getTranslation("processError")))
            } else try {
              const t = JSON.parse(e.responseText);
              n(new Error(`Error ${i} (${e.status}): ${t.error?.message||e.statusText}`))
            } catch (t) {
              n(new Error(`Error ${i} (${e.status})`))
            }
          },
          onerror: e => {
            console.error(e), n(new Error(getTranslation("connectionError")))
          }
        })
      })
    }

    function showEnhanceLoadingOverlay() {
      if (document.getElementById("__ap_enhance_loading")) return;
      const e = document.createElement("div");
      e.id = "__ap_enhance_loading", e.className = "mp-overlay";
      const t = document.createElement("div");
      t.className = "mp-loading-content";
      const n = document.createElement("div");
      n.className = "mp-loading-icon", setSafeInnerHTML(n, ICONS.loading);
      const a = document.createElement("div");
      a.className = "mp-loading-text", a.textContent = getTranslation("enhancingPrompt"), t.append(n, a), e.appendChild(t), document.body.appendChild(e), requestAnimationFrame(() => e.classList.add("visible"))
    }

    function hideEnhanceLoadingOverlay() {
      const e = document.getElementById("__ap_enhance_loading");
      e && (e.classList.remove("visible"), setTimeout(() => e.remove(), 300))
    }

    function showPromptSelectionModal(e, t) {
      const n = document.createElement("div");
      n.className = "mp-overlay mp-system-prompt-select-overlay", n.id = "__ap_prompt_modal_overlay", n.onclick = e => {
        e.target === n && l()
      };
      const a = document.createElement("div");
      a.className = "mp-modal-box mp-system-prompt-select-box", a.onclick = e => e.stopPropagation();
      const o = document.createElement("h3");
      o.style.cssText = "font-family: var(--mp-font-family-heading); font-size: 16px; font-weight: 600; text-align: center; margin: 0 0 12px 0; color: var(--mp-text-primary);", o.textContent = getTranslation("promptSelectTitle"), a.appendChild(o);
      const s = document.createElement("input");
      s.className = "mp-system-prompt-search-input", s.placeholder = getTranslation("search"), s.type = "text", s.autocomplete = "off";
      const r = document.createElement("div");
      r.className = "mp-system-prompt-list-container";
      let i = -1;

      function l() {
        n.classList.remove("visible"), setTimeout(() => n.remove(), 200)
      }

      function c() {
        r.querySelectorAll(".mp-system-prompt-button").forEach((e, t) => {
          t === i ? (e.classList.add("is-focused"), e.scrollIntoView({
            block: "nearest",
            behavior: "smooth"
          })) : e.classList.remove("is-focused")
        })
      }

      function d(n = "") {
        setSafeInnerHTML(r, "");
        const a = n.toLowerCase();
        i = -1;
        e.filter(e => {
          const t = (e.title + " " + (e.comment || "")).toLowerCase();
          return !a || t.includes(a)
        }).forEach((e, n) => {
          const a = document.createElement("button");
          a.className = "mp-system-prompt-button";
          let o = `<span class="mp-system-prompt-button-title">${e.title.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</span>`;
          if (e.comment) {
            o += `<span class="mp-system-prompt-button-comment">${e.comment.replace(/</g,"&lt;").replace(/>/g,"&gt;")}</span>`
          }
          setSafeInnerHTML(a, o), a.style.animation = "mp-fade-in-up .3s ease forwards", a.style.animationDelay = `${Math.min(30*n,200)}ms`, a.style.opacity = "0", a.onclick = () => {
            l(), t(e.prompt)
          }, a.onmouseenter = () => {
            i = n, c()
          }, r.appendChild(a)
        })
      }
      s.onkeydown = e => {
        const t = r.querySelectorAll(".mp-system-prompt-button");
        "ArrowDown" === e.key ? (e.preventDefault(), i = (i + 1) % t.length, c()) : "ArrowUp" === e.key ? (e.preventDefault(), i = (i - 1 + t.length) % t.length, c()) : "Enter" === e.key ? (e.preventDefault(), i >= 0 && t[i] ? t[i].click() : t.length > 0 && "" !== s.value && t[0].click()) : "Escape" === e.key && l()
      }, d(), s.oninput = e => d(e.target.value), a.appendChild(s), a.appendChild(r), "function" == typeof setupEnhancedScroll && setupEnhancedScroll(r), n.appendChild(a), document.body.appendChild(n);
      new MutationObserver(() => {
        n.classList.contains("visible") && setTimeout(() => s.focus(), 50)
      }).observe(n, {
        attributes: true,
        attributeFilter: ["class"]
      }), requestAnimationFrame(() => n.classList.add("visible"))
    }
    async function robustClearEditor(e) {

      const sleep = e => new Promise(t => setTimeout(t, e)),
        isText = "TEXTAREA" === e.tagName || "INPUT" === e.tagName,
        isQuill = !isText && !!e.matches && e.matches(".ql-editor"),
        framework = !isText && !isQuill && isFrameworkEditor(e),
        selectAllContent = () => {
          if (e.focus(), isText) return void e.select();
          if (isSlateEditor(e) && selectAllInside(e)) return;
          if (framework) return;
          const t = document.createRange();
          t.selectNodeContents(e);
          const n = window.getSelection();
          n && (n.removeAllRanges(), n.addRange(t)), document.dispatchEvent(new Event("selectionchange"))
        },
        done = () => {
          restoreEditorCaret(e)
        };
      try {
        selectAllContent(), document.execCommand("delete", false, null)
      } catch (t) {}
      await sleep(60);
      if (0 === getEditorPlainText(e).length) return done();
      if (!isText) {
        try {
          selectAllContent(), e.dispatchEvent(new InputEvent("beforeinput", {
            bubbles: true,
            cancelable: true,
            inputType: "deleteContentBackward"
          }))
        } catch (t) {}
        await sleep(100);
        if (0 === getEditorPlainText(e).length) return done()
      }
      if (framework) return console.warn("[Prompt Manager] 清空未完全生效；该编辑器由框架托管，已跳过 innerHTML 兜底。platform=" + currentPlatform), done();
      if (isText) {
        const t = "TEXTAREA" === e.tagName ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype,
          n = Object.getOwnPropertyDescriptor(t, "value").set;
        n ? n.call(e, "") : e.value = ""
      } else e.innerHTML = isQuill ? "<p><br></p>" : "";
      e.dispatchEvent(new Event("input", {
        bubbles: true,
        composed: true
      })), e.dispatchEvent(new Event("change", {
        bubbles: true
      })), done()
    }

    function hasActiveAIConfig() {
      const e = getActiveAIConfig();
      return !!(e && e.apiKey && "" !== e.apiKey.trim() && e.baseUrl && "" !== e.baseUrl.trim())
    }
    async function processAIEnhancementFlow(e, t, n, a = null) {
      let o = "";
      n ? (o = n.innerHTML, n.classList.add("loading"), setSafeInnerHTML(n, ICONS.loading)) : showEnhanceLoadingOverlay();
      try {
        const s = await callAI_API(e, a);
        n ? (n.classList.remove("loading"), setSafeInnerHTML(n, o)) : hideEnhanceLoadingOverlay(), showAIDiffModal(e, s, t)
      } catch (e) {
        if (n ? (n.classList.remove("loading"), setSafeInnerHTML(n, o)) : hideEnhanceLoadingOverlay(), e.message && (e.message.includes("API Key") || e.message.includes("Missing"))) {
          "go_to_settings" === await createDialogo({
            title: getTranslation("apiKeyTitle"),
            message: getTranslation("apiKeyDesc"),
            actions: [{
              label: getTranslation("openConfig"),
              style: "edit",
              value: "go_to_settings"
            }]
          }) && (settingsModal || (settingsModal = createSettingsModal(), document.body.appendChild(settingsModal)), settingsModal.resetToCurrent && settingsModal.resetToCurrent(), showModal(settingsModal), setTimeout(() => {
            const e = settingsModal.querySelector('.mp-tab-btn[data-tab="advanced"]');
            e && e.click()
          }, 50))
        } else await createDialogo({
          title: getTranslation("error"),
          message: e.message,
          type: "alert"
        })
      }
    }
    async function triggerAIEnhancement(e, t, n = null) {
      if (!e || 0 === e.trim().length) return void showNotification(getTranslation("noTextToEnhance"), "error");
      if (!hasActiveAIConfig()) {
        return void("go_to_settings" === await createDialogo({
          title: getTranslation("apiKeyTitle"),
          message: getTranslation("apiKeyDesc"),
          actions: [{
            label: getTranslation("openConfig"),
            style: "edit",
            value: "go_to_settings"
          }]
        }) && (settingsModal || (settingsModal = createSettingsModal(), document.body.appendChild(settingsModal)), settingsModal.resetToCurrent && settingsModal.resetToCurrent(), showModal(settingsModal), setTimeout(() => {
          const e = settingsModal.querySelector('.mp-tab-btn[data-tab="advanced"]');
          e && e.click()
        }, 50)))
      }
      const a = getActiveAIConfig()?.systemPrompt || DEFAULT_AI_SYSTEM_PROMPT,
        o = parseSystemPrompts(a);
      o && o.length >= 2 ? showPromptSelectionModal(o, a => {
        processAIEnhancementFlow(e, t, n, a)
      }) : processAIEnhancementFlow(e, t, n, a)
    }
    async function handleInstantPageEnhancement() {
      try {
        if (!currentPlatform) return;
        const e = resolveEditor();
        if (!e) {
          console.warn("[Prompt Manager] 未找到当前平台的输入框", {
            platform: currentPlatform,
            selector: platformSelectors[currentPlatform] || "(未定义)"
          }), showNotification(getTranslation("editorNotFound").replace("{platform}", currentPlatform), "error");
          return
        }
        await triggerAIEnhancement(readEditorText(e), {
          get value() {
            return ""
          },
          set value(t) {
            (async () => {
              const target = e.isConnected ? e : resolveEditor() || e;
              await robustClearEditor(target), setTimeout(() => {
                target.focus(), insertPrompt({
                  text: t
                }, false, false)
              }, 200)
            })()
          }
        }, null)
      } catch (err) {
        console.error("[Prompt Manager] 优化提示词出错:", err), showNotification(String(err && err.message || err), "error")
      }
    }
    async function handleTextareaEnhancement(e, t) {
      triggerAIEnhancement(e.value, {
        get value() {
          return e.value
        },
        set value(t) {
          (async () => {
            await robustClearEditor(e), setTimeout(() => {
              e.value = t, e.dispatchEvent(new Event("input", {
                bubbles: true,
                composed: true
              })), e.dispatchEvent(new Event("change", {
                bubbles: true
              })), e.focus()
            }, 200)
          })()
        }
      }, t)
    }
    const SYNTAX_STORAGE_KEY = "SyntaxHighlight",
      DEFAULT_SYNTAX_CONFIG = {
        enabled: true
      };
    let currentSyntaxConfig = DEFAULT_SYNTAX_CONFIG;

    function loadSyntaxConfig() {
      try {
        const e = GM_getValue(SYNTAX_STORAGE_KEY);
        currentSyntaxConfig = e ? JSON.parse(e) : {
          ...DEFAULT_SYNTAX_CONFIG
        }
      } catch (e) {
        currentSyntaxConfig = {
          ...DEFAULT_SYNTAX_CONFIG
        }
      }
    }
    async function saveSyntaxConfig(e) {
      currentSyntaxConfig = e, await GM_setValue(SYNTAX_STORAGE_KEY, JSON.stringify(e))
    }
    const SyntaxHighlighter = function() {
      "use strict";
      let e = null,
        t = null,
        n = null,
        a = "",
        o = null,
        s = null;
      const r = () => {
          e && t && (t.scrollTop = e.scrollTop, t.scrollLeft = e.scrollLeft)
        },
        i = () => {
          if (!e || !t) return;
          const n = e.value;
          n !== a && (a = n, setSafeInnerHTML(t, (e => {
            if (!e) return "\n";
            let t = (e => {
              const t = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;"
              };
              return e.replace(/[&<>]/g, e => t[e])
            })(e);
            const n = [],
              a = e => {
                const t = n.length;
                return n.push(e), `\0${t}\0`
              };
            return t = t.replace(/([ \t]*)(#+)(ignore)([ \t]*(?:\r?\n)?)([\s\S]*?)((?:\r?\n)?[ \t]*)(\2)(end)/gi, (e, t, n, o, s, r, i, l, c) => a(`<span class="mp-syn-ign-f">${t}${n}${o}</span>${s}<span class="mp-syn-ign-c">${r}</span>${i}<span class="mp-syn-ign-f">${l}${c}</span>`)), t = t.replace(/\\([#\[\]{}':])/g, e => a(`<span class="mp-syn-esc">${e}</span>`)), t = t.replace(/('{2})([\s\S]*?)\1/g, (e, t, n) => a(`<span class="mp-syn-qt-f">${t}</span><span class="mp-syn-qt-c">${n}</span><span class="mp-syn-qt-f">${t}</span>`)), t = t.replace(/#(date|time)((?:-[YMDHS]{2})*)(?:\+(date|time)((?:-[YMDHS]{2})*))?/gi, (e, t, n, o, s) => {
              let r = `<span class="mp-syn-dt-k">#${t}</span>`;
              return n && (r += `<span class="mp-syn-dt-f">${n}</span>`), o && (r += `<span class="mp-syn-dt-k">+${o}</span>`, s && (r += `<span class="mp-syn-dt-f">${s}</span>`)), a(r)
            }), t = t.replace(/#file(?:\(([^)]*)\))?/gi, (e, t) => {
              let n = '<span class="mp-syn-fl-k">#file</span>';
              return undefined !== t && (n += '<span class="mp-syn-fl-p">(</span>', n += `<span class="mp-syn-fl-t">${t}</span>`, n += '<span class="mp-syn-fl-p">)</span>'), a(n)
            }), t = t.replace(/([ \t]*)(#+)(start)([ \t]*(?:\r?\n)?)([\s\S]*?)((?:\r?\n)?[ \t]*)(\2)(end)/gi, (e, t, n, o, s, r, i, l, c) => {
              let d = r;
              return d = d.replace(/(^|\/\/)([ \t]*)(#)(\s*)([^#\n][^\n]*?)(?=\/\/|\r?\n|$)/gm, (e, t, n, a, o, s) => `${t}${n}<span class="mp-syn-sl-hh">${a}</span>${o}<span class="mp-syn-sl-h">${s}</span>`), d = d.replace(/(\/\/)/g, '<span class="mp-syn-sl-sep">$1</span>'), d = d.replace(/([+\-]|\d+)(\s*)(\[)([^\]]*)(\])/g, (e, t, n, a, o, s) => {
                let r = "mp-syn-sl-p-id";
                "+" === t ? r = "mp-syn-sl-p-multi" : "-" === t && (r = "mp-syn-sl-p-single");
                let i = o;
                const l = o.match(/^([\s\S]*?)(::\s*[xX]\s*)$/);
                return i = l ? `<span class="${r}">${l[1]}</span><span class="mp-syn-sel-chk">${l[2]}</span>` : `<span class="${r}">${o}</span>`, `<span class="${r}">${t}</span>${n}<span class="${r}">${a}</span>` + i + `<span class="${r}">${s}</span>`
              }), d = d.replace(/(\[)(#)(\])/g, (e, t, n, a) => {
                const o = "mp-syn-sl-p-other";
                return `<span class="${o}">${t}</span><span class="${o}">${n}</span><span class="${o}">${a}</span>`
              }), d = d.replace(/'([^'\\]*(?:\\.[^'\\]*)*)'/g, (e, t) => `<span class="mp-syn-qt-f">'</span><span class="mp-syn-qt-c">${t}</span><span class="mp-syn-qt-f">'</span>`), a(`<span class="mp-syn-sl-f">${t}${n}${o}</span>${s}` + d + `${i}<span class="mp-syn-sl-f">${l}${c}</span>`)
            }), t = t.replace(/(\{)([^}=]+?)(\s*=\s*)(\$[a-zA-Z0-9_]+)([^}]*)(\})(?:\(([^)]*)\))?/g, (e, t, n, o, s, r, i, l) => {
              let c = `<span class="mp-syn-sil-b">${t}</span><span class="mp-syn-sil-l">${n}</span><span class="mp-syn-sil-e">${o}</span><span class="mp-syn-sil-v">${s}</span>`;
              if (r) {
                const e = r.match(/^([\s\S]*?)(::)([\s\S]*)$/);
                c += e ? e[1] + `<span class="mp-syn-def-s">${e[2]}</span>` + `<span class="mp-syn-def-v">${e[3]}</span>` : r
              }
              return c += `<span class="mp-syn-sil-b">${i}</span>`, undefined !== l && (c += `<span class="mp-syn-in-c">(${l})</span>`), a(c)
            }), t = t.replace(/(\[)([^\]=]+?)(\s*=\s*)(\$[a-zA-Z0-9_]+)([^\]]*)(\])(?:\(([^)]*)\))?/g, (e, t, n, o, s, r, i, l) => {
              let c = `<span class="mp-syn-in-b">${t}</span><span class="mp-syn-in-l">${n}</span><span class="mp-syn-in-e">${o}</span><span class="mp-syn-in-v">${s}</span>`;
              if (r) {
                const e = r.match(/^([\s\S]*?)(::)([\s\S]*)$/);
                c += e ? e[1] + `<span class="mp-syn-def-s">${e[2]}</span>` + `<span class="mp-syn-def-v">${e[3]}</span>` : r
              }
              return c += `<span class="mp-syn-in-b">${i}</span>`, undefined !== l && (c += `<span class="mp-syn-in-c">(${l})</span>`), a(c)
            }), t = t.replace(/(\[)([^\]]+?)(\])(?:\(([^)]*)\))?/g, (e, t, n, o, s) => {
              if (n.includes("\0")) return e;
              let r = `<span class="mp-syn-free-b">${t}</span>`;
              const i = n.match(/^([\s\S]*?)(::)([\s\S]*)$/);
              return r += i ? `<span class="mp-syn-free-l">${i[1]}</span><span class="mp-syn-def-s">${i[2]}</span><span class="mp-syn-def-v">${i[3]}</span>` : `<span class="mp-syn-free-l">${n}</span>`, r += `<span class="mp-syn-free-b">${o}</span>`, undefined !== s && (r += `<span class="mp-syn-in-c">(${s})</span>`), a(r)
            }), t = t.replace(/(\$[a-zA-Z0-9_]+)/g, (e, t) => a(`<span class="mp-syn-var">${t}</span>`)), (e => {
              for (let t = n.length - 1; t >= 0; t--) e = e.split(`\0${t}\0`).join(n[t]);
              return e
            })(t) + "\n"
          })(n)), r())
        },
        l = () => {
          o && cancelAnimationFrame(o), o = requestAnimationFrame(i)
        },
        c = () => l(),
        d = () => r(),
        p = () => {
          o && (cancelAnimationFrame(o), o = null), s && (s.disconnect(), s = null), e && (e.classList.remove("mp-syntax-enabled"), e.removeEventListener("input", c), e.removeEventListener("scroll", d), e.removeEventListener("keydown", c), delete e.syntaxUpdate, delete e.syntaxClear, n && n.parentElement && (n.parentElement.insertBefore(e, n), n.remove())), e = null, t = null, n = null, a = ""
        };
      return {
        attach: o => {
          if (undefined !== currentSyntaxConfig && !currentSyntaxConfig.enabled) return void p();
          if (!(o && o instanceof HTMLTextAreaElement)) return;
          if (e === o && t) return a = "", void i();
          p(), e = o, a = "";
          const r = o.closest(".mp-scroll-content") || o.parentElement;
          if (!r) return;
          n = document.createElement("div"), n.className = "mp-syntax-container", t = document.createElement("div"), t.className = "mp-syntax-backdrop", t.setAttribute("aria-hidden", "true");
          const m = getComputedStyle(o);
          t.style.fontSize = m.fontSize, t.style.lineHeight = m.lineHeight, t.style.fontFamily = m.fontFamily, t.style.padding = m.padding, r.insertBefore(n, o), n.appendChild(t), n.appendChild(o), o.classList.add("mp-syntax-enabled"), o.addEventListener("input", c), o.addEventListener("scroll", d), o.addEventListener("keydown", c), s = new MutationObserver(() => {
            l()
          }), s.observe(o, {
            attributes: true,
            attributeFilter: ["value"]
          }), o.syntaxUpdate = () => {
            a = "", i()
          }, o.syntaxClear = () => {
            a = "", t && setSafeInnerHTML(t, "\n")
          }, i()
        },
        detach: p,
        refresh: () => {
          a = "", i()
        }
      }
    }();

    function detectPlatform() {
      const e = window.location.hostname;
      return e.includes("chatgpt.com") ? "chatgpt" : e.includes("deepseek.com") ? "deepseek" : e.includes("doubao.com") ? "doubao" : e.includes("chat.qwen.ai") ? "qwen" : e.includes("qianwen") ? "qianwen" : e.includes("chat.z.ai") ? "zai" : e.includes("gemini.google.com") ? "gemini" : e.includes("arena.ai") ? "arena" : e.includes("kimi.com") ? "kimi" : e.includes("claude.ai") ? "claude" : e.includes("grok.com") ? "grok" : e.includes("yuanbao.tencent.com") ? "yuanbao" : e.includes("gist.github.com") ? "gist" : null
    }

    function getSendButton() {
      switch (currentPlatform) {
        case "deepseek":
          return document.querySelector('div[role="button"]:has(svg path[d^="M8.3125 0.981587"])') || document.querySelector('div[role="button"]:has(svg path[d^="M8.31"])') || document.querySelector(".ds-icon-button:has(path)");
        case "doubao":
          return document.querySelector("#flow-end-msg-send") || document.querySelector('button:has(svg path[d^="m3.543 8.883"])') || document.querySelector(".send-btn-wrapper button");
        case "qianwen":
          return document.querySelector('button:has(span[data-icon-type*="send"])') || document.querySelector('button:has(svg use[*|href^="#qwpcicon-sendChat"])') || document.querySelector('button:has(path[d^="M554.24 85.76"])');
        case "yuanbao":
          return document.querySelector("#yuanbao-send-btn") || document.querySelector("a:has(span.icon-send)") || document.querySelector("a.style__send-btn");
        case "kimi":
          return document.querySelector('.send-button-container:has(svg path[d^="M705.536"])') || document.querySelector('.send-button-container:has(svg[name="Send"])') || document.querySelector(".send-button-container .send-icon");
        case "chatgpt":
          return document.querySelector('[data-testid="send-button"]') || document.querySelector("#composer-submit-button") || document.querySelector('button.composer-submit-btn:has(svg use[href*="sprites-core"])');
        case "claude":
          return document.querySelector('button:has(svg path[d^="M208.49,120.49"])') || document.querySelector('button[type="button"]:has(svg[viewBox="0 0 256 256"])') || document.querySelector("div.shrink-0 > div > div > button:has(svg)");
        case "gemini":
          return document.querySelector("button.send-button.submit") || document.querySelector('button:has(mat-icon[data-mat-icon-name="send"])') || document.querySelector(".send-button-container button");
        case "grok":
          return document.querySelector('button[type="submit"]:has(path[d^="M6 11L12 5"])') || document.querySelector('button:has(svg path[d^="M6 11"])') || document.querySelector('button[type="submit"]:has(svg)');
        case "qwen":
          return document.querySelector("button.send-button") || document.querySelector('button.send-button:has(path[d^="M836.43"])') || document.querySelector(".chat-prompt-send-button button");
        case "zai":
          return document.querySelector("#send-message-button") || document.querySelector('button.sendMessageButton[type="submit"]') || document.querySelector('button:has(svg path[d^="M8 13.3333V2.66667M8 2.66667L4"])');
        case "arena":
          return document.querySelector('button[type="submit"]:has(svg path[d^="M3 12L21 12M21 12L12.5"]))') || document.querySelector('button[type="submit"]:has(svg path[d^="M3 12"])') || document.querySelector('button.active\\:bg-interactive-cta-active[type="submit"]');
        default:
          return null
      }
    }

    function isEditorEmpty(e) {
      if (!e || !e.isConnected) return true;
      const t = e.tagName.toLowerCase();
      if ("textarea" === t || "input" === t) return 0 === e.value.replace(/[\s\u200B\u00A0\uFEFF\u200C\u200D\r\n]/g, "").length;
      if (e.querySelector('img, canvas, video, [type="file"], [class*="attachment"], [class*="file-item"]')) return false;
      const n = e.innerHTML.trim();
      if ("" === n || "<p><br></p>" === n || "<p></p>" === n || "<br>" === n || "<div><br></div>" === n) return true;
      if (e.classList.contains("is-empty") || e.classList.contains("ProseMirror-empty") || e.classList.contains("ql-blank")) return true;
      const a = e.cloneNode(true);
      a.querySelectorAll('[data-slate-placeholder], [data-placeholder], [class*="placeholder"]').forEach(e => e.remove());
      let o = a.textContent || a.innerText || "";
      return o = o.replace(/[\s\u200B\u00A0\uFEFF\u200C\u200D\r\n]/g, ""), 0 === o.length
    }

    function waitForUploadAndClick(e, t = 12e4) {
      const n = Date.now(),
        a = setInterval(() => {
          if (Date.now() - n > t) return void clearInterval(a);
          if (isEditorEmpty(e)) return void clearInterval(a);
          const o = getSendButton();
          if (!o) return;
          const s = o.disabled || "true" === o.getAttribute("aria-disabled"),
            r = window.getComputedStyle(o),
            i = "not-allowed" === r.cursor || parseFloat(r.opacity) < .5,
            l = "none" === r.display || "hidden" === r.visibility;
          s || i || l || o.click()
        }, 800)
    }

    function forceUpload(e, t = 12e4) {
      const n = Date.now(),
        a = setInterval(() => {
          if (Date.now() - n > t || isEditorEmpty(e)) clearInterval(a);
          else try {
            e.isConnected && e.focus();
            const t = new KeyboardEvent("keydown", {
              key: "Enter",
              code: "Enter",
              which: 13,
              keyCode: 13,
              bubbles: true,
              cancelable: true
            });
            e.dispatchEvent(t)
          } catch (e) {}
        }, 800)
    }
    function pasteTextFallback(el, text, atCursor) {
        const dt = new DataTransfer;
        if (dt.setData("text/plain", text), el.dispatchEvent(new ClipboardEvent("paste", {
            clipboardData: dt,
            bubbles: true,
            cancelable: true
        })), undefined !== el.value && !el.value.includes(text)) {
            let v = el.value + text;
            if (atCursor && "number" == typeof el.selectionStart) {
                const start = el.selectionStart;
                v = el.value.substring(0, start) + text + el.value.substring(el.selectionEnd), setTimeout(() => {
                    el.selectionStart = el.selectionEnd = start + text.length
                }, 0)
            }
            const setter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
            setter ? setter.call(el, v) : el.value = v, el.dispatchEvent(new Event("input", {
                bubbles: true
            }))
        }
    }

    async function insertPrompt(e, t = false, n = false) {
      let a = resolveEditor();
      if (!a) return void showNotification(getTranslation("editorNotFound").replace("{platform}", String(currentPlatform || "?")), "error");
      a.focus();
      const o = navigator.userAgent.toLowerCase().includes("firefox");
      let s = false,
        r = 0;
      const i = [];
      if (e.activeFileIds && e.activeFileIds.length > 0) {
        (await getGlobalFiles()).forEach(t => {
          e.activeFileIds.includes(t.id) && (r += t.size, i.push(dataURLtoFile(t.data, t.name)))
        })
      }
      if (e.dynamicFiles && e.dynamicFiles.length > 0 && e.dynamicFiles.forEach(e => {
          r += e.size, i.push(e)
        }), i.length > 0) {
        s = true, r = 1500 + r / 1024 / 100 * 100;
        const e = new DataTransfer;
        if (i.forEach(t => e.items.add(t)), "gemini" === currentPlatform)
          if (o) {
            let t = document.querySelector("[data-filedrop-id]") || document.querySelector(".chat-window-input-container") || a;
            ["dragenter", "dragover", "drop"].forEach(n => {
              const a = new DragEvent(n, {
                bubbles: true,
                cancelable: true,
                dataTransfer: e
              });
              t.dispatchEvent(a)
            })
          } else {
            const t = new ClipboardEvent("paste", {
              bubbles: true,
              cancelable: true,
              clipboardData: e
            });
            a.dispatchEvent(t)
          }
        else {
          let t = false;
          if (["qwen", "grok", "yuanbao", "kimi"].includes(currentPlatform)) {
            let n = document.querySelector(".chat-input-container") || document.querySelector("form") || a;
            ["dragenter", "dragover", "drop"].forEach(t => {
              const a = new DragEvent(t, {
                bubbles: true,
                cancelable: true,
                dataTransfer: e
              });
              n.dispatchEvent(a)
            }), t = true
          }
          if (!t) {
            let t = document.querySelector('input[type="file"]');
            if (t) try {
              t.value = "", t.files = e.files, t.dispatchEvent(new Event("change", {
                bubbles: true
              })), t.dispatchEvent(new Event("input", {
                bubbles: true
              }))
            } catch (e) {} else ["dragenter", "dragover", "drop"].forEach(t => {
              const n = new DragEvent(t, {
                bubbles: true,
                cancelable: true,
                dataTransfer: e
              });
              a.dispatchEvent(n)
            })
          }
        }
      }
      if (setTimeout(() => {
          const r = (t = false) => {
            a.focus();
            const n = window.getSelection(),
              o = document.createRange();
            o.selectNodeContents(a), o.collapse(false), n.removeAllRanges(), n.addRange(o), t || a.dispatchEvent(new InputEvent("beforeinput", {
              bubbles: true,
              cancelable: true,
              inputType: "insertText",
              data: e.text
            }));
            const s = new DataTransfer;
            s.setData("text/plain", e.text), a.dispatchEvent(new ClipboardEvent("paste", {
              clipboardData: s,
              bubbles: true,
              cancelable: true
            })), a.dispatchEvent(new Event("input", {
              bubbles: true
            }))
          };
          if ("claude" === currentPlatform || "grok" === currentPlatform)
            if (a.focus(), "TEXTAREA" === a.tagName || "INPUT" === a.tagName) {
              const t = a.selectionStart || 0,
                n = a.selectionEnd || 0,
                o = a.value.substring(0, t) + e.text + a.value.substring(n),
                s = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
              s ? s.call(a, o) : a.value = o, setTimeout(() => {
                a.selectionStart = a.selectionEnd = t + e.text.length
              }, 0), a.dispatchEvent(new Event("input", {
                bubbles: true
              }))
            } else {
              o && "" === a.textContent.trim() && (a.innerHTML = "");
              const t = window.getSelection(),
                n = document.createRange();
              n.selectNodeContents(a), n.collapse(false), t.removeAllRanges(), t.addRange(n);
              const s = e.text.split("\n");
              let r = "";
              s.forEach(e => {
                "" === e.trim() ? r += "<p><br></p>" : r += `<p>${e}</p>`
              });
              if (!document.execCommand("insertHTML", false, r)) {
                const t = new DataTransfer;
                t.setData("text/html", r), t.setData("text/plain", e.text), a.dispatchEvent(new ClipboardEvent("paste", {
                  clipboardData: t,
                  bubbles: true,
                  cancelable: true
                }))
              }
              a.dispatchEvent(new Event("input", {
                bubbles: true
              }))
            }
          else if (!o || "kimi" !== currentPlatform && "qwen" !== currentPlatform)
            if (!o || "chatgpt" !== currentPlatform && "yuanbao" !== currentPlatform)
              if ("gemini" === currentPlatform)
                if (a.focus(), o) {
                  let t = a.querySelector("p") || document.createElement("p");
                  t.textContent += e.text, a.contains(t) || a.appendChild(t), a.dispatchEvent(new Event("input", {
                    bubbles: true,
                    composed: true
                  }))
                } else {
                  if (!document.execCommand("insertText", false, e.text)) {
                    const t = document.createTextNode(e.text);
                    a.appendChild(t)
                  }
                  a.dispatchEvent(new Event("input", {
                    bubbles: true,
                    composed: true
                  }))
                }
           else if ("doubao" === currentPlatform)
            if (a.isContentEditable) {
              r(!o)
            } else if (a.focus(), o) {
            if (!document.execCommand("insertText", false, e.text)) {
              const t = new DataTransfer;
              t.setData("text/plain", e.text), a.dispatchEvent(new ClipboardEvent("paste", {
                clipboardData: t,
                bubbles: true,
                cancelable: true
              }))
            }
            a.dispatchEvent(new Event("input", {
              bubbles: true,
              composed: true
            }))
          } else {
            pasteTextFallback(a, e.text, n);
          } else if ("qianwen" === currentPlatform) {
            isSlateEditor(a) ? afterCompose(a, () => {
              writeViaSlateApi(a, e.text) || writeToSlate(a, e.text)
            }) : a.focus()
          } else {
            pasteTextFallback(a, e.text, n);
          } else {
            "" === a.textContent.trim() && (a.innerHTML = "");
            e.text.split("\n").forEach(e => {
              const t = document.createElement("p");
              "" === e.trim() ? t.appendChild(document.createElement("br")) : t.textContent = e, a.appendChild(t)
            }), a.dispatchEvent(new Event("input", {
              bubbles: true,
              composed: true
            })), a.focus();
            const t = document.createRange();
            t.selectNodeContents(a), t.collapse(false);
            const n = window.getSelection();
            n.removeAllRanges(), n.addRange(t)
          } else a.focus(), document.execCommand("insertText", false, e.text);
          ensureEditorWritten(a, e.text), n || moveCursorToEnd(a), e.autoExecute && !t && ("grok" === currentPlatform || "arena" === currentPlatform ? forceUpload(a) : s ? waitForUploadAndClick(a) : (() => {
            // 千问等框架编辑器写入是异步的：发送前先等内容真的出现（最多 3s），
            // 否则会点出一条空消息
            const probe = String(e.text || "").replace(/\s+/g, " ").trim().slice(0, 40);
            const read = () => readEditorText(a).replace(/\s+/g, " ");
            const t0 = Date.now();
            const fire = () => {
              let e = false;
              try {
                const t = getSendButton();
                if (t) {
                  t.disabled || "true" === t.getAttribute("aria-disabled") || (t.click(), e = true)
                }
              } catch (e) {}
              if (!e) try {
                const e = new KeyboardEvent("keydown", {
                  key: "Enter",
                  code: "Enter",
                  which: 13,
                  keyCode: 13,
                  bubbles: true,
                  cancelable: true
                });
                a.dispatchEvent(e)
              } catch (e) {}
            };
            if (!probe) return void setTimeout(fire, 150);
            const iv = setInterval(() => {
              if (!a.isConnected) { clearInterval(iv); return }
              if (read().includes(probe) || Date.now() - t0 >= 3000) { clearInterval(iv); setTimeout(fire, 120) }
            }, 150)
          })())
        }, 100), e.id) {
        let t = await getAll();
        const n = t.findIndex(t => t.id === e.id);
        if (-1 !== n && !t[n].isFixed) {
          const [e] = t.splice(n, 1);
          let a = t.findIndex(e => !e.isFixed); - 1 === a && (a = t.length), t.splice(a, 0, e), normalizePositions(t), await saveRawPrompts(promptsToStorage(t))
        }
      }
    }

    function insertIntoGistEditor(e, t, n) {
      const a = e.querySelector("input.js-gist-filename");
      a && (a.value = t, a.dispatchEvent(new Event("input", {
        bubbles: true
      })), a.dispatchEvent(new Event("change", {
        bubbles: true
      })));
      const o = e.querySelector('.CodeMirror-code[contenteditable="true"]');
      if (o) {
        o.focus();
        const e = document.createRange();
        e.selectNodeContents(o);
        const t = window.getSelection();
        t.removeAllRanges(), t.addRange(e);
        if (!document.execCommand("insertText", false, n)) {
          const e = new DataTransfer;
          e.setData("text/plain", n);
          const t = new ClipboardEvent("paste", {
            clipboardData: e,
            bubbles: true,
            cancelable: true
          });
          o.dispatchEvent(t)
        }
      } else {
        const t = e.querySelector(".CodeMirror textarea"),
          a = e.querySelector("textarea.js-file-textarea"),
          o = t || a;
        o && (o.focus(), o.value = n, o.dispatchEvent(new Event("input", {
          bubbles: true
        })), o.dispatchEvent(new Event("change", {
          bubbles: true
        })))
      }
    }

    function exportJsonAsSingleFile(e) {
      const t = e.map(e => ({
          title: e.title,
          text: e.text,
          usePlaceholders: e.usePlaceholders,
          autoExecute: e.autoExecute
        })),
        n = 1 === e.length ? `${(e[0].title||"Prompt").replace(/[<>:"/\\|?*]/g,"").trim()}.mp.prompt.json` : `Prompts_PromptManager_${Date.now()}.mp.prompt.json`,
        a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([JSON.stringify(t, null, 2)], {
        type: "application/json"
      })), a.download = n, a.click(), URL.revokeObjectURL(a.href)
    }
    async function exportJsonAsMultipleFiles(e) {
      if (e.length > 1) {
        if (!await createDialogo({
            title: getTranslation("confirmDownload"),
            message: getTranslation("confirmDownloads", {
              count: e.length
            }),
            dontShowAgainId: "confirm-export-download",
            type: "confirm"
          })) return
      }
      for (const t of e) {
        const e = {
            title: t.title,
            text: t.text,
            usePlaceholders: t.usePlaceholders,
            autoExecute: t.autoExecute
          },
          n = document.createElement("a");
        n.href = URL.createObjectURL(new Blob([JSON.stringify(e, null, 2)], {
          type: "application/json"
        }));
        const a = (t.title || "Prompt").replace(/[<>:"/\\|?*]/g, "").trim();
        n.download = `${a||"Prompt"}.mp.prompt.json`, n.style.display = "none", document.body.appendChild(n), n.click(), document.body.removeChild(n), await new Promise(e => setTimeout(e, 200))
      }
    }
    async function openExportMenu(e = null) {
      closeMenu();
      const t = document.createElement("div");
      t.className = "mp-overlay", t.id = "__ap_export_overlay";
      const n = document.createElement("div");
      n.className = "mp-modal-box", n.onclick = e => e.stopPropagation();
      const a = await getAll(),
        o = new Set(a.map(e => e.id));
      let s = -1;
      const r = e ? `<button class=save-button id=__ap_do_gist_insert style=width:100%>${getTranslation("inserirGist")}</button>` : `<button class="save-button mp-btn-secondary"id=__ap_share_gist style=margin-right:auto>${getTranslation("shareGist")}</button> <button class=save-button id=__ap_do_export_txt>TXT</button> <button class=save-button id=__ap_do_export_json>JSON</button>`;
      setSafeInnerHTML(n, ` <button class=mp-modal-close-btn id=__ap_close_export>${ICONS.close}</button><h2 class=modal-title>${getTranslation(e?"exportGist":"export")}</h2><div class=mp-search-container><input class=mp-search-input id=__ap_export_search autocomplete=off placeholder="${getTranslation("search")}"><div class=mp-export-actions><label class=mp-checkbox-wrapper style=cursor:pointer;user-select:none><input class=mp-checkbox id=__ap_select_all checked type=checkbox> <span style=margin-left:8px>${getTranslation("selectAll")}</span></label> <span id=__ap_count_label></span></div></div><div class=mp-export-list id=__ap_export_list></div><div class=mp-export-buttons>${r}</div>`), t.appendChild(n), document.body.appendChild(t), requestAnimationFrame(() => t.classList.add("visible"));
      const i = n.querySelector("#__ap_export_list");

      function l(e, t, n, a) {
        if (a && -1 !== s && s !== t) {
          const e = Array.from(i.querySelectorAll(".prompt-selector")),
            a = Math.min(s, t),
            r = Math.max(s, t);
          for (let t = a; t <= r; t++) {
            const a = e.find(e => parseInt(e.dataset.idx) === t);
            a && (a.checked = n, n ? o.add(a.dataset.promptId) : o.delete(a.dataset.promptId))
          }
        } else n ? o.add(e) : o.delete(e);
        s = t, u(), c()
      }

      function c() {
        const e = Array.from(i.querySelectorAll(".prompt-selector")),
          t = e.length,
          n = e.filter(e => e.checked).length,
          a = document.getElementById("__ap_count_label");
        a.textContent = 0 === n ? getTranslation("countPrompts", {
          count: t
        }) : n === t ? `${t}/${t} ✓` : `${n}/${t}`
      }

      function d(e = "") {
        i.textContent = "", s = -1;
        const t = e.toLowerCase();
        let n = 0;
        if (0 === a.length) {
          const e = document.createElement("div");
          return e.className = "empty-state", e.textContent = getTranslation("noSavedPrompts"), i.appendChild(e), void c()
        }
        a.forEach(e => {
          if (!(e.title.toLowerCase().includes(t) || e.text.toLowerCase().includes(t))) return;
          const a = n;
          n++;
          const s = document.createElement("div");
          s.className = "mp-export-item", s.onclick = t => {
            if ("checkbox" !== t.target.type) {
              const n = s.querySelector("input"),
                o = !n.checked;
              n.checked = o, l(e.id, a, o, t.shiftKey)
            }
          };
          const r = document.createElement("input");
          r.type = "checkbox", r.className = "mp-checkbox prompt-selector", r.checked = o.has(e.id), r.dataset.promptId = e.id, r.dataset.idx = a, r.onclick = t => {
            t.stopPropagation(), l(e.id, parseInt(t.target.dataset.idx), t.target.checked, t.shiftKey)
          };
          const c = document.createElement("div");
          c.className = "mp-item-content";
          const d = document.createElement("div");
          d.className = "mp-item-title", d.textContent = e.title;
          const p = document.createElement("div");
          p.className = "mp-item-preview", p.textContent = e.text.substring(0, 150).replace(/\n/g, " ") + "...";
          const m = document.createElement("div");
          m.className = "mp-checkbox-wrapper", m.appendChild(r), c.appendChild(d), c.appendChild(p), s.appendChild(m), s.appendChild(c), i.appendChild(s)
        }), c()
      }
      i.style.maxHeight = "300px", setupEnhancedScroll(i), d();
      const p = document.getElementById("__ap_export_search"),
        m = document.getElementById("__ap_select_all");

      function u() {
        const e = Array.from(i.querySelectorAll(".prompt-selector"));
        if (0 === e.length) return;
        const t = e.every(e => e.checked),
          n = e.some(e => e.checked);
        m.checked = t, m.indeterminate = n && !t
      }
      p.oninput = e => {
        s = -1, d(e.target.value), u()
      }, m.onchange = e => {
        s = -1;
        const t = e.target.checked;
        i.querySelectorAll(".prompt-selector").forEach(e => {
          e.checked = t, t ? o.add(e.dataset.promptId) : o.delete(e.dataset.promptId)
        }), c()
      };
      const g = () => a.filter(e => o.has(e.id)).map(e => {
          const {
            id: t,
            position: n,
            ...a
          } = e;
          return a
        }),
        f = () => {
          t.classList.remove("visible"), setTimeout(() => t.remove(), 200)
        };
      n.querySelector("#__ap_close_export").onclick = f;
      const h = e => {
        "Escape" === e.key && (f(), document.removeEventListener("keydown", h))
      };
      document.addEventListener("keydown", h), e ? document.getElementById("__ap_do_gist_insert").onclick = () => {
        const t = g();
        if (0 === t.length) return void showNotification(getTranslation("noPromptsToExport"), "error");
        const n = t.map(e => ({
            title: e.title,
            text: e.text,
            usePlaceholders: e.usePlaceholders,
            autoExecute: e.autoExecute
          })),
          a = JSON.stringify(n, null, 2);
        let o = "";
        if (1 === t.length) o = `${(t[0].title||"Prompt").replace(/[<>:"/\\|?*]/g,"").trim()}.mp.prompt.json`;
        else {
          const e = new Date;
          o = `Prompts_PromptManager_${e.toLocaleDateString(navigator.language).replace(/\//g,"-")}_${e.toLocaleTimeString(navigator.language,{hour:"2-digit",minute:"2-digit",second:"2-digit"}).replace(/:/g,"-")}.mp.prompt.json`
        }
        insertIntoGistEditor(e.container, o, a), f()
      } : (document.getElementById("__ap_do_export_json").onclick = async () => {
        const e = g();
        if (0 === e.length) return void showNotification(getTranslation("noPromptsToExport"), "error");
        if (1 === e.length) return void exportJsonAsSingleFile(e);
        const t = await createDialogo({
          title: getTranslation("exportJsonTitle"),
          message: getTranslation("exportJsonChoice", {
            count: e.length
          }),
          actions: [{
            label: getTranslation("exportSeparateFiles"),
            style: "danger",
            value: "multiple"
          }, {
            label: getTranslation("exportSingleFile"),
            style: "primary",
            value: "single"
          }]
        });
        "single" === t ? exportJsonAsSingleFile(e) : "multiple" === t && exportJsonAsMultipleFiles(e)
      }, document.getElementById("__ap_do_export_txt").onclick = async () => {
        const e = g();
        if (0 !== e.length) {
          if (e.length > 1) {
            if (!await createDialogo({
                title: getTranslation("confirmDownload"),
                message: getTranslation("confirmDownloads", {
                  count: e.length
                }),
                dontShowAgainId: "confirm-export-download",
                type: "confirm"
              })) return
          }
          for (const t of e) {
            const e = document.createElement("a");
            e.href = URL.createObjectURL(new Blob([t.text], {
              type: "text/plain"
            }));
            const n = (t.title || "prompt").replace(/[<>:"/\\|?*]/g, "").trim();
            e.download = `${n||"prompt"}.mp.prompt.txt`, e.style.display = "none", document.body.appendChild(e), e.click(), document.body.removeChild(e), await new Promise(e => setTimeout(e, 200))
          }
        } else showNotification(getTranslation("noPromptsToExport"), "error")
      }, document.getElementById("__ap_share_gist").onclick = () => {
        window.open("https://gist.github.com/", "_blank")
      }), setTimeout(() => p.focus(), 100)
    }

    function exportPrompts() {
      openExportMenu(null)
    }
    async function processAndSavePrompts(e) {
      if (!Array.isArray(e)) throw new Error(getTranslation("errorReadingJSON"));
      const t = await getAll(),
        n = e.map((e, t) => ({
          id: generatePromptId() + String(t).padStart(3, "0"),
          title: e.title || "No Title",
          text: e.text || "",
          usePlaceholders: e.usePlaceholders || false,
          autoExecute: e.autoExecute || false,
          isFixed: false,
          activeFileIds: [],
          tags: e.tags || [],
          usageCount: e.usageCount || 0
        }));
      let a = t.findIndex(e => !e.isFixed);
      return -1 === a && (a = t.length), t.splice(a, 0, ...n), normalizePositions(t), await saveRawPrompts(promptsToStorage(t)), await refreshMenu(), n.length
    }

    function parseTextPrompt(e, t) {
      const n = e.split(/\r?\n/);
      if (0 === n.length) return [];
      if (!n[0].match(/^\s*\{\{(.*?)\}\}\s*$/)) {
        return [{
          title: t.replace(/\.mp\.prompt\.(txt|md|json)$/i, "").trim(),
          text: e.trim(),
          usePlaceholders: false,
          autoExecute: false
        }]
      }
      const a = [];
      let o = null,
        s = [];
      for (let e = 0; e < n.length; e++) {
        const t = n[e],
          r = t.match(/^\s*\{\{(.*?)\}\}\s*$/);
        if (r) {
          o && (o.text = s.join("\n").trim(), a.push(o)), o = {
            title: "No Title",
            usePlaceholders: false,
            autoExecute: false,
            text: ""
          }, s = [];
          r[1].split(";").forEach(e => {
            const t = e.split(":");
            if (t.length >= 2) {
              const e = t[0].trim().toLowerCase(),
                n = t.slice(1).join(":").trim();
              "title" === e && (o.title = n), "useplaceholders" === e && (o.usePlaceholders = "true" === n.toLowerCase()), "autoexecute" === e && (o.autoExecute = "true" === n.toLowerCase())
            }
          })
        } else o && s.push(t)
      }
      return o && (o.text = s.join("\n").trim(), a.push(o)), a
    }
    async function importPrompts() {
      if ("local" === await createDialogo({
          title: getTranslation("import"),
          message: getTranslation("localImport"),
          actions: [{
            label: "GitHub Gist",
            style: "secondary",
            action: () => {
              window.open('https://gist.github.com/search?o=desc&q="prompt"&s=updated', "_blank")
            }
          }, {
            label: getTranslation("localFile"),
            style: "primary",
            value: "local"
          }]
        })) {
        const e = document.createElement("input");
        e.type = "file", e.accept = ".mp.prompt.json, .mp.prompt.txt, .mp.prompt.md", e.onchange = e => {
          const t = e.target.files[0];
          if (!t) return;
          const n = new FileReader;
          n.onload = async e => {
            try {
              const n = e.target.result;
              let a;
              a = t.name.toLowerCase().endsWith(".json") ? JSON.parse(n) : parseTextPrompt(n, t.name);
              showNotification(getTranslation("promptsImported", {
                count: await processAndSavePrompts(a)
              }), "success")
            } catch (e) {
              showNotification(getTranslation("errorImporting", {
                error: e.message
              }), "error")
            }
          }, n.readAsText(t)
        }, e.click()
      }
      "function" == typeof closeMenu && closeMenu()
    }

    function injectGistExportEditorButtons() {
      document.querySelectorAll(".gist-file-actions").forEach(e => {
        const t = `<span>${getTranslation("export")}</span>`,
          n = e.querySelector(".mp-gist-export-editor-btn");
        if (n) return void(n.innerHTML !== t && setSafeInnerHTML(n, t));
        const a = document.createElement("button");
        a.className = "mp-gist-import-btn mp-gist-export-editor-btn btn btn-sm", a.type = "button", a.style.marginRight = "2px", setSafeInnerHTML(a, t), a.onclick = t => {
          t.preventDefault();
          const n = e.closest(".js-gist-file");
          n && openExportMenu({
            container: n
          })
        }, e.prepend(a)
      })
    }

    function extractContentFromGistFile(e) {
      const t = e.querySelector(".markdown-body");
      if (t) {
        const e = t.cloneNode(true);
        e.querySelectorAll(".anchor, .octicon, .js-clipboard-copy").forEach(e => e.remove());
        let n = function e(t) {
          if (t.nodeType === Node.TEXT_NODE) return t.textContent;
          if (t.nodeType !== Node.ELEMENT_NODE) return "";
          let n = "";
          const a = t.tagName.toLowerCase();
          switch (Array.from(t.childNodes).forEach(t => {
              n += e(t)
            }), a) {
            case "h1":
              return `# ${n.trim()}\n`;
            case "h2":
              return `## ${n.trim()}\n`;
            case "h3":
              return `### ${n.trim()}\n`;
            case "h4":
              return `#### ${n.trim()}\n`;
            case "h5":
              return `##### ${n.trim()}\n`;
            case "h6":
              return `###### ${n.trim()}\n`;
            case "strong":
            case "b":
              return `**${n}**`;
            case "em":
            case "i":
              return `*${n}*`;
            case "p":
              return `${n}\n`;
            case "blockquote":
              return `${n.trim().split(/\r?\n/).map(e=>`> ${e}`).join("\n")}`;
            case "li": {
              const e = t.parentNode,
                a = n.trim();
              if (e && "OL" === e.tagName) {
                return `${Array.from(e.children).filter(e=>1===e.nodeType).indexOf(t)+1}. ${a}`
              }
              return `* ${a}`
            }
            case "ul":
            case "ol":
              return `\n${n.split("\n").map(e=>e.trim()).filter(e=>""!==e).join("\n")}\n`;
            case "hr":
              return "\n---\n";
            case "code":
              return t.parentNode && "PRE" === t.parentNode.tagName ? n : `\`${n}\``;
            case "pre":
              return `\n\`\`\`\n${n.trim()}\n\`\`\`\n`;
            case "a":
              return `[${n}](${t.getAttribute("href")||""})`;
            case "br":
              return "\n";
            default:
              return n
          }
        }(e);
        return n.replace(/\n{3}/g, "\n\n").trim()
      }
      const n = e.querySelectorAll(".blob-code-inner");
      return n.length > 0 ? Array.from(n).map(e => e.textContent.replace(/\r?\n$/, "")).join("\n") : null
    }
    async function handleGistImportClick(e, t, n) {
      e.stopPropagation(), e.preventDefault();
      const a = e.currentTarget,
        o = a.innerHTML;
      a.disabled = true;
      try {
        const e = extractContentFromGistFile(t);
        if (!e) throw new Error("Could not read file content");
        let o;
        o = n.toLowerCase().endsWith(".json") ? JSON.parse(e) : parseTextPrompt(e, n), await processAndSavePrompts(o);
        const s = Array.isArray(o) ? o.length : 1;
        showNotification(getTranslation("promptsImported", {
          count: s
        }), "success"), a.dataset.state = "imported", setSafeInnerHTML(a, `<span>${getTranslation("imported")}</span>`)
      } catch (e) {
        showNotification(getTranslation("errorImporting", {
          error: e.message
        }), "error"), a.disabled = false, setSafeInnerHTML(a, o)
      }
    }

    function injectGistButtons() {
      document.querySelectorAll(".file").forEach(e => {
        const t = e.querySelector(".file-actions");
        if (!t) return;
        const n = e.querySelector(".gist-blob-name"),
          a = n ? n.innerText.trim() : "";
        if (!a.match(/\.mp\.prompt\.(json|txt|md)$/i)) return;
        const o = `<span>${getTranslation("import")}</span>`,
          s = e.querySelector(".mp-gist-import-btn");
        if (s) {
          if ("imported" === s.dataset.state) return;
          return void(s.innerHTML !== o && setSafeInnerHTML(s, o))
        }
        const r = document.createElement("button");
        r.className = "mp-gist-import-btn btn btn-sm", r.type = "button", setSafeInnerHTML(r, o), r.onclick = t => handleGistImportClick(t, e, a), t.prepend(r)
      })
    }

    function highlightPromptSnippetMeta() {
      document.querySelectorAll(".gist-snippet-meta").forEach(e => {
        if (e.classList.contains("mp-prompt-meta-highlight")) return;
        const t = e.querySelector("strong.css-truncate-target");
        if (t) {
          if (t.textContent.trim().toLowerCase().includes(".mp.prompt.")) {
            e.classList.add("mp-prompt-meta-highlight");
            const n = t.closest("a"),
              a = n ? n.getAttribute("href") : null;
            e.addEventListener("click", e => {
              e.target.closest("a, button, input, img") || window.getSelection().toString().trim().length > 0 || a && (window.location.href = a)
            })
          }
        }
      })
    }

    function initGistIntegration() {
      if ("gist.github.com" !== window.location.hostname) return;
      injectGistButtons(), injectGistExportEditorButtons(), highlightPromptSnippetMeta();
      let e = location.href;
      new MutationObserver(() => {
        location.href !== e && (e = location.href, setTimeout(() => {
          injectGistButtons(), injectGistExportEditorButtons(), highlightPromptSnippetMeta()
        }, 200)), injectGistButtons(), injectGistExportEditorButtons(), highlightPromptSnippetMeta()
      }).observe(document.body, {
        subtree: true,
        childList: true
      })
    }

    function cleanup() {
      SyntaxHighlighter.detach(), currentButton && (currentButton._mpFloatDetach && currentButton._mpFloatDetach(), currentButton.remove(), currentButton = null), currentMenu && (currentMenu.remove(), currentMenu = null), currentModal && (currentModal.remove(), currentModal = null), currentPlaceholderModal && (currentPlaceholderModal.remove(), currentPlaceholderModal = null), isInitialized = false
    }
    initGistIntegration();
    const floatingUpgrade = {
      active: false,
      tries: 0,
      last: 0,
      timer: null
    };

    function scheduleFloatingUpgradeCheck() {
      floatingUpgrade.timer && clearTimeout(floatingUpgrade.timer), floatingUpgrade.timer = setTimeout(() => {
        floatingUpgrade.timer = null, floatingUpgrade.active && tryInit()
      }, 2600)
    }

    const slotUpgrade = {
      active: false,
      tries: 0,
      last: 0,
      timer: null,
      max: 6
    };

    function armSlotUpgrade() {
      slotUpgrade.active = true, slotUpgrade.last = Date.now(), slotUpgrade.timer && clearTimeout(slotUpgrade.timer), slotUpgrade.timer = setTimeout(() => {
        slotUpgrade.timer = null, slotUpgrade.active && tryInit()
      }, 2400)
    }

    function disarmSlotUpgrade() {
      slotUpgrade.active = false, slotUpgrade.tries = 0, slotUpgrade.timer && (clearTimeout(slotUpgrade.timer), slotUpgrade.timer = null)
    }

    function safeQuery(selector, root) {
      try {
        return (root || document).querySelector(selector)
      } catch (err) {
        return null
      }
    }

    function firstMatchIn(selectors, root) {
      for (let i = 0; i < selectors.length; i++) {
        const el = safeQuery(selectors[i], root);
        if (el && el.isConnected) return el
      }
      return null
    }

    function isVisibleEl(el) {
      if (!el || !el.isConnected) return false;
      const rect = el.getBoundingClientRect();
      if (0 === rect.width || 0 === rect.height) return false;
      const style = window.getComputedStyle(el);
      return "none" !== style.display && "hidden" !== style.visibility
    }

    const EDITOR_FALLBACK_SELECTORS = ['div.ProseMirror[contenteditable="true"]', 'div[data-slate-editor="true"][contenteditable="true"]', '[contenteditable="true"][role="textbox"]', 'div[contenteditable="true"]', "textarea"];

    function isEditableEl(el) {
      if (!el || !el.isConnected) return false;
      if ("TEXTAREA" === el.tagName || "INPUT" === el.tagName) return !el.disabled && !el.readOnly;
      if ("boolean" == typeof el.isContentEditable) return el.isContentEditable;
      const attr = el.getAttribute ? el.getAttribute("contenteditable") : null;
      return null != attr && "false" !== String(attr).toLowerCase()
    }

    function readEditorText(el) {
      if (!el) return "";
      return "TEXTAREA" === el.tagName || "INPUT" === el.tagName ? el.value || "" : el.innerText || el.textContent || ""
    }

    function getEditorPlainText(el) {
      if (!el) return "";
      if ("TEXTAREA" === el.tagName || "INPUT" === el.tagName) return (el.value || "").replace(/[\s\u200B-\u200D\u00A0\uFEFF]/g, "");
      try {
        const clone = el.cloneNode(true);
        Array.prototype.forEach.call(clone.querySelectorAll('[data-slate-placeholder], [data-placeholder], [class*="placeholder"], [contenteditable="false"]'), n => {
          n.parentNode && n.parentNode.removeChild(n)
        });
        return (clone.textContent || "").replace(/[\s\u200B-\u200D\u00A0\uFEFF]/g, "")
      } catch (err) {
        return (el.textContent || "").replace(/[\s\u200B-\u200D\u00A0\uFEFF]/g, "")
      }
    }

    function resolveEditor() {
      const raw = platformSelectors[currentPlatform] || "",
        list = String(raw).split(",").map(s => s.trim()).filter(Boolean),
        all = list.concat(EDITOR_FALLBACK_SELECTORS);
      for (let i = 0; i < all.length; i++) {
        const el = safeQuery(all[i]);
        if (!isEditableEl(el)) continue;
        if (i < list.length) return el;
        if (isVisibleEl(el)) return el
      }
      let send = null;
      try {
        send = getSendButton()
      } catch (err) {
        send = null
      }
      let node = send;
      for (let up = 0; up < 6 && node && node.parentElement; up++) {
        node = node.parentElement;
        const els = Array.from(node.querySelectorAll('div[contenteditable="true"], [contenteditable="true"], textarea')).filter(isEditableEl).filter(isVisibleEl);
        if (els.length) return els[0]
      }
      return null
    }

    function setEditorHTMLByLines(el, text) {
      el.innerHTML = "";
      text.split("\n").forEach(line => {
        const p = document.createElement("p");
        "" === line.trim() ? p.appendChild(document.createElement("br")) : p.textContent = line, el.appendChild(p)
      })
    }

    const FRAMEWORK_EDITOR_MARKERS = [".ProseMirror", "[data-slate-editor]", "[data-lexical-editor]", ".ql-editor", "[data-contents]", ".tiptap"];

    function isFrameworkEditor(el) {
      if (!el || !el.closest) return false;
      try {
        for (let i = 0; i < FRAMEWORK_EDITOR_MARKERS.length; i++)
          if (el.closest(FRAMEWORK_EDITOR_MARKERS[i])) return true;
        const keys = Object.keys(el);
        for (let i = 0; i < keys.length; i++)
          if (0 === keys[i].indexOf("__react")) return true
      } catch (err) {}
      return false
    }

    function isCaretInside(el) {
      try {
        const sel = window.getSelection();
        if (!sel || 0 === sel.rangeCount) return false;
        const node = sel.anchorNode;
        return !!(node && el.contains(node))
      } catch (err) {
        return false
      }
    }

    function isSlateEditor(el) {
      return !!(el && el.closest && el.closest("[data-slate-editor]"))
    }

    function getEditableTextNodes(el) {
      const out = [];
      const slate = isSlateEditor(el);
      try {
        const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
          acceptNode(n) {
            const p = n.parentElement;
            const bad = p && p.closest('[data-slate-placeholder], [contenteditable="false"]');
            if (bad && el.contains(bad) && bad !== el) return NodeFilter.FILTER_REJECT;
            if (slate) {
              const leaf = p && p.closest("[data-slate-node]");
              if (!leaf || !el.contains(leaf)) return NodeFilter.FILTER_REJECT
            }
            return NodeFilter.FILTER_ACCEPT
          }
        });
        let n;
        while ((n = walker.nextNode())) out.push(n)
      } catch (err) {}
      return out
    }

    function placeCaretInSlateNode(el, toStart) {
      try {
        const list = el.querySelectorAll('[data-slate-node="text"], [data-slate-node]');
        if (!list.length) return false;
        const node = toStart ? list[0] : list[list.length - 1];
        const sel = window.getSelection();
        if (!sel) return false;
        const r = document.createRange();
        r.setStart(node, 0), r.collapse(true), sel.removeAllRanges(), sel.addRange(r);
        return true
      } catch (err) {
        return false
      }
    }

    function removeForeignParagraphs(el) {
      if (!el || !isSlateEditor(el)) return;
      let removed = false;
      try {
        for (const child of Array.from(el.children)) {
          if (child.hasAttribute("data-slate-node")) continue;
          if (child.hasAttribute("data-slate-placeholder") || child.hasAttribute("data-slate-zero-width")) continue;
          if (child.querySelector("[data-slate-node]")) continue;
          child.remove(), removed = true
        }
      } catch (err) {}
      return removed
    }

    function placeCaretInsideLeaf(el, toStart) {
      const nodes = getEditableTextNodes(el);
      if (!nodes.length) return isSlateEditor(el) ? placeCaretInSlateNode(el, toStart) : false;
      try {
        const node = toStart ? nodes[0] : nodes[nodes.length - 1];
        const isZeroWidth = !!(node.parentElement && node.parentElement.closest("[data-slate-zero-width]"));
        const offset = toStart || isZeroWidth ? 0 : node.length;
        const sel = window.getSelection();
        if (!sel) return false;
        const r = document.createRange();
        r.setStart(node, offset), r.collapse(true), sel.removeAllRanges(), sel.addRange(r);
        return true
      } catch (err) {
        return false
      }
    }

    function selectAllInside(el) {
      const nodes = getEditableTextNodes(el);
      if (!nodes.length) return false;
      try {
        const sel = window.getSelection();
        if (!sel) return false;
        const r = document.createRange();
        r.setStart(nodes[0], 0), r.setEnd(nodes[nodes.length - 1], nodes[nodes.length - 1].length), sel.removeAllRanges(), sel.addRange(r);
        return true
      } catch (err) {
        return false
      }
    }

    let composingEl = null;
    document.addEventListener("compositionstart", e => {
      composingEl = e.target
    }, true), document.addEventListener("compositionend", () => {
      composingEl = null
    }, true);

    function isComposingIn(el) {
      return !!composingEl && !!el && (composingEl === el || (el.contains && el.contains(composingEl)))
    }
    function afterCompose(el, fn) {
      if (!isComposingIn(el)) return void fn();
      let done = false;
      const run = () => {
        done || (done = true, document.removeEventListener("compositionend", run, true), setTimeout(fn, 60))
      };
      document.addEventListener("compositionend", run, true), setTimeout(run, 1000)
    }

    function isSlateEditorInstance(v) {
      return !!(v && Array.isArray(v.children) && "function" == typeof v.insertText && "function" == typeof v.isInline)
    }

    function findSlateEditor(el) {
      if (!el || !el.getAttribute || !el.hasAttribute("data-slate-editor")) return null;
      try {
        const k = Object.getOwnPropertyNames(el).find(k => 0 === k.indexOf("__reactFiber$") || 0 === k.indexOf("__reactInternalInstance$"));
        if (!k) return null;
        let fiber = el[k];
        for (let d = 0; d < 40 && fiber; d++) {
          let h = fiber.memoizedState;
          for (let j = 0; j < 25 && h; j++) {
            let v = h.memoizedState;
            for (let t = 0; t < 3 && v; t++) {
              if (isSlateEditorInstance(v)) return v;
              v = Array.isArray(v) ? v[0] : v && (v.editor || v.current) || null;
            }
            h = h.next
          }
          fiber = fiber.return
        }
      } catch (err) {}
      return null
    }

    function writeViaSlateApi(el, text) {
      removeForeignParagraphs(el);
      const ed = findSlateEditor(el);
      if (!ed) return false;
      try {
        if (!ed.selection) return false;
        const lines = String(text).split("\n");
        for (let i = 0; i < lines.length; i++) {
          if (i > 0) ed.insertBreak();
          if (lines[i]) ed.insertText(lines[i])
        }
        return true
      } catch (err) {
        return false
      }
    }

    function writeToSlate(el, text) {
      removeForeignParagraphs(el);
      el.focus(), placeCaretInsideLeaf(el, false);
      document.dispatchEvent(new Event("selectionchange"));
      try {
        const dt = new DataTransfer;
        dt.setData("text/plain", text), el.dispatchEvent(new InputEvent("beforeinput", {
          bubbles: true,
          cancelable: true,
          composed: true,
          inputType: "insertFromPaste",
          dataTransfer: dt
        }))
      } catch (err) {}
    }

    function restoreEditorCaret(el) {
      if (!el || !el.isConnected) return false;
      if (isComposingIn(el)) return false;
      try {
        el.focus();
        if ("TEXTAREA" === el.tagName || "INPUT" === el.tagName) {
          const end = (el.value || "").length;
          el.setSelectionRange ? el.setSelectionRange(end, end) : (el.selectionStart = el.selectionEnd = end);
          return true
        }
        if (isSlateEditor(el) && placeCaretInsideLeaf(el, false)) {
          document.dispatchEvent(new Event("selectionchange"));
          return true
        }
        if (isFrameworkEditor(el)) return false;
        const sel = window.getSelection();
        if (!sel) return false;
        const range = document.createRange();
        range.selectNodeContents(el), range.collapse(false), sel.removeAllRanges(), sel.addRange(range), document.dispatchEvent(new Event("selectionchange"));
        return true
      } catch (err) {
        return false
      }
    }

    function ensureEditorWritten(el, text) {
      if (!el || !text) return;
      const probe = String(text).replace(/\s+/g, " ").trim().slice(0, 40);
      if (!probe) return;
      const read = () => readEditorText(el).replace(/\s+/g, " ");
      const settle = () => {
        if (isCaretInside(el)) return;
        restoreEditorCaret(el);
        setTimeout(() => {
          el.isConnected && !isCaretInside(el) && placeCaretInsideLeaf(el, false)
        }, 260)
      };
      let attempt = 0;
      const waitProbe = (ms, next) => {
        const t0 = Date.now();
        const iv = setInterval(() => {
          if (!el.isConnected) { clearInterval(iv); return }
          if (read().includes(probe)) { clearInterval(iv); settle() }
          else if (Date.now() - t0 >= ms) { clearInterval(iv); next() }
        }, 120)
      };
      const step = () => {
        if (!el.isConnected) return;
        if (read().includes(probe)) return void settle();
        attempt++;
        if (1 === attempt) {
          try {
            if (isSlateEditor(el)) {
              writeViaSlateApi(el, text) || writeToSlate(el, text);
              waitProbe(1100, step)
            } else {
              restoreEditorCaret(el);
              document.execCommand("insertText", false, text) ? waitProbe(1100, step) : step()
            }
          } catch (err) { waitProbe(1100, step) }
        } else if (2 === attempt) {
          try {
            if (isFrameworkEditor(el)) {
              writeToSlate(el, text)
            } else {
              restoreEditorCaret(el), el.dispatchEvent(new InputEvent("beforeinput", {
                bubbles: true,
                cancelable: true,
                inputType: "insertText",
                data: text
              }))
            }
          } catch (err) {}
          waitProbe(1100, step)
        } else if (3 === attempt) {
          try {
            restoreEditorCaret(el), el.dispatchEvent(new InputEvent("beforeinput", {
              bubbles: true,
              cancelable: true,
              inputType: "insertText",
              data: text
            }))
          } catch (err) {}
          waitProbe(1100, step)
        } else if (4 === attempt) {
          if (isFrameworkEditor(el)) {
            console.warn("[Prompt Manager] 主插入方式未生效；该编辑器由框架托管，为避免其进入不可输入状态，已跳过 DOM 兜底。platform=" + currentPlatform), settle();
            return
          }
          try {
            if ("TEXTAREA" === el.tagName || el.tagName === "INPUT") {
              const setter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
              setter ? setter.call(el, text) : el.value = text, el.dispatchEvent(new Event("input", {
                bubbles: true,
                composed: true
              }))
            } else setEditorHTMLByLines(el, text), el.dispatchEvent(new Event("input", {
              bubbles: true,
              composed: true
            }));
            console.warn("[Prompt Manager] 主插入方式未生效，已启用 DOM 兜底写入。platform=" + currentPlatform)
          } catch (err) {
            console.warn("[Prompt Manager] 兜底写入失败:", err)
          }
          waitProbe(1100, step)
        } else settle()
      };
      afterCompose(el, () => setTimeout(step, 300))
    }

    function resolveToolbarSlot(anchor) {
      if (!anchor || !anchor.parentElement) return null;
      return {
        container: anchor.parentElement,
        ref: anchor
      }
    }

    function topChildOf(el, container) {
      if (!el || !container) return null;
      let top = el;
      while (top.parentElement && top.parentElement !== container) top = top.parentElement;
      return top.parentElement === container ? top : null
    }

    function resolveSlotBeside(seed, scoreEl, maxDepth) {
      if (!seed || !seed.parentElement) return null;
      let top = seed;
      for (let d = 0; d < (maxDepth || 8) && top.parentElement; d++) {
        const row = top.parentElement,
          kids = row.children,
          idx = Array.prototype.indexOf.call(kids, top);
        if (idx >= 0) {
          for (let want = 2; want >= 1; want--) {
            for (let j = idx + 1; j < kids.length; j++) {
              if (!isOurButton(kids[j]) && scoreEl(kids[j]) >= want) return {
                container: row,
                ref: kids[j],
                after: false,
                left: top,
                right: kids[j]
              }
            }
            for (let j = idx - 1; j >= 0; j--) {
              if (!isOurButton(kids[j]) && scoreEl(kids[j]) >= want) return {
                container: row,
                ref: top,
                after: false,
                left: kids[j],
                right: top
              }
            }
          }
        }
        top = row
      }
      return null
    }

    function resolveBetweenSlot(leftEl, rightEl) {
      if (!rightEl || !rightEl.parentElement || isOurButton(rightEl)) return null;
      const container = rightEl.parentElement,
        leftTop = topChildOf(leftEl, container);
      if (!leftTop || leftTop === rightEl) return {
        container: container,
        ref: rightEl,
        after: false
      };
      let node = leftTop.nextElementSibling;
      while (node && node !== rightEl) node = node.nextElementSibling;
      return node === rightEl ? {
        container: container,
        ref: rightEl,
        after: false
      } : {
        container: container,
        ref: leftTop,
        after: true
      }
    }

    const PROMPT_BUTTON_DEFAULT_MARGIN = "0 2px";

    const RIGHT_GROUP_GAP = 12;

    function findComposerGroup(seedSelectors, containerSelectors) {
      const seeds = [].concat(seedSelectors || []),
        containers = [].concat(containerSelectors || []);
      let loose = null;
      for (let i = 0; i < seeds.length; i++) {
        let seed = null;
        try {
          seed = safeQuery(seeds[i])
        } catch (err) {
          seed = null
        }
        if (!seed || !seed.isConnected) continue;
        for (let j = 0; j < containers.length; j++) {
          const hit = seed.closest ? seed.closest(containers[j]) : null;
          if (!hit || !hit.isConnected || isOurButton(hit)) continue;
          if (hit.querySelectorAll('button, [role="button"]').length <= 10) return hit;
          null === loose && (loose = hit)
        }
      }
      return loose
    }

    const ZERO_FOOTPRINT_GAP = 4,
      ZERO_FOOTPRINT_SIZE = 36;

    const YUANBAO_TOOLBAR_GAP = RIGHT_GROUP_GAP;

    const CLAUDE_INLINE_GAP = 6,
      CLAUDE_SIDE_GAP = 8,
      INLINE_GAP_TIGHTEN_MAX = 8;

    function pinButtonBesideAnchor(wrapper, container, ref, gap) {
      if (!container || !ref || !ref.isConnected) return false;
      const measure = () => {
        const c = container.getBoundingClientRect(),
          r = ref.getBoundingClientRect();
        if (0 === r.width && 0 === r.height) return null;
        return {
          left: r.left - c.left - container.clientLeft + container.scrollLeft - ZERO_FOOTPRINT_SIZE - gap,
          top: r.top - c.top - container.clientTop + container.scrollTop + (r.height - ZERO_FOOTPRINT_SIZE) / 2
        }
      };
      let patchedPosition = null,
        box = null;
      try {
        if ("static" === window.getComputedStyle(container).position) patchedPosition = container.style.position, container.style.position = "relative";
        box = measure()
      } catch (err) {
        return false
      }
      if (!box || box.left < 0) {
        null !== patchedPosition && (container.style.position = patchedPosition);
        return false
      }
      wrapper.style.position = "absolute", wrapper.style.width = ZERO_FOOTPRINT_SIZE + "px", wrapper.style.height = ZERO_FOOTPRINT_SIZE + "px", wrapper.style.margin = "0", wrapper.style.left = box.left + "px", wrapper.style.top = box.top + "px";
      const pill = wrapper.firstElementChild;
      pill && (pill.style.right = "0");
      const place = () => {
        if (!ref.isConnected) return;
        const b = measure();
        b && (wrapper.style.left = b.left + "px", wrapper.style.top = b.top + "px")
      };
      let observer = null;
      try {
        observer = new ResizeObserver(place), observer.observe(container)
      } catch (err) {}
      window.addEventListener("resize", place, true), wrapper._mpFloatDetach = () => {
        window.removeEventListener("resize", place, true), observer && observer.disconnect(), null !== patchedPosition && (container.style.position = patchedPosition)
      };
      return true
    }

    function placePromptButton(container, ref, dir, after, compact, gap) {
      if (!container) return null;
      const existing = container.querySelector('[data-testid="composer-button-prompts"]'),
        existingWrapper = existing && (existing.closest(".mp-prompt-wrapper") || existing);
                  if (existingWrapper && existingWrapper.parentElement === container) return existingWrapper;
      const wrapper = existingWrapper || createPromptButton(dir || "left");
      if (existingWrapper) {
        existingWrapper._mpFloatDetach && (existingWrapper._mpFloatDetach(), existingWrapper._mpFloatDetach = null);
        const st = existingWrapper.style;
        st.position = "", st.left = "", st.top = "", st.width = "", st.minWidth = "", st.height = "", st.margin = ""
      }
      const pinned = !!compact && !!ref && pinButtonBesideAnchor(wrapper, container, ref, "number" == typeof gap ? gap : ZERO_FOOTPRINT_GAP);
      pinned || (compact ? (wrapper.style.flexShrink = "0", wrapper.style.width = "0", wrapper.style.minWidth = "0", wrapper.style.margin = "0") : (wrapper.style.flexShrink = "0", wrapper.style.margin = PROMPT_BUTTON_DEFAULT_MARGIN));
      return ref && ref.parentElement === container ? after ? container.insertBefore(wrapper, ref.nextSibling) : container.insertBefore(wrapper, ref) : ref && ref.nextSibling ? container.insertBefore(wrapper, ref.nextSibling) : container.appendChild(wrapper), wrapper
    }

    function isNearEditor(target, editorEl) {
      if (!target || !editorEl) return true;
      let node = editorEl;
      for (let depth = 0; depth < 10 && node; depth++) {
        if (node.contains(target)) return true;
        node = node.parentElement
      }
      return false
    }

    function isOurButton(el) {
      if (!el || !el.classList) return false;
      return el.classList.contains("mp-prompt-wrapper") || !!(el.querySelector && el.querySelector('[data-testid="composer-button-prompts"]'))
    }

    function isControlLike(el) {
      if (!el || !el.matches) return false;
      if (el.matches('button, a, [role="button"], [role="link"], [class*="btn"], [class*="Btn"]')) return true;
      return !!(el.querySelector && el.querySelector('button, a, [role="button"], svg, [class*="icon"]'))
    }

    function matchNeighborHeight(wrapper, sizeRefEl, fallback) {
      if (!wrapper) return 0;
      let h = 0;
      try {
        const r = sizeRefEl && sizeRefEl.getBoundingClientRect ? sizeRefEl.getBoundingClientRect() : null;
        r && r.height > 0 && (h = Math.round(r.height))
      } catch (err) {
        h = 0
      }
      (!h || h < 20 || h > 48) && (h = fallback || ZERO_FOOTPRINT_SIZE);
      wrapper.style.height = h + "px";
      const pill = wrapper.querySelector(".mp-sliding-pill-container") || wrapper.firstElementChild;
      pill && (pill.style.height = h + "px");
      const inner = Math.max(16, h - 2);
      wrapper.querySelectorAll(".mp-btn-part").forEach(b => {
        b.style.height = inner + "px"
      });
      return h
    }

    function clearInlineSize(wrapper) {
      if (!wrapper) return;
      wrapper.style.height = "";
      const pill = wrapper.querySelector(".mp-sliding-pill-container") || wrapper.firstElementChild;
      pill && (pill.style.height = "");
      wrapper.querySelectorAll(".mp-btn-part").forEach(b => {
        b.style.height = ""
      });
    }

    function applyButtonTransform(wrapper) {
      if (!wrapper) return "";
      const scale = wrapper._mpScale && Math.abs(wrapper._mpScale - 1) > 1e-3 ? "scale(" + wrapper._mpScale.toFixed(4) + ")" : "",
        shift = wrapper._mpShiftY ? "translateY(" + Math.round(wrapper._mpShiftY) + "px)" : "",
        value = [shift, scale].filter(Boolean).join(" ");
      wrapper.style.transform = value;
      return value
    }

    function resetButtonVisual(wrapper) {
      if (!wrapper) return;
      wrapper._mpScale = 1;
      wrapper._mpShiftY = 0;
      wrapper.style.transform = "";
      wrapper.style.transformOrigin = "";
      wrapper.style.alignSelf = "";
      wrapper.style.verticalAlign = "";
      clearInlineSize(wrapper);
    }

    function alignCenterWith(wrapper, refEl) {
      if (!wrapper) return 0;
      wrapper.style.alignSelf = "center";
      wrapper.style.verticalAlign = "middle";
      let a = null, b = null;
      try {
        a = wrapper.getBoundingClientRect();
        b = refEl && refEl.getBoundingClientRect ? refEl.getBoundingClientRect() : null
      } catch (err) {
        a = b = null
      }
      if (!a || !b || !a.height || !b.height) return 0;
      const delta = (b.top + b.height / 2) - (a.top + a.height / 2);
      if (!isFinite(delta) || Math.abs(delta) > 24) return 0;
      if (Math.abs(delta) < 1) {
        wrapper._mpShiftY = 0;
        applyButtonTransform(wrapper);
        return 0
      }
      wrapper._mpShiftY = Math.round(delta);
      applyButtonTransform(wrapper);
      return wrapper._mpShiftY
    }

    function preventClipping(wrapper, refEl) {
      if (!wrapper) return false;
      let el = wrapper.parentElement, clipper = null;
      for (let up = 0; el && up < 8; up++) {
        let ov = "";
        try {
          const cs = window.getComputedStyle(el);
          ov = (cs.overflow || "") + " " + (cs.overflowY || "")
        } catch (err) {
          ov = ""
        }
        if (/hidden|clip|auto|scroll/.test(ov)) {
          clipper = el;
          break
        }
        el = el.parentElement
      }
      if (!clipper) return false;
      let b = null, c = null;
      try {
        b = wrapper.getBoundingClientRect();
        c = clipper.getBoundingClientRect()
      } catch (err) {
        return false
      }
      if (!b.height || !c.height) return false;
      const overTop = Math.max(0, c.top - b.top),
        overBottom = Math.max(0, b.bottom - c.bottom);
      if (overTop + overBottom < 1) return false;
      const fit = Math.floor(b.height - overTop - overBottom);
      if (fit < 24) return false;
      matchNeighborHeight(wrapper, {
        getBoundingClientRect: () => ({
          height: fit
        })
      }, fit);
      alignCenterWith(wrapper, refEl);
      return true
    }

    function columnGapPx(el) {
      if (!el || !window.getComputedStyle) return 0;
      try {
        const cs = window.getComputedStyle(el);
        const raw = cs.columnGap && "normal" !== cs.columnGap ? cs.columnGap : cs.gap;
        const v = parseFloat(raw);
        return isFinite(v) ? v : 0
      } catch (err) {
        return 0
      }
    }

    function tightenInlineGap(wrapper, want) {
      if (!wrapper || !wrapper.parentElement) return 0;
      const gap = columnGapPx(wrapper.parentElement),
        shrink = Math.round(gap - want);
      if (!(shrink > 0)) return 0;
      const px = "-" + Math.min(shrink, INLINE_GAP_TIGHTEN_MAX) + "px";
      wrapper.style.marginLeft = px, wrapper.style.marginRight = px;
      return shrink
    }

    function findPreviousControl(target) {
      if (!target) return null;
      let node = target;
      for (let up = 0; up < 3 && node; up++) {
        let prev = node.previousElementSibling;
        while (prev) {
          if (isControlLike(prev) && !isOurButton(prev)) return prev;
          prev = prev.previousElementSibling
        }
        node = node.parentElement
      }
      return null
    }

    function findComposerControl(editorEl) {
      if (!editorEl || !editorEl.isConnected) return null;
      let node = editorEl,
        scope = null;
      for (let depth = 0; depth < 8 && node && node.parentElement; depth++) {
        node = node.parentElement;
        const count = node.querySelectorAll('button, [role="button"]').length;
        if (count >= 1 && count <= 24) {
          scope = node;
          break
        }
      }
      if (!scope) return null;
      const controls = Array.from(scope.querySelectorAll('button, [role="button"]')).filter(isVisibleEl).filter(el => {
        const rect = el.getBoundingClientRect();
        return rect.width <= 96 && rect.height <= 96
      });
      if (0 === controls.length) return null;
      const sendPattern = /send|submit|发送|提交|生成/i;
      return controls.find(el => "submit" === el.getAttribute("type")) || controls.find(el => sendPattern.test([el.getAttribute("aria-label"), el.getAttribute("title"), el.dataset && el.dataset.testid, el.className].filter(Boolean).join(" "))) || controls[controls.length - 1]
    }

    function attachFloatingPromptButton(anchorEl, dir) {
      if (!anchorEl || !anchorEl.isConnected) return null;
      const wrapper = createPromptButton(dir || "left");
      wrapper.style.position = "fixed", wrapper.style.zIndex = "2147483000", wrapper.style.pointerEvents = "auto", wrapper.style.margin = "0";
      document.body.appendChild(wrapper);
      let idleTimer = null;
      const reposition = () => {
          if (!wrapper.isConnected || !anchorEl.isConnected) return;
          const rect = anchorEl.getBoundingClientRect();
          if (0 === rect.width && 0 === rect.height) return;
          const SIZE = 36,
            GAP = 8,
            isControl = rect.width <= 96 && rect.height <= 96;
          let left, top;
          isControl ? (left = rect.left - SIZE - GAP, top = rect.top + (rect.height - SIZE) / 2) : (left = rect.left + 12, top = rect.bottom - SIZE - 12), left = Math.max(4, Math.min(left, window.innerWidth - SIZE - 4)), top = Math.max(4, top), wrapper.style.left = left + "px", wrapper.style.top = top + "px"
        },
        observer = new ResizeObserver(reposition),
        detach = () => {
          window.removeEventListener("resize", reposition, true), window.removeEventListener("scroll", reposition, true), clearInterval(idleTimer), observer.disconnect(), wrapper._mpFloatDetach = null
        };
      try {
        observer.observe(anchorEl)
      } catch (err) {}
      let idle = 0;
      idleTimer = setInterval(() => {
        wrapper.isConnected && anchorEl.isConnected ? (idle = 0, reposition()) : 3 <= ++idle && detach()
      }, 800), window.addEventListener("resize", reposition, true), window.addEventListener("scroll", reposition, true), wrapper._mpFloatDetach = detach, reposition();
      return wrapper
    }

    function readPromptForm() {
        const box = currentModal.querySelector('.mp-modal-box');
        return {
            promptId: currentModal.dataset.promptId,
            title: document.getElementById('__ap_title').value.trim(),
            text: document.getElementById('__ap_text').value.trim(),
            usePlaceholders: document.getElementById('__ap_use_placeholders').checked,
            autoExecute: document.getElementById('__ap_auto_execute').checked,
            activeFileIds: Array.from(currentActiveFileIds),
            tags: box && box.getCurrentTags ? box.getCurrentTags() : []
        };
    }

    async function initUI() {
        if (pageObserver) pageObserver.disconnect();
        cleanup();
        currentPlatform = detectPlatform();
        if (!currentPlatform) return;
        try {
            let btn, elementToInsert, insertionPoint, insertionMethod = 'before';
            if (currentPlatform === 'chatgpt') {
                const editor = () => safeQuery(platformSelectors.chatgpt);
                const GPT_DICTATE_SEEDS = [
                    'button[aria-label="听写"]', 'button[aria-label="Dictate"]',
                    'button[aria-label="开始语音"]', 'button[aria-label="Start voice"]',
                    'button[aria-label*="语音"]', 'button[aria-label*="Voice"]', 'button[aria-label*="voice"]',
                    'button[type="submit"][aria-label="发送"]', 'button[aria-label="发送"]',
                    '[data-testid="composer-submit-button"]', '#composer-submit-button',
                    '[data-testid="send-button"]', 'button[aria-label*="Send"]'
                ];
                const GPT_THINK_SEEDS = [
                    'div.flex.min-w-0.flex-1.justify-end',
                    'div[class*="flex-1"][class*="justify-end"]'
                ];
                const GPT_THINK_SELECTOR = 'div.flex.min-w-0.flex-1.justify-end, div.min-w-0.flex-1.justify-end, div[class*="flex-1"][class*="justify-end"]';
                const scoreThinkGroup = el => {
                    if (!el || !el.matches || isOurButton(el)) return 0;
                    if (!el.querySelector('button')) return 0;
                    if (el.contains(editor())) return 0;
                    if (el.matches(GPT_THINK_SELECTOR)) return 2;
                    return el.querySelector(GPT_THINK_SELECTOR) && el.querySelectorAll('button').length <= 6 ? 1 : 0
                };
                const findThinkGroup = () => {
                    const editorEl = editor();
                    for (let i = 0; i < GPT_THINK_SEEDS.length; i++) {
                        const hits = document.querySelectorAll(GPT_THINK_SEEDS[i]);
                        for (let j = 0; j < hits.length; j++) {
                            const el = hits[j];
                            if (!el || !el.isConnected || isOurButton(el)) continue;
                            if (!el.querySelector('button')) continue;
                            if (!isNearEditor(el, editorEl)) continue;
                            return el
                        }
                    }
                    return null
                };
                const findBetween = () => {
                    const seed = firstMatchIn(GPT_DICTATE_SEEDS);
                    return resolveSlotBeside(seed, scoreThinkGroup, 8) || resolveBetweenSlot(seed, findThinkGroup())
                };
                const findAnchor = () => {
                    const group = findComposerGroup(GPT_DICTATE_SEEDS, ['div.flex.shrink-0.items-center']);
                    if (group) return { element: group, dir: 'left', compact: true, gap: RIGHT_GROUP_GAP };
                    const plus = firstMatchIn([
                        '#composer-plus-btn',
                        '[data-testid="composer-plus-btn"]',
                        'button[data-testid="composer-plus-btn"]',
                        '[data-testid="composer-attach-button"]',
                        'button[aria-label*="Add files"]',
                        'button[aria-label*="Attach"]',
                        'button[aria-label*="添加"]',
                        'button[aria-label*="附件"]'
                    ]);
                    if (plus) return { element: plus, dir: 'right', after: true };
                    const send = firstMatchIn([
                        '[data-testid="composer-submit-button"]',
                        '#composer-submit-button',
                        '[data-testid="send-button"]',
                        '[data-testid="composer-send-button"]',
                        'button.composer-submit-btn',
                        'button[aria-label*="Send"]',
                        'button[aria-label*="发送"]'
                    ]);
                    if (send) return { element: send, dir: 'left' };
                    const generic = findComposerControl(editor());
                    return generic ? { element: generic, dir: 'left' } : null;
                };
                let betweenSlot = null,
                    anchorData = null;
                for (let attempt = 0; attempt < 6 && !betweenSlot && !anchorData; attempt++) {
                    if (attempt > 0) await new Promise(r => setTimeout(r, 200 + 130 * attempt));
                    betweenSlot = findBetween();
                    betweenSlot || (anchorData = findAnchor());
                }
                const slot = betweenSlot || (anchorData ? resolveToolbarSlot(anchorData.element) : null);
                if (betweenSlot) {
                    btn = placePromptButton(betweenSlot.container, betweenSlot.ref, 'left', betweenSlot.after, false);
                    btn && (btn.style.alignSelf = 'center');
                    elementToInsert = btn;
                    insertionPoint = betweenSlot.container;
                    disarmSlotUpgrade();
                    floatingUpgrade.active = false, floatingUpgrade.tries = 0, floatingUpgrade.timer && (clearTimeout(floatingUpgrade.timer), floatingUpgrade.timer = null);
                } else if (slot) {
                    btn = placePromptButton(slot.container, slot.ref, anchorData.dir, anchorData.after, anchorData.compact, anchorData.gap);
                    elementToInsert = btn;
                    insertionPoint = slot.container;
                    armSlotUpgrade();
                    floatingUpgrade.active = false, floatingUpgrade.tries = 0, floatingUpgrade.timer && (clearTimeout(floatingUpgrade.timer), floatingUpgrade.timer = null);
                } else {
                    btn = attachFloatingPromptButton(anchorData ? anchorData.element : editor(), 'left');
                    if (!btn) return;
                    elementToInsert = btn;
                    insertionPoint = btn.parentElement;
                    floatingUpgrade.active = true, floatingUpgrade.last = Date.now(), scheduleFloatingUpgradeCheck();
                }
                insertionMethod = 'handled_manually';
            }
            else if (currentPlatform === 'deepseek') {
                const findAnchor = () => {
                    const SEND_ICON_PATH = "M8.3125 0.980206";
                    const STOP_ICON_PATH = "M2 4.88C2";
                    const candidates = Array.from(document.querySelectorAll('div[role="button"]'));
                    const target = candidates.find(btn => {
                        const path = btn.querySelector('svg path');
                        if (!path) return false;
                        const d = path.getAttribute('d') || "";
                        return d.startsWith(SEND_ICON_PATH) || d.startsWith(STOP_ICON_PATH);
                    });
                    if (target) {
                        return { element: target, type: 'icon-fingerprint' };
                    }
                    return null;
                };
                let anchorData = findAnchor();
                if (!anchorData) {
                    await new Promise(r => setTimeout(r, 1500));
                    anchorData = findAnchor();
                }
                if (!anchorData) return;
                let targetWrapper = anchorData.element.parentElement;
                if (!targetWrapper) return;
                let container = targetWrapper.parentElement;
                if (!container) return;
                let existingBtn = container.querySelector('[data-testid="composer-button-prompts"]');
                if (existingBtn) {
                    btn = existingBtn;
                } else {
                    btn = createPromptButton('left');
                    btn.style.marginRight = "15px";
                    container.insertBefore(btn, targetWrapper);
                }
                elementToInsert = btn;
                insertionPoint = container;
                insertionMethod = 'handled_manually';
            }

            else if (currentPlatform === 'qwen') {
                const QWEN_SEND_SELECTOR = 'div.message-input-right-button-send, button[aria-label="发送"], button[aria-label="Send message"], button[aria-label="Send"], button[type="submit"]';
                const QWEN_THINK_SEEDS = [
                    '.qwen-thinking-selector',
                    '[class*="thinking-selector"]',
                    '.qwen-chat-v2-dropdown-menu-select',
                    '[class*="dropdown-menu-select"]'
                ];
                const findThink = () => firstMatchIn(QWEN_THINK_SEEDS);
                const findSend = () => {
                    const ANCHOR_FINGERPRINTS = ["qwpcicon-soundPlayingPCMedium","qwpcicon-sendChat","qwpcicon-stop-fill"];
                    const uses = Array.from(document.querySelectorAll('div.message-input-right-button-send svg use'));
                    for (const useEl of uses) {
                        const href = useEl.getAttribute('xlink:href') || useEl.getAttribute('href') || '';
                        if (ANCHOR_FINGERPRINTS.some(fp => href.includes(fp))) {
                            const hit = useEl.closest('div.message-input-right-button-send');
                            if (hit) return hit;
                        }
                    }
                    return firstMatchIn(QWEN_SEND_SELECTOR.split(', ')) ||
                        safeQuery('div.message-input-right-button-send');
                };
                const scoreSend = el => {
                    if (!el || !el.matches) return 0;
                    if (el.matches(QWEN_SEND_SELECTOR)) return 2;
                    return el.querySelector && el.querySelector(QWEN_SEND_SELECTOR) ? 1 : 0;
                };
                let think = findThink(), send = findSend();
                if (!send) {
                    await new Promise(r => setTimeout(r, 1500));
                    send = findSend();
                    think = think || findThink();
                }
                let container = null, ref = null, after = false;
                const slot = think && send ? resolveSlotBeside(think, scoreSend, 8) : null;
                if (slot) {
                    container = slot.container;
                    const thinkTop = topChildOf(think, container);
                    if (thinkTop) {
                        let node = thinkTop.nextElementSibling, sendBehind = false;
                        while (node) {
                            if (scoreSend(node) > 0) { sendBehind = true; break; }
                            node = node.nextElementSibling;
                        }
                        ref = thinkTop;
                        after = sendBehind;
                    }
                }
                if ((!container || !ref) && send && send.parentElement) {
                    container = send.parentElement;
                    ref = send;
                    after = false;
                }
                if (!container || !ref) return;
                slot ? disarmSlotUpgrade() : armSlotUpgrade();
                btn = container.querySelector('.mp-prompt-wrapper') ||
                    document.querySelector('.mp-prompt-wrapper');
                if (!btn) {
                    const existing = container.querySelector('[data-testid="composer-button-prompts"]') ||
                        document.querySelector('[data-testid="composer-button-prompts"]');
                    btn = existing && existing.closest ? existing.closest('.mp-prompt-wrapper') || existing : null;
                }
                if (!btn) {
                    btn = createPromptButton('left');
                    btn.style.flexShrink = '0';
                    btn.style.margin = "0 " + Math.max(0, 8 - columnGapPx(container)) + "px 0 0";
                }
                if (btn.parentElement !== container || btn !== (after ? ref.nextElementSibling : ref.previousElementSibling)) {
                    container.insertBefore(btn, after ? ref.nextElementSibling : ref);
                }
                resetButtonVisual(btn);
                preventClipping(btn, think || send);
                elementToInsert = btn;
                insertionPoint = container;
                insertionMethod = 'handled_manually';
            }
            else if (currentPlatform === 'zai') {
                const findAnchor = () => {
                    const SEND_ICON = "M7.99946 1.50005L2.29635 13.5283"; const STOP_SELECTOR = "button span.block.bg-white.size-3";
                    const sendBtn = document.getElementById('send-message-button');
                    if (sendBtn) return { element: sendBtn, type: 'id' };
                    const pathTarget = Array.from(document.querySelectorAll('button svg path'))
                        .find(p => p.getAttribute('d')?.startsWith(SEND_ICON));
                    if (pathTarget) return { element: pathTarget.closest('button'), type: 'fingerprint-send' };
                    const stopBtn = document.querySelector(STOP_SELECTOR)?.closest('button');
                    if (stopBtn) return { element: stopBtn, type: 'fingerprint-stop' };
                    return null;
                };
                let anchorData = findAnchor();
                if (!anchorData) {
                    await new Promise(r => setTimeout(r, 1500));
                    anchorData = findAnchor();
                }
                if (!anchorData) return;
                const container = anchorData.element.closest('div.flex.self-end');
                if (!container) return;
                let existingBtn = container.querySelector('[data-testid="composer-button-prompts"]');
                if (existingBtn) {
                    btn = existingBtn;
                } else {
                    btn = createPromptButton();
                    container.insertBefore(btn, container.firstChild);
                }
                elementToInsert = btn;
                insertionPoint = container;
                insertionMethod = 'handled_manually';
            }
            else if (currentPlatform === 'gemini') {
                const findAnchor = () => {
                    const micIcon = document.querySelector('mat-icon[data-mat-icon-name="mic"]');
                    if (micIcon) {
                        return { element: micIcon.closest('.input-buttons-wrapper-bottom'), type: 'mic-wrapper' };
                    }
                    const sendIcon = document.querySelector('mat-icon[data-mat-icon-name="send"]');
                    if (sendIcon) {
                        return { element: sendIcon.closest('.input-buttons-wrapper-bottom'), type: 'send-wrapper' };
                    }
                    return null;
                };
                let anchorData = findAnchor();
                if (!anchorData) {
                    await new Promise(r => setTimeout(r, 1500));
                    anchorData = findAnchor();
                }
                if (!anchorData) return;
                const bottomWrapper = anchorData.element;
                const container = bottomWrapper.parentElement;
                if (!container) return;
                let existingBtn = container.querySelector('[data-testid="composer-button-prompts"]');
                if (existingBtn) {
                    btn = existingBtn;
                } else {
                    btn = createPromptButton('left');
                    btn.style.marginLeft = '20px';
                    container.insertBefore(btn, bottomWrapper);
                }
                elementToInsert = btn;
                insertionPoint = container;
                insertionMethod = 'handled_manually';
            }
            else if (currentPlatform === 'arena') {
                const findAnchor = () => {
                    const ANCHOR_FINGERPRINT = "M3 12L21 12M21 12L12.5 3.5";
                    const candidates = Array.from(document.querySelectorAll('button[type="submit"], div[role="button"], button'));
                    const target = candidates.find(btn => {
                        const path = btn.querySelector('path');
                        const hasFingerprint = path && path.getAttribute('d')?.includes(ANCHOR_FINGERPRINT);
                        if (!hasFingerprint) return false;
                        const safeContainer = btn.closest('div.flex.items-center.gap-2');
                        return !!safeContainer;
                    });
                    if (target) return { element: target, type: 'svg-fingerprint' };
                    return null;
                };
                let anchorData = findAnchor();
                if (!anchorData) {
                    await new Promise(r => setTimeout(r, 1500));
                    anchorData = findAnchor();
                }
                if (!anchorData) return;
                const anchorElement = anchorData.element;
                const container = anchorElement.parentElement;
                if (!container) return;
                let existingBtn = container.querySelector('.custom-prompt-btn-class') || container.querySelector('[data-testid="composer-button-prompts"]');
                if (existingBtn) {
                    btn = existingBtn;
                } else {
                    btn = createPromptButton();
                    container.insertBefore(btn, anchorElement);
                }
                elementToInsert = btn;
                insertionPoint = container;
                insertionMethod = 'handled_manually';
            }
            else if (currentPlatform === 'kimi') {
                const findAnchor = () => {
                    const SEND_ICON_PATH = "M705.536 433.664a38.4 38.4 0 1 1-54.272 54.272L550.4"; const STOP_ICON_PATH = "M331.946667 379.904";
                    const candidates = Array.from(document.querySelectorAll('.send-button-container, .send-icon, svg'));
                    const targetIcon = candidates.find(el => {
                        const path = el.querySelector('path');
                        const d = path?.getAttribute('d');
                        return d && (d.startsWith(SEND_ICON_PATH) || d.startsWith(STOP_ICON_PATH));
                    });
                    const sendContainer = targetIcon?.closest('.send-button-container');
                    if (sendContainer) {
                        return { element: sendContainer, type: 'icon-fingerprint' };
                    }
                    return null;
                };
                let anchorData = findAnchor();
                if (!anchorData) {
                    await new Promise(r => setTimeout(r, 2000));
                    anchorData = findAnchor();
                }
                if (!anchorData) return;
                const container = anchorData.element.closest('.right-area') || anchorData.element.parentElement;
                if (!container) return;
                let existingBtn = container.querySelector('[data-testid="composer-button-prompts"]');
                if (existingBtn) {
                    btn = existingBtn;
                } else {
                    btn = createPromptButton();
                    container.insertBefore(btn, anchorData.element);
                }
                elementToInsert = btn;
                insertionPoint = container;
                insertionMethod = 'handled_manually';
            }
            else if (currentPlatform === 'claude') {
                const CLAUDE_GROUP_CONTAINERS = [
                    'div.grid.shrink-0.items-center.justify-items-end',
                    'div.grid[class*="justify-items-end"]'
                ];
                const CLAUDE_GROUP_SEEDS = [
                    '[data-testid="chat-input-send"]',
                    'button[aria-label="发送消息"]', 'button[aria-label="Send message"]',
                    'button[aria-label="语音输入"]', 'button[aria-label="Voice input"]',
                    '[data-cds-part="idle-slot"] button', '[data-cds-part="send-slot"] button',
                    '[data-testid="chat-input-attach"]', '[data-chorus-callout="attach"]'
                ];
                const findGroup = () => findComposerGroup(CLAUDE_GROUP_SEEDS, CLAUDE_GROUP_CONTAINERS);
                const hasAnySeed = () => CLAUDE_GROUP_SEEDS.some(sel => {
                    let el = null;
                    try {
                        el = safeQuery(sel)
                    } catch (err) {
                        el = null
                    }
                    return !!(el && el.isConnected)
                });
                let group = null;
                for (let attempt = 0; attempt < 5 && !group; attempt++) {
                    if (attempt > 0) await new Promise(r => setTimeout(r, 400));
                    group = findGroup();
                    if (!group && hasAnySeed()) break;
                }
                const CLAUDE_MODEL_SEEDS = [
                    '[data-chorus-callout="model-selector"]',
                    '[data-testid="model-selector-dropdown"]',
                    'button[data-cds="ModelSelector"]',
                    'button[aria-label^="模型"]', 'button[aria-label^="Model"]'
                ];
                const findBetween = () => {
                    if (!group || !group.parentElement) return null;
                    const row = group.parentElement;
                    const modelEl = firstMatchIn(CLAUDE_MODEL_SEEDS, row) || firstMatchIn(CLAUDE_MODEL_SEEDS);
                    const right = modelEl ? topChildOf(modelEl, row) : null;
                    if (right && right !== group) return { container: row, ref: right, after: false };
                    const next = group.nextElementSibling;
                    return next && !isOurButton(next) && next.querySelector('button') ? {
                        container: row,
                        ref: next,
                        after: false
                    } : null;
                };
                const betweenSlot = findBetween();
                const slot = betweenSlot ? null : group ? resolveToolbarSlot(group) : null;
                if (betweenSlot) {
                    btn = placePromptButton(betweenSlot.container, betweenSlot.ref, 'left', false, false);
                    btn && (btn.style.alignSelf = 'center');
                    tightenInlineGap(btn, CLAUDE_INLINE_GAP);
                    elementToInsert = btn;
                    insertionPoint = betweenSlot.container;
                    insertionMethod = 'handled_manually';
                } else if (slot) {
                    btn = placePromptButton(slot.container, slot.ref, 'left', false, true, CLAUDE_SIDE_GAP);
                    elementToInsert = btn;
                    insertionPoint = slot.container;
                    insertionMethod = 'handled_manually';
                } else {
                    const findAnchor = () => {
                        const testIdEl = document.querySelector('[data-testid="chat-input-attach"], [data-chorus-callout="attach"]');
                        if (testIdEl) return { element: testIdEl, type: 'testid' };
                        return null;
                    };
                    let anchorData = findAnchor();
                    if (!anchorData) {
                        await new Promise(r => setTimeout(r, 1500));
                        anchorData = findAnchor();
                    }
                    if (!anchorData) return;
                    let anchorWrapper = anchorData.element.parentElement;
                    let container = anchorWrapper?.parentElement;
                    if (!container) return;
                    let existingBtn = container.querySelector('[data-testid="composer-button-prompts"]');
                    if (existingBtn) {
                        btn = existingBtn;
                    } else {
                        btn = createPromptButton();
                        container.insertBefore(btn, anchorWrapper);
                    }
                    btn.style.alignSelf = 'center';
                    elementToInsert = btn;
                    insertionPoint = container;
                    insertionMethod = 'handled_manually';
                }
            }
            else if (currentPlatform === 'grok') {
                const SUBMIT_SVG = "M6 11L12 5M12 5L18 11M12 5V19";
                const findModelBtn = () => document.getElementById('model-select-trigger');
                let modelBtn = findModelBtn();
                if (!modelBtn) {
                    await new Promise(r => setTimeout(r, 1000));
                    modelBtn = findModelBtn();
                }
                let container = modelBtn?.closest('div.ms-auto');
                if (!container) {
                    const anySubmit = document.querySelector(`button[type="submit"] path[d^="${SUBMIT_SVG.slice(0, 10)}"]`)?.closest('button[type="submit"]');
                    if (anySubmit) {
                        container = anySubmit.closest('div.ms-auto') || anySubmit.parentElement?.parentElement;
                    }
                }
                if (!container) return;
                const findSubmitBtn = (root) => {
                    let btn = root.querySelector('[data-testid="chat-submit"]');
                    if (btn) return btn;
                    const submits = root.querySelectorAll('button[type="submit"]');
                    for (const b of submits) {
                        const path = b.querySelector('path');
                        if (path && path.getAttribute('d')?.startsWith(SUBMIT_SVG)) return b;
                    }
                    return root.querySelector('div.relative.z-10 > button[type="submit"]');
                };
                const findVoiceBtn = (root) => {
                    const btns = root.querySelectorAll('button[type="button"]');
                    for (const b of btns) {
                        if (b.querySelectorAll('div.w-0\\.5').length >= 4) return b;
                    }
                    return null;
                };
                const topChildOf = (el) => {
                    if (!el) return null;
                    let top = el;
                    while (top.parentElement && top.parentElement !== container) {
                        top = top.parentElement;
                    }
                    return top.parentElement === container ? top : null;
                };
                const findDictateBtn = () => firstMatchIn([
                    'button[aria-label^="听写"]', 'button[aria-label*="听写"]',
                    'button[aria-label*="Dictate"]', 'button[aria-label*="dictate"]',
                    'button[aria-label*="语音"]', 'button[aria-label*="Voice"]'
                ], container) || firstMatchIn([
                    'button[aria-label^="听写"]', 'button[aria-label*="听写"]',
                    'button[aria-label*="Dictate"]', 'button[aria-label*="dictate"]'
                ]);
                const getInsertBeforeEl = () => {
                    const dictateTop = topChildOf(findDictateBtn());
                    const modelTop = topChildOf(modelBtn);
                    if (dictateTop && modelTop && dictateTop !== modelTop) {
                        let node = dictateTop.nextElementSibling;
                        while (node && node !== modelTop) node = node.nextElementSibling;
                        return node === modelTop ? modelTop : dictateTop;
                    }
                    if (dictateTop && dictateTop.nextElementSibling) return dictateTop.nextElementSibling;
                    if (modelTop) return modelTop;
                    const candidates = [findSubmitBtn(container),findSubmitBtn(document),findVoiceBtn(container)].filter(Boolean);
                    for (const target of candidates) {
                        let top = target;
                        while (top.parentElement && top.parentElement !== container) {
                            top = top.parentElement;
                        }
                        if (top.parentElement === container) return top;
                        const wrapper = target.closest('div.relative.z-10') || target.closest('div[style*="opacity"]');
                        if (wrapper && wrapper.parentElement === container) return wrapper;
                    }
                    return container.lastElementChild;
                };
                const insertBeforeEl = getInsertBeforeEl();
                let wrapper = container.querySelector('.mp-prompt-wrapper');
                if (wrapper) {
                    btn = wrapper.querySelector('[data-testid="composer-button-prompts"]') || wrapper;
                    if (wrapper.parentElement !== container || (insertBeforeEl && wrapper !== insertBeforeEl && wrapper.nextElementSibling !== insertBeforeEl)) {
                        container.insertBefore(wrapper, insertBeforeEl);
                    }
                } else {
                    btn = createPromptButton('left');
                    wrapper = btn.classList.contains('mp-prompt-wrapper') ? btn : (() => {
                        const w = document.createElement('div');
                        w.className = 'mp-prompt-wrapper';
                        w.appendChild(btn);
                        return w;
                    })();
                    wrapper.style.marginBottom = '2px';
                    container.insertBefore(wrapper, insertBeforeEl);
                }
                elementToInsert = wrapper;
                insertionPoint = container;
                insertionMethod = 'handled_manually';
            }



            else if (currentPlatform === 'yuanbao') {
                const editor = () => safeQuery(platformSelectors.yuanbao);
                const findSendButton = () => firstMatchIn([
                    '#yuanbao-send-btn',
                    'a[class*="style__send-btn"]',
                    'a[class*="send-btn"]',
                    '[class*="send-btn"]',
                    '[class*="sendBtn"]',
                    '[class*="SendBtn"]'
                ]);
                const findVoiceButton = () => {
                    const editorEl = editor(),
                        candidates = [
                            'a[class*="voice"]', 'button[class*="voice"]', '[class*="voice-btn"]', '[class*="voiceBtn"]', '[class*="VoiceBtn"]',
                            'a[class*="audio"]', 'button[class*="audio"]', '[class*="audio-btn"]', '[class*="record-btn"]',
                            'a[class*="mic"]', 'button[class*="mic"]',
                            'span.iconfont[class*="voice"]', 'span.iconfont[class*="audio"]', 'span.iconfont[class*="mic"]',
                            'span[class*="icon-voice"]', 'span[class*="icon-audio"]', 'span[class*="icon-mic"]', 'span[class*="icon-microphone"]', 'span[class*="icon-yuyin"]',
                            '[aria-label*="语音"]', '[title*="语音"]', '[aria-label*="Voice"]', '[title*="Voice"]', '[aria-label*="voice"]'
                        ];
                    for (let i = 0; i < candidates.length; i++) {
                        const hit = safeQuery(candidates[i]);
                        if (!hit || !hit.isConnected) continue;
                        const host = hit.closest && hit.closest('a, button, [role="button"]') || hit;
                        if (!isVisibleEl(host) || isOurButton(host) || !isNearEditor(host, editorEl)) continue;
                        return host
                    }
                    const sendBtn = findSendButton();
                    return sendBtn ? findPreviousControl(sendBtn) : null
                };
                const findToolbarRight = () => {
                    const editorEl = editor(),
                          hits = document.querySelectorAll('[data-input-toolbar-right="true"], [data-creation-submit-actions]');
                    let fallback = null, hidden = null;
                    for (let i = 0; i < hits.length; i++) {
                        const el = hits[i];
                        if (!el || !el.isConnected) continue;
                        if (el.classList && el.classList.contains('mp-prompt-wrapper')) continue;
                        const hasSend = el.querySelector('#yuanbao-send-btn, [class*="send-btn"], [class*="SendButton"]');
                        if (!isVisibleEl(el)) {
                            hasSend && null === hidden && (hidden = el);
                            continue
                        }
                        if (hasSend) return el;
                        null === fallback && (fallback = el)
                    }
                    if (fallback && isNearEditor(fallback, editorEl)) return fallback;
                    return hidden
                };
                const findAnchor = () => {
                    const toolbar = findToolbarRight();
                    if (toolbar) return { element: toolbar, dir: 'left', compact: true, gap: YUANBAO_TOOLBAR_GAP, group: true };
                    const voiceBtn = findVoiceButton();
                    if (voiceBtn) return { element: voiceBtn, dir: 'left', compact: true };
                    const sendBtn = findSendButton();
                    if (sendBtn) return { element: sendBtn, dir: 'left' };
                    const icon = firstMatchIn(['span.iconfont.icon-send', 'span.icon-send', '[class*="icon-send"]']);
                    if (icon) {
                        const host = icon.closest('a, button, [role="button"]') || icon.parentElement;
                        if (host) return { element: host, dir: 'left' };
                    }
                    const ANCHOR_RECT_X = "7.71448";
                    const svgHost = Array.from(document.querySelectorAll('a, button')).find(el => el.querySelector('rect[x="' + ANCHOR_RECT_X + '"]'));
                    if (svgHost) return { element: svgHost, dir: 'left' };
                    const generic = findComposerControl(editor());
                    return generic ? { element: generic, dir: 'left' } : null;
                };
                                                const aiCreation = location.pathname.indexOf("ai-creation") >= 0;
                let anchorData = null, fallbackAnchor = null;
                for (let attempt = 0; attempt < 6 && !anchorData; attempt++) {
                    if (attempt > 0) await new Promise(r => setTimeout(r, 200 + 130 * attempt));
                    const a = findAnchor();
                    aiCreation && a && !a.group ? fallbackAnchor || (fallbackAnchor = a) : anchorData = a;
                }
                anchorData || (anchorData = fallbackAnchor);
                const slot = anchorData ? resolveToolbarSlot(anchorData.element) : null;
                if (slot) {
                    btn = placePromptButton(slot.container, slot.ref, anchorData.dir, anchorData.after, anchorData.compact, anchorData.gap);
                    elementToInsert = btn;
                    insertionPoint = slot.container;
                    floatingUpgrade.active = false, floatingUpgrade.tries = 0, floatingUpgrade.timer && (clearTimeout(floatingUpgrade.timer), floatingUpgrade.timer = null);
                } else {
                    btn = attachFloatingPromptButton(anchorData ? anchorData.element : editor(), 'left');
                    if (!btn) return;
                    elementToInsert = btn;
                    insertionPoint = btn.parentElement;
                    floatingUpgrade.active = true, floatingUpgrade.last = Date.now(), scheduleFloatingUpgradeCheck();
                }
                insertionMethod = 'handled_manually';
            }

            else if (currentPlatform === 'doubao') {
                const findMicArea = () => {
                    const micPath = Array.from(document.querySelectorAll('svg path')).find(
                        p => p.getAttribute('d')?.startsWith("M19.8628 9.29346")
                    );
                    if (micPath) {
                        const micOuterWrapper = micPath.closest('[class*="items-end"]');
                        if (micOuterWrapper && micOuterWrapper.parentElement) {
                            return {
                                container: micOuterWrapper.parentElement,
                                referenceNode: micOuterWrapper
                            };
                        }
                    }
                    return null;
                };
                const findStopButtonArea = () => {
                    const stopPath = Array.from(document.querySelectorAll('svg path')).find(
                        p => p.getAttribute('d')?.startsWith("M21.1504 12C")
                    );
                    if (stopPath) {
                        const stopButton = stopPath.closest('.break-btn-fISNgC') || stopPath.closest('[class*="rounded-full"]');
                        if (stopButton) {
                            const stopOuterWrapper = stopButton.closest('[class*="items-end"]');
                            if (stopOuterWrapper && stopOuterWrapper.parentElement) {
                                return {
                                    container: stopOuterWrapper.parentElement,
                                    referenceNode: stopOuterWrapper
                                };
                            }
                        }
                    }
                    const stopContainer = document.querySelector('.flex.items-end.empty\\:hidden.z-1');
                    if (stopContainer && stopContainer.parentElement) {
                        const reference = stopContainer.querySelector('.break-btn-fISNgC') || stopContainer.querySelector('[class*="rounded-full"]');
                        if (reference) {
                            return {
                                container: stopContainer.parentElement,
                                referenceNode: stopContainer
                            };
                        }
                    }
                    return null;
                };
                const findRightArea = () => {
                    const sendIcon = Array.from(document.querySelectorAll('span.semi-icon path')).find(
                        p => p.getAttribute('d')?.startsWith("m3.543 8.883")
                    );
                    if (sendIcon) {
                        const r = sendIcon.closest('[class*="right-area"]');
                        if (r) return { container: r.parentElement, referenceNode: r };
                    }
                    const stopIcon = Array.from(document.querySelectorAll('span.semi-icon path')).find(p => p.getAttribute('d')?.startsWith("M12 23c6.075"));
                    if (stopIcon) {
                        const r = stopIcon.closest('[class*="right-area"]');
                        if (r) return { container: r.parentElement, referenceNode: r };
                    }
                    const sendBtn = document.getElementById('flow-end-msg-send');
                    if (sendBtn) {
                        const r = sendBtn.closest('[class*="right-area"]');
                        if (r) return { container: r.parentElement, referenceNode: r };
                    }
                    const fallbackRight = document.querySelector('[class*="right-area-"]');
                    if (fallbackRight) return { container: fallbackRight.parentElement, referenceNode: fallbackRight };
                    return null;
                };
                let targetArea = findMicArea() || findStopButtonArea() || findRightArea();
                if (!targetArea) {
                    await new Promise(r => setTimeout(r, 1500));
                    targetArea = findMicArea() || findStopButtonArea() || findRightArea();
                }
                if (!targetArea || !targetArea.container) return;
                if (!targetArea.referenceNode || !targetArea.referenceNode.isConnected) {
                    targetArea = findMicArea() || findStopButtonArea() || findRightArea();
                    if (!targetArea || !targetArea.container || !targetArea.referenceNode?.isConnected) return;
                }
                let existingBtn = targetArea.container.querySelector('[data-testid="composer-button-prompts"]');
                if (existingBtn) {
                    btn = existingBtn;
                } else {
                    btn = createPromptButton('left');
                    btn.style.marginRight = '8px';
                    targetArea.container.insertBefore(btn, targetArea.referenceNode);
                }
                elementToInsert = btn;
                insertionPoint = targetArea.container;
                insertionMethod = 'handled_manually';
            }

            else if (currentPlatform === 'qianwen') {
                const findSendGroup = () => {
                    const icon = safeQuery('[data-icon-type="qwpcicon-sendChat"]');
                    const sendBtn = icon && icon.closest ? icon.closest('button') : null;
                    const seed = sendBtn || firstMatchIn([
                        'button[aria-label="发送消息"]',
                        'button[data-session-switch-target="send-query"]',
                        '[data-icon-type="qwpcicon-mic"]'
                    ]) || icon;
                    if (!seed || !seed.closest) return null;
                    const group = seed.closest('div.flex.shrink-0.items-center.gap-2') ||
                        seed.closest('div.flex.shrink-0.items-center') || seed.parentElement;
                    return group && !isOurButton(group) ? group : null;
                };
                let group = findSendGroup();
                if (!group) {
                    await new Promise(r => setTimeout(r, 1500));
                    group = findSendGroup();
                }
                if (!group || !group.parentElement) return;
                const container = group.parentElement;
                btn = container.querySelector('.mp-prompt-wrapper');
                if (!btn) {
                    btn = createPromptButton('left');
                    btn.style.flexShrink = '0';
                    btn.style.margin = "0 8px 0 0";
                    container.insertBefore(btn, group);
                }
                const sizeRef = group.querySelector('button') ||
                    group.querySelector('[data-global-speaking-guide-anchor]') || group.firstElementChild || group;
                resetButtonVisual(btn);
                preventClipping(btn, sizeRef);
                elementToInsert = btn;
                insertionPoint = container;
                insertionMethod = 'handled_manually';
            }

            if (!btn || !insertionPoint) return;
            const editorEl = resolveEditor();
            if (editorEl) {
                setupInlineSuggestion(editorEl);
            } else {
                setTimeout(() => {
                    const retryEditor = resolveEditor();
                    if (retryEditor) setupInlineSuggestion(retryEditor);
                }, 1000);
            }
            currentButton   = elementToInsert;
            const clickable = btn;
            if      (insertionMethod === 'append'){insertionPoint.appendChild(elementToInsert);}
            else if (insertionMethod === 'before'){insertionPoint.parentNode.insertBefore(elementToInsert, insertionPoint);}
            else if (insertionMethod === 'after' ){insertionPoint.parentNode.insertBefore(elementToInsert, insertionPoint.nextSibling);}

            currentMenu = createPromptMenu();
            currentModal = createPromptModal();
            languageModal = createLanguageModal();
            currentPlaceholderModal = createPlaceholderModal();
            document.body.appendChild(currentMenu);
            document.body.appendChild(currentModal);
            document.body.appendChild(languageModal);
            document.body.appendChild(currentPlaceholderModal);
            clickable.addEventListener('click', e => {
                e.stopPropagation();
                e.preventDefault();
                const menu = currentMenu;
                if (menu.classList.contains('visible')) {
                    closeMenu();
                    return;
                }
                refreshMenu().then(() => {
                    positionMenu(menu, clickable);
                    menu.classList.add('visible');
                    setTimeout(() => {
                        const list = menu.querySelector('#prompt-menu-list-el');
                        if (list && list.updateScrollArrows) {
                            list.updateScrollArrows();
                        }
                    }, 250);
                });
            });
            currentModal.querySelector('#__ap_save').onclick = async (e) => {
                e.stopPropagation();
                const { promptId, ...fields } = readPromptForm();
                if (!fields.title || !fields.text) { showNotification(getTranslation('requiredFields'), 'error'); return; }
                if (promptId) {
                    const success = await updateById(promptId, fields);
                    if (!success) await addItem({ ...fields, isFixed: false });
                } else {
                    await addItem({ ...fields, isFixed: false });
                }
                hideModal(currentModal);
                currentActiveFileIds.clear();
                await refreshMenu();
                if (currentMenu) currentMenu.classList.add('visible');
            };
            const handleSaveAndExecute = async (e) => {
                if (!isShortcutPressed(e, 'saveSend')) return;
                e.preventDefault();
                e.stopPropagation();
                const { promptId, ...fields } = readPromptForm();
                if (!fields.title || !fields.text) {
                    showNotification(getTranslation('requiredFields'), 'error');
                    return;
                }
                let savedItem;
                if (promptId) {
                    const success = await updateById(promptId, fields);
                    if (success) {
                        const allPrompts = await getAll();
                        savedItem = findById(allPrompts, promptId);
                    } else {
                        savedItem = { ...fields, isFixed: false };
                        await addItem(savedItem);
                    }
                } else {
                    savedItem = { ...fields, isFixed: false };
                    await addItem(savedItem);
                }
                hideModal(currentModal);
                currentActiveFileIds.clear();
                refreshMenu();
                if (savedItem.usePlaceholders) { openPlaceholderModal(savedItem); }
                else { insertPrompt(savedItem); }
            };
            document.getElementById('__ap_title').addEventListener('keydown', handleSaveAndExecute);
            document.getElementById('__ap_text').addEventListener('keydown', handleSaveAndExecute);
            const savePromptData = async () => {
                const { promptId, ...fields } = readPromptForm();
                if (!fields.title || !fields.text) {
                    showNotification(getTranslation('requiredFields'), 'error');
                    return false;
                }
                if (promptId) {
                    const success = await updateById(promptId, fields);
                    if (!success) {
                        const saved = await addItem({ ...fields, isFixed: false });
                        currentModal.dataset.promptId = saved.id;
                    }
                } else {
                    const saved = await addItem({ ...fields, isFixed: false });
                    currentModal.dataset.promptId = saved.id;
                }
                currentModal.dataset.originalTitle = fields.title;
                currentModal.dataset.originalText = fields.text;
                showNotification(getTranslation('saveSuccess'));
                await refreshMenu();
                return true;
            };
            const handleSaveKeepOpen = async (e) => {
                if (!isShortcutPressed(e, 'saveEditor')) return;
                e.preventDefault();
                e.stopPropagation();
                await savePromptData();
            };
            document.getElementById('__ap_title').addEventListener('keydown', handleSaveKeepOpen);
            document.getElementById('__ap_text').addEventListener('keydown', handleSaveKeepOpen);
            currentModal.querySelector('#__ap_close_prompt').onclick = async (e) => {
                e.stopPropagation();
                const currentTitle = document.getElementById('__ap_title').value;
                const currentText = document.getElementById('__ap_text').value;
                const origTitle = currentModal.dataset.originalTitle || '';
                const origText = currentModal.dataset.originalText || '';
                if (currentTitle !== origTitle || currentText !== origText) {
                    const actionResult = await createDialogo({
                        message: getTranslation('confirmUnsaved'),
                        actions: [
                            { label: getTranslation('cancel'), style: 'secondary', value: 'cancel' },
                            { label: getTranslation('confirm'), style: 'danger', value: 'exit' },
                            { label: getTranslation('saveAndExit'), style: 'primary', value: 'save' }
                        ]
                    });
                    if (actionResult === 'cancel' || actionResult === undefined) {
                        return;
                    }
                    if (actionResult === 'save') {
                        const savedSuccessfully = await savePromptData();
                        if (!savedSuccessfully) {
                            return;
                        }
                    }
                }
                hideModal(currentModal);
            };
            currentPlaceholderModal.querySelector('#__ap_insert_prompt').onclick = async (e) => {
                e.stopPropagation();
                const isFromInline = currentPlaceholderModal.dataset.fromInline === "true";
                const parseData = JSON.parse(currentPlaceholderModal.dataset.parseData);
                const originalItem = JSON.parse(currentPlaceholderModal.dataset.originalItem);
                let finalText = parseData.processedText;
                const ignoreMap = new Map(parseData.ignoreMap);
                const selectMap = new Map(parseData.selectMap);
                const inputMap = new Map(parseData.inputMap);
                const fileMap = new Map(parseData.fileMap || []);
                const variablesToApply =[];
                const container = document.getElementById('__ap_placeholders_container');
                let dynamicFilesToAttach =[];
                const removeEmptyPlaceholder = (text, key) => {
                    const emptyLineRegex = new RegExp(`^[ \\t]*${key}[ \\t]*\\r?\\n?`, 'gm');
                    text = text.replace(emptyLineRegex, '');
                    text = text.split(key).join('');
                    return text;
                };
                fileMap.forEach((_data, key) => {
                    finalText = removeEmptyPlaceholder(finalText, key);
                    const files = currentPlaceholderModal._tempFiles.get(key) ||[];
                    dynamicFilesToAttach.push(...files);
                });
                inputMap.forEach((data, key) => {
                    const inputEl = container.querySelector(`textarea[data-key="${key}"]`);
                    const val = inputEl ? inputEl.value : '';
                    if (typeof data === 'object' && data.silent) {finalText = removeEmptyPlaceholder(finalText, key);}
                    else {if (val.trim() === '') {finalText = removeEmptyPlaceholder(finalText, key);} else {finalText = finalText.split(key).join(val);}}
                    if (typeof data === 'object' && data.varName) {variablesToApply.push({ name: data.varName, value: val });}
                });
                selectMap.forEach((data, key) => {
                    const group = container.querySelector(`div[data-select-key="${key}"]`);
                    const checkedCheckboxes = Array.from(group.querySelectorAll('input[type="checkbox"]:checked'));
                    const joinChar = data.isInline ? ' ' : '\n';
                    const selectedText = checkedCheckboxes.map(cb => {
                        const parent = cb.closest('.mp-option-item');
                        if (cb.dataset.type === 'other') {
                            const txtInput = parent.querySelector('.mp-other-input[data-is-other="true"]') || parent.querySelector('.mp-other-input');
                            return txtInput ? txtInput.value : '';
                        }
                        let val = cb.value;
                        const inputs = parent.querySelectorAll('.mp-other-input[data-opt-input-key]');
                        if (inputs.length > 0) {
                            inputs.forEach(inp => {
                                const inputKey = inp.dataset.optInputKey;
                                const inpValue = inp.value;
                                if (inpValue.trim() === '') {
                                    const emptyLineRegex = new RegExp(`^[ \\t]*${inputKey}[ \\t]*\\r?\\n?`, 'gm');
                                    val = val.replace(emptyLineRegex, '');
                                    val = val.split(inputKey).join('');
                                } else {
                                    val = val.split(inputKey).join(inpValue);
                                }
                            });
                        }
                        return val;
                    }).filter(val => val.trim() !== '').join(joinChar);
                    if (selectedText.trim() === '') {finalText = removeEmptyPlaceholder(finalText, key);}
                    else {finalText = finalText.split(key).join((data.indent || '') + selectedText);}
                });
                const applyVariables = (text) => {
                    if (!text) return text;
                    let t = text;
                    variablesToApply.forEach(v => {
                        const escapedVar = v.name.replace(/\$/g, '\\$');
                        const varRegex = new RegExp(escapedVar, 'g');
                        t = t.replace(varRegex, v.value);
                    });
                    return t;
                };
                finalText = applyVariables(finalText);
                const reversedIgnoreEntries = Array.from(ignoreMap.entries()).reverse();
                for (const [key, content] of reversedIgnoreEntries) {
                    if (key.startsWith('__QUOTE_')) {
                        const contentWithVars = applyVariables(content);
                        finalText = finalText.split(key).join(contentWithVars);
                    }
                    else {
                        finalText = finalText.split(key).join(content);
                    }
                }
                if (isFromInline && currentPlaceholderModal._savedCursor) {
                    const saved = currentPlaceholderModal._savedCursor;
                    const editor = resolveEditor();
                    if (editor) {
                        editor.focus();
                        try {
                            if (saved.type === 'input') {
                                if (typeof editor.setSelectionRange === 'function') {
                                    editor.setSelectionRange(saved.start, saved.end);
                                }
                            } else if (saved.type === 'contenteditable' && saved.node) {
                                const sel = window.getSelection();
                                const range = document.createRange();
                                range.setStart(saved.node, saved.offset);
                                range.setEnd(saved.node, saved.offset);
                                sel.removeAllRanges();
                                sel.addRange(range);
                            }
                        } catch(err) {}
                    }
                }
                const finalPrompt = { ...originalItem, text: finalText, dynamicFiles: dynamicFilesToAttach };
                await insertPrompt(finalPrompt, isFromInline, isFromInline);
                currentPlaceholderModal.dataset.fromInline = "false";
                currentPlaceholderModal._savedCursor = null;
                hideModal(currentPlaceholderModal);
            };
            currentPlaceholderModal.querySelector('#__ap_close_placeholder').onclick = (e) => {
                e.stopPropagation();
                hideModal(currentPlaceholderModal);
            };
            isInitialized = true;
        }
        catch (error) {cleanup();}
        finally {
            setupPageObserver();
            if ("qianwen" === currentPlatform && !qianwenHealthTimer) {
                qianwenHealthTimer = setInterval(() => {
                    const ed = safeQuery(platformSelectors.qianwen);
                    if (!ed || !ed.isConnected) return;
                    if (removeForeignParagraphs(ed)) console.warn("[Prompt Manager] 已清理千问编辑器中的外来节点（它们不会随消息发送，且会破坏全选/复制）")
                }, 3000)
            }
        }
    }
    const debouncedTryInit = debounce(tryInit, 500);
    function setupPageObserver() {
        if (pageObserver) pageObserver.disconnect();
        pageObserver = new MutationObserver(() => {
            if (!document.body.contains(currentButton) || floatingUpgrade.active && floatingUpgrade.tries < 5) {
                debouncedTryInit();
            }
        });
        pageObserver.observe(document.body, { childList: true, subtree: true });
    }
    function setupGlobalEventListeners() {
        document.addEventListener('click', ev => {
            if (!currentMenu || !currentButton) return;
            if (ev.target.closest('#prompt-menu-container, [data-testid="composer-button-prompts"]')) return;
            closeMenu();
        });
        document.addEventListener('keydown', ev => {
            if (ev.key === 'Escape') {
                if (currentMenu && currentMenu.classList.contains('visible')) {
                    closeMenu();
                }
                if (currentModal && currentModal.classList.contains('visible')) {
                    currentModal.querySelector('#__ap_close_prompt').click();
                }
                if (languageModal && languageModal.classList.contains('visible')) hideModal(languageModal);
                if (currentPlaceholderModal && currentPlaceholderModal.classList.contains('visible')) hideModal(currentPlaceholderModal);
            }
            if (window.__apCustomShortcutsMap && window.__apCustomShortcutsMap.length > 0) {
                const partsMatch = (ev, shortcutStr) => {
                    if (!shortcutStr) return false;
                    const parts = shortcutStr.split('+');
                    const needsCtrl = parts.includes('Ctrl');
                    const needsAlt = parts.includes('Alt');
                    const needsShift = parts.includes('Shift');
                    if (Boolean(ev.ctrlKey) !== needsCtrl || Boolean(ev.altKey) !== needsAlt || Boolean(ev.shiftKey) !== needsShift) return false;
                    const mainKey = parts[parts.length - 1];
                    let evKey = ev.key.toUpperCase();
                    if (ev.code === 'Space') evKey = 'Space';
                    if (evKey === ' ') evKey = 'Space';
                    return evKey === mainKey;
                };
                const matchedItem = window.__apCustomShortcutsMap.find(item => partsMatch(ev, item.shortcut));
                if (matchedItem) {
                    ev.preventDefault();
                    ev.stopPropagation();
                    if (typeof closeMenu === 'function') closeMenu();
                    const p = matchedItem.prompt;
                    p.usageCount = (p.usageCount || 0) + 1;
                    updateById(p.id, { usageCount: p.usageCount });
                    if (typeof currentPlaceholderModal !== 'undefined' && currentPlaceholderModal) currentPlaceholderModal.dataset.fromInline = "false";
                    if (p.usePlaceholders && typeof openPlaceholderModal === 'function') openPlaceholderModal(p);
                    else if (typeof insertPrompt === 'function') insertPrompt(p);
                    return;
                }
            }
            if (isShortcutPressed(ev, 'newPrompt')) {
                ev.preventDefault();
                ev.stopPropagation();
                closeMenu();
                openPromptModal();
            }
            if (isShortcutPressed(ev, 'listPrompts')) {
                ev.preventDefault();
                ev.stopPropagation();
                if (currentMenu && currentMenu.classList.contains('visible')) {
                    closeMenu();
                } else {
                    _abrirPesquisaComAtalho = true;
                    if (currentButton) currentButton.click();
                }
            }
            if (isShortcutPressed(ev, 'enhancePrompt')) {
                ev.preventDefault();
                ev.stopPropagation();
                handleInstantPageEnhancement();
            }
            if (isShortcutPressed(ev, 'expandedMode')) {
                ev.preventDefault();
                ev.stopPropagation();
                closeMenu();
                openExpandedPromptMenu();
            }
        });
        window.addEventListener('resize', debounce(() => {
            if (currentMenu && currentMenu.classList.contains('visible')) {
                positionMenu(currentMenu, currentButton);
            }
        }, 100));
    }
    function tryInit() {
        if (isInitializing) return;
        if (isInitialized && currentButton && document.body.contains(currentButton) && currentPlatform === detectPlatform()) {
            if (slotUpgrade.active) {
                if (slotUpgrade.tries >= slotUpgrade.max) disarmSlotUpgrade();
                else if (Date.now() - slotUpgrade.last < 2200) return;
                else slotUpgrade.last = Date.now(), slotUpgrade.tries++;
            } else if (!floatingUpgrade.active || floatingUpgrade.tries >= 5 || Date.now() - floatingUpgrade.last < 2500) return;
            else floatingUpgrade.last = Date.now(), floatingUpgrade.tries++;
        }
        isInitializing = true;
        initUI().finally(() => { isInitializing = false; });
    }
    async function start() {
        await determineLanguage();
        loadSyntaxConfig();
        loadShortcuts();
        loadPredictionConfig();
        loadPreviewPromptConfig();
        await loadTagsConfig();
        GM_registerMenuCommand(`⚙️ ${getTranslation('settings')}`, () => {
            if (!settingsModal) {
                settingsModal = createSettingsModal();
                document.body.appendChild(settingsModal);
            }
            if (settingsModal.resetToCurrent) settingsModal.resetToCurrent();
            showModal(settingsModal);
        });
        await loadAIConfig();
        await loadThemeConfig();
        injectGlobalStyles();
        setupGlobalEventListeners();
        tryInit();
    }
    start();
})();
