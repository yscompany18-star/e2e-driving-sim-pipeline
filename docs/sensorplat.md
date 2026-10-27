# Sensor Integration Platform

## 정의

자사 센서 구성을 NVIDIA 스택(NCore → NuRec → AlpaSim, 보조로 Omniverse Sensor RTX)에 통합하는 플랫폼입니다.

## 왜 필요한가

센서·모델·렌더러를 교체 가능한 모듈로 두어야 자사 모델과 공개 모델을 같은 조건에서 평가할 수 있습니다.

## 접근 방법

자사 로그를 NCore로 변환 → NuRec으로 복원(USDZ) → gRPC로 AlpaSim에 연결합니다. 레이더처럼 NuRec이 다루지 않는 센서는 Sensor RTX로 보완합니다.

## 평가 방법

변환 후 재투영 오차, 자사 rig 복원 품질, 공식 지원 rig 대비 품질 차이.

## 오픈 이슈 · 다음 단계

NuRec 공식 지원 rig는 Hyperion 8.1입니다. 커스텀 rig의 품질 저하 정도를 검증해야 합니다.
