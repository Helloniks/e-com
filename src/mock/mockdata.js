let inventory = [
  {
    name: "ASP.net",
    price: "1000",
    image: "https://picsum.photos/200/300",
    description: 
    "Easy to love. The Sven in birch ivory looks cozy and refined, like a sweater that a fancy lady wears on a coastal vacation. This ivory loveseat has a tufted bench seat, loose back pillows and bolsters, solid walnut legs, and is ready to make your apartment the adult oasis you dream of. Nestle it with plants, an ottoman, an accent chair, or 8 dogs. Your call.",    author: "NIks ooj",
    currentInventory: 4,
    id: "fb94f208-6d34-425f-a3f8-e5b87794aef1"
  },
  {
    name: "Java",
    price: "1000",
    image: "https://picsum.photos/200/300",
    description: "This is a test description",
    author: "fake Author name",
    currentInventory: 2,
    id: "4c95788a-1fa2-4f5c-ab97-7a98c1862584"
  },
  {
    name: "The Skills",
    price: "800",
    image: "https://picsum.photos/200/300",
    description:
      "Easy to love. The Sven in birch ivory looks cozy and refined, like a sweater that a fancy lady wears on a coastal vacation. This ivory loveseat has a tufted bench seat, loose back pillows and bolsters, solid walnut legs, and is ready to make your apartment the adult oasis you dream of. Nestle it with plants, an ottoman, an accent chair, or 8 dogs. Your call.",
    author: "fake Author name",
    currentInventory: 8,
    id: "8338db8c-91c5-4341-81e1-fa350c6baa70"
  },
  {
    name: "Software Programming",
    price: "900",
    image: "https://picsum.photos/200/300",
    description:
      "You know your dad’s incredible vintage bomber jacket? The Nirvana dakota tan leather book is that jacket, but in couch form. With super-plush down-filled cushions, a corner-blocked wooden frame, and a leather patina that only gets better with age, the Nirvana will have you looking cool and feeling peaceful every time you take a seat. Looks pretty great with a sheepskinthrow, if we may say so. With use, this leather will become softer and more wrinkled and the cushions will take on a lived-inlook, like your favorite leather jacket.",
    author: "fake Author name",
    currentInventory: 10,
    id: "d414f81e-0f34-49ca-8fb6-a4b47f622eb9"
  },
  {
    name: "Coding with Java",
    price: "1200",
    image: "https://picsum.photos/200/300",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide book features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather book iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    author: "fake Author name",
    currentInventory: 7,
    id: "f193961b-7716-48f9-9c81-8720224dccbf"
  },
  {
    name: "Javascript",
    price: "500",
    image: "https://picsum.photos/200/300",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide book features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather book iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    author: "fake Author name",
    currentInventory: 13,
    id: "7bbdc630-ff67-4897-ba43-1bcc7919fc6c"
  },
  {
    name: "Webservice",
    price: "650",
    image: "https://picsum.photos/200/300",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide book features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather book iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    author: "fake Author name",
    currentInventory: 9,
    id: "4b7c67b3-0c65-47a4-b7e9-b99f07dfabc2"
  },
  {
    name: "APIS",
    price: "1230",
    image: "https://picsum.photos/200/300",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide book features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather book iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    author: "fake Author name",
    currentInventory: 24,
    id: "e31876fe-34fb-4721-a6ac-7fc3938a352e"
  },
  {
    name: "Deno vs Node",
    price: "800",
    image: "https://picsum.photos/200/300",
    description:
      "Easy to love. The Sven in birch ivory looks cozy and refined, like a sweater that a fancy lady wears on a coastal vacation. This ivory loveseat has a tufted bench seat, loose back pillows and bolsters, solid walnut legs, and is ready to make your apartment the adult oasis you dream of. Nestle it with plants, an ottoman, an accent chair, or 8 dogs. Your call.",
    author: "fake Author name",
    currentInventory: 43,
    id: "e60a4f85-4899-431d-816d-72134cae07a0"
  },
  {
    name: "Browsers",
    price: "900",
    image: "https://picsum.photos/200/300",
    description:
      "You know your dad’s incredible vintage bomber jacket? The Nirvana dakota tan leather book is that jacket, but in couch form. With super-plush down-filled cushions, a corner-blocked wooden frame, and a leather patina that only gets better with age, the Nirvana will have you looking cool and feeling peaceful every time you take a seat. Looks pretty great with a sheepskinthrow, if we may say so. With use, this leather will become softer and more wrinkled and the cushions will take on a lived-inlook, like your favorite leather jacket.",
    author: "fake Author name",
    currentInventory: 2,
    id: "69cdde2b-17f3-411c-a5af-7c552fc6648e"
  },
  {
    name: "Programmers",
    price: "1200",
    image: "https://picsum.photos/200/300",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide book features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather book iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    currentInventory: 14,
    id: "0008c6dd-725a-4eac-b13e-795808cfeedc"
  },
  {
    name: "Google API",
    price: "300",
    image: "https://picsum.photos/200/300",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide book features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather book iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    author: "fake Author name",
    currentInventory: 12,
    id: "8baefb38-6ff4-462d-880a-b192f972d939"
  },
  {
    name: "Amazon Cloud",
    price: "825",
    image: "https://picsum.photos/200/300",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide book features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather book iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    author: "fake Author name",
    currentInventory: 13,
    id: "91067165-7135-4310-b5f9-e99eb2b7410e"
  },
  {
    name: "Top Skills",
    price: "720",
    image: "https://picsum.photos/200/300",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide book features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather book iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    author: "fake Author name",
    currentInventory: 33,
    id: "ab149e2a-7421-4012-b341-1309f8bdc417"
  },
  {
    name: "Finance",
    price: "2000",
    image: "https://picsum.photos/200/300",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide book features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather book iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    author: "fake Author name",
    currentInventory: 23,
    id: "8eac7c82-e095-49a3-b4f7-c2df518ca1d4"
  },
  {
    name: "Technology",
    price: "1100",
    image: "https://picsum.photos/200/300",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide book features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather book iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    author: "fake Author name",
    currentInventory: 13,
    id: "e2b84bfb-2b60-4b82-b899-fe9483d5d2e8"
  },
  {
    name: "Netscap Navigator",
    price: "600",
    image: "https://picsum.photos/200/300",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide book features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather book iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    author: "fake Author name",
    currentInventory: 15,
    id: "994d33fb-7ee3-43a6-ae51-1687f9cd7c15"
  },
  {
    name: "Animation",
    price: "775",
    image: "https://picsum.photos/200/300",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide book features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather book iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    author: "fake Author name",
    currentInventory: 44,
    id: "7f390c3f-f59b-4dfd-9d79-03e6f5d3c096"
  },
  {
    name: "Black book",
    price: "1200",
    image: "https://picsum.photos/200/300",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide book features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather book iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    author: "fake Author name",
    currentInventory: 17,
    id: "e6995bf1-3a50-4934-8777-22c2043fc3f9"
  },
  {
    name: "VB.NET",
    price: "1600",
    image: "https://picsum.photos/200/300",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide book features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather book iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    author: "fake Author name",
    currentInventory: 28,
    id: "77b98369-c6e3-4ebf-86a3-8d0e52024631"
  },
  {
    name: "Source Code",
    price: "550",
    image: "https://picsum.photos/200/300",
    description:
      "You don’t have to go outside to be rugged. The Cigar rawhide book features a sturdy corner-blocked wooden frame and rawseams for that Malboro-person look. This brown leather book iscozy in a cottage, cabin, or a condo. And the leather (the leather!) becomes more beautiful with use: subtle character markings such as insect bites, healed scars, and grain variation reflects a real vintage. Saddle up and pass the remote.",
    author: "fake Author name",
    currentInventory: 31,
    id: "af65a773-9243-4e9e-b192-5eb3b22b0571"
  }
];

export default inventory;
