git filter-branch --tree-filter 'rm -rf .idea' --prune-empty HEAD
echo .idea/ >> .gitignore
git add .gitignore
git commit -m 'Removing node_modules from git history'
git gc