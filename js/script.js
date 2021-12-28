const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

const btnNav = document.querySelector(".btn-mobile");
const header = document.querySelector(".header");

btnNav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
});

const sectionHero = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHero);
/*sticky*/
