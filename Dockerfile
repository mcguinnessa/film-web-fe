FROM node:17-alpine AS prod

WORKDIR /app

COPY package*.json .
#COPY yarn*.lock .
RUN npm install
COPY . .
RUN npm run build

#Stage 2
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=prod /app/build /usr/share/nginx/html
EXPOSE 80

ENV REACT_APP_DB_BACKEND_URL="http://0.0.0.0/api"

CMD ["nginx", "-g", "daemon off;"]
