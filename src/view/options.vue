<template>
  <div>
    <div class="relative overflow-hidden bg-sky-700 pb-32">
      <nav
        class="bg-transparent relative z-10 border-b border-gray-500 border-opacity-25 lg:border-none lg:bg-transparent"
        x-state:on="Menu open"
        x-state:off="Menu closed"
        :class="{ 'bg-sky-900': open, 'bg-transparent': !open }"
      >
        <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
          <div
            class="relative flex h-16 items-center justify-between lg:border-b lg:border-sky-800"
          >
            <div class="flex items-center px-2 lg:px-0">
              <div class="flex-shrink-0">
                <img src="./../assets/logo.png" class="block h-8 w-auto" />
              </div>
              <div class="lg:ml-6 lg:space-x-4">
                <div class="flex align-right">
                  <a
                    href="/options.html"
                    class="mr-3 bg-black bg-opacity-25 rounded-md py-2 px-3 text-sm font-medium text-white"
                    x-state:on="Current"
                    x-state:off="Default"
                    x-state-description='Current: "bg-black bg-opacity-25", Default: "hover:bg-sky-800"'
                    >Settings</a
                  >

                  <a
                    href="/workspace.html"
                    class="mr-3 hover:bg-sky-800 rounded-md py-2 px-3 text-sm font-medium text-white"
                    x-state-description='undefined: "bg-black bg-opacity-25", undefined: "hover:bg-sky-800"'
                    >Workspace</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          x-description="Mobile menu, show/hide based on menu state."
          class="bg-sky-900 lg:hidden"
          id="mobile-menu"
          x-show="open"
          style="display: none"
        >
          <div class="space-y-1 px-2 pb-3 pt-2">
            <a
              href="#"
              class="bg-black bg-opacity-25 block rounded-md py-2 px-3 text-base font-medium text-dark"
              x-state:on="Current"
              x-state:off="Default"
              x-state-description='Current: "bg-black bg-opacity-25", Default: "hover:bg-sky-800"'
              >Dashboard</a
            >

            <a
              href="#"
              class="hover:bg-sky-800 block rounded-md py-2 px-3 text-base font-medium text-dark"
              x-state-description='undefined: "bg-black bg-opacity-25", undefined: "hover:bg-sky-800"'
              >Jobs</a
            >

            <a
              href="#"
              class="hover:bg-sky-800 block rounded-md py-2 px-3 text-base font-medium text-dark"
              x-state-description='undefined: "bg-black bg-opacity-25", undefined: "hover:bg-sky-800"'
              >Applicants</a
            >

            <a
              href="#"
              class="hover:bg-sky-800 block rounded-md py-2 px-3 text-base font-medium text-dark"
              x-state-description='undefined: "bg-black bg-opacity-25", undefined: "hover:bg-sky-800"'
              >Company</a
            >
          </div>
          <div class="border-t border-sky-800 pb-3 pt-4">
            <div class="flex items-center px-4">
              <div class="flex-shrink-0">
                <img
                  class="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=320&amp;h=320&amp;q=80"
                  alt=""
                />
              </div>
              <div class="ml-3">
                <div class="text-base font-medium text-dark">Debbie Lewis</div>
                <div class="text-sm font-medium text-sky-200">
                  debbielewis@example.com
                </div>
              </div>
              <button
                type="button"
                class="ml-auto flex-shrink-0 rounded-full p-1 text-sky-200 hover:bg-sky-800 hover:text-dark focus:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-sky-900"
              >
                <span class="sr-only">View notifications</span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  ></path>
                </svg>
              </button>
            </div>
            <div class="mt-3 px-2">
              <a
                href="#"
                class="block rounded-md px-3 py-2 text-base font-medium text-sky-200 hover:bg-sky-800 hover:text-dark"
                >Your Profile</a
              >

              <a
                href="#"
                class="block rounded-md px-3 py-2 text-base font-medium text-sky-200 hover:bg-sky-800 hover:text-dark"
                >Settings</a
              >

              <a
                href="#"
                class="block rounded-md px-3 py-2 text-base font-medium text-sky-200 hover:bg-sky-800 hover:text-dark"
                >Sign out</a
              >
            </div>
          </div>
        </div>
      </nav>
      <div
        aria-hidden="true"
        x-state:on="Menu open"
        x-state:off="Menu closed"
        class="inset-y-0 absolute inset-x-0 left-1/2 w-full -translate-x-1/2 transform overflow-hidden lg:inset-y-0"
        :class="{ 'bottom-0': open, 'inset-y-0': !open }"
      >
        <div class="absolute inset-0 flex">
          <div class="h-full w-1/2" style="background-color: #444"></div>
          <div class="h-full w-1/2" style="background-color: #333"></div>
        </div>
        <div class="relative flex justify-center">
          <svg class="flex-shrink-0" width="1750" height="308" viewBox="0 0 1750 308">
            <path
              d="M284.161 308H1465.84L875.001 182.413 284.161 308z"
              fill="#0369a1"
            ></path>
            <path d="M1465.84 308L16.816 0H1750v308h-284.16z" fill="#333"></path>
            <path d="M1733.19 0L284.161 308H0V0h1733.19z" fill="#444"></path>
            <path
              d="M875.001 182.413L1733.19 0H16.816l858.185 182.413z"
              fill="#222"
            ></path>
          </svg>
        </div>
      </div>
      <header class="relative py-10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold tracking-tight text-white">Settings</h1>
        </div>
      </header>
    </div>

    <main class="relative -mt-32">
      <div class="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
        <div class="overflow-hidden rounded-lg bg-white shadow">
          <div
            class="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-x lg:divide-y-0"
          >
            <aside class="py-6 lg:col-span-3">
              <nav class="space-y-1">
                <a
                  href="#"
                  class="border-gray-500 bg-gray-50 text-gray-700 hover:bg-gray-50 hover:text-gray-700 group flex items-center border-l-4 px-3 py-2 text-sm font-medium"
                  x-state:on="Current"
                  x-state:off="Default"
                  aria-current="page"
                  x-state-description='Current: "border-gray-500 bg-gray-50 text-gray-700 hover:bg-gray-50 hover:text-gray-700", Default: "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900"'
                >
                  <svg
                    class="text-gray-500 group-hover:text-gray-500 -ml-1 mr-3 h-6 w-6 flex-shrink-0"
                    x-state:on="Current"
                    x-state:off="Default"
                    x-state-description='Current: "text-gray-500 group-hover:text-gray-500", Default: "text-gray-400 group-hover:text-gray-500"'
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <span class="truncate">Profile</span>
                </a>

                <a
                  href="#"
                  class="border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900 group flex items-center border-l-4 px-3 py-2 text-sm font-medium"
                  x-state-description='undefined: "border-teal-500 bg-teal-50 text-teal-700 hover:bg-teal-50 hover:text-teal-700", undefined: "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900"'
                >
                  <svg
                    class="text-gray-400 group-hover:text-gray-500 -ml-1 mr-3 h-6 w-6 flex-shrink-0"
                    x-state-description='undefined: "text-teal-500 group-hover:text-teal-500", undefined: "text-gray-400 group-hover:text-gray-500"'
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z"
                    ></path>
                  </svg>
                  <span class="truncate">Integrations</span>
                </a>

                <a
                  href="#"
                  class="border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900 group flex items-center border-l-4 px-3 py-2 text-sm font-medium"
                  x-state-description='undefined: "border-teal-500 bg-teal-50 text-teal-700 hover:bg-teal-50 hover:text-teal-700", undefined: "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900"'
                >
                  <svg
                    class="text-gray-400 group-hover:text-gray-500 -ml-1 mr-3 h-6 w-6 flex-shrink-0"
                    x-state-description='undefined: "text-teal-500 group-hover:text-teal-500", undefined: "text-gray-400 group-hover:text-gray-500"'
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                    ></path>
                  </svg>
                  <span class="truncate">Privacy</span>
                </a>

                <a
                  href="#"
                  class="border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900 group flex items-center border-l-4 px-3 py-2 text-sm font-medium"
                  x-state-description='undefined: "border-teal-500 bg-teal-50 text-teal-700 hover:bg-teal-50 hover:text-teal-700", undefined: "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900"'
                >
                  <svg
                    class="text-gray-400 group-hover:text-gray-500 -ml-1 mr-3 h-6 w-6 flex-shrink-0"
                    x-state-description='undefined: "text-teal-500 group-hover:text-teal-500", undefined: "text-gray-400 group-hover:text-gray-500"'
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                    ></path>
                  </svg>
                  <span class="truncate">Terms and conditions</span>
                </a>
              </nav>
            </aside>

            <form
              class="divide-y divide-gray-200 bg-gray-100 lg:col-span-9"
              action="#"
              method="POST"
            >
              <div class="divide-y divide-white/5">
                <div
                  class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8"
                >
                  <div>
                    <h2 class="text-base font-semibold leading-7 text-dark">
                      Personal Information
                    </h2>
                    <p class="mt-1 text-sm leading-6 text-gray-400">
                      Use a permanent address where you can receive mail.
                    </p>
                  </div>

                  <form class="md:col-span-2">
                    <div
                      class="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6"
                    >
                      <div class="col-span-full flex items-center gap-x-8">
                        <img
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                          alt=""
                          class="h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover"
                        />
                        <div>
                          <!-- <button type="button" class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-dark shadow-sm hover:bg-white">Change avatar</button>
                    <p class="mt-2 text-xs leading-5 text-gray-400">JPG, GIF or PNG. 1MB max.</p> -->
                        </div>
                      </div>

                      <div class="sm:col-span-3">
                        <label
                          for="first-name"
                          class="block text-sm font-medium leading-6 text-dark"
                          >First name</label
                        >
                        <div class="mt-2">
                          <input
                            type="text"
                            name="first-name"
                            id="first-name"
                            autocomplete="given-name"
                            class="block w-full rounded-md border-0 bg-white py-1.5 text-dark shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div class="sm:col-span-3">
                        <label
                          for="last-name"
                          class="block text-sm font-medium leading-6 text-dark"
                          >Last name</label
                        >
                        <div class="mt-2">
                          <input
                            type="text"
                            name="last-name"
                            id="last-name"
                            autocomplete="family-name"
                            class="block w-full rounded-md border-0 bg-white py-1.5 text-dark shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div class="col-span-full">
                        <label
                          for="email"
                          class="block text-sm font-medium leading-6 text-dark"
                          >Email address</label
                        >
                        <div class="mt-2">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            autocomplete="email"
                            class="block w-full rounded-md border-0 bg-white py-1.5 text-dark shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>

                      <div class="col-span-full">
                        <label
                          for="username"
                          class="block text-sm font-medium leading-6 text-dark"
                          >Username</label
                        >
                        <div class="mt-2">
                          <div
                            class="flex rounded-md bg-white ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
                          >
                            <span
                              class="flex select-none items-center pl-3 text-gray-400 sm:text-sm"
                              >example.com/</span
                            >
                            <input
                              type="text"
                              name="username"
                              id="username"
                              autocomplete="username"
                              class="flex-1 border-0 bg-transparent py-1.5 pl-1 text-dark focus:ring-0 sm:text-sm sm:leading-6"
                              placeholder="janesmith"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- <div class="mt-8 flex">
                <button type="submit" class="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-dark shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Save</button>
              </div> -->
                  </form>
                </div>

                <div
                  class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8"
                >
                  <div>
                    <h2 class="text-base font-semibold leading-7 text-dark">
                      Delete account
                    </h2>
                    <p class="mt-1 text-sm leading-6 text-gray-400">
                      No longer want to use our service? You can delete your account here.
                      This action is not reversible. All information related to this
                      account will be deleted permanently.
                    </p>
                  </div>

                  <form class="flex items-start md:col-span-2">
                    <button
                      type="submit"
                      class="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-dark shadow-sm hover:bg-red-400"
                    >
                      Yes, delete my account
                    </button>
                  </form>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "optionsView",
  data() {
    return {
      msg: "options",
    };
  },
};
</script>

<style>
.main_app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
