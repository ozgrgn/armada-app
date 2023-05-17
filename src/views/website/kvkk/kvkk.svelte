<script>

  import { navbar,lang } from "../../../services/store";

  import { Translate } from "../../../services/language.js";
</script>
<div class="">
  <div class=" ">
    <div class="relative h-96 ">
      <div class="absolute inset-0 ">
        <img
          class="w-full h-full object-cover"
          src="assets/img/clinic/1.jpeg"
          alt=""
        />
        <div
          class="absolute inset-0 bg-zinc-600 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>

      <div
        class="relative max-w-7xl mx-auto pt-24 px-4 sm:pt-24 sm:px-6 lg:px-8 "
      >
        <p
          class="text-center mt-20 text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl {$navbar ==
            true
              ? 'hidden'
              : 'block'}"
        >
        {$Translate("privacy_policy")}
        </p>
        <div class="flex justify-center">
          <div class=" text-center w-52">
            <img
              class="text-center inline pt-2 {$navbar ==
                true
                  ? 'hidden'
                  : 'block'}"
              src="assets/img/logos/smilewhite.png"
              alt=""
            />
          </div>
        </div>
      </div> 
    </div>
      <nav class="mb-auto flex relative -mt-10 {$navbar ==
        true
          ? 'hidden'
          : 'block'}" aria-label="Breadcrumb">
        <ol  class="flex items-center space-x-4 mb-5 ml-5">
          <li>
            <div>
              <a href="/" class="text-blueGray-100 hover:text-gray-300">
                <svg
                  class="flex-shrink-0 h-6 w-6 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                  />
                </svg>
                <span class="sr-only">Home</span>
              </a>
            </div>
          </li>

          <li>
            <div class="flex items-center  ">
              <svg
                class="flex-shrink-0 h-6 w-6 text-blueGray-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              <div
                class="ml-4  text-md font-medium text-blueGray-100 hover:text-gray-300"
              >
                {$Translate("privacy_policy")}
              </div>
            </div>
          </li>
        </ol>
      </nav>
   
  </div>
</div>
<div class="container mx-auto mb-10">
  <strong><br />What Are Cookies</strong><br />
  As is common practice with almost all professional websites this site uses cookies,
  which are tiny files that are downloaded to your computer, to improve your experience.
  This page describes what information they gather, how we use it and why we sometimes
  need to store these cookies. We will also share how you can prevent these cookies
  from being stored however this may downgrade or &lsquo;break&rsquo; certain elements
  of the sites functionality. For more general information on cookies see the Wikipedia
  article on HTTP Cookies.<br /><br /><strong>How We Use Cookies<br /></strong
  >We use cookies for a variety of reasons detailed below. Unfortunately in most
  cases there are no industry standard options for disabling cookies without
  completely disabling the functionality and features they add to this site. It
  is recommended that you leave on all cookies if you are not sure whether you
  need them or not in case they are used to provide a service that you use.<br
  /><br /><strong>Disabling Cookies<br /></strong>You can prevent the setting of
  cookies by adjusting the settings on your browser (see your browser Help for
  how to do this). Be aware that disabling cookies will affect the functionality
  of this and many other websites that you visit. Disabling cookies will usually
  result in also disabling certain functionality and features of the this site.
  Therefore it is recommended that you do not disable cookies.<br /><br
  /><strong>The Cookies We Set<br /></strong>Account related cookies If you
  create an account with us then we will use cookies for the management of the
  signup process and general administration. These cookies will usually be
  deleted when you log out however in some cases they may remain afterwards to
  remember your site preferences when logged out. Forms related cookies When you
  submit data to through a form such as those found on contact pages or comment
  forms cookies may be set to remember your user details for future
  correspondence. Site preferences cookies In order to provide you with a great
  experience on this site we provide the functionality to set your preferences
  for how this site runs when you use it. In order to remember your preferences
  we need to set cookies so that this information can be called whenever you
  interact with a page is affected by your preferences.<br /><br /><strong
    >Third Party Cookies<br /></strong
  >In some special cases we also use cookies provided by trusted third parties.
  The following section details which third party cookies you might encounter
  through this site. This site uses Google Analytics which is one of the most
  widespread and trusted analytics solution on the web for helping us to
  understand how you use the site and ways that we can improve your experience.
  These cookies may track things such as how long you spend on the site and the
  pages that you visit so we can continue to produce engaging content. For more
  information on Google Analytics cookies, see the official Google Analytics
  page. From time to time we test new features and make subtle changes to the
  way that the site is delivered. When we are still testing new features these
  cookies may be used to ensure that you receive a consistent experience whilst
  on the site whilst ensuring we understand which optimisations our users
  appreciate the most. The Google AdSense service we use to serve advertising
  uses a DoubleClick cookie to serve more relevant ads across the web and limit
  the number of times that a given ad is shown to you. For more information on
  Google AdSense see the official Google AdSense privacy FAQ. We also use social
  media buttons and/or plugins on this site that allow you to connect with your
  social network in various ways. For these to work the following social media
  sites including; (List the social networks whose features you have integrated
  with your site), will set cookies through our site which may be used to
  enhance your profile on their site or contribute to the data they hold for
  various purposes outlined in their respective privacy policies.
</div>
