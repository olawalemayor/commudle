FROM node:16-alpine
WORKDIR /usr/src/app
LABEL authors="Olawale Mayor"
COPY ["package.json","./"]
RUN npm install
COPY . .

# Build Angular app
RUN npm run build


# Final image
EXPOSE 8080
# CMD ["node", "server.js"]
CMD ["npm", "start"]
