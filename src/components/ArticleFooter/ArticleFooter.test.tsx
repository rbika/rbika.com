import { render, screen, waitFor } from '@testing-library/react'
import ArticleFooter from '.'
import '@testing-library/jest-dom'

// Queries

const getProfileImage = () => screen.getByAltText('profile')
const getText = () => screen.getByText('Written by Rafael Bika(s).')
const getEmailLink = () => screen.getByLabelText('Email').parentElement
const getTwitterLink = () => screen.getByLabelText('Twitter').parentElement
const getGithubLink = () => screen.getByLabelText('Github').parentElement
const getLinkedinLink = () => screen.getByLabelText('Linkedin').parentElement
const getBackToTopLink = () => screen.getByText('↑ Back to top')

// Tests

describe('ArticleFooter', () => {
  it('renders without errors', () => {
    render(<ArticleFooter />)

    expect(getProfileImage()).toBeInTheDocument()
    expect(getText()).toBeInTheDocument()
    expect(getEmailLink()).toHaveAttribute('href', 'mailto:rbikadev@gmail.com')
    expect(getTwitterLink()).toHaveAttribute(
      'href',
      'https://twitter.com/rbika'
    )
    expect(getGithubLink()).toHaveAttribute('href', 'https://github.com/rbika')
    expect(getLinkedinLink()).toHaveAttribute(
      'href',
      'https://linkedin.com/in/rbika'
    )
    expect(getBackToTopLink()).toBeInTheDocument()
  })
})
