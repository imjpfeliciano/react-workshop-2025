# React Workshop 2025'

## Requirements:

- nvm (windows): https://github.com/coreybutler/nvm-windows

## Setup

1. nvm install
2. nvm use
3. npm install
4. npm run dev (starts application)
5. npm run storbook (launch components library using storybook)

## Module 1: Introduction to React and Vite

### Challenge:

- Create the base layout for a Pokemon web platform using reusable components.
- Structure the app with `header`, `sidebar` and `main content area`.

#### Components to build:

- ✅ `Header` - Displays the platform title and navigation menu
- ✅ `Sidebar` - Contains category buttons like "Pokedex", "Abilities", and "Items"
- ✅ `MainLayout` - A wrapper that arrenges the header, sidebar, and content area

#### Bonus Challenge:

- Make the layout responsive using Tailwind CSS

## Module 2: JSX and Components

### Challenge:

- Create reusable UI components for the Pokemon platform, focusing on reusability and composition.

#### Components to build:

- ✅ `Card` - A flexible component that can display Pokemon, abilities, or items
  - Pokemon card must have these elements: Id, Name, ImageUrl, Type
- ✅ `Button` - A generic button component that can be reused across the platform (variants: primary and secondary)
- ✅ `Badge` - A small UI component to display Pokemon types (e.g., Fire, Water)

#### Bonus Challenge:

- Implement a `Grid` component that organizes Pokemon cards dinamically

## Module 3: Component-Driven Development with Storybook

### Challenge:

- Document all reusable components in Storybook to visualize their variations.

#### Storybook stories to create:

- ✅ `Card` - Show different content (Pokemon, abilities, items)
- ✅ `Button` - Display primary, secondary, and disabled status
- ✅ `Badge` - Showcase different Pokemon type colors

#### Bonus challenge:

- Use storybook controls to toggle button sizes, colors, and labels

## Module 4: State management with hooks

### Bonus challenge:

- Create a custom hook `useModal` to keep track of the status of the modal, if the user clicks on
  a pokemon card, then display the details on the modal component

## Module 5: Handling events and forms

### Bonus challenge:

- Create a search bar component to filter the list of pokemons based on their names

## Module 6: React router and Navigation

- Challenge: Create router component for the following sections
  - `/` - Displays the list of all pokemons
  - `/pokemon/:id` - Display information about the pokemon with the specified id
    - If the pokemon with `:id` is not found, redirect to `404`
  - `/items` - Display all available items (use `api/items.ts` list)
  - `/items/:id` - Display information about the specified item
    - If the item with `:id` is not found, redirect to `404`
  - `/404` - Show not found page

### Bonus challenge

- Set the items on the sidebar active according to the page selected
  - pokemon is active is the route is `/` or `/pokemon/:id`
  - items is active is the route is `/items` or `/items/:id`

## Module 7: Fetching Data from APIs

- Challenge: Fetch real pokemon data and display in the `/` pokemons page, if the user clicks on any pokemon, then display more information about the selected pokemon

## Bonus challenge

- Handle loading states
- Optimize queries using TanStack Query for efficient data fetching and caching
