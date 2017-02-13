'use strict';

let request = require('request-json');
let expect  = require('expect');

let ledControl = request.createClient('http://led-control:3000/');
let gpioSimulator = request.createClient('http://gpio-simulator:4500/');

describe('LED Application', () => {

    it('turn the led off', (done) => {
        ledControl.post('led', { value:  1 }, err => {
            if (err) {
                done(err);
                return;
            }

            gpioSimulator.get('out/2', (err, res, value) => {
                if (err) {
                    done(err);
                    return;
                }

                expect(value).toEqual(1);
                done();
            })
        });
    });
    
    it('turn the led on', (done) => {
        ledControl.post('led', { value: 0 }, err => {
            if (err) {
                done(err);
                return;
            }

            gpioSimulator.get('out/2', (err, res, value) => {
                if (err) {
                    done(err);
                    return;
                }

                expect(value).toEqual(0);
                done();
            })
        });
    });
    
});

