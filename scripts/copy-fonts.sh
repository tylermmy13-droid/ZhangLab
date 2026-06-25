#!/bin/bash
# ============================================
# 字体复制脚本 - 将华文中宋/华文黑体复制到项目目录
# 请在本机终端运行此脚本
# ============================================

FONT_SRC="/Users/mamingyang/Downloads/web_fonts"
FONT_DEST="/Users/mamingyang/Documents/GitHub/mimic-iv-pipeline/SpaceLab/public/assets/fonts"

echo "========================================"
echo "  课题组网站 - 字体文件复制工具"
echo "========================================"
echo ""

# 1. 检查源目录
if [ ! -d "$FONT_SRC" ]; then
  echo "❌ 错误：字体源目录不存在"
  echo "   路径: $FONT_SRC"
  echo ""
  echo "请确认以下内容后重试："
  echo "  1. 字体是否已下载到 $FONT_SRC"
  echo "  2. 文件夹名称是否为 'web_fonts'"
  exit 1
fi

echo "✅ 找到字体源目录: $FONT_SRC"
echo ""

# 2. 列出源目录中的所有字体文件
echo "📂 字体源目录中的文件："
ls -la "$FONT_SRC"/*.ttf "$FONT_SRC"/*.otf "$FONT_SRC"/*.woff* 2>/dev/null
echo ""

# 3. 检查目标目录
if [ ! -d "$FONT_DEST" ]; then
  echo "❌ 错误：项目 fonts 目录不存在"
  echo "   路径: $FONT_DEST"
  exit 1
fi

echo "✅ 目标目录: $FONT_DEST"
echo ""

# 4. 复制所有字体文件
echo "📋 正在复制字体文件..."
COPIED=0
for ext in ttf otf woff woff2; do
  for f in "$FONT_SRC"/*.$ext; do
    if [ -f "$f" ]; then
      cp -v "$f" "$FONT_DEST/"
      COPIED=$((COPIED + 1))
    fi
  done
done

echo ""
echo "========================================"
if [ $COPIED -gt 0 ]; then
  echo "✅ 成功复制 $COPIED 个字体文件！"
  echo ""
  echo "📂 当前项目 fonts 目录："
  ls -la "$FONT_DEST"
else
  echo "⚠️  未找到可复制的字体文件 (.ttf/.otf/.woff/.woff2)"
  echo ""
  echo "请手动将华文中宋和黑体文件放入:"
  echo "  $FONT_DEST"
fi
echo "========================================"
