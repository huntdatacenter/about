---
title: Glossary
# layout: page
sidebar: false
pref: false
next: false
aside: false
glossary:
  - title: Artificial Intelligence (AI)
    text: |
      Artificial Intelligence (AI) in its broadest sense, is intelligence exhibited by machines. It encompasses various techniques and systems that enable tasks such as problem-solving, natural language processing, and decision-making to be performed autonomously.
  - title: Graphics Processing Unit (GPU)
    text: |
      A GPU (Graphics Processing Unit) is a specialized processor designed to handle computationally intensive tasks by performing parallel operations across thousands of cores. In research and data science, GPUs accelerate tasks like deep learning, simulations, and large-scale data analysis, significantly reducing processing time compared to traditional CPUs.
  - title: Helseundersøkelsen i Trøndelag (HUNT)
    text: |
      The Trøndelag Health Study (The HUNT Study) is one of the largest health studies ever performed. It is a unique database of questionnaire data, clinical measurements and samples from a county’s inhabitants since 1984.
  - title: Machine Learning (ML)
    text: |
      Machine learning (ML) is a subset of artificial intelligence that enables computers to learn and improve from experience without being explicitly programmed. It uses algorithms to analyze data, identify patterns, and make predictions or decisions based on that data.
  - title: Sensitive AI
    text: |
      Sensitive AI is all about using sensitive data when training of AI/ML models.
  - title: Sensitive Data
    text: |
      Sensitive data is information that must be protected from unauthorized access to ensure privacy, security, and compliance with regulations. It includes personal details like social security numbers, financial information, health records, and any data that, if exposed, could harm individuals or organizations.
  - title: Health data access body (HDAB)
    text: |
      The HDAB enables data users such as researchers and policymakers to apply for access to health datasets. This supports research and innovation, education and training, policymaking, health service management, and the preparation of national statistics.
  - title: Data permit
    text: |
      "data permit" means an administrative decision issued to a health data user by a health data access body to process certain electronic health data specified in the data permit for specific secondary use purposes.
  # - title: ABC
  #   text: |
  #     Abc
---

# These days, there’s an acronym for everything

<br/>
Here you can look up the meaning of those tricky terms.
<br/>
<br/>

<GlossaryPanels :items="$frontmatter.glossary" />
