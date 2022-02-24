discribe('Form Schema', ()=> {
    beforeEach(() =>{
        cy.visit('http://localhost:3000')
    })
})

const textInput = () => cy.get('input[name=text')
const emailInput = () => cy.get('input[name=email]')
const passwordInput = () => cy.get('input[name=password]')

it('all the elements are showing', () => {
    textInput().should('exist')
    emailInput().should('exist')
    passwordInput().should('exist')
})

discribe('filling out info', () =>{
    it('can navigate to site', () => {
        cy.url().should('include', 'localhost')
    })
    it('can type inputs', () => {
        textInput()
            .should('have.value', '')
            .type('')
            .should('have.value', '')

        emailInput()
            .should('have.value', '')
            .type('')
            .should('have.value', '')
        passwordInput()
            .should('have.value')
            .type('')
            .should('have.value', '')
    })
    
})