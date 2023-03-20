FROM node

WORKDIR /app

RUN apt-get update && apt-get install -y \
    make \
    unzip \
    zip \
    dos2unix

RUN npm install -g node-gyp

COPY package.json ./

COPY package-lock.json ./

RUN npm install

COPY . ./

RUN chmod -R 777 /app/scripts/install-sonar-scanner.sh

RUN dos2unix /app/scripts/install-sonar-scanner.sh

RUN bash /app/scripts/install-sonar-scanner.sh

EXPOSE 5173

CMD ["npm","run", "dev"]    