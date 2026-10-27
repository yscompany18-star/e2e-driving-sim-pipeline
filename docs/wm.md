# World Model

## 정의

HDMap·LiDAR·세그멘테이션 등 조건으로 사실적인 센서 영상을 생성하는 렌더러입니다. Multi-Agent Simulation 결과와 Data Augmentation의 생성·발굴 시나리오를 모두 입력으로 받습니다.

## 왜 필요한가

재구성이 불가능한 새 장면이나 날씨·조명 변형은 생성 모델로만 만들 수 있습니다.

## 접근 방법

Cosmos-Transfer(1/2.5 auto multiview)의 다중 조건 제어와 Cosmos-Drive-Dreams 파이프라인을 사용합니다. 카메라+레이더 동시 생성은 참고자료 GAIA-4를 참고합니다.

## 평가 방법

조건 충실도(3D box mAP, 차선 mIoU), 멀티뷰·시간 일관성, 생성 데이터로 학습 시 다운스트림 성능.

## 오픈 이슈 · 다음 단계

실시간 closed-loop에 쓰기에는 아직 느립니다. OmniDreams처럼 실시간화된 모델과의 비교가 필요합니다.
