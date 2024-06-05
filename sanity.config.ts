import { defineConfig } from "sanity";


import { structureTool } from "sanity/structure";

import schemas from "./sanity/schemas";


const config = defineConfig({
    projectId: "p07ee9b7",

    dataset: "production", 

    title: "My Personal Website", 

    apiVersion: "2024-06-01",

    basePath: "/admin",

    plugins: [structureTool()], 
    
    schema: {types: schemas}
})

export default config; 