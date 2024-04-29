# lv42-design

### RENEWAL design guide
> index.html
- 탭
  - 선택된 상태: tab-selected / 선택 안된 상태: tab-not-selected

- 슬롯
  - 예약이 차있는 경우: slot-full / 예약 가능한 경우: slot-empty
  - 선택한 경우
    - slot-selected-xbox / slot-selected-switch / slot-selected-ps5
  - 비활성화된 슬롯 리스트(테스트 기간 중 xbox, switch)
    - fixed / hidden 으로 켜고 끔

- 예약하기 버튼
  - 선택 안한 경우 보이지 않고, 1개 이상의 슬롯을 선택하면 하단에 나타남
    - booking-btn-inactive-xbox / booking-btn-inactive-switch / booking-btn-inactive-ps5

- 사이드바
  - 프로필
    - 로그인 후 : ``` bg-[url('이미지 링크')] ``` 로 이미지 삽입
    - 로그인 전 : 빈 프로필 이미지
    - flex / hidden 로 둘 중 하나를 보이게 할 수 있음
  - 로그인 버튼
    - onclick 으로 로그인 리다이렉트

- 경고 팝업
  - 팝업 전 : popup-hidden / 팝업 후 : popup-shown
  - popup-shown으로 변경해 팝업 띄우고, setTimeout으로 800ms 뒤에 다시 popup-hidden으로 숨기기
 
- 예약 모달
  - 메세지 섹션의 시간 p태그에 font-color-xbox / font-color-switch / font-color-ps5 중 하나 선택 (예약 타입에 따라)

> mypage.html
- 프로필
  - 상태(not playing / playing) : flex / hidden 으로 숨기고 보이기

- 예약현황
  - 문제상황) 예약현황 아코디언의 라벨을 클릭하면 내용부분의 높이가 0 -> 12rem으로 늘어나게 됨. 이때 transition이 적용되기 위해서는 h-64와 같이 높이값이 명시되어야 하는데, 그러면 내부의 리스트 개수가 늘어나는 경우 12rem에 맞춰 각 리스트의 높이가 작아지게 되는 문제 발생.
  - 해결방법) 첫 렌더링시 아코디언을 펼쳐놓고, api요청을 보내는동안 스피너를 보여준다. 이후 api응답이 도착하면, (슬롯개수) X (4rem) 만큼 <예약현황 아코디언 내용> 의 높이를 수정한다. -> peer-hidden:12rem 이런식.

  - 예약 없는경우 : 예약이 없습니다 부분 flex + 예약 현황 부분 hidden
  - 예약 있는경우 : 예약이 없습니다 부분 hidden + 에약 현황 부분 flex
  - 스피너 : 스피너는 기본 block 상태이므로 첫 렌더링시 보여지게 되고, 이후 api 응답을 수신하면 hidden으로 전환

  1. 화면 렌더링시 아코디언은 펼쳐져 있음. 아코디언 내용 높이는 h-48임.
  2. 아코디언 내용에는 스피너가 돌아가고 있음. (동시에 api 요청을 보내놓고 대기)
  3. api 응답 도착하면 아코디언 내용의 높이를 (슬롯개수) X (4rem) 으로 변경
  4. 아코디언 내용의 높이가 조절되었으므로 api 응답 결과 렌더링.

> report.html
- 전체 컨테이너
  - 화면 컨테이너가 최상위에 생기고, 전체 컨테이너 스타일이 변경됨.
  - 헤더에 검색버튼 들어가면서 수정됨.

> report-3.html
- 바로가기 버튼
  - 고장접수 홈으로 가기 -> 홈으로 가기

> userpage.html
- 상단 정보
  - 마이페이지와의 차별점 재고 후 수정함.
  - 로그아웃 삭제
  - 마이페이지 -> 유저 정보
