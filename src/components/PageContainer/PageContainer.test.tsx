import { render, screen } from '@testing-library/react'
import PageContainer from '.'
import '@testing-library/jest-dom'

// Queries

const getContent = () => screen.getByText('children')

// Tests

describe('PageContainer', () => {
  it('renders without errors', () => {
    render(<PageContainer>children</PageContainer>)

    expect(getContent()).toBeInTheDocument()
  })
})
