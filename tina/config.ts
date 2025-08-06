import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,


  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "_site",
  },

  media: {
    tina: {
      mediaRoot: "src/assets/images",
      publicFolder: "_site/assets/images",
      static: true
    },
  },

  schema: {
    collections: [
      {
        name: "news",
        label: "Notícias",
        path: "src/collections/news",
        fields: [
          {
            type: "string",
            name: "title",
            description: "O título da notícia",
            label: "Título",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Conteúdo",
            isBody: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Data",
          },
        ],
      },
      {
        name: "works",
        label: "Serviços",
        path: "src/collections/works",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Título",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Conteúdo",
            isBody: true,
          },
          {
            type: "image",
            name: "image",
            label: "Imagem",
          },
        ],
      },
    ],
  },
});
