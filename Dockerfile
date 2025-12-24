# Estágio 1: Build do Front-end (TypeScript/Vite)
# Atualizado para Node 20 para satisfazer o Vite 7
FROM node:20-alpine AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# Estágio 2: Build do Back-end (Go)
# Atualizado para Go 1.24 para satisfazer seu go.mod
FROM golang:1.24-alpine AS backend-builder
WORKDIR /app

# Copia os arquivos de dependência primeiro (otimiza cache)
COPY go.mod go.sum ./
RUN go mod download

# Copia o código do backend
COPY . .

# Copia o front buildado para a pasta que o Go vai servir
# Verifique se no seu código Go você serve a pasta "./static"
COPY --from=frontend-builder /app/frontend/dist ./static 

# Build do binário
RUN go build -o main .

# Estágio 3: Execução (Imagem final leve)
FROM alpine:latest
WORKDIR /root/
# Instala certificados CA para caso seu Go faça requisições HTTPS
RUN apk --no-cache add ca-certificates
COPY --from=backend-builder /app/main .
COPY --from=backend-builder /app/static ./static

# O Render usa a variável de ambiente PORT
EXPOSE 8080

CMD ["./main"]