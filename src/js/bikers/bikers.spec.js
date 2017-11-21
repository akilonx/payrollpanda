import Bikers from './bikers';
import { expect } from 'chai';

describe("Bikers", () => {
    context("getCheckedData() function", () => {
        it("should return joined array values", () => {
            let sut = new Bikers();
            let testdata = [{ value: 'one' }, { value: 'two' }];
            expect(sut.getCheckedData(testdata)).to.equal('one, two');
        });
    });
});