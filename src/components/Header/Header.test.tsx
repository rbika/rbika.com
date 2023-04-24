import { render, screen } from '@testing-library/react'
import Header from '.'
import '@testing-library/jest-dom'
import * as router from 'next/router'
import { NextRouter } from 'next/router'

// Mocks

const useRouter = jest.spyOn(router, 'useRouter')
useRouter.mockImplementation(() => ({ route: '/' } as NextRouter))

// Queries

const getLogo = () => screen.getByText('R Bika(s)')
const getHomeLink = () => screen.getByText('Home')
const getUsesLink = () => screen.getByText('Uses')

// Tests

describe('Header', () => {
  it('renders without errors', () => {
    render(<Header />)

    expect(getLogo()).toBeInTheDocument()
    expect(getHomeLink()).toHaveAttribute('href', '/')
    expect(getUsesLink()).toHaveAttribute('href', '/uses')
  })
})
