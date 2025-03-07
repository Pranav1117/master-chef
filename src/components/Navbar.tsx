"use client";
import Link from "next/link";
import { Outfit } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import * as Icons from "../components/icons";
import { menuItems } from "@/constants";
import SignIn from "@/app/auth/signin/page";
import { signIn, useSession } from "next-auth/react";

const inter = Outfit({ subsets: ["latin"], weight: "400" });

// TODO => check types error in this file
const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [showAvatarMenu, setShowAvatarMenu] = useState(false);
  // state to handle mobile toggle menu
  const [showMenu, setShowMenu] = useState(false);
  const [showLogInPopup, setShowLogInPopUp] = useState(false);
  const router = useRouter();
  const menuRef = useRef(null);
  const avatarMenuRef = useRef(null);
  const { data } = useSession();

  console.log("session", data);

  const toggleMenu = (index: number) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navigateSearchPage = () => {
    router.push("/search");
  };

  const toggleAvatarMenu = () => {
    setShowAvatarMenu(!showAvatarMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
      // Check why avatar menu is not getting close if clicked outside
      if (
        avatarMenuRef.current &&
        !avatarMenuRef.current.contains(event.target)
      ) {
        setShowAvatarMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full bg-black text-white px-10 py-2 flex justify-between items-center z-10 h-[10vh">
      <div className="flex items-center gap-20 cursor-pointer">
        <div className="flex gap-4 items-center">
          <button onClick={handleToggleMenu} className="p-2">
            {showMenu ? <Icons.CrossIcon /> : <Icons.HamburgerIcon />}
          </button>
          {/* mobile menu */}
          {showMenu && (
            <div
              className="absolute top-14 left-0 w-[400px] bg-black xl:hidden justify-between px-4"
              ref={menuRef}
            >
              {menuItems.map((item, index) => (
                <div key={index} className="relative cursor-pointer group">
                  <div
                    className="px-4 py-4 text-2xl border-b border-white mt-4"
                    onClick={() => toggleMenu(index)}
                  >
                    {item.title}
                  </div>
                  {item.submenu && activeMenu === index && (
                    <div
                      className="relative left-6 top-full  text-white shadow-md rounded-md w-full mt-2 z-50"
                      onMouseEnter={() => setActiveMenu(index)}
                    >
                      {item.submenu.map((sub, subIndex) => (
                        <a
                          key={subIndex}
                          href={sub.path}
                          className="block px-4 py-2 hover:text-green-600"
                        >
                          {sub.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          <Link
            href="/"
            className={`text-2xl font-bold cursor-pointer ${inter.className}`}
          >
            Master Chef
          </Link>
        </div>
        <div className="hidden xl:flex justify-between px-4" ref={menuRef}>
          {menuItems.map((item, index) => (
            <div key={index} className="relative cursor-pointer group">
              <div className="px-4 py-2" onClick={() => toggleMenu(index)}>
                {item.title}
              </div>
              {item.submenu && activeMenu === index && (
                <div
                  className="absolute left-0 top-full bg-gray-900 text-white shadow-md rounded-md w-48 mt-2 z-50"
                  onMouseEnter={() => setActiveMenu(index)}
                >
                  {item.submenu.map((sub, subIndex) => (
                    <Link
                      onClick={() => setActiveMenu(null)}
                      key={subIndex}
                      href={sub.path}
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex gap-4">
          <button onClick={navigateSearchPage}>
            <Icons.SearchIcon />
          </button>
          <button onClick={navigateSearchPage}>
            <Icons.BookMarkIcon.Save />
          </button>
          <button onClick={toggleAvatarMenu}>
            <Icons.ProfileIcon />
          </button>
          {showAvatarMenu ? (
            <div
              className="z-50 flex flex-col gap-4 p-4 absolute top-14 right-[1%] bg-black"
              ref={avatarMenuRef}
            >
              {/* TODO => check following ts ignore */}
              {/* @ts-ignore */}
              {Object.keys(data?.user) > 0 ? (
                <>
                  <Link href="/profile">
                    <div className="cursor-pointer ">Profile</div>
                  </Link>
                  <Link href="/addrecipe">
                    <div className="cursor-pointer ">Add Recipe</div>
                  </Link>
                  <Link href="/">
                    <div className="cursor-pointer ">Log out</div>
                  </Link>
                  <Link href="/auth/signin">
                    <div className="cursor-pointer ">Log In</div>
                  </Link>
                </>
              ) : (
                <Link href="/profile">
                  <div className="cursor-pointer ">Sign Up</div>
                </Link>
              )}
            </div>
          ) : null}
        </div>
      </div>
      {/* {showLogInPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md w-[400px]">
            <h2 className="text-xl font-bold text-center mb-4">Sign In</h2>
            <button
              onClick={() => SignIn()}
              className="w-full bg-red-500 text-white p-2 rounded-md"
            >
              Sign in with Google
            </button>
            <button
              onClick={() => setShowLogInPopUp(false)}
              className="mt-4 w-full bg-gray-300 text-black p-2 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Navbar;
