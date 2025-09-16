import { configure } from "@ariesclark/eslint-config";

export default configure({
    stylistic: {
        semi: true,
        quotes: "double",
        overrides: {
            "style/indent": ["error", 4],
        },
    },
    typescript: true,
    rules: {
        "jsonc/indent": ["error", 4],
        "jsonc/sort-keys": "off",
    },
});
