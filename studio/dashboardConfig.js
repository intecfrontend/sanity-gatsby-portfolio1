export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5ffb2252dfa7f26a5b2504d0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-1-studio-fyxjnfec',
                  apiId: '4451bde5-4f80-4258-9a36-1bc04c29aea7'
                },
                {
                  buildHookId: '5ffb2253e12eb161ecd163f8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-1-web-nurn6wpu',
                  apiId: '85647d3c-4f7f-4924-b08d-ef38aaa08989'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/intecfrontend/sanity-gatsby-portfolio1',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-1-web-nurn6wpu.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
