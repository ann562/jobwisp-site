// After Jobwisp is published, paste its Chrome Web Store link between the quotes below.
// Every "Add to Chrome" button on the site will then point to it.
const STORE_URL = "";

document.querySelectorAll("[data-store]").forEach((a) => {
  if (STORE_URL) {
    a.href = STORE_URL;
    a.target = "_blank";
    a.rel = "noopener";
  } else {
    // Until the listing is live, buttons say "Coming soon" and scroll to How it works.
    const label = a.querySelector(".label");
    if (label) label.textContent = "Coming soon to Chrome";
  }
});
