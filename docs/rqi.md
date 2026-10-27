# Reconstruction Quality Improvement

## 정의

생성 prior(비디오 diffusion)로 복원 artifact를 제거하고 미관측 영역을 채웁니다.

## 왜 필요한가

궤적 이탈과 렌더링 품질 문제의 공통 해법이며, 정책 행동에 직접 영향을 줍니다.

## 접근 방법

ArtiFixer는 opacity mixing과 AR 증류로 수백 프레임을 한 번에 생성합니다. OneFixer는 one-step AR로 실시간 보정합니다. Difix3D+는 offline/online 두 모드를 제공합니다.

## 평가 방법

새 시점 PSNR/LPIPS, 시간적 일관성, 프레임당 지연, closed-loop 충돌률 변화.

## 오픈 이슈 · 다음 단계

실시간성과 시간적 일관성을 동시에 만족하는 설정 찾기.
