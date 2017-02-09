---
title: Sublime Cheat Sheet
date: 2017-02-09 10:38:00
tags: [tools, tmux]
categories: 工作拾遗
---
## 1. 设置ln
ln /Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl sublime

## 2. short-cuts
### 2.1 Key Bindings - Default/User
### 2.2 常用

```
option ->/<-
option shift ->/<-
command ->/<-
command ［上］/［下］
command enter
command L
command K+B
ctrl shift M 选中代码块
ctrl command G 选中相同的代码
```
<!-- more -->

## 3. 命令行
sublime.log_commands(True)

## 4. package
- git
```
[
	{ "keys": ["super+alt+g+a"], "command": "git_raw", "args": {"command": "git add -A" }},
	{ "keys": ["super+alt+g+c"], "command": "git_commit"},
	{ "keys": ["super+alt+g+p"], "command": "git_raw", "args": {"command": "git push" }},
]
```
- SyncedSideBar
