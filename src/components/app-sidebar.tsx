"use client";
import * as React from "react";
import Logo1 from "@/assets/logo.png";
import {
  BookOpen,
  Bot,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
} from "lucide-react";
import { Inter } from "next/font/google";
import { NavMain } from "@/components/nav-main";
{
  /*  import { NavProjects } from "@/components/nav-projects"; */
}
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
import LetterSwapPingPong from "@/fancy/components/text/letter-swap-pingpong-anim";
import Link from "next/link";
const inter = Inter({subsets: ['latin']})
const data = {
  user: {
    name: "user",
    email: "user@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Automations",
      url: "/automations",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Integrations",
      url: "/integrations",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Docs",
      url: "/docs",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "/settings",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Help",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      {/* Header(Easyyy logo section begins) */}
      <SidebarHeader className="border-2 h-25 rounded-3xl">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className=" h-full rounded-2xl bg-[#27272A]"
              asChild
            >
              <Link href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-16 items-center justify-center rounded-4xl">
                  <Image className="" src={Logo1} alt="Image" />
                </div>
                <div className={`text ${inter.className} grid justify-items-start`}>
                  <LetterSwapPingPong
                    className="text-left"
                    label="one app ✨"
                    staggerFrom={"center"}
                  />
                  <LetterSwapPingPong
                    className="text-left"
                    label="for everything"
                    staggerFrom={"center"}
                  />
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      {/* Header(Easyyy logo section ends) */}

      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* not needed within the current scope of our app
          <NavProjects projects={data.projects} /> */}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>

      {/* Footer(User account section starts) */}
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      {/* Footer(User account section ends) */}
    </Sidebar>
  );
}
