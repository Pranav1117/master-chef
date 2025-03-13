"use client";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";
import iceCreamImg from "../../../public/images/ice-cream.jpg";
import avatarImg from "../../../public/images/avatar-icon.png";

export default function Profile() {
  const { data } = useSession();

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Head>
        <title>User Profile</title>
      </Head>

      {/* Header */}
      <header className="flex items-center p-5 bg-gradient-to-r from-purple-600 to-blue-400 text-white">
        <div className="w-24 h-24 bg-red-400 flex items-center justify-center mr-5">
          <span className="text-4xl">
            <Image src={avatarImg} alt="avatar" />
          </span>
        </div>
        <div className="flex-grow">
          <p className="text-lg">{data?.user?.email}</p>
          <p className="text-sm text-gray-200">
            {/* @ts-ignore */}
            Joined {formatDate(data?.user?.dateJoined)}
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex p-5 gap-5">
        {/* Sidebar */}
        {/* <aside className="w-52 bg-white p-5 border-r border-gray-200">
          <h3 className="text-lg font-semibold mb-3">Filters</h3>
          <ul className="space-y-3">
            <li className="text-purple-600 cursor-pointer">Recipes</li>
            <li className="text-purple-600 cursor-pointer">Photos</li>
          </ul>
        </aside> */}

        {/* Activity Section */}
        <section className="flex-grow p-5 text-center">
          <h2 className="text-xl font-semibold mb-5">All Activity</h2>
          <div className="text-gray-600">
            {/* <span className="text-2xl mr-2"></span> */}
            <div className="text-lg flex justify-center items-center gap-4">
              <Image
                src={iceCreamImg}
                alt="no info"
                width={100}
                height={100}
                className="mix-blend-multiply"
              />
              UH OH! Looks like {data?.user?.email} has no activity!
            </div>
          </div>
        </section>

        {/* Ad Section */}
        <aside className="w-64 bg-pink-600 text-white p-5 text-center">
          <div className="flex flex-col gap-4">
            <p className="text-sm">amazon.in</p>
            <p className="text-lg font-semibold">
              Fashion picks for holi trendsetters
            </p>
            <p className="text-base">Up to 60% off*</p>
            <Link
              href="https://amazon.in"
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-white text-pink-600 px-4 py-2 rounded-md"
            >
              Shop now
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
