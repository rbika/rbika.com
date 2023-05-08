import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import AboutMe from '.'

// Queries

const getProfileImage = () => screen.getByAltText('profile')
const getFirstLine = () => screen.getByText(/Hey, my name is Rafael but/i)
const getSecondLine = () => screen.getByText(/I'm a frontend developer/i)
const getInterLink = () => screen.getByText('Inter')
const getMastodonLink = () => screen.getByLabelText('Mastodon').parentElement
const getTwitterLink = () => screen.getByLabelText('Twitter').parentElement
const getGithubLink = () => screen.getByLabelText('Github').parentElement
const getLinkedinLink = () => screen.getByLabelText('Linkedin').parentElement

// Tests

describe('AboutMe', () => {
  it('renders without errors', () => {
    render(<AboutMe />)

    expect(getProfileImage()).toBeInTheDocument()
    expect(getFirstLine()).toHaveTextContent(
      'Hey, my name is Rafael but you can call me Bika/Bikas.'
    )
    expect(getSecondLine()).toHaveTextContent(
      "I'm a frontend developer from Brazil currently working at Inter."
    )
    expect(getInterLink()).toHaveAttribute('href', 'https://bancointer.com.br')
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
  })
})
