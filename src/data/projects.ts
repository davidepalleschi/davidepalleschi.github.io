export interface Project {
    slug: string;
    title: string;
    description: string;
    image: string;
    video?: string;
    category: "Personal" | "University" | "Work";
    tags: string[];
    links?: {
        demo?: string;
        repo?: string;
        paper?: string;
    };
    startDate: string;
    endDate: string;
}

export const projects: Project[] = [
    {
        slug: "zepp2hass",
        title: "Zepp2Hass",
        description: "A custom Home Assistant integration and Zepp OS app to sync smartwatch data in real-time.",
        image: "/assets/img/project/zepp2hass.svg",
        category: "Personal",
        tags: ["Home Assistant", "Zepp OS", "Python", "JavaScript", "IoT"],
        links: {
            repo: "https://github.com/davidepalleschi/zepp2hass",
        },
        startDate: "2025-11",
        endDate: "Present",
    },
    {
        slug: "omnisensor",
        title: "Omnisensor",
        description: "A DIY device for presence detection and monitoring environmental conditions.",
        image: "/assets/img/project/omni16_9.jpg",
        category: "Personal",
        tags: ["IoT", "Electronics", "ESP32", "3D Printing", "PCB Design"],
        startDate: "2022-11",
        endDate: "2023-03",
    },
    {
        slug: "privacy-oriented-object-detection",
        title: "Privacy-oriented Object Detection",
        description: "Detecting people and actions in low-resolution images for privacy-preserving surveillance.",
        image: "/assets/img/project/privacy.png",
        video: "/assets/video/Demo.mp4",
        category: "University",
        tags: ["Computer Vision", "YOLOv8", "Privacy", "Edge AI"],
        startDate: "2023-10",
        endDate: "2024-05",
    },
    {
        slug: "the-maze-game",
        title: "The Maze Game",
        description: "A university project utilizing WebGL to create a 3D maze escape game.",
        image: "/assets/img/project/webgl.png",
        category: "University",
        tags: ["WebGL", "Game Dev", "3D Graphics", "Javascript"],
        links: {
            demo: "https://sapienzainteractivegraphicscourse.github.io/final-project-dp-final-project/",
            repo: "https://github.com/SapienzaInteractiveGraphicsCourse/final-project-dp-final-project",
        },
        startDate: "2021-07",
        endDate: "2021-09",
    },
    {
        slug: "smart-home",
        title: "Smart Home",
        description: "My Smart home, developed since 2016, featuring over 100 devices and complex automations.",
        image: "/assets/img/project/homeass16.png",
        category: "Personal",
        tags: ["Home Assistant", "Node-RED", "Zigbee", "Z-Wave", "Automation"],
        startDate: "2016-06",
        endDate: "Present",
    },
    {
        slug: "cabbage",
        title: "CABBAGE (AgriBench)",
        description: "A comprehensive multimodal benchmark (74K+ questions) for agricultural AI.",
        image: "/assets/img/project/cabbage-logo.png",
        category: "Work",
        tags: ["NeurIPS 2025", "AI Research", "Benchmark", "Data Engineering"],
        startDate: "2024-11",
        endDate: "2025-02",
    },
    {
        slug: "cabbo",
        title: "Cabbo",
        description: "An advanced agricultural AI platform orchestrating specialized agents for decision support.",
        image: "/assets/img/project/cabbo-logo.png",
        category: "Work",
        tags: ["AI Engineering", "Multi-Agent Systems", "FastAPI", "Docker"],
        startDate: "2025-07",
        endDate: "2025-10",
    },

    {
        slug: "agricultural-rag",
        title: "Agricultural RAG Systems",
        description: "Advanced RAG pipelines using Qdrant and Qwen3 to make agricultural knowledge accessible to AI.",
        image: "/assets/img/project/rag-logo.png",
        category: "Work",
        tags: ["RAG", "Vector DB", "Qdrant", "vLLM", "NLP"],
        startDate: "2025-04",
        endDate: "2025-05",
    },
    {
        slug: "websearch-ai",
        title: "WebSearch AI",
        description: "A modular Python library for semantic web search with LLM summarization.",
        image: "/assets/img/project/websearch-ai-logo.png",
        category: "Personal",
        tags: ["Open Source", "Python Library", "Search", "LLM"],
        startDate: "2025-11",
        endDate: "2025-11",
    },
];
