<template>
  <div>
    <div class="relative overflow-hidden bg-sky-700 pb-32">
      <nav
        class="bg-transparent relative z-10 border-b border-gray-500 border-opacity-25 lg:border-none lg:bg-transparent"
        x-state:on="Menu open"
        x-state:off="Menu closed"
      >
        <div class="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
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
          style="display: none"
        >
          <div class="space-y-1 px-2 pb-3 pt-2">
            <a
              href="/options.html"
              class="bg-black bg-opacity-25 block rounded-md py-2 px-3 text-base font-medium text-dark"
              x-state:on="Current"
              x-state:off="Default"
              x-state-description='Current: "bg-black bg-opacity-25", Default: "hover:bg-sky-800"'
              >Settings</a
            >

            <a
              href="/workspace.html"
              class="hover:bg-sky-800 block rounded-md py-2 px-3 text-base font-medium text-dark"
              x-state-description='undefined: "bg-black bg-opacity-25", undefined: "hover:bg-sky-800"'
              >Workspace</a
            >
          </div>
        </div>
      </nav>
      <div
        aria-hidden="true"
        x-state:on="Menu open"
        x-state:off="Menu closed"
        class="inset-y-0 absolute inset-x-0 left-1/2 w-full -translate-x-1/2 transdiv overflow-hidden lg:inset-y-0"
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

    <main v-if="selectedTab" class="relative -mt-32">
      <div class="mx-auto max-w-screen-xl px-4 pb-6 sm:px-6 lg:px-8 lg:pb-16">
        <div class="overflow-hidden rounded-lg bg-white shadow">
          <div
            class="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-x lg:divide-y-0"
          >
            <aside class="py-6 lg:col-span-3">
              <nav class="space-y-1">
                <a
                  @click="selectedTab = tab"
                  v-for="tab in tabs"
                  :key="tab.id"
                  :class="[
                    selectedTab.id == tab.id ? 'border-gray-500' : '',
                    'cursor-pointer border-0 bg-gray-50 text-gray-700 hover:bg-gray-50 hover:text-gray-700 group flex items-center border-l-4 px-3 py-2 text-sm font-medium',
                  ]"
                >
                  <span v-html="tab.icon"></span>
                  <span class="truncate">{{ tab.name }}</span>
                </a>
              </nav>
            </aside>

            <div
              v-if="selectedTab && selectedTab.id == 'profile'"
              class="divide-y divide-gray-200 bg-gray-100 lg:col-span-9"
            >
              <div class="divide-y divide-white/5">
                <div
                  class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8"
                >
                  <div>
                    <h2 class="text-base font-semibold leading-7 text-dark">
                      Personal Indivation
                    </h2>
                    <p class="mt-1 text-sm leading-6 text-gray-400">
                      Use an active email address where you can receive mail.
                    </p>
                  </div>
                  <div class="md:col-span-2">
                    <div
                      class="grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6"
                    >
                      <div class="col-span-full flex items-center gap-x-8">
                        <img
                          :src="user.profile_photo_url"
                          alt=""
                          class="border h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover"
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
                            :value="user.first_name"
                            id="first-name"
                            autocomplete="given-name"
                            class="block w-full rounded-md border-0 bg-white py-1.5 text-dark shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 pl-3"
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
                            :value="user.last_name"
                            id="last-name"
                            autocomplete="family-name"
                            class="block w-full rounded-md border-0 bg-white py-1.5 text-dark shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 pl-3"
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
                            :value="user.email"
                            autocomplete="email"
                            class="block w-full rounded-md border-0 bg-white py-1.5 text-dark shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 pl-3"
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
                            <input
                              type="text"
                              name="username"
                              id="username"
                              :value="user.username"
                              autocomplete="username"
                              class="flex-1 border-0 bg-transparent py-1.5 pl-3 text-dark focus:ring-0 sm:text-sm sm:leading-6"
                              placeholder="janesmith"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <!-- <div class="mt-8 flex">
                <button type="submit" class="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-dark shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Save</button>
              </div> -->
                  </div>
                </div>

                <div
                  class="grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8"
                >
                  <div>
                    <h2 class="text-base font-semibold leading-7 text-dark">
                      Export account
                    </h2>
                    <p class="mt-1 text-sm leading-6 text-gray-400">
                      No longer want to use our service? You can export your data and
                      delete your account here. This action is not reversible. All
                      indivation related to this account will be deleted permanently.
                    </p>
                  </div>

                  <div class="flex items-start md:col-span-2">
                    <button
                      class="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-dark shadow-sm hover:bg-red-400"
                    >
                      Yes, Export and delete local data
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              v-if="selectedTab && selectedTab.id == 'integrations'"
              class="p-5 divide-y divide-gray-200 bg-gray-100 lg:col-span-9"
            >
              <div class="prose">
                <div
                  class="w-full sm:max-w-4xl mt-6 p-6 bg-white shadow-md overflow-hidden sm:rounded-lg prose"
                >
                  <h1 class="text-xl border-b pb-2 mb-2">Tool integrations</h1>
                  <div class="grid grid-cols-3 gap-8">
				<div>
					<a href="https://github.com/Kohulan/DECIMER-Image-Segmentation" target="_blank">
						<img src="https://decimer.ai/DECIMER_Segmentation_logo.png" alt="DECIMER Segmentation Logo">
					</a>
				</div>
				<div>
					<a href="https://github.com/Kohulan/Smiles-TO-iUpac-Translator" target="_blank">
						<img src="https://decimer.ai/STOUT_logo.png" alt="STOUT Logo">
					</a>
				</div>
				<div>
					<a href="https://github.com/Kohulan/DECIMER-Image_Transformer" target="_blank">
						<img src="https://decimer.ai/DECIMER_Transformer_logo.png" alt="DECIMER OCSR Logo">
					</a>
				</div>
			</div>
                </div>
              </div>
            </div>
            <div
              v-if="selectedTab && selectedTab.id == 'privacy'"
              class="p-5 divide-y divide-gray-200 bg-gray-100 lg:col-span-9"
            >
              <div class="prose">
                <div
                  class="w-full sm:max-w-4xl mt-6 p-6 bg-white shadow-md overflow-hidden sm:rounded-lg prose"
                >
                  <h1 class="text-xl border-b pb-2 mb-2">Privacy Policy</h1>
                  <p class="pb-2 text-lg"><strong>Effective date: April 17, 2023</strong></p>
                  <p class="pb-2">
                    ChemInf-Studio ("us", "we", or "our") operates the
                    <a href="https://cheminf-studio.naturalproducts.net/"
                      >https://cheminf-studio.naturalproducts.net/</a
                    >
                    website (hereinafter referred to as the "Service").
                  </p>
                  <p class="pb-2">
                    This page informs you of our policies regarding the collection, use
                    and disclosure of personal data when you use our Service and the
                    choices you have associated with that data.
                  </p>
                  <p class="pb-2">
                    We use your data to provide and improve the Service. By using the
                    Service, you agree to the collection and use of information in
                    accordance with this policy. Unless otherwise defined in this Privacy
                    Policy, the terms used in this Privacy Policy have the same meanings
                    as in our Terms and Conditions, accessible from
                    <a href="https://cheminf-studio.naturalproducts.net/"
                      >https://cheminf-studio.naturalproducts.net/</a
                    >
                  </p>
                  <h2 class="text-lg pb-2">Definitions</h2>
                  <ul>
                    <li>
                      <p class="pb-2 text-lg"><strong>Service</strong></p>
                      <p class="pb-2">
                        Service is the
                        <a href="https://cheminf-studio.naturalproducts.net/"
                          >https://cheminf-studio.naturalproducts.net/</a
                        >
                        website operated by ChemInf-Studio
                      </p>
                    </li>
                    <li>
                      <p class="pb-2 text-lg"><strong>Personal Data</strong></p>
                      <p class="pb-2">
                        Personal Data means data about a living individual who can be
                        identified from those data (or from those and other information
                        either in our possession or likely to come into our possession).
                      </p>
                    </li>
                    <li>
                      <p class="pb-2 text-lg"><strong>Usage Data</strong></p>
                      <p class="pb-2">
                        Usage Data is data collected automatically either generated by the
                        use of the Service or from the Service infrastructure itself (for
                        example, the duration of a page visit).
                      </p>
                    </li>
                    <li>
                      <p class="pb-2 text-lg"><strong>Cookies</strong></p>
                      <p class="pb-2">
                        Cookies are small files stored on your device (computer or mobile
                        device).
                      </p>
                    </li>
                    <li>
                      <p class="pb-2 text-lg"><strong>Data Controller</strong></p>
                      <p class="pb-2">
                        Data Controller means the natural or legal person who (either
                        alone or jointly or in common with other persons) determines the
                        purposes for which and the manner in which any personal
                        information are, or are to be, processed.
                      </p>
                      <p class="pb-2">
                        For the purpose of this Privacy Policy, we are a Data Controller
                        of your Personal Data.
                      </p>
                    </li>
                    <li>
                      <p class="pb-2 text-lg">
                        <strong>Data Processors (or Service Providers)</strong>
                      </p>
                      <p class="pb-2">
                        Data Processor (or Service Provider) means any natural or legal
                        person who processes the data on behalf of the Data Controller.
                      </p>
                      <p class="pb-2">
                        We may use the services of various Service Providers in order to
                        process your data more effectively.
                      </p>
                    </li>
                    <li>
                      <p class="pb-2 text-lg"><strong>Data Subject (or User)</strong></p>
                      <p class="pb-2">
                        Data Subject is any living individual who is using our Service and
                        is the subject of Personal Data.
                      </p>
                    </li>
                  </ul>
                  <h2 class="text-lg pb-2 text-lg"><strong>Information Collection and Use</strong></h2>
                  <p class="pb-2">
                    We collect several different types of information for various purposes
                    to provide and improve our Service to you.
                  </p>
                  <h3>Types of Data Collected</h3>
                  <h4>Personal Data</h4>
                  <p class="pb-2">
                    While using our Service, we may ask you to provide us with certain
                    personally identifiable information that can be used to contact or
                    identify you ("Personal Data"). Personally identifiable information
                    may include, but is not limited to:
                  </p>
                  <ul>
                    <li>Email address</li>
                    <li>Cookies and Usage Data</li>
                  </ul>
                  <h4 class="text-lg"><strong>Usage Data</strong></h4>
                  <p class="pb-2">
                    We may also collect information on how the Service is accessed and
                    used ("Usage Data"). This Usage Data may include information such as
                    your computer's Internet Protocol address (e.g. IP address), browser
                    type, browser version, the pages of our Service that you visit, the
                    time and date of your visit, the time spent on those pages, unique
                    device identifiers and other diagnostic data.
                  </p>
                  <h4 class="text-lg"><strong>Tracking &amp; Cookies Data</strong></h4>
                  <p class="pb-2">
                    We use cookies and similar tracking technologies to track the activity
                    on our Service and we hold certain information.
                  </p>
                  <p class="pb-2">
                    Cookies are files with a small amount of data which may include an
                    anonymous unique identifier. Cookies are sent to your browser from a
                    website and stored on your device. Other tracking technologies are
                    also used such as beacons, tags and scripts to collect and track
                    information and to improve and analyse our Service.
                  </p>
                  <p class="pb-2">
                    You can instruct your browser to refuse all cookies or to indicate
                    when a cookie is being sent. However, if you do not accept cookies,
                    you may not be able to use some portions of our Service.
                  </p>
                  <p class="pb-2">Examples of Cookies we use:</p>
                  <ul>
                    <li>
                      <strong>Session Cookies.</strong> We use Session Cookies to operate
                      our Service.
                    </li>
                    <li>
                      <strong>Preference Cookies.</strong> We use Preference Cookies to
                      remember your preferences and various settings.
                    </li>
                    <li>
                      <strong>Security Cookies.</strong> We use Security Cookies for
                      security purposes.
                    </li>
                  </ul>
                  <h2 class="text-lg pb-2"><strong>Use of Data</strong></h2>
                  <p class="pb-2">
                    ChemInf-Studio uses the collected data for various purposes:
                  </p>
                  <ul>
                    <li>To provide and maintain our Service</li>
                    <li>To notify you about changes to our Service</li>
                    <li>
                      To allow you to participate in interactive features of our Service
                      when you choose to do so
                    </li>
                    <li>To provide support</li>
                    <li>
                      To gather analysis or valuable information so that we can improve
                      our Service
                    </li>
                    <li>To monitor the usage of our Service</li>
                    <li>To detect, prevent and address technical issues</li>
                  </ul>
                  <h2 class="text-lg pb-2">
                  <strong>Legal Basis for Processing Personal Data under the General Data
                    Protection Regulation (GDPR)</strong>
                  </h2>
                  <p class="pb-2">
                    If you are from the European Economic Area (EEA), ChemInf-Studio legal
                    basis for collecting and using the personal information described in
                    this Privacy Policy depends on the Personal Data we collect and the
                    specific context in which we collect it.
                  </p>
                  <p class="pb-2">
                    ChemInf-Studio may process your Personal Data because:
                  </p>
                  <ul>
                    <li>We need to perform a contract with you</li>
                    <li>You have given us permission to do so</li>
                    <li>
                      The processing is in our legitimate interests and it is not
                      overridden by your rights
                    </li>
                    <li>To comply with the law</li>
                  </ul>
                  <h2 class="text-lg pb-2"><strong>Retention of Data</strong></h2>
                  <p class="pb-2">
                    ChemInf-Studio will retain your Personal Data only for as long as is
                    necessary for the purposes set out in this Privacy Policy. We will
                    retain and use your Personal Data to the extent necessary to comply
                    with our legal obligations (for example, if we are required to retain
                    your data to comply with applicable laws), resolve disputes and
                    enforce our legal agreements and policies.
                  </p>
                  <p class="pb-2">
                    ChemInf-Studio will also retain Usage Data for internal analysis
                    purposes. Usage Data is generally retained for a shorter period of
                    time, except when this data is used to strengthen the security or to
                    improve the functionality of our Service, or we are legally obligated
                    to retain this data for longer periods.
                  </p>
                  <h2 class="text-lg pb-2"><strong>Transfer of Data</strong></h2>
                  <p class="pb-2">
                    Your information, including Personal Data, may be transferred to — and
                    maintained on — computers located outside of your state, province,
                    country or other governmental jurisdiction where the data protection
                    laws may differ from those of your jurisdiction.
                  </p>
                  <p class="pb-2">
                    If you are located outside United Kingdom and choose to provide
                    information to us, please note that we transfer the data, including
                    Personal Data, to United Kingdom and process it there.
                  </p>
                  <p class="pb-2">
                    Your consent to this Privacy Policy followed by your submission of
                    such information represents your agreement to that transfer.
                  </p>
                  <p class="pb-2">
                    ChemInf-Studio will take all the steps reasonably necessary to ensure
                    that your data is treated securely and in accordance with this Privacy
                    Policy and no transfer of your Personal Data will take place to an
                    organisation or a country unless there are adequate controls in place
                    including the security of your data and other personal information.
                  </p>
                  <h2 class="text-lg pb-2"><strong>Disclosure of Data</strong></h2>
                  <h3>Disclosure for Law Enforcement</h3>
                  <p class="pb-2">
                    Under certain circumstances, ChemInf-Studio may be required to
                    disclose your Personal Data if required to do so by law or in response
                    to valid requests by public authorities (e.g. a court or a government
                    agency).
                  </p>
                  <h3>Legal Requirements</h3>
                  <p class="pb-2">
                    ChemInf-Studio may disclose your Personal Data in the good faith
                    belief that such action is necessary to:
                  </p>
                  <ul>
                    <li>To comply with a legal obligation</li>
                    <li>
                      To protect and defend the rights or property of ChemInf-Studio
                    </li>
                    <li>
                      To prevent or investigate possible wrongdoing in connection with the
                      Service
                    </li>
                    <li>
                      To protect the personal safety of users of the Service or the public
                    </li>
                    <li>To protect against legal liability</li>
                  </ul>
                  <h2 class="text-lg pb-2"><strong>Security of Data</strong></h2>
                  <p class="pb-2">
                    The security of your data is important to us but remember that no
                    method of transmission over the Internet or method of electronic
                    storage is 100% secure. While we strive to use commercially acceptable
                    means to protect your Personal Data, we cannot guarantee its absolute
                    security.
                  </p>
                  <h2 class="text-lg pb-2">
                    <strong>Your Data Protection Rights under the General Data Protection
                    Regulation (GDPR)</strong>
                  </h2>
                  <p class="pb-2">
                    If you are a resident of the European Economic Area (EEA), you have
                    certain data protection rights. ChemInf-Studio aims to take reasonable
                    steps to allow you to correct, amend, delete or limit the use of your
                    Personal Data.
                  </p>
                  <p class="pb-2">
                    If you wish to be informed about what Personal Data we hold about you
                    and if you want it to be removed from our systems, please contact us.
                  </p>
                  <p class="pb-2">
                    In certain circumstances, you have the following data protection
                    rights:
                  </p>
                  <ul>
                    <li>
                      <p class="pb-2">
                        <strong
                          >The right to access, update or delete the information we have
                          on you.</strong
                        >
                        Whenever made possible, you can access, update or request deletion
                        of your Personal Data directly within your account settings
                        section. If you are unable to perform these actions yourself,
                        please contact us to assist you.
                      </p>
                    </li>
                    <li>
                      <p class="pb-2">
                        <strong>The right of rectification.</strong> You have the right to
                        have your information rectified if that information is inaccurate
                        or incomplete.
                      </p>
                    </li>
                    <li>
                      <p class="pb-2">
                        <strong>The right to object.</strong> You have the right to object
                        to our processing of your Personal Data.
                      </p>
                    </li>
                    <li>
                      <p class="pb-2">
                        <strong>The right of restriction.</strong> You have the right to
                        request that we restrict the processing of your personal
                        information.
                      </p>
                    </li>
                    <li>
                      <p class="pb-2">
                        <strong>The right to data portability.</strong> You have the right
                        to be provided with a copy of the information we have on you in a
                        structured, machine-readable and commonly used format.
                      </p>
                    </li>
                    <li>
                      <p class="pb-2">
                        <strong>The right to withdraw consent.</strong> You also have the
                        right to withdraw your consent at any time where ChemInf-Studio
                        relied on your consent to process your personal information.
                      </p>
                    </li>
                  </ul>
                  <p class="pb-2">
                    Please note that we may ask you to verify your identity before
                    responding to such requests.
                  </p>
                  <p class="pb-2">
                    You have the right to complain to a Data Protection Authority about
                    our collection and use of your Personal Data. For more information,
                    please contact your local data protection authority in the European
                    Economic Area (EEA).
                  </p>
                  <h2 class="text-lg pb-2"><strong>Service Providers</strong></h2>
                  <p class="pb-2">
                    We may employ third party companies and individuals to facilitate our
                    Service ("Service Providers"), provide the Service on our behalf,
                    perform Service-related services or assist us in analysing how our
                    Service is used.
                  </p>
                  <p class="pb-2">
                    These third parties have access to your Personal Data only to perform
                    these tasks on our behalf and are obligated not to disclose or use it
                    for any other purpose.
                  </p>
                  <h2 class="text-lg pb-2"><strong>Links to Other Sites</strong></h2>
                  <p class="pb-2">
                    Our Service may contain links to other sites that are not operated by
                    us. If you click a third party link, you will be directed to that
                    third party's site. We strongly advise you to review the Privacy
                    Policy of every site you visit.
                  </p>
                  <p class="pb-2">
                    We have no control over and assume no responsibility for the content,
                    privacy policies or practices of any third party sites or services.
                  </p>
                  <h2 class="text-lg pb-2"><strong>Children's Privacy</strong></h2>
                  <p class="pb-2">
                    Our Service does not address anyone under the age of 18 ("Children").
                  </p>
                  <p class="pb-2">
                    We do not knowingly collect personally identifiable information from
                    anyone under the age of 18. If you are a parent or guardian and you
                    are aware that your Child has provided us with Personal Data, please
                    contact us. If we become aware that we have collected Personal Data
                    from children without verification of parental consent, we take steps
                    to remove that information from our servers.
                  </p>
                  <h2 class="text-lg pb-2"><strong>Changes to This Privacy Policy</strong></h2>
                  <p class="pb-2">
                    We may update our Privacy Policy from time to time. We will notify you
                    of any changes by posting the new Privacy Policy on this page.
                  </p>
                  <p class="pb-2">
                    We will let you know via email and/or a prominent notice on our
                    Service, prior to the change becoming effective and update the
                    "effective date" at the top of this Privacy Policy.
                  </p>
                  <p class="pb-2">
                    You are advised to review this Privacy Policy periodically for any
                    changes. Changes to this Privacy Policy are effective when they are
                    posted on this page.
                  </p>
                  <h2 class="text-lg pb-2"><strong>Contact Us</strong></h2>
                  <p class="pb-2">
                    If you have any questions about this Privacy Policy, please contact
                    us:
                  </p>
                  <ul>
                    <li>
                      By email:
                      <a href="mailto:info.cheminf-studio@uni-jena.de"
                        >info.cheminf-studio@uni-jena.de</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              v-if="selectedTab && selectedTab.id == 'terms'"
              class="p-5 divide-y divide-gray-200 bg-gray-100 lg:col-span-9"
            >
              <div>
                <div
                  class="w-full sm:max-w-4xl mt-6 p-6 bg-white shadow-md overflow-hidden sm:rounded-lg prose"
                >
                  <h1 class="text-xl border-b pb-2 mb-2">Terms of Service</h1>
                  <h2 class="text-lg pb-2">Software</h2>
                  <p class="pb-2">
                    <strong>ChemInf-Studio</strong> is licensed under the MIT License - A
                    short and simple permissive license with conditions only requiring
                    preservation of copyright and license notices. Licensed works,
                    modifications, and larger works may be distributed under different
                    terms and without source code.
                  </p>
                  <p class="pb-2 text-lg">MIT License</p>
                  <p class="pb-2 text-lg">Copyright (c) 2023 ChemInf-Studio</p>
                  <p class="pb-2">
                    Permission is hereby granted, free of charge, to any person obtaining
                    a copy of this software and associated documentation files (the
                    "Software"), to deal in the Software without restriction, including
                    without limitation the rights to use, copy, modify, merge, publish,
                    distribute, sublicense, and/or sell copies of the Software, and to
                    permit persons to whom the Software is furnished to do so, subject to
                    the following conditions:
                  </p>
                  <p class="pb-2">
                    The above copyright notice and this permission notice shall be
                    included in all copies or substantial portions of the Software.
                  </p>
                  <p class="pb-2">
                    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
                    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
                    IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
                    CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
                    TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
                    SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                  </p>
                  <h2 class="text-lg pb-2">Data</h2>
                  <p class="pb-2">
                    The online data services of ChemInf-Studio are generated in part from
                    data contributed by the community who remain the data owners.
                  </p>
                  <p class="pb-2">
                    When you contribute scientific data to the ChemInf-Studio database
                    through our website or other submission tools this information will be
                    released at a time and in a manner consistent with the scientific data
                    and we may store it permanently.
                  </p>
                  <p class="pb-2">
                    ChemInf-Studio itself places no additional restrictions on the use or
                    redistribution of the data available via its online services other
                    than those provided by the original data owners.
                  </p>
                  <p class="pb-2">
                    ChemInf-Studio does not guarantee the accuracy of any provided data,
                    generated database, software or online service nor the suitability of
                    data, software and online services for any purpose.
                  </p>
                </div>
              </div>
            </div>
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
      selectedTab: null,
      user: null,
      isLoggedIn: false,
      tabs: [
        {
          name: "Profile",
          icon: `<svg
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
                  </svg>`,
          info: "",
          id: "profile",
        },
        {
          name: "Integrations",
          icon: `<svg
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
                  </svg>`,
          info: "",
          id: "integrations",
        },
        {
          name: "Privacy",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-400 group-hover:text-gray-500 -ml-1 mr-3 h-6 w-6 flex-shrink-0">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
</svg>
`,
          info: "",
          id: "privacy",
        },
        {
          name: "Terms and conditions",
          icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="text-gray-400 group-hover:text-gray-500 -ml-1 mr-3 h-6 w-6 flex-shrink-0">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
</svg>
`,
          info: "",
          id: "terms",
        },
      ],
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
      if (!this.user) {
        window.location.replace("/workspace.html");
      } else {
        this.selectedTab = this.tabs[0];
      }
    });
  },
  methods: {},
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
