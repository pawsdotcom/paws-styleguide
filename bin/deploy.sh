#!/usr/bin/env bash

gsutil rsync -R dist gs://styleguide.paws.com
open "http://styleguide.paws.com"
