"use client"

import Link from "next/link"
import Image from "next/image"
import data from "../data/header.json"
import { Button } from "../../components/ui/button"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

const { navbar } = data

export default function Header() {
  return (
    <header className="bg-img" style={{ backgroundImage: "url('/images/Group 1000003294.png')", height: "100px" }}>
      <div>
        {/* Logo */}
        <div className="logo">
          <Image src="/images/Group.svg" alt="Logo" width={120} height={40} />
        </div>

        {/* Navigation */}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6 items-center">
            {navbar.map((nav, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink  asChild >
                  <Link href={nav.Link}>{nav.name}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Quote Button */}
        <Button className="!bg-transparent hover:!bg-transparent focus:!bg-transparent text-white">
          Call for a Quote
        </Button>
      </div>
    </header>
  )
}
