#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.join(__dirname, "..");
const filesDir = path.join(repoRoot, "files");
const outputFile = path.join(repoRoot, "rss.xml");

function escapeXml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function parseFrontMatter(markdown) {
  const match = markdown.match(/^---\s*([\s\S]*?)\s*---\s*/);

  if (!match) {
    return {
      title: "Untitled",
      slug: "",
      date: null,
      description: "",
    };
  }

  const frontMatter = match[1];
  const entries = {};

  for (const line of frontMatter.split(/\r?\n/)) {
    const index = line.indexOf(":");
    if (index === -1) continue;

    const key = line.slice(0, index).trim();
    const value = line.slice(index + 1).trim();
    if (key) {
      entries[key] = value;
    }
  }

  const body = markdown.replace(match[0], "").trim();
  const description = body
    .replace(/[#>*_`\-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 180);

  return {
    title: entries.title || "Untitled",
    slug: entries.slug || "",
    date: entries.date || null,
    description,
  };
}

function buildRssFeed(posts) {
  const items = posts
    .map((post) => {
      const link = `https://aadi-my.web.app/blog/${post.slug}`;
      const pubDate = post.date ? new Date(post.date).toISOString() : new Date(0).toISOString();

      return `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid>${escapeXml(link)}</guid>
      <pubDate>${escapeXml(pubDate)}</pubDate>
      <description>${escapeXml(post.description)}</description>
    </item>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>Aadi's Blog</title>
    <link>https://aadi-my.web.app</link>
    <description>Latest posts from Aadi's blog</description>
    ${items}
  </channel>
</rss>
`;
}

function main() {
  if (!fs.existsSync(filesDir)) {
    throw new Error(`Files directory not found: ${filesDir}`);
  }

  const files = fs
    .readdirSync(filesDir)
    .filter((name) => name.toLowerCase().endsWith(".md"))
    .sort();

  const posts = files
    .map((fileName) => {
      const filePath = path.join(filesDir, fileName);
      const markdown = fs.readFileSync(filePath, "utf8");
      const meta = parseFrontMatter(markdown);
      return {
        title: meta.title,
        slug: meta.slug,
        date: meta.date,
        description: meta.description,
      };
    })
    .filter((post) => post.slug)
    .sort((a, b) => {
      const left = a.date ? new Date(a.date).getTime() : 0;
      const right = b.date ? new Date(b.date).getTime() : 0;
      return right - left;
    });

  const xml = buildRssFeed(posts);
  fs.writeFileSync(outputFile, xml, "utf8");
  console.log(`Generated ${outputFile}`);
}

main();
