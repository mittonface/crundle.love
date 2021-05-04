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

    {
      label: "Date Section",
      name: "date",
      path: "content/date",
      templates: [
        {
          label: "Date Section",
          name: "date",
          fields: [
            {
              type: "text",
              label: "Heading",
              name: "heading",
            },
            {
              type: "text",
              label: "Date Text",
              name: "date_text",
            },
            {
              type: "text",
              label: "Sub Heading",
              name: "sub_heading",
            },
          ],
        },
      ],
    },
  ],
});
