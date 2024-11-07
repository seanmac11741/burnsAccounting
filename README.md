# Burns Accounting Website 

## Firebase deploys 
```bash
firebase login
firebase init
firebase deploy
```

## To run in dev with bun: 
```
bun build src/app.js --outdir ./public --watch
#then spool up the ./public/index.html file with LiveServer
```
## Deploy to firebase: 
```
#Run the build command
bun build src/app.js --outdir ./public
firebase deploy

```
