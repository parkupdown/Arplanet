# 아르플래닛

<p align="center">
<img  src="https://github.com/user-attachments/assets/e76ef0d1-c65d-4a0e-b28a-00473341294a"/>
</p>

<hr/>

> ## 광주광역시 소재 클래식 기획사 웹 서비스
> 광주광역시 소재의 클래식 기획사 웹 서비스 제작을 맡아 개인 프로젝트로 진행하였습니다. 아르플래닛의 공연, 연주자, 티켓 정보등을 전달합니다.<br/>
반응형 css, 카테고리 정렬, 카카오 sdk 등을 사용하여 사용자 친화적 UX 제공을 목적하였습니다. <br/>
관리자의 편의성을 위해 admin을 개발 중이고 admin version은 2025년 1월 개발/배포 완료 예정입니다.

<hr/>

## 개요
> 프로젝트: 아르플래닛 <br/>
프로젝트 개발 기간: 2024.05 ~ 2024.06 <br/>
사용 기술: ReactTS, Express.js, styled-components, mongodb, vercel, ec2, s3, git <br/>
배포: https://arplanet.co.kr/

## 요구사항

> [기능 요구사항]<br/>
**반응형 css** -≫ styled-components의 ThemeProvider + View Point에 따른 media query를 통해 pc/mobile 대응<br/>
**채널 톡 연동** -≫ 요구자가 Kakao 계정과 연동을 위해 Kakao SDK사용<br/>
**Concert/Ticket 개발 시 카테고리별 조회** -≫ Custom Hook을 통해 React 컴포넌트에서 URL 상태를 쉽게 관리하고 백엔드와 의 데이터 조회의 간결함을 위해 Query String을 사용 (useSearchParams 사용)<br/>
**부드러운 화면 전환 + 개발 기간(1달)** -≫ React 사용: 화면 전환시 매끄러운 UI 개발자의 프레임워크 숙련도를 고려해 기간 내개발을위해사용<br/><br/>

> [비기능 요구사항]<br/>
**SEO(검색상단노출)** -≫ CSR(React)로 개발하는 점을 고려, react-helmet과 meta data를 통해 SEO에 대응, Naver, Google 검색 시 최상 단 노출중<br/><br/>

> [그 외 요구사항]<br/>
**비용, 서버의 안정성** -≫ fireBase보다 저럼한 ec2에 백엔드를 직접 구현하여 서비스, ec2의 auto scaling을 통해 서버의 안정 성획득



## 서비스 배포 후 
<p align="center">
<img width="783" alt="스크린샷 2024-12-22 오전 11 36 36" src="https://github.com/user-attachments/assets/d7322f6e-170f-430e-b549-2da30375c591" />
  <img width="775" alt="스크린샷 2024-12-22 오전 11 40 21" src="https://github.com/user-attachments/assets/2489e76e-ec3f-4408-aa9a-a2a699e1f0e9" />
<img width="944" alt="스크린샷 2024-12-22 오전 11 40 36" src="https://github.com/user-attachments/assets/9e41bb86-2d4e-4620-a6a3-8d8aa6881bc8" />
</p>

