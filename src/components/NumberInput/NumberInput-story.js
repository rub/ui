import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';
import NumberInput from '../NumberInput';
import NumberInputSkeleton from '../NumberInput/NumberInput.Skeleton';

const props = () => ({
  className: 'some-class',
  id: 'tj-input',
  labelText: text('Label text (labelText)', 'Number Input label'),
  hideLabel: boolean('No label (hideLabel)', false),
  min: number('Minimum value (min)', 0),
  max: number('Maximum value (max)', 100),
  value: number('Value (value)', 50),
  step: number('Step of up/down arrow (step)', 10),
  disabled: boolean('Disabled (disabled)', false),
  invalid: boolean('Show form validation UI (invalid)', false),
  invalidText: text(
    'Form validation UI content (invalidText)',
    'Number is not valid'
  ),
  helperText: text('Helper text (helperText)', 'Optional helper text.'),
  light: boolean('Light variant (light)', false),
  onChange: action('onChange'),
  onClick: action('onClick'),
  allowEmpty: boolean('Allow empty value (allowEmpty)', false),
});

storiesOf('NumberInput', module)
  .addDecorator(withKnobs)
  .add('Default', () => <NumberInput {...props()} />, {
    info: {
      text: `
            Number inputs are similar to text fields, but contain controls used to increase or decrease an incremental value.
            The Number Input component can be passed a starting value, a min, a max, and the step.
          `,
    },
  })
  .add('skeleton', () => <NumberInputSkeleton />, {
    info: {
      text: `
            Placeholder skeleton state to use when content is loading.
          `,
    },
  });
