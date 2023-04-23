import { render, screen } from '@testing-library/react'
import AboutMe from '../../components/AboutMe'
import '@testing-library/jest-dom'

// Queries

const getProfileImage = () => screen.getByAltText('profile')
const getFirstLine = () => screen.getByText(/Hey, my name is Rafael but/i)
const getSecondLine = () => screen.getByText(/I'm a frontend developer/i)
const getInterLink = () => screen.getByText('Inter')
const getEmailLink = () => screen.getByText('Email').parentElement
const getTwitterLink = () => screen.getByText('Twitter').parentElement
const getGithubLink = () => screen.getByText('Github').parentElement
const getLinkedinLink = () => screen.getByText('Linkedin').parentElement

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
  })
})
