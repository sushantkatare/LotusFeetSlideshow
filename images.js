// Each image is hotlinked directly from its source (Wikimedia Commons / museum CDN / Flickr).
// Nothing here is downloaded or rehosted — src points straight at the original file.
// Verified by viewing every image before inclusion: each one visibly shows the feet of
// Krishna and/or Radha, matching the "lotus feet" devotional theme.
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
  }
];
