FROM resin/rpi-raspbian:jessie-20160831

# installing basic
RUN apt-get update && \  
    apt-get -qy install curl \
            build-essential python \
            ca-certificates

WORKDIR /root/

RUN curl -O \  
        https://nodejs.org/dist/v4.5.0/node-v4.5.0-linux-armv6l.tar.gz

# installing node js
RUN tar -xvf node-*.tar.gz -C /usr/local \  
        --strip-components=1

# installing application 
WORKDIR /code/

ADD ./package.json ./package.json

RUN npm install

ADD ./index.js ./index.js

CMD ["node", "index.js"]
