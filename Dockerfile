FROM resin/raspberrypi-node

WORKDIR /code/

ADD ./package.json ./package.json

RUN npm install

ADD ./index.js ./index.js

CMD ["node", "index.js"]
