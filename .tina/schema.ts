import { defineSchema } from "tina-graphql-gateway-cli";

export default defineSchema({
  collections: [
    {
      label: "Hero Section",
      name: "hero",
      path: "content/hero",
      templates: [
        {
          label: "Main",
          name: "main",
          fields: [
            {
              type: "text",
              label: "main",
              name: "main",
            },
          ],
        },
      ],
    },
  ],
});
