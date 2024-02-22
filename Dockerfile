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

#WORKDIR /usr/local/bin
COPY --from=prod /app/build /usr/share/nginx/html
#COPY --from=prod /app/nginx.conf /etc/nginx
EXPOSE 80
#EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]

#WORKDIR /usr/share/nginx/html
#RUN rm -rf ./*
#COPY --from=builder /app/build .
#ENTRYPOINT ["nginx", "-g", "daemon off;"]
