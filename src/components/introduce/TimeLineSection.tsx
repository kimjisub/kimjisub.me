import React from 'react';

import { Title } from '@/components/Title';

const list = [
  {
    year: 2016,
    title: 'UniPad 프로젝트 진행',
    content:
      '안드로이드 기반 음악 게임으로, 플레이스토어에서 500만+ 다운로드를 달성했습니다.',
  },
  {
    year: null,
    title: '정보올림피아드 공모부문 전국 금상 수상',
    content: 'UniPad 프로젝트로 수상했습니다.',
  },
  {
    year: 2017,
    title: (
      <>
        <span style={{ color: '#D31877' }}> 한국디지털미디어고등학교 </span>
        16기 해킹방어과 입학
      </>
    ),
    content:
      'IT 특성화고에 입학하여 다양한 기술을 배우고, 많은 것을 경험했습니다.',
  },
  {
    year: 2018,
    title: (
      <>
        교내 인트라넷 <span style={{ color: '#D31877' }}> 디미고라이프 </span>
        개발 및 운영
      </>
    ),
    content: '전교생의 기숙사 생활을 지원하는 인트라넷 서비스를 개발했습니다.',
  },
  {
    year: 2019,
    title: (
      <>
        스타트업 <span style={{ color: '#DC4744' }}>The Vplanet</span> 입사
      </>
    ),
    content:
      '안드로이드, API 서버, After Effect를 활용한 렌더링 엔진 등을 개발했습니다.',
  },
  {
    year: null,
    title: 'IT 창업 경진 대회 및 해커톤 18여 회 수상',
    content: '다양한 대회에 참가하여 아이템 기획과 프로토타입 개발을 했습니다.',
  },
  {
    year: 2020,
    title: '한국외국어대학교 20학번 컴퓨터공학부 입학',
    content: 'CS 지식을 깊이있게 탐구하기 위해 입학했습니다.',
  },
  // {
  //   year: 2021,
  //   title: 'ROKA 체계운용정비병 군 복무',
  //   content:
  //     '네트워크 운용/정비병으로 지원해 각종 체계 업무를 맡으며 효율적인 일 처리를 위해 힘썼습니다.',
  // },
  {
    year: 2023,
    title: 'HUFS IDS Lab. 학부연구생',
    content:
      'MySql과 같은 DB 엔진을 SSD 컨트롤러 단계에서 구현하여 성능을 향상시키는 연구를 진행했습니다.',
  },
  {
    year: 2023,
    title: 'Alpaon LLC.',
    content: '산업용 IoT 플랫폼 개발 및 운영에 CTO로 참여하고 있습니다.',
  },
].reverse();

// const Root = styled.div`
//   max-width: 1000px;
//   padding: 5em 0;
//   margin: 0 auto;

//   .text {
//     text-align: end;
//     align-self: center;
//     padding: 0;
//     padding-right: 10px;
//   }

//   .icons {
//     > * {
//       float: left;
//       margin: 10px;
//     }
//     padding: 0;
//   }

//   .table {
//     width: fit-content;
//     margin: auto;

//     tr {
//       border: none;

//       &:nth-child(2n) {
//         background-color: #0000;
//       }

//       td {
//         border: none;
//       }
//     }
//   }
// `;

export default function TimeLineSection({ className }: { className?: string }) {
  return (
    <section className="justify-center items-center">
      <div className="w-full max-w-5xl mx-auto px-4">
        <Title title="Career" subTitle="저는 이러한 길을 걸어왔어요." />

        <div className="mx-auto">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="text-left">년도</th>
                <th className="text-left">제목</th>
                <th className="text-left">내용</th>
              </tr>
            </thead>
            <tbody>
              {list.map((data, i) => (
                <tr key={i.toString()} className="border-b">
                  <td className="p-4">{data.year}</td>
                  <td className="p-4">{data.title}</td>
                  <td className="p-4">{data.content}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
