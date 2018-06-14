import sinon from 'sinon';
import {Api, filterByTypeAndSubject} from './dataFilter';
import {filterByType} from "./dataFilter";
import {filterBySubject} from "./dataFilter";
import {getAPI} from "./dataFilter";

let chai = require('chai');
let expect = chai.expect;

const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised;
let data;

describe('Filtering data from json', () => {
    before = () => {
        data = [{name: 'Rutherford Scattering', type: 'apps', subject: 'physics'},
            {name: 'The Ramp', type: 'apps', subject: 'physics'},
            {name: 'Energy stake Park', type: 'apps', subject: 'chemistry'},
            {name: 'Pulleys', subject: 'physics', type: 'apps'},
            {name: 'Masses & Springs', type: 'apps', subject: 'physics'}];
    };


    it('should filter by the given type', () => {
        let apiMock = sinon.mock(Api);
        apiMock.expects('getAPI').withArgs('https://raw.githubusercontent.com/balaswecha/pencilbox-2/master/app/json/all.json').returns(Promise.resolve(data));


        expect(filterByType('apps')).to.eventually.deep.equal(data);

        apiMock.restore();
        apiMock.verify();
    });

    it('should filter by the given subject', () => {
        let apiMock = sinon.mock(Api);
        apiMock.expects('getAPI').withArgs('https://raw.githubusercontent.com/balaswecha/pencilbox-2/master/app/json/all.json').returns(Promise.resolve(data));

        const dataWithSubject = [{name: 'Energy stake Park', type: 'apps', subject: 'chemistry'}];

        expect(filterBySubject('chemistry')).to.eventually.deep.equal(dataWithSubject);

        apiMock.restore();
        apiMock.verify();
    });

    it('should filter by the given title and subject', () => {
        let apiMock = sinon.mock(Api);
        apiMock.expects('getAPI').withArgs('https://raw.githubusercontent.com/balaswecha/pencilbox-2/master/app/json/all.json').returns(Promise.resolve(data));

        const dataWithSubject = [{name: 'Rutherford Scattering', type: 'apps', subject: 'physics'},
            {name: 'The Ramp', type: 'apps', subject: 'physics'},
            {name: 'Pulleys', subject: 'physics', type: 'apps'},
            {name: 'Masses & Springs', type: 'apps', subject: 'physics'}];

        expect(filterByTypeAndSubject('apps', 'physics')).to.eventually.deep.equal(dataWithSubject);

        apiMock.restore();
        apiMock.verify();
    });

});