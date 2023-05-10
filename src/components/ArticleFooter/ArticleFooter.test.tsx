import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import ArticleFooter from '.'

// Queries

const getProfileImage = () => screen.getByAltText('profile')
const getText = () => screen.getByText('Written by Rafael Bika(s).')
const getMastodonLink = () => screen.getByLabelText('Mastodon').parentElement
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
    expect(getMastodonLink()).toHaveAttribute(
      'href',
      'https://mastodon.social/@rbika'
    )
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
