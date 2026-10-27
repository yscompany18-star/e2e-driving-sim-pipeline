// Parses an "add-paper" issue form body and appends the paper to data/papers.json
import fs from "node:fs";
const ev = JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH, "utf8"));
const body = ev.issue.body || "";
const field = (label) => { const m = body.match(new RegExp("### " + label + "\\s*\\n+([\\s\\S]*?)(?=\\n### |$)")); const v = m ? m[1].trim() : ""; return v === "_No response_" ? "" : v; };
const title = field("논문 제목"), url = field("링크"), venue = field("학회 · 연도"), note = field("이 항목과의 관련성"), tag = field("분류");
const nodes = field("연결할 항목").split(/,\s*/).map(s => s.split(" — ")[0].trim()).filter(Boolean);
if (!title || !/^https?:\/\//.test(url) || !nodes.length) { console.error("필수 항목 누락: 제목, https 링크, 연결할 항목"); process.exit(1); }
const pipe = JSON.parse(fs.readFileSync("data/pipeline.json", "utf8"));
const valid = new Set([...pipe.nodes.map(n => n.id), ...Object.keys(pipe.refs)]);
const bad = nodes.filter(n => !valid.has(n)); if (bad.length) { console.error("알 수 없는 항목: " + bad.join(", ")); process.exit(1); }
const papers = JSON.parse(fs.readFileSync("data/papers.json", "utf8"));
const existing = papers.find(p => p.url === url);
if (existing) { existing.nodes = [...new Set([...existing.nodes, ...nodes])]; console.log("기존 논문에 항목 연결: " + existing.id); }
else {
  let id = title.toLowerCase().replace(/[^a-z0-9]+/g, "").slice(0, 24) || "paper"; while (papers.some(p => p.id === id)) id += "x";
  papers.push({ id, title, venue, url, note, tag: tag === "참고자료" ? "reference" : "", nodes, added_by: ev.issue.user.login, issue: ev.issue.number });
  console.log("추가: " + id);
}
fs.writeFileSync("data/papers.json", JSON.stringify(papers, null, 2) + "\n");
