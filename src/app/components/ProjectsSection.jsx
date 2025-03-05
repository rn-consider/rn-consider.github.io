"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Flutter多端适配自媒体AI助手",
    description: "包含各个平台热点,提供类Chatgpt的AI助手",
    image: "/images/projects/1.png",
    tag: ["全部", "移动端"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Uniapp个人简历",
    description: "使用ux框架,可编译多种小程序与移动端",
    image: "/images/projects/2.png",
    tag: ["全部", "移动端"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Nextjs(React)个人简历",
    description: "使用tailwindcss渲染可适配移动端和网页端,并支持SEO",
    image: "/images/projects/3.png",
    tag: ["全部", "网站"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "基于springboot和vue2的物流管理系统",
    description: "使用mysql,包含前后端,权限管理,物流管理,订单管理等",
    image: "/images/projects/4.png",
    tag: ["全部", "网站"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "学生报名管理系统",
    description: "基于go(gin)和vue(element-plus-admin)二次开发的学生报名管理系统",
    image: "/images/projects/5.png",
    tag: ["全部", "网站"],
    gitUrl: "/",
    previewUrl: "/",
  }
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("全部");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="mt-4 mb-8 text-4xl font-bold text-center text-white md:mb-12">
        我的项目
      </h2>
      <div className="flex flex-row items-center justify-center gap-2 py-6 text-white">
        <ProjectTag
          onClick={handleTagChange}
          name="全部"
          isSelected={tag === "全部"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="网站"
          isSelected={tag === "网站"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="移动端"
          isSelected={tag === "移动端"}
        />
      </div>
      <ul ref={ref} className="grid gap-8 md:grid-cols-3 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
