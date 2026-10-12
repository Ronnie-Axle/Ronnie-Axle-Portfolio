// ─────────────────────────────────────────────────────────────────────────
// PROJECTS DATA
// ─────────────────────────────────────────────────────────────────────────
// This is the file you edit whenever you finish a new project. Add, remove,
// or reorder objects in the `projects` array below and the Projects section
// on the site updates automatically — no other code needs to change.
//
// HOW TO ADD YOUR OWN IMAGES
// 1. Drop your image files into: src/assets/projects/
// 2. Import them at the top of this file (see the examples already below).
// 3. Reference the imported variable in the project's image fields.
//    (You can also just paste a URL as a string instead of importing a
//    local file, if your image is already hosted somewhere.)
// ─────────────────────────────────────────────────────────────────────────
import HomeScreen from "../assets/projects/home_screen.png";
import MusicList from "../assets/projects/music_list.png";
import PlayerInterface from "../assets/projects/player_interface.png";
import BottomImage from "../assets/projects/bottom.png";
import TopImage from "../assets/projects/top.png";
import MidImage from "../assets/projects/mid.png";

export interface Project {
  number: string; // e.g. "01"
  name: string;
  category: string; // e.g. "Client" or "Personal"
  liveUrl: string; // link used by the "Live Project" button
  col1Image1: string; // top-left image
  col1Image2: string; // bottom-left image
  col2Image: string; // tall right-hand image
}

// Placeholder example projects — swap these out for your own work.
// Until you replace an image import below with your own file, these
// point at temporary placeholder art so the layout has something to show.
export const projects: Project[] = [
  {
    number: "01",
    name: "Music Player",
    category: "Personal",
    liveUrl: "https://music--player.up.railway.app/",
    col1Image1: HomeScreen,
    col1Image2: MusicList,
    col2Image: PlayerInterface,
  },
  {
    number: "02",
    name: "Air frost Engineering Solutions",
    category: "Client",
    liveUrl: "http://www.airfrostengineering.com",
    col1Image1: MidImage,
    col1Image2: TopImage,
    col2Image: BottomImage,
  },
  // {
  //   number: "03",
  //   name: "Solaris Digital",
  //   category: "Client",
  //   liveUrl: "#",
  //   col1Image1:
  //     "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85",
  //   col1Image2:
  //     "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85",
  //   col2Image:
  //     "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85",
  // },

  // ── Add your next project here when it's ready ──────────────────────
  // {
  //   number: '04',
  //   name: 'Your Project Name',
  //   category: 'Client', // or 'Personal'
  //   liveUrl: 'https://your-live-link.com',
  //   col1Image1: yourImportedImage1,
  //   col1Image2: yourImportedImage2,
  //   col2Image: yourImportedImage3,
  // },
];
