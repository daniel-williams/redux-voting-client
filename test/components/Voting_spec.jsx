import React from 'react/addons';
import Voting from '../../src/components/Voting';
import { expect } from 'chai';

const { renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate } = React.addons.TestUtils;
const pair = ['Trainspotting', '28 Days Later'];

describe('voting', () => {
    it('renders a pair of buttons', () => {
        const component = renderIntoDocument(
            <Voting pair={pair} />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

        expect(buttons.length).to.equal(2);
        expect(buttons[0].textContent).to.equal('Trainspotting');
        expect(buttons[1].textContent).to.equal('28 Days Later');
    });

    it('invokes callback when button is clicked', () => {
        let votedWith;
        const vote = (entry) => votedWith = entry;
        const component = renderIntoDocument(
            <Voting pair={pair} vote={vote} />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
        Simulate.click(buttons[0]);

        expect(votedWith).to.equal('Trainspotting');
    });
})
