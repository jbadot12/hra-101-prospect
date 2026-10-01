const hraCatalog = [
  { category: "Cardiovascular", name: "Heart", url: "https://hra-demo.unlockhealthnow.com/v3/15338896-611a-4a86-884f-d98854647fbd?fakedata=true&utm_source=google&utm_medium=paid-search&utm_campaign=hra-demo" },
  { category: "Cardiovascular", name: "Heart (Spanish)", url: "https://hra-demo.unlockhealthnow.com/v3/15d7ba1e-88b9-46b0-9a6d-271d5ac23853?fakedata=true&utm_source=google&utm_medium=paid-search&utm_campaign=hra-demo" },
  { category: "Cardiovascular", name: "Stroke", url: "https://hra-demo.unlockhealthnow.com/v3/3d94c6e9-a8e5-4456-a09b-4362d4e54cfd?fakedata=true&utm_source=google&utm_medium=paid-search&utm_campaign=hra-demo" },
  { category: "Cardiovascular", name: "Peripheral Artery Disease", url: "https://hra-demo.unlockhealthnow.com/v3/e033cff8-d9d7-46ba-9b42-bcf1b9d2b3a8?fakedata=true&utm_source=google&utm_medium=paid-search&utm_campaign=hra-demo" },
  { category: "Oncology", name: "Breast Cancer", url: "https://hra-demo.unlockhealthnow.com/v3/485bcde3-2b5d-46a0-ad91-a752d8764fec?fakedata=true&utm_source=google&utm_medium=paid-search&utm_campaign=hra-demo" },
  { category: "Oncology", name: "Breast Cancer (Spanish)", url: "https://hra-demo.unlockhealthnow.com/v3/bce6e64f-956a-4811-9547-57ed85b0b459/?fakedata=true&utm_medium=google&utm_campaign=breast-awareness" },
  { category: "Oncology", name: "Prostate Cancer", url: "https://hra-demo.unlockhealthnow.com/v3/31dfc313-120a-460e-9137-bd6f3f436687?fakedata=true&utm_source=google&utm_medium=paid-search&utm_campaign=hra-demo" },
  { category: "Oncology", name: "Colon Cancer", url: "https://hra-demo.unlockhealthnow.com/v3/4e91687b-923d-4d93-a58a-ce87fa82c4ab?utm_source=google&utm_medium=landingpage" },
  { category: "Oncology", name: "Lung Cancer", url: "https://hra-demo.unlockhealthnow.com/v3/0c3c5625-a215-4606-8692-b67a728d7114?fakedata=true&utm_source=google&utm_medium=paid-search&utm_campaign=hra-demo" },
  { category: "Behavioral Health", name: "Depression", url: "https://hra-demo.unlockhealthnow.com/v3/14a6d086-1ce7-448b-8407-9313a677f015?fakedata=true&utm_source=google&utm_medium=paid-search&utm_campaign=hra-demo" },
  { category: "Behavioral Health", name: "Anxiety", url: "https://hra-demo.unlockhealthnow.com/v3/976ffafb-9f58-4c35-97f1-425395f454c2?fakedata=true&utm_source=google&utm_medium=paid-search&utm_campaign=hra-demo" },
  { category: "Behavioral Health", name: "Substance Use", url: "https://hra-demo.unlockhealthnow.com/v3/c3bc845f-d0e1-4f52-ba90-87715c4597f9?fakedata=true&utm_source=google&utm_medium=paid-search&utm_campaign=hra-demo" },
  { category: "Orthopedics", name: "Back & Neck", url: "https://hra-demo.unlockhealthnow.com/v3/1a01c2ee-44f4-4ee3-9bcd-149dd6620887?fakedata=true&utm_source=google&utm_medium=paid-search&utm_campaign=hra-demo" },
  { category: "Orthopedics", name: "Knee & Hip", url: "https://hra-demo.unlockhealthnow.com/v3/ddf48967-1432-452b-a26b-520e026d384f?fakedata=true&utm_source=google&utm_medium=paid-search&utm_campaign=hra-demo" },
  { category: "Orthopedics", name: "Shoulder & Elbow", url: "https://hra-demo.unlockhealthnow.com/v3/2777c6a1-6eae-4f6a-85b1-c31c9188a125?fakedata=true&utm_source=google&utm_medium=paid-search&utm_campaign=hra-demo" },
  { category: "Pulmonology", name: "COPD", url: "https://hra-demo.unlockhealthnow.com/v3/3f1087ba-2e2f-4858-be10-c7b94edb5e33?fakedata=true&utm_source=google&utm_medium=paid-search&utm_campaign=hra-demo" },
  { category: "Pulmonology", name: "Sleep Apnea", url: "https://hra-demo.unlockhealthnow.com/v3/52a1a3a2-166d-4edf-b5b4-afccfd748625?fakedata=true&utm_source=google&utm_medium=paid-search&utm_campaign=hra-demo" },
  { category: "Internal Medicine", name: "Diabetes", url: "https://hra-demo.unlockhealthnow.com/v3/40fda585-bde1-4a89-a9f2-0f7b23ce8f33?fakedata=true&utm_source=google&utm_medium=paid-search&utm_campaign=hra-demo" },
  { category: "Internal Medicine", name: "Diabetes (Spanish)", url: "https://hra-demo.unlockhealthnow.com/v3/b07890bb-0daf-4793-9513-9fe6d9b5819b?fakedata=true&utm_source=google&utm_medium=paid-search&utm_campaign=hra-demo" },
  { category: "Internal Medicine", name: "Acid Reflux", url: "https://hra-demo.unlockhealthnow.com/v3/10f41014-b026-4fe0-a320-4f731e597be5?fakedata=true&utm_source=google&utm_medium=paid-search&utm_campaign=hra-demo" },
  { category: "Internal Medicine", name: "Bladder Control", url: "https://hra-demo.unlockhealthnow.com/v3/11e4b957-b5ed-4fe1-8bb6-2515e2011b75?fakedata=true&utm_source=google&utm_medium=paid-search&utm_campaign=hra-demo" },
  { category: "Internal Medicine", name: "Menopause Continuum", url: "https://hra-demo.unlockhealthnow.com/v3/fb9683b4-1739-41e5-bbb3-a60cb791e32b?utm_source=demo&fakedata=true" },
  { category: "Weight Management", name: "Weight Loss", url: "https://hra-demo.unlockhealthnow.com/v3/d11badb6-967f-4c7e-925b-6b605a8a4cbb?fakedata=true&utm_source=google&utm_medium=paid-search&utm_campaign=hra-demo" },
  { category: "Weight Management", name: "Medical Weight Loss", url: "https://hra-demo.unlockhealthnow.com/v3/09ed1638-7ff9-4c7c-9759-381f67af2dfd?fakedata=true&utm_source=google&utm_medium=paid-search&utm_campaign=hra-demo" },
  { category: "Weight Management", name: "Healthy Weight", url: "https://hra-demo.unlockhealthnow.com/v3/cb14d8b4-71b9-4a7d-87e6-933933054585/?fakedata=true&utm_source=google&utm_medium=paid-search&utm_campaign=hra-demo" }
];

const categoryDescriptions = {
  "Cardiovascular": "Support heart and vascular awareness, education, and appropriate next steps.",
  "Oncology": "Help consumers understand screening considerations and cancer-related risk.",
  "Behavioral Health": "Create an approachable entry point for sensitive behavioral health needs.",
  "Orthopedics": "Guide consumers from pain or mobility questions toward an appropriate starting point.",
  "Pulmonology": "Build awareness around breathing, sleep, and pulmonary concerns.",
  "Internal Medicine": "Address common health concerns with personalized education and action.",
  "Weight Management": "Connect weight-related goals and needs to relevant support options."
};

const clinicalNotesBase = "https://hra-support.unlockhealth.com/specific-hra-app-documentation";

function clinicalNotesUrl(name) {
  if (name === "Menopause Continuum" || name === "Medical Weight Loss") return clinicalNotesBase;
  if (name === "Sleep Apnea") return `${clinicalNotesBase}#sleep-hra`;
  const anchor = name
    .toLowerCase()
    .replaceAll("&", " ")
    .replaceAll("(spanish)", "spanish")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${clinicalNotesBase}#${anchor}-hra`;
}

const activationContent = {
  search: {
    kicker: "Paid search · Capture active hand raisers",
    title: "Match a specific search to a focused HRA path.",
    copy: "Search reaches consumers using terms that signal they are primed to learn or act. A targeted landing page provides context before inviting them into the HRA.",
    detail: "Capture high intent while the consumer is actively looking for answers or care.",
    image: "assets/heart-paid-search-landing-page.jpg",
    alt: "Dedicated Heart HRA paid-search landing page",
    link: "https://national-health.unlockhealth.com/heart-hra-landing-page/",
    linkLabel: "Open the live Heart landing page ↗"
  },
  social: {
    kicker: "Paid social · Create awareness",
    title: "Invite a passive audience to act immediately.",
    copy: "Social can surface a relevant health concern for people who were not actively searching. A direct path to the HRA gives the in-feed experience an immediate, low-friction next step.",
    detail: "Create awareness and let the consumer explore a concern in the moment it becomes relevant.",
    image: "assets/ortho-paid-social-ad.png",
    alt: "Orthopedic HRA paid-social advertisement"
  },
  owned: {
    kicker: "Owned + organic · Activate existing attention",
    title: "Give site visitors a useful next step.",
    copy: "Service-line pages, the homepage, an HRA hub, newsletters, and targeted email can turn existing traffic into a more personal experience. That path matters even more as AI search helps consumers arrive with answers—but still looking for what to do next.",
    detail: "Extend the value of traffic the organization already has by placing HRAs where questions naturally arise.",
    image: "assets/hra-hub-page.jpg",
    alt: "Example health risk assessment hub on a healthcare website",
    link: "https://go.unlockhealthnow.com/hra-sample-site-home/",
    linkLabel: "Open the sample HRA hub ↗"
  },
  integrated: {
    kicker: "Integrated marketing · Show up everywhere relevant",
    title: "Make the HRA a conversion layer across the campaign.",
    copy: "Content, out-of-home creative, QR codes, direct mail, in-office materials, community events, and broader campaigns can all invite the same audience into a measurable HRA journey.",
    detail: "Create one connected action across paid, owned, digital, and traditional touchpoints.",
    image: "assets/omnichannel-activation-strategy.jpg",
    alt: "Omnichannel HRA activation strategy"
  }
};

const experienceContent = {
  reach: {
    kicker: "Reach · Create a relevant door",
    title: "Meet a consumer in the moment of curiosity.",
    copy: "Search, social, email, a website, a QR code, and other campaign touchpoints can all lead to an HRA. The message should match the consumer’s intent.",
    note: "An HRA should feel like a useful next step—not simply another landing page.",
    image: "assets/heart-paid-search-landing-page.jpg",
    alt: "Heart HRA landing page"
  },
  choose: {
    kicker: "Choose · Reduce uncertainty",
    title: "Help someone find the right starting point.",
    copy: "A focused campaign may lead directly to one HRA. A broader service-line experience can use a selection page to help the consumer choose among related assessments.",
    note: "Organize choices around how consumers describe their need—not the health system’s internal structure.",
    image: "assets/ortho-selection-page.jpg",
    alt: "Orthopedic HRA selection page"
  },
  assess: {
    kicker: "Assess · Build understanding",
    title: "Use clinically grounded logic to personalize the result.",
    copy: "Each assessment uses condition-specific questions and result logic to help a consumer understand risk, symptoms, or screening considerations without presenting a diagnosis.",
    note: "Clinical frameworks vary by HRA and require clinical judgment to define appropriate next steps.",
    image: "assets/christus-hra-results.jpg",
    alt: "Example HRA risk-result pathways"
  },
  act: {
    kicker: "Act · Recommend the next right step",
    title: "Turn the result into a supported action.",
    copy: "Calls to action can change by assessment outcome—connecting a consumer to scheduling, a callback, provider search, screening, education, or another relevant experience.",
    note: "The strongest CTA is both clinically appropriate and operationally supported by the organization.",
    image: "assets/heart-recommended-cta.jpg",
    alt: "Heart HRA result with recommended calls to action"
  },
  continue: {
    kicker: "Continue · Build the relationship",
    title: "Learn from engagement and keep the journey moving.",
    copy: "Report delivery, nurture, reminders, connected systems, and reporting help teams continue relevant communication and improve the program over time.",
    note: "Plan ownership, follow-up, data flow, and measurement before activation—not after launch.",
    image: "assets/console-dashboard.jpg",
    alt: "HRA Management program dashboard"
  }
};

const catalogGrid = document.querySelector("#catalog-grid");
const catalogCount = document.querySelector("#catalog-count");
const catalogFilters = document.querySelector("#catalog-filters");
const catalogToggle = document.querySelector("#catalog-toggle");
const hraSearch = document.querySelector("#hra-search");

let selectedCategory = "All";
let showAll = false;

const categories = ["All", ...new Set(hraCatalog.map((hra) => hra.category))];

categories.forEach((category) => {
  const button = document.createElement("button");
  button.className = "filter-button";
  button.type = "button";
  button.textContent = category;
  button.setAttribute("aria-pressed", String(category === selectedCategory));
  button.addEventListener("click", () => {
    selectedCategory = category;
    showAll = category !== "All";
    document.querySelectorAll(".filter-button").forEach((item) => {
      item.setAttribute("aria-pressed", String(item === button));
    });
    renderCatalog();
  });
  catalogFilters.append(button);
});

function renderCatalog() {
  const query = hraSearch.value.trim().toLowerCase();
  const matches = hraCatalog.filter((hra) => {
    const matchesCategory = selectedCategory === "All" || hra.category === selectedCategory;
    const matchesSearch = !query || `${hra.name} ${hra.category}`.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });
  const visible = showAll || query || selectedCategory !== "All" ? matches : matches.slice(0, 8);

  catalogGrid.replaceChildren();
  visible.forEach((hra) => {
    const card = document.createElement("article");
    card.className = "hra-card";
    card.innerHTML = `
      <small>${hra.category}</small>
      <h3>${hra.name}</h3>
      <p>${categoryDescriptions[hra.category]}</p>
      <div class="hra-links">
        <a href="${hra.url}" target="_blank" rel="noopener noreferrer" aria-label="Open ${hra.name} HRA demo">Live demo ↗</a>
        <a class="clinical-link" href="${clinicalNotesUrl(hra.name)}" target="_blank" rel="noopener noreferrer" aria-label="Open clinical notes for ${hra.name}">Clinical notes ↗</a>
      </div>
    `;
    catalogGrid.append(card);
  });

  catalogCount.textContent = `${matches.length} HRA${matches.length === 1 ? "" : "s"} available`;
  catalogToggle.hidden = Boolean(query) || selectedCategory !== "All";
  catalogToggle.textContent = showAll ? "Show fewer HRAs" : "Show all HRAs";
}

catalogToggle.addEventListener("click", () => {
  showAll = !showAll;
  renderCatalog();
});
hraSearch.addEventListener("input", renderCatalog);

function setActivation(key) {
  const content = activationContent[key];
  document.querySelectorAll(".activation-tab").forEach((tab) => {
    tab.setAttribute("aria-selected", String(tab.dataset.activation === key));
  });
  document.querySelector("#activation-kicker").textContent = content.kicker;
  document.querySelector("#activation-title").textContent = content.title;
  document.querySelector("#activation-copy").textContent = content.copy;
  document.querySelector("#activation-detail").innerHTML = `<strong>Role in the journey:</strong> ${content.detail}`;
  const image = document.querySelector("#activation-image");
  image.src = content.image;
  image.alt = content.alt;
  const links = document.querySelector("#activation-links");
  links.replaceChildren();
  if (content.link) {
    const anchor = document.createElement("a");
    anchor.className = "button light";
    anchor.href = content.link;
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.textContent = content.linkLabel;
    links.append(anchor);
  }
}

document.querySelectorAll(".activation-tab").forEach((tab) => {
  tab.addEventListener("click", () => setActivation(tab.dataset.activation));
});

function setExperience(key) {
  const content = experienceContent[key];
  document.querySelectorAll(".experience-tab").forEach((tab) => {
    tab.setAttribute("aria-selected", String(tab.dataset.stage === key));
  });
  document.querySelector("#experience-kicker").textContent = content.kicker;
  document.querySelector("#experience-title").textContent = content.title;
  document.querySelector("#experience-copy").textContent = content.copy;
  document.querySelector("#experience-note").innerHTML = `<strong>Design principle:</strong> ${content.note}`;
  const image = document.querySelector("#experience-image");
  image.src = content.image;
  image.alt = content.alt;
}

document.querySelectorAll(".experience-tab").forEach((tab) => {
  tab.addEventListener("click", () => setExperience(tab.dataset.stage));
});

const reportContent = {
  dashboard: {
    title: "Review and manage active HRAs in one place.",
    copy: "See lead capture, results, and status, with direct paths to customize HRAs, manage follow-up plans, build campaign URLs, and preview experiences.",
    image: "assets/console-dashboard.jpg",
    alt: "HRA Management program dashboard",
    caption: "A single view of program activity and the tools to manage it."
  },
  funnel: {
    title: "Understand progression from start to action.",
    copy: "See where consumers begin, provide information, complete the HRA, and engage with calls to action. Use drop-off points to focus your next improvement.",
    image: "assets/console-performance-funnel.jpg",
    alt: "HRA Console engagement funnel showing starts, leads, completions, and CTA clicks",
    caption: "Funnel reporting makes engagement and drop-off visible; CTA clicks are not completed appointments."
  },
  trends: {
    title: "See how performance changes over time.",
    copy: "Compare activity across HRAs and reporting periods. Spot seasonality, campaign effects, and assessments that may benefit from more promotion or experience updates.",
    image: "assets/console-performance-trends.jpg",
    alt: "HRA Console performance trends showing assessment completions by month",
    caption: "Trend views help teams choose where to investigate and optimize."
  },
  cta: {
    title: "Connect different results to different actions.",
    copy: "Manage how result pathways map to scheduling, callbacks, education, related HRAs, and other supported next steps. Keep recommendations aligned with available care.",
    image: "assets/console-cta-mapping.jpg",
    alt: "HRA Console calls-to-action mapping for Heart HRA result pathways",
    caption: "CTA mapping is a configuration view; CTA performance reporting shows how consumers engage."
  }
};

const reportTabs = [...document.querySelectorAll(".report-tab")];
function setReport(key) {
  const content = reportContent[key];
  reportTabs.forEach((tab) => {
    const selected = tab.dataset.report === key;
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });
  document.querySelector("#report-panel").setAttribute("aria-labelledby", `report-tab-${key}`);
  document.querySelector("#report-title").textContent = content.title;
  document.querySelector("#report-copy").textContent = content.copy;
  document.querySelector("#report-caption").textContent = content.caption;
  const image = document.querySelector("#report-image");
  image.src = content.image;
  image.alt = content.alt;
  document.querySelector("#report-enlarge").href = content.image;
  document.querySelector("#report-enlarge").setAttribute("aria-label", `Enlarge ${content.alt} screenshot`);
  document.querySelector("#report-image-link").href = content.image;
}
reportTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => setReport(tab.dataset.report));
  tab.addEventListener("keydown", (event) => {
    let next;
    if (event.key === "ArrowDown") next = (index + 1) % reportTabs.length;
    else if (event.key === "ArrowUp") next = (index - 1 + reportTabs.length) % reportTabs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = reportTabs.length - 1;
    else return;
    event.preventDefault();
    setReport(reportTabs[next].dataset.report);
    reportTabs[next].focus();
  });
});

const navLinks = [...document.querySelectorAll(".topnav a[href^='#']")];
const observedSections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function updateActiveNavigation() {
  const marker = window.scrollY + 150;
  let activeId = observedSections[0]?.id;
  observedSections.forEach((section) => {
    if (section.offsetTop <= marker) activeId = section.id;
  });
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
    activeId = observedSections.at(-1)?.id;
  }
  navLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${activeId}`;
    if (isActive) link.setAttribute("aria-current", "true");
    else link.removeAttribute("aria-current");
  });
}

window.addEventListener("scroll", updateActiveNavigation, { passive: true });
window.addEventListener("resize", updateActiveNavigation);

renderCatalog();
setActivation("search");
setExperience("reach");
updateActiveNavigation();
