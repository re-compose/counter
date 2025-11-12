FROM us-central1-docker.pkg.dev/recompose-stellar/base/image

COPY package*.json ./

RUN npm ci

COPY client/ ./client/
COPY vite.config.ts ./
COPY jest.config.js ./
COPY eslint.config.js ./
COPY tsconfig.json ./

WORKDIR /app

CMD ["/bin/sh", "/scripts/run-tests.sh"]

