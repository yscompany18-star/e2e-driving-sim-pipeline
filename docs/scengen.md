# Scenario Generation

## 정의

새로운 교통 장면과 에이전트 행동을 생성해 평가 커버리지를 넓힙니다. 생성된 레이아웃은 World Model로 센서 영상이 됩니다.

## 왜 필요한가

실주행 로그에는 위험 상황이 극히 드뭅니다.

## 접근 방법

Scenario Dreamer로 lane graph와 agent box를 생성하고 적대적 행동은 exponential tilting이나 Safe-Sim식 guidance로 제어합니다. 이후 Cosmos-Transfer 등으로 렌더링합니다.

## 평가 방법

생성 장면의 현실성(분포 거리), 정책 실패 유도율, 렌더링 후 영상 품질.

## 오픈 이슈 · 다음 단계

생성된 위험 시나리오가 현실적으로 가능한 상황인지 검증이 필요합니다.
