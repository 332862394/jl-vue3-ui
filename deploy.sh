rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m"update" &&
git branch -M main &&
git remote add origin git@github.com:332862394/jl-vue3-ui-website.git &&
git push -f -u origin main &&
cd -
echo https://332862394.github.io/jl-vue3-ui-website/index.html