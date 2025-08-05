import type { CodefatherConfig } from "@donedeal0/codefather";

export default {
  caporegimes: [
    { name: "solozzo", emailPrefix: "solozzo" },
    { name: "@lucabrasi", emailPrefix: "luca.brasi" },
  ],
  rules: [
    {
      match: ["src/utils/**"],
      goodfellas: [
        { name: "solozzo", emailPrefix: "solozzo-the-turk" },
        { name: "@tomhagen", emailPrefix: "tom.hagen" },
      ],
      crews: ["clemenzaPeople"],
      allowForgiveness: false,
    },
    {
      match: ["src/models/**"],
      goodfellas: [
        { name: "mike", emailPrefix: "michael.corleone" },
        { name: "sonny", emailPrefix: "sonny" },
      ],
      allowForgiveness: true,
      message: "Custom message to tell you to NOT TOUCH THE README!",
    },
  ],
  options: {
    showAscii: true,
    vouchForAllCommiters: true,
  },
  codeReviews: {
    autoAssignGoodfellas: true,
    autoAssignCaporegimes: true,
  },
  crews: {
    clemenzaPeople: [{ name: "@paulieGatto" }, { name: "@lucabrasi" }],
  },
} satisfies CodefatherConfig;
