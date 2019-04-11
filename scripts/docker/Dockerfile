FROM ubuntu:18.04

RUN apt-get update && apt-get -y upgrade
RUN apt-get install -y curl sudo

RUN curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
RUN apt-get install -y nodejs

WORKDIR /opt/launch-ui

COPY package* ./
RUN npm ci

COPY .storybook/ .storybook/
COPY public/ public/
COPY src/ src/

ENTRYPOINT ["npm", "start"]
