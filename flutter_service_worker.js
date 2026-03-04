'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "07ee5503fa23e0304e4a47637bded36d",
"assets/AssetManifest.bin.json": "10bee5e0e55e42be10c89748dcab28cd",
"assets/assets/10.png": "9ffc99820d696ab42873c85ce57f3df9",
"assets/assets/11.png": "348205e54b83ec17076122ff1ceff224",
"assets/assets/111.png": "ff5b8ab863e735677975b56b239d7461",
"assets/assets/119.png": "8c23e99acdcbfa8b8b029a7343824e85",
"assets/assets/11l.png": "58ffc44eef27a4e080e7e67eef317df1",
"assets/assets/12.png": "989023573b8b2746b628a28a535f7b65",
"assets/assets/123.png": "7c39283d2e4209a7e85758b654563153",
"assets/assets/1232.png": "989023573b8b2746b628a28a535f7b65",
"assets/assets/1234.png": "ef0821808dada2fcd33f2fea3d3b6a73",
"assets/assets/13.png": "276bf6456652465e4e80269150d666d0",
"assets/assets/14.png": "e3495d42c82ac528c61386f2865ab7bf",
"assets/assets/2.png": "f638b04207f7fc27d8b2bc505e1e3763",
"assets/assets/20.png": "cc0d93267da0ef3acbe89b2162bb4b53",
"assets/assets/5.png": "0ab07e41f61072fb4deec37bca7ae658",
"assets/assets/512x.webp": "83723a043256b27096617a9ab28abc24",
"assets/assets/Aaa.png": "e60f027c099cfc64ee6309c5be33361e",
"assets/assets/adm.png": "795dcac5200bc14cf004ab4d9d0c1121",
"assets/assets/alll.png": "0e087665376b3395c5684f291447ef21",
"assets/assets/apple.png": "02650603415a879c9bf1be31b56724a3",
"assets/assets/appp.png": "3d80be5c6070c90224d485813b78e258",
"assets/assets/Avacado.png": "303a33ee7720819d6cb1394cd8c87557",
"assets/assets/avatar.png": "1dec2a3c5e2d0b93c7c7be85e67683bb",
"assets/assets/Avatar1.jpg": "184150aaf63421b5a0f245df511c739e",
"assets/assets/Avatar2.jpg": "184150aaf63421b5a0f245df511c739e",
"assets/assets/Avatar3.png": "7ea18c6baad0f8ded5efd169ab6b9470",
"assets/assets/aw.png": "110f264ae69c4e1ebd28d32af1247fa3",
"assets/assets/b.png": "8851abfdf1d71dc6a0723ba1815634c2",
"assets/assets/baby%25201.png": "c4c6bb54bbb069439693c046c8d73191",
"assets/assets/bbb.png": "da98cc7b954de1971fef13f995c7608e",
"assets/assets/bbbn.png": "9452fe209f31bd3450bd5a69213550e5",
"assets/assets/bhu.png": "59043e793d66ca46d1f09007910f9fff",
"assets/assets/bio.png": "acd5bd84d184c225be2ac4792072b607",
"assets/assets/body.png": "c4c6bb54bbb069439693c046c8d73191",
"assets/assets/Bred.png": "83675407136c38381be7f1b7f676b149",
"assets/assets/Button.png": "af7e4708af09fd9e1a3698c4fbb665df",
"assets/assets/cart.png": "035ef237636bc2609da8f9b95be7d405",
"assets/assets/cartina.png": "d8d33dab78705bbb458ed30396b19704",
"assets/assets/ccch.png": "e09e4022424a3310d3e2bca9c3f82593",
"assets/assets/COKE.png": "cb839a597f94d6dc27ab404d33246db6",
"assets/assets/cook.png": "0c39a6c5cf8609d27b57f461fd45b40d",
"assets/assets/cool.png": "54b9007037dcb97e03c19dcb1450a097",
"assets/assets/corr.png": "1c796b70d77b0483f3d163fae94d8ef7",
"assets/assets/cuate.png": "65e41a1a1b1cf39ab28d5005be10f523",
"assets/assets/Desserts.png": "675cdb192d9609fa0fb460c7cac3993b",
"assets/assets/dollor.png": "4b065caf5be747f298e169f1df4afd9a",
"assets/assets/Drinks.png": "9b74bfbae680bfa27f43d24685c0fc73",
"assets/assets/edit.png": "d3eee5171fc6aaf1f2b0593b01d2329a",
"assets/assets/eggs.png": "4939a69cc1f358e5a0edfeb22abad5c8",
"assets/assets/English.png": "f48b9b888c030dd6bd2b626f7b710b2d",
"assets/assets/f281ad7daa13fc42435d642e7e8b8ea330b56283.jpg": "184150aaf63421b5a0f245df511c739e",
"assets/assets/Facebook.png": "4509cd8d03f448f0a2a10c495c587a08",
"assets/assets/ffee.png": "e8502c0e02868860730c14f2e96c791f",
"assets/assets/Fff.png": "1f666925281c62e195c696f70a0460ea",
"assets/assets/Files.png": "001b4a12040cb3f544c683b97848f14a",
"assets/assets/fiw.png": "26097618b5e8b34075f10983765952ef",
"assets/assets/food.png": "a5a82b8492acd3f4dd570d5646d0153b",
"assets/assets/forel.png": "26097618b5e8b34075f10983765952ef",
"assets/assets/fpm.png": "de3cc58a207ce6fd5e9ef5140d6cef99",
"assets/assets/Frame%25201.png": "fc16865c11ef67af99d3c5c76d090b2a",
"assets/assets/Frame%25202.png": "a30dfa3db69fc8e9a0d3fec6001b973e",
"assets/assets/Frame%25203.png": "891e284885f3f59bb0ed2e8b6912038e",
"assets/assets/Frame.png": "7a87cb494c2872288f843081731bf9ac",
"assets/assets/Frame10.png": "db89131ce95e258446f3bc3edc57a954",
"assets/assets/Frame11.png": "05b5ce7043f0bd454eee217c0c400052",
"assets/assets/Frame12.png": "947f258dc70f81adfdf36b6c3ef9c568",
"assets/assets/Frame13.png": "c7d1c69e02830ba519c48bac4c4ffffc",
"assets/assets/Frame14.png": "a4567122f4b3a6e33edab1d5361c5480",
"assets/assets/Frame15.png": "d97ff3c44d4749e9dfaf087da21695b3",
"assets/assets/Frame16.png": "1797a4756a04ef9f60116e6e9731e72f",
"assets/assets/Frame17.png": "08a3b7e800140ce0fc37069f7148e332",
"assets/assets/Frame18.png": "5f9b91d6d7ad78d1fa61db3ac68baa9d",
"assets/assets/Frame19.png": "5cc9ede5e088d0cf54a88a138d553fc5",
"assets/assets/Frame20.png": "c2dc3c1cb5a3bb53ea3012d603ddcf8d",
"assets/assets/Frame21.png": "d4c8c2a0fb853abe7c1a743271e2ec9f",
"assets/assets/Frame22.png": "786ef87bdee1fcc21d98859db4720c23",
"assets/assets/Frame23.png": "3875955676796314691d90e7316adf06",
"assets/assets/Frame24.png": "eba033669514166f578806792476bbd4",
"assets/assets/Frame25.png": "27f4ca05f4e9c47e7402040a6ddbcde8",
"assets/assets/Frame26.png": "5b0e0f9e107978f8e0407fa374bd9539",
"assets/assets/Frame27.png": "eb882489d5421e9df0b8c4a7c5e2e25f",
"assets/assets/Frame4.png": "ebda7a3386e1bfa12d19e8a6ea0415b0",
"assets/assets/Frame5.png": "b246e05b23865df21185cf79682d59c8",
"assets/assets/Frame6.png": "dde08749b29afb265b3912c7ced80ce9",
"assets/assets/Frame7.png": "f9efde95b66a9a807f62e22f1a0ee3d2",
"assets/assets/Frame8.png": "4151af78ca2531fe770da408713255d6",
"assets/assets/Frame9.png": "0faf12986d38960fdd5de05c3de16c67",
"assets/assets/French.png": "f2b371b0c0e9e2347c187992f6321c64",
"assets/assets/fruct.png": "c594ed158244239bb9ccb4dcec9d2146",
"assets/assets/Frukt.png": "e3178427da26d961a06e45d74c64fbd1",
"assets/assets/full.png": "6971640353d04ae7640293659b6fc0ed",
"assets/assets/g.png": "3e9f73854db81ec836b2b0556f0223f7",
"assets/assets/German.png": "80d2e4fe78511589e545ec3ec7cf4ab4",
"assets/assets/gggg.png": "d7c7fd83edf853cbf9cd2193c1a33f31",
"assets/assets/google.png": "8d0f6723d3984f8b2ed85ffc82948114",
"assets/assets/Group%2520.png": "778f81deb0351ee894008411307b5a17",
"assets/assets/Gugl.png": "a3bf28430b0f9b3188e2aefff307afef",
"assets/assets/hhhh.png": "903b4818c459eceea5ed1a54e3afbcd5",
"assets/assets/Hindi.png": "276a4455dfec4fa149a31946b245e1c0",
"assets/assets/hool.png": "da98cc7b954de1971fef13f995c7608e",
"assets/assets/Icon.png": "76f4d2b6ab00674a5d7682daa1426fa0",
"assets/assets/icons.png": "76df83167b418f1326fc72e6ae227545",
"assets/assets/id.png": "e7145d3db8585642038ee792a5ac1c14",
"assets/assets/ijnf.png": "37e474ed029ac7151668d7c918e48753",
"assets/assets/image1.png": "9b76d8510637df5f59595f6ebe531afb",
"assets/assets/image2.png": "d9f5e9b130eb77d808d3e6d186ce7739",
"assets/assets/Italian.png": "4d804d8c5db4575a65f4eeeecd6c6f57",
"assets/assets/jjjj.png": "e4367b298e708f45ac6415ff7573f1db",
"assets/assets/karzina.png": "eb58d633764f52b5874c51df485fa71f",
"assets/assets/kkcc.png": "00c4d901de46760e6b424766fdde39ab",
"assets/assets/kkkii.png": "471774b026c98de4ba248851d4f231fe",
"assets/assets/Kkkk.png": "dc90f006ec5f3587b4c0f6f0535d4ecb",
"assets/assets/Korean.png": "fe9f36e92ab790ea70f529d126ce42b5",
"assets/assets/list.png": "325b3edef7139527c827256f65145394",
"assets/assets/List1.png": "1dbc218d800e31af84565da30ed46fdc",
"assets/assets/Logo.png": "1612ca7f07f4a1848c11074ff6454d6e",
"assets/assets/love.png": "c0bdb33e25cddb12689bee0958bb93b5",
"assets/assets/maks.png": "1675eb16560042f6fd899a8955281997",
"assets/assets/Mark.png": "e2867b4954b8fdc4f851fdafca0e3387",
"assets/assets/Meals.png": "71d52c71f4e5e0df7555f6ef5ba64bb3",
"assets/assets/messon.png": "05a3a0ebe2cc93785ca244defa34c41d",
"assets/assets/mko.png": "778f81deb0351ee894008411307b5a17",
"assets/assets/mmm.png": "95c20df3c1e39bbf3d172cfe7b0d77cc",
"assets/assets/napitoc.png": "f050cea38ba33f6094c295f2291e5ec0",
"assets/assets/nji.png": "429f1097d4bd6fed4eaf70c90f19a953",
"assets/assets/oi.png": "28c66783b6b204f1e60a9dd57df7527d",
"assets/assets/Oil.png": "3bf4910029d17df19d63f4c5845253b2",
"assets/assets/oorr.png": "d05885396384b97cb67bb6e5e7255ff7",
"assets/assets/photo.png": "5a6c66608224beb99740e928f8ae9ffd",
"assets/assets/Photo12.png": "9178e44dbd599f28d97cc3464e8258ab",
"assets/assets/photo3.png": "9178e44dbd599f28d97cc3464e8258ab",
"assets/assets/poo.png": "56880427e15a8645fe43b1add4d34aac",
"assets/assets/portfel.png": "2fdb3dde9d5471ff626e2273c8a8057e",
"assets/assets/Pppp.png": "a5a82b8492acd3f4dd570d5646d0153b",
"assets/assets/q.png": "f5c7234d528e90fa04403f4439f90a56",
"assets/assets/qp.png": "e10c34be7f7f0885dad263afce38648c",
"assets/assets/qqq.png": "6cd66fac03f3a23fbaba54d952cbd74d",
"assets/assets/r.png": "2134dfef88b30961cb766e836d6b0e85",
"assets/assets/rd.png": "636feb2c7d8c0e165afac25a96173d4f",
"assets/assets/ree.png": "de3cc58a207ce6fd5e9ef5140d6cef99",
"assets/assets/RRr.png": "8cd81909e428b682214e4d965c2706da",
"assets/assets/rrrr4.png": "3f68c0468a8adcb5b96853981886615c",
"assets/assets/rrrtt.png": "340c47e5c14846b15d9a76a0c32fc4b3",
"assets/assets/sasisca.png": "3ea8bd1c33104ac99c2de4c34f2eeda3",
"assets/assets/Snacks.png": "57bc9ac55d6aab487cb698c2631d5aaf",
"assets/assets/sprad.png": "13c92a43abd7b6983f331ee32a0337a3",
"assets/assets/spraid.png": "13c92a43abd7b6983f331ee32a0337a3",
"assets/assets/sr.png": "af1051669f9acb1a4aadfeabe5a4d480",
"assets/assets/Ssss.png": "8a6440a21e36fd80b9f6310414aa06b1",
"assets/assets/Task.png": "e2f483cf53ad5185131ff93d3eb0902e",
"assets/assets/uuuu.png": "9d91aac349fbb471296593dccac16127",
"assets/assets/value1.png": "4b61186ddd105a529b11a96a502d5494",
"assets/assets/value2.png": "d30b8e5115cf66abc7baf53c22f99f34",
"assets/assets/value3.png": "1180d4b26b76b1ec9b45ff9c3052551b",
"assets/assets/value4.png": "6c529c033c6f4bba6b5645cd7f5d5d79",
"assets/assets/value5.png": "a1b35a083a53833a46a2cce3c35c6a41",
"assets/assets/value6.png": "73e302f1e0d338f00f42c41ef3911208",
"assets/assets/value7.png": "2785d03c8193313646b2039014c1127e",
"assets/assets/Vector%2520(10).png": "5825104e6d7101e260119b5d06024e37",
"assets/assets/Vector.png": "eb58d633764f52b5874c51df485fa71f",
"assets/assets/Vegan.png": "bd4bcf3d4bbeefe8659d6878248d2ff0",
"assets/assets/vektor.png": "263ed89bd2d6c66f822e9a3c2d37c5e7",
"assets/assets/vgy.png": "74e39371c7d950f8603d3492b1ad4c85",
"assets/assets/visa.png": "8596d9cbf953e0b1bbe68e58957c85a1",
"assets/assets/Voice.png": "f5b6225f1565fb8efeeba5b757912ba1",
"assets/assets/vvvv.png": "39fc5a3626aa48d1a08c05cb853428b4",
"assets/assets/wektor.png": "5273257c81bfb5bd1922bdae8ffb55ae",
"assets/assets/wer.png": "4c1f67bcc309d9072465b9a26ec642a4",
"assets/assets/wpn.png": "de3cc58a207ce6fd5e9ef5140d6cef99",
"assets/assets/ww.png": "16cfd6ebc760c360a5cb4628e7e7c8f6",
"assets/assets/xdr.png": "5825104e6d7101e260119b5d06024e37",
"assets/assets/xxdd.png": "564eb33b67c3cd1a99e7491afca91324",
"assets/assets/z.zip": "e634bb23a82f85c6719c06c6c3b0a2a2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "609bcf78091b0e73f98bd2992c77cfd3",
"assets/NOTICES": "3aa0360772f08c7553585633e41a6665",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "24c7168e2e4d5d13adde3cef68fb8aac",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c17f4f5c3b6fa060e2e6fcc68b5ac4c6",
"/": "c17f4f5c3b6fa060e2e6fcc68b5ac4c6",
"main.dart.js": "4270e18fdd19838a268bff965df03ff5",
"manifest.json": "98c87ae6bf4d811990a3945f3762aac1",
"version.json": "c572754555e03c1f18b712e5b2df9602"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
