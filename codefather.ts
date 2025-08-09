import type { CodefatherConfig } from "@donedeal0/codefather";

export default {
  "rules": [
    {
      "match": [
        "src/utils/**"
      ],
      "goodfellas": [
        {
          "name": "AntonSchwartz0"
        },
        {
          "name": "DoneDeal0"
        }
      ]
    },
    {
      "match": [
        "src/models/**"
      ],
      "goodfellas": [
        {
          "name": "DoneDeal0"
        }
      ]
    }
  ],
  "codeReviews": {
    "autoAssignGoodfellas": true
  },
  "crews": {}
} satisfies CodefatherConfig;
