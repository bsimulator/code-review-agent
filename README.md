# Simple PR Review Agent

**No Python, Just YAML + Shell Script** 🚀

Automatic PR reviews using GitHub Actions with built-in analyzer.

## 📁 Files

```
.github/
└── workflows/
    └── pr-review.yml    # GitHub Action workflow

analyzer.sh              # Shell-based code analyzer
```

## 🚀 Setup (2 Steps)

### 1. Add Files to Your Repository

Copy these files to your repository:

```bash
# Copy workflow
.github/workflows/pr-review.yml

# Copy analyzer
analyzer.sh
```

### 2. Add OpenAI API Key

1. Go to: **Your Repo → Settings → Secrets → Actions**
2. Click: **New repository secret**
3. Name: `OPENAI_API_KEY`
4. Value: Your key from https://platform.openai.com/api-keys
5. Save

**Done!** ✅

## ⚡ How It Works

```
PR Created/Updated
    ↓
GitHub Action Runs
    ↓
1. Shell Analyzer checks for:
   • Security issues (hardcoded passwords, dangerous functions)
   • Code quality (debug statements, TODO comments)
   • Performance issues (inefficient queries, loops)
   • File sizes
    ↓
2. AI Review (GPT-4) provides:
   • Detailed code analysis
   • Bug detection
   • Best practices
   • Suggestions
    ↓
Comments Posted to PR
```

## 🔍 What Gets Analyzed

### Shell Analyzer (analyzer.sh)
- 🔒 **Security**: Hardcoded secrets, dangerous functions
- 📊 **Code Quality**: Debug statements, TODOs, var usage
- ⚡ **Performance**: Inefficient queries, loops
- 📁 **File Size**: Large files that should be split

### AI Review (GPT-4)
- 🐛 Bugs and logic errors
- 🔒 Security vulnerabilities
- ⚡ Performance optimization
- ✅ Best practices
- 💡 Improvement suggestions

## 🎨 Customize

Edit `.github/workflows/pr-review.yml`:

```yaml
env:
  MODEL: gpt-4-turbo-preview        # Change AI model
  temperature: 0.3                  # Adjust creativity
  max_tokens: 2000                  # Response length
```

Edit `analyzer.sh` to add your own checks:

```bash
# Add custom pattern check
if grep -q "your_pattern" "$DIFF_FILE"; then
    echo "⚠️  Custom warning message"
fi
```

## 💡 Example Output

The analyzer produces reports like:

```
================================================
🔍 PR Code Analysis Report
================================================

🔒 SECURITY ANALYSIS
-------------------
⚠️  WARNING: Hardcoded API key detected
✅ No dangerous functions detected

📊 CODE QUALITY ANALYSIS
------------------------
ℹ️  INFO: Debug statements found (console.log)
ℹ️  INFO: TODO comments found

⚡ PERFORMANCE ANALYSIS
----------------------
⚠️  WARNING: SELECT * query detected

================================================
📋 SUMMARY
================================================
Security Issues: 1
Code Quality Issues: 2
Performance Issues: 1
Total Issues: 4
```

Then AI adds detailed inline comments.

## 🔧 No Python Required!

- ✅ Pure YAML workflow
- ✅ Shell script analyzer
- ✅ Uses existing GitHub Action for AI review
- ✅ Zero dependencies

## 📖 Using Different AI Providers

### OpenAI (default)
Already configured! Just add `OPENAI_API_KEY` secret.

### Anthropic Claude
Change the workflow to use a different action or add custom curl commands.

## 🆓 Cost

- GitHub Actions: Free for public repos
- OpenAI API: Pay per use (~$0.01-0.03 per review)

## 🐛 Troubleshooting

**"Permission denied: analyzer.sh"**
- File permissions are set in workflow (`chmod +x`)

**"OPENAI_API_KEY not found"**
- Add it as repository secret, not environment variable

**"No review posted"**
- Check Actions tab for errors
- Verify permissions in workflow

## 🎓 Learn More

- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [ChatGPT-CodeReview Action](https://github.com/anc95/ChatGPT-CodeReview)
