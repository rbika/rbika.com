import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import ArticleFooter from '.'

// Queries

const getProfileImage = () => screen.getByAltText('profile')
const getText = () => screen.getByText('Written by Rafael Bika(s).')
const getXTwitterLink = () => screen.getByLabelText('X / Twitter').parentElement
const getMastodonLink = () => screen.getByLabelText('Mastodon').parentElement
const getGithubLink = () => screen.getByLabelText('Github').parentElement
const getBackToTopLink = () => screen.getByText('↑ Back to top')

// Tests

describe('ArticleFooter', () => {
  it('renders without errors', () => {
    render(<ArticleFooter />)

    expect(getProfileImage()).toBeInTheDocument()
    expect(getText()).toBeInTheDocument()
    expect(getXTwitterLink()).toHaveAttribute('href', 'https://x.com/rbika')
    expect(getMastodonLink()).toHaveAttribute(
      'href',
      'https://mastodon.social/@rbika'
    )
    expect(getGithubLink()).toHaveAttribute('href', 'https://github.com/rbika')
    expect(getBackToTopLink()).toBeInTheDocument()
  })
})
