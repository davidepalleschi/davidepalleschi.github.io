## The Vision: Beyond Simple Chatbots

**Cabbo** represents the evolution of agricultural AI from simple Q&A interfaces to proactive, agentic problem solvers. While many platforms offer a wrapper around an LLM, Cabbo was engineered as a comprehensive **Decision Support System (DSS)** that actively researches, analyzes, and reasons about agricultural problems.

It isn't just about answering questions; it's about performing work.

## The "Deep Research" Engine

At the heart of Cabbo is a sophisticated **Deep Research Agent**, designed to autonomously gather high-quality intelligence from the web. We realized that for complex agronomic queries, a single search is never enough.

### Adaptive Research Strategies
The system implements an **Adaptive Strategy** pattern (`ResearchStrategyHandler`) that analyzes the complexity of a user's request and dynamically selects the best approach:
1.  **Quick Strategy**: For simple fact-checking, it performs a rapid, targeted search using top-3 sources.
2.  **Comprehensive Strategy**: For complex problem-solving, it initiates a multi-stage workflow: finding sources, extracting key facts, cross-referencing information, and synthesizing a final report.
3.  **Academic Strategy**: A specialized mode that prioritizes `.edu`, `.gov`, and research repositories, filtering out commercial noise to focus on peer-reviewed agronomic science.

### Source Quality Scoring
To ensure the advice given to farmers is reliable, we implemented a rigorous **Source Quality Scoring** algorithm. The system doesn't just read any link; it evaluates every URL based on:
- **Authority Score**: Heavily weighted towards trusted domains (e.g., `pubmed.ncbi.nlm.nih.gov`, `extension.university.edu`).
- **Relevance Score**: Calculated via semantic keyword overlap between the query and the page title.
- **Content Type**: It distinguishes between "Academic", "Government", "News", and "Commercial" content, prioritizing unbiased information.

Only sources that pass a configurable **Min Confidence Threshold** (e.g., 0.7) are used in the final synthesis.

## Robust Architecture

Cabbo is built on a resilient **Microservices Architecture** powered by **FastAPI** and **Docker**.

### Captcha-Resistant Browsing
One of the biggest challenges in automated research is access. Our pipeline utilizes **BrowserUse** to drive actual browser instances, allowing the agent to navigate complex websites just like a human.
To maintain high availability, we implemented a robust fallback mechanism:
- **Primary**: **SearXNG** instances (hosted internally) for aggregation without tracking.
- **Secondary**: Direct website navigation if aggregators fail.
- **Protocols**: Strict "No-Direct-Google" policies to avoid IP bans and Captcha traps.

### User Experience: Field-Ready Design
This powerful backend is exposed through a mobile-first interface designed for the field. It supports **multi-modal input**, allowing farmers to upload images of crops directly for analysis relative to the research findings. The system preserves session context, allowing for long-running investigations ("How is that disease we discussed last week progressing?").

![Cabbo Mobile Interface](/assets/img/project/cabbo-interface.png)
*Figure 1: The Cabbo mobile-first interface, designed for clarity and ease of use in outdoor conditions.*
