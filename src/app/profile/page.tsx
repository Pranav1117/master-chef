import Head from "next/head";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Head>
        <title>User Profile</title>
      </Head>

      {/* Header */}
      <header className="flex items-center p-5 bg-gradient-to-r from-purple-600 to-blue-400 text-white">
        <div className="w-24 h-24 bg-red-400 flex items-center justify-center mr-5">
          <span className="text-4xl">😊</span>
        </div>
        <div className="flex-grow">
          <p className="text-lg">@pranavbavaskar1</p>
          <p className="text-sm text-gray-200">Joined 08/2023</p>
        </div>
        <div className="flex gap-5">
          <span>Followers <strong>0</strong></span>
          <span>Following <strong>0</strong></span>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex p-5 gap-5">
        {/* Sidebar */}
        <aside className="w-52 bg-white p-5 border-r border-gray-200">
          <h3 className="text-lg font-semibold mb-3">Filters</h3>
          <ul className="space-y-3">
            <li className="text-purple-600 cursor-pointer">Activity</li>
            <li className="text-purple-600 cursor-pointer">Recipes</li>
            <li className="text-purple-600 cursor-pointer">Photos</li>
            <li className="text-purple-600 cursor-pointer">Reviews</li>
            <li className="text-purple-600 cursor-pointer">Tweaks</li>
            <li className="text-purple-600 cursor-pointer">Questions</li>
          </ul>
        </aside>

        {/* Activity Section */}
        <section className="flex-grow p-5 text-center">
          <h2 className="text-xl font-semibold mb-5">All Activity</h2>
          <div className="text-gray-600">
            <span className="text-2xl mr-2">⚠️</span>
            <p className="text-lg">
              UH OH! Looks like pranavbavaskar1 has no activity!
            </p>
          </div>
        </section>

        {/* Ad Section */}
        <aside className="w-64 bg-pink-600 text-white p-5 text-center">
          <div>
            <p className="text-sm">amazon.in</p>
            <p className="text-lg font-semibold">Fashion picks for holi trendsetters</p>
            <p className="text-base">Up to 60% off*</p>
            <button className="mt-3 bg-white text-pink-600 px-4 py-2 rounded-md">
              Shop now
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}