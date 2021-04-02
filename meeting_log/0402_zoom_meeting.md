# 2021.04.02 19:30 Meeting Log

- 깃허브를 사용하자!
    - 교수님께서 우리가 하는 모든 활동들은 GIT을 통해 기록하라고 하셨고, 이를 통해 누구 하나가 캐리하는 팀보다는 다같이 역할을 잘 맡아서 진행하였는가를 보겠다고하셨음. 따라서 Requirements, Use Case같은 것들은 우선적으로 깃허브에 MD파일 하나에다가 담벼락에 글올리듯이 서로서로 생각날때마다 한줄씩 쓰면서 커밋하는 방식으로 하자는 생각

    ---

    - 문서 깃허브에 업로드: 정용준

    ---

    - 그러고 각자 커밋한것에 대해 사람들이 코멘트를 달기(아 이건 좀 이래서 아닌거같아요.. 아니면 이건 이렇게 수정하는게 좋을거같아요! 혹은 오 이 REQ1번이랑 REQ4번은 이렇게이렇게 묶으면 하나의 REQ로 묶일거같은데요? 라는 식으로 코멘트를 달아가면서 Requirements Gathering이랑 UseCase 업데이트해나가기
    - 깃허브를 안볼수도있으니까 Slack으로 연동을 해서 커밋이나 코멘트, 이슈가 뜰때마다 띵동띵동하고 알람이 뜰 수 있게하기(하게 된다면 제가 연동해서 초대할게여)

    ---

    - 슬랙으로 github 알람 연동하기로 결정

    ---

    - 그러고나서 최종적으로 갈무리된 Requirements, use case들을 이쁘게 docx파일, pdf파일로 만들어서 Git허브에 최종 올리기

    slack 연동은 이미 해놨고 여기에 여러분들을 초대만 하면됩니다.


이런식으로 이슈나 push같은거하면 알람뜨게

- Requirements IEEE-830 방식 or User Story 방식

    고려해야될것(중요): requirements gathering할때까지는 너무 기술적으로 들어가지말고 abstract한 관점에서 봐야한다고 생각함. 세세하게는 들어가도 좋으나(이때 이러면 이렇게 동작해야돼요!), 그러나 *이때 이러면 DB에서 Order Table을 조회해서 주문번호를 가져오고, 주문번호로 상태체크해서 REST API로 제공합니다 라는 방식*은 절대 금물! 주문이 들어오면 주문번호가 나오고, 주문번호로 현재 배달 상태를 확인해서 알려줘야 합니다 이런식으로. 조금 기술적인 얘기는 Use case부터!

    **functional, nonfunctional**

    ---

    (이민욱)비대면 시대에 서로 모호하지 않게 의사소통을 해야되는데 이런 점에서 ieee830이 더 낫다고 생각, 이유를 적어서 왜 이걸 선택했는지.

    (여일구)client가 개발자에게 전달하는 형식인데, 개발자하고 client하고 모여서 정할때 user story방식으로 나와서 이게 더 자연스럽지 않을까.

    (정종민)팀원들이 다같이 서로 붙어서 만들어야되어서 formal한 형식이 있는 ieee830 방식이 낫지 않을까.

    (정용준)전형적인 형식을 좋아하고, 형식에 혼동이 있을 수 있다. ieee830이 더 낫다.

    (여일구)각각의 actor들이 뭐가 필요한지 알기 쉽다.

    (김준기)ieee가 더 정제된 형식으로 보인다.

    (여일구): 보내주신 초안보면서 commit

    투표결과: ieee830 방식

---

- UI

    도메인모델링까지 다 끝나면  12~13일쯤 될텐데 이때부터 금요일, 토요일까지 UI가능한사람이나 아니면 mockup만드는 툴 사용가능한 사람이 주도 해서 같이 UI 설계해보기(ex. 손이나 ppt로 각자 subsystem별로 그려오면 디자인화)

    ---

    UI 간단하게 스케치 하고 마지막에 mockup깔끔하게 만들기

    ---

- Use Case작성

    화요일까지 Use case 쓰면서 Domain Concepts 가능한것들 다 적어놓자. Subsystem 별로 여기서 대충 나눠서 각자 맡은 subsystem 맡아서 use case써오기

    그리고 이거 쓰면서 Requirements와 use case들은 서로가서로를 커버할 수 있어야한다고 했으니까 작성하다가 어? 이건 이거로 커버가안될거같은데? 하면 다시 requirements를 수정하고 쓰는 식으로 Req와 Usecase는 동시에 진행

    이때 use case별로 usecase설명 문서, traceability matrix, 그리고 시간봐서 교수님이 졸라맨으로 그려주신 다이어그램까지

    ---

    subsystem: 1. 피자주문시스템 2. 관리시스템 3. 주문상태시스템

    (배달원)

    상태        배달중 (  )      배달완료/수령완료 (  )

    (cashier)

    상태        주문받음( )    조리중( )       조리완료(  )     수령완료(  )

---

문서 작성 역할분배: subsystem별로 or 각자 n분의 1해서 가져가기

결정: n분의 1

---

- Domain model
Usecase 쓰면서 썼던 Domain concepts들을 모아모아서 역시 각자 자기가 작성했던 use case에 대해서 domain modeling해오고, 역시나 (w/ Traceability Matrix) 써오기

    **방법론: Usecase를 분석해서 Responsibilities를 뽑아낸다 그리고 type과 concept name을 정한다(문서화) →연관관계를 추출(Associations) →Concept별 Attributes들을 추출→Usecase별 Domain model 작성(concept, associations, attributes 모두 포함) →마지막으로 가능하다면 Usecase와 Domain Concept별 Traceability Matrix도 작성하기**

    도메인 모델은 강의 반복해서 듣기!!(아래처럼 동작은 사람얼굴, K type은 document icon을 쓴다는 이런내용들 놓치지 않기)

    (월요일 8시 회의)

    ---

    ---

    ---


    ## 회의 결론

1. 월요일까지 requirement랑 usecase 까지 다 작성해오기
2. 3가지 subsystem 분리
3. UML 작성 [draw.io](http://draw.io)
