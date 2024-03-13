'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "62de554d328db3ff4e01a548444426ae",
"index.html": "4edbca2c443947b2cb450e92aa19167d",
"/": "4edbca2c443947b2cb450e92aa19167d",
"main.dart.js": "eec6ce218e9c02c7e13fed20d923e761",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/app_launcher_icon.png": "2ff441b636f211ad04f1828a7404715b",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
".git/ORIG_HEAD": "d296ac6d99a37618037361b57ad86e48",
".git/config": "354cabd9b491eae70b430bf4d010f781",
".git/objects/66/22be9b3026b3522740d1027b95fd203515702f": "48c1da3f723fa638df5087c3aa366584",
".git/objects/50/62ca5fc5ab5e23f04b106e1662e02b91a69a56": "0d69247fc4e2790d87c91f1bf78d2fd8",
".git/objects/68/cf5771b752e90b71174254d5f729144a7bfbe4": "0af10b111d5329e2d700c581ec7a4fd0",
".git/objects/03/eb2b14a28b328fa11abc44cf85d514fc5cde69": "489cde3f43d7769f9e879dae043b7cbb",
".git/objects/03/b589fe4e82a1d06285143fcbc1726df4bcfcef": "7a00db538f2172ba3a47b178cdc937d4",
".git/objects/51/6aa4a03ac0f05bd0054f2290d17d5a8f7651b9": "a98bc2302f213602356d434111012a96",
".git/objects/58/b963fdd3458ac9db2488a4460d61c238b46fef": "276629966ee3e0657f1b6c10370cb023",
".git/objects/0e/bf2b49a0319d66acc983f225094e4b2f1d7764": "9402b6adf608d51b512a6d951cc62feb",
".git/objects/5a/52a83d92bfa94dc2782ca1f3a45d8ba7505f39": "2c6c972a0b1719326fdfca8bee17b63e",
".git/objects/9d/d3e45a4e56602cab7ac6a714377aa3438f5ddc": "5d09d8d9315bbbfafb3490c9ca318c1d",
".git/objects/d9/dfefc701803aeda500b17f30ada75b456286ea": "ee40f0ffdbb3c784a5e8ad5e8bf779a6",
".git/objects/d0/165258c8ff89df3e9bc8a1f8a68d40a18c0211": "f96ffb121462205b0180b3dcace5a69f",
".git/objects/be/c0757135abdfc1163ae06561f59eee9ca03322": "f20050f3be9d8be1693bdc22ba623c3f",
".git/objects/da/fcae534b52fbd306682b2a03203f38f8248210": "8be3264c0452ed32fee444a14095d890",
".git/objects/a2/7978ea33d9a2678afc6df208b4f5d4c4e202de": "5838c742b235ab16b54e2f1ffd2fb9f0",
".git/objects/f3/ca5d2b6cf0891726f424d060fe027c768719f6": "1f1f88e29a7c279920fc411955ad41e7",
".git/objects/e3/dd60eedd4ac9c09d9e1f1d3928ebfa850df2c6": "f14e69ad33f7c4b9f820cf0f187993e4",
".git/objects/20/bb83c7b19bf3f71b711ecc53285bbf3cb1ef7a": "be5a279572ebec76ed1ea16bbe65a0f9",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/pack/pack-806054deaa826cccc07a15aa54d9e0e880140cc4.pack": "b7f6cfe84757811585eb8a5a6615341d",
".git/objects/pack/pack-806054deaa826cccc07a15aa54d9e0e880140cc4.idx": "34051d022710a7c0e19ff59c90e77060",
".git/objects/7b/a69c65f7d6e9e4ee152d9efd814c506676417a": "ba1f03d470f94a2e5974a09a19b6a355",
".git/objects/7e/e5dad9e395356363f51683ad6ab8f54b2fed7e": "23868801e24e3dd0bdb290d98c3b18f2",
".git/objects/81/1361c9db5a95187d53e54442bb6f776a14e9f8": "6dccad180fecd6d13417c9d3ccd63878",
".git/objects/86/f528ec65394c6d9d7ceb5500df4cc1d4a25c6a": "8065caa698e6d3550c100010705acbe1",
".git/objects/44/6277f91242f591866435c81df1e4843acba00c": "1cc4d11da1bc823dd853ca097af3f100",
".git/objects/44/2bc970b9fe78e28fe8d48c597559461fdc3fdd": "4e27dbc07d2127e29f51bb74cc4aca70",
".git/objects/2a/5079b1c5a74c2c763dfb60b83fb4fa22becf30": "9547a3d28cf7c9ce0a7c4598b7fd8f54",
".git/objects/36/add3d13ee49cde6d31ea4612743527ebac968e": "f368c23eab23f9527d5f7d058c5d453e",
".git/objects/5c/16b6c05305d2da9ce2f6f9c1c97655af80200a": "3f246d4cfc3e481efea7d64777fc43dc",
".git/objects/91/28c7c45d423afee7fd50de5ed57d16b5ddf337": "83a597135797593a4b98c3a3a3cedc09",
".git/objects/54/cb4d0e5ae1c6aed81cc0b20587c5facef5e987": "d83159a4497ef4bd27f203801ea3e3aa",
".git/objects/08/f4ace756dd73e913d5645ccc1bb216f2e108a6": "1af96c00005285917717e17b0f90aee1",
".git/objects/0f/8f196645ffd7c15d67c07d9362545909f56d6a": "9a9e22ccfc504de8b857d0cc774493fd",
".git/objects/0a/d5ed88d50aae4a7551e90193490737ab0a49e1": "fb9ca6a7491a0aba125d2171cc1af2fc",
".git/objects/0a/b3443a63b5d26b61119822c28c3a80ab8e8972": "6f158ddf76af3d1fd91ecf32d41aaf3f",
".git/objects/b6/e28fc5824198098bbba997acaaae7db1fd3909": "6f97726bcfb2d7c4f99b10681e880773",
".git/objects/d5/4e2d6c08cf25f6b8b1d42db30934132ef5f3cf": "13b6e3d68a0ff007ef1d78a5d0f1c3b1",
".git/objects/db/2956b621d5ce919e7a44d99e75632388d61479": "56eda3e687ef6b31d6091482672494a2",
".git/objects/de/d670ba9fc2e6654effc01263c7df3634ca5968": "b50df8261e0f8b2bae2c271bb6682c06",
".git/objects/ef/d17c90e7a1dfa43edd07917393eee4f1b0197a": "becb1daa1515e2017d3ed5ace382c1d5",
".git/objects/cd/62ca5b5a9388610999df8e59e8f91b4ec12e1c": "b2f5d8801c60031a60d64dfe4e45af8a",
".git/objects/e8/7cd280886f4b09490999ef7c76ae3cefc9f1e1": "77daa7150951f16c546e27f64d3e3452",
".git/objects/f6/d2d20b65bcdfcdcad6622aec6ff3ab7f1b7a36": "5e496c29769cc102a5edf0dbbc58e65b",
".git/objects/e9/a421a80d98057bcd2b672c1b12dc1a3b5c62db": "a1f2cccf2620ce25dae9fd4f6bdd2fec",
".git/objects/ce/843d4ba48e8246b81c173da20c52212b568157": "068bc2716e2e59a137db1daabbb18cab",
".git/objects/2c/dd0da88e6a4eae2cf79276d78e794e158c1e28": "0ab10ceffe6bacd3def2816acc188d4c",
".git/objects/1e/433746134687c7f5984e189f53d4a9a9905438": "c8d5c299bc644005084039cf00cb2537",
".git/objects/8c/f3b5dd9c813067efc3795547227b10c6aae21d": "34f3eff9a125eb7fe26ed36e6207208b",
".git/objects/8c/3f1331c8d5f67988f3345ca48b6204d0e2301b": "f9e5c2c3e74de57edb5436f98a03114d",
".git/objects/13/f2c62371368afd97499b53830341998450f3eb": "caa1803d7381dd42c1e58b7f73b673f2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0ac877c306a7bde6f1176df92193d272",
".git/logs/refs/heads/main": "b37b75c92b0700a475ccec34f0373755",
".git/logs/refs/remotes/origin/main": "46d0d1005c60421404bbadbb0857c859",
".git/logs/refs/stash": "5ffb7ea80275e6f09e7ab66306fa3c95",
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
".git/refs/heads/main": "f6b43b5b0616a29c290aea5564d85892",
".git/refs/remotes/origin/main": "f6b43b5b0616a29c290aea5564d85892",
".git/refs/stash": "f50b414982b7cf9c3ee531367e38807b",
".git/index": "11daf69864499e08a030ecd27fe059d6",
".git/COMMIT_EDITMSG": "c5e1670a76fa30eb5c8cb1969cb58536",
".git/FETCH_HEAD": "9f8ba1a03a98fd53afb2bcd5b25b7557",
"ABG-LOGO.png": "2ff441b636f211ad04f1828a7404715b",
"assets/AssetManifest.json": "3c4da3b4e004145c27427f6b9f1c9321",
"assets/NOTICES": "f66af20f5d553c52205e37cab73c28e9",
"assets/FontManifest.json": "62e1a50970f243d5522a96e513bd4671",
"assets/AssetManifest.bin.json": "3cc74e6f2e69ad3eb268cc45afd396bd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "8718d357cfcaa7cfc899edc5de99bac9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "75939758e5a56a50789ce067ab52db4f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "501f2adb509c743ec80af2373a4ca8ef",
"assets/fonts/MaterialIcons-Regular.otf": "273cc18baf6a9db5b46d015af09dd804",
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
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
