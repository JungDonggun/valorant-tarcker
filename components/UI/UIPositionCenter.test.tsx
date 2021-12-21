import React from 'react';
import UIPositionCenter from './UIPositionCenter';
import { render } from '@testing-library/react';

it('should render uiPositionCenter', () => {
  render(<UIPositionCenter>
    <div>
      <h2>test</h2>
    </div>
  </UIPositionCenter>);

});

