import { defineSchema } from "tina-graphql-gateway-cli";

export default defineSchema({
  collections: [
    {
      label: "Hero Section",
      name: "hero",
      path: "content/hero",
      templates: [
        {
          label: "Hero",
          name: "hero",
          fields: [
            {
              type: "text",
              label: "Hero Text",
              name: "hero",
            },
            {
              type: "text",
              label: "Sub Hero",
              name: "sub_hero",
            },
          ],
        },
      ],
    },
  ],
});
