import { registerBlockType } from "@wordpress/blocks";
import { edit } from "./edit";

registerBlockType("api-charts/default", {
  title: "Basic Example",
  icon: "smiley",
  category: "layout",
  attributes: {
    className: {
      type: "string",
      default: ""
    }
  },
  edit
});
