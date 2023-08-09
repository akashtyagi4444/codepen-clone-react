We are using React v18 along with Material UI packages (material, react, styled, icons-material), react-codemirror2

Divided in Three Components mainly
1) Header
2) Editor
3) Code


### `npm install @mui/material @emotion/react @emotion/styled`
### `npm install @mui/icons-material`
### `npm install react-codemirror2 --legacy-peer-deps`

--> legacy-peer-deps = while package insgtallation takes care of version mismatch



TO deploy it on gh-pages
1) ### `$ npm install gh-pages`
2) Add a homepage property in this format*: https://{username}.github.io/{repo-name} in package.json
3) "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
Add these 2 scripts
4) $ git remote add origin https://github.com/{username}/{repo-name}.git
5) $ npm run deploy
