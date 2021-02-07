<h1 align="center">
  Qwerty Learner
</h1>

<p align="center">
  为键盘工作者设计的单词记忆与英语肌肉记忆锻炼软件
</p>

<p align="center">
  <a href="https://github.com/Kaiyiwing/qwerty-learner/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@headlessui/react.svg" alt="License"></a>
</p>

<div align=center>
<img  src="https://github.com/Kaiyiwing/qwerty-learner/blob/master/docs/Screenshot.png"/>
</div>


(原仓库地址)[https://github.com/Kaiyiwing/qwerty-learner]

## Fork 仓库改写说明

2021-02-07

寒假练英文打字，争取突破80WPM。练习过程很枯燥，脑子防空，不一会就走神了。

今天中午还在想有没有一个项目可以把背单词和练习打字速度结合起来，下午就在逛 V2EX 的时候发现了这个宝藏项目。一种浪漫的偶遇。

现在项目是一个纯前端的状态，采用 MIT 协议。

因为很适合我，于是就 Fork 了这个仓库，做了一些我自己的改动。

## 改动

- 加入一个发音功能。调用浏览器的默认发音接口。
这个功能已经在原作者的计划列表里了，目前在找一个效果好、价格低廉的发音 API。
浏览器的发音接口和操作系统对接，是效果不佳的机器 TTS。在作者没推出发音功能之前，先用这个凑合。

只听发音，不显示单词文本（即打开默写功能），是我测试下来最舒服的用法。