import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  SiLeetcode,
  SiHackerrank,
  SiHackerearth,
  SiDuolingo,
} from "react-icons/si";

export const staticConsistency = [
  {
    id: "github",
    title: "GitHub Commits",
    value: "Daily",
    subtitle: "Consistent commits",
    icon: FaGithub,
  },
  {
    id: "leetcode",
    title: "LeetCode",
    value: "Daily Practice",
    subtitle: "DSA & Problem Solving",
    icon: SiLeetcode,
  },
  {
    id: "hackerrank",
    title: "HackerRank",
    value: "Active",
    subtitle: "Problem solving",
    icon: SiHackerrank,
  },
  {
    id: "hackerearth",
    title: "HackerEarth",
    value: "Regular",
    subtitle: "Coding contests",
    icon: SiHackerearth,
  },
  {
    id: "linkedin",
    title: "LinkedIn Blogging",
    value: "Consistent",
    subtitle: "Tech + learning posts",
    icon: FaLinkedin,
  },
  {
    id: "duolingo",
    title: "Duolingo",
    value: "Long Streak",
    subtitle: "Daily language learning",
    icon: SiDuolingo,
  },
];
