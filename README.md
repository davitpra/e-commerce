# E-commerse

### Description:

A frontend Online Store with the team of techonology store. Powered by Next.js for funtionalities and Styled-components for styling.

Deploy: https://e-commerce-davitpra.vercel.app/

### Features:

- Display catalog of items by categories.
- Display individual item details bases on seleccion.
- Add/ remove items to cart
- Calculate order totals (subtotal, tax, shipping, total)
- Display the current Day / Time to screen.
- Populated with 15 store items objects with differents categories, quantities, etc.
- Validate there is enough quantity on hand for an item when adding it to the card.
- Validate the form will be filled for shipping.

**Structure of the proyect**

- **public **: All images for the proyect
- **images**: Images for the products.
- **src**: The source field.
- **app**: page folder (each web page has his own style file next to them)
- **components**: differents components fiels (each component has his own style file next to them)
- **context**: cart page logic.
- **lib**: it has the primary color for the theme
- **provider**: it has a call to react-toaster, a libery to show errors and succes messages.
- **store**: inside it has all the store data in a json file.
