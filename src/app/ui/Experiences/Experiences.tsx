"use client";

import ExperienceComponent from "../components/ExperienceComponent/ExperienceComponent";

export default function Experiences() {
  return (
    <div className=" py-10 my-4 lg:py-[60px] bg-primary ">
      <div className=" mx-4 lg:px-20">
        <div className="flex gap-2 py-5 justify-center items-center text-white">
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
            As a Software Development Engineer I, I contributed to the development of multiple applications, 
            focusing on core components like search functionality, filters, and UI elements. 
            I led a team of six in building a Figma plugin to streamline designer workflows and spearheaded the creation of an innovative tool 
            that converted wireframes into responsive, production-ready code—reducing development time by 80%. 
            I also played a pivotal role in migrating a mobile app from Xamarin Forms to .NET MAUI and React Native, 
            enhancing cross-platform compatibility and performance."
            icon="mck-icon.webp"
          ></ExperienceComponent>
          <ExperienceComponent
            designation="Software Developer Intern at Mckinsey & Company"
            duration="Feb 2022 - Aug 2022"
            description="During an intensive 8-week internship program, I worked across frontend, backend, and cloud technologies,
             delivering mini-applications weekly. I optimized search load times by 1.5x and overall performance by 3x for an e-commerce platform,
              earning a perfect accessibility score of 100%.
               I also implemented design changes under tight deadlines and mentored new hires, facilitating smoother adoption of Builder.io and 
               contributing to overall project success."
            icon="mck-icon.webp"
          ></ExperienceComponent>
          <ExperienceComponent
            designation="Research Intern at Samsung Research Institute"
            duration="Sep 2020 - Nov 2021"
            description="
            As a Research Intern, I developed a deep learning model to estimate the Mean Opinion Score (MOS) for VoIP calls, 
            achieving 91% accuracy. I optimized the model using Gated Recurrent Units (GRU) and reduced Mean Squared Error (MSE) by 20%. 
            My contributions included creating a custom dataset of noise recordings and pioneering the use of Mel-frequency cepstral coefficients 
            (MFCCs) for audio preprocessing, ultimately improving real-time MOS score estimation."
            icon="samsung-icon.jpeg"
          ></ExperienceComponent>
        </div>
      </div>
    </div>
  );
}
