import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  companies: [
    {
      id: 1,
      name: 'Nivea',
      tested: 1
    },
    {
      id: 2,
      name: 'Johnson&Johnson',
      tested: 1
    },
    {
      id: 3,
      name: 'Wella',
      tested: 1
    },
    {
      id: 4,
      name: 'Old Spice',
      tested: 1
    },
    {
      id: 5,
      name: 'Adidas',
      tested: 1
    },
    {
      id: 6,
      name: 'Rexona',
      tested: 1
    },
    {
      id: 7,
      name: "L'Oreal",
      tested: 1
    },
    {
      id: 8,
      name: 'Bobbi Brown',
      tested: 1
    },
    {
      id: 9,
      name: 'Bielenda',
      tested: 0
    },
    {
      id: 10,
      name: 'Isana',
      tested: 0
    },
    {
      id: 11,
      name: 'Tołpa',
      tested: 0
    },
    {
      id: 12,
      name: 'Lirene',
      tested: 0
    },
    {
      id: 13,
      name: 'Lily Lolo',
      tested: 0
    },
    {
      id: 14,
      name: 'Onlybio',
      tested: 0
    }, 
    {
      id: 15,
      name: 'Sylveco',
      tested: 0
    },
    {
      id: 16,
      name: "Johnson's baby"
    }
  ]
}

export const companySlice = createSlice({
  name: 'companySlice',
  initialState,
  reducers: {

  }
})

export default companySlice.reducer