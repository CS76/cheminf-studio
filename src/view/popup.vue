<template>
  <div>
    <div v-if="!isLoggedIn">
      <div class="flex-1 relative px-6 pb-0 pt-6 md:px-8">
        <div class="inline-block bg-white-600">
          <img src="./../assets/logo.png" class="h-10 w-10 mb-2" />
          <h2 class="text-xl font-medium text-gray-900">Cheminf Studio</h2>
          <p class="text-gray-500">is active, but key features are missing</p>
          <div class="mt-4 text-base text-dark">
            Sign up now to unlock the following awesome features:
            <ul class="pt-2 text-xs">
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
          </div>
        </div>
        <a
          @click="register()"
          class="cursor-pointer inline-flex items-center my-3 justify-center px-4 py-1 border border-transparent text-base font-small rounded-md text-white bg-green-500 hover:bg-green-700"
        >
          Sign Up
        </a>
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
    <div v-else>
      <div class="flex-1 relative px-6 pb-0 pt-6 md:px-8">
        <div class="inline-block bg-white-600">
          <img src="./../assets/logo.png" class="h-10 w-10inline" />
        </div>
        <div class="float-right">
          <a class="cursor-pointer" @click="logout()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 inline mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Logout</a
          >
        </div>
        <div class="mb-1 mt-3">
          <p class="text-sm font-medium text-gray-900">
            Hello, {{ user.first_name }}!
          </p>
          <div style="min-height: 200px">
            <a
              @click="openWorkSpace()"
              class="cursor-pointer inline-flex items-center my-3 justify-center px-4 py-1 border border-transparent text-base font-small rounded-md text-white bg-green-500 hover:bg-green-700"
            >
              Open WorkSpace
            </a>
          </div>
        </div>
      </div>
      <div class="p-6 bg-gray-100 border-t mt-2 md:px-8">
        Do you find this extension helpful? Send us your feedback<br />
        <a
          @click="login()"
          class="cursor-pointer text-base font-medium text-green-700 hover:text-green-600"
        >
          Feedback<span aria-hidden="true"> →</span></a
        >
      </div>
    </div>
  </div>
</template>
<script>
// import axios from "axios";

export default {
  name: "popupView",
  data() {
    return {
      isLoggedIn: false,
      projects: [],
      current_project: null,
      loading: true,
      status: false,
      user: null,
    };
  },
  mounted() {
    chrome.storage.local.get("chem_user", (obj) => {
      if (obj.chem_user) {
        this.user = JSON.parse(obj.chem_user);
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  },
  methods: {
    login() {
      chrome.runtime.sendMessage({ action: "_chem_user_signin" }, () => {});
    },
    register() {
      chrome.runtime.sendMessage({ action: "register_chem_user" }, () => {});
    },
    openWorkSpace(){
      chrome.runtime.sendMessage({ action: "open_workspace" }, () => {});
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
  },
  computed: {},
};
</script>

<style>
html {
  width: 350px;
  min-height: 300px;
}
</style>
