<template>
  <div v-if="user && isLoggedIn">
    <div class="flex h-screen">
      <div class="flex flex-shrink-0">
        <div class="flex w-19 flex-col">
          <div class="flex min-h-0 flex-1 flex-col overflow-y-auto bg-gray-600">
            <div class="flex-1">
              <div class="flex flex-col items-center justify-center bg-gray-700 py-4">
                <img src="./../assets/logo.png" class="h-10 w-auto" />
                <div>
                  <small class="text-gray-400">v{{ version() }}</small>
                </div>
              </div>
              <nav aria-label="Sidebar" class="flex flex-col items-center space-y-3 py-3">
                <a
                  href="/workspace.html"
                  class="flex items-center p-4 text-gray-200 hover:bg-gray-700"
                >
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
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  <span class="sr-only">Home</span>
                </a>
                <a
                  href="/options.html"
                  class="flex items-center p-4 text-gray-200 hover:bg-gray-700"
                >
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
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>

                  <span class="sr-only">Settings</span>
                </a>
                <a
                  @click="$refs.aboutModal.open = true"
                  class="flex cursor-pointer items-center p-4 text-gray-200 hover:bg-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                    />
                  </svg>

                  <span class="sr-only">About</span>
                </a>
                <AboutInfo ref="aboutModal"></AboutInfo>
              </nav>
            </div>
            <div class="flex flex-shrink-0 pb-2">
              <a
                @click="logout"
                class="w-full cursor-pointer flex-shrink-0 py-5 text-gray-200 hover:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="mx-auto block w-6 h-6 rounded-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  ></path>
                </svg>
              </a>
            </div>
            <div class="flex flex-shrink-0 pb-5">
              <a class="w-full flex-shrink-0">
                <img
                  class="mx-auto block h-10 w-10 rounded-full"
                  :src="user.profile_photo_url"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="mobileSidebarOpen"
        class="relative z-40 lg:hidden"
        role="dialog"
        aria-modal="true"
      >
        <div class="fixed inset-0 bg-slate-600 bg-opacity-75"></div>
        <div class="fixed inset-0 z-40 flex">
          <div
            class="relative flex w-full max-w-xs flex-1 flex-col bg-white focus:outline-none"
          >
            <div class="absolute right-0 top-0 -mr-12 pt-4">
              <button
                type="button"
                @click="mobileSidebarOpen = !mobileSidebarOpen"
                class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span class="sr-only">Close sidebar</span>
                <svg
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div class="pb-4 pt-5">#todo</div>
          </div>
          <div class="w-14 flex-shrink-0" aria-hidden="true"></div>
        </div>
      </div>
      <div class="flex min-w-0 flex-1 flex-col">
        <div class="lg:hidden">
          <div
            class="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-1.5"
          >
            <div>
              <button
                @click="mobileSidebarOpen = !mobileSidebarOpen"
                type="button"
                class="-mr-3 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600"
              >
                <span class="sr-only">Open sidebar</span>
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
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="relative z-0 flex flex-1 overflow-hidden">
          <main
            class="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last"
          >
            <div v-if="selectedMolecule">
              <article>
                <div>
                  <div>
                    <img
                      class="h-32 w-full object-cover lg:h-48"
                      src="https://images.unsplash.com/photo-1674998201553-cc4134e7eecd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                      alt=""
                    />
                  </div>
                  <div
                    v-if="selectedMolecule"
                    class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"
                  >
                    <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                      <div
                        class="flex h-24 w-24 rounded-md border ring-4 ring-white sm:h-32 sm:w-32 overflow-hidden"
                      >
                        <Depictor2D
                          class=""
                          :molecule="selectedMolecule.cannonicalsmiles"
                        ></Depictor2D>
                      </div>
                      <div
                        class="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1"
                      >
                        <div class="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                          <h1 class="truncate text-2xl font-bold text-gray-900">
                            {{ selectedMolecule.iupac }}
                          </h1>
                        </div>
                        <div
                          class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0"
                        >
                          <button
                            type="button"
                            class="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="-ml-0.5 h-5 w-5 text-gray-400"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                              />
                            </svg>

                            Upload
                          </button>
                          <button
                            type="button"
                            class="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="-ml-0.5 h-5 w-5 text-gray-400"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3"
                              />
                            </svg>

                            Share
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
                      <h1 class="truncate text-2xl font-bold text-gray-900">
                        {{ selectedMolecule.iupac }}
                      </h1>
                    </div>
                  </div>
                </div>

                <div class="mt-6 sm:mt-2 2xl:mt-5">
                  <div class="border-b border-gray-200">
                    <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                      <nav class="-mb-px flex space-x-8" aria-label="Tabs">
                        <a
                          href="#"
                          class="border-pink-500 text-gray-900 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
                          aria-current="page"
                          >Info</a
                        >

                        <a
                          href="#"
                          class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
                          >NMR</a
                        >

                        <a
                          href="#"
                          class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
                          >MS</a
                        >
                      </nav>
                    </div>
                  </div>
                </div>
                <div
                  v-if="selectedMolecule"
                  class="mx-auto mt-6 max-w-5xl px-4 sm:px-6 lg:px-8"
                >
                  <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">Cannonical smiles</dt>
                      <dd class="mt-1 text-sm text-gray-900">
                        {{ selectedMolecule.cannonicalsmiles }}
                      </dd>
                    </div>

                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">InChI</dt>
                      <dd class="mt-1 text-sm text-gray-900">
                        {{ selectedMolecule.inchi }}
                      </dd>
                    </div>

                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">InChIKey</dt>
                      <dd class="mt-1 text-sm text-gray-900">
                        {{ selectedMolecule.inchikey }}
                      </dd>
                    </div>

                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">Molecular Weight</dt>
                      <dd class="mt-1 text-sm text-gray-900">
                        {{ selectedMolecule.descriptors.molecular_weight }}
                      </dd>
                    </div>

                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">ALogP</dt>
                      <dd class="mt-1 text-sm text-gray-900">
                        {{ selectedMolecule.descriptors.alogp }}
                      </dd>
                    </div>

                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">TPSA</dt>
                      <dd class="mt-1 text-sm text-gray-900">
                        {{ selectedMolecule.descriptors.topological_polar_surface_area }}
                      </dd>
                    </div>

                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">HBA (Lipinski)</dt>
                      <dd class="mt-1 text-sm text-gray-900">
                        {{
                          selectedMolecule.descriptors.hydrogen_bond_acceptors_lipinski
                        }}
                      </dd>
                    </div>

                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">HBD (Lipinski)</dt>
                      <dd class="mt-1 text-sm text-gray-900">
                        {{ selectedMolecule.descriptors.hydrogen_bond_donors_lipinski }}
                      </dd>
                    </div>

                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">
                        NP Likeliness Score
                      </dt>
                      <dd class="mt-1 text-sm text-gray-900">
                        {{ selectedMolecule.descriptors.nplikeliness }}
                      </dd>
                    </div>

                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">
                        NP Likeliness Score
                      </dt>
                      <dd class="mt-1 text-sm text-gray-900">
                        {{ selectedMolecule.descriptors.nplikeliness }}
                      </dd>
                    </div>

                    <div class="sm:col-span-1">
                      <dt class="text-sm font-medium text-gray-500">3D</dt>
                      <dd class="mt-1 text-sm text-gray-900">
                        <Depictor3D
                          class="w-full"
                          :molecule="selectedMolecule.cannonicalsmiles"
                        ></Depictor3D>
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
            </div>
            <div v-else>
              <ImportData />
            </div>
          </main>
          <aside
            v-if="sidebarOpen"
            class="hidden lg:order-first lg:block lg:flex-shrink-0"
          >
            <div
              class="relative flex h-full lg:w-64 xl:w-96 flex-col border-r border-gray-200 bg-gray-100"
            >
              <div class="flex-shrink-0 border-b">
                <div class="flex h-16 flex-col justify-center bg-white px-6">
                  <div>
                    <p>
                      <small>Welcome!</small>
                    </p>
                    <p class="text-md truncate font-medium text-gray-900 w-full">
                      {{ user.name }}
                    </p>
                    <p class="text-sm font-medium text-gray-500 w-full">
                      <span v-if="this.projects.length > 0">
                        {{ this.projects.length }} Sources
                      </span>
                      <span v-if="processing" class="float-right"
                        ><svg
                          class="animate-spin -ml-1 mr-3 h-5 w-5 text-dark"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            class="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="4"
                          ></circle>
                          <path
                            class="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path></svg
                      ></span>
                      <span v-if="currentPage && !processing" class="float-right">
                        <a
                          class="cursor-pointer hover:text-blue-500"
                          @click="clearSelection()"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-4 h-4 inline"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>

                          Clear</a
                        >
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <nav
                v-if="projects.length > 0"
                aria-label="Message list"
                class="min-h-0 flex-1 overflow-y-auto"
              >
                <ul role="list" class="divide-y divide-gray-200 border-b border-gray-200">
                  <li
                    v-for="project in projects"
                    :key="project.reference"
                    class="relative"
                  >
                    <div
                      class="sticky top-0 z-10 border-b border-t border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
                    >
                      {{ project.url }}
                      <time
                        :datetime="project.created_at"
                        class="float-right mt-0.5 flex-shrink-0 text-xs whitespace-nowrap text-sm text-gray-500"
                        >{{ humanize(project.created_at) }}</time
                      >
                    </div>
                    <div v-for="page in project.pages" :key="page">
                      <div
                        @click="selectPage(page)"
                        :class="[ currentPage && currentPage.title == page.title ? 'bg-white' : '' , 'flex px-6 py-5 border-t justify-between space-x-3 cursor-pointer hover:bg-gray-50']"
                      >
                        <div class="min-w-0 flex-1">
                          <a class="block focus:outline-none">
                            <p class="truncate text-sm font-medium text-gray-900">
                              {{ page.title }}
                            </p>
                            <p class="truncate text-sm text-gray-500">
                              {{ page.href }}
                            </p>
                            <p class="text-sm mt-1 font-medium text-gray-500">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-5 h-5 inline"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z"
                                />
                              </svg>

                              {{ page.images.length }}
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
              <div class="p-5" v-else>
                <div class="w-full border-2 border-dashed border-gray-300 rounded-lg">
                  <span
                    type="button"
                    class="relative block w-full h-80 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span class="mt-2 block text-sm font-semibold text-gray-500"
                      >No&nbsp;collections&nbsp;yet</span
                    >
                  </span>
                </div>
              </div>
            </div>
          </aside>
          <aside
            class="hidden w-72 flex-shrink-0 border-r border-gray-200 lg:order-first lg:flex lg:flex-col"
          >
            <div class="flex justify-center items-center text-center" v-if="processing">
              <svg
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-dark"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
            <div
              class="py-3.5 px-3 border-b flex flex-col justify-between space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0"
            >
              <button
                type="button"
                @click="sidebarOpen = !sidebarOpen"
                class="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="-ml-0.5 h-5 w-5 text-gray-400"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </button>
              <a
                v-if="selectedMolecule"
                @click="importData"
                class="cursor-pointer flex items-center gap-x-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <svg
                  class="-ml-1.5 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                  ></path>
                </svg>
                Add
              </a>
            </div>
            <div class="px-6 pb-4 pt-6 border-b">
              <h2 class="text-lg font-medium text-gray-900">Database</h2>
              <p v-if="dbCount > 0" class="mt-1 text-sm text-gray-600">
                Search database of {{ dbCount }} molecules.
              </p>
              <p class="mt-1 text-sm text-gray-600" v-else>
                Get started by adding a new molecule.
              </p>
              <form v-if="dbCount > 0" class="mt-6 flex gap-x-4" action="#">
                <div class="min-w-0 flex-1">
                  <label for="search" class="sr-only">Search</label>
                  <div class="relative rounded-md shadow-sm">
                    <div
                      class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                    >
                      <svg
                        class="h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      name="search"
                      id="search"
                      class="block w-full rounded-md border-0 py-1.5 pl-10 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-500 sm:text-sm sm:leading-6"
                      placeholder="Search"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  class="inline-flex justify-center rounded-md bg-white px-3 py-2 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  <svg
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span class="sr-only">Search</span>
                </button>
              </form>
            </div>
            <nav class="min-h-0 flex-1 overflow-y-auto" aria-label="Directory">
              <div v-if="currentPage && currentPageMolecules" class="relative">
                <div
                  class="sticky top-0 z-10 border-b border-t border-gray-200 bg-gray-50 px-6 py-1 text-sm font-medium text-gray-500"
                >
                  <h3 class="truncate">{{ currentPage.title }}</h3>
                </div>
                <ul role="list" class="relative z-0 divide-y divide-gray-200">
                  <li
                    class="cursor-pointer"
                    v-for="mol in currentPageMolecules"
                    :key="mol"
                  >
                    <div
                      @click="selectMolecule(mol)"
                      class="relative items-center space-x-3 px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500 hover:ring-pink-500"
                    >
                      <Depictor2D :molecule="mol"></Depictor2D>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                v-if="dbCount > 0 && !(currentPage && currentPageMolecules)"
                class="relative"
              >
                <ul role="list" class="relative z-0 divide-y divide-gray-200">
                  <li
                    class="cursor-pointer"
                    v-for="mol in Object.values(molecules)"
                    :key="mol"
                  >
                    <div
                      @click="selectMolecule(mol.cannonicalsmiles)"
                      class="relative items-center space-x-3 px-6 py-5 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink-500 hover:ring-pink-500"
                    >
                      <Depictor2D :molecule="mol.cannonicalsmiles"></Depictor2D>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </aside>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <img src="./../assets/logo.png" class="mx-auto h-16 w-auto" />
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          <a class="font-medium text-blue-600 hover:text-blue-500"
            >to unlock the following awesome features</a
          >
        </p>
      </div>
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white border shadow sm:rounded-lg">
          <div>
            <div class="p-8">
              <ul class="pt-2 text-lg">
                <li>
                  <svg
                    class="inline"
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.875 13.125l3 3 6.75-6.75"
                      stroke="#15C39A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  Personal projects
                </li>
                <li>
                  <svg
                    class="inline"
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.875 13.125l3 3 6.75-6.75"
                      stroke="#15C39A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  Save and access your chemical annotations
                </li>
                <li>
                  <svg
                    class="inline"
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.875 13.125l3 3 6.75-6.75"
                      stroke="#15C39A"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                  Get weekly performance statistics and tips
                </li>
              </ul>
              <a
                @click="register()"
                class="cursor-pointer mt-5 flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Sign Up
              </a>
            </div>
          </div>
          <div class="p-6 bg-gray-100 border-t mt-2 md:px-8">
            Already have an account?<br />
            <a
              @click="login()"
              class="cursor-pointer text-base font-medium text-green-700 hover:text-green-600"
            >
              Login<span aria-hidden="true"> →</span></a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Depictor2D from "./components/Depictor2D.vue";
import Depictor3D from "./components/Depictor3D.vue";
import AboutInfo from "./components/AboutInfo.vue";
import ImportData from "./components/ImportData.vue";

export default {
  components: {
    Depictor2D,
    Depictor3D,
    AboutInfo,
    ImportData,
  },
  mounted() {
    // this.clearData('jobs');
    // this.clearData('chem_projects');
    // this.clearData('chem_db');

    chrome.storage.local.get("chem_user", (obj) => {
      if (obj.chem_user) {
        this.user = JSON.parse(obj.chem_user);
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });

    chrome.storage.local.get("chem_projects", (obj) => {
      if (obj.chem_projects) {
        this.projects = JSON.parse(obj.chem_projects);
        if (this.projects.length == 0) {
          this.sidebarOpen = false;
        }
      } else {
        this.sidebarOpen = false;
      }
    });

    chrome.storage.local.get("chem_db", (obj) => {
      if (obj.chem_db) {
        this.molecules = obj.chem_db;
        let keys = Object.keys(this.molecules);
        this.dbCount = keys.length;
        // this.selectedMolecule = this.molecules[keys[0]];
      }
    });

    chrome.storage.local.get("jobs", (obj) => {
      let jobs = obj.jobs;
      if (jobs) {
        // this.processing = true;
        jobs.forEach((job) => {
          if (job) {
            let url = new URL(job.url);
            let _project = this.projects.filter((p) => p.url == url.host)[0];
            if (this.projects.length > 0 && _project) {
              _project.updated_at = new Date().toISOString();
              _project.jobs.push(job);
              _project.favicon = job.favicon;
              let _page = _project.pages.filter((p) => p.href == url.href)[0];
              if (_page) {
                _project.pages.forEach((p) => {
                  if (p.href == url.href) {
                    p.images = p.images.concat(job.src);
                    p.images = p.images.filter(
                      (v, i, a) => a.findIndex((v2) => v2.src === v.src) === i
                    );
                  }
                });
                this.loadAction(_page)
              } else {
                let page = {
                  title: job.title,
                  href: url.href,
                  images: job.src,
                }
                _project.pages.push(page);
                this.loadAction(page)
              }
              _project.status = "pending";
            } else {
              let project = {};
              project.created_at = new Date().toISOString();
              project.updated_at = new Date().toISOString();
              project.url = url.host;
              project.jobs = [job];
              let page = {
                  title: job.title,
                  href: url.href,
                  images: job.src,
              }
              project.pages = [
                page
              ];
              project.favicon = job.favicon;
              project.status = "pending";
              this.projects.push(project);
              this.loadAction(page)
            }
          }
        });
        this.setData("chem_projects", JSON.stringify(this.projects));
        this.clearData("jobs");

        // let recentJob = jobs.pop();
        // this.setData('jobs', jobs);

        // chrome.storage.local.get("pending_jobs", (data) => {
        //   let pending_jobs = data.pending_jobs
        //   let pending_job_valid = true;
        //   pending_jobs.forEach(j => {
        //     if(recentJob.reference == j.reference){
        //       pending_job_valid = false
        //     }
        //   })

        //   if(){

        //   }else{
        //     pending_jobs.push(recentJob)
        //     this.setData('pending_jobs', pending_jobs);
        //   }
        // });
      }
    });
  },
  data() {
    return {
      isLoggedIn: false,
      user: null,
      sources: [],
      processing: false,
      projects: [],
      currentPage: null,
      selectedMolecule: null,
      molecules: {},
      dbCount: 0,
      sidebarOpen: false,
      displayAboutModal: false,
      mobileSidebarOpen: false,
    };
  },
  computed: {
    currentPageMolecules() {
      let mols = [];
      this.currentPage.images.forEach((i) => {
        mols = mols.concat(i.smiles);
      });
      return [...new Set(mols)];
    },
  },
  methods: {
    loadAction(page){
      const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      });
      if(params.action == 'collection'){
        this.sidebarOpen = true;
        this.selectPage(page)
        window.history.replaceState(null, null, window.location.pathname);
      }
    },
    clearSelection() {
      this.currentPage = null;
    },
    selectMolecule(mol) {
      // this.selectedMolecule = null
      this.fetchMoleculeData(mol).then((response) => {
        let _molecule = response.data;
        let localMolecule = this.molecules[_molecule.inchikey];
        if (!localMolecule) {
          this.fetchMoleculeDescriptors(mol).then((response) => {
            _molecule.descriptors = response.data;
            this.molecules[_molecule.inchikey] = _molecule;
            this.selectedMolecule = _molecule;
            this.setData("chem_db", this.molecules);
          });
        } else {
          this.selectedMolecule = localMolecule;
        }
      });
    },
    fetchMoleculeData(mol) {
      return axios.get("https://api.naturalproducts.net/convert/convert?smiles=" + mol);
    },
    fetchMoleculeDescriptors(mol) {
      return axios.get(
        "https://dev.api.naturalproducts.net/chem/descriptors?smiles=" + mol
      );
    },
    importData() {
      this.selectedMolecule = null;
    },
    selectPage(page) {
      this.currentPage = page;
      page.images.forEach((img) => {
        if (img.smiles && img.smiles.length > 0) {
          console.log("image processed");
        } else {
          this.processImg(img);
        }
      });
    },
    humanize(date_str) {
      let month = [
        "January",
        "Feburary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let date_arr = date_str.split("-");
      return (
        month[Number(date_arr[1]) - 1] +
        " " +
        Number(date_arr[2].split("T")[0]) +
        ", " +
        date_arr[0]
      );
    },
    login() {
      chrome.runtime.sendMessage({ action: "_chem_user_signin" }, () => {});
    },
    register() {
      chrome.runtime.sendMessage({ action: "register_chem_user" }, () => {});
    },
    version() {
      if (typeof browser === "undefined") {
        var browser = chrome;
      }
      return browser.runtime.getManifest().version;
    },
    logout() {
      chrome.storage.local.clear(() => {
        var error = chrome.runtime.lastError;
        if (error) {
          // console.error(error);
        } else {
          this.isLoggedIn = false;
        }
      });
    },
    setData(key, value, window) {
      let data = {};
      if (window) {
        data[window + "_" + key] = value;
      } else {
        data[key] = value;
      }
      return new Promise((resolve, reject) =>
        chrome.storage.local.set(data, () =>
          chrome.runtime.lastError
            ? reject(Error(chrome.runtime.lastError.message))
            : resolve(value)
        )
      );
    },
    clearData(key, window) {
      if (key) {
        if (window) {
          key = window + "_" + key;
        }
        return new Promise((resolve, reject) => {
          chrome.storage.local.remove(key, function () {
            var error = chrome.runtime.lastError;
            if (error) {
              reject(Error(chrome.runtime.lastError.message));
            } else {
              resolve();
            }
          });
        });
      } else {
        return new Promise((resolve, reject) => {
          chrome.storage.local.clear(function () {
            var error = chrome.runtime.lastError;
            if (error) {
              reject(Error(chrome.runtime.lastError.message));
            } else {
              resolve();
            }
          });
        });
      }
    },
    saveProjects() {
      this.setData("chem_projects", JSON.stringify(this.projects));
    },
    processImg(img) {
      let url = img.src;
      this.toDataURL(url, (imgDataURL) => {
        this.processing = true;
        if (imgDataURL) {
          axios
            .post("https://api.naturalproducts.net/decimer/process", {
              reference: "chem_instance_",
              path: url,
              img: imgDataURL,
            })
            .then((response) => {
              let smiles = [...new Set(response.data.smiles)].filter((n) => n);
              img.smiles = smiles;
              this.saveProjects();
              this.processing = false;
            });
        } else {
          axios
            .post("https://api.naturalproducts.net/decimer/process", {
              reference: "chem_instance_",
              path: url,
            })
            .then((response) => {
              let smiles = [...new Set(response.data.smiles)].filter((n) => n);
              img.smiles = smiles;
              this.saveProjects();
              this.processing = false;
            });
        }
      });
    },
    async toDataURL(url, done) {
      var xhr = new XMLHttpRequest();
      xhr.open("get", url);
      xhr.responseType = "blob";
      xhr.onload = function () {
        var fr = new FileReader();

        fr.onload = function () {
          done(this.result);
        };

        fr.readAsDataURL(xhr.response); // async call
      };
      xhr.onerror = function () {
        done(this.result);
      };
      xhr.send();
    },
  },
};
</script>
