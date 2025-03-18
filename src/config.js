// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/mesh_network_moe.jpg";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "brandon-kim";

// Navbar Logo image
export const navLogo = null;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "Wide range of knowledge in embedded system (RTOS) software/hardware, Expert at analyzing and solving problems ranging from UI to device drivers";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-c" className="display-4" />,
    name: "C",
  },
  {
    id: 2,
    skill: <Icon icon="mdi:language-python" className="display-4" />,
    name: "Python",
  },
  {
    id: 3,
    skill: <Icon icon="mdi:language-java" className="display-4" />,
    name: "Java",
  },
  {
    id: 4,
    skill: <Icon icon="ix:firmware" className="display-4" />,
    name: "Firmware",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:bluetooth" className="display-4" />,
    name: "BLE",
  },
  {
    id: 6,
    skill: <Icon icon="mdi:zigbee" className="display-4" />,
    name: "Zigbee",
  },
  {
    id: 7,
    skill: <Icon icon="mdi:wifi" className="display-4" />,
    name: "WIFI",
  },
  {
    id: 8,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = null;

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["example-1", "example-2", "example-3"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mkgjnzky";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
