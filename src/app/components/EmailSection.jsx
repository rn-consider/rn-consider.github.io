"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { Resend } from "resend";
import emailjs from "@emailjs/browser";
const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);  // 添加加载状态

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);  // 开始加载
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const result = await emailjs.send(
        "service_tq3dcz6", // 在 EmailJS 控制台获取
        "template_ftrywfm", // 在 EmailJS 控制台获取
        {
          email: e.target.email.value,
          subject: e.target.subject.value,
          message: e.target.message.value,
        },
        "Matn8su0hHcv4-C6U" // 在 EmailJS 控制台获取
      );

      if (result.status === 200) {
        setEmailSubmitted(true);
      }
    } catch (error) {
      console.error("发送失败:", error);
    } finally {
      setIsLoading(false);  // 结束加载
    }
  };

  return (
    <section
      id="contact"
      className="relative grid gap-4 py-24 my-12 md:grid-cols-2 md:my-12"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="my-2 text-xl font-bold text-white">联系我</h5>

        <p className="text-[#ADB7BE] mb-4 max-w-md">
          我正在寻找新的机会，随时欢迎与我联系。无论您是有问题要咨询，还是想打个招呼，我都会尽快回复您！
        </p>
        <div className="flex flex-row gap-2 socials">
          <Link href="https://github.com/rn-consider">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="mt-2 text-sm text-green-500">
            邮件已发送！我会尽快回复您。
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                你的邮箱
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="21231208123@163.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-white"
              >
                主题
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="我们是...公司"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-white"
              >
                正文
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="我们的公司主要业务有..."
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}  // 添加 disabled 属性
              className={`bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full
                ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}  // 添加禁用状态的样式
            >
              {isLoading ? (
                <span className="inline-flex items-center">
                  <svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  发送中...
                </span>
              ) : (
                "发送邮件"
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
