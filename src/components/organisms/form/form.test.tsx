import React from 'react'
import { render } from '@testing-library/react'
import '../../../setupTest'
import { Form } from './form'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import configureStore from '../../../features/store'
import { PersistGate } from 'redux-persist/integration/react'
const { store, persistor } = configureStore()

const component = () =>
  render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Form handleStateChange={true} />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  )

it('renders form', () => {
  const { getByText } = component()
  expect(getByText('Date of Birth')).toBeInTheDocument()
})

it('changes input value', async () => {
  const { getByTestId, getByRole } = component()
  const input = getByTestId('first-name')
  await userEvent.type(input, 'Namvar')
  expect(getByRole('textbox', { name: 'first-name' })).toHaveValue('Namvar')
})
