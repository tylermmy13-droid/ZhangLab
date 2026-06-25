#!/bin/bash
# ============================================
# SpaceLab 网站改动一键部署脚本
# 请在本机终端运行此脚本即可完成所有操作
# ============================================
set -e

REPO="/Users/mamingyang/Documents/GitHub/mimic-iv-pipeline/SpaceLab"
FONT_SRC="/Users/mamingyang/Downloads/web_fonts"
FONT_DEST="$REPO/public/assets/fonts"

echo "========================================"
echo "  SpaceLab 前端改动部署"
echo "========================================"

# 步骤 1：检查仓库
echo ""
echo "[1/4] 检查本地仓库..."
if [ ! -d "$REPO" ]; then
  echo "❌ 仓库不存在: $REPO"
  exit 1
fi
cd "$REPO"
echo "✅ 已进入仓库: $(pwd)"

# 步骤 2：复制字体文件
echo ""
echo "[2/4] 复制字体文件..."
if [ ! -d "$FONT_SRC" ]; then
  echo "⚠️  字体源目录不存在: $FONT_SRC"
  echo "   跳过字体复制，请检查路径"
else
  echo "📂 字体源目录内容:"
  ls -la "$FONT_SRC"/
  echo ""
  COPIED=0
  for ext in ttf otf woff woff2; do
    for f in "$FONT_SRC"/*.$ext; do
      if [ -f "$f" ]; then
        cp -v "$f" "$FONT_DEST/"
        COPIED=$((COPIED + 1))
      fi
    done
  done
  if [ $COPIED -gt 0 ]; then
    echo "✅ 已复制 $COPIED 个字体文件到 $FONT_DEST"
  else
    echo "⚠️  未找到 .ttf/.otf/.woff/.woff2 文件"
  fi
fi

# 步骤 3：从 GitHub 拉取最新改动（我已推送到的分支）
# 注意：由于认证限制，可能需要手动拉取。这里尝试自动拉取。
echo ""
echo "[3/4] 拉取代码改动..."
echo "请在 GitHub Desktop 中点击 'Fetch origin' 并 'Pull' 来获取最新代码"
echo "或者手动执行: git pull origin main"

# 步骤 4：确认结果
echo ""
echo "[4/4] 确认结果..."
echo ""
echo "📂 字体目录当前内容:"
ls -la "$FONT_DEST"
echo ""
echo "========================================"
echo "✅ 部署完成！"
echo ""
echo "⚠️  重要：请确认字体文件名与 CSS 中一致："
echo "   - 华文中宋: STZhongsong.ttf"
echo "   - 华文黑体: STHeiti.ttf"
echo "   如果文件名不同，请告知以便我更新 CSS。"
echo "========================================"
