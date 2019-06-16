import React from 'react';
import { shallow } from 'enzyme';
import { Feed } from 'components/feed/Feed';

describe('has a container and maps each recipe passed as props', () => {
  const recipes = [
    {description: 'parfait'},
    {description: 'pancakes'}
  ]
  const wrapper = shallow(<Feed recipes={recipes}/>);

  it('Contains a container', () => {
    expect(FindByTestAttr(wrapper, 'Container for images').length).toEqual(1);
  });

  it('maps each recipe', () => {
    const recipeNodes = FindByTestAttr(wrapper, 'recipe');
    expect(recipeNodes.length).toBe(recipes.length);
  });
});
