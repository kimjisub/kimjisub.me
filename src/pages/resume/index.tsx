import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styled from 'styled-components';

import ProfileImage from './profile.png';
import Table from './components/Table';
import ItemTitle from './components/ItemTitle';
import Gap from '../../components/Gap';
import Page from './components/Page';
import IconView from './components/IconView';
import { siFigma } from 'simple-icons/icons';
import ExperienceView, { ItemView } from './components/ExperienceView';

export default function Resume() {
  return (
    <Root>
      <Page>
        <Header>
          <Image src={ProfileImage} alt="profile" />
          <h1>김지섭</h1>
        </Header>
        <section>
          <Gap gap="24px">
            <div>
              <Article>
                <ItemTitle title="인적사항" subtitle="PERSONAL DETAIL" />
                <Table
                  data={[
                    ['생년월일', '2001.02.26. (만 22세)'],
                    ['휴대폰 번호', '+82 10 8752 5327'],
                    ['이메일', '0226daniel@gmail.com'],
                    [
                      'Github',
                      <A href="https://github.com/kimjisub/">kimjisub</A>,
                    ],
                    ['웹사이트', <A href="https://jisub.kim/">jisub.kim</A>],
                  ]}
                  colRatio={[1, 3]}
                />
              </Article>
              <Article>
                <ItemTitle title="학력" subtitle="EDUCATION" />
                <Table
                  data={[
                    [
                      '2020 - 현재',
                      ['한국외국어대학교', '컴퓨터전자시스템공학부'],
                      '2학년 재학',
                    ],
                    [
                      '2017 - 2019',
                      ['한국디지털미디어고등학교', '해킹방어과'],
                      '졸업',
                    ],
                  ]}
                  colRatio={[0.8, 1.5, 0.7]}
                />
              </Article>
            </div>
            <Gap gap="24px" direction="column">
              <div>
                <Article>
                  <ItemTitle title="기술" subtitle="SKILLS" />
                  <Table
                    data={[
                      [
                        'App',
                        [
                          'React Native (React Query, Recoil),',
                          'Android Native (Kotlin, Java, Compose),',
                          'Flutter',
                        ],
                      ],
                      [
                        'Server',
                        'Node.js, Express.js, Nest.js, Prisma, MySQL, MongoDB, Redis',
                      ],
                      ['DevOps', 'Docker, AWS, Github Actions'],
                      [
                        'Design',
                        [
                          'Figma, Sketch, Zeplin,',
                          'Design System (Material, Ant, Cupertino)',
                        ],
                      ],
                    ]}
                    colRatio={[1, 4]}
                  />
                </Article>
              </div>
            </Gap>
          </Gap>
          <Article>
            <ItemTitle title="경력" subtitle="EXPERIENCE" />
            <ExperienceView
              title="한국외국어대학교 IDS Lab."
              subtitle="NVM(비휘발성 메모리)의 특성을 고려한 데이터베이스 시스템, In-Storage Computing 등을 주제로 연구"
              items={[
                {
                  role: '학부연구생',
                  date: '2023.05 - 현재',
                  list: [
                    'MySQL TPCC 벤치마크 자동화 도구 개발',
                    'InnoDB 코드 분석 및 개선',
                    'OpenSSD를 이용한 NVM 기반 데이터베이스 시스템 개발',
                  ],
                },
              ]}
            />
            <ExperienceView
              title="The Vplanet Inc."
              subtitle="광고영상 자동제작 및 송출 플랫폼 'Vplate' 운영"
              items={[
                {
                  role: 'Software Engineer',
                  date: '2019.02 - 09',
                  list: [
                    'Kotlin, MVVM 패턴을 활용하여 Android 앱 개발',
                    'Android Native로 FFmpeg 기반 영상 편집 기능 개발',
                    'Node.js, Express.js, MongoDB를 활용하여 REST API 개발',
                    'After Effect 에셋 교체 전자동 엔진 개발',
                    '다중 렌더링 머신 스케줄링 및 관리 시스템 개발',
                  ],
                },
              ]}
            />
          </Article>
        </section>
      </Page>
      <Page>
        <Article>
          <ItemTitle title="프로젝트" subtitle="PROJECTS" />
          <ItemView
            item={{
              role: 'UniPad',
              date: '2016.02 - 현재',
              list: [
                '런치패드 기반의 연주형 리듬게임',
                'Play Store에 출시, 500만+ 다운로드 달성',
                '음악게임부문 1위, 전체게임부문 50위 기록',
                '꾸준한 사용자 커뮤니티 운영',
              ],
            }}
          />
          <ItemView
            item={{
              role: 'Mopl: 아파트 커뮤니티 및 주차 관리 솔루션',
              date: '2022.09 - 현재',
              list: [
                '런치패드 기반의 연주형 리듬게임',
                'Play Store에 출시, 500만+ 다운로드 달성',
                '음악게임부문 1위, 전체게임부문 50위 기록',
                '꾸준한 사용자 커뮤니티 운영',
              ],
            }}
          />
          교육봉사 대회 수상 프로젝트
        </Article>
      </Page>
    </Root>
  );
}

const Root = styled.div`
  --color-text: #1c1e21;

  all: unset;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  font-weight: 500;
  // horizontal centering
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-text);
  transform: scale(1);
  transform-origin: top left;
  @media print {
    align-items: unset;
    box-shadow: none;
    margin: 0;
  }
`;

const Header = styled.header`
  display: flex;
`;

const Article = styled.article``;

const Row = styled.div`
  display: flex;
  color: var(--color-text);
`;
const Image = styled.img`
  height: 200px;
`;

const A = styled.a`
  color: var(--color-text);
  &:hover {
    text-decoration: underline;
    color: #1c1e21;
  }
`;
