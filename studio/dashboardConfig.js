export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6099645c27182e00cc29e366',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-9mokap7d',
                  apiId: '67bcd574-68a1-42bd-8492-86ffb962e7f3'
                },
                {
                  buildHookId: '6099645ca1f394008cd5074a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-gkey3eg4',
                  apiId: '41e805c9-e840-48b5-bf33-305800abc882'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pappasG/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-gkey3eg4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
