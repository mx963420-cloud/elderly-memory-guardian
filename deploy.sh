#!/bin/bash

# Elderly Memory Guardian - 快速部署脚本

echo "🚀 开始部署 Elderly Memory Guardian..."
echo ""

# 检查是否已安装 git
if ! command -v git &> /dev/null; then
    echo "❌ 需要安装 Git"
    exit 1
fi

# 检查是否已安装 npm
if ! command -v npm &> /dev/null; then
    echo "❌ 需要安装 Node.js 和 npm"
    exit 1
fi

cd ~/Desktop/elderly-memory-guardian

# 构建项目
echo "📦 构建项目..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 构建失败"
    exit 1
fi

echo "✅ 构建成功！"
echo ""
echo "📝 后续步骤："
echo ""
echo "1️⃣  推送到 GitHub："
echo "   git remote add origin https://github.com/YOUR_USERNAME/elderly-memory-guardian.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "2️⃣  访问 Vercel 或 Netlify 部署"
echo "   - Vercel: https://vercel.com/new"
echo "   - Netlify: https://app.netlify.com/start"
echo ""
echo "3️⃣  选择你的 GitHub 仓库并部署"
echo ""
echo "✨ 部署完成后，你会获得一个公开 URL！"
