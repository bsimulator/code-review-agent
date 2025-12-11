# Quick Start Guide

## Step 1: Copy Files

In your repository, create these files:

### `.github/workflows/pr-review.yml`
```yaml
name: AI PR Review

on:
  pull_request:
    types: [opened, synchronize, reopened]

permissions:
  contents: read
  pull-requests: write

jobs:
  review:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Analyze Code
        run: |
          chmod +x ./analyzer.sh
          ./analyzer.sh
      
      - name: AI Review
        uses: anc95/ChatGPT-CodeReview@main
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          OPENAI_API_KEY: ${{ secrets.OPENAI_API_KEY }}
          MODEL: gpt-4-turbo-preview
```

### `analyzer.sh`
Copy the full analyzer script from this repo.

## Step 2: Add Secret

1. Go to repository **Settings**
2. Click **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `OPENAI_API_KEY`
5. Value: `sk-...` (your OpenAI key)
6. Click **Add secret**

## Step 3: Test

1. Create a new branch
2. Make some changes
3. Open a pull request
4. Watch the review happen automatically!

## Done! 🎉

The agent will now review every PR automatically.
