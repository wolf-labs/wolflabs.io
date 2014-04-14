## Development

In the root folder, run `gulp` to build project.

To run a local server, have live reload and live sass compilation, run `gulp watch`

To run unit tests, run `gulp test`

## Deployment

To deploy, run:

`gulp build`

Add & commit your changes. Then:

`git subtree push --prefix dist ec2 production`