export const scrollToSection = (to: string) => {
  if (to === "Home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    const section = document.getElementById(to);
    if (section) {
      const offset = section.offsetTop - 30;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  }
};
