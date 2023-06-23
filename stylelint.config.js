module.export = {
  extends: ['stylelint-config-recommended'],
  rules: {
    "at-rule-no-unkown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen"
        ],
      },
    ],
    "declaration-block-trailing-semicolorn": null,
    "no-descending-specificity": null,
  },
};