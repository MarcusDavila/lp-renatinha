# Estágio 1: Build do Front-end (TypeScript)
FROM node:18-alpine AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# Estágio 2: Build do Back-end (Go)
FROM golang:1.21-alpine AS backend-builder
WORKDIR /app
COPY backend/ ./
# Copia o front buildado para onde o Go vai servir os arquivos estáticos
COPY --from=frontend-builder /app/frontend/dist ./static 
RUN go build -o main .

# Estágio 3: Execução
FROM alpine:latest
WORKDIR /root/
COPY --from=backend-builder /app/main .
COPY --from=backend-builder /app/static ./static
EXPOSE 8080
CMD ["./main"]