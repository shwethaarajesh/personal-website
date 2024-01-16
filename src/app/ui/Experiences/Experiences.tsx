"use client";

import ExperienceComponent from "../components/ExperienceComponent/ExperienceComponent";

export default function Experiences() {
  return (
    <div className=" py-10 my-4 lg:py-[60px] bg-pink-50">
      <div className=" mx-4 lg:px-20">
        <div className="flex gap-2 py-5 justify-center items-center ">
          <div className="text-xl lg:text-3xl font-normal leading-8 tracking-[-0.56px] lg:leading-[56px] lg:tracking-[0.96px]">
            My
          </div>
          <div className="text-xl lg:text-3xl font-semibold leading-8 tracking-[-0.56px] lg:leading-[56px] lg:tracking-[0.96px]">
            Experience
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <ExperienceComponent
            designation="Software Developer I at Mckinsey & Company"
            duration="Aug 2022 - Jan 2024"
            description="
            As a Software Developer I, I worked on building multiple applications with a focus on core component development, including search, filters and other UI elements. Additionally, I led a dynamic team in crafting a Figma plugin for seamless designer workflows within an internal asset, while spearheading the creation of an innovative tool converting wireframes into highly efficient, responsive code—potentially reducing development effort by up to 80%."
            icon="mck-icon.webp"
          ></ExperienceComponent>
          <ExperienceComponent
            designation="Software Developer Intern at Mckinsey & Company"
            duration="Feb 2022 - Aug 2022"
            description="As a Software Developer Intern I successfully completed an intensive 8-week program, mastering frontend, backend, and cloud development, delivering weekly mini-applications. I worked on an e-commerce application where I optimized search load times by 1.5x and boosted performance by 3x. Achieving a perfect accessibility score of 100%, I proficiently implemented design changes within project timelines. I also demonstrated my mentoring skills by effectively onboarding colleagues in the new technology framework Builder.io."
            icon="mck-icon.webp"
          ></ExperienceComponent>
          <ExperienceComponent
            designation="Research Intern at Samsung Research Institute"
            duration="Sep 2020 - Nov 2021"
            description="
            As a Samsung PRISM Research Intern,  I led the optimization of a deep learning model, demonstrating GRU's superiority over LSTM with a 91% accuracy in MOS score estimation. Managed a dataset of 10,000+ noise recordings, implemented a custom mixing algorithm, and pioneered MFCC adoption, reducing Mean Squared Error from 0.21 to 0.167. Culminated with a mobile app for real-time MOS score estimation, earning a certificate of excellence for substantial contributions."
            icon="samsung-icon.jpeg"
          ></ExperienceComponent>
        </div>
      </div>
    </div>
  );
}
