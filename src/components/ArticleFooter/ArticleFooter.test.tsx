import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import ArticleFooter from '.'

// Queries

const getProfileImage = () => screen.getByAltText('profile')
const getText = () => screen.getByText('Written by Rafael Bika(s).')
const getXTwitterLink = () => screen.getByLabelText('X / Twitter').parentElement
const getBlueskyLink = () => screen.getByLabelText('Bluesky').parentElement
const getGithubLink = () => screen.getByLabelText('Github').parentElement
const getBackToTopLink = () => screen.getByText('↑ Back to top')

// Tests

describe('ArticleFooter', () => {
  it('renders without errors', () => {
    render(<ArticleFooter />)

    expect(getProfileImage()).toBeInTheDocument()
    expect(getText()).toBeInTheDocument()
    expect(getXTwitterLink()).toHaveAttribute('href', 'https://x.com/rbika')
    expect(getBlueskyLink()).toHaveAttribute(
      'href',
      'https://bsky.app/profile/rbika.bsky.social'
    )
    expect(getGithubLink()).toHaveAttribute('href', 'https://github.com/rbika')
    expect(getBackToTopLink()).toBeInTheDocument()
  })
})
