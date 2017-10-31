Paws.com Style Guide
===========

## Requirements
You only need <b>node.js</b> and <b>yarn</b> pre-installed and you’re good to go.

## Setup
Install dependencies
```sh
$ yarn
```

## Development
Run the local webpack-dev-server with livereload and autocompile on [http://localhost:8080/](http://localhost:8080/)
```sh
$ yarn start
```
## Deployment
Build the current application
```sh
$ yarn build
```

## Deployment to Google Cloud Storage

You need `gsutil` to deploy to the Cloud Storage bucket for the styleguide. Skip to *Setting up gsutil* if you don't have this already.

+ `yarn deploy`

TODO: Move to Paws Google Cloud setup - Currently using MedicAnimal account

### Setting up `gsutil` (Mac OS X)

+ Download the correct package from these two pages: https://cloud.google.com/sdk/docs/
+ Assuming the extracted file is in `~/Downloads/`, move the `google-cloud-sdk` folder into your root user folder, so it becomes `~/google-cloud-sdk`. Run `~/google-cloud-sdk/install.sh`. This will set up the general purpose Google Cloud SDK on your device.
+ Then run `~/google-cloud-sdk/bin/gcloud init`, which will prompt you to login in your browser to continue. Choose your MedicAnimal account at this point.
+ When prompted, select the `styleguide-` prefix project from the list of projects.
+ Choose `n` when prompted for Google Compute Engine resources

You should now be set up with `gcloud` and `gsutil`. The last thing to do is to create a configuration file on your machine for this project.

+ If you run `gcloud config configurations list` you should see just `default` or any other projects you have setup. We are going to set up a `styleguide` configuration.
+ Run `gcloud config configurations create styleguide` which will create a `styleguide` config and switch to it.
+ Open `~/.config/gcloud/configurations/config_styleguide` in your preferred text editor and add the following lines:

```
[core]
  account = your.address@medicanimal.com
  project = styleguide-184611
```

If you run `gcloud config configurations list` you should see the new config.

## [webpack](https://webpack.js.org/)
If you're not familiar with webpack, the [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) will serve the static files in your build folder and watch your source files for changes.
When changes are made the bundle will be recompiled. This modified bundle is served from memory at the relative path specified in publicPath.
