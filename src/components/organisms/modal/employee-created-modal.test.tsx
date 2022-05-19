import React from 'react'
import { EmployeeCreatedModal } from './employee-created-modal'
import { render, screen } from '@testing-library/react'
import '../../../setupTest'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import configureStore from '../../../features/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Form } from '../form/form'
const { store, persistor } = configureStore()


it('should render modal', () => {
  const modal = () => render(<EmployeeCreatedModal />)
  const { getByText } = modal()
  const element = getByText('Employee created')
  expect(element).toBeInTheDocument()
})


it('should close on close click', () => {
  const modal = () => render(<EmployeeCreatedModal handleStateChange={true} />)
  const { getByText, getByTestId } = modal()
  const user = userEvent.setup()
  const element = getByText('Employee created')
  expect(element).toBeInTheDocument()
  const closeBtn = getByTestId('close-modal')
  user.click(closeBtn)
  expect(closeBtn).not.toBeInTheDocument()
})

const component = () =>
  render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Form handleStateChange={false}/>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  )

it('opens modal when form is submitted', async () => {
  const { getByTestId } = component()
  const user = userEvent.setup()
  const form = getByTestId('form')
  const firstName = getByTestId('first-name')
  const lastName = getByTestId('last-name')
  const street = getByTestId('street')
  const city = getByTestId('city')
  const zipCode = getByTestId('zip-code')
  const submitBtn = getByTestId('submit-btn')
  await user.type(firstName, 'Namvar')
  await user.type(lastName, 'Dugary')
  await user.type(street, 'Tra deng')
  await user.type(city, 'GeorgiaTown')
  await user.type(zipCode, '02050')
  user.click(submitBtn)

  expect(screen.getByText('Employee created')).toBeInTheDocument()
})
