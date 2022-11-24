// libraries
import { render, getByText } from '@utils/testUtils';
import { fireEvent } from '@testing-library/react';

// components
import FormComponent from '../index';
import '@testing-library/jest-dom';

// theme

describe('Component [Form] should match snapshot', () => {
  test('It should match snapshot', () => {
    const { container } = render(
      <FormComponent
        errorName={false}
        errorDOB={false}
        errorPhone={false}
        errorMember={false}
        errorEmail={false}
        formName=''
      />,
    );

    expect(container).toMatchSnapshot();
  });

  // ADD XU LY THEM TEST CASE VE CAC ,LGKC TEST
  test('Component [Form] should render correctly', () => {
    const { container } = render(
      <FormComponent
        errorName={false}
        errorDOB={false}
        errorPhone={false}
        errorMember={false}
        errorEmail={false}
        formName='Add Form'
      />,
    );
    const getTitle = getByText(container, 'Add Form');
    expect(getTitle).toBeInTheDocument();
  });

  test('Component [Form] should be change value input when user change text', () => {
    const { container } = render(<FormComponent />);

    const input = container.getElementsByTagName('name')[0] as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'My Name' } });

    expect(input.value).toBe('My Name');
  });
});
