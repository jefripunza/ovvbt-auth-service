FROM node:14-alpine
MAINTAINER Jefri Herdi Triyanto, jefri.triyanto@goapotik.com

WORKDIR /app
COPY . .

# 🌊 Install Dependencies
RUN yarn

# ⚒️ Build
RUN npm run build

# 🚫 Remove Meta Files & Folders
RUN ls -a &&\
  rm -rf log &&\
  rm -rf node_modules &&\
  rm -rf src &&\
  rm .gitignore &&\
  rm Dockerfile &&\
  rm nodemon.json &&\
  rm package-lock.json || true &&\
  rm package.json &&\
  rm README.md &&\
  rm yarn.lock || true &&\
  ls -a

# 📁 Top Level Change
RUN mv -v ./dist/* ./ &&\
  rm -rf dist

# 🔣 Rename index.js to app.js
RUN mv index.js app.js

# 💯 Configuration for Production
RUN sed -i 's/localhost/172.17.0.1/g' .env.development

# 🚀 Finish !!
CMD ["node", "app.js"]