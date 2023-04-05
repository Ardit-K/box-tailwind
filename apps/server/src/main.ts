/**
 * Backend Server for retrieving and updating data
 */

import express from 'express';
import * as path from 'path';

const app = express();
app.use(express.json());

const MOVIES_IN_MEM = [
  {
    id: '1',
    Name: 'Avatar',
    Release: 'January 22, 2012',
    Description: 'Blue Dudes do cool stuff.',
    Rating: 4.7,
  },
  {
    id: '2',
    Name: 'Spider-Man',
    Release: 'February 10, 2008',
    Description: 'Spider Dude gets powers.',
    Rating: 4.3,
  },
  {
    id: '3',
    Name: 'Venom',
    Release: 'March 30, 2017',
    Description: 'Eminem raps about a symbiote.',
    Rating: 4.0,
  },
  {
    id: '4',
    Name: 'Avengers',
    Release: 'April 1, 2009',
    Description: 'Heroes fight to save Earth',
    Rating: 5.0,
  },
  {
    id: '5',
    Name: 'Uncharted',
    Release: 'July 19, 2012',
    Description: 'Tom Holland tries to deceive us as a treasure hunter.',
    Rating: 3.9,
  },
];
const SCREENS_IN_MEM = [
  {
    id: '1',
    Movie: MOVIES_IN_MEM[0],
    ticketsAvailable: 50,
    totalTickets: 50,
  },
  {
    id: '2',
    Movie: MOVIES_IN_MEM[1],
    ticketsAvailable: 50,
    totalTickets: 50,
  },
  {
    id: '3',
    Movie: MOVIES_IN_MEM[2],
    ticketsAvailable: 50,
    totalTickets: 50,
  },
  {
    id: '4',
    Movie: MOVIES_IN_MEM[3],
    ticketsAvailable: 50,
    totalTickets: 50,
  },
  {
    id: '5',
    Movie: MOVIES_IN_MEM[4],
    ticketsAvailable: 50,
    totalTickets: 50,
  },
];

const SALES_IN_MEM = [];

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send('Welcome to backend Server!');
});
app.get('/api/movies', (req, res) => {
  res.send(MOVIES_IN_MEM);
});

app.get('/api/screens', (req, res) => {
  res.send(SCREENS_IN_MEM);
});

app.get('/api/movies/:id', (req, res) => {
  const id = Number(req.params.id);
  console.log(MOVIES_IN_MEM[id - 1]);
  res.send(MOVIES_IN_MEM[id - 1]);
});

app.get('/api/sales', (req, res) => {
  res.send(SALES_IN_MEM);
});

app.post('/api/movies', (req, res) => {
  MOVIES_IN_MEM.push(req.body);
  res.send(req.body);
});

app.put('/api/screens', (req, res) => {
  const screen = req.body;
  console.log(screen.id);
  const id = screen.id;
  const oldScreen = SCREENS_IN_MEM[id - 1];
  oldScreen.Movie = screen.Movie;
  console.log(oldScreen.Movie);
  oldScreen.ticketsAvailable = screen.ticketsAvailable;
  oldScreen.totalTickets = screen.totalTickets;
  res.send(oldScreen);
});

app.post('/api/sales', (req,res)=>{
  SALES_IN_MEM.push(req.body);
  res.send(req.body);
})

app.delete('/api/movies/:id', (req,res)=>{
  const id = Number(req.params.id);
  MOVIES_IN_MEM.splice(id-1, 1);
  res.send(id);
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
