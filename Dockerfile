FROM node:boron

RUN mkdir /myapp
WORKDIR /myapp

# Install app dependencies
COPY package.json /myapp
RUN npm install

# Set the locale
# RUN locale-gen C.UTF-8
# ENV LANG C.UTF-8
# ENV LC_ALL C.UTF-8

ADD . /myapp
