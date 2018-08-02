import {describe, it} from 'mocha';
import {expect} from 'chai';
import Dispatcher from "../../src/Dispatcher";


describe('Dispatcher', () => {
    it('should construct ', () => {
        let sut = new Dispatcher();

        expect(sut).to.be.instanceOf(Dispatcher);
    });
});