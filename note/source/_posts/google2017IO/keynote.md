---
title: 2017年5月Google I/O 2017 （一）- keynote
date: 2017-05-29 23:20:00
tags: [google I/O 2017]
categories: 工作拾遗
---

演讲者：
- Sundar Pichai (CEO) 
- Scott Huffman（VP Engeneering, Assistant） 
- Valerie Nagard (PM, Assistant) 
- Rishi Chandra (VP, Home Products) 
- Anil Sabharwal (VP, Photos) 
- Susan Wojcicki (CEO, YouTube) 
- Sarah Ali (Head of Living Room Products, YouTube) 
- Barbara Macdonald (PM, YouTube) 
- Dave Burke (VP Engeneering, Android),
- Stephanie Saad Cuthbertson (Director, PM, Android) 
- Sameer Samat (VP, Android and Play) 
- Clay Bavor (VP, Virual Reality)

视频地址： https://www.youtube.com/watch?v=Y2VF8tmLFHw&spfreload=10#t=15.223129 （大约2小时）


## 1. 回顾
## 1.1 用户量（7大产品）：1 Billion+ for 7 products
Google Search, Android, Chrome, YouTube, Map, Play, Mail
- YouTube - 1 Billion hours / day 
- Map - Navigate 1 Billion km / day
- Google Drive - 800M+ Usrs, 3 Billion Objects / week (from 100M in 2013)
- Photos - 500M+ Users, 1.2 Billion Photos/ day
- Android - 2 Billion
<!-- more -->
    
        
## 2. 核心理念：Mobile First To AI First (using Machine Learning)
### 2.2  例子：smart reply
### 2.1 交互方面：
- Mouse & Keyboard (PC时代)
- Multi-touch (手机时代) 
- Voice (语音识别 － 错词率：4.9%，可以识别房间中6个人)
- Vision (图像识别 － 错误率低于人类，Google Pixel)
    - 通过图片（一张小男孩过生日的照片）识别出：小男孩、happy、party等关键词
    - 自动去除人像前面的障碍物（铁丝网）
        
## 3. 新产品 & 新技术
### 3.1 Google Lens
- 识别花朵
- 识别路由器后面的wifi名称和密码，并自动上网
- 识别店铺，获取位置和相关信息

### 3.2 Cloud TPU - 下一代TPUs (Tensor Processing Units)
![](TPU.png)
- powered Alpha Go
- Training & Inference 
    - TPU更擅长推断
    - Cloud TPU 对训练和推断都做了优化
- 每块板子4个芯片
- 每块板子每秒可以处理 180 trillion floating point
- 板子之间可以组合起来（64块板子组合起来一个TPU pod，每个pod可以处理11.5petaflops）
![](TPU-pod.png)
- 命名其为Cloud TPU原因: through the Google Cloud Platform
- 成为了Google Compute Engine

### 3.3 Google.ai
- 致力于3个领域：research, tools (tensorflow & Cloud TPUs), applied AI
- research
    - autoML: Learning to learn (搭建一个神经网络系统去学习建造另一个更好的神经网络系统) (P.S. 举了一个盗梦空间的例子 LoL) 
        - 例子：health care & pathology（病理学）诊断乳癌
        - DNA Sequencing: identify遗传变异
        - 预测化学分子性质
        - AutoDraw

### 3.4 Google Assistant (By Scott Huffman)
A conversation with Google to get things done in your world
- Conversational
beyond the voice: 通过google lens识别图像，进行翻译和与语言处理，再和assistant进行对话（一个集成功能？）
例子：用google lens拍一个演唱会的牌子，assistant提示买票、加入日历等选项，并根据用户选择进行相应操作。
- Always Available
连接更多设备：手机、电视、智能家居系统、穿戴式系统、车载系统，还有。。。iphone；
提供多种语言；
- Ready to Help (By Valerie Nagard)
Actions on Google：
作为平台，提供第三方服务；
    - support transaction
    例子：通过assistant点外卖付钱（不需要创建帐户、输入地址、绑卡等操作）
    - support smart home

### 3.5 Google Home (By Rishi Chandra)
- Proactive Assistance
- Hands-Free Calling (例子：call mom)
![](google-home.png)
- Entertainment (接入更多音视频服务平台)
- Visual Response
    - 发送地图到手机
    - 通过对话，连接TV显示日程、天气

### 3.6 Google Photos (By Anil Sabharwal)
- Suggested Sharing (识别朋友的脸，询问是否发送给对方)
- Shared Libraries (识别出是拍摄了女儿的照片，自动共享给了妻子)
- Photo Books (自动筛选、去重照片，并制作成相册)
- 在照片中识别关键信息，并给出推荐操作（订票例子）

### 3.7 YouTube (By Susan Wojcicki)
- Everyone can upload and everyone can watch
- Two way Conversation 
举了一个professor用一个comment帮助一个生来没有手指的小孩，通过3D打印机，重获新生的故事。(e-Nable network)
- On-Demand on any screen
    - 60%的观看时间通过mobile设备
    - 每年90%的增长速度在living room products
- Living Room Product (By Sarah Ali)
YouTube 提供最大数据源、推荐系统、双向交互（语音控制）
    - 360deg in the living room
- Super Chat (By Barbara Macdonald) (live stream直播)
    - Super Chat API
    ![](youtube.png)

### 3.8 Android (By Dave Burke)
Android Wear 2.0, Android Auto, Android TV, Android Things, Chromebook, Google Play
#### 3.8.1 Android O
- 两方面提升：
    - Fluid Experiences
        - Picture-in-picture
        - Notification Dots
        - Autofill with Google
        - Smart Text Selection
        ![](smart-text-selection.png)
        - TensorflowLite
    - Vitals (By Stephanie Saad Cuthbertson)
    和重要性相关的四个方面：Batterylife, security, startup-time, stability
        - Security Enhancements
        Google Play Protect
        - OS Optimizations
        Twice as fast boot time
        对后台运行系统做限制，省电、控制内存
        - Developer Tools
        Play Console Dashboards;
        Android Studio Profilers
- 新开发语言： Kotlin
与jetBrains合作
android.com/beta

#### 3.8.2 Android Go (By Sameer Samat)
一个轻量级Android平台
OS + Apps + Play
GO configuration
- Data Management & Savings
- Youtube GO - Offline Sharing
- Multilingual (多语言)

### 3.9 VR & AR (By Clay Bavor)
#### 3.9.1 VR
- Daydream
三星S8于这个夏天最先支持
- Standalone VR
![](standalone-vr.png)
no cables, no phone, no PC
    - World-Sense
    - 与HTC(vive), Lenovo合作
2017下半年发布

#### 3.9.2 AR
- Tango
- 第二代：ASUS ZenFone AR
- VPS - Visual Position Service
![](VPS.png)
- Google Expedition + AR
![](AR.png)


### 3.10 Tensorflow + everyone (By Sundar Pichai)
一个17岁移民学生(Ab)通过tensorflow帮助医生诊断的故事。

### 3.11 Google for jobs (By Sundar Pichai)
![](google-job.png)

## 4. 会议相关
### 4.1 分论坛数：400 events & 参与人数：7000 audience
    
    
### 4.2 其他会议视频索引
youtube上共计158个视频
 https://www.youtube.com/watch?v=qmeAAp9rSVY&list=PLOU2XLYxmsIKC8eODk_RNCWv3fBcLvMMy

主要视频分类:
### 4.2.1 Chrome and Web at Google I/O 2017 (27个)
看了一下整个的播放列表标题，和web相关的内容主要包括：PWA, Web Component, Web Assembly, V8, Polymer, DevTools, Web VR, Web Payment, Angular, Web Payment, Security等等
https://www.youtube.com/playlist?list=PLNYkxOF6rcICniLJ2rfj0FexlA-9zmJJE
#### 4.2.1.1 V8 引擎相关
[V8, Advanced JavaScript, & the Next Performance Frontier (Google I/O '17)](https://sqhtiamo.github.io/note/public/2017/05/30/google2017IO/V8/)
 （https://www.youtube.com/watch?v=EdFDJANJJLs）
#### 4.2.1.1 web安全相关
[Learn Web Security with Google (Google I/O '17)](https://sqhtiamo.github.io/note/public/2017/05/31/google2017IO/V8/web-security)
（https://www.youtube.com/watch?v=EdFDJANJJLs）
 ...
