'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "affb7a04eb0e78d17a39bbbf21ed9953",
"version.json": "88231b857fefba57b41a166ed4d250b3",
"index.html": "5f380d814c8c070da9fa67394cbf9972",
"/": "5f380d814c8c070da9fa67394cbf9972",
"main.dart.js": "df80902b480f1392198bffc4c2d1b265",
"404.html": "df5776b9e636c7210722f52c3d457ecc",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "a16d7ea39360df2972a268e93df9707b",
"icons/Icon-192.png": "5cee44c901f7fa3340be4fc0a0648f8c",
"icons/Icon-maskable-192.png": "5cee44c901f7fa3340be4fc0a0648f8c",
"icons/Icon-maskable-512.png": "30f382f20dd418a9eb9b5fa9ba0d802e",
"icons/Icon-512.png": "30f382f20dd418a9eb9b5fa9ba0d802e",
"manifest.json": "946c1ef2c8c7594fc15b0d52de1ab550",
"assets/NOTICES": "243b7c58cb668e606ab171c8d3518033",
"assets/FontManifest.json": "c3f292178b460630b879bb238c21a6ea",
"assets/AssetManifest.bin.json": "9566f0b34c430d5b43382dee9d0bff27",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "4392d7db2896aa7740241c503a6cc180",
"assets/fonts/MaterialIcons-Regular.otf": "3a08e5c525b1b0a6ef484b16c28a0aed",
"assets/assets/images/photo_2.jpeg": "fb438b13ea077e81742e4a7ae53dfd2e",
"assets/assets/images/projects/volo_thumbnail.webp": "004ddfb3f62d4e4e2a87967530c5e6ef",
"assets/assets/images/projects/wuerth_thumbnail.webp": "7eaa1b0416c411d9b95a147ee18b8e5e",
"assets/assets/images/projects/cero_thumbnail.webp": "c2d696b4b2eb35b549d0c8632b2ead9b",
"assets/assets/images/projects/mamgo_thumbnail.webp": "71069fa1d6a80baf6880f58eed7c89d9",
"assets/assets/images/projects/volopilot_thumbnail.webp": "7e65f0d72482c60426ecf61917cfa614",
"assets/assets/images/projects/xandria_thumbnail.webp": "bd7d382d818d5d290ef56939c0d75eb5",
"assets/assets/images/projects/icarica_thumbnail.webp": "b8bfde33f59a885bfc0fc9c8b1d4bfbf",
"assets/assets/images/projects/blupaws_thumbnail.webp": "6e449bab16682f1376556e3e6c8074c1",
"assets/assets/images/projects/crumbss_thumbnail.webp": "f86f561c390975f77d00e5c3ac01362d",
"assets/assets/images/projects/callingvault_thumbnail.webp": "6c5a4586cbecd777cdb23a50ac80b6ef",
"assets/assets/images/projects/zokar_thumbnail.webp": "a6f309976e27e34fb898965209fb002b",
"assets/assets/images/projects/dasher_thumbnail.webp": "1495260572ea4b55c40332d8145b7e86",
"assets/assets/images/projects/chargesol_thumbnail.webp": "06e71ef87588c9ab7f24dc4d42911770",
"assets/assets/images/projects/takeprofit_thumbnail.webp": "d88b1ab2a219deaa9d6221455a5fb8f6",
"assets/assets/images/photo_1.jpg": "38ddcd20112c78e4e5c1c7b691a01bb0",
"assets/assets/images/dummay_picture.jpg": "6241a612d1afbb0d945841f32bd8050c",
"assets/assets/resume/Harsh_M_Shah_Flutter_Dev_4+YoE_CV.pdf": "a17cad6e410b881bca4207920e307071",
"assets/assets/resume/Harsh_M_Shah_Flutter_Dev_4+_YoE_Resume.pdf": "77d161c1a80616a84cb5ebe4f9bcf135",
"assets/assets/fonts/Montserrat-Medium.ttf": "af37bf893061c3cdadab069f65420975",
"assets/assets/fonts/Montserrat-Bold.ttf": "cf3a2eaec658aed131fe6a8cc3cb19ca",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "bef57ba1c2f4d8e08058e9e3377af8fb",
"assets/assets/fonts/Montserrat-ExtraBold.ttf": "171fa2772645ee97739d3d2143cdefcd",
"assets/assets/fonts/Montserrat-Regular.ttf": "6133d7c8d5fdd8fe64037534b7bb99e0",
"assets/assets/project_mockup/mom_kiosk/screen_1.webp": "adad24077bab9e7348f3630e839d5dc7",
"assets/assets/project_mockup/mom_kiosk/screen_2.webp": "504ff0aae415753d3af579cca7bb96bf",
"assets/assets/project_mockup/mom_kiosk/screen_3.webp": "3386d77573608845281e43d4ea8a4ddf",
"assets/assets/project_mockup/mom_kiosk/screen_4.webp": "79ba2bb37bbcae1838fa12fd842bbceb",
"assets/assets/project_mockup/mom_kiosk/screen_5.webp": "475d9ae56d233984e1929baefb0a89ad",
"assets/assets/project_mockup/medantv/screen_6.webp": "de9905200c35fcd0e35bc91b7a48e0e9",
"assets/assets/project_mockup/medantv/screen_7.webp": "2c50b43bab5d0ff8a7492f74ee3dabf0",
"assets/assets/project_mockup/medantv/screen_1.webp": "8664eeaf1d94f2726ff54ae9d399e1cb",
"assets/assets/project_mockup/medantv/screen_2.webp": "c9018afa257c47f3d219001d644b0f41",
"assets/assets/project_mockup/medantv/screen_3.webp": "db4aa01292a08acdeda530476f6dbfe4",
"assets/assets/project_mockup/medantv/screen_4.webp": "974b94d20a757745e29d9c60d4982d46",
"assets/assets/project_mockup/medantv/screen_8.webp": "6a1c048a6585f478f04bbbbd3ad6b0fc",
"assets/assets/project_mockup/medantv/screen_5.webp": "f848b14c8abe7374db7b5b86a691fa51",
"assets/assets/project_mockup/country_kart/screen_6.webp": "6833fd32abccec071d899e03a9bd15d0",
"assets/assets/project_mockup/country_kart/screen_1.webp": "ff5468299347f0de8af79ff1a28d1bc6",
"assets/assets/project_mockup/country_kart/screen_2.webp": "4c61be67e22e57d428af80fd5f35f077",
"assets/assets/project_mockup/country_kart/screen_3.webp": "57b80f58ad9870bd1b3d40b28fcd71f4",
"assets/assets/project_mockup/country_kart/screen_4.webp": "1ae4a59229651b6132d9426f160a86c3",
"assets/assets/project_mockup/country_kart/screen_5.webp": "81c346f1c86b12583b9ec9d8e6787b18",
"assets/assets/project_mockup/calling_vault/screen_6.webp": "38a589d706b0040d2cd333407a947560",
"assets/assets/project_mockup/calling_vault/screen_7.webp": "def4d1146316ac1ca3a69d08b9c29243",
"assets/assets/project_mockup/calling_vault/screen_11.webp": "761bf50ba04da1b6ad5faac962d8a889",
"assets/assets/project_mockup/calling_vault/screen_1.webp": "1bf491980010f2f88604d9f5c58684f9",
"assets/assets/project_mockup/calling_vault/screen_10.webp": "5584c33b740de8c5a930bfbf243079eb",
"assets/assets/project_mockup/calling_vault/screen_13.webp": "40b8fc908c8f5d9cbc4a8ef54cb68600",
"assets/assets/project_mockup/calling_vault/screen_2.webp": "16df46571548fe4ef806852f5f358deb",
"assets/assets/project_mockup/calling_vault/screen_3.webp": "3fe17acdc852d02089ea8f916acb01f3",
"assets/assets/project_mockup/calling_vault/screen_12.webp": "d47f3138187882b38f42f0d74e088b6f",
"assets/assets/project_mockup/calling_vault/screen_4.webp": "161fd1f4bfa7b958765bb97e086301eb",
"assets/assets/project_mockup/calling_vault/screen_8.webp": "60a0d3cb584a1ea71407dc3ebd013ee4",
"assets/assets/project_mockup/calling_vault/screen_14.webp": "ba8bfb7b93c4c61a4d4eca0429949215",
"assets/assets/project_mockup/calling_vault/screen_9.webp": "17a1a40226decdb78562c778f752e503",
"assets/assets/project_mockup/calling_vault/screen_5.webp": "2eac9d0339dec925e4f80e8e44d39c23",
"assets/assets/project_mockup/utah/screen_6.webp": "68eada23264bf2ba1e48d9ceb978e80b",
"assets/assets/project_mockup/utah/screen_7.webp": "518ae61afb61618c512219612c0ae6c6",
"assets/assets/project_mockup/utah/screen_11.webp": "d020dc4a445f72002b3ce6b7a963d497",
"assets/assets/project_mockup/utah/screen_1.webp": "c78201a4e165955ed71db59f9643955e",
"assets/assets/project_mockup/utah/screen_10.webp": "285f3a8d77097df07d5435a9a9b09721",
"assets/assets/project_mockup/utah/screen_2.webp": "8bbb3adc3c766b942f6d3bc2109b940a",
"assets/assets/project_mockup/utah/screen_3.webp": "67670c66375a2255b35f6d37144d7a51",
"assets/assets/project_mockup/utah/screen_12.webp": "d7826bf0e01697c5a653acbbb45c57d1",
"assets/assets/project_mockup/utah/screen_4.webp": "7e017d312ddb52fa8b800c54c02edadd",
"assets/assets/project_mockup/utah/screen_8.webp": "862e182da178ab1e6da252f2ecdf7ef0",
"assets/assets/project_mockup/utah/screen_9.webp": "9bc2f46e25011aa492ed4f026a9760e4",
"assets/assets/project_mockup/utah/screen_5.webp": "2b371a429df2c6c4f24374b53f71c30f",
"assets/assets/project_mockup/scholarcafe/screen_6.webp": "47b8f10eea05559ef61bcdbf92a72e82",
"assets/assets/project_mockup/scholarcafe/screen_17.webp": "5695e2a3aec537dbde7aa7977b1f96eb",
"assets/assets/project_mockup/scholarcafe/screen_16.webp": "3dde10b93c001d93b30d9354e486ba56",
"assets/assets/project_mockup/scholarcafe/screen_7.webp": "0a952e5fa223b928debf66ac92fd5af4",
"assets/assets/project_mockup/scholarcafe/screen_11.webp": "8c451bfdc0a6f3528154dc2929cce617",
"assets/assets/project_mockup/scholarcafe/screen_1.webp": "ea05b779264ece88eff3a1d2bb4f05b9",
"assets/assets/project_mockup/scholarcafe/screen_10.webp": "10cba8e6e93bece7fbe75f3a9caa5d97",
"assets/assets/project_mockup/scholarcafe/screen_13.webp": "336ebf5a0b6fb59b13153469bef9f4cb",
"assets/assets/project_mockup/scholarcafe/screen_2.webp": "9a5b62cce45645e6a6c0e6497f6fa989",
"assets/assets/project_mockup/scholarcafe/screen_3.webp": "1569e86698477ee9f367e1636e957545",
"assets/assets/project_mockup/scholarcafe/screen_12.webp": "cb62dd525ec1a65abeef2d279d1cbc32",
"assets/assets/project_mockup/scholarcafe/screen_4.webp": "906193432777c2ed91bbc1966f8f21e9",
"assets/assets/project_mockup/scholarcafe/screen_8.webp": "267b52e8edd7a5e9db7825d96b5d74e0",
"assets/assets/project_mockup/scholarcafe/screen_15.webp": "81a15d82ec775760606e2f01acd06099",
"assets/assets/project_mockup/scholarcafe/screen_14.webp": "389cc533f8558f3c9a0b58fa7f76fb62",
"assets/assets/project_mockup/scholarcafe/screen_9.webp": "cdc8dde3fce7f6020c8e9e842b4da5a3",
"assets/assets/project_mockup/scholarcafe/screen_18.webp": "29e96f19a72d16a7a694711fae898675",
"assets/assets/project_mockup/scholarcafe/screen_5.webp": "a4e55a88aae64841dcc216c4ce511137",
"assets/assets/project_mockup/softify_qr/screen_6.webp": "96847af0bc69339810caa5f47cdf8c21",
"assets/assets/project_mockup/softify_qr/screen_1.webp": "e3b4b176eb33b53f30ffd5ee8bc86580",
"assets/assets/project_mockup/softify_qr/screen_2.webp": "1577813430818370ea0750c76c5ebb34",
"assets/assets/project_mockup/softify_qr/screen_3.webp": "163dec5cb7922e3824996348515a4e72",
"assets/assets/project_mockup/softify_qr/screen_4.webp": "493941442a7a50378ed85c4c0732c0a3",
"assets/assets/project_mockup/softify_qr/screen_5.webp": "c1174d451c284951bf4baf3e8758fe6e",
"assets/assets/project_mockup/mom_employee/screen_6.webp": "4fbe94b7b15c13a5219c025294f86ce7",
"assets/assets/project_mockup/mom_employee/screen_7.webp": "302d45f5c3305cc2ecb18a6c48242c14",
"assets/assets/project_mockup/mom_employee/screen_11.webp": "ae980234908c689abe7979df493eb22c",
"assets/assets/project_mockup/mom_employee/screen_1.webp": "c9ead69a6394c597de947ef75f89ff9a",
"assets/assets/project_mockup/mom_employee/screen_10.webp": "5da5c4893689150408be1c3905772459",
"assets/assets/project_mockup/mom_employee/screen_13.webp": "613b30b5f1f737e3c0881560a79e7ca5",
"assets/assets/project_mockup/mom_employee/screen_2.webp": "c794ef2239e5c3e85380f42f6a1a4a4f",
"assets/assets/project_mockup/mom_employee/screen_3.webp": "bd490f9787fe5ed9c2caa4584080f6ed",
"assets/assets/project_mockup/mom_employee/screen_12.webp": "17df9e241bc5b61c4308ee494c0b599f",
"assets/assets/project_mockup/mom_employee/screen_4.webp": "174683021c8fc1ae42dd60a855c0680f",
"assets/assets/project_mockup/mom_employee/screen_8.webp": "26c261c988fb70399de656c0d8374211",
"assets/assets/project_mockup/mom_employee/screen_15.webp": "9e4b58920a75875cf8cf40ef89d399a2",
"assets/assets/project_mockup/mom_employee/screen_14.webp": "dd941a0b2af8c78c7b95ce87a53f0872",
"assets/assets/project_mockup/mom_employee/screen_9.webp": "7365dcd4b2ba9792a377f95cc943ebd9",
"assets/assets/project_mockup/mom_employee/screen_5.webp": "bb6acec02fc7d885b5fa9b29c9a88742",
"assets/assets/project_mockup/norvo/screen_6.webp": "e8d7de94d1e67727ff7e5b38f98b182b",
"assets/assets/project_mockup/norvo/screen_7.webp": "a8f5126cbc4b92e310733aba172782e4",
"assets/assets/project_mockup/norvo/screen_11.webp": "b12acf29eeab34f9f0fb90e374cd6014",
"assets/assets/project_mockup/norvo/screen_1.webp": "b4ddedb8f203d8a734db632673d1954c",
"assets/assets/project_mockup/norvo/screen_10.webp": "fa4b74ff1f8499731b3a59a627d3311a",
"assets/assets/project_mockup/norvo/screen_2.webp": "8af2a17ecb52e6af1fecdf821f3cae0f",
"assets/assets/project_mockup/norvo/screen_3.webp": "12eec18f0e3b241bec844cd2b8d04512",
"assets/assets/project_mockup/norvo/screen_12.webp": "5016ba4c241320636c2251d748de31aa",
"assets/assets/project_mockup/norvo/screen_4.webp": "bebb95b58251c9ab662b86b471ea7d7a",
"assets/assets/project_mockup/norvo/screen_8.webp": "7831ceaeaa39c6102560d2ce4391fa4a",
"assets/assets/project_mockup/norvo/screen_9.webp": "e885dde3bdacc08690b8eac66f5b1c9a",
"assets/assets/project_mockup/norvo/screen_5.webp": "d703406129d8edbfb661384ba11d0671",
"assets/assets/project_mockup/softify_pdf/screen_6.webp": "eb823f6c2e33fde66d9e0928a8539e89",
"assets/assets/project_mockup/softify_pdf/screen_7.webp": "06497a5ad18bc3160a4e207cd4090f5f",
"assets/assets/project_mockup/softify_pdf/screen_1.webp": "8219622089caa2a27ecd4d189213be08",
"assets/assets/project_mockup/softify_pdf/screen_2.webp": "c6402cd82416ff0b453b197c15dc5205",
"assets/assets/project_mockup/softify_pdf/screen_3.webp": "8ef9887e104673f7c634d9b7f03ef6f2",
"assets/assets/project_mockup/softify_pdf/screen_4.webp": "8905106639f506fda83aee9ef0946daf",
"assets/assets/project_mockup/softify_pdf/screen_5.webp": "e713fb2b875394dbff893ac3f1cdfd50",
"assets/assets/project_mockup/aarthic/screen_6.webp": "d00fd4e05af4a345615951ca3e6f3487",
"assets/assets/project_mockup/aarthic/screen_7.webp": "de153c8024eb1d7e8d9dc5ca57dc385d",
"assets/assets/project_mockup/aarthic/screen_11.webp": "cab7e25fa74724da1ca0b977b4da4a06",
"assets/assets/project_mockup/aarthic/screen_1.webp": "d9df1986e656a53ba9ce2e3c2cbdf999",
"assets/assets/project_mockup/aarthic/screen_10.webp": "054df2da4f8a53ebf526fb46dedd26ec",
"assets/assets/project_mockup/aarthic/screen_13.webp": "ddc494524c16696e58332a66e3119875",
"assets/assets/project_mockup/aarthic/screen_2.webp": "0e00b12aa2896488b84319b88e40f1a7",
"assets/assets/project_mockup/aarthic/screen_3.webp": "d6bc702f0be6998438e94e9a7ee0ca37",
"assets/assets/project_mockup/aarthic/screen_12.webp": "03a3825716e68464e2574c35e46aaac4",
"assets/assets/project_mockup/aarthic/screen_4.webp": "ad37781d7090f7ea841a3f8ead0a51c7",
"assets/assets/project_mockup/aarthic/screen_8.webp": "e24a5e09d8d391938887b121ff2bc9a3",
"assets/assets/project_mockup/aarthic/screen_14.webp": "38f52a19aacfa764b61a65b37d8d8bc7",
"assets/assets/project_mockup/aarthic/screen_9.webp": "b7d65f3b06a2580506cb597e3b91ad74",
"assets/assets/project_mockup/aarthic/screen_5.webp": "2ec3edf1598a0b911094d4b02d1a56cd",
"assets/assets/project_mockup/mamgo/screen_6.webp": "65cfdab539a88032ad0a07015cc15324",
"assets/assets/project_mockup/mamgo/screen_7.webp": "db05e13999e0977e0f7f28edab9a9fef",
"assets/assets/project_mockup/mamgo/screen_1.webp": "c97cd894bf01b50af42937388fa92761",
"assets/assets/project_mockup/mamgo/screen_2.webp": "77e4f5440dfa8c3dd6805e79165a0a08",
"assets/assets/project_mockup/mamgo/screen_3.webp": "711eadec34e0077bb70f39141fd4aa39",
"assets/assets/project_mockup/mamgo/screen_4.webp": "575ab928c83a6d85356b1b691223588a",
"assets/assets/project_mockup/mamgo/screen_8.webp": "801e787b1244079d13297ae6536d0d6e",
"assets/assets/project_mockup/mamgo/screen_5.webp": "d0d09a2bb99daede8e78501ee0a4cbd1",
"assets/assets/project_mockup/karuna/screen_6.webp": "5db3e246145625dcc4c8021dddb69c71",
"assets/assets/project_mockup/karuna/screen_7.webp": "d08958234cda4e879ad1c25990551c3e",
"assets/assets/project_mockup/karuna/screen_1.webp": "84757ab195ac79bc495011adbc6c0f18",
"assets/assets/project_mockup/karuna/screen_2.webp": "96e5873b476c03b5e24b1ece22474c8a",
"assets/assets/project_mockup/karuna/screen_3.webp": "321406727b4b94c5ac6bb6953cc1db43",
"assets/assets/project_mockup/karuna/screen_4.webp": "8ef702a4bea97bec1b92eca9ed8ab302",
"assets/assets/project_mockup/karuna/screen_5.webp": "b9c335973471863e27e42974ce2b65fa",
"assets/assets/project_mockup/realnest/screen_6.webp": "32171e49cd670d900253c9bba938070f",
"assets/assets/project_mockup/realnest/screen_17.webp": "9bc444f117598a7bc55f2d454e33ef81",
"assets/assets/project_mockup/realnest/screen_16.webp": "264fa4b9356a027a2c0819c1d4489c98",
"assets/assets/project_mockup/realnest/screen_7.webp": "8d1e7808288549cc604f6ee13dab2f39",
"assets/assets/project_mockup/realnest/screen_11.webp": "eee24f93e9cbb2b176d46958e0d7022e",
"assets/assets/project_mockup/realnest/screen_1.webp": "9d9072d0c638963532172084e46ced3b",
"assets/assets/project_mockup/realnest/screen_10.webp": "51ed9ed4c46a1857ee051318809ab291",
"assets/assets/project_mockup/realnest/screen_13.webp": "bd3e5cdb9bf8493ddb0ad37f13296f5b",
"assets/assets/project_mockup/realnest/screen_2.webp": "d11efb70413c1d7f501e9341c21ed720",
"assets/assets/project_mockup/realnest/screen_3.webp": "a1b4b47ba4dbc0bdfee17f67548ec0c7",
"assets/assets/project_mockup/realnest/screen_12.webp": "b9469cd1ffe00d1f60687c7a70c8acd1",
"assets/assets/project_mockup/realnest/screen_4.webp": "96bc59d5f17658e1f3510c762c9677e0",
"assets/assets/project_mockup/realnest/screen_8.webp": "50dda5160271c19ed7c1f56f0b28ad06",
"assets/assets/project_mockup/realnest/screen_15.webp": "cb9f72ddaa76791b5094e1840ee85fe1",
"assets/assets/project_mockup/realnest/screen_14.webp": "057e9943730f44e1c24ac84d06d7d1dc",
"assets/assets/project_mockup/realnest/screen_9.webp": "4ed7310aecf16a610c95906b60f4f8dd",
"assets/assets/project_mockup/realnest/screen_18.webp": "a47ab171696da1e75259a39be4981364",
"assets/assets/project_mockup/realnest/screen_5.webp": "536252b56101f809acdf7c6b12677829",
"assets/assets/project_mockup/crimechime/screen_1.webp": "8dc8f7b7838f6474906eb2a6325c14f3",
"assets/assets/project_mockup/crimechime/screen_2.webp": "e4b06f82dddbdbc8ce64ef31409798d1",
"assets/assets/project_mockup/crimechime/screen_3.webp": "cd3ed9a01a234b60d24cac848afe0cec",
"assets/assets/project_mockup/crimechime/screen_4.webp": "b0729e84692adc5e53bc234c81050a18",
"assets/assets/project_mockup/crimechime/screen_5.webp": "1796ccafcfe2dc9a1a516f9782bd5847",
"assets/assets/project_mockup/trackdots/screen_6.webp": "d26c65769ffa287cd23941be508676c2",
"assets/assets/project_mockup/trackdots/screen_7.webp": "893cccb3a3d6556adbe0d2a06d4ff330",
"assets/assets/project_mockup/trackdots/screen_11.webp": "f56af6bd2839562d542f0e76c9b7aec6",
"assets/assets/project_mockup/trackdots/screen_1.webp": "359b55ca7af6e6415a0fd72542b1da07",
"assets/assets/project_mockup/trackdots/screen_10.webp": "f389931b903039ad4e171548eff45472",
"assets/assets/project_mockup/trackdots/screen_2.webp": "c9156c487e5614203708a3c2eeb4013d",
"assets/assets/project_mockup/trackdots/screen_3.webp": "e03cb4e0556ec91163e946e77f515fbf",
"assets/assets/project_mockup/trackdots/screen_4.webp": "0e180c2ff942a395622c75d666233071",
"assets/assets/project_mockup/trackdots/screen_8.webp": "ee8b7cb4388c24f8a2d9638c280b3d53",
"assets/assets/project_mockup/trackdots/screen_9.webp": "42efa202125bd1133c6af9fd6669538e",
"assets/assets/project_mockup/trackdots/screen_5.webp": "d30616b9c44cf62a7bb1c0be070c5a8c",
"assets/assets/project_mockup/fitme/screen_6.webp": "a464b2f436387ba8f4b9302e650d502e",
"assets/assets/project_mockup/fitme/screen_7.webp": "ae34961be64ed4abe1072976a2e24abf",
"assets/assets/project_mockup/fitme/screen_11.webp": "c9d302d841f51d7a39f51a8eb51f32c4",
"assets/assets/project_mockup/fitme/screen_1.webp": "1fbf4e3a47f4e5be8fe7ab99cb4a3fd7",
"assets/assets/project_mockup/fitme/screen_10.webp": "4eba13955a70f4cddffdafab9dc310d3",
"assets/assets/project_mockup/fitme/screen_13.webp": "e0153a0a0be743bb74b1e1b3a9dc4345",
"assets/assets/project_mockup/fitme/screen_2.webp": "b5db062cc70ca9df40e56982358cb10c",
"assets/assets/project_mockup/fitme/screen_3.webp": "224812960d93f432bc5cd84b0ba5f609",
"assets/assets/project_mockup/fitme/screen_12.webp": "3cdbcecada7c77698b73376b5f43fe8e",
"assets/assets/project_mockup/fitme/screen_4.webp": "a9268cc5b8a494c8574e2e8eb2842e6c",
"assets/assets/project_mockup/fitme/screen_8.webp": "2d06a00978e26dea72f3445b24bbbbc1",
"assets/assets/project_mockup/fitme/screen_15.webp": "b00a54eda40ce71e87b0947bf75d67d1",
"assets/assets/project_mockup/fitme/screen_14.webp": "6876b257b156f868bc4aa430715465be",
"assets/assets/project_mockup/fitme/screen_9.webp": "9f9f8870c022513139444c8f8c6b1901",
"assets/assets/project_mockup/fitme/screen_5.webp": "8699353abe2aa0d1238a182a0157cf97",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
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
