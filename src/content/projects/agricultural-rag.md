## Evolution: Precision Information Retrieval

**Agricultural RAG Systems** is the backbone of knowledge retrieval at DeepPlants. It began as *Cabbage RAG*, a research prototype, and matured into *Cabbo RAG*, a production-grade pipeline handling the indexing and retrieval of massive agronomic datasets.

The core challenge was precision. "Similarity" in vector space does not always mean "relevance" in agronomy. A paper about "wheat rust" might be embedding-similar to "corn rust," but for a farmer, the difference is total crop failure.

## The Pipeline Configuration

We standardized on a high-performance, locally-hosted stack to ensure data privacy and speed.

### 1. Embeddings & Models
We utilized the **Qwen/Qwen3-Embedding-4B** model. This choice was deliberate:
- **Size vs. Performance**: At 4 billion parameters, it offers a superior understanding of complex scientific syntax compared to smaller BERT-based models, while being small enough to serve efficiently.
- **Serving**: The model is served via **vLLM**, allowing us to batch thousands of embedding requests concurrently.

### 2. Intelligent Chunking
Through extensive testing with USDA reports and FAOLEX legal texts, we optimized our chunking strategy:
- **Chunk Size**: **500 tokens**. This proved to be the "Goldilocks" zone—large enough to contain a complete semantic thought (e.g., a full regulation or a disease symptom description) but small enough to maintain precise vector focus.
- **Overlap**: **64 tokens**. A strategic overlap ensures that context isn't lost at the boundaries of chunks, which is critical for continuous narratives in research papers.

### 3. Vector Storage & Retrieval
We deployed **Qdrant** as our vector database. Its Rust-based engine provides exceptionally low-latency search.
- **Collection**: `qwen3_embedding_faolex`.
- **Filtering**: We heavily utilize Qdrant's payload filtering to allow agents to scope searches by document type (e.g., "Only search in USDA reports from 2024").

## Handling Heterogeneous Data

The system ingest data from diverse, unstructured sources:
- **FAOLEX**: Text-heavy legal documents, processed from raw `.txt` dumps (`create_text_rag.py`).
- **USDA Reports**: Complex PDFs scraped and converted to Markdown (`usda_md_folder`), preserving header structures and tables.

## The Two-Stage Reranking Advantage
To solve the "wheat rust" vs "corn rust" problem, we implemented a **Two-Stage Retrieval**:
1.  **Dense Retrieval**: Qdrant retrieves the top 100 candidate chunks based on cosine similarity.
2.  **Reranking**: A cross-encoder model re-scores these 100 candidates, examining the actual query-document interaction to filter out false positives. This step ensures that the top-5 chunks sent to the LLM are factually pertinent, not just textually similar.
