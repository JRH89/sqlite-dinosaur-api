# sqlite-dinosaur-api

Welcome to sqlite-dinosaur-api! This project provides a simple Node.js Express API with SQLite database integration, designed to serve dinosaur facts based on various endpoints.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js

- npm

### Installation

1. Clone the repo

```bash
git clone https://github.com/jrh89/sqlite-dinosaur-api.git
```

2. Install dependencies

```bash
npm install
```

### Using Frontend

1. CD to the frontend directory

```bash
cd frontend
```

2. Start frontend

```bash
npm start
```

Open browser to localhost:3000 where you will see the UI for using the API. Spin up the server to start fetching dino facts.

### Spinning Up The Server

To start the server locally:

1. Change to the api directory

```bash
cd api
```

2. To start the server locally:

```bash
node index.js
```

The server will start at http://localhost:3001.

### Using the API

#### Get Dinosaur by Name

To fetch dinosaur facts by name, use curl or any HTTP client:


```bash
curl http://localhost:3001/api/dinosaurs/name/Tyrannosaurus
```

Replace Tyrannosaurus with the name of the dinosaur you want to query.

#### Get Dinosaur by Type

To fetch dinosaurs by type, use:

```bash
curl http://localhost:3001/api/dinosaurs/type/theropod
```

Replace theropod with the type of dinosaur you want to query.

#### Get Dinosaur by Diet

To fetch dinosaurs by diet, use:

```bash
curl http://localhost:3001/api/dinosaurs/diet/omnivorous
```

Replace omnivorous with the type of dinosaur you want to query.

#### Get Dinosaur by Family

To fetch dinosaurs by family, use:

```bash
curl http://localhost:3001/api/dinosaurs/family/Caudipterygidae
```

Replace caudipterygidae with the type of dinosaur you want to query.

#### Get Dinosaur by Region

To fetch dinosaurs by region, use:

```bash
curl http://localhost:3001/api/dinosaurs/region/Alberta
```

Replace Alberta with the type of dinosaur you want to query.

#### Get Dinosaur by Class

To fetch dinosaurs by class, use:

```bash
curl http://localhost:3001/api/dinosaurs/class/Ornithischia
```

Replace Ornithischia with the type of dinosaur you want to query.


### Error Handling

If you encounter any issues or errors, please check the server logs or the terminal for error messages. Ensure that your SQLite database is correctly configured and accessible.

### Contributing

Contributions are welcome! Feel free to fork the repository and submit pull requests.

### License

Distributed under the MIT License. See LICENSE for more information.
