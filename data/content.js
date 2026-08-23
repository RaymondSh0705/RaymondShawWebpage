/* ==========================================================================
   EDIT THIS FILE TO UPDATE YOUR SITE.
   Everything below controls the text, links, and images on both pages.
   No build step needed — save the file and refresh the browser.
   ========================================================================== */

const SITE = {
  name: "Raymond Shaw",
  role: "UT Austin Computer Science Student",
  // Shown in the browser tab, after the page name.
  shortName: "Raymond Shaw",
  location: "Houston, TX",
  email: "rxs87@my.utexas.edu",
  // Optional: path to a PDF in this repo, or "" to hide the resume button.
  resume: "assets/img/Raymond Shaw Resume.docx.pdf",
  avatar: "assets/img/avatar.svg",

  // The big intro paragraph(s) on the About page. Each string is a paragraph.
  about: [
    "Undergraduate Computer Science student at the University of Texas at Austin. I have a strong interest in AI/ML, data analysis, and web development. I enjoy building projects that combine these areas to solve real-world problems.",
    "Right now I'm interested in exploring modern LLM architectures and applying AI models to assist in solution development. Outside of work I study Japanese and watch too much geopolictical documentaries.",
  ],

  // Short punchy lines under your name on the About page.
  taglines: ["AI-ML", "Data Analysis", "Web Development"],

  // Grouped skills, rendered as labeled tag rows on the About page.
  skills: [
    { group: "Programming Languages", items: ["Python", "Java", "C", "SQL", "JavaScript"] },
    { group: "Frameworks", items: ["PyTorch", "Scikit-learn", "Pandas", "NumPy"] },
    { group: "Backend", items: ["MySQL", "FastAPI", "Flask"] },
    { group: "Skills", items: ["LLM", "Computer Vision", "Databasing", "Schema Design", "Japanese", "Chinese"] },
  ],

  // Optional timeline on the About page. Delete entries or set to [] to hide.
  experience: [
    {
      period: "2025 — Present",
      title: "B.S. Computer Science",
      org: "University of Texas - Austin",
      detail: "Courses: Operating Systems, Comp Arch, Speech/Audio Processing | Orgs: DiRP, TRACE",
    },
    {
      period: "Summer 2026",
      title: "Data Science/ML Intern",
      org: "MetOx International Inc",
      detail: "Superconducting Tape Manufacturing CV Pipelines | MySQL, FastAPI Internal Webtool Development",
    },
    {
      period: "2025 - 2026",
      title: "UT Austin PG AI/ML Course",
      org: "UT Austin McCombs/Great Learnig",
      detail: "AI/ML Fundamentals + Applications | Real-World Business Case Projects",
    },
    {
      period: "Summer 2025",
      title: "Web Developer Intern",
      org: "MAG Neurospine Clinic",
      detail: "Excel Power Query Data Migration | MS PowerApps Clinic Data Web App",
    },
  ],

  // Links in the header and footer. Remove any you don't want.
  socials: [
    { label: "GitHub", url: "https://github.com/RaymondSh0705", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/raymond-shaw-0baa67282/", icon: "linkedin" },
    { label: "Email", url: "rxs87@my.utexas.edu", icon: "mail" },
  ],
};

/* --------------------------------------------------------------------------
   PROJECTS
   Add a new object to the top of this list for each project.

   title    (required) name of the project
   summary  (required) one or two sentences
   image    (required) path like "assets/img/my-project.png" or a full URL
   links    (optional) any number of buttons: { label, url }
   tags     (optional) used for the filter buttons on the Projects page
   year     (optional) shown in the card corner
   featured (optional) true = also appears on the About page
   -------------------------------------------------------------------------- */

const PROJECTS = [
  {
    title: "Nano-Chatbot LLM",
    summary:
      "Complete LLM Chatbot pipelinewith custom prompt engineering. Utilizes attention, rotary embeddings, and KV Cache for efficient inference. | Uses: PyTorch, Hugging Face, Rustbpe",
    image: "assets/img/Screenshot 2026-08-23 at 12.40.47 PM.png",
    tags: ["AI"],
    year: "2026",
    featured: true,
    links: [
      { label: "Repo", url: "https://github.com/RaymondSh0705/NanochatProject" },
    ],
  },
  {
    title: "Colab Notebook AI Model Projects",
    summary:
      "Multiple AI Model Projects in Colab Notebooks. Solves unique business cases through AI integration,| Uses: PyTorch, Scikit-learn, Seaborn, Hugging Face, Transformers, etc.",
    image: "assets/img/Screenshot 2026-08-23 at 12.20.53 PM.png",
    tags: ["AI"],
    year: "2026",
    links: [{ label: "Repo", url: "https://github.com/RaymondSh0705/AIMLColabNotebookProjects" }],
  },
  {
    title: "Lyric Searcher",
    summary:
      "Webapp that utilizes a REST API to search for lyrics and display results. | Uses: REST API, Next.js",
    image: "assets/img/Screenshot 2026-08-23 at 12.37.24 PM.png",
    tags: ["Web Development"],
    year: "2026",
    links: [
      { label: "Repo", url: "https://github.com/RaymondSh0705/lyric-searcher" },
    ],
  },
  {
    title: "HackHackGoose AI Game",
    summary:
      "Web-based Game with AI creating custom, unique game pathway. Prompt engineering and custom player infromation JSON for structured gameplay.| Uses: GeminiAPI, Webscokets, FastAPI",
    image: "assets/img/Screenshot 2026-08-23 at 12.30.40 PM.png",
    tags: ["AI", "Web Development"],
    year: "2026",
    featured: true,
    links: [
      { label: "Repo", url: "https://github.com/briank1727/hackhackgoose-ugly-ducks" },
    ],
  },
  {
    title: "Japanese Word Bomb Game",
    summary:
      "Custom web game. Utilizes private multiplayer lobby system and custom dictionary/word stem generation | Uses: Pydantic, FastAPI, Websockets",
    image: "assets/img/Screenshot 2026-08-23 at 12.33.05 PM.png",
    tags: ["Web Development"],
    year: "2025",
    featured: true,
    links: [
      { label: "Repo", url: "https://github.com/RaymondSh0705/Japanese-Word-Bomb" },
      { label: "Link", url: "japanese-word-bomb.onrender.com/" }
    ],
  },
  {
    title: "Rhythm Quest Web Game",
    summary:
      "Rhythm-based web game. Custom background, music, and sprites | Uses: Unity",
    image: "assets/img/Screenshot 2026-08-23 at 12.34.07 PM.png",
    tags: ["Web Development"],
    year: "2025",
    links: [
      { label: "Repo", url: "https://github.com/vishalsund/rhythm-quest" },
      { label: "Link", url: "https://vishalsund.github.io/rhythm-quest/" }
    ],
  },
];
