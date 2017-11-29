FROM node

ENV NPM_CONFIG_LOGLEVEL warn
ENV APP_ENV production

COPY ./ ./app
WORKDIR ./app

RUN npm install -g http-server
RUN yarn

CMD yarn build  && hs ./build -p 80