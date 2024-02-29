import { render } from '@testing-library/react'
import { RichText } from '../RichText'
import React from 'react'

test('renders text content', () => {
  const { container } = render(
    <RichText htmlString="<h1>header</h1><p>paragraph</p>" />,
  )
  expect(container.innerHTML).toContain('header')
  expect(container.innerHTML).toContain('paragraph')
})

test('strips script tag', () => {
  const { container } = render(
    <RichText htmlString="<script>angry javascript</script><h1>header</h1><p>paragraph</p>" />,
  )
  expect(container.innerHTML).toContain('paragraph')
  expect(container.innerHTML).not.toContain('angry javascript')
})

test('strips inline scripts', () => {
  const { container } = render(
    <RichText htmlString="<p><a href='javascript:alert(0)'>sanitised string with dangerous javascript</a></p>" />,
  )
  expect(container.innerHTML).toContain('dangerous javascript')
  expect(container.innerHTML).not.toContain('javascript:alert(0)')
})
