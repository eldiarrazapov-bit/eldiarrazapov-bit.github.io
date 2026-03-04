'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "e6282900d5ecdea26f63e663e3878f8f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "cc6c521795e46037e60b4fda16c5bc9d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "279ab76cbd9c7bcb730796ea3f0a1a01",
".git/logs/refs/heads/main": "8d7ae92a00edd5c6a1fde186e1ca10c0",
".git/logs/refs/remotes/origin/main": "af5e19c57c7197ea92f55f727fb377ef",
".git/objects/00/cf3ecfd9c9c473db0182d579f820b4996b932b": "51713e77ac3d34842e0013554ae582ec",
".git/objects/01/a451bc724d50d8a3b32a2f570aaa5f9bdabda5": "b5245ffca0f2864652fa1a8fdfffb3a4",
".git/objects/05/1fadaeb23a07003a8d45612d5441f2f1be23ed": "c448b26dba28b48c26f07b4ef03d5f65",
".git/objects/06/cd6bc7f60212647f937545652099d077a24a74": "2203d07f20f0a5c65daf51d5ceba443b",
".git/objects/07/4d8f002f4c91ec558f769054bb61da808ffa11": "b3b07d87d485e7d34aab57151fe9f618",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/09/321a326b8aac3ce83c13287ac422274924beac": "f26ec7f2b68701d0ed253e6d9ee7d961",
".git/objects/0a/06629d76da33007fd8b549c30b4cb2664e24ed": "193938df973d21d6ab155b91b9b5ebd8",
".git/objects/0a/d345b255fa5410ea6c2f80d2140fdddb2b2d34": "0c7a75862d4bda9b8512640eff155dcf",
".git/objects/0a/ed411bc12279e470a28a65037be4cd4742d567": "da5f326d010f722489ec4c5c2d6853b8",
".git/objects/0b/a39b2aa2b8301ea38ea961adef456f38f1bddb": "2b44bf90753c4acf11a10f63b99f803b",
".git/objects/0c/8174d50987ddd3498a908a9c48f19cf56734e7": "0e5d7a1efa93d4ac7459b326f8a10c44",
".git/objects/0d/8a2f578e68ed461284b45644931ff5be53d3c5": "abff3c862e469e8f504c70529a74c315",
".git/objects/0e/3322142c16240247293e1a928c0b30a2a061f0": "9d7f58a98669385915a2d7d68ef2fa67",
".git/objects/0f/6271dc76dc638f6e069e4bb526c8326b4e358d": "d1f8295ddeb71454c4de622498d84489",
".git/objects/0f/90366df838016372a2ca1a0e16c1c30756c364": "9691336e8ebc81c09f55adf83ed71b20",
".git/objects/0f/bd3347f66fa5b7699b4bd20877be5e93e962b7": "3112068d307af43363f6ee34c079e5ae",
".git/objects/12/9be1dcd59ee5bbb9279d09b028f9063c5261d7": "b4fd63988d024c7726a93d5c7b7fd4d9",
".git/objects/14/24c9d4f26bf25b766d86e1ef2b1d378acdc26d": "526997ed8ea40a358905251cf40078ed",
".git/objects/18/ab61158f5a5dc8f1199e73705358e6019aa0a8": "ef264eb9f95e61b9e10f460c8f7e58f5",
".git/objects/1a/12a5c60b570a6b67a5b6c98f10afd3fe5ef228": "4b9efeab683b66e4c655b87209005f5e",
".git/objects/1a/c2a59eb395e695284540930d808cb729746084": "a7aba57c1d254fe2c6fec4bdcaad2c9f",
".git/objects/1b/3dd1fc2f1531746e86e4ef8b9ef52541948131": "83ff2d6af00cc4a3313d42938bfde4dd",
".git/objects/1e/085a32471946b22cae532a2e28931cf7dd5fe2": "d6c8f6d51036e48001ca61e940b371a9",
".git/objects/20/e0c18e01f565bf1930f6b3476062609a9dfb7e": "739e83f59d763e1daa858b09934d3dcc",
".git/objects/21/c784ae341edc48fe0dcc4c407798a932a18a05": "465f4a3da83f5e10b8fc55ebfeeafb52",
".git/objects/24/01a0d196d5921fcd6c901dd96e95acf9170f37": "a4e2b0f27d88bc52b5dc5d501c49e7e2",
".git/objects/24/16134202e5fa2b5a63ee346d8fb81abe72b533": "f3ab224865fd6f6d76fc9aa09d503817",
".git/objects/28/201a3033677f31f7c4ea53b2a030f37af96b76": "9f362777810f174016e4ada958cc1b15",
".git/objects/28/c9e7c75de59527aca64dae9bc854b50e3cdeb2": "6a0156d7b1b5ed3a34e47c9d8fbd7b4d",
".git/objects/2a/b0941286d0bbbf085f9da45e82bc6999fb6edf": "44423a457b2b16749dd4bcd523c88de1",
".git/objects/2f/15c5c297931140015b703997a47183222f6451": "358c33b8b642485da3e1bd4e5b94f2e1",
".git/objects/2f/3c8cf0253e4e790fd51e008754929d88daa135": "49b71ea3f54991343b38716a0ce1025b",
".git/objects/2f/d2fc47e7921bf23248590599b5228b6d047ec1": "b4e6f37f093e250cea7b76f73318409c",
".git/objects/30/e39e6ec961353db9f503a8e8075a5f7bdf6453": "732956077949d56a0d2d415c57c723fc",
".git/objects/31/9cf28746c801c5d0223fcfdf79539f7b804b8b": "58d62ab86d10b86699e27c2f405c0682",
".git/objects/32/be98598115b0c1c5b9f9c31c2dab0889533137": "4cabe2881b2d15429aa97d933d413302",
".git/objects/34/31b6078c01216b7476eb6d39bccaf76d5b9184": "23b682bd31e2e07200ac9f54363af3b0",
".git/objects/34/958dad7ba68374b01956df03e0ba1953dd775d": "66ddb6ccadeeeee977a91390c0b4dc70",
".git/objects/38/8dbc6c88b1c6205896e1642a54736c89e077ba": "668b39a7e29fde53608951b3b082df10",
".git/objects/39/ae2616a099d479b1e097241ef12442fe455b44": "f2dedbcf6be74d0cd9cbbd7ed8929594",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3b/2dca447e47d9689ae57bbcf7194d6e82ba6074": "639dfa28743adf2bf6b0c113b492fd53",
".git/objects/3b/304baf2a0c9aa01295c3b47ad7c9038992e42b": "7745bc4352c6e72c12f5756fc1706795",
".git/objects/3e/48946bfc0330601cc28b9b6d5608e49778ecd4": "741c23d766d98dc1d451094a48fb3623",
".git/objects/3e/77d79b20501ce8a00e929c019697012608456e": "a723021d87e69023c234b7ea82af4390",
".git/objects/3e/7ede1add5f825afa5572b98f41b923d2ff5fe0": "e728d6d67566e5adc35b35873ad88ffb",
".git/objects/3e/f8e83ebe74e0d8766132ad53cf242485d21847": "c84ee8ffaa8fefe1e396b5a4c9d75cb9",
".git/objects/40/7504cf994960305abb31ba4100d076bd5d152a": "40d056fed88517b62d545750d03fa9c0",
".git/objects/45/055288b637e54684240791da489a4125c117a9": "c979a1bf6026571b271a8afb25c223b6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/38b44b80275af19bce9a2f83e63822299f15ec": "3eb9398efaba53f5216db4c3fabd141d",
".git/objects/47/d6700fd4c2012d29611f1b868cfb6cb0c25f6e": "79e7b439b474b3ab092e79d6329f9e27",
".git/objects/4b/7e0b8ccfc582e890dc2687b5d55a25d9a47b37": "345c91470f6c838c1f86b2bad9e80e0a",
".git/objects/4b/a26ab43fb729149c7f5b80580ae9aaabd45a17": "c573da3827cb27ee6c6d8d8c9d0167d6",
".git/objects/4e/0bf78463cc6d14ed6b5a7bdd5ebc22334f858c": "0943a0cf7e2881b45a95011cdb48c5e4",
".git/objects/4e/291dd098df963dc6431faaf43731cb44a33956": "248ad11b3ba0989f8454718044330c39",
".git/objects/50/0369287aba7a4cb71374b03bb8cd3a299141d1": "8a4d0260f11fd3546cf18675c0b8708f",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/51/6ed875e5c08d42fb2c69a0c9da69111b0e19d1": "109aa19142dbfad1def10439bb648374",
".git/objects/51/71f71560dc16789649e82e8a141bcf1c55535b": "08e9b9534d0aebe8a7c20ffe2e731521",
".git/objects/51/d567a4fc9d4cb7d57780bde8f7ae3f5b9d273b": "47ba2677cad85252be4f82554eb2bd67",
".git/objects/52/1f519188bc7f5673e11da6b360fae5e1134f96": "f84389bc12081d40062a6a325f48107e",
".git/objects/52/88751a8516c871470341158ce0c342ce6dbb93": "a7ce7106bbd85ff1ebe78df9ef42f4fc",
".git/objects/54/c557f5a9c7ed2f386c9711db3b08ea4154fb99": "408c6f39f221f54e783fc636e76b0240",
".git/objects/57/1663804a2e5abad3c51552ee4230ea4cb70de0": "868f5498ea992af1861f86ce494fcb8a",
".git/objects/58/632f265747d35cdeef60c021d9ad7086568034": "fd5dc6655fd046b61eaa79b52f717b4c",
".git/objects/58/e4a5e51226f7c45acacc4e5bec675e41e70c34": "77da701a7b597c0510a00674ffd5fd95",
".git/objects/59/832e83a5431812b9faa1f0884b64bd2a9fa894": "f1652fe85ee6cc214053591fa2a68f6c",
".git/objects/59/87d2644cc3a3edf3455adbb1052ac465ccb7db": "1a6a4846c323e199dced367e5c5c6b86",
".git/objects/5b/372162495e85a5745420256f96c26edb69c58f": "9e5df86d5153b360ad3f17b218f5a48e",
".git/objects/5b/7e2169c719b17f352ebd89a319f502e0b1467e": "2feda90a3e862d0401e06d0badde0040",
".git/objects/5f/cf11e66b2e748433ec75b4586f0b992130a6fc": "6656e0ffeb5e606131599a46206bfa73",
".git/objects/60/69a440d7e9af7a5982fa3bcc20402ff18c5503": "c96f155e5ef384700dea5db6f57d0644",
".git/objects/61/6b1885692c027b713d28830de8652772617ad4": "63c3525b9bca69ea861a93d672efef2e",
".git/objects/63/ebd40b9baa9c62ce5037786307fa2194274d38": "ace66681e3a2c1df03121fc0059dfcb4",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/d97609e68a563e8c5a67b541ab4dc285a02fd1": "d682b11f7e3928af98473f784da87ed9",
".git/objects/6d/c356d6318fa4e11d5a541fe97fa8435dbe9e1b": "e09a01cd583f93af2b8ec07bf333cf73",
".git/objects/6e/9bb1474080421751570a7ada950c59fa37615b": "ca4085a9988e9bbd6e8619b423e147b4",
".git/objects/6e/dcafe99ed8b8bd846b402ad35f15f1dbeb5692": "aafb7b2a2403bebb1f2e2a06cd83d30a",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/70/c4509b054c73281dbb2205955ef2df60bea3fd": "0c675d4e1dcabe35c50a09308d15c2ad",
".git/objects/71/91a9ec7acb6fc110ad98253775acea3843c8bf": "be6fe6573a79eda6a367af0e770fb98c",
".git/objects/71/b4e7391e38465d0360f5d15961e79a12debce8": "6902618e58a69ed608118929c0066454",
".git/objects/72/ebcc0261aeb6abe0be0ce2762ebfe4afa26b8d": "eab58a71a7c1506e28ed4180fa933092",
".git/objects/74/4a606559c827be0c4d7731ed81d415e62bd83c": "ece0609f58200b55cc5f33da9f7756c3",
".git/objects/74/8954c9cbc2081ff69d0664167cde0a049c2340": "d2a4ab12a2ecb9b905b1bbe2370e322c",
".git/objects/74/ad5ef43e5604bb2ded98789139ad800121173f": "e9a58dfbaa8a153a28fea5f6d58f32f2",
".git/objects/77/2cb993d635fa0b2628d159a7c59e9aa8c9ba7b": "9f4cb9aead7e22867330144b02ec64b4",
".git/objects/77/e54118331838dfcf182e170cef33ccd765bec7": "0a86137b070cf7f88a6d3d70fe66a31f",
".git/objects/78/57a44a3cda55fbbaf2a4ed291f12d8037cbda1": "7ec51adab007831f7c7c50495647c705",
".git/objects/78/e176bc031c30b1785a6bb96c08010d166bf31c": "27a1224a26fd5579d83571ad6bcd64e1",
".git/objects/79/cfee020b1f294b33bb72ded06b456649b46163": "d60d18dc6e58111af5bd06f35b8ad92c",
".git/objects/7a/db3c3e57fc69e57f3e6d21339d5bdf2122e5e3": "0512ff4d7367135b0f647a53e5337fc8",
".git/objects/7b/7cd55ad3a82c455e1c4576aec8a8537a34da86": "e3d960436c0bac03d131df1a8c721e7c",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7e/c950ea7823e3a8671df0cfee6f888be432346c": "d77d6ccaf913ef81b603dd17ca2b1469",
".git/objects/7f/e350f72c5d3d849bd99083717a05cdf713f698": "4fb7998d5c8e2aee8e87a3a7ce439921",
".git/objects/82/ece457c5bb8831d6f12c87546231a5274dd9bd": "8303cfd5817f7d0da0b0a3b2760fa3ee",
".git/objects/84/7402bbda25b094a2a4e01f4756bc5a29c2758e": "ae9b1906d1417d0eee180b90a3268745",
".git/objects/84/82aafe64155657c9ba3a91422b3206e96dd3d9": "cb19ec05b1259585bee739003136e843",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/05994ea8dd4d0b1685f7747806b033b82124f2": "9a3fda2c22d065e89e1bcf786f40a2cf",
".git/objects/89/3d8e710967dd37ca955f4c74e8d549ff8750c5": "0834d56f4dc045ec18276c385853882f",
".git/objects/89/d0fd67c89801839023b7f90eed503360b4e17a": "dbd039d914f525156e5c80f163deafbe",
".git/objects/89/fe9e7125a39198692aaee2c62329c421f93a2b": "736d76d60227e960c3e9d1c039373ef6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/4ef6478c35f69eff6f3a09a15d1c257dcb6843": "5d837808928dbf76fdc5b01250aa6a28",
".git/objects/8d/d626f4dd091ac3acfb294b6539ba9368592797": "ff5654057294d6ba3a429a0307e9f98a",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8e/5e9116333e0615cd4a37333b404668a938bca6": "411999a6fa69c4f72301aa596899a317",
".git/objects/90/4c295af27f3f8aa1b9cd3983a598cc041ae9fa": "1509449badcd99d8b92520ecdc051ef1",
".git/objects/92/362660756ccace7d5c1bc79d34422b08fa3994": "837f75d6e72d058f5628f714bff560b6",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/98/a1309e9118ebe6eb4dd8f64fb5103890c2e063": "487c33074cfdd173ff9415bbbe981775",
".git/objects/98/c90b79dd791a8a03ec9c1b5f6e0f6394ff57ad": "2e38182c1ea378d0b2b31e8c67826d12",
".git/objects/9c/ac73e9c51c4e1784cee03263faf02ee632772b": "9180631da3bf90a9226000f37bff69b7",
".git/objects/9f/32141b77ef77316f812cb9bdb57737e8425ba0": "e6e5adf63ed2c257a8c0a1860a4ab74d",
".git/objects/a0/0c35cf19cb02c46190ff82fd8f2676c53f1626": "5b99bb4c35a9f8fc22c3ff2780d9cb8a",
".git/objects/a3/ad1d8d0de0a3ba5f61629b05151e53a2285311": "bc4ecde6a9485e08600b64f65b4a46e3",
".git/objects/a4/3769739f3475188e730490438210023a1bc51b": "66bf5b0c138513cd5c9ee84959479933",
".git/objects/a5/78962e876b5ed7ef3aab4c3858aa2fd213c9e5": "bd4860fe62af887eea6310e508547e8e",
".git/objects/a5/c0af186e129ff76488d08db449e3ca05a5e328": "4cdef43dfb5557d474e7ae64b0adcf52",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/aa/f32cee54f7c8a9c51b6af66be8433a574ae0e1": "4b64961458779fb7ac384c33e1396424",
".git/objects/ab/9253640239e4c70bf0d135785d9b790731f6b7": "25d8b9f6133496a2be54314a6c4e6f44",
".git/objects/ab/9c84e59cac020123e88670edd49a315cf2b4d8": "2671bfd81ee6ecd4de8513d028bbbd94",
".git/objects/ad/b3896863272927d021d70a61d261b808eb8a3e": "28e4d468bc0deb69f673b5f3c15b5797",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b4/0ef1de1eb27d8668994a8ecbf7dc7c41a5cb7d": "3efe9b4c3eb4be96e6abb071ff582e84",
".git/objects/b4/6acdca5ed94d05f9cecbe8130b4038c6345ec3": "288d8ccb014f83f390a1538ba3b5f5a7",
".git/objects/b5/5ea48f27dce0ff24a2ab6272ec59fa8a3a8ee3": "b406f97e17367843c851ff3e465b75d0",
".git/objects/b5/b59ef4c226169f728efcab9104f32b440dec3c": "dd8bc9f410d3055bc5a9b8c913628f73",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/b8c4632b9d2bdc9fd4204cde7a7b8b90228388": "a55b0b4133f37b1c9da638abc73945ea",
".git/objects/b7/f2b1b56c439f95c2124f9fd371d394bcd3de9d": "eb19fc53f6ffed002d6f322e883efaa0",
".git/objects/b8/c937d4c9ec140879a2d0514880b2ff4d322afe": "5b251744a8f98e8d366bc3185d5e3975",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bb/039d213a7494fa761644cc29d77000c39cc430": "d077722cf03d049ba4943937de0d6391",
".git/objects/bb/42cdb1f4a27f6533c6d6404e2e09fa7754585d": "444ea9f2505bac745946241410a3e55d",
".git/objects/bb/7954289c275a268d903a45cdc60e3ddc246f8f": "86df8917fd555bd54f2e993a8896d4b3",
".git/objects/bc/81a99fa99907cee16ff0cf574c9244b00f94c5": "6ddc2c72db2d599767e361dc294eb125",
".git/objects/bc/db26c622e4f38004462cf120d0b145abecd4af": "e6a5dc1f98c9f2a6a14d1c71637a3875",
".git/objects/bc/dcfa511b87e15216f59dfb5a4fa5b868c2c3d8": "c80331e3e8fb744b4a58681cc87759ca",
".git/objects/bf/4cfc8468b8ab58160ee958dc33c06ee4b14a5c": "02ba93aa51b96fba37df2b2ec60ca948",
".git/objects/bf/aed0718e46539a08a8e847f05b894c2cecb587": "def483fa77ab54e6b41e1569fa8c33b6",
".git/objects/c0/07085186b9e5a6b6bd0d8bbe7c3f5a7e936887": "9dd57d251ba53604ecf76e1cf9f8f930",
".git/objects/c1/a27139aa64376a809c1ba5398c14305dd02e17": "24a0d22b44da59b1e02da2ae51f6dfe2",
".git/objects/c3/316329c19158e1fb66d3b3e791f44dabd3ac84": "fb3eb5ac9530f561c9268de5d563f702",
".git/objects/c4/b34a198e23c797718a993c0f623ffeb435de8a": "0a9b3d5e049aea0b1ed560aa22165fca",
".git/objects/c5/1331a03422c21a56d241267e5e6b8de124c607": "784f8f122f90d8b702ac240de66979a0",
".git/objects/c6/e81a8f43b8b597daff8b1264f5f1b8c77446a7": "82432bd8e12e8f7131a68854ab41c909",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c9/03692c35b09b779870c77e419259795c054537": "91ec6cfd52aa009642604f60addb42b5",
".git/objects/c9/0af0d5f533b94c755767d771d61c9cfef70980": "f25654cd1c1f133db6941fcd0fc46f07",
".git/objects/ce/26108e9a1217ce849e04749dce2a6428b404e7": "62b9eb1ab84d9de73f3efbf2c1af0d40",
".git/objects/ce/939147e291371869f6b4b289b6672634d81b9e": "76265645b445ed4caf89fc2cdb50443a",
".git/objects/d0/98bc1da9548d5f27d67e9f78b63a03662fe94c": "f1f91dd0b55e95b7419bfad03ed60783",
".git/objects/d1/0405a660cede743cf824ff887490427c8cc7ee": "d5198b2b26fa594072f0cd3dc582b04f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/77f4b8cd839b2fcbce4716eb8beb02bf49550e": "9247f99b745ea48f02ca83e23b6a3493",
".git/objects/d4/f1e5acba0edfe1ea8094dbdd3b4ee3a555a89b": "33cf40ad659af3160e26b9e56880400a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/e52a6d41f5083a40df49a11874498615fb4057": "bc5bdd115bf3ee0822146ce4e5a9d573",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/1e3c24a024d6b12b211cc45ee7da93469b7ab8": "718dea3d0b06d014b4a037fab47fd957",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/d9/758c2b708e8b02cb83acdadb23af2135287ac0": "5543832b22e75a6f1c97973d1941ce02",
".git/objects/d9/96eb62f6a149bfd6cc3d920d0ee3b46c53dd65": "5713c0361c79002c8e36147e1d4fe5f6",
".git/objects/db/53e000d3b2c5733ad1520d787e22411be69295": "db9f9538d2e8e324f96826520d1a95f2",
".git/objects/db/8fb0397ff41e4c1c2b6aeb8d61bdbceb5fd592": "b1e4fbc2d7146405a94a2fe392ccff84",
".git/objects/dd/0683c8949b4ce848447f8f4eb6d9b520d19f4f": "8bf9a78c29be8abd13dd70c6b2917b13",
".git/objects/df/46c872cd02d63f723532c2b5db3df7b781ccd4": "7129626570a6d704fd92947b993a5441",
".git/objects/e1/0bb3eea729d6d7aa40b81afd416d0879ecc556": "ff5117070cf4abc25188a01e1419c136",
".git/objects/e3/acc0a053f455407d277e96b9d11abee6f5803a": "971edc53595ee6aaad2458c25c95b637",
".git/objects/e4/a91b166724b16605077e2aeba04fac2669e58e": "d23e9df72474f1f8885fa52e00cf53bb",
".git/objects/e5/e9a7e33fb73e317e2a0a56a585c7d47d62fb24": "2ad6e826b7ee4eb1a9caebffbd128bf0",
".git/objects/e8/92684fb6b522ef1d202f1727762293b2d18681": "3b6c22c27622178a8a77aa239177e35d",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/01b3018f0520874c77ba2897107a7edb830549": "867c798abaa2981dad50726301da34fa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/6187f4a4e9161e0edf2a9198090fd5c401236d": "899ca73010a9b20a88ef5910b08dd065",
".git/objects/ed/aad53a02a28037ceded1f6356af8b83e23bc83": "2ac380c88c7d90f594f94f5a44983803",
".git/objects/ee/1ac830e52891896920c8a5c8556f196c9a85f6": "ae0c2dc8a55b85469d6ed104b971b8d9",
".git/objects/ee/af947f1e61bdd1e4988b714607a0080845f2d1": "4bca0e837694cc15a3e94fa2522540a8",
".git/objects/ef/c3f284e0bb24fe844bfb4a5b4399a5ccfe8d7f": "5cb8ed139fa550feb9a9d6a1609cf5e3",
".git/objects/f1/31ac6aea9764c027e0438ce924c8470961bfd7": "95bd8bd07b06f831643b5aea75b98213",
".git/objects/f1/43a47f1e278d55d5cb598bd616075952cd42d8": "8a6646cad6b887841a262c1a97830677",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f3/76e662d051f076db1dd1063971c9801634b8e0": "b4d467cb2afb833d6f1547be12042df0",
".git/objects/f4/fb43a31ef72b895eb3a525a1825855c92156be": "648cf8920e910086b8e608a16a04cb3e",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f7/2f31408fed88e9d620134a9ad7075ac910cd9d": "13282ba262038c840f8179c7e1a30945",
".git/objects/f9/cbe42941d65393b9209460c4648a4ad1969196": "9e0a80c676a14da3960b9593d992344e",
".git/objects/fa/870b01f1e735607da93609a3a5fe3dd44ce735": "ea65c4110dee080ae65af834a8cfe0a4",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/fe/7dd48afd833cd0f1a9bf980d5f5f74cc9df685": "468ef471eb89f65986f56aa13d5140c7",
".git/objects/ff/eb01ff52e07cee6a2ac5aa52a85e80cace0d3b": "3def303558ae59d453fa30c433db58fe",
".git/refs/heads/main": "91fda4cc213f8a1732ee210d64a77476",
".git/refs/remotes/origin/main": "91fda4cc213f8a1732ee210d64a77476",
"assets/AssetManifest.bin": "07ee5503fa23e0304e4a47637bded36d",
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
"flutter_bootstrap.js": "6b6faec74338b2f055813cfc04a65162",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c17f4f5c3b6fa060e2e6fcc68b5ac4c6",
"/": "c17f4f5c3b6fa060e2e6fcc68b5ac4c6",
"main.dart.js": "dcc74c37cdd1ca9b5603501647d303e0",
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
