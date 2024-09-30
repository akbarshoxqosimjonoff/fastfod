<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import App from './App'

describe('<App />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<App />)
  })
})
=======
=======
>>>>>>> f679e8f
import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
  },
})
<<<<<<< HEAD
>>>>>>> b46430b (dd)
=======
>>>>>>> f679e8f
