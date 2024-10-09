import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import AboutMe from '.'

// Queries

const getFirstLine = () => screen.getByText(/^Hi, my name is Rafael but/i)
const getSecondLine = () => screen.getByText(/^I write about/i)
const getXTwitterLink = () => screen.getByLabelText('X / Twitter').parentElement
const getMastodonLink = () => screen.getByLabelText('Mastodon').parentElement
const getGithubLink = () => screen.getByLabelText('Github').parentElement

// Tests

describe('AboutMe', () => {
  it('renders without errors', () => {
    render(<AboutMe />)

    expect(getFirstLine()).toHaveTextContent(
      'Hi, my name is Rafael but you can call me Bika/Bikas.'
    )
    expect(getSecondLine()).toHaveTextContent(
      'I write about front-end and web development.'
    )
    expect(getXTwitterLink()).toHaveAttribute('href', 'https://x.com/rbika')

    expect(getMastodonLink()).toHaveAttribute(
      'href',
      'https://mastodon.social/@rbika'
    )
    expect(getGithubLink()).toHaveAttribute('href', 'https://github.com/rbika')
  })
})
