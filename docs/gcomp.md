# Gaussian Compression

## 정의

장면당 Gaussian 수와 속성 크기를 줄여 저장·로딩·렌더링 비용을 낮춥니다.

## 왜 필요한가

주행 데이터 전체를 장면으로 만들면 저장 공간이 수십~수백 TB 규모가 될 수 있습니다.

## 접근 방법

pruning·양자화(LightGaussian), anchor 기반 엔트로피 코딩(HAC), 동적 도심 장면용 계층 anchor(HDGS), 주행 특화 희소화(SparseStreet).

## 평가 방법

압축률, PSNR 하락, 로딩 시간, 압축 전후 closed-loop 지표 변화.

## 오픈 이슈 · 다음 단계

압축 손실이 정책 행동에 주는 영향은 아직 거의 측정되지 않았습니다.
