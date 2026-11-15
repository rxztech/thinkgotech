const pages = [...document.querySelectorAll(".page")];
const nav = document.querySelector("#nav");
const menu = document.querySelector(".menu-toggle");
const language = document.querySelector(".language-link");
const groups = [...nav.querySelectorAll("details")];
function closeMenu() {
  nav.classList.remove("open");
  menu.setAttribute("aria-expanded", "false");
  for (const group of groups) group.open = false;
}
function render(moveFocus = false) {
  const hash = location.hash.slice(1);
  const current = pages.find(page => page.id === hash) || pages[0];
  const ancestors = new Set();
  let parent = current.dataset.parent;
  while (parent) {
    ancestors.add(parent);
    parent = document.getElementById(parent)?.dataset.parent;
  }
  for (const page of pages) page.hidden = page !== current;
  for (const anchor of nav.querySelectorAll("a")) {
    if (anchor.getAttribute("href") === "#" + current.id) anchor.setAttribute("aria-current", "page");
    else anchor.removeAttribute("aria-current");
    anchor.classList.toggle("ancestor", ancestors.has(anchor.hash.slice(1)));
  }
  for (const group of groups) group.classList.toggle("active", group.dataset.group === current.id || ancestors.has(group.dataset.group));
  const brandName = document.documentElement.lang === "en" ? "ThinkGoTech" : "星构微";
  document.title = current.dataset.title + " | " + brandName;
  language.hash = current.id === "home" ? "" : current.id;
  closeMenu();
  if (moveFocus) {
    const heading = current.querySelector("h1");
    heading.tabIndex = -1;
    heading.focus({preventScroll:true});
  }
  window.scrollTo(0,0);
}
menu.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});
for (const group of groups) group.addEventListener("toggle", () => {
  if (group.open) for (const other of groups) if (other !== group) other.open = false;
});
document.addEventListener("click", event => {
  const anchor = event.target.closest('a[href^="#"]');
  if (anchor && anchor.hash === location.hash) render(true);
  if (!event.target.closest("header")) for (const group of groups) group.open = false;
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    const group = groups.find(item => item.open);
    if (group) {
      group.open = false;
      group.querySelector("summary").focus();
    } else if (nav.classList.contains("open")) {
      closeMenu();
      menu.focus();
    }
  }
});
addEventListener("hashchange", () => render(true));
render();
