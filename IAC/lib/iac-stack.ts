import { s3Bucket } from './s3Bucket';
import cdk = require('@aws-cdk/cdk');

export interface StaticSiteProps {
  environment: string;
  bucketSuffix: string;
}

export class IacStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

        // Deploy once with this empty, then again using the
        // output of the first run as a suffix
        const bucketSuffix = this.node.getContext('bucketSuffix');

        new s3Bucket(this, 'S3Bucket', {
          bucketSuffix: bucketSuffix
      });
  }
}
