# ==========================================
# Estágio 1: Build do Front-end (TypeScript/Vite)
# ==========================================
FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend
# Copia os arquivos de dependência de dentro da pasta frontend
COPY frontend/package*.json ./
RUN npm install
# Copia todo o conteúdo da pasta frontend
COPY frontend/ .
RUN npm run build

# ==========================================
# Estágio 2: Build do Back-end (Go)
# ==========================================
FROM golang:1.24-alpine AS backend-builder
WORKDIR /app

# Copia os arquivos de dependência de dentro da pasta backend
COPY backend/go.mod backend/go.sum ./
RUN go mod download

# Copia o código fonte do backend
COPY backend/ .

# Copia os arquivos estáticos gerados no Estágio 1 para dentro da pasta do backend
# O Go deve estar configurado para servir a pasta "./static"
COPY --from=frontend-builder /app/frontend/dist ./static 

# Build do binário (estando dentro da pasta onde o main.go reside)
RUN go build -o main .

# ==========================================
# Estágio 3: Execução (Imagem Final)
# ==========================================
FROM alpine:latest
WORKDIR /root/
RUN apk --no-cache add ca-certificates

# Copia o executável e a pasta static do estágio de build
COPY --from=backend-builder /app/main .
COPY --from=backend-builder /app/static ./static

# O Render exige que a aplicação ouça na porta da variável de ambiente PORT
EXPOSE 8080

CMD ["./main"]