# 个人作品集网站模板 (Personal Portfolio Template)

这是一个简洁、现代的个人作品集网站模板，专为开发者和技术人员设计。它使用纯 HTML 和 CSS 构建，无需复杂的构建工具，非常适合托管在 GitHub Pages 上。

## 如何使用

这个模板已经预填充了示例内容。你可以通过简单的编辑来替换成你自己的信息。

### 1. 修改基本信息

打开 `index.html` 文件，你可以在其中找到并修改以下内容：

*   **姓名**: 搜索 `Alex Chen` 并替换为你自己的名字。
*   **职业/头衔**: 搜索 `Software Engineer | Full Stack Developer` 并修改为你的职位。
*   **简介**: 在 `id="about"` 的部分，修改 `<p>` 标签内的自我介绍文字。

### 2. 修改技能 (Skills)

在 `id="skills"` 的部分，你会看到一系列的 `<div class="skill-tag">`。你可以修改其中的文字，或者添加/删除整行来调整你的技能列表。

```html
<div class="skill-tag">你的技能 1</div>
<div class="skill-tag">你的技能 2</div>
```

### 3. 修改项目 (Projects)

在 `id="projects"` 的部分，有三个示例项目卡片 (`project-card`)。你可以：

*   修改 `<h3>` 标签内的项目名称。
*   修改 `<p>` 标签内的项目描述。
*   修改链接 `href="#"` 指向你的真实项目地址。

### 4. 修改联系方式

在 `id="contact"` 的部分，修改邮箱地址和社交媒体链接。

## 自定义样式

所有的样式都定义在 `style.css` 文件中。如果你懂一些 CSS，可以随意修改颜色、字体和布局。

*   **主色调**: 搜索 `#3498db` (蓝色) 并替换为你喜欢的颜色代码。
*   **背景色**: 搜索 `#f8f9fa` (浅灰) 进行修改。

## 部署到 GitHub Pages

1.  将此仓库的所有文件上传到你的 GitHub 仓库。
2.  在仓库的 "Settings" -> "Pages" 中，选择 `main` (或 `master`) 分支作为 Source。
3.  点击 Save，你的网站几分钟后就会上线！
