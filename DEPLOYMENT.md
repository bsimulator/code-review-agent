# 🚀 Deployment Guide

## Step-by-Step: Add to Your GitHub Repository

### Method 1: Direct Upload (Easiest)

1. **Go to your GitHub repository**
   - Navigate to the repo where you want PR reviews

2. **Create workflow file**
   - Click: **Add file → Create new file**
   - Path: `.github/workflows/pr-review.yml`
   - Paste contents from: `.github/workflows/pr-review.yml`
   - Commit the file

3. **Add analyzer script**
   - Click: **Add file → Create new file**
   - Filename: `analyzer.sh`
   - Paste contents from: `analyzer.sh`
   - Commit the file

4. **Add OpenAI API Key**
   - Go to: **Settings → Secrets and variables → Actions**
   - Click: **New repository secret**
   - Name: `OPENAI_API_KEY`
   - Value: Your OpenAI key from https://platform.openai.com/api-keys
   - Click: **Add secret**

5. **Test it!**
   - Create a new branch
   - Make some code changes
   - Open a pull request
   - Watch the magic happen! ✨

### Method 2: Git Push

```bash
# Clone your repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO

# Create workflow directory
mkdir -p .github/workflows

# Copy files
cp c:/AI_PGP/code-review-agent/.github/workflows/pr-review.yml .github/workflows/
cp c:/AI_PGP/code-review-agent/analyzer.sh .

# Commit and push
git add .github/workflows/pr-review.yml analyzer.sh
git commit -m "Add AI PR review workflow"
git push origin main
```

Then add the `OPENAI_API_KEY` secret in GitHub settings.

## ✅ Verification

After setup, you should see:

1. **In your repo:**
   - `.github/workflows/pr-review.yml` ✓
   - `analyzer.sh` ✓

2. **In Settings → Secrets:**
   - `OPENAI_API_KEY` ✓

3. **Test by creating a PR:**
   - GitHub Actions runs automatically
   - Analyzer checks code
   - AI posts review comments

## 🎯 What Happens on Each PR

```
Pull Request Created
    ↓
GitHub Action Triggers Automatically
    ↓
Step 1: Checkout code
Step 2: Run analyzer.sh
    • Checks security issues
    • Checks code quality
    • Checks performance
    • Reports found issues
    ↓
Step 3: AI Review (GPT-4)
    • Deep code analysis
    • Bug detection
    • Best practices check
    • Posts inline comments
    ↓
Review Comments Appear on PR
```

## 🔧 Customization

### Change AI Model
Edit `.github/workflows/pr-review.yml`:
```yaml
MODEL: gpt-4-turbo-preview    # or gpt-3.5-turbo for cheaper
```

### Add Custom Checks
Edit `analyzer.sh`:
```bash
# Add your own pattern check
if grep -q "YOUR_PATTERN" "$DIFF_FILE"; then
    echo "⚠️  YOUR_WARNING"
fi
```

### Adjust Review Focus
Edit `.github/workflows/pr-review.yml`:
```yaml
PROMPT: |
  Focus specifically on:
  - Security vulnerabilities
  - Your custom requirements
```

## 💰 Cost Estimate

- **GitHub Actions**: Free for public repos, included with private
- **OpenAI API**: ~$0.01-0.05 per PR review (depends on size)

## 🐛 Troubleshooting

**Action doesn't run:**
- Check: Workflow file is in `.github/workflows/`
- Check: File has `.yml` extension
- Check: Correct permissions in workflow

**No AI comments:**
- Verify: `OPENAI_API_KEY` secret is set correctly
- Check: Actions tab for error messages
- Check: API key has credits

**Analyzer errors:**
- File must be named exactly `analyzer.sh`
- Must be in repository root
- Permissions are set in workflow (chmod +x)

## 📚 Resources

- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [OpenAI API Keys](https://platform.openai.com/api-keys)
- [ChatGPT-CodeReview Action](https://github.com/anc95/ChatGPT-CodeReview)

## 🎉 Success!

Once set up, every PR will automatically get:
- ✅ Security analysis
- ✅ Code quality checks
- ✅ Performance review
- ✅ AI-powered detailed feedback

No manual intervention needed!
