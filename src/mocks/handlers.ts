import { rest, setupWorker } from 'msw'
import { mockedEmployees } from '../data/employees'

const worker = setupWorker(
  rest.post('api/set-employees', (req, res, ctx) => {
    // Persist data in the session store
    sessionStorage.setItem('employees', JSON.stringify(req.body))

    return res(
      // Respond with a 200 status code
      ctx.json(JSON.parse(sessionStorage.getItem('employees')))
    )
  }),

  rest.get('api/get-employees', (req, res, ctx) => {
    // Check if data is in this session store
    const employees = sessionStorage.getItem('employees')

    if (employees !== null) {
      // If data, return a mocked user details
      console.log(JSON.parse(employees))
      return res(
        ctx.json({
          employeeList: JSON.parse(employees),
        })
      )
    } else {
      return res(
        ctx.json({
          employeeList: mockedEmployees,
        })
      )
    }
  })
)

worker.start()
