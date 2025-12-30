import type { LucideIcon } from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
};

export type WhatWeDoItem = {
  id: number;
  title: string;
  description: string;
  Icon: LucideIcon;
};

export type WhyChooseUsItem = {
  title: string;
  description: string;
};

export type GalleryItem = {
  id: number;
  title: string;
  description: string;
  imageId: string;
};
