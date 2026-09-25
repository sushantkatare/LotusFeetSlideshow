// Each image is hotlinked directly from its source (Wikimedia Commons / museum CDN / Flickr /
// Rawpixel). Nothing here is downloaded or rehosted — src points straight at the original file.
// Verified by viewing every image before inclusion. Covers three groupings: Krishna's/Radha's
// lotus feet specifically, Krishna alone, and Krishna+Radha together (paintings and deity photos).
// No standalone "Radha alone" art was found despite dedicated searches -- traditional iconography
// almost always pairs her with Krishna, so that category isn't represented separately here.
const LOTUS_FEET_IMAGES = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/8/83/Shri_Gobinda_Chandra_Roy_-_Radha_Stroking_Krishna%27s_Feet_-_2003.137_-_Cleveland_Museum_of_Art.jpg",
    title: "Radha Stroking Krishna's Feet",
    artist: "Shri Gobinda Chandra Roy",
    source: "Cleveland Museum of Art",
    license: "CC0",
    link: "https://commons.wikimedia.org/wiki/File:Shri_Gobinda_Chandra_Roy_-_Radha_Stroking_Krishna%27s_Feet_-_2003.137_-_Cleveland_Museum_of_Art.jpg"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Shri_Gobinda_Chandra_Roy_-_Krishna_Stroking_Radha%27s_Feet_-_2003.136_-_Cleveland_Museum_of_Art.jpg",
    title: "Krishna Stroking Radha's Feet",
    artist: "Shri Gobinda Chandra Roy",
    source: "Cleveland Museum of Art",
    license: "CC0",
    link: "https://commons.wikimedia.org/wiki/File:Shri_Gobinda_Chandra_Roy_-_Krishna_Stroking_Radha%27s_Feet_-_2003.136_-_Cleveland_Museum_of_Art.jpg"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fc/India%2C_Punjab_Hills%2C_Mankot_School_-_Krishna_massaging_the_feet_of_Radha%2C_a_scene_possibly_from_the_Gita_Govinda_-_Google_Art_Project.jpg",
    title: "Krishna Massaging the Feet of Radha",
    artist: "Mankot School, Punjab Hills",
    source: "Google Art Project / Wikimedia Commons",
    license: "Public Domain",
    link: "https://commons.wikimedia.org/wiki/File:India,_Punjab_Hills,_Mankot_School_-_Krishna_massaging_the_feet_of_Radha,_a_scene_possibly_from_the_Gita_Govinda_-_Google_Art_Project.jpg"
  },
  {
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/India%2C_Calcutta%2C_Kalighat_painting%2C_19th_century_-_Krishna_Stroking_Radha%27s_Feet_-_2003.133.b_-_Cleveland_Museum_of_Art.tif/lossy-page1-1280px-India%2C_Calcutta%2C_Kalighat_painting%2C_19th_century_-_Krishna_Stroking_Radha%27s_Feet_-_2003.133.b_-_Cleveland_Museum_of_Art.tif.jpg",
    title: "Krishna Stroking Radha's Feet (Kalighat painting)",
    artist: "Unknown, Calcutta, 19th century",
    source: "Cleveland Museum of Art",
    license: "CC0",
    link: "https://commons.wikimedia.org/wiki/File:India,_Calcutta,_Kalighat_painting,_19th_century_-_Krishna_Stroking_Radha%27s_Feet_-_2003.133.b_-_Cleveland_Museum_of_Art.tif"
  },
  {
    src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/India%2C_Calcutta%2C_Kalighat_painting%2C_19th_century_-_Krishna_Stroking_Radha%27s_Feet_-_2003.138_-_Cleveland_Museum_of_Art.tif/lossy-page1-1280px-India%2C_Calcutta%2C_Kalighat_painting%2C_19th_century_-_Krishna_Stroking_Radha%27s_Feet_-_2003.138_-_Cleveland_Museum_of_Art.tif.jpg",
    title: "Krishna Stroking Radha's Feet (Kalighat painting)",
    artist: "Unknown, Calcutta, 19th century",
    source: "Cleveland Museum of Art",
    license: "CC0",
    link: "https://commons.wikimedia.org/wiki/File:India,_Calcutta,_Kalighat_painting,_19th_century_-_Krishna_Stroking_Radha%27s_Feet_-_2003.138_-_Cleveland_Museum_of_Art.tif"
  },
  {
    src: "https://images.metmuseum.org/CRDImages/as/original/DP152282.jpg",
    title: "Krishna at the Feet of Radha",
    artist: "Page from a Dispersed Rasikapriya",
    source: "The Metropolitan Museum of Art",
    license: "Public Domain",
    link: "https://www.metmuseum.org/art/collection/search/37885"
  },
  {
    src: "https://live.staticflickr.com/7243/7309113458_3ee9376289_b.jpg",
    title: "Lotus Feet of Sri Sri Radha Vrindaban Chandra",
    artist: "Photo by Harshanti",
    source: "Flickr",
    license: "CC BY 2.0",
    link: "https://www.flickr.com/photos/41147321@N05/7309113458"
  },
  {
    src: "https://live.staticflickr.com/6085/6124588881_96f91c3aca.jpg",
    title: "Krishna Paints Radha's Feet",
    artist: "San Diego Museum of Art Collection",
    source: "Flickr",
    license: "CC BY-NC-ND 2.0",
    link: "https://www.flickr.com/photos/62841309@N08/6124588881"
  },
  {
    src: "https://live.staticflickr.com/2523/3867560861_5fdd3c4672.jpg",
    title: "Lotus Feet (Deity Pada-pitha)",
    artist: "Photo by Mayapur",
    source: "Flickr",
    license: "CC BY-ND",
    link: "https://www.flickr.com/photos/28665083@N00/3867560861"
  },

  // --- Krishna alone ---
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Krishna_playing_the_flute.jpg",
    title: "Krishna Playing the Flute",
    artist: "Unknown artist (photo: Aadrit28)",
    source: "Wikimedia Commons",
    license: "CC BY-SA 4.0",
    link: "https://commons.wikimedia.org/wiki/File:Krishna_playing_the_flute.jpg"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Krishna_playing_his_flute%2C_circa_1770_CE%2C_Lucknow_housed_in_the_V%26A_Museum%2C_London.jpg",
    title: "Krishna Playing His Flute (Lucknow, c. 1770)",
    artist: "Lucknow School",
    source: "V&A Museum, London (via Wikimedia Commons)",
    license: "CC BY-SA 4.0",
    link: "https://commons.wikimedia.org/wiki/File:Krishna_playing_his_flute,_circa_1770_CE,_Lucknow_housed_in_the_V%26A_Museum,_London.jpg"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/1/19/Krishna_Playing_Flute%2C_Sirmour_Kalam_of_Pahari_Art%2C_1840-50_CE%2C_Himachal_State_Museum%2C_Shimla.jpg",
    title: "Krishna Playing Flute (Sirmour Kalam, Pahari Art)",
    artist: "Pahari School",
    source: "Himachal State Museum, Shimla (via Wikimedia Commons)",
    license: "CC BY-SA 4.0",
    link: "https://commons.wikimedia.org/wiki/File:Krishna_Playing_Flute,_Sirmour_Kalam_of_Pahari_Art,_1840-50_CE,_Himachal_State_Museum,_Shimla.jpg"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/70/Krishna_Holding_Mount_Govardhan_-_Crop.jpg",
    title: "Krishna Holding Mount Govardhan",
    artist: "Attributed to Mola Ram",
    source: "Wikimedia Commons",
    license: "Public Domain",
    link: "https://commons.wikimedia.org/wiki/File:Krishna_Holding_Mount_Govardhan_-_Crop.jpg"
  },

  // --- Krishna and Radha together ---
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Krishna_and_Radha_looking_into_a_mirror._-_Google_Art_Project.jpg",
    title: "Krishna and Radha Looking Into a Mirror",
    artist: "Unknown artist",
    source: "Google Art Project / Wikimedia Commons",
    license: "Public Domain",
    link: "https://commons.wikimedia.org/wiki/File:Krishna_and_Radha_looking_into_a_mirror._-_Google_Art_Project.jpg"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a3/The_reluctant_Radha_%286124583465%29.jpg",
    title: "The Reluctant Radha",
    artist: "Bhagvan",
    source: "Wikimedia Commons",
    license: "Public Domain",
    link: "https://commons.wikimedia.org/wiki/File:The_reluctant_Radha_(6124583465).jpg"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/7/71/3_Nichal_Chand_%28attr%29_Krishna_Celebrates_Holi_with_Radha_and_the_Gopis_1750-60_Boston_MFA.jpg",
    title: "Krishna Celebrates Holi with Radha and the Gopis",
    artist: "Attributed to Nihâl Chand",
    source: "Museum of Fine Arts, Boston (via Wikimedia Commons)",
    license: "Public Domain",
    link: "https://commons.wikimedia.org/wiki/File:3_Nichal_Chand_(attr)_Krishna_Celebrates_Holi_with_Radha_and_the_Gopis_1750-60_Boston_MFA.jpg"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Radha_Krishna_playing_Holi%2C_circa_19th_century_CE%2C_Alwar_Kalam_of_Rajathani_School_of_Art_%2CHoused_in_Government_Museum%2C_Alwar%2C_Rajasthan.jpg",
    title: "Radha Krishna Playing Holi (Alwar Kalam, 19th century)",
    artist: "Rajasthani School",
    source: "Government Museum, Alwar (via Wikimedia Commons)",
    license: "CC BY-SA 4.0",
    link: "https://commons.wikimedia.org/wiki/File:Radha_Krishna_playing_Holi,_circa_19th_century_CE,_Alwar_Kalam_of_Rajathani_School_of_Art_,Housed_in_Government_Museum,_Alwar,_Rajasthan.jpg"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Radha_Krishna%2C_circa_18th_century_CE%2C_Kangra_School_of_Art%2C_Allahabad_Museum%2C_Uttar_Pradesh.jpg",
    title: "Radha Krishna (Kangra School, 18th century)",
    artist: "Kangra School",
    source: "Allahabad Museum (via Wikimedia Commons)",
    license: "CC BY-SA 4.0",
    link: "https://commons.wikimedia.org/wiki/File:Radha_Krishna,_circa_18th_century_CE,_Kangra_School_of_Art,_Allahabad_Museum,_Uttar_Pradesh.jpg"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Divine_lovers_in_moonlight%2C_circa_1820_CE%2C_Kangra_School_of_Art%2C_Bhuri_Singh_Museum%2C_Chamba%2C_Himachal_Pradesh.jpg",
    title: "Divine Lovers in Moonlight",
    artist: "Kangra School",
    source: "Bhuri Singh Museum, Chamba (via Wikimedia Commons)",
    license: "CC BY-SA 4.0",
    link: "https://commons.wikimedia.org/wiki/File:Divine_lovers_in_moonlight,_circa_1820_CE,_Kangra_School_of_Art,_Bhuri_Singh_Museum,_Chamba,_Himachal_Pradesh.jpg"
  },
  {
    src: "https://images.rawpixel.com/editor_1024/cHJpdmF0ZS9zdGF0aWMvZmlsZXMvd2Vic2l0ZS8yMDIzLTA0L3dhbTIxMTEyLWltYWdlLmpwZw.jpg",
    title: "Krishna and Radha as Lovers (Gitagovinda series, c. 1780)",
    artist: "Unknown Indian artist",
    source: "LACMA (via Rawpixel)",
    license: "CC0",
    link: "https://www.rawpixel.com/image/10139891/krishna-and-radha-lovers-from-gitagovinda-series-ca-1780-indian"
  },
  {
    src: "https://images.rawpixel.com/editor_1024/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL2xyL3JpamtzcnAtdC0xOTkzLTQ3Ny1pbWFnZS5qcGc.jpg",
    title: "Radha and Krishna, a Palace (Ragamala, c. 1610–1620)",
    artist: "Unknown artist",
    source: "Rijksmuseum (via Rawpixel)",
    license: "CC0",
    link: "https://www.rawpixel.com/image/13792337/radha-krishna-een-paleis-ragamala-c-1610-1620-anonymous"
  },
  {
    src: "https://images.rawpixel.com/editor_1024/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAyL2xhY21hMjM3NjgwLWltYWdlLmpwZw.jpg",
    title: "Krishna and Radha's Meeting (Ragamala manuscript page)",
    artist: "Unknown artist",
    source: "LACMA (via Rawpixel)",
    license: "CC0",
    link: "https://www.rawpixel.com/image/11932237/image-face-person-art"
  },
  {
    src: "https://images.rawpixel.com/editor_1024/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL2xyL3JpamtzcnAtdC0xOTkzLTQ5NC1pbWFnZS5qcGc.jpg",
    title: "Krishna and Radha (c. 1720)",
    artist: "Unknown artist",
    source: "Rijksmuseum (via Rawpixel)",
    license: "CC0",
    link: "https://www.rawpixel.com/image/13794036/krishna-radha-c-1720-anonymous"
  },
  {
    src: "https://images.rawpixel.com/editor_1024/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL2xyL3JpamtzcnAtdC0xOTkzLTEyMy1pbWFnZS5qcGc.jpg",
    title: "Radha Won't Give Krishna Back His Flute (1805–1815)",
    artist: "Chajju and workshop",
    source: "Rijksmuseum (via Rawpixel)",
    license: "CC0",
    link: "https://www.rawpixel.com/image/13795703/radha-geeft-krishna-zijn-fluit-niet-terug-1805-1815-chajju-and-anonymous"
  },
  {
    src: "https://images.rawpixel.com/editor_1024/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAyL2xyL3djcmt6YjJmdHQtaW1hZ2UuanBn.jpg",
    title: "Holi — Radha Spraying Colour on Krishna",
    artist: "Unknown artist",
    source: "Rawpixel",
    license: "CC0",
    link: "https://www.rawpixel.com/image/13951874/image-cartoon-person-book"
  }
];
