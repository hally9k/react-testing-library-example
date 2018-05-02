import * as React from 'react'
import { render } from 'react-testing-library'

describe('Input > Text', () => {
	it('should render changes', () => {
		const mockOnChange = jest.fn()
		const { getByTestId } = render(
			<input type="text" value="hello" onChange={mockOnChange} data-testid="my-input" />
		)

		expect(getByTestId('my-input')).toMatchSnapshot()

		getByTestId('my-input').value = 'yo!'

		expect(getByTestId('my-input')).toMatchSnapshot()
		expect(mockOnChange).toBeCalled()
	})
})
