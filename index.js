const   http = require('http'), //This module provides the Http server functionalities
        path = require('path'), // the path module provides utilities for working with file and directory paths
        express = require('express'), // this module allows this app to respond to HTTP requests, defines the routing and renders back 
        // back the required content
        fs = require('fs'), // this module allows to work with the file system: read and write files back
        xmlParse = require('xslt-processor').xmlParse, //allows to work with xml
        xsltProcess = require('xslt-processor').xsltProcess, // allows us to utilise XSL Transformation 
        xml2js = require('xml2js')