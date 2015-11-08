FROM ubuntu:trusty
MAINTAINER Gavin.H hxhg1@hotmail.com

RUN apt-get update && apt-get install -y nodejs
EXPOSE 80
COPY server.js /
CMD ["nodejs", "/server.js"]