# E-commerce

### Description:

A frontend Online Store with the theme of technology store. Powered by Next.js for functionalities and Styled-components for styling.

Deploy: https://e-commerce-davitpra.vercel.app/

To run the project on local:

1. npm i
2. npm run dev

### Features:

- Display catalog of items by categories.
- Display individual item details bases on selection.
- Add/ remove items to cart
- Calculate order totals (subtotal, tax, shipping, total)
- Display the current Day / Time to screen.
- Populated with 15 store items objects with different categories, quantities, etc.
- Validate there is enough quantity on hand for an item when adding it to the card.
- Validate the form will be filled for shipping.

**Structure of the project**

- **public**: All images for the project
  - **images**: Images for the products.
- **src**: The source field.
  - **app**: page folder (each web page has his own style file next to them)
  - **components**: different components folders (each component has his own style file next to them)
  - **context**: cart page logic.
  - **lib**: it has the primary color for the theme
  - **provider**: it has a call to react-toaster, a library to show errors and success messages.
  - **store**: inside it has all the store data in a json file.
