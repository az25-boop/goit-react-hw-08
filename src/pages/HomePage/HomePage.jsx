// import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <div>
        <h1 className="text-3xl font-bold underline">
          😜 phonebook manager welcome page
          <span class="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-md shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          </span>
        </h1>
      </div>
      <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight"></h3>
      <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm"></p>
    </div>
  );
}
