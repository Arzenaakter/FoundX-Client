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

const NavbarDropdown = () => {
  const { user, setIsLoading } = useUser();
  const handleLogOut = () => {
    logoutUser();
    setIsLoading(true);
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
