# 页面信息架构（Falaises de Cassis 景点介绍页）

## 目标
- 一屏抓住“这地方值不值得去”
- 用 **按需 Google Maps 嵌入 + 原站评价链接** 提升可信度
- 用 **攻略博客** 提供可落地的交通、路线、避坑与安全信息

## 页面结构（从上到下）
1. **Hero 视觉区**
   - CSS 渐层背景；未明授权的旧照片不再展示
   - 标题：Falaises de Cassis（卡西斯悬崖海岸）
   - 3 个关键信息徽章：评分/评价数、地理位置（Cassis, France）、推荐玩法（徒步/自驾）
   - CTA：跳转到「路线规划」「地图与定位」「真实评价」「攻略博客」

2. **30 秒速懂（摘要）**
   - 直接复用博客第一部分的“是什么/值不值得去/适配人群”

3. **路线规划（A 徒步 / B 公路观景）**
   - 双卡片对比：适合人群、路线概览、建议时段

4. **地图与定位（Google Maps）**
   - 嵌入你提供的 iframe
   - 附：地址与分享链接（跳到 maps.app.goo.gl）

5. **Google Maps 评价链接**
   - 仅提供原站链接，不转载评论文本、照片或相册

6. **攻略博客（预留区域）**
   - 用 Markdown 渲染（blog.md），支持目录快速跳转

7. **页脚（固定文案）**
   - 页面最底部居中：
     `For technical support of this website, please contact: claritleonelmnicol@gmail.com`

## 素材来源
- 旧 Google Maps 评论数据与照片没有独立授权证明，已移除所有展示与构建引用；不得重新启用。
- 博客正文：`src/assets/blog.md`
