import Handlebars from "handlebars";
import * as Components from "./components";
import * as Pages from "./pages";
import { chatMessages } from "./utils/constants";

const pages = {
  login: [Pages.Login],
  registration: [Pages.Registration],
  chats: [Pages.Chats, { chats: chatMessages }],
  settings: [Pages.Settings],
  error400: [Pages.Error400],
  error500: [Pages.Error500],
  navigate: [Pages.Navigate],
};

Object.entries(Components).forEach(([name, template]) => {
  Handlebars.registerPartial(name, template);
});

function navigate(page: keyof typeof pages) {
  const [source, context] = pages[page];
  const container = document.getElementById("app")!;

  const temlpatingFunction = Handlebars.compile(source);

  container.innerHTML = temlpatingFunction(context);
}

document.addEventListener("DOMContentLoaded", () => navigate("navigate"));

document.addEventListener("click", (e) => {
  const page = (e.target as HTMLInputElement).getAttribute("page");
  if (page) {
    navigate(page  as keyof typeof pages);

    e.preventDefault();
    e.stopImmediatePropagation();
  }
});
