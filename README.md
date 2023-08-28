# NoteDrive

HOW TO INSTALL NUX INSIDE A FOLDER
```npx nuxi@latest init <file_name>```
or 

```npx nuxi init <file_name>```

```npm install```

note: sometimes these can fail in that case first create a "npm" named empty file in the mentioned directory if not created already then inside sys.32 drivers etc 
there is a file host open it in an editor using admin rights and under the ip paste 185.199.108.133 and under the local host paste raw.githubusercontent.com restart 
comp for better results. then continue the next mentioned steps.


install tailwind in vue
```npm install -save-dev @nuxtjs/tailwindcss  ```

and then inside the nuxt.config.js file write modules: ['@nuxtjs/tailwindcss'] basically like this
`export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss']
})`

then u need to write ```npx tailwindcss init```

if you see tailwind viewer is included when you dev run then it was successful

For adding icons
```npm install --save-dev nuxt-icon```
for adding icons add this and add the module

GIT-HUB:
```git status``` -> git status self explanatory
``` git checkout <Branch name>``` ->change branch
```git add .``` -> adding the git file
```git commit -m "commit name"``` ->commit 
```git push origin <Branch name>``` -> git push 
