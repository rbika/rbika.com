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
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: '.plop-templates/component/component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.tsx',
        templateFile: '.plop-templates/component/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: '.plop-templates/component/component.test.tsx.hbs',
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
