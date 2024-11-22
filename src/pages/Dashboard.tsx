import { LogOut, Menu } from "lucide-react";
import logo_image from "@/assets/logo.png";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

export const description =
  "An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image.";

export const iframeHeight = "825px";

export const containerClassName = "w-full h-full";

export default function Dashboard() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky border top-0 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
        <nav className="flex  text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 ">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="flex flex-col w-[20rem] justify-between"
            >
              <nav className="grid gap-6  text-lg font-medium">
                <Link
                  to="/dashboard"
                  className="flex justify-center items-center gap-2 text-lg font-semibold"
                >
                  <img className=" w-36" src={logo_image} alt="" />
                </Link>
                <SheetTitle>
                  <Link
                    to="/dashboard"
                    onClick={() => setOpen(false)}
                    className=" md:inline hidden  justify-center items-center gap-2 text-lg font-semibold"
                  >
                    <h1 className="text-lg hidden md:inline-block  font-semibold">
                      Dashboard
                    </h1>
                  </Link>
                </SheetTitle>

                <Link
                  to="/dashboard/users"
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground   hover:text-foreground"
                >
                  Users
                </Link>
                <Link
                  to="/dashboard/influencers"
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground  hover:text-foreground"
                >
                  Influencers
                </Link>
              </nav>
              <Button onClick={() => navigate("/login")}>
                <LogOut /> Log out
              </Button>
            </SheetContent>
          </Sheet>
          <Link
            to="#"
            className=" justify-center hidden md:flex items-center gap-2 text-lg font-semibold"
          >
            <img className=" w-32" src={logo_image} alt="" />
          </Link>
        </nav>
        <Link to="#" className="flex md:hidden ">
          <img className=" w-32" src={logo_image} alt="" />
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate("/login")}>
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <Outlet />
      </main>
    </div>
  );
}
