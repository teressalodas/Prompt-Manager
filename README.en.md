<div align="center">
  <img src="./icon.png" width="100" height="100" alt="Prompt Manager">
  <h1>Prompt Manager</h1>
</div>

<p align="center">
  <a href="https://raw.githubusercontent.com/teressalodas/Prompt-Manager/main/Prompt-Manager.user.js">
    <img src="https://img.shields.io/badge/GitHub-Install%20Script-red?style=for-the-badge&logo=github" alt="Install Script" />
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=for-the-badge" alt="License: Apache License 2.0" />
  </a>
</p>

<p align="center"><a href="./README.md">简体中文</a> | English</p>

Prompt Manager is a free, open-source userscript that adds a universal prompt manager to AI chat pages. It works on many major AI platforms and supports dynamic prompts, AI prompt enhancement, external prompt subscriptions with updates, Gist import/export, and backup & restore.

## Supported Platforms

| Platform | Site |
| --- | --- |
| DeepSeek | chat.deepseek.com |
| Doubao | doubao.com |
| Qianwen | qianwen.com |
| Tencent Yuanbao | yuanbao.tencent.com |
| Kimi | kimi.com |
| ChatGPT | chatgpt.com |
| Claude | claude.ai |
| Google Gemini | gemini.google.com |
| Grok | grok.com |
| Qwen | chat.qwen.ai |
| Z.ai (GLM) | chat.z.ai |
| Arena AI | arena.ai |

## Installation

Install Violentmonkey or Tampermonkey (Chrome / Edge / Firefox), then click the link below and confirm in the popup:

**[Install Prompt Manager](https://raw.githubusercontent.com/teressalodas/Prompt-Manager/main/Prompt-Manager.user.js)**

## Features

- **Prompt library**: create, edit, pin and drag-to-reorder prompts, with search and hover preview.
- **Tags and sorting**: colored tags and filters; sort by name, time or usage count.
- **Dynamic prompts**: variables, options, file slots and date/time.
- **Inline recall**: type `#` plus a keyword in the chat input to insert a prompt quickly.
- **Auto send and attachments**: optionally send right after insertion, and auto-attach files.
- **AI prompt enhancement**: connect your own OpenAI-compatible APIs, with multiple configurations, and compare before applying.
- **External prompts**: subscribe to JSON metadata, with version checks and updates.
- **Gist and backup**: import/export prompts on Gist, plus backup & restore.

## Usage

The script adds a prompt button to the chat input toolbar (it falls back to a floating button if the toolbar cannot be located):

| Action | Result |
| --- | --- |
| Click the button | Open the prompt list |
| Hover the button | Reveal the **Enhance Prompt** (AI) and **Paste** shortcuts |
| Click a prompt | Insert it into the input (a dynamic prompt opens a form first) |
| Hover a prompt | Show a preview, plus edit / copy / delete / move / pin actions |

### Default Shortcuts

All shortcuts can be changed in **Settings → Advanced**.

| Shortcut | Action |
| --- | --- |
| `Alt+N` | New prompt |
| `Alt+P` | Open the prompt list and focus search |
| `Ctrl+Enter` | Save and send the current prompt |
| `Ctrl+S` | Save the prompt without closing the editor |
| `Shift+Enter` | Line break in the dynamic prompt form |
| `Alt+E` | Enhance the current input with AI |
| `Ctrl+Alt+P` | Open the prompt list in expanded mode |

Each prompt can also have its own shortcut.

### Dynamic Prompt Syntax

Enable **Dynamic Prompt** in the prompt editor to use the following syntax.

| Syntax | Meaning |
| --- | --- |
| `[Label]` | Free-text input |
| `[Label::default]` | Input with a default value |
| `[Label](hint)` | Input with an info hint |
| `[Label = $var]` | Input stored in `$var`; every `$var` in the prompt is replaced |
| `{Label = $var}` | Silent variable: asks for the value but does not insert it in place |
| `#start ... #end` | Option block (multi-line, or inline separated by `//`) |
| `# Title` | Section header inside an option block |
| `+ [Option]` | Multi-select option |
| `- [Option]` | Exclusive option (clears the others when selected) |
| `1[Option]` | Options sharing the same id are mutually exclusive |
| `[#]` | Free-text "Other" option |
| `[Option::x]` | Checked by default |
| `'text'` after an option | Custom text inserted when the option is chosen (can contain `[inputs]`) |
| `#ignore ... #end` | Output the enclosed text literally |
| `''text''` | Literal text (variables are still applied) |
| `\#` `\[` `\]` `\{` `\}` | Escape special characters |
| `#date` / `#time` | Current date / time; suffixes such as `-DD`, `-MM`, `-YY`, `-HH`, `-SS` hide parts; `#date+time` outputs both |
| `#file(Title)` | Per-use file upload slot |

Example:

```text
Translate the text below into [Target language = $lang::English].
#start
# Tone
- [Formal]
- [Casual]
[#]
#end
Use $lang only. Today is #date.
```

## Privacy & Security

- Prompts, tags, files, settings and API keys are stored locally in your userscript manager's storage.
- The script has no telemetry and does not collect or upload your data.
- Network requests happen only in two cases:
  - **AI enhancement**: sends the prompt to the Base URL you configured.
  - **External prompts / Gist**: fetches prompts from `raw.githubusercontent.com`, `gist.githubusercontent.com`, `cdn.jsdelivr.net` or `gitlab.com`.
- The script declares `@connect *` so that custom API endpoints work. Only configure endpoints you trust.

## About

- The script locates each site's input box and send button through page structure. A site update may break insertion or button placement; please keep the script updated.
- If a platform stops working, please open a [GitHub Issue](https://github.com/teressalodas/Prompt-Manager/issues) and include the platform.
- Pull requests are welcome. If you find this useful, please star the repo.
- Please follow each platform's terms of service.

## License

This project is open-sourced under the [Apache License 2.0](./LICENSE).
