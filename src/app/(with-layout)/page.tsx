import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import GithubSection from '@/components/introduce/GithubSection';
import IntroduceSection from '@/components/introduce/IntroduceSection';
import SkillsSection from '@/components/introduce/SkillSection';
import TimeLineSection from '@/components/introduce/TimeLineSection';

// import { getGitHubContributions } from '@/api/github';

gsap.registerPlugin(ScrollTrigger);
export const revalidate = 3600;

export default function Home() {
  return (
    <main className="pt-16 flex flex-col min-h-screen py-4 snap-y snap-mandatory">
      <IntroduceSection />
      {/* <EducationSection /> */}
      <TimeLineSection />
      {/* <ProjectSection /> */}
      <GithubSection />
      <SkillsSection />
      {/* <ContactSection /> */}
    </main>
  );
}

/*
1. 자기소개
	 제너럴리스트

2. 기술
	 위에서 말한 제너럴리스트답게 다양한 기술

3. 프로젝트 및 업적 타임라인
	업적 (경력)
  Github 커밋 히트맵과 함께 

4. 연락처
   명함 3D 모델링 활용


*/
