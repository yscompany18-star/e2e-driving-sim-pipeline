// Validates data files and docs. Run: node scripts/validate.mjs
import fs from "node:fs";
const pipe = JSON.parse(fs.readFileSync("data/pipeline.json", "utf8"));
const papers = JSON.parse(fs.readFileSync("data/papers.json", "utf8"));
const progress = JSON.parse(fs.readFileSync("data/progress.json", "utf8"));
const valid = new Set([...pipe.nodes.map(n => n.id), ...Object.keys(pipe.refs)]);
const errs = []; const ids = new Set();
for (const p of papers) {
  if (!p.id || ids.has(p.id)) errs.push("중복되거나 빈 id: " + p.id); ids.add(p.id);
  if (!p.title) errs.push(p.id + ": title 없음");
  if (!/^https?:\/\//.test(p.url || "")) errs.push(p.id + ": url은 http(s)로 시작해야 함");
  if (!Array.isArray(p.nodes) || !p.nodes.length) errs.push(p.id + ": nodes 비어 있음");
  for (const n of p.nodes || []) if (!valid.has(n)) errs.push(p.id + ": 알 수 없는 항목 " + n);
  if (p.tag && !["designated", "reference"].includes(p.tag)) errs.push(p.id + ": tag는 designated | reference | ''");
}
const ST = ["미착수", "조사", "구현", "검증", "완료"];
for (const [k, v] of Object.entries(progress)) { if (!valid.has(k)) errs.push("progress: 알 수 없는 항목 " + k); if (!ST.includes(v.status)) errs.push("progress " + k + ": status는 " + ST.join("/")); }
for (const id of valid) if (id !== "root" && !fs.existsSync("docs/" + id + ".md")) errs.push("docs/" + id + ".md 없음");
if (errs.length) { console.error(errs.join("\n")); process.exit(1); }
console.log("OK: 논문 " + papers.length + "편, 항목 " + (valid.size - 1) + "개");
