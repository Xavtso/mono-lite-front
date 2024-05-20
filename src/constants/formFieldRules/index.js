export const rules = {
  simFieldRules: {
    min: {
      value: 0.0,
      message: "Нашо тобі той ноль!?",
    },
    max: {
      value: 250000.0,
      message: "Нічого не злипнеться 🍑!?",
    },
  },

  titleFieldRules: {
    required: {
      value: true,
      message: "Це поле є обов'язковим!",
    },
    maxLength: {
      value: 32,
      message: "Не більше 32 символів",
    },
  },
  cashBack: {
    required: {
      value: true,
      message: "Це поле є обов'язковим!",
    },
    min: {
      value: 100.0,
      message: "Мінімальна сума - 100",
    },
  },

  authNameRule: {
    required: {
      value: true,
      message: "Це поле є обов'язковим!",
    },
    minLength: {
      value: 2,
      message: "Не менше 2 символів",
    },
    maxLength: {
      value: 32,
      message: "Не більше 32 символів",
    },
  },
  passwordRule: {
    required: {
      value: true,
      message: "Це поле є обов'язковим!",
    },
    minLength: {
      value: 8,
      message: "Не менше 8 символів",
    },
    maxLength: {
      value: 24,
      message: "Не більше 24 символів",
    },
  },
  emailRule: {
    required: {
      value: true,
      message: "Це поле є обов'язковим!",
    },
    pattern: {
      value: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
      message: "Email s invalid",
    },
  },
};
