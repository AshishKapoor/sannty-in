---
title: I used Zed Code Editor at work today
summary: "Here are my initial thoughts."
date: "2023-03-17"
tags: ["tools"]
authors: [ashish]
---

![](https://cdn-images-1.medium.com/max/800/0*utELQxG0rQ041zyK)

Here are my initial thoughts.

**It’s a bit buggy!**

1\. It automatically jumps the prompt here and there while adding apt. spaces.

2\. Goto definition in vim mode enables the visual highlighting feature for no reason.

3\. I wish I could move the Project Panel to the right.

4\. Even after fixing the linter issues the errors at the Project Diagnostics persist.

5\. Splitting panes were broken initially but they work now. (can’t reproduce)

6\. Super minimal git integration However, I understand the tradeoff.

7\. Adding spaces in the comments doesn’t work.

**In comparison with Neovim and VSCode**

1\. It is as snappy as neovim to use locally. (A reason I will continue using it at work).

2\. Auto imports work as expected which is a huge pain in neovim.

3\. Their new in-house “Zed Mono” Font is super SWEET!

4\. Their Search Buffer Symbols is a missing feature in VSCode. (2nd Reason I will keep using it)

5\. Still not sure how to use it remotely using SSH/mosh though.

Here are my quick Zed settings to get started.

```
~/.config/zed/settings.json

{
 "theme": "One Dark",
 "buffer_font_size": 15,
 "telemetry": {
 "diagnostics": false,
 "metrics": false
 },
 "vim_mode": true,
 "autosave": {
 "after_delay": {
 "milliseconds": 500
 }
 },
 "tab_size": 2
}
```

Source: [https://zed.dev/](https://zed.dev/)

My neovim configuration: [https://gist.github.com/AshishKapoor/fdb3d8932ff30abeaf08c78b2c8e5306](https://gist.github.com/AshishKapoor/fdb3d8932ff30abeaf08c78b2c8e5306)

> Note: I need to add my VSCode keymap to it. Might do it over the weekend in case I do not find the same online. Also, I am definitely using it in my technical programming videos on YouTube.
