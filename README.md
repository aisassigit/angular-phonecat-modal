# AngularJS Phone Catalog Tutorial Application + UI/UX updates

## Overview
This is the original AngularJS tutorial application found here:
http://docs.angularjs.org/tutorial/

This cloned and exported version is intended for prototyping new features into the app such as:
- Modal dialog for phone details
- Better app routing to reflect app state
- Back navigation for full details page
- Add breadcrumb navigation

## Prerequisites

### Git
- A good place to learn about setting up git is [here][git-github]
- Git [home][git-home] (download, documentation)

### Node.js
- Generic [installation instructions][node-generic].
- Mac DMG [here][node-mac]
- Windows download from [here][node-windows]. (You will also need [7 Zip] to unzip the node archive)
  (and don't forget to add `node.exe` to  your executable path)

### Bower
http://bower.io/

### GruntJS
http://gruntjs.com/

## Workings of the application

- The application filesystem layout structure is based on the [angular-seed] project.
- There is no backend (no server) for this application. Instead we fake the XHRs by fetching
  static json files.
- Read the Development section at the end to familiarize yourself with running and developing
  an angular application.


## Contact

For more information on AngularJS please check out http://angularjs.org/

[7 Zip]: http://www.7-zip.org/
[angular-seed]: https://github.com/angular/angular-seed
[DI]: http://docs.angularjs.org/#!guide.di
[directive]: http://docs.angularjs.org/#!angular.directive
[$filter]: http://docs.angularjs.org/#!angular.Array.filter
[git-home]: http://git-scm.com
[git-github]: http://help.github.com/set-up-git-redirect
[ng:repeat]: http://docs.angularjs.org/#!angular.widget.@ng:repeat
[ng:view]: http://docs.angularjs.org/#!angular.widget.ng:view
[node-mac]: http://code.google.com/p/rudix/downloads/detail?name=node-0.4.0-0.dmg&can=2&q=
[node-windows]: http://node-js.prcn.co.cc/
[node-generic]: https://github.com/joyent/node/wiki/Installation
[java]: http://www.java.com
[$resource]: http://docs.angularjs.org/#!angular.service.$resource
[$rouet]: http://docs.angularjs.org/#!angular.service.$route
[service]: http://docs.angularjs.org/#!angular.service
[$xhr]: http://docs.angularjs.org/#!angular.service.$xhr
