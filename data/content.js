/* Edit this file to update the content on both pages. No build step required. */

const SITE = {
  "name": "Raymond Shaw",
  "role": "Computer science, Machine Learning & Robotics",
  "shortName": "Raymond Shaw",
  "location": "Austin, TX",
  "email": "raymondsh0705@gmail.com",
  "resume": "assets/img/Raymond Shaw Resume.docx.pdf",
  "about": [
    "I’m a Computer Science Undergraduate at the University of Texas at Austin, with minors in Economics and Japanese. I’m interested in how machine learning and well-designed software can solve practical problems.",
    "At AMRL, I research model integration for socially aware robot navigation. Previously, I built computer vision and data tools at MetOX International. My projects range from training a small language model to creating real-time multiplayer games.",
    "Outside of code, I study Japanese and enjoy geopolitical documentaries."
  ],
  "taglines": [
    "AI-ML",
    "Data Analysis",
    "Web Development"
  ],
  "skills": [
    {
      "group": "Languages",
      "items": [
        "Python",
        "Java",
        "C",
        "SQL",
        "JavaScript"
      ]
    },
    {
      "group": "Machine learning",
      "items": [
        "PyTorch",
        "Scikit-learn",
        "Hugging Face",
        "Computer Vision",
        "LLM"
      ]
    },
    {
      "group": "Software & data",
      "items": [
        "React",
        "Node.js",
        "FastAPI",
        "Flask",
        "MySQL",
      ]
    },
    {
      "group": "Beyond the code",
      "items": [
        "Japanese",
        "Chinese",
        "Economics",
        "Data Analysis"
      ]
    }
  ],
  "experience": [
    {
      "period": "Sep 2026 — Present",
      "title": "Undergraduate Researcher",
      "org": "AMRL · UT Austin",
      "detail": "Researching model integration for socially aware robot navigation. Developing fine-tuning and evaluation pipelines and integrating with ROS 2 for robotic simulation."
    },
    {
      "period": "Jun — Aug 2026",
      "title": "AI/ML & Data Analyst Intern",
      "org": "MetOX International",
      "detail": "Trained YOLO and PatchCore models for live manufacturing defect detection. Built data modeling applications, MySQL schemas, and ETL pipelines for manufacturing data."
    },
    {
      "period": "Dec 2025 — Sep 2026",
      "title": "AI/ML Business Application Program",
      "org": "UT Austin McCombs / Great Learning",
      "detail": "Developed end-to-end ML pipelines for business cases, covering preprocessing, model training, fine-tuning, retrieval-augmented generation, and evaluation."
    },
    {
      "period": "Jul — Aug 2025",
      "title": "Web Developer Intern",
      "org": "MAG Neurospine Clinic",
      "detail": "Built a patient data application in Microsoft Dataverse and Power Apps. Automated legacy PDF and Excel data migration with SQL and Power Query."
    },
    {
      "period": "Expected May 2028",
      "title": "B.S. in Computer Science",
      "org": "The University of Texas at Austin",
      "detail": "Minors in Economics and Japanese · GPA: 3.96. Coursework includes Operating Systems, Computer Architecture, Data Structures, and Speech/Audio Processing."
    }
  ],
  "socials": [
    {
      "label": "GitHub",
      "url": "https://github.com/RaymondSh0705",
      "icon": "github"
    },
    {
      "label": "LinkedIn",
      "url": "https://www.linkedin.com/in/raymond-shaw-0baa67282/",
      "icon": "linkedin"
    },
    {
      "label": "Email",
      "url": "mailto:raymondsh0705@gmail.com",
      "icon": "mail"
    }
  ]
};

const PROJECTS = [
  {
    "title": "Kanadle",
    "summary": "A Japanese language web application in development, with a responsive React interface and a Node.js backend that integrates the Jisho API for dynamic game logic.",
    "image": "assets/img/Screenshot 2026-10-07 at 1.58.25 PM.png",
    "tags": ["Web Development"],
    "year": "2026",
    "links": [
      {
        "label": "Source code",
        "url": "https://github.com/RaymondSh0705/Wordle-JP"
      },
      {
        "label": "Application",
        "url": "https://wordle-jp.raymondsh0705.workers.dev/"
      }
    ],
    "stack": ["React", "Node.js", "Jisho API"]
  },
  {
    "title": "Nano-Chatbot LLM",
    "summary": "A small language model built with PyTorch, using attention, rotary position embeddings, tokenization, and KV caching to explore efficient training and inference.",
    "image": "assets/img/Screenshot 2026-08-23 at 12.40.47 PM.png",
    "tags": [
      "AI"
    ],
    "year": "2026",
    "featured": true,
    "links": [
      {
        "label": "Source code",
        "url": "https://github.com/RaymondSh0705/NanochatProject"
      }
    ],
    "stack": [
      "PyTorch",
      "Hugging Face",
      "LLMs"
    ]
  },
  {
    "title": "Applied AI & ML Notebooks",
    "summary": "End-to-end machine learning experiments tackling business cases, from data preparation to model training and evaluation.",
    "image": "assets/img/Screenshot 2026-08-23 at 12.20.53 PM.png",
    "tags": [
      "AI"
    ],
    "year": "2026",
    "links": [
      {
        "label": "Source code",
        "url": "https://github.com/RaymondSh0705/AIMLColabNotebookProjects"
      }
    ],
    "stack": [
      "PyTorch",
      "Scikit-learn",
      "Transformers"
    ]
  },
  {
    "title": "Lyric Searcher",
    "summary": "A Next.js application that searches for song lyrics through a REST API and presents the results in a simple web interface.",
    "image": "assets/img/Screenshot 2026-08-23 at 12.37.24 PM.png",
    "tags": [
      "Web Development"
    ],
    "year": "2026",
    "links": [
      {
        "label": "Source code",
        "url": "https://github.com/RaymondSh0705/lyric-searcher"
      },
      {
        "label": "Application",
        "url": "https://lyric-searcher-delta.vercel.app/"
      }
    ],
    "stack": [
      "Next.js",
      "REST API"
    ]
  },
  {
    "title": "HackHackGoose",
    "summary": "An AI-driven web game with custom branching pathways, structured player state, and real-time gameplay.",
    "image": "assets/img/Screenshot 2026-08-23 at 12.30.40 PM.png",
    "tags": [
      "AI",
      "Web Development"
    ],
    "year": "2026",
    "featured": true,
    "links": [
      {
        "label": "Source code",
        "url": "https://github.com/briank1727/hackhackgoose-ugly-ducks"
      }
    ],
    "stack": [
      "Gemini API",
      "FastAPI",
      "WebSockets"
    ]
  },
  {
    "title": "Japanese Word Bomb",
    "summary": "A real-time multiplayer Japanese word game with private lobbies, custom dictionary queries, and synchronized player state.",
    "image": "assets/img/Screenshot 2026-08-23 at 12.33.05 PM.png",
    "tags": [
      "Web Development"
    ],
    "year": "2025",
    "featured": true,
    "links": [
      {
        "label": "Source code",
        "url": "https://github.com/RaymondSh0705/Japanese-Word-Bomb"
      },
      {
        "label": "Application",
        "url": "https://japanese-word-bomb.onrender.com/"
      }
    ],
    "stack": [
      "Python",
      "FastAPI",
      "WebSockets"
    ]
  },
  {
    "title": "Rhythm Quest",
    "summary": "A browser-based rhythm game built in Unity, with custom backgrounds, music, and sprites.",
    "image": "assets/img/Screenshot 2026-08-23 at 12.34.07 PM.png",
    "tags": [
      "Web Development"
    ],
    "year": "2025",
    "links": [
      {
        "label": "Source code",
        "url": "https://github.com/vishalsund/rhythm-quest"
      },
      {
        "label": "Application",
        "url": "https://vishalsund.github.io/rhythm-quest/"
      }
    ],
    "stack": [
      "Unity",
      "Game design"
    ]
  }
];
