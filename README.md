# 오늘운세

광고 기반 무료 운세 베타 서비스입니다. 결제 없이 오늘운세, 타로, 궁합, 신년운세를 먼저 제공합니다.

## 핵심 구조

- 첫 화면 CTA: `오늘 운세 무료 보기`
- 홈 메뉴: 오늘운세, 타로, 궁합, 신년운세
- 결과 화면: 핵심 3줄, 점수, 연애/재물/일/건강 요약, 광고 슬롯, 상세 풀이 잠금, 공유 카드, 내일 재방문 유도
- 상세 풀이: `광고 보고 상세 풀이 열기`로 해금
- 저장 기록: 회원가입 없이 이 기기에 최근 운세를 저장하고 다음 방문 때 비교

## 광고 설정

실제 AdSense ID가 없을 때는 고정 높이 placeholder가 표시됩니다. 나중에 아래 전역 값만 넣으면 같은 슬롯에 광고가 들어갑니다.

```js
window.TODAY_FORTUNE_ADSENSE_CLIENT = "ca-pub-xxxxxxxxxxxxxxxx";
window.TODAY_FORTUNE_ADSENSE_SLOTS = {
  "result-middle": "1234567890",
  "result-bottom": "9876543210"
};
```

첫 화면과 생년월일 입력 과정에는 광고를 넣지 않습니다. 결과 화면 중간/하단 광고 영역은 CLS 방지를 위해 높이가 고정되어 있습니다.

## Google Analytics 설정

Google Analytics 4에서 웹 스트림을 만든 뒤 `G-`로 시작하는 Measurement ID를 복사합니다. 공식 GA4 안내에 따르면 웹 데이터 스트림의 Measurement ID는 `G-` 또는 `AW-`로 시작합니다.

`index.html`의 아래 meta 태그에 ID를 넣으면 GA4 추적이 켜집니다.

```html
<meta name="ga4-measurement-id" content="G-XXXXXXXXXX" />
```

추적하는 주요 이벤트:

- `app_boot`: 앱 첫 로드
- `screen_view`: 홈, 입력, 타로, 결과 등 화면 전환
- `navigation_click`: 주요 메뉴/CTA 클릭
- `input_flow_start`: 운세 입력 시작
- `entry_step_complete`: 입력 단계 완료
- `analysis_start`: 분석 화면 진입
- `result_complete`: 결과 화면 도착
- `detail_unlock_click`: 광고 보고 상세 풀이 클릭
- `detail_unlocked`: 상세 풀이 열림
- `share_card_created`: 공유 카드 생성
- `share_card_saved`: 공유 이미지 저장
- `reading_saved`: 운세 기록 저장
- `attendance_done`: 방문 체크
- `tarot_card_drawn`: 타로 카드 선택

이름, 생년월일, 출생시간 같은 개인정보는 GA4로 보내지 않습니다.

## 로컬 실행

```powershell
npm install
npm run build
npm run dev
```

정적 서버로 확인하려면 `npm run local` 후 `http://127.0.0.1:5173`으로 접속합니다. `index.html`을 직접 열면 모듈 스크립트가 제한될 수 있습니다.

## 고지

이 서비스의 운세 콘텐츠는 참고용 엔터테인먼트 콘텐츠입니다. 의료, 법률, 금융, 투자 등 중요한 결정은 실제 상황과 전문가 조언을 함께 확인해야 합니다.
