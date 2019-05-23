#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/cdk');
import { IacStack } from '../lib/iac-stack';

/*

    Stack name declared below, each environment is 
    declared here

    'cdk synth -c environment=staging'

*/

const app = new cdk.App();

// cdk deploy Staging
new IacStack(app, 'staging', {
    env: {
        region: 'eu-west-2'
    }
});
