import React from "react";

export default function ProfileCard() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-md w-full max-w-md">
      <div className="flex items-center gap-5">
        <div className="relative w-20 h-20">
          <img
            src="/avatar.gif"
            alt="avatar"
            className="w-full h-full rounded-xl object-cover bg-gray-100"
          />
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-yellow-400 border-4 border-white rounded-full"></div>
        </div>

        <div>
          <h2 className="text-xl font-semibold">va8v</h2>
          <p className="text-sm opacity-70">Anime lover</p>
        </div>
      </div>

      <div className="w-full h-px bg-gray-200 my-4"></div>

      <div className="flex gap-4">
        <a
          href="https://github.com/va8v"
          target="_blank"
          className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
        >
          <img src="/icons/github.png" className="w-6 h-6" />
        </a>

        <a
          href="https://kick.com/va8v"
          target="_blank"
          className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
        >
          <img src="/icons/kick.png" className="w-6 h-6" />
        </a>

        <a
          href="https://reddit.com/u/_Lxris"
          target="_blank"
          className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
        >
          <img src="/icons/reddit.png" className="w-6 h-6" />
        </a>

        <a
          href="https://modrinth.com/user/va8v"
          target="_blank"
          className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
        >
          <img src="/icons/modrinth.png" className="w-6 h-6" />
        </a>

        <a
          href="https://open.spotify.com/user/va8v"
          target="_blank"
          className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
        >
          <img src="/icons/spotify.png" className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
