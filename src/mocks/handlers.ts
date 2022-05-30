import { rest } from 'msw'
import { mockedEmployees } from './mocks'

export const handlers = [
  rest.post('/set-employees', (req, res, ctx) => {
    // Persist data in the session store
    if (mockedEmployees) {
      sessionStorage.setItem('employees', JSON.stringify(mockedEmployees))

      return res(
        // Respond with a 200 status code
        ctx.status(200, 'post request successful')
      )
    } else {
      return res(
        // Respond with a 404 status code
        ctx.status(404, 'could not found data to store in session storage')
      )
    }
  }),

  rest.get('/get-employees', (req, res, ctx) => {
    // Check if data is in this session store
    const employees = sessionStorage.getItem('employees')

    if (employees !== null) {
      // If data, return a mocked user details
      return res(
        ctx.status(200, 'get request successful'),
        ctx.json({
          employeeList: JSON.parse(employees),
        })
      )
    } else {
      return res(
        // Respond with a 404 status code
        ctx.status(404, 'could not found data from session storage')
      )
    }
  }),
]
