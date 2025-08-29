"use client";

import * as React from "react";

import {
  UserGroupIcon,
  FolderOpenIcon,
  ClockIcon,
  ShareIcon,
  Squares2X2Icon,
  SparklesIcon,
  Cog6ToothIcon,
  InformationCircleIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Squares2X2Icon,
      isActive: true,
    },
    {
      title: "My Files",
      url: "/my-files",
      icon: FolderOpenIcon,
      isActive: true,
    },
    {
      title: "Shared with Me",
      url: "/shared-with-me",
      icon: ShareIcon,
      isActive: true,
    },
    {
      title: "Favorites",
      url: "/favorites",
      icon: SparklesIcon,
      isActive: true,
    },
    {
      title: "Recent",
      url: "/recent",
      icon: ClockIcon,
      isActive: true,
    },
    {
      title: "Folders",
      url: "/folders",
      icon: FolderOpenIcon,
      isActive: true,
      items: [
        {
          title: "Project Alpha",
          url: "/folders/project-alpha",
          items: [
            {
              title: "Design",
              url: "/folders/project-alpha/design",
            },
            {
              title: "Reports",
              url: "/folders/project-alpha/reports",
            },
          ],
        },
        {
          title: "Project Beta",
          url: "/folders/project-beta",
        },
      ],
    },
    {
      title: "Team Members",
      url: "/team-members",
      icon: UserGroupIcon,
      isActive: true,
    },
    {
      title: "Activity Logs",
      url: "/activity-logs",
      icon: ClockIcon,
      isActive: true,
    },
    {
      title: "Integrations",
      url: "/integrations",
      icon: ShareIcon,
      isActive: true,
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Cog6ToothIcon,
      isActive: true,
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: InformationCircleIcon,
    },
    {
      title: "Feedback",
      url: "#",
      icon: PaperAirplaneIcon,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
                <Image src="/logo.svg" alt="Filenion" width={34} height={34} />
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Filenion</span>
                  <span className="truncate text-xs">Dashboard</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
