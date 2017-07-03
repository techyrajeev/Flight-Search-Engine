import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Header from '../../src/components/header';

describe("<Header />", () => {
    it("Header contains navbar", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.type()).to.equal('header');
    });

    it("Header contains brand icon", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find(".material-icons").text()).to.equal('flight_takeoff');
    });

    it("Header renders icons and brand markup correctly", () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find("h2").html()).to.equal('<h2> <i class="material-icons md-36">flight_takeoff</i> Flight Search Engine </h2>');
    });

});
