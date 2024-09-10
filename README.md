<div align="center">
  <h1>Ravn Frontend Challenge</h1>
  <p>This project is a task managament app created from scratch as a submission for the code challenge</p>

</div>

## 🎞️ Project Description

This project demonstrates how to create a task managament app with the following features.

- Show tasks in a grid view divided by columns
- Filter tasks by name
- Create a task
- Edit a task
- Remove a task

You can visit the current project https://ravn-challenge.vercel.app/

## ⬇️ How to get started

- `git clone git@github.com:Chasty/ravn-challenge.git`
- `cd ravn-challenge`
- `bun`

## 🏃‍♀️ Running the app

- `bun dev`

## 📱 Preview

https://github.com/user-attachments/assets/cb82ef0d-d798-4aa2-82c5-c0c4e0fb702a

## 💻 Tech Stack

- React
  - Decided to use this popular framework for creating reusable components.
  - Using react hooks an custom hooks for handling asyncronous logic and sharing reusable logic across components.
- Next V14
  - For routing easily with a folder structure navigation (`file-system based router`) under the `/app` folder
  - It also has some predefined 404 pages
  - It optimize image rendering
- Tailwind
  - Using tailiwing because of the css-utilities it offers.
  - It is also fully customizable, you can introduce new themes, colors, typography from your own design system.
- Shadcn
  - For complex functionatiles and components, there is no need to reinvent the weel.
  - It uses tailwind and radix under the hook.
  - I'm using Dialog, PopOver, Calendar, Skeleton.
- Graphql
  - Using graphql for interacting with the api and generating the schema and typescript typings from a graphql server using `graphql-codegen`
- Apollo Client
  - Using this to connect the api from the client and using their awesome hooks to work with mutations and queries
- date-fns
  - For date formatting and date operations
- Typescript
  - Type-safe language to mitigate errors easily and find bugs earlier.

## 📁 Project Structure

- [`app`](./app) - The navigation structure with three routes defined
  - `app/page` matches the `/` route
  - `app/projects` matches the `/projects` route
  - `app/settings` matches the `/settings` route
- [`components`](./components) - Our reusable components based on our design system
- [`components/ui`](./components/ui) - Shadcn ui components to be used.
- [`assets`](./assets) - All assets like images and icons from design system
- [`hooks`](./hooks) - Exposed reusable hooks
- [`models`](./models) - Models according to what the api services respond.
- [`graphql`](./graphql) - We generate the typescript files according to our codegen.yml config and also we expose the mutations and queries needed on the app.
- [`lib`](./lib) - Instance generation of Apollo and Utility functions

## NOTES

Very important note.

I'm using shadcn calendar component for selecting due date.

There is an issue that I should report on shadcn's repository, because calendars on a PopOver does not work as expected.

A workaround to be able to show the due date calendar is by having another popover open and then select the due date.

![calendarissue](https://github.com/user-attachments/assets/a1db8da7-328a-4144-94be-8a13eb08ad93)

## FUTURE CONSIDERATIONS

- Make the website completely responsive.
- Fix the calendar issue.
- Add `My Task` section ui components. I have no time to complete this part, sorry about it :()
