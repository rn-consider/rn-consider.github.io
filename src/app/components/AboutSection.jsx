"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "技能",
    id: "skills",
    content: (
      <ul className="pl-2 list-disc">
        <li>Node.js - nvm 管理node版本,npm 与 yarn工具的使用</li>
        <li>
          Vue - 精通element-plus-ui使用,elep-admin的二开,vantui的移动端开发
        </li>
        <li>
          Uniapp - 会使用ux ui框架开发多端适配应用,会各平台小程序的打包与发布
        </li>
        <li>
          Flutter -
          熟练使用Flutter开发跨平台应用,掌握Flutter通道调用Android原生开发
        </li>
        <li>Go - 熟练使用gin框架进行后端开发,了解微服务架构</li>
        <li>Python - 熟悉Django框架,能够进行网站后端开发</li>
        <li>Java - 精通SpringBoot框架,熟悉SpringCloud微服务架构</li>
        <li>PHP - 熟练使用ThinkPHP框架进行网站开发</li>
        <li>React - 熟练使用Next.js和各类UI组件库(antui)进行开发</li>
      </ul>
    ),
  },
  {
    title: "教育经历",
    id: "education",
    content: (
      <ul className="pl-2 list-disc">
        <li>温州商学院 - 计算机科学与技术专业 (2021-2025)</li>
        <li>在校成绩优异</li>
        <li>协助教师进行开发 - 积累了丰富的实战经验</li>
        <li>担任学生会技术部部长 - 培养了良好的团队协作能力</li>
      </ul>
    ),
  },
  {
    title: "证书",
    id: "certifications",
    content: (
      <ul className="pl-2 list-disc">
        <li>全国计算机等级考试二级证书 - Python语言程序设计</li>
        <li>CET-6 英语六级证书</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16">
        <img
          src="/images/about-image.png"
          width={500}
          height={500}
          loading="lazy"
        />
        <div className="flex flex-col h-full mt-4 text-left md:mt-0">
          <h2 className="mb-4 text-4xl font-bold text-white">自我介绍</h2>
          <p className="text-base lg:text-lg">
            我是一个多种技术都有涉猎的全栈开发者,无论是前端技术的vue
            <br />
            (uniapp(ux)/elementui/vantui),react(antui/nextjs)
            <br />
            移动端开发的Flutter(Android(kotlin/java))
            <br />
            还是后端技术的java(springboot),python(django)
            <br />
            go(gin),php(ThinkPhp)
            <br />
            我都有涉猎,对项目的部署与打包十分熟悉,熟悉docker,git,Linux等基本技能,有自信能够胜任各种项目的开发与维护.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              技能{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              教育经历{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              证书{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
