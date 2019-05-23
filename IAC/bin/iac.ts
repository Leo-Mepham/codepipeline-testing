#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/cdk');
import { IacStack } from '../lib/iac-stack';

/*

    Stack names are declared below, each environment is 
    declared here, staging, production, etc

    This may be superseded in the CodePipeline stack name step

*/

const app = new cdk.App();

// cdk deploy staging
new IacStack(app, 'staging', {
    env: {
        region: 'eu-west-2'
    }
});
