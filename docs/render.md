# Rendering Quality

## 정의

정책 입력으로 들어가는 영상의 품질입니다.

## 왜 필요한가

렌더링 결함은 영상 지표만이 아니라 정책 행동 자체를 바꿉니다. OneFixer는 보정만으로 충돌률이 약 1/3 감소함을 보였습니다.

## 접근 방법

online fixer(렌더 시 후처리)와 offline 증류(3D 개선)를 조합하고, 품질이 낮은 장면은 필터링합니다(SimScale은 PSNR<27 제외).

## 평가 방법

PSNR/LPIPS/FID와 함께, 동일 정책의 closed-loop 지표 변화를 측정합니다.

## 오픈 이슈 · 다음 단계

영상 지표와 closed-loop 지표의 상관이 약할 수 있어 두 축을 함께 봐야 합니다.
