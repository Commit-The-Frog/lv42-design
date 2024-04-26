# lv42-design

### RENEWAL design guide
> index.html
- 탭
  - 선택된 상태: tab-selected / 선택 안된 상태: tab-not-selected

- 슬롯
  - 예약이 차있는 경우: slot-full / 예약 가능한 경우: slot-empty
  - 선택한 경우
    - slot-selected-xbox / slot-selected-switch / slot-selected-ps5

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
