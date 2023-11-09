import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

const mount = (el) => {
  if (!el) return;
  const app = createApp(Dashboard);
  app.mount(el);
};

if (process.env.NODE_ENV === "development")
  mount(document.querySelector("#_feed-dev-root"));

export { mount };
