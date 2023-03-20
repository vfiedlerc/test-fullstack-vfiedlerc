# Define a imagem base
FROM node:14

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de configuração
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o código-fonte
COPY . .

# Expõe a porta da aplicação
EXPOSE 3333

# Inicia a aplicação
CMD ["npm", "start"]
