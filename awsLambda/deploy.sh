#!/bin/sh

zip -r lambdaFunc.zip .

aws lambda update-function-code --function-name Mailer --zip-file fileb://./lambdaFunc.zip

rm -rf lambdaFunc.zip