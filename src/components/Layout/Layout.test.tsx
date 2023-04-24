import { render, screen } from '@testing-library/react'
import Layout from '.'
import '@testing-library/jest-dom'
import * as router from 'next/router'
import { NextRouter } from 'next/router'

// Mocks

const useRouter = jest.spyOn(router, 'useRouter')
useRouter.mockImplementation(() => ({ route: '/' } as NextRouter))

// Queries

const getHeaderLogo = () => screen.getByText('R Bika(s)')
const getChild = () => screen.getByText('child')

// Tests

describe('Layout', () => {
  it('renders without errors', () => {
    render(<Layout>child</Layout>)

    expect(getHeaderLogo()).toBeInTheDocument()
    expect(getChild()).toBeInTheDocument()
  })
})
