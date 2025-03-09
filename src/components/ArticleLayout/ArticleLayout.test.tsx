import { render, screen } from '@testing-library/react'
import ArticleLayout from '.'
import '@testing-library/jest-dom'
import PostMetaData from '@/types/postMetaData'

const meta: PostMetaData = {
  title: 'Hello World',
  slug: 'hello-world',
  date: '2023-05-01T00:00:00-03:00',
  description: 'Short description',
  tags: [],
}
const children = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'

// Queries

const getTitle = () => screen.getByText(meta.title)
const getDate = () => screen.getByText('May 1, 2023')
const getContent = () => screen.getByText(children)

// Tests

describe('ArticleLayout', () => {
  it('renders without errors', () => {
    render(<ArticleLayout meta={meta}>{children}</ArticleLayout>)

    expect(getTitle()).toBeInTheDocument()
    expect(getDate()).toBeInTheDocument()
    expect(getContent()).toBeInTheDocument()
  })
})
