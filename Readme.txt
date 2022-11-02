ROUTES

/api/users/...
GET.../
Retrieve all users

POST../signup
Create new user + log user in

POST ../login
Log user in

/api/places/...
GET .../user/:uid
Retrive list of all places for a given user id(uid)

/:pd

POST .../
Create a new place

PATCH .../:pid
Update a place by id (pid)

Delete .../:pid
Delete a place by id (pid)




let DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire state building",
    description: "Famous sky scapper",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/it/thumb/6/62/Mario_Rossi_%28direttore_d%27orchestra%29.jpg/1024px-Mario_Rossi_%28direttore_d%27orchestra%29.jpg",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire state building",
    description: "Famous sky scapper",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/it/thumb/6/62/Mario_Rossi_%28direttore_d%27orchestra%29.jpg/1024px-Mario_Rossi_%28direttore_d%27orchestra%29.jpg",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9856644,
    },
    creator: "u2",
  },
];