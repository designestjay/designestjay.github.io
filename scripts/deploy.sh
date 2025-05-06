#!/bin/bash

# Script to build and deploy website to GitHub Pages
# Avoids using GitHub Actions by directly building and updating the docs folder

echo "🚀 Starting deployment process..."

# Build the site
echo "📦 Building the site..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ Build failed. Aborting deployment."
  exit 1
fi

echo "✅ Build completed successfully!"

# Ensure video directories exist in docs
echo "📂 Ensuring video directories exist..."
mkdir -p docs/images/assets/ESAB
mkdir -p docs/images/assets/Geely\ Motors
mkdir -p docs/images/assets/Volvo\ Group\ AR

# Copy built files to docs directory (for GitHub Pages)
echo "📂 Copying build files to docs directory..."
rsync -av build/ docs/ --delete --exclude="images/assets/ESAB/*.mp4" --exclude="images/assets/Geely Motors/*.mp4" --exclude="images/assets/Volvo Group AR/*.mp4"

echo "✅ Files copied to docs directory!"

# Add .nojekyll file to prevent Jekyll processing
echo "📄 Ensuring .nojekyll file exists..."
touch docs/.nojekyll

echo "🔍 Checking for CNAME file..."
if [ ! -f docs/CNAME ]; then
  echo "iamjaydesign.com" > docs/CNAME
  echo "✅ CNAME file created!"
else
  echo "✅ CNAME file already exists!"
fi

# Add changes to git
echo "📝 Adding changes to git..."
git add .

# Prompt for commit message
echo "💬 Enter a commit message (e.g., 'Update site with new blog post'):"
read commit_message

if [ -z "$commit_message" ]; then
  commit_message="Update site content and rebuild"
fi

# Commit changes
echo "💾 Committing changes with message: '$commit_message'..."
git commit -m "$commit_message"

# Push to GitHub
echo "☁️ Pushing changes to GitHub..."
git push github main

if [ $? -ne 0 ]; then
  echo "❌ Push failed. Please check your git configuration and try again."
  exit 1
fi

echo "🎉 Deployment complete! Your site has been updated at https://iamjaydesign.com"
echo "📊 Changes should be visible in a few minutes." 