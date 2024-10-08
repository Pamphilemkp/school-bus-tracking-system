// // src/app/data/busData.js
export const busStops = {
    Nicosia: {
      Yenikent: [
        { name: "Yenikent Stop 1", location: [35.179, 33.359] },
        { name: "Yenikent Stop 2", location: [35.180, 33.360] },
        { name: "Yenikent Stop 3", location: [35.181, 33.361] },
        { name: "Yenikent Stop 4", location: [35.182, 33.362] },
        { name: "Yenikent Stop 5", location: [35.183, 33.363] },
        { name: "Yenikent Stop 6", location: [35.184, 33.364] },
      ],
      Gonyeli: [
        { name: "Gonyeli Stop 1", location: [35.175, 33.365] },
        { name: "Gonyeli Stop 2", location: [35.176, 33.366] },
        { name: "Gonyeli Stop 3", location: [35.177, 33.367] },
        { name: "Gonyeli Stop 4", location: [35.178, 33.368] },
        { name: "Gonyeli Stop 5", location: [35.179, 33.369] },
        { name: "Gonyeli Stop 6", location: [35.180, 33.370] },
      ],
      Hamitkoy: [
        { name: "Hamitkoy Stop 1", location: [35.190, 33.355] },
        { name: "Hamitkoy Stop 2", location: [35.191, 33.356] },
        { name: "Hamitkoy Stop 3", location: [35.192, 33.357] },
        { name: "Hamitkoy Stop 4", location: [35.193, 33.358] },
        { name: "Hamitkoy Stop 5", location: [35.194, 33.359] },
        { name: "Hamitkoy Stop 6", location: [35.195, 33.360] },
      ],
    },
    Girne: [
      { name: "Girne Stop 1", location: [35.347, 33.321] },
      { name: "Girne Stop 2", location: [35.348, 33.322] },
      { name: "Girne Stop 3", location: [35.349, 33.323] },
      { name: "Girne Stop 4", location: [35.350, 33.324] },
      { name: "Girne Stop 5", location: [35.351, 33.325] },
      { name: "Girne Stop 6", location: [35.352, 33.326] },
      { name: "Girne Stop 7", location: [35.353, 33.327] },
      { name: "Girne Stop 8", location: [35.354, 33.328] },
      { name: "Girne Stop 9", location: [35.355, 33.329] },
      { name: "Girne Stop 10", location: [35.356, 33.330] },
    ],
    Famagusta: [
      { name: "Famagusta Stop 1", location: [35.422, 33.438] },
      { name: "Famagusta Stop 2", location: [35.423, 33.439] },
      { name: "Famagusta Stop 3", location: [35.424, 33.440] },
      { name: "Famagusta Stop 4", location: [35.425, 33.441] },
      { name: "Famagusta Stop 5", location: [35.426, 33.442] },
      { name: "Famagusta Stop 6", location: [35.427, 33.443] },
      { name: "Famagusta Stop 7", location: [35.428, 33.444] },
      { name: "Famagusta Stop 8", location: [35.429, 33.445] },
      { name: "Famagusta Stop 9", location: [35.430, 33.446] },
      { name: "Famagusta Stop 10", location: [35.431, 33.447] },
    ],
  };
  
// src/app/data/busData.js
// export const busStops = {
//     Nicosia: [
//       { name: "Cyprus International University", location: [35.1834, 33.3532] },
//       { name: "Nicosia City Center", location: [35.1667, 33.3667] },
//     ],
//     Girne: [
//       { name: "Girne City Center", location: [35.3381, 33.3154] },
//     ],
//     Famagusta: [
//       { name: "Famagusta City Center", location: [35.1265, 33.9471] },
//     ],
//   };
  
  export const busRoutes = [
    {
      city: 'Nicosia',
      path: [
        [35.1834, 33.3532], // CIU
        [35.1667, 33.3667], // Nicosia City Center
      ],
    },
    {
      city: 'Girne',
      path: [
        [35.3381, 33.3154], // Girne City Center
      ],
    },
    {
      city: 'Famagusta',
      path: [
        [35.1265, 33.9471], // Famagusta City Center
      ],
    },
  ];
  
