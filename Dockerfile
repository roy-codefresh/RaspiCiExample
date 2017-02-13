FROM resin/raspberrypi-node

WORKDIR /code/

ADD ./package.json ./package.json

RUN npm install

ADD ./index.js ./index.js
ADD ./tests.js ./tests.js

CMD ["node", "index.js"]
