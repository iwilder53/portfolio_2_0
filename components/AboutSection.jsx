"use client"
import React from 'react'
import Image from 'next/image'
import { useTransition, useState } from 'react'
import TabButton from './TabButton'
const TAB_DATA = [
  {
    title: "Dev Skills",
    id: "dev_skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Flutter</li>
        <li>React</li>
        <li>NextJS</li>
        <li>Firebase</li>
        <li>MongoDB</li>
        <li>NodeJS</li>

      </ul>
    ),
  }, {
    title: "Embedded Skills",
    id: "embedded_skills",
    content: (
      <ul className="list-disc pl-2">
        <li>ESP-IDF</li>
        <li>STM32 - HAL,LL and RTOS</li>
        <li>FreeRTOS</li>
        <li>I2C,SPI,MODBUS,UART etc</li>
        <li>LoRa,LoRaWAN</li>
        <li>Oscilloscope,Logic Analyzers,VNA,JTAG </li>
        <li>Experience in Industry 4.0</li>

      </ul>
    ),
  }, {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor in Computer Application - 2022</li>
        <li>Master of Science - 2024</li>

      </ul>
    )
  }, {
    title: "Certifications & Awards",
    id: "cna",
    content: (
      <ul className="list-disc pl-2">
        <li>Student Of The Year 2023-2024 (GH Raisoni CACS)</li>
        <li>STM32 From Ground Up - Udemy </li>
        <li>Digital Signal Processing On STM32 - Udemy</li>

      </ul>
    )
  }
];
const AboutSection = () => {

  const [tab, setTab] = useState("dev_skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = id => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white"> <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
      <Image src={"/images/about-image.jpg"} width={500} height={500} />
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4"> 私について </h2>
        <p className="text-base lg:text-lg">
          私は現在、英国を拠点とするスタートアップで働いているフラッターエンジニアです。リアルタイム組み込みシステムの研究開発、iOSおよびAndroidアプリの開発と保守に携わっており、NodejsとGoで
          バックエンドを構築も知っています。
          私はJLPT N3の準備をしており、いつか日本で働いて暮らしたいと思っています。</p>
        <div className='flex flex-row mt-8'>
          <TabButton selectTab={() => handleTabChange("dev_skills")} active={tab === "dev_skills"}>{" "}Dev Skills{" "}</TabButton>
          <TabButton selectTab={() => handleTabChange("embedded_skills")} active={tab === "embedded_skills"}>{" "}Embedded Skills{" "}</TabButton>
          <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>{" "}Education{" "}</TabButton>
          <TabButton selectTab={() => handleTabChange("cna")} active={tab === "education"}>{" "}Certifications & Awards{" "}</TabButton>

        </div>
        <div className="mt-8">
          {TAB_DATA.find((t) => t.id === tab).content}
        </div>
      </div>

    </div></section>
  )
}

export default AboutSection