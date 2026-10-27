# E2E 자율주행 Simulation Pipeline

E2E 자율주행 모델 평가를 위한 시뮬레이션 파이프라인과 항목별 연구 질문(RQ), 설명, Related Works를 정리한 사이트입니다.

**사이트:** https://yscompany18-star.github.io/e2e-driving-sim-pipeline/

- 파이프라인 그림의 상자를 누르면 그 항목의 설명 · Related Works · 설정 페이지로 이동합니다.
- 현재 Related Works 74편 (지정 논문, 참고자료 구분 포함).
- 발표용 그림: [assets/Simulation_Pipeline.pptx](assets/Simulation_Pipeline.pptx) (1장 상위 구조, 2장 전체 파이프라인)

## 구조

| 경로 | 내용 |
|---|---|
| `index.html` | 사이트 (빌드 없이 GitHub Pages로 바로 서빙) |
| `data/papers.json` | 논문 목록. `nodes`에 연결할 항목 id |
| `data/progress.json` | 항목별 진행 상태 · 담당 |
| `data/pipeline.json` | 파이프라인 구조(항목, 연결, 그림 좌표, 설정 스키마) |
| `docs/<항목 id>.md` | 항목 설명 문서 |

## 기여하기

[CONTRIBUTING.md](CONTRIBUTING.md)를 보세요. 논문은 Issue 폼으로, 설명은 사이트의 “GitHub에서 수정” 버튼으로 바로 제안할 수 있습니다.

## 로컬에서 보기

```bash
python3 -m http.server 8000
# http://localhost:8000
```
