FROM node

ENV NPM_CONFIG_LOGLEVEL warn
ENV APP_ENV development

COPY ./ ./app
WORKDIR ./app

RUN yarn

CMD yarn serve