import React from 'react'
import { render } from '@testing-library/react'
import App from '../components/App'

test('renders Generate Button', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/Gerar/i)
  expect(linkElement).toBeInTheDocument()
})
