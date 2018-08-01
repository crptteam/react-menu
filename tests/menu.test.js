import React from 'react';
import Menu from '../src/';

describe('Menu', () => {
    it('Should renders if active', () => {
        const sidebar = shallow(<Sidebar active={true} onClose={e => (undefined)}/>);

        expect(sidebar).toMatchSnapshot();
    });

    it('Should not renders if not active', () => {
        const sidebar = shallow(<Sidebar active={false} onClose={e => (undefined)}/>);

        expect(sidebar).toMatchSnapshot();
    });
});