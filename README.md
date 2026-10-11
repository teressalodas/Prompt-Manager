<div align="center">
  <img src="./icon.png" width="100" height="100" alt="Prompt Manager">
  <h1>Prompt Manager</h1>
</div>

<p align="center">
  <a href="https://raw.githubusercontent.com/teressalodas/Prompt-Manager/main/Prompt-Manager.user.js">
    <img src="https://img.shields.io/badge/GitHub-%E5%AE%89%E8%A3%85%E8%84%9A%E6%9C%AC-red?style=for-the-badge&logo=github" alt="安装脚本" />
  </a>
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=for-the-badge" alt="License: Apache License 2.0" />
  </a>
</p>

<p align="center">简体中文 | <a href="./README.en.md">English</a></p>

Prompt Manager 是一款免费开源的用户脚本，为 AI 聊天页面增加通用提示词管理器。支持多个主流 AI 平台，支持动态提示词、AI 优化提示词、外部提示词订阅更新、Gist 导入导出、备份恢复。

## 支持的平台

| 平台 | 网站 |
| --- | --- |
| DeepSeek | chat.deepseek.com |
| 豆包 | doubao.com |
| 千问 | qianwen.com |
| 腾讯元宝 | yuanbao.tencent.com |
| Kimi | kimi.com |
| ChatGPT | chatgpt.com |
| Claude | claude.ai |
| Google Gemini | gemini.google.com |
| Grok | grok.com |
| 通义千问（Qwen） | chat.qwen.ai |
| Z.ai（GLM） | chat.z.ai |
| Arena AI | arena.ai |

## 安装

先安装 Violentmonkey 或 Tampermonkey（Chrome / Edge / Firefox），然后点击下方链接，并在弹窗中确认安装：

**[安装 Prompt Manager](https://raw.githubusercontent.com/teressalodas/Prompt-Manager/main/Prompt-Manager.user.js)**

## 功能

- **提示词库**：新建、编辑、置顶、拖拽排序，支持搜索和悬停预览。
- **标签与排序**：彩色标签、筛选，按名称、时间、使用次数排序。
- **动态提示词**：支持变量、选项、文件槽位和日期时间。
- **行内调用**：输入框中键入 `#` 加关键词，快速插入提示词。
- **自动发送与附件**：插入后可自动发送，支持自动附加文件。
- **AI 优化提示词**：接入自己的 OpenAI 兼容接口，多套配置，对比后再应用。
- **外部提示词**：订阅 JSON 元数据，支持版本检查和更新。
- **Gist 与备份**：在 Gist 导入导出提示词，支持备份恢复。

## 使用方法

脚本会在聊天输入框工具栏中加入一个提示词按钮（找不到工具栏时回退为悬浮按钮）：

| 操作 | 结果 |
| --- | --- |
| 点击按钮 | 打开提示词列表 |
| 悬停按钮 | 展开 **优化提示词**（AI）和 **粘贴** 快捷按钮 |
| 点击某条提示词 | 插入到输入框（动态提示词会先弹出填写窗口） |
| 悬停某条提示词 | 显示预览，以及编辑 / 复制 / 删除 / 移动 / 置顶操作 |

### 默认快捷键

所有快捷键均可在 **设置 → 高级** 中修改。

| 快捷键 | 功能 |
| --- | --- |
| `Alt+N` | 新建提示词 |
| `Alt+P` | 打开提示词列表并聚焦搜索 |
| `Ctrl+Enter` | 保存并发送当前提示词 |
| `Ctrl+S` | 保存提示词但不关闭编辑器 |
| `Shift+Enter` | 在动态提示词窗口中换行 |
| `Alt+E` | 用 AI 优化当前输入 |
| `Ctrl+Alt+P` | 以展开模式打开提示词列表 |

每条提示词也可以设置独立快捷键

### 动态提示词语法

在提示词编辑器中开启 **动态提示词** 后，可使用以下语法。

| 语法 | 含义 |
| --- | --- |
| `[标签]` | 自由文本输入 |
| `[标签::默认值]` | 带默认值的输入 |
| `[标签](说明)` | 带说明提示的输入 |
| `[标签 = $var]` | 输入值存入 `$var`，提示词中所有 `$var` 都会被替换 |
| `{标签 = $var}` | 静默变量：询问取值，但不在原位置插入 |
| `#start ... #end` | 选项块（多行，或用 `//` 分隔的单行写法） |
| `# 标题` | 选项块内的分组标题 |
| `+ [选项]` | 多选项 |
| `- [选项]` | 互斥选项（选中后清除其他选项） |
| `1[选项]` | 编号相同的选项互斥 |
| `[#]` | 自由输入的“其他”选项 |
| `[选项::x]` | 默认勾选 |
| 选项后的 `'文本'` | 选中该选项时插入的自定义文本（可含 `[输入框]`） |
| `#ignore ... #end` | 原样输出其中内容 |
| `''文本''` | 字面文本（变量仍会被替换） |
| `\#` `\[` `\]` `\{` `\}` | 转义特殊字符 |
| `#date` / `#time` | 当前日期 / 时间；加 `-DD`、`-MM`、`-YY`、`-HH`、`-SS` 后缀可隐藏对应部分；`#date+time` 同时输出两者 |
| `#file(标题)` | 每次使用时的文件上传槽位 |

示例：

```text
把下面的文本翻译成 [目标语言 = $lang::英文]。
#start
# 语气
- [正式]
- [口语]
[#]
#end
只使用 $lang。今天是 #date。
```

## 隐私与安全

- 提示词、标签、文件、设置和 API Key 都保存在用户脚本管理器的本地存储中。
- 脚本没有任何遥测，不会收集或上传你的数据。
- 仅在两种情况下会发起网络请求：
  - **AI 优化**：把提示词发送到你配置的 Base URL。
  - **外部提示词 / Gist**：从 `raw.githubusercontent.com`、`gist.githubusercontent.com`、`cdn.jsdelivr.net` 或 `gitlab.com` 获取提示词。
- 脚本声明了 `@connect *`，以便支持自定义 API 地址。请只配置你信任的接口。


## 关于

- 脚本通过页面结构定位各网站的输入框和发送按钮，网站改版可能导致插入或按钮位置失效，请保持脚本更新。
- 如果某个平台失效，请提交 [GitHub Issue](https://github.com/teressalodas/Prompt-Manager/issues)，并注明平台。
- 欢迎提交 Pull Request。如果觉得有用，欢迎给仓库点 Star。
- 请遵守各平台的服务条款。

## 许可证

本项目基于 [Apache License 2.0](./LICENSE) 开源。
