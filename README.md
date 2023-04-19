# Panda Medical Monorepo 

This project is a monorepo Electronic Health Record (EHR) medical app of the Panda medical Technologies handled by yarn workspaces. 


## Installation

Use yarn to install dependecies.

```bash
yarn
```

## Usage
To run the project, you need to build it and start it.

```bash
yarn build
yarn start
yarn run dev:client
yarn run dev:server
```

## Base structure
The project contains client(front-end), admin(front-end), server(backend) and mobile workspaces, together with packages, that can be used to extract some logic there.
```bash
| pandamedical/
| ---packages/
| ----mobile/
| ----web/
| ------client/
| ---------.../
| ------common/
| ---------config/
| ------server/
| ---------.../
| ---.../
| ---.../
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
