export const productos = [
    {
      id: 1,
      nombre: "DeGod #1",
      precio: 150,
      imagen:"https://i.seadn.io/gcs/files/9cffae478628a2190e8592a9c74220de.png?auto=format&dpr=1&w=256",
      categoria:"degod"
    },
    {
      id: 2,
      nombre: "DeGod #2",
      precio: 100,
      imagen:"https://i.seadn.io/gcs/files/b74ae344988ea1be92aec3e56ac2576b.png?auto=format&dpr=1&w=256",
      categoria:"degod"
    },
    {
      id: 3,
      nombre: "DeGod #3",
      precio: 50,
      imagen:"https://i.seadn.io/gcs/files/5da077ea7d5580f00a4be65b52ed9894.png?auto=format&dpr=1&w=256",
      categoria:"degod"
    },
    {
      id: 4,
      nombre: "DeGod #4",
      precio: 50,
      imagen:"https://i.seadn.io/gcs/files/320d7d7308b49836eec72f35de423647.png?auto=format&dpr=1&w=256",
      categoria:"degod"
    },
    {
      id: 5,
      nombre: "Bored Ape #1",
      precio: 50,
      imagen:"https://i.seadn.io/gae/XSBrqLSC5NyABBdX_3N_rGm2N7opgb_1EOCwhRDvzxhAVXHO7WVusV2e-X1g57fXOMr1igJPRMoC8r7lzW6taQv5kZdi8EJBlA0Nig?auto=format&dpr=1&w=256",
      categoria:"bored"
    },
    {
      id: 6,
      nombre: "Bored Ape #2",
      precio: 350,
      imagen:"https://i.seadn.io/gae/F3twbu2BQbach9qBnzZaaTTSdD9p3elhyiyRCGVesqxvZecr5w_d4v3AdM3pmfIfYiozTY_6AsxFhVj1eRNb7VBKi_J1hLZJVPkVYw?auto=format&dpr=1&w=256",
      categoria:"bored"
    },
    {
      id: 7,
      nombre: "Bored Ape #3",
      precio: 350,
      imagen:"https://i.seadn.io/gae/i5i8uDHrOfFTb4a4zyEYTjHx-3blgtO1G-DEhOozPMmQMAoHb86LfmGxA0CwyBWpl7OvmFKA1mK8xuL1o8bqt3elvs76I_4w7Wma?auto=format&dpr=1&w=256",
      categoria:"bored"
    },
    {
      id: 8,
      nombre: "Bored Ape #4",
      precio: 150,
      imagen:"https://i.seadn.io/gae/PlCw1_yfKbsaC9OzPhLYWqN4Od2-Y_pMDHhsD3fqqtwbyS2Oo7MdjDCTrmEST5RbFbaC10rGn6MuOdS0yf6QBhn5eMPJMNQDHBZkIZA?auto=format&dpr=1&w=256",
      categoria:"bored"
    }
  ];
  
  
  JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productos));
  