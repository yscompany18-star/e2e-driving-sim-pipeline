# GAIA-4

## 요약

Wayve가 공개한 closed-loop 시뮬레이션용 멀티모달 생성 월드모델입니다. Wayve AI Driver를 루프 안에 넣고 카메라 영상과 레이더를 같은 모델로 함께 생성합니다. Wayve는 이를 ‘Simulation 2.0’, 즉 주행 모델을 하나의 행동 시스템으로 평가하기 위한 시뮬레이션의 핵심으로 소개합니다. 가중치와 공개 벤치마크 결과는 없으므로 우리 파이프라인에서는 구현 대상이 아니라 설계 참고자료로 씁니다.

## 핵심 개념

world-on-rails: AI Driver의 행동만 시뮬레이션을 진행시키고(위치·시점·센서가 바뀜), 다른 에이전트는 실제 로그의 행동을 그대로 유지합니다. 안전 검증의 기본 제약으로 쓰이며 스위치로 켜고 끄는 기능입니다.

reactive agents: 필요하면 주변 에이전트가 ego에 반응하도록 전환합니다.

멀티모달 생성: 카메라와 레이더를 함께 생성합니다.

재현 학습: world-on-rails 재구성 과제로 학습하면 기록된 세계를 보존하는 정도가 약 2.5배 향상된다고 보고합니다.

안전요원 개입 장면을 재생해 평가하는 데 사용합니다.

## 우리 파이프라인 적용

Reactive Simulation: world-on-rails / reactive 모드 전환을 설정 항목으로 채택했습니다. 행동 모델은 공개 모델(SMART + CAT-K)을 기본으로 씁니다.

Driving Scene Editing: ego만 바꾸는 counterfactual 편집의 정의를 world-on-rails로 맞췄습니다.

Multi-Agent Simulation · World Model: 행동과 센서를 한 모델로 만드는 방향의 참고점입니다. 우리는 행동 모델과 Cosmos-Transfer를 분리해 구성합니다.

Sensor Integration Platform: 레이더 생성의 참고점입니다. NuRec은 카메라·LiDAR만 다루므로 레이더는 Sensor RTX로 보완합니다.

Sim-to-Real gap: 모델이 좋아질수록 검증에 필요한 실주행 거리가 급증한다는 동기를 공유합니다.

## 한계 · 인용 시 주의

비공개 모델이라 재현·비교 실험이 불가능합니다. 수치(2.5배 등)는 Wayve 자체 보고이며 외부 검증이 없습니다. 인용 시 ‘참고자료’로 표기하고, 구현 기본값에는 공개 모델을 사용합니다.
