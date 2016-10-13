# tmux  使用 cheatsheet
## 1. tmux a

## 2. ctrl+B [ctrl+Bfix]

## 3. 浏览历史

ctrl+B [

## 4. 新建
ctrl+B C

## 5. 切换
ctrl+B 1


## 6. 分屏
ctrl+B %
ctrl+B "

## 7. 分屏到单屏
ctrl+B z

## 8. 控制分屏大小
ctrl+B alt＋<-

## 9. 多个tmux

tmux new -s yuhang
ctrl+B s

## 10. tmux 配置
- 新建文件 ~/.tmux.conf
- 配置
```
# 支持鼠标
set -g mouse on

# 已经废弃
set -g mode-mouse on
set -g mouse-resize-pane on
set -g mouse-select-pane on
set -g mouse-select-window on

# 更改prefix键
set -g prefix C-a
```
- 保存
prefix
source-fille ~/.tmux.conf
