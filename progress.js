#!/usr/bin/env node

'use strict';

var stdin = process.stdin;
var stdout = process.stdout;

stdin.setEncoding('utf-8');
stdin
  .on('data', function (chunk) {
    chunk.toString().split('').forEach(function () {
      stdout.write('=');
    });
  })
  .on('end', function () { process.exit(0); });
