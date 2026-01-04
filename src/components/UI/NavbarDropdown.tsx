"use client";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { Avatar } from "@heroui/avatar";
import Link from "next/link";

const NavbarDropdown = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar name="Arzena" />
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

        <DropdownItem key="logout">Logout</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default NavbarDropdown;
