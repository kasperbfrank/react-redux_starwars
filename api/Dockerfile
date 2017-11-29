FROM beevelop/nodejs-python

ENV NPM_CONFIG_LOGLEVEL warn
ENV APP_ENV production

COPY ./ ./api
WORKDIR ./api

RUN npm i -g nodemon
RUN npm i
CMD nodemon server.js