"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Outfit } from "next/font/google";
import * as Icons from "../components/icons";

const inter = Outfit({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const menuRef = useRef(null);

  const toggleMenu = (index: number) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navigateSearchPage = () => {
    router.push("/search")
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems = [
    {
      title: "Recipes",
      submenu: [
        {
          title: "Breakfast & Brunch Recipes",
          path: "/recipes/breakfast-brunch",
        },
        { title: "Lunch Recipes", path: "/recipes/lunch" },
        {
          title: "Appetizers & Snack Recipes",
          path: "/recipes/appetizers-snacks",
        },
        { title: "Dinner Recipes", path: "/recipes/dinner" },
        { title: "Dessert Recipes", path: "/recipes/desserts" },
        { title: "Side Dish Recipes", path: "/recipes/side-dishes" },
        { title: "Grilling & BBQ Recipes", path: "/recipes/grilling-bbq" },
        { title: "Microwave Recipes", path: "/recipes/microwave" },
        { title: "Quick & Easy Recipes", path: "/recipes/quick-easy" },
        { title: "Slow-Cooker Recipes", path: "/recipes/slow-cooker" },
        { title: "Air Fryer Recipes", path: "/recipes/air-fryer" },
        { title: "Instant Pot Recipes", path: "/recipes/instant-pot" },
        { title: "Baking Recipes", path: "/recipes/baking" },
      ],
    },
    {
      title: "Popular",
      submenu: [
        { title: "Trending Now", path: "/recipes/trending" },
        { title: "Casserole Recipes", path: "/recipes/casserole" },
        { title: "Chili Recipes", path: "/recipes/chili" },
        { title: "Soup Recipes", path: "/recipes/soup" },
        { title: "Pasta Recipes", path: "/recipes/pasta" },
        { title: "Bread Recipes", path: "/recipes/bread" },
        { title: "Cookie Recipes", path: "/recipes/cookies" },
        { title: "Salad Recipes", path: "/recipes/salad" },
        { title: "Tofu Recipes", path: "/recipes/tofu" },
        { title: "Copycat Recipes", path: "/recipes/copycat" },
      ],
    },
    {
      title: "Meat & Seafood",
      submenu: [
        { title: "Chicken Recipes", path: "/recipes/chicken" },
        { title: "Salmon Recipes", path: "/recipes/salmon" },
        { title: "Pork Chop Recipes", path: "/recipes/pork" },
        { title: "Ground Beef Recipes", path: "/recipes/beef" },
        { title: "Shrimp Recipes", path: "/recipes/shrimp" },
      ],
    },
    {
      title: "Healthy & Diet",
      submenu: [
        { title: "Keto Recipes", path: "/recipes/keto" },
        { title: "Healthy Recipes", path: "/recipes/healthy" },
        {
          title: "Vegetarian Recipes",
          path: "/recipes/vegetarian",
        },
        { title: "Vegan Recipes", path: "/recipes/vegan" },
        {
          title: "Mediterranean Diet Recipes",
          path: "/recipes/mediterranean",
        },
        {
          title: "Weight Watchers Recipes",
          path: "/recipes/weight-watchers",
        },
        { title: "Low-Carb Recipes", path: "/recipes/low-carb" },
        {
          title: "Gluten-Free Recipes",
          path: "/recipes/gluten-free",
        },
      ],
    },
    {
      title: "Holidays",
      submenu: [
        {
          title: "Dinner Party Recipes",
          path: "/recipes/dinner-party",
        },
        { title: "Game Day Recipes", path: "/recipes/game-day" },
        {
          title: "Valentine's Day Recipes",
          path: "/recipes/valentines-day",
        },
        {
          title: "St. Patrick's Day Recipes",
          path: "/recipes/st-patricks-day",
        },
        { title: "Easter Recipes", path: "/recipes/easter" },
        {
          title: "Cinco de Mayo Recipes",
          path: "/recipes/cinco-de-mayo",
        },
        {
          title: "Mother's Day Recipes",
          path: "/recipes/mothers-day",
        },
        {
          title: "Memorial Day Recipes",
          path: "/recipes/memorial-day",
        },
        { title: "Juneteenth Recipes", path: "/recipes/juneteenth" },
        { title: "4th of July Recipes", path: "/recipes/4th-of-july" },
        { title: "Halloween Recipes", path: "/recipes/halloween" },
        {
          title: "Thanksgiving Recipes",
          path: "/recipes/thanksgiving",
        },
        { title: "Hanukkah Recipes", path: "/recipes/hanukkah" },
        { title: "Christmas Recipes", path: "/recipes/christmas" },
        { title: "New Year's Recipes", path: "/recipes/new-years" },
      ],
    },
    {
      title: "Cuisine",
      submenu: [
        { title: "Mexican Recipes", path: "/recipes/mexican" },
        { title: "Italian Recipes", path: "/recipes/italian" },
        { title: "Indian Recipes", path: "/recipes/indian" },
        { title: "Thai Recipes", path: "/recipes/thai" },
        { title: "Korean Recipes", path: "/recipes/korean" },
        { title: "French Recipes", path: "/recipes/french" },
        {
          title: "Latin American Recipes",
          path: "/recipes/latin-american",
        },
        { title: "Chinese Recipes", path: "/recipes/chinese" },
        { title: "Japanese Recipes", path: "/recipes/japanese" },
        { title: "Spanish Recipes", path: "/recipes/spanish" },
      ],
    },
    {
      title: "Seasonal",
      submenu: [
        { title: "Spring Recipes", path: "/recipes/spring" },
        { title: "Summer Recipes", path: "/recipes/summer" },
        { title: "Fall Recipes", path: "/recipes/fall" },
        { title: "Winter Recipes", path: "/recipes/winter" },
      ],
    },
  ];

  return (
    <div className="w-full bg-black text-white px-10 py-2 flex justify-between items-center z-10 h-[10vh">
      <div className="flex items-center gap-20 cursor-pointer">
        <div className="flex gap-4 items-center">
          <button onClick={handleToggleMenu} className="p-2">
            {showMenu ? <Icons.CrossIcon /> : <Icons.HamburgerIcon />}
          </button>
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
                    <a
                      key={subIndex}
                      href={sub.path}
                      className="block px-4 py-2 hover:bg-gray-700"
                    >
                      {sub.title}
                    </a>
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
          <button onClick={navigateSearchPage}>
            <Icons.ProfileIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
