;第一个文件名为

[title name="ティラノスクリプト解説"]

[stop_keyconfig]


;TyranoScript 提供的便利库作为标准
;使用配置、CG、回忆模式时需要
@call storage="tyrano.ks"

;建议将游戏所必需的初始化过程写在该文件中。

;メッセージボックスは非表示
@layopt layer="message" visible=false

;最初隐藏右下菜单按钮
[hidemenubutton]

;移动到标题画面
@jump storage="title.ks"

[s]


