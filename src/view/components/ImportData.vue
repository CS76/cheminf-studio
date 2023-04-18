<template>
  <div v-if="!optionSelected">
    <div class="bg-white h-screen flex items-center justify-center p-12">
      <div class="py-12">
        <div class="mx-auto max-w-2xl px-4">
          <div>
            <h2 class="text-base font-semibold leading-6 text-gray-900">
              ChemInf-Studio: Import Molecules
            </h2>
            <p class="mt-1 text-sm text-gray-500">
              Get started by selecting an option below or start the tour.
            </p>
            <ul
              role="list"
              class="mt-6 grid grid-cols-1 gap-6 border-t border-gray-200 pt-6 sm:grid-cols-2"
            >
              <li class="flow-root">
                <div
                  class="relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 focus-within:ring-indigo-500 hover:bg-gray-50"
                >
                  <div
                    class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-pink-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                      />
                    </svg>
                  </div>
                  <div class="cursor-pointer" @click="initialiseStructureEditor()">
                    <h3 class="text-sm font-medium text-gray-900">
                      <a class="focus:outline-none">
                        <span class="absolute inset-0" aria-hidden="true"></span>
                        <span>Draw structure</span>
                        <span aria-hidden="true"> →</span>
                      </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">
                      Manually draw structure using OpenChemLib Chemical Structure Editor
                    </p>
                  </div>
                </div>
              </li>

              <li class="flow-root">
                <div
                  class="relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 focus-within:ring-indigo-500 hover:bg-gray-50"
                >
                  <div
                    class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-yellow-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="h-6 w-6 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-sm font-medium text-gray-900">
                      <a href="#" class="focus:outline-none">
                        <span class="absolute inset-0" aria-hidden="true"></span>
                        <span>Create from clipboard</span>
                        <span aria-hidden="true"> →</span>
                      </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">
                      Copy paste MOL/SDF block or SMILES to create molecule
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <ul
              v-bind="getRootProps()"
              role="list"
              class="mt-6 grid grid-cols-1 gap-6 border-b border-t border-gray-200 py-6 sm:grid-cols-2"
            >
              <li class="flow-root">
                <div
                  class="relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 focus-within:ring-indigo-500 hover:bg-gray-50"
                >
                  <div
                    class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-green-500"
                  >
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
                        d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-sm font-medium text-gray-900">
                      <a href="#" class="focus:outline-none">
                        <span class="absolute inset-0" aria-hidden="true"></span>
                        <span>OSR</span>
                        <span aria-hidden="true"> →</span>
                      </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">
                      Recognise structures from images using DECIMER
                    </p>
                  </div>
                </div>
              </li>

              <li class="flow-root">
                <div
                  class="relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 focus-within:ring-indigo-500 hover:bg-gray-50"
                >
                  <div
                    class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-sm font-medium text-gray-900">
                      <a href="#" class="focus:outline-none">
                        <span class="absolute inset-0" aria-hidden="true"></span>
                        <span>SDF or MOL file</span>
                        <span aria-hidden="true"> →</span>
                      </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">
                      Import multiple molecules - dragging & dropping .mol or .sdf files
                    </p>
                  </div>
                </div>
              </li>
              <input v-bind="getInputProps()" />
            </ul>
            <ul
              role="list"
              class="mt-6 grid grid-cols-1 gap-6 border-b border-gray-200 pb-6 sm:grid-cols-2"
            >
              <li class="flow-root">
                <div
                  class="cursor-not-allowed relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 focus-within:ring-indigo-500 hover:bg-gray-50"
                >
                  <div
                    class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-sm font-medium text-gray-900">
                      <a href="#" class="focus:outline-none">
                        <span class="absolute inset-0" aria-hidden="true"></span>
                        <span>Chemical Named Entity Recognition</span>
                        <span aria-hidden="true"> →</span>
                      </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">
                      Use the in-page options to auto extract chemical data
                    </p>
                  </div>
                </div>
              </li>

              <li class="flow-root">
                <div
                  class="relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 focus-within:ring-indigo-500 hover:bg-gray-50"
                >
                  <div
                    class="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-purple-500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 text-white"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="text-sm font-medium text-gray-900">
                      <a href="#" class="focus:outline-none">
                        <span class="absolute inset-0" aria-hidden="true"></span>
                        <span>Deposition Guides</span>
                        <span aria-hidden="true"> →</span>
                      </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">
                      Upload you data to repositories for long term storage and finability
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <div class="mt-4 flex">
              <a
                href="#"
                class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                Or start tour
                <span aria-hidden="true"> →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div v-if="displayStructureEditor">
      <div class="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
        <div
          class="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200"
        >
          <div class="min-w-0 flex-1">
            <nav
              aria-label="Breadcrumbs"
              class="order-first mb-2 flex space-x-2 text-sm font-semibold"
            >
              <a class="text-slate-500 hover:text-slate-600" href="/workspace.html"
                >ChemInf-Studio</a
              >
              <div aria-hidden="true" class="select-none text-slate-400">/</div>
              <a class="text-slate-500 hover:text-slate-600">Import</a>
              <div aria-hidden="true" class="select-none text-slate-400">/</div>
              <a class="text-slate-500 hover:text-slate-600">Draw Structure</a>
            </nav>
            <div class="flex items-center">
              <div>
                <div class="flex items-center">
                  <h1
                    class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9"
                  >
                    Manual Entry
                  </h1>
                </div>
                <dl class="mt-6 flex flex-col sm:mt-1 sm:flex-row sm:flex-wrap">
                  <dd
                    class="flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6"
                  >
                    <svg
                      class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 16.5v-13h-.25a.75.75 0 010-1.5h12.5a.75.75 0 010 1.5H16v13h.25a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75v-2.5a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v2.5a.75.75 0 01-.75.75h-3.5a.75.75 0 010-1.5H4zm3-11a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM7.5 9a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM11 5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm.5 3.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Manually draw structure using OpenChemLib Chemical Structure Editor
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="mt-6 flex space-x-3 md:ml-4 md:mt-0">
            <a
              type="button"
              href="https://docs.nmrium.org/help/ocl/"
              target="_blank"
              class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Tutorial
            </a>
            <a
              type="button"
              class="inline-flex items-center rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
            >
              Save
            </a>
          </div>
        </div>
      </div>
      <div class="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
        <div class="mt-4 p-4 rounded-lg border border-gray-200 bg-white shadow-sm">
          <div
            id="structureEditor"
            class="w-full border rounded-md h-80"
            style="height: 60vh"
          />

          <div class="mt-2 text-sm text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="-mt-1 w-5 h-5 inline"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              /></svg
            >&nbsp;
            <p class="inline">Paste SMILES or SDF/MOL block</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="displayFileContents">
      <div class="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
        <div
          class="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200"
        >
          <div class="min-w-0 flex-1">
            <nav
              aria-label="Breadcrumbs"
              class="order-first mb-2 flex space-x-2 text-sm font-semibold"
            >
              <a class="text-slate-500 hover:text-slate-600" href="/workspace.html"
                >ChemInf-Studio</a
              >
              <div aria-hidden="true" class="select-none text-slate-400">/</div>
              <a class="text-slate-500 hover:text-slate-600">Import</a>
              <div aria-hidden="true" class="select-none text-slate-400">/</div>
              <a class="text-slate-500 hover:text-slate-600">SDF / MOL file</a>
            </nav>
            <div class="flex items-center">
              <div>
                <div class="flex items-center">
                  <h1
                    class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9"
                  >
                    SDF / MOL file import
                  </h1>
                </div>
                <dl class="mt-6 flex flex-col sm:mt-1 sm:flex-row sm:flex-wrap">
                  <dd
                    class="flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6"
                  >
                    <svg
                      class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 16.5v-13h-.25a.75.75 0 010-1.5h12.5a.75.75 0 010 1.5H16v13h.25a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75v-2.5a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v2.5a.75.75 0 01-.75.75h-3.5a.75.75 0 010-1.5H4zm3-11a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM7.5 9a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM11 5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm.5 3.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Import multiple molecules - dragging & dropping .mol or .sdf files
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="mt-6 flex space-x-3 md:ml-4 md:mt-0">
            <a
              type="button"
              href="https://docs.nmrium.org/help/ocl/"
              target="_blank"
              class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Tutorial
            </a>
            <a
              type="button"
              class="inline-flex items-center rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
            >
              Save
            </a>
          </div>
        </div>
      </div>
      <div class="px-4 mb-12 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
        <div class="mt-4 p-4 rounded-lg border border-gray-200 bg-white shadow-sm">
          <ul
            role="list"
            class="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-2"
          >
            <li v-for="mol in molecules" :key="mol" class="relative m-2">
              <div
                @click="selectMolecule(mol)"
                :class="[
                  selectedMolecule && mol.id == selectedMolecule.id
                    ? 'ring ring-offset-2'
                    : '',
                  'p-2 aspect-w-10 aspect-h-7 group block w-full overflow-hidden rounded-lg bg-gray-100',
                ]"
              >
                <Depictor2D
                  :height="512"
                  :width="512"
                  :molecule="mol.toSmiles()"
                ></Depictor2D>
                <button type="button" class="absolute inset-0 focus:outline-none">
                  <span class="sr-only">View details for IMG_4985.HEIC</span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-if="displayImageContents">
      <div class="px-4 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
        <div
          class="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200"
        >
          <div class="min-w-0 flex-1">
            <nav
              aria-label="Breadcrumbs"
              class="order-first mb-2 flex space-x-2 text-sm font-semibold"
            >
              <a class="text-slate-500 hover:text-slate-600" href="/workspace.html"
                >ChemInf-Studio</a
              >
              <div aria-hidden="true" class="select-none text-slate-400">/</div>
              <a class="text-slate-500 hover:text-slate-600">Import</a>
              <div aria-hidden="true" class="select-none text-slate-400">/</div>
              <a class="text-slate-500 hover:text-slate-600">Image file</a>
            </nav>
            <div class="flex items-center">
              <div>
                <div class="flex items-center">
                  <h1
                    class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9"
                  >
                    OSR: DECIMER
                  </h1>
                </div>
                <dl class="mt-6 flex flex-col sm:mt-1 sm:flex-row sm:flex-wrap">
                  <dd
                    class="flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6"
                  >
                    <svg
                      class="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 16.5v-13h-.25a.75.75 0 010-1.5h12.5a.75.75 0 010 1.5H16v13h.25a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75v-2.5a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v2.5a.75.75 0 01-.75.75h-3.5a.75.75 0 010-1.5H4zm3-11a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM7.5 9a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM11 5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm.5 3.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Recognise structures from images using DECIMER
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div class="mt-6 flex space-x-3 md:ml-4 md:mt-0">
            <a
              type="button"
              href="https://docs.nmrium.org/help/ocl/"
              target="_blank"
              class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              Tutorial
            </a>
            <a
              type="button"
              class="inline-flex items-center rounded-md bg-cyan-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
            >
              Save
            </a>
          </div>
        </div>
      </div>
      <div class="px-4 mb-12 sm:px-6 lg:mx-auto lg:max-w-6xl lg:px-8">
        <div class="mt-4 p-4 rounded-lg border border-gray-200 bg-white shadow-sm">
          <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <div class="flex justify-center items-center h-full min-h-60 overflow-hidden">
              <img
                :src="uploadedImage.src"
                class="hover:scale-150 h-auto w-full sm:rounded-lg"
              />
            </div>
            <div class="flex flex-col-reverse" x-data="Components.tabs()">
              <div v-if="!imageParsed">
                <div
                  class="mx-auto mt-14 max-w-2xl sm:mt-16 lg:col-span-3 lg:row-span-2 lg:row-end-2 lg:mt-0 lg:max-w-none"
                >
                  <div class="flex flex-col-reverse">
                    <div class="mt-4">
                      <h1
                        class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl"
                      >
                        DECIMER API
                      </h1>
                      <p class="mt-2 text-sm text-gray-500">Version V2.2.0</p>
                    </div>
                  </div>

                  <p class="mt-3 text-gray-500">
                    Deep Learning for Chemical Image Recognition (DECIMER) is a step
                    towards automated chemical image segmentation and recognition. DECIMER
                    is actively developed and maintained by the Steinbeck group at the
                    Friedrich Schiller University Jena.
                  </p>

                  <div class="mt-5 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                    <span v-if="processing">
                      <button
                        type="button"
                        class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                      >
                        <svg
                          class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                        >&nbsp;Processing
                      </button>
                    </span>
                    <span v-else>
                      <button
                        type="button"
                        @click="parseImage()"
                        class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                      >
                        Extract Chemical Structures
                      </button>
                    </span>

                    <a
                      href="/workspace.html"
                      class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-50 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                    >
                      Cancel
                    </a>
                  </div>
                </div>
              </div>
              <div v-else>
                <div
                  id="parsedSmilesEditor"
                  class="w-full border rounded-md mb-2"
                  style="height: 400px"
                ></div>
                <ul
                  role="list"
                  class="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-2"
                >
                  <li v-for="mol in parsedSmiles" :key="mol" class="relative mt-2">
                    <div
                      @click="selectParsedSmiles(mol)"
                      :class="[
                        selectedMolecule && mol.id == selectedMolecule.id
                          ? 'ring ring-offset-2'
                          : '',
                        'p-2 aspect-w-10 aspect-h-7 group block w-full overflow-hidden rounded-lg border',
                      ]"
                    >
                      <Depictor2D :height="512" :width="512" :molecule="mol"></Depictor2D>
                      <button type="button" class="absolute inset-0 focus:outline-none">
                        <span class="sr-only">View details for IMG_4985.HEIC</span>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useDropzone } from "vue3-dropzone";
import OCL from "openchemlib/full";
import { ref, nextTick } from "vue";
import useHotkey from "vue3-hotkey";
import Depictor2D from "./Depictor2D.vue";
import axios from "axios";

export default {
  data() {
    return {
      showDropZone: false,
      selectedMolecule: null,
      parsedSmiles: [],
      imageParsed: false,
      processing: false,
      parsedSmilesEditor: null,
      selectedParsedSmiles: null,
    };
  },
  components: {
    Depictor2D,
  },
  setup() {
    const optionSelected = ref(false);
    const displayStructureEditor = ref(false);
    const editor = ref(null);

    const uploadedImage = new Image();

    function isValidHttpUrl(string) {
      let url;
      try {
        url = new URL(string);
      } catch (_) {
        return false;
      }
      return url.protocol === "http:" || url.protocol === "https:";
    }

    async function onTriggeredEventHandler() {
      try {
        const permission = await navigator.permissions.query({
          name: "clipboard-read",
        });
        if (permission.state === "denied") {
          throw new Error("Not allowed to read clipboard.");
        }
        const clipboardContents = await navigator.clipboard.readText();

        if (clipboardContents) {
          if (isValidHttpUrl(clipboardContents)) {
            uploadedImage.src = clipboardContents;
            optionSelected.value = true;
            displayImageContents.value = true;
          } else {
            if (/\r|\n/.exec(clipboardContents)) {
              optionSelected.value = true;
              displayStructureEditor.value = true;
              await nextTick();
              editor.value = OCL.StructureEditor.createSVGEditor("structureEditor", 1);
              editor.value.setMolFile(clipboardContents);
            } else {
              optionSelected.value = true;
              displayStructureEditor.value = true;
              await nextTick();
              editor.value = OCL.StructureEditor.createSVGEditor("structureEditor", 1);
              const npMolecule = OCL.Molecule.fromSmiles(clipboardContents);
              editor.value.setMolFile(npMolecule.toMolfileV3());
            }
          }
        }
      } catch (error) {
        console.error(error.message);
      }
    }

    async function initialiseStructureEditor(trigger = false) {
      if (trigger) {
        onTriggeredEventHandler();
      }
    }

    const hotkeys = ref([
      {
        keys: ["ctrl", "v"],
        preventDefault: true,
        handler() {
          initialiseStructureEditor(true);
        },
      },
      {
        keys: ["meta", "v"],
        preventDefault: true,
        handler() {
          initialiseStructureEditor(true);
        },
      },
    ]);
    useHotkey(hotkeys.value);

    const displayFileContents = ref(false);
    const displayImageContents = ref(false);
    const molecules = ref([]);

    const saveMolecules = (molecule) => {
      molecules.value.push(molecule);
    };

    function onDrop(acceptFiles, rejectReasons) {
      acceptFiles.forEach(function (file) {
        if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
          var reader = new FileReader();
          reader.onload = () => {
            uploadedImage.title = file.name;
            uploadedImage.src = reader.result;
            optionSelected.value = true;
            displayImageContents.value = true;
          };
          reader.readAsDataURL(file);
        } else {
          var reader = new FileReader();
          reader.onload = () => {
            var fileAsString = reader.result;
            const parser = new OCL.SDFileParser(fileAsString);
            let i = 0;
            while (parser.next()) {
              const OCLMolecule = parser.getMolecule();
              saveMolecules(OCLMolecule);
            }
            optionSelected.value = true;
            displayFileContents.value = true;
            fileAsString = null;
          };
          reader.readAsText(file);
        }
      });
      if (rejectReasons.length > 0) {
        console.log(rejectReasons);
      }
    }

    const { getRootProps, getInputProps, ...rest } = useDropzone({
      onDrop,
    });

    return {
      molecules,
      initialiseStructureEditor,
      displayStructureEditor,
      displayFileContents,
      displayImageContents,
      optionSelected,
      editor,
      getRootProps,
      getInputProps,
      uploadedImage,
      ...rest,
    };
  },
  props: {
    inline: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    selectParsedSmiles(mol) {
      if (mol) {
        this.selectedParsedSmiles = mol;
        if (this.selectedParsedSmiles) {
          this.parsedSmilesEditor.setSmiles(this.selectedParsedSmiles);
        }
      }
    },
    parseImage() {
      this.processing = true;

      if (this.uploadedImage && this.uploadedImage.src) {
        if (this.uploadedImage.src.indexOf("http") > -1) {
          let url = this.uploadedImage.src;
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
                  this.loadParsedSmiles(response);
                })
                .catch((err) => {
                  console.log(err);
                  this.processing = false;
                });
            }
          });
        } else {
          axios
            .post("https://api.naturalproducts.net/decimer/process", {
              reference: "chem_instance_",
              path: "path_not_available",
              img: this.uploadedImage.src,
            })
            .then((response) => {
              this.loadParsedSmiles(response);
            })
            .catch((err) => {
              console.log(err);
              this.processing = false;
            });
        }
      }
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
    loadParsedSmiles(response) {
      let smiles = [...new Set(response.data.smiles)].filter((n) => n);
      this.imageParsed = true;
      this.parsedSmiles = smiles;
      this.processing = false;
      if (smiles.length > 0) {
        this.selectedParsedSmiles = this.parsedSmiles[0];
        this.$nextTick(() => {
          this.parsedSmilesEditor = OCL.StructureEditor.createSVGEditor(
            "parsedSmilesEditor",
            1
          );
          if (this.selectedParsedSmiles) {
            this.parsedSmilesEditor.setSmiles(this.selectedParsedSmiles);
          }
        });
      }
    },
  },
};
</script>
