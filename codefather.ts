export default {
  caporegimes: [{ name: "AntonSchwartz0" }],
  rules: [
    {
      match: ["src/utils/**"],
      goodfellas: [{ name: "AntonSchwartz0" }],
      allowForgiveness: false,
    },
    {
      match: ["src/models/**"],
      goodfellas: [{ name: "DoneDeal0" }],
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
};
