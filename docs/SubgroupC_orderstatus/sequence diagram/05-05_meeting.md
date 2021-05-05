# 5월 5일 서브그룹 C(이민욱, 여일구) 회의록

## C-UC-1, 2
 * 1과 2의 그림은 너무나 유사하기에 1의 그림만을 이야기하기로 함.
 * 큰 그림은 여일구 학우의 그림을 채택하기로 함
 * 수정사항
   * find() 화살표가 무엇을 찾는 것인지 명확하지 않음. findRole(userKey) 로 변경
   * AuthenticatorList 를 Authentoricator 로 명칭 변경
   * provideData 는 함수 호출이 아님. 이전에 호추한 함수의 리턴일 뿐이니 return으롷 변경
   * result 를 모두 return 으로 변경
   * postPage 도 return으로 변경
   * AuthenticatorList에서 Loop를 도는데 이는 추상화가 안되었음. 차라리 getRole(userKey)를 호출하는 식으로 변경
   * createLog의 return 화살표가 없음.
   * 모든 key 를 userKey, id를 orderId로 바꾸어서 조금 더 명확하게 표현
   * createLog의 argument가 이상함. createLog(orderId, currentState, nextState)로 변경
   * controller가 모든 일을 하는 것이 아닌 orderList를 추가하여서 orderList가 log 남기는 것과 update 하는 것을 동시에 하는 것으로 수정하여 의존성을 아래 레이어로 내림

## C-UC-10
 * 큰 그림은 이민욱 학우의 그림을 채택하기로 함.
 * 수정사항
   * controller가 추가되어야 함.
   * timer를 Screen으로 actor를 변경
   * controller를 추가하여서 매번 새로고침을 하는 것이 아닌 orderList.isUpdated()를 호출하여서 변경사항이 있을 때에만 PageMaker를 통해서 페이지를 갱신하도록 수정

## C-UC-11
 * 큰 그림은 이민욱 학우의 그림을 채택하기로 함.
 *  수정사항
   * if 문을 추가함 isValid case를 분리함. (alt 는 alternate, opt는 option으로 해석하여서 if-else 문은 alt, if문은 opt로 표현하기로 함.)
   * generateKey 함수의 이름이 중복됨 변경 필요
   * Authenciator가 Database로부터 Role을 가져오는 로직 추가.

## 기타 회의 내용
 * 위 수정사항을 모두 마무리하여서 draw.io로 그려서 내일(5월 6일) 회의(23:00) 1시간 전(22:00)에 만나서 상호 검토하기로 함.
