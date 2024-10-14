import ThemeToggle from './ThemeToggle';
import FirstAmericanLogo from '/src/assets/FirstAmericanLogo.png';
import React from 'react';
import ProfilePicture from '/src/assets/ProfilePicture.png';
import {
  Navbar,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";

// Profile menu component
const profileMenuItems = [
  { label: "My Profile", icon: UserCircleIcon },
  { label: "Edit Profile", icon: Cog6ToothIcon },
  { label: "Inbox", icon: InboxArrowDownIcon },
  { label: "Help", icon: LifebuoyIcon },
  { label: "Sign Out", icon: PowerIcon },
];

// Nav list menu component
const navListMenuItems = [
  { title: "@news1", description: "Learn how to use @material-tailwind/html, packed with rich components and widgets." },
  { title: "@news2", description: "Learn how to use @material-tailwind/react, packed with rich components for React." },
  { title: "Material Tailwind PRO", description: "A complete set of UI Elements for building faster websites in less time." },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(({ title, description }) => (
    <a href="#" key={title}>
      <MenuItem>
        <Typography variant="h6" color="blue-gray" className="mb-1">{title}</Typography>
        <Typography variant="small" color="gray" className="font-normal">{description}</Typography>
      </MenuItem>
    </a>
  ));

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" /> Pages
              <ChevronDownIcon strokeWidth={2} className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`} />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid">
          <Card color="blue" shadow={false} variant="gradient" className="col-span-3 grid h-full w-full place-items-center rounded-md">
            <RocketLaunchIcon strokeWidth={1} className="h-28 w-28" />
          </Card>
          <ul className="col-span-4 flex w-full flex-col gap-1">{renderItems}</ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" /> Pages
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">{renderItems}</ul>
    </React.Fragment>
  );
}

// Nav list component
const navListItems = [
  { label: "Account", icon: UserCircleIcon },
  { label: "Blocks", icon: CubeTransparentIcon },
  { label: "Docs", icon: CodeBracketSquareIcon },
];

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center mr-4 gap-2">
      <NavListMenu />
      {navListItems.map(({ label, icon }, key) => (
        <Typography key={label} as="a" href="#" variant="small" color="gray" className="font-medium text-blue-gray-500">
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })} <span className="text-white"> {label}</span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

function CustomNavBar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div>
      <div className='content flex py-2 items-center'>
        <img className="w-12 h-12 rounded-full object-left-top" src={FirstAmericanLogo} alt="First American Logo" />
        <Navbar className='dark:bg-dark dark:border-dark  items-center ml-96 flex justify-end text-white'>
          <div className="hidden lg:block ml-auto justify-evenly">
          
            <NavList />
          </div>
          <IconButton size="sm" color="blue-gray" variant="text" onClick={toggleIsNavOpen} className=" flex justify-end ml-auto mr-2 lg:hidden text-white">
            <Bars2Icon className="h-6 w-6" />
          </IconButton>
          <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler className ='min-w-32 h-16 flex items-center gap-4'>
              <Button variant="text" color="blue-gray" className="flex items-center gap-1 py-0.5 pr-2 pl-0.5 lg:ml-auto text-white">
                <ThemeToggle />
                <Avatar className="w-12 h-12 rounded-full" src={ProfilePicture} />
                <ChevronDownIcon strokeWidth={2.5} className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`} />
              </Button>
            </MenuHandler>
            <MenuList className="p-1 text-white dark:text-white">
              {profileMenuItems.map(({ label, icon }, key) => {
                const isLastItem = key === profileMenuItems.length - 1;
                return (
                  <MenuItem key={label} onClick={closeMenu} className={`flex items-center gap-2 rounded ${isLastItem ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10" : ""}`}>
                    {React.createElement(icon, { className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`, strokeWidth: 2 })}
                    <Typography as="span" variant="small" className="font-normal" color={isLastItem ? "red" : "inherit"}>
                      {label}
                    </Typography>
                  </MenuItem>
                );
              })}
            </MenuList>
          </Menu>
        </Navbar>
      </div>
    </div>
  );
}

export default CustomNavBar;
