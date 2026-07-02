// ===== Astro 内容集合配置 =====
// 定义 publications / collections / news 三个内容集合的 schema 和加载方式

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// ===== 论文集合 =====
const publications = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/publications',
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, '')
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    venue: z.string(),
    authors: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    image: z.string(),
    paperUrl: z.string().url().optional(),
    codeUrl: z.string().url().optional(),
    paperSite: z.string().optional(),
    draft: z.boolean().default(false)
  })
});

// ===== 研究方向集合 =====
const collectionItems = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/collections',
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, '')
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    platform: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string(),
    githubUrl: z.string().url().optional(),
    huggingfaceUrl: z.string().url().optional(),
    draft: z.boolean().default(false)
  })
});

// ===== 新闻动态集合 =====
const news = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/news',
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, '')
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    image: z.string(),
    linkUrl: z.string().url().optional(),
    titleEn: z.string().optional(),
    descEn: z.string().optional(),
    draft: z.boolean().default(false)
  })
});

export const collections = { publications, collections: collectionItems, news };
