# Do-you-even-lift

First play with the Ember framework. Do you even lift?

Check out public/data.json to see the list of animals that power this. Scraped them off of [here](thewebsiteofeverything.com/animals/mammals/adult-weight.html) with the following script:

```python
from bs4 import BeautifulSoup
import urllib2, json

page = urllib2.urlopen('http://thewebsiteofeverything.com/animals/mammals/adult-weight.html').read()
soup = BeautifulSoup(page)

data = []
for i, node in enumerate(soup.select("tr")):
    if(i > 5):
        mammal = node.find("a").string
        weight = int(node.findAll("td")[1].string.replace(",",""))
        data.append({"mammal": mammal, "weight": weight})

with open('data.json', 'w') as outfile:
    json.dump(data, outfile)
```

This is purely to learn Ember and shipping an MVP, so it'll always be a public work in progress.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
