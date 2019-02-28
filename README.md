# Scalingo styles

Scalingo style guide, a collection of CSS and JS files.

## Sync SVG to CDN

```
s3cmd --access_key=$AWS_ACCESS_KEY_ID --secret_key=$AWS_SECRET_ACCESS_KEY put --acl-public -r ./svg s3://scalingo-cdn/scalingo-styles/
```
