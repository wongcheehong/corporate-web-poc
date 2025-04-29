import { type RouteConfig, index, route, prefix } from "@react-router/dev/routes";

export default [
  // Default routes with language prefix
  ...prefix(":lang?", [
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("posts", "routes/posts.tsx"),
    route("posts/:id", "routes/posts.$id.tsx")
  ])
] satisfies RouteConfig;
