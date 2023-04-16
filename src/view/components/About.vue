<template>
  <div>
    <div v-if="open">
      <div class="relative z-10" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity"></div>
        <div class="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
          <div
            class="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
          >
            <div class="px-4 py-3">
                <div class="sm:mx-auto mt-12 sm:w-full sm:max-w-md">
        <img src="./../../assets/logo.png" class="mx-auto h-16 w-auto" />
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          ChemInf - Studio
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          <a class="font-medium text-blue-600 hover:text-blue-500"
            >Version: {{ version() }}</a
          >
        </p>
        <p class="mt-2 mb-12 text-center text-sm text-gray-600">
          <a class="font-medium text-blue-600 hover:text-blue-500"
            >Developed and maintained by ChemInf team.</a
          >
        </p>
      </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6">
              <div>
                <div class="mt-2 sm:flex sm:items-start sm:justify-between">
                  <div class="max-w-xl text-sm text-gray-500">
                    <p class="text-sm leading-6 text-slate-500">
                      © 2023 ChemInf. All rights reserved.
                    </p>
                  </div>
                  <div
                    class="mt-5 sm:ml-6 sm:mt-0 sm:flex sm:flex-shrink-0 sm:items-center"
                  >
                    <button
                      @click="open = false"
                      type="button"
                      class="inline-flex items-center rounded-md bg-gray-200 px-3 py-2 text-sm font-semibold text-dark hover:text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      open: false,
    };
  },

  methods: {
    version(){
      if (typeof browser === "undefined") {
        var browser = chrome;
      }
      return browser.runtime.getManifest().version;
    },
  },
};
</script>
