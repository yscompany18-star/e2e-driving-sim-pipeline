# Driving Scene Editing

## 정의

복원된 장면에서 ego만 바꾸고 나머지는 로그대로 두는 counterfactual 편집과, 객체 삽입·삭제·궤적 변경을 수행합니다.

## 왜 필요한가

같은 장면에서 조건만 바꿔 비교해야 원인 분석이 가능합니다.

## 접근 방법

world-on-rails counterfactual(참고자료 GAIA-4의 개념), Gaussian+Mesh 편집 후 video diffusion으로 정합(HorizonForge), 멀티뷰 일관 편집(SceneCrafter).

## 평가 방법

편집 영역 FID, 멀티뷰 일관성, 편집 후 정책 반응의 타당성.

## 오픈 이슈 · 다음 단계

삽입 객체의 그림자·반사·가림 같은 물리적 일관성.
