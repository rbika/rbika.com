module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "Enter component's name:",
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}.tsx',
        templateFile: '.plop-templates/component.tsx.hbs',
      },
    ],
  })

  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: "Enter page's name:",
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/pages/{{lowerCase name}}.tsx',
        templateFile: '.plop-templates/page.tsx.hbs',
      },
    ],
  })
}
