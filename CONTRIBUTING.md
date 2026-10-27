# 기여 방법

## 1. 논문 추가 (가장 쉬움)

1. 사이트의 항목 페이지 → Related Works 탭 → **논문 추가 제안** 버튼, 또는 [Issue 폼](https://github.com/yscompany18-star/e2e-driving-sim-pipeline/issues/new?template=add-paper.yml)을 엽니다.
2. 제목, 링크, 연결할 항목, 관련성을 적어 제출합니다.
3. 관리자가 확인 후 `approved` 라벨을 붙이면 GitHub Action이 `data/papers.json`에 자동 반영하고 이슈를 닫습니다.

## 2. 설명 수정

항목 페이지의 **GitHub에서 이 설명 수정** 버튼을 누르면 `docs/<id>.md` 편집 화면이 열립니다. 저장소 쓰기 권한이 없으면 GitHub가 자동으로 fork 후 Pull Request를 만들어 줍니다. 수정 이력은 각 페이지의 “수정 이력”과 Git 커밋 기록에 남습니다.

문서는 `## 정의`, `## 왜 필요한가`, `## 접근 방법`, `## 평가 방법`, `## 오픈 이슈 · 다음 단계` 제목을 유지해 주세요. 사이트가 이 제목으로 섹션을 나눕니다.

## 3. 직접 PR

`data/papers.json` 항목 형식:

```json
{ "id": "streetcrafter", "title": "…", "venue": "CVPR 2025", "url": "https://arxiv.org/abs/…", "note": "한두 문장", "tag": "", "nodes": ["egotraj", "rqi"] }
```

- `tag`: `designated`(지정 논문) · `reference`(참고자료, 예: 비공개 모델) · `""`
- `nodes`: `data/pipeline.json`의 항목 id

PR을 올리면 `Validate data` 워크플로가 형식을 검사합니다. 로컬 검사: `node scripts/validate.mjs`

## 항목 id

- `dsr` — Driving Scene Reconstruction
- `static` — Static Scene
- `dynamic` — Dynamic Scene
- `reactive` — Reactive Simulation
- `egotraj` — Following Ego Vehicle Trajectory
- `sync` — 자사 데이터 Sensor 동기화
- `metrics` — Metrics-based Evaluation
- `speed` — Simulation Speed
- `render` — Rendering Quality
- `e2ecmp` — E2E Model Comparison 환경
- `sim2real` — Sim-to-Real gap 최소화
- `latency` — E2E Inference-to-Actuation Latency 동기화
- `scengen` — Scenario Generation
- `scenmine` — Scenario Mining
- `edit` — Driving Scene Editing
- `multiagent` — Multi-Agent Simulation
- `rqi` — Reconstruction Quality Improvement
- `gcomp` — Gaussian Compression
- `sensorplat` — Sensor Integration Platform
- `wm` — World Model
- `ref_gaia4` — GAIA-4 (참고자료)
