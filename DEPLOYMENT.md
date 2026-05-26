# 部署到 Vercel 指南

## 快速部署步骤

### 方法 1：使用 Vercel 网页界面（最简单）

1. **访问 Vercel**
   - 打开 https://vercel.com
   - 使用 GitHub/GitLab/Bitbucket 账号登录

2. **推送代码到 GitHub**
   ```bash
   cd ~/Desktop/elderly-memory-guardian
   git remote add origin https://github.com/YOUR_USERNAME/elderly-memory-guardian.git
   git branch -M main
   git push -u origin main
   ```

3. **在 Vercel 导入项目**
   - 点击 "New Project"
   - 选择你的 GitHub 仓库
   - Vercel 会自动检测到这是 React + Vite 项目
   - 点击 "Deploy"

4. **完成！**
   - Vercel 会自动生成一个 URL，如：`https://elderly-memory-guardian.vercel.app`

### 方法 2：使用 Vercel CLI

1. **安装 Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```

3. **部署**
   ```bash
   cd ~/Desktop/elderly-memory-guardian
   vercel --prod
   ```

### 方法 3：使用 Netlify（替代方案）

1. **访问 Netlify**
   - 打开 https://netlify.com
   - 使用 GitHub 账号登录

2. **连接 GitHub 仓库**
   - 点击 "New site from Git"
   - 选择你的仓库
   - 构建命令：`npm run build`
   - 发布目录：`dist`
   - 点击 "Deploy"

## 项目已准备好部署

✅ 构建成功：`npm run build` 生成 `dist/` 文件夹
✅ 配置完成：`vercel.json` 已配置
✅ 代码优化：所有 TypeScript 错误已修复
✅ 全英文界面：所有文本已改为英文

## 部署后的 URL

部署完成后，你会获得一个公开 URL，可以在演示中使用。

## 环境变量

目前项目不需要任何环境变量。所有数据都是硬编码的模拟数据。

## 自定义域名（可选）

部署后，你可以在 Vercel/Netlify 的设置中添加自定义域名。
