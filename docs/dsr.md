# Driving Scene Reconstruction

## 정의

실주행 로그(멀티카메라·LiDAR·포즈·타임스탬프)로부터 렌더링 가능한 3D 장면을 만드는 단계입니다. 결과물은 이후 편집, closed-loop 렌더링, 시나리오 변형의 공통 자산이 됩니다.

## 왜 필요한가

E2E 모델은 원시 센서를 입력으로 받기 때문에, 로그를 단순 재생하는 것으로는 궤적이 바뀐 상황을 평가할 수 없습니다. 재구성된 장면이 있어야 새 시점의 센서를 만들 수 있습니다.

## 접근 방법

3DGS/3DGUT 기반으로 배경과 동적 객체를 분리한 scene graph를 만들고, LiDAR를 깊이 지도학습에 사용합니다. NVIDIA 스택에서는 NCore 포맷 → NuRec 복원 → USDZ 산출 흐름을 따릅니다.

## 평가 방법

학습 궤적 PSNR/SSIM/LPIPS, 차선 이동(예: 3m) 새 시점 FID, 장면당 학습 시간과 렌더링 FPS를 함께 봅니다.

## 오픈 이슈 · 다음 단계

단일 궤적 관측의 한계로 새 시점 품질이 급격히 떨어집니다. 이 부분은 Reconstruction Quality Improvement 모듈과 함께 다뤄야 합니다.
