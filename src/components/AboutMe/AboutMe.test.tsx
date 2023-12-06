import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import AboutMe from '.'

// Queries

const getFirstLine = () => screen.getByText(/^Hi, my name is Rafael but/i)
const getSecondLine = () => screen.getByText(/^I write about/i)
const getThreadsLink = () => screen.getByLabelText('Threads').parentElement
const getTwitterLink = () => screen.getByLabelText('Twitter').parentElement
const getGithubLink = () => screen.getByLabelText('Github').parentElement
const getLinkedinLink = () => screen.getByLabelText('Linkedin').parentElement
const getMastodonLink = () => screen.getByLabelText('Mastodon').parentElement

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
    expect(getThreadsLink()).toHaveAttribute(
      'href',
      'https://threads.net/@rbika'
    )
    expect(getTwitterLink()).toHaveAttribute(
      'href',
      'https://twitter.com/rbika'
    )
    expect(getMastodonLink()).toHaveAttribute(
      'href',
      'https://mastodon.social/@rbika'
    )
    expect(getGithubLink()).toHaveAttribute('href', 'https://github.com/rbika')
    expect(getLinkedinLink()).toHaveAttribute(
      'href',
      'https://linkedin.com/in/rbika'
    )
  })
})
