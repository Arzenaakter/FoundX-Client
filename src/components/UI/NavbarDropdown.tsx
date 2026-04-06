"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { Avatar } from "@heroui/avatar";
import Link from "next/link";
import { Button } from "@heroui/button";
import { logoutUser } from "@/src/services/AuthService";
import { useUser } from "@/src/context/user.provider";
import { protectedRoutes } from "@/src/utils/constant";
import { usePathname, useRouter } from "next/navigation";

const NavbarDropdown = () => {
  const { user, setIsLoading } = useUser();
  const router = useRouter();
  const pathName = usePathname();

  const handleLogOut = () => {
    logoutUser();
    setIsLoading(true);
    if (protectedRoutes.some((route) => pathName.match(route))) {
      router.push("/");
    }
  };
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar name={user?.name} />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="profile" as={Link} href={"/profile"}>
          Profile
        </DropdownItem>

        <DropdownItem key="about" as={Link} href={"/profile/about"}>
          About
        </DropdownItem>
        <DropdownItem key="create-post" as={Link} href={"/profile/create-post"}>
          Create post
        </DropdownItem>

        <DropdownItem key="claim" as={Link} href={"/profile/claim-requests"}>
          Claim Requests
        </DropdownItem>

        <DropdownItem key="settings" as={Link} href={"/profile/settings"}>
          Settings
        </DropdownItem>

        <DropdownItem
          onClick={() => handleLogOut()}
          key="delete"
          className="text-danger"
          color="danger"
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavbarDropdown;
