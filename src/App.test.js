import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import App from './App'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

test('renders without crashing', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  )
  const title = screen.getByText(/Write a Review/i)
  expect(title).toBeInTheDocument()
})

test('home work as expected', () => {
  const { container } = render (
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  )
  const businessContainer = container.querySelector('.businesses__container')
  expect(businessContainer).toBeVisible()
})

test('search form could be used', async () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  )
  const input = await screen.findByPlaceholderText('Los Angeles, CA')
  const button = await screen.findByRole('button')
  
  fireEvent.change(input, { target: { value: 'Chile' }})
  fireEvent.click(button)
})