// Submit every sitemap URL to Bing/Copilot (and Yandex, Seznam) via IndexNow.
// Run AFTER uploading the build to cPanel:  bun scripts/indexnow-submit.ts
import { readFileSync, readdirSync } from "fs";
const key = readdirSync("public").find((f) => /^[a-f0-9]{32}\.txt$/.test(f))!.replace(".txt", "");
const urls = [...readFileSync("public/sitemap.xml", "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: "dissertlypro.com", key, keyLocation: `https://dissertlypro.com/${key}.txt`, urlList: urls }),
});
console.log(`IndexNow: submitted ${urls.length} URLs → HTTP ${res.status}`);
