# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:8.7.0
# The base node image sets a very verbose log level + set node_env = production
ENV NPM_CONFIG_LOGLEVEL warn NODE_ENV=production

# Copy all local files into image
COPY . /app
WORKDIR /app

# Install all dependencies for current project
RUN yarn

RUN [ "chmod", "+x", "./prod.init.sh" ]
CMD [ "./prod.init.sh" ]