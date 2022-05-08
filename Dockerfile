FROM node:15.13-alpine
WORKDIR /spe_main_project_frontend
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm", "start"]