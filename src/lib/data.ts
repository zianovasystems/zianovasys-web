import type { GalleryItem, WhatWeDoItem, WhyChooseUsItem } from "./definitions";
import { Code, Database, Cloud, Briefcase, BarChart, Bot } from "lucide-react";

export const whatWeDoItems: WhatWeDoItem[] = [
  {
    id: 1,
    title: "Custom Software Development",
    description: "Tailored software solutions to meet your unique business needs, from web applications to enterprise systems.",
    Icon: Code,
  },
  {
    id: 2,
    title: "AI & Machine Learning",
    description: "Integrate intelligent automation and predictive analytics into your workflow with our cutting-edge AI models.",
    Icon: Bot,
  },
  {
    id: 3,
    title: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure to power your applications and services, ensuring high availability and performance.",
    Icon: Cloud,
  },
  {
    id: 4,
    title: "Database Management",
    description: "Robust database design and management to ensure your data is organized, secure, and easily accessible.",
    Icon: Database,
  },
  {
    id: 5,
    title: "Business Intelligence",
    description: "Turn data into actionable insights with our BI tools, helping you make informed decisions to drive growth.",
    Icon: BarChart,
  },
  {
    id: 6,
    title: "ERP & CRM Systems",
    description: "Streamline your business processes with custom Enterprise Resource Planning and Customer Relationship Management solutions.",
    Icon: Briefcase,
  },
];

export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    title: "Expert Team",
    description: "Our team consists of experienced developers, designers, and strategists passionate about technology.",
  },
  {
    title: "Innovative Solutions",
    description: "We leverage the latest technologies, including AI, to build future-proof software.",
  },
  {
    title: "Client-Centric Approach",
    description: "We work closely with you to understand your goals and deliver solutions that exceed expectations.",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "AI-Powered Analytics",
    description: "A comprehensive dashboard for real-time data analysis and visualization.",
    imageId: "gallery-1",
  },
  {
    id: 2,
    title: "Predictive Modeling UI",
    description: "Intuitive interfaces for complex machine learning models.",
    imageId: "gallery-2",
  },
  {
    id: 3,
    title: "Cross-Platform App",
    description: "Seamless user experience across all devices, powered by a unified codebase.",
    imageId: "gallery-3",
  },
  {
    id: 4,
    title: "Scalable Cloud Architecture",
    description: "Robust and secure cloud backends that grow with your business.",
    imageId: "gallery-4",
  },
  {
    id: 5,
    title: "Developer API Toolkit",
    description: "Well-documented APIs that enable seamless third-party integrations.",
    imageId: "gallery-5",
  },
  {
    id: 6,
    title: "Agile Project Dashboard",
    description: "Kanban-style boards to track progress and streamline team collaboration.",
    imageId: "gallery-6",
  },
];
