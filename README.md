# TL;DR

*To deploy, run `npm run deploy`, navigate to Settings > Pages, and add www.benjamint.me.*

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run deploy`

Runs `predeploy` and `deploy` scripts defined in `package.json`.

Under the hood, the `predeploy` script will build a distributable version of the React app and store it in a folder named `build`.
Then, the `deploy` script will push the contents of that folder to a new commit on the `gh-pages` branch of the GitHub repository, creating that branch if it doesn't already exist.
