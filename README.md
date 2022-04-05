## ✍ 프로젝트 소개
![](https://img.shields.io/badge/Project-모아부자!-blue?style=for-the-badge)

<img src="https://user-images.githubusercontent.com/66179677/161751055-39b83dd6-2cc0-41f8-9027-9a5a656a87f3.gif" width="100" height="100"/>

### 1. About
모아부자는 ‘모바일 기반 챌린지를 통한 :돈가방:경제습관 형성 서비스’ 입니다.
1. 하루내역을 추가해 나의 소비를 확인해요.
2. 같이해부자 - 친구들과 하나의 목표금액을 함께 모아요.
3. 도전해부자 - 같은 목표를 친구들과 같이 진행해봐요.

**챌린지 진행도에 따라 캐릭터가 성장해요!**

### 2. 기술 스택 소개 
![Component 1](https://user-images.githubusercontent.com/66179677/161750377-398d22da-65cd-4f1f-a119-2c832ca8196e.png)

## ✍ 팀원 소개 및 역할 분배

### 😀 이현규 FRont-End

[github page](https://github.com/Aiden76005588)
1. **GitHub Actions를 이용한 CI/CD 구축**  
개발리소스 감소, 디자이너와의 즉각적인 소통을 위해 배포 자동화를 구현하였습니다.

2. Use **React-query && Recoil**  🌟  
Global state를 recoil로 관리하고 비동기 데이터는 React-query로 관리하기 위해 두 가지 스택을 동시에 사용하였습니다.

3. **같이해부자 && 도전해부자** 🌟  
같이해부자와 도전해부자는 모아부자의 핵심 기능으로 혼자 또는 단체로 목표를 정하여 그 목표를 향해 모두가 도달 할 수 있도록 돕는 기능입니다.
목표에 가까워 질 수록 캐릭터들의 모습이 변하면서 다음 캐릭터에 대한 궁금증을 유발하여 목표달성까지 동기부여가 될 수 있도록 구현하였습니다.

4. **PWA**           
저희 팀은 모아부자가 단순히 웹에서만 돌아가는 것이 아닌 오프라인에서도 사용하면서 목표에 도달하는 것에 조금이라도 도움이 되면 좋겠다는 생각으로 pwa를 적용하였습니다.

5. **카카오 로그인 및 토큰 관리**  
브라우저에서 GET 요청 시 카카오 로그인으로 인가코드를 요청한 후 유저가 카카오 로그인 & 서비스 이용등록 수락 시 리다이렉트 호출을 시킵니다. 그 후 인가 코드를 이용해 토큰정보를 백엔드로부터 받아서 axios interceptors를 통해 엑세스토큰과 리프레쉬토큰을 가져와 이 토큰들을 이용해 백엔드에서 유저에 관한 정보를 리턴 받습니다. 

## ✍ 기획
### I. 핵심 기능
#### 1-1. 도전해부자
개인의 목표를 설정하고 혼자 또는 여럿이서 같이 목표를 관리해는 기능입니다. 

![화면_기록_2022-04-05_오후_9_59_09_AdobeCreativeCloudExpress](https://user-images.githubusercontent.com/66179677/161760317-eb58103a-742a-4e98-a429-c718891b2057.gif)


#### 1-2. chart_map page
mqtt, websocket을 통해 실시간 데이터를 받고, 차트 및 지도를 통해 시각화한다.
![6_2_map_zoom_tooltip_with_grid](https://user-images.githubusercontent.com/37296369/111068621-e26f9f80-850c-11eb-95a0-e47d5b8b7c7f.gif)


### II. Flow Chart
#### Main Page
![gractor-DRMS - Main Page](https://user-images.githubusercontent.com/37296369/111068658-092dd600-850d-11eb-9854-def437c68334.jpg)
#### Hurb Page
![gractor-DRMS - Hurb Page](https://user-images.githubusercontent.com/37296369/111068657-08953f80-850d-11eb-8718-0d39b19a7420.jpg)
#### Dashboard Page
![gractor-DRMS - Dashboard Page](https://user-images.githubusercontent.com/37296369/111068656-07fca900-850d-11eb-9308-096861452608.jpg)
#### Chart_Map Page
![gractor-DRMS - Chart_Map Page](https://user-images.githubusercontent.com/37296369/111068655-06cb7c00-850d-11eb-8b08-3844c1974c86.jpg)

### III. DB Schema
![image](https://user-images.githubusercontent.com/37296369/111068679-1fd42d00-850d-11eb-9544-19d9be6808d6.png)

### IV. API 문서
![스크린샷 2021-03-15 00 11 19](https://user-images.githubusercontent.com/66179677/111073810-88c69f80-8523-11eb-9b94-6c02cb191c39.png)
![스크린샷 2021-03-15 00 12 10](https://user-images.githubusercontent.com/66179677/111073813-8bc19000-8523-11eb-9a53-8e43ecd6b77f.png)
![스크린샷 2021-03-15 00 12 47](https://user-images.githubusercontent.com/66179677/111073818-97ad5200-8523-11eb-8724-45cc96b6a2db.png)
![스크린샷 2021-03-15 00 13 06](https://user-images.githubusercontent.com/66179677/111073820-98de7f00-8523-11eb-9661-9688e4a3a810.png)
![스크린샷 2021-03-15 00 13 31](https://user-images.githubusercontent.com/66179677/111073822-9a0fac00-8523-11eb-841a-94e92a24e422.png)
![스크린샷 2021-03-15 00 13 46](https://user-images.githubusercontent.com/66179677/111073824-9b40d900-8523-11eb-9c0a-a87b999b0255.png)



## ✍ Final App view
### I. Loading, Main page (feat. 사내 서버 원격 접속)
1. ssh 를 통해 사내 서버에 원격으로 접속 후 프로젝트를 실행한다.
2. public ip 터널링 및 포트 포워딩을 통해 domain `[nas.gractor.com](http://nas.gractor.com)` 으로 사내 서버에 접근가능.  
(회사측에서 접근 권한을 허가한 public ip 만 접속 가능하다.)
![1_loading_main_url](https://user-images.githubusercontent.com/37296369/111068791-907b4980-850d-11eb-8020-5a21620e4ef7.gif)

### II. Sign Up
사이드바에 로그인 및 회원가입 섹션을 구현하였다.
![2_signup](https://user-images.githubusercontent.com/37296369/111068917-04b5ed00-850e-11eb-8b9c-00e028007a16.gif)

### III. Sign In
1. 로그인 이후 관리 중인 dashboard 리스트 페이지로 이동한다.
![3_1_login](https://user-images.githubusercontent.com/37296369/111069038-7aba5400-850e-11eb-933b-146844865836.gif)
2. 같은 브라우저 상에서 같은 세션을 공유하고 있으므로 로그인 상태가 유지된다.
처음 왼쪽 페이지에서 로그인이 만료되어 접근 권한이 없었으나, 오른쪽 페이지에서 로그인 후 세션이 저장되면서 동일 브라우저인 왼쪽 페이지에서 권한이 생겼다.
![3_2_session_islogin](https://user-images.githubusercontent.com/37296369/111069035-78f09080-850e-11eb-941c-9b245202dfb8.gif)
마찬가지로 한 쪽에서 로그아웃 시 동일 브라우저에서 세션이 파괴되면서 접근 권한이 사라진다.
![3_3_session_logout](https://user-images.githubusercontent.com/37296369/111069026-755d0980-850e-11eb-95b8-a007c316c98d.gif)

### IV. Manual Page
1. 21가지의 재난 카테고리 중 `감염병` 케이스를 분석하였습니다.
- 재난 대응 프로세스 페이지
drop-down box를 최소화 및 최대화 하는 이벤트를 구현하였습니다.
- 일반사항 및 위기경보 페이지
단순 렌더링 되는 페이지이지만 타입별 (`text`, `table`) 컨텐츠 필드를 다르게 설계하여 반복문 처리로 일반화 하였습니다.
2. 재난 대응 프로세스를 기반으로 추후 dashboard page 가 구현됩니다.  
재난 대응 프로세스(왼쪽) 는 단순 렌더링 되는 데이터로, dashboard(오른쪽)은 이를 기반으로 데이터 수정 및 추가가 빈번합니다.   
이에, db 설계 시 테이블(elastic search에서는 index) 을 분리하였다.
![5_2_2_manual_dashboard_일대일](https://user-images.githubusercontent.com/37296369/111068970-3d55c680-850e-11eb-8f77-dd15e7277dee.gif)

### V. Dashboard Page
1. [CREATE] 재난 타입 선택 후 dashboard(상황판)을 추가
한 관리자는 여러개의 상황판을 생성 및 관리할 수 있다. 현재 코로나 상황을 예시로 지역별 상황판을 관리할 필요성이 있기 때문이다.
![5_1_Create_board](https://user-images.githubusercontent.com/37296369/111069112-eb617080-850e-11eb-8308-71ae9344bed3.gif)
2.[READ] 단계별 현황 파악 및 보고 내역을 확인할 수 있다. 
![5_2_1_Read_board](https://user-images.githubusercontent.com/37296369/111069111-e997ad00-850e-11eb-852d-5741deeadeaa.gif)
3. [CREATE] 보고서 생성
보고서 타입 선택 및 내용 기입 후 저장을 누르면, 추가된 보고서 내역을 확인할 수 있다.
![5_3_Create_report](https://user-images.githubusercontent.com/37296369/111069109-e7355300-850e-11eb-924f-3e0dfa5fc003.gif)
4. [Update] 업무별 현황 업데이트
5단계(수행이전 / 수행중 / 수행완료 / 중단 / 지연)를 상태를 갖고 있으며 색깔과 함께 진행상태를 파악할 수 있다.
![5_4_Update_Task](https://user-images.githubusercontent.com/37296369/111069107-e43a6280-850e-11eb-9c5e-bde443697599.gif)

### VI. Chart_Map page (with Real-time data)
1. MQTT 토픽을 구독하고 있는 Websocket 객체로부터 실시간 데이터를 제공받는다.
그 중 온도, 습도, 기울기 데이터를 plot 하고 있으며, 센서 상태의 정상 여부에 따라  지도 위 포인트 색을 강조하였다.
![6_1_realtime_data](https://user-images.githubusercontent.com/37296369/111069156-2663a400-850f-11eb-8b0b-8af5e98fa739.gif)
2. 서울특별시 구단위 지도 위에 센서가 설치된 장소마다 포인트를 찍었다. 
지도는 클릭 및 휠스크롤을 통해 축소 및 확대가 되며, 설치된 센서 리스트(오른쪽 표)에서 검색 및 클릭 시 지도 위에 tooltip이 팝업된다.
![6_2_map_zoom_tooltip_with_grid](https://user-images.githubusercontent.com/37296369/111069152-22378680-850f-11eb-9caf-9eafb184b71c.gif)
3. kakao map 
ElasticSearch에 저장된 위도 경도 데이터를 받아와서 kakao map에 마커를 찍고 위치정보와 길찾기를 제공  
목적 : 설치된 위험시설물 센서의 위치를 시각화하여 이상경보가 울렸을때 신속하게 대응하기 위한 기능
![6_3_kakao_map](https://user-images.githubusercontent.com/37296369/111069223-6cb90300-850f-11eb-93a1-dfaaa460689a.gif)

***

# 🗣 우리를 소개합니다.


<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/Aiden76005588">
          <sub>
            <b>이현규</b>
          </sub>
        </a>
        <br>
      </td>
      <td>
        <strong>🚩 Front-end</strong>
      </td>
    </tr>
    <tr>
      <td align="center">
        <a href="https://github.com/ifizzyou">
          <sub>
            <b>박재현</b>
          </sub>
        </a>
        <br>
      </td>
      <td>
        <strong>🚩 Front-end</strong>
      </td>
    </tr>
     
  </tbody>
</table>
