/* eslint-disable import/no-anonymous-default-export */
export default {
  rules: [
    {
      match: ["package.json", "src/models", /^src\/app\/.*\.css$/],
      goodfellas: [{ name: "AntonSchwartz0" }],
      allowForgiveness: false,
    },
    {
      match: ["README.md"],
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
