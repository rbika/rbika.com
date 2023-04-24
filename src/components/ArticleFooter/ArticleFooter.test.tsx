import { render, screen } from '@testing-library/react'
import ArticleFooter from '.'
import '@testing-library/jest-dom'

// Queries

const getContent = () => screen.getByText('ArticleFooter')

// Tests

describe.skip('ArticleFooter', () => {
  it('renders without errors', () => {
    render(<ArticleFooter />)

    expect(getContent()).toBeInTheDocument()
  })
})
