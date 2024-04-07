'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "62de554d328db3ff4e01a548444426ae",
"index.html": "8e259eae14215a23b2e08f5f54e8617d",
"/": "8e259eae14215a23b2e08f5f54e8617d",
"main.dart.js": "e7b084efe909bbbd17a205b2bbe20565",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/app_launcher_icon.png": "2ff441b636f211ad04f1828a7404715b",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".git/config": "9a22c1485c56d80232fef43c167e6cd3",
".git/objects/pack/pack-e06f5b0bb0cdff150cef9ce872c13e729ade572b.idx": "236334790d24bc638594fbe24f996a5d",
".git/objects/pack/pack-e06f5b0bb0cdff150cef9ce872c13e729ade572b.pack": "f16267eeca830ce8e19b424a20d6b786",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8341f53198816f69364af39f3b2363d9",
".git/logs/refs/heads/main": "8341f53198816f69364af39f3b2363d9",
".git/logs/refs/remotes/origin/main": "0ebe2fbbd55db7a5cb6818e33630f893",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "905a7fa36c905a33b6e287a8a9fb6ff2",
".git/refs/remotes/origin/main": "905a7fa36c905a33b6e287a8a9fb6ff2",
".git/index": "d63f398cb403a873ca339373e3589114",
".git/FETCH_HEAD": "f21410468e3275d77b370d0ef9728e2e",
"ABG-LOGO.png": "2ff441b636f211ad04f1828a7404715b",
"assets/AssetManifest.json": "04b73a8539ea7b6c06c9470f8701b9e6",
"assets/NOTICES": "45148ea9e4cf5c7824a04752553c9ce8",
"assets/FontManifest.json": "62e1a50970f243d5522a96e513bd4671",
"assets/AssetManifest.bin.json": "38b2d67ef5bc22d0fca2e49b89e626fe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "8718d357cfcaa7cfc899edc5de99bac9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "75939758e5a56a50789ce067ab52db4f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c31ea84f0e59062479fa10507ab8f5b3",
"assets/fonts/MaterialIcons-Regular.otf": "410f1ff5e927d94c00611a09d07f1f71",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/Caret-Down.svg": "cd2083132ed3d3e31aaf1678a51493ea",
"assets/assets/images/Search.svg": "2e2016a9ecb0d9139c66fb418a45c068",
"assets/assets/images/onboarding1.png": "53e341ab41ed19907b6f0fe8b7904630",
"assets/assets/images/onboarding2.png": "ef28d6d8da21bc0c76a3c67c5a9b2730",
"assets/assets/images/Rectangle_10.png": "c23d3aa92be250f1a7ae06884b968f1e",
"assets/assets/images/note.png": "93d8b74aa9bf726f5ed222293e70b63d",
"assets/assets/images/AI2.png": "6ff789048c63f5cd9281cec2325f4b7d",
"assets/assets/images/Ellipse.png": "87840e6612aa936866cdd1c0917cf5e7",
"assets/assets/images/Vector.svg": "d41bc8ef00333f5332042aebece2ff65",
"assets/assets/images/Easter_egg_hunt-pana_1.png": "b29d6485cc38501c92921955ad3b71aa",
"assets/assets/images/Nav_Icon_QBR_F.svg": "9b42fc96be8ada9bec21f4f04f99f702",
"assets/assets/images/Vector.png": "03ddca7f8ea53f46485a7460cc3760f5",
"assets/assets/images/Download.svg": "5ba10e1c515ea7271b8a00fe50aff8cd",
"assets/assets/images/Thumbs_up.png": "e73f5b6ad3126ff04a9b8a75a87becfd",
"assets/assets/images/404_Error_Page_not_Found_with_people_connecting_a_plug-pana_1.png": "06e6b7273e82140805674988c084e8df",
"assets/assets/images/Nav_Icon_MBR_F.svg": "9af291ce25ead1f5f3ec8f654d1abb47",
"assets/assets/images/Face_ID.png": "b721efab028d8578b2b6b2a32e9ba533",
"assets/assets/images/onboarding3a.png": "40d338aea79e27768310b891a3202ef7",
"assets/assets/images/Icon.svg": "26cf581daf0a7e7af84bf5e68a6dde94",
"assets/assets/images/Left-arrow.svg": "3030728440227f4a1078d7c48c28ad65",
"assets/assets/images/Nav_Icon_MBR_T.svg": "771f0020fc8cb727f39a1b0aa175b674",
"assets/assets/images/onboarding3b.png": "2c114493fcabc8add1c44380000629e0",
"assets/assets/images/app_launcher_icon.png": "2ff441b636f211ad04f1828a7404715b",
"assets/assets/images/Nav_Icon_QBR_T.svg": "575e0a867935b20382a613b90c25fb28",
"assets/assets/images/Ribbon.png": "c952743f1cecce8bdc8591e797bf57ae",
"assets/assets/images/Nav_Icon_Projects_T.svg": "8e2e10108f4f53cc20c519a8be2f07f6",
"assets/assets/images/Nav_Icon_Key_T.svg": "e9681315668f2aa69037f99b652ec3da",
"assets/assets/images/Avatar.png": "9f5471f96656fadc2eb0fbc05721c39c",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/Right-arrow-black.svg": "20edeca4f20495b8bf72b55f231251f2",
"assets/assets/images/Wave.png": "2d95857be849af4febb9c0e0ed87d465",
"assets/assets/images/image_(3).png": "2081cc9055197a0630951325570924f0",
"assets/assets/images/Splash_Screen.png": "605e022e52661b5642145bc8b8ccd0bd",
"assets/assets/images/logoOnboarding.png": "c3d92463de57a78e6892a086e42dc5ab",
"assets/assets/images/Nav_Icon_Projects_F.svg": "1272f7ef33f74a6fa31a70c64c3b126a",
"assets/assets/images/Ellipse_3.svg": "82c850958b2e48c9fc3cd495e73af4c9",
"assets/assets/images/Nav_Icon_Key_F.svg": "8d44acbdee41594fed26489f573d7915",
"assets/assets/images/Pie_chart-pana_1.png": "b6f7fa1025f3c86d124828af9f49507a",
"assets/assets/images/stock_drop_svg.svg": "b1d345db92874164a290ae0bb200aadc",
"assets/assets/images/Ellipse_4_(3).png": "53262c6637bee102eccfa75c07cfce4d",
"assets/assets/images/pdf.png": "787cdf0d4758c87549d78f8e6ef5b965",
"assets/assets/images/Ellipse_15.svg": "0806a502d14999f8debce2be6231216c",
"assets/assets/images/ABG_Wave_1_Dark.png": "b3e6c1fd9a6e3ec95202e6d7ee003ea9",
"assets/assets/images/Sort.svg": "7347bd6673a2f950b3f2554aab2d8708",
"assets/assets/images/ABG-LOGO.png": "2ff441b636f211ad04f1828a7404715b",
"assets/assets/images/AI_(2).png": "33d796839cee24a102689d2ded07089b",
"assets/assets/images/Mesh_Holographic_Gradients_-_Light_Gradient_23_1.png": "53108bc488298ba28d4a7735a5278d9a",
"assets/assets/images/AI.png": "4f7e6c09a1a0ae60c281c7c1a80e801e",
"assets/assets/images/Ellipse_4.png": "57d28705f4d4cb22bf192f738ce5b64b",
"assets/assets/images/Notification_Icon.svg": "c504f4802a84e62a8a557631cd0672c4",
"assets/assets/images/Menu.svg": "8581417fc54a549159c5b48f63cda2d8",
"assets/assets/images/ABG_Wave_1.png": "e2a05f579c1ce6fb655bd5b37df6a32a",
"assets/assets/images/Caret-Down-Black.svg": "8f8f7af9cf7224572389a1fb94f25819",
"assets/assets/lottie_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/lottie_animations/LoaderAnimation.json": "4d88a19754726eabef579b5d07a6e689",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/videoLogo.mp4": "3966471e51628387244905a194b26d2c",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/icomoon.ttf": "b5d02262e00fb16aacd0d6c8a277f827",
"assets/assets/fonts/InstrumentSans-Italic.ttf": "d7f4946eb5d840e0eaf050be742ddeae",
"assets/assets/fonts/InstrumentSans-MediumItalic.ttf": "aac79db6ae8591b8bff8106107f1a03b",
"assets/assets/fonts/InstrumentSans-BoldItalic.ttf": "4ef845af1f159e3d704b3ae7f20be06b",
"assets/assets/fonts/InstrumentSans-SemiBoldItalic.ttf": "13369dca12b5d4ad773ad7384238280e",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/InstrumentSans-Regular.ttf": "68a19bd7907d66271109b354c18a5c65",
"assets/assets/fonts/InstrumentSans-SemiBold.ttf": "2aaca9d19ffd4cccb93898b107e9238b",
"assets/assets/fonts/InstrumentSans-Medium.ttf": "64a5a738f077da9f6897c78ea4181b29",
"assets/assets/fonts/InstrumentSans-Bold.ttf": "8881a442a3f4cf88b092463d49a377e4",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
