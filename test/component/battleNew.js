const BattleNew = require('../../../src/components/battleNew');
const React = require('react/addons');

describe('BattleNew component', () => {

  beforeEach(function() {
    let { TestUtils } React.addons;

    this.component TestUtils.renderIntoDocument(
      < BattleNew />
    );

    this.renderedDOM = () => React.findDOMNode(this.component);
  });

  it("renders an h1", function () {
    let renderedHeading = this.renderedDOM().querySelectorAll("h1");

    expect(this.renderedDOM().children.length).toEqual(1)
    expect(renderedHeading.length).toEqual(1);
    expect(renderedHeading[0].textContent).toEqual("Battle");
  });
});
