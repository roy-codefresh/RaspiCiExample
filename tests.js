'use strict';

let request = require('request');
let expect  = require('expect');

describe('LED Application', () => {

    it('turn the led off', (done) => {
        request.post('http://led-control:3000/led', {
            json: true,
            body: {
                value: 1
            }
        }, err => {
            if (err) {
                done(err);
                return;
            }

            request.get('http://gpio-simulator:4500/out/2', { json: true }, (err, res, value) => {
                if (err) {
                    done(err);
                    return;
                }

                expect(value).toEqual(1)
            })
        });
    });
    
    it('turn the led on', (done) => {
        request.post('http://led-control:3000/led', {
            json: true,
            body: {
                value: 0
            }
        }, err => {
            if (err) {
                done(err);
                return;
            }

            request.get('http://gpio-simulator:4500/out/2', { json: true }, (err, res, value) => {
                if (err) {
                    done(err);
                    return;
                }

                expect(value).toEqual(0)
            })
        });
    });
    
});

