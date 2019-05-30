/* eslint-disable */
import React from 'react';
import styled from 'styled-components/native';
import renderer from 'react-test-renderer';
// import { Theme, Box } from '@artsy/palette';

const App = styled.View``;
const Text = styled.Text`
  color: black;
`;

test('example', () => {
  const tree = renderer
    .create(
      <App>
        <Text>hi</Text>
      </App>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
