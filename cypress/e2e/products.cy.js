describe('HomePage', () => {
  beforeEach(() => {
    cy.visit('/'); // Adjust the URL path if necessary
  });

  it('should display the category options', () => {
    // Target the Segmented component's category items
    cy.get('.ant-segmented-item').should('have.length.greaterThan', 0); // Ensure categories are loaded
  });

  it('should display the product cards', () => {
    // Ensure products are loaded and displayed in cards
    cy.get('.bg-white.rounded-lg.shadow-lg.overflow-hidden').should('have.length.greaterThan', 0);
  });

  it('should open the modal when clicking on a product card', () => {
    // Click on the first product card and check if the modal opens
    cy.get('.bg-white.rounded-lg.shadow-lg.overflow-hidden').first().click();

    // Check if the modal appears
    cy.get('.ant-modal').should('be.visible');
  });

  it('should add a product to the cart', () => {
    // Open the modal by clicking on the first product card
    cy.get('.bg-white.rounded-lg.shadow-lg.overflow-hidden').first().click();

    // Ensure the Add button is clickable
    cy.get('.ant-modal .ant-btn').contains('Добавить').click();

    // Check if the item was added to the cart
    cy.get('.cart-item').should('have.length.greaterThan', 0); // Adjust '.cart-item' selector as per your cart structure
  });

  it('should change the selected category and display products', () => {
    // Change the category by selecting a different option
    cy.get('.ant-segmented-item').eq(1).click(); // Select the second category (index starts at 0)

    // Ensure that products are updated according to the new category
    cy.get('.bg-white.rounded-lg.shadow-lg.overflow-hidden').should('have.length.greaterThan', 0);
  });

  it('should display cart items after adding products', () => {
    // Click on the first product to open the modal
    cy.get('.bg-white.rounded-lg.shadow-lg.overflow-hidden').first().click();

    // Click "Добавить" button to add the product to the cart
    cy.get('.ant-modal .ant-btn').contains('Добавить').click();

    // Check if the cart items are updated
    cy.get('.cart-item').should('exist');
  });
});
