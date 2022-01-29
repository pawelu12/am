import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [
    {
      id: 1,
      companyId: 1,
      name: 'Nivea Men Krem pielęgnacyjny',
      barcode: '59000174041483',
      photo: 'https://xaxa.cfolks.pl/projekt/images/5900017041483.png'
    },
    {
      id: 2,
      companyId: 1,
      name: 'Nivea Baby Pielęgnujący płyn do kąpieli',
      barcode: '4005808363568',
      photo: 'https://xaxa.cfolks.pl/projekt/images/4005808363568.png'
    },
    {
      id: 3,
      companyId: 16,
      name: "Johnson's Bedtime Płyn do kąpieli na dobranoc",
      barcode: '3574669908696',
      photo: 'https://xaxa.cfolks.pl/projekt/images/3574669908696.png'
    },
    {
      id: 4,
      companyId: 3,
      name: 'Wella wellaflex lakier do włosów większa objętość',
      barcode: '4015600606503',
      photo: 'https://xaxa.cfolks.pl/projekt/images/4015600606503.png'
    },
    {
      id: 5,
      companyId: 5,
      name: 'Adidas Control Ultra Protection Dezodorant antyperspirant dla kobiet',
      barcode: '3607349682200',
      photo: 'https://xaxa.cfolks.pl/projekt/images/3607349682200.png'
    },
    {
      id: 6,
      companyId: 5,
      name: 'Adidas Adipower Żel pod prysznic dla mężczyzn 3w1',
      barcode: '3614225290329',
      photo: 'https://xaxa.cfolks.pl/projekt/images/3614225290329.png'
    },
    {
      id: 7,
      companyId: 5,
      name: 'Adidas 6 w 1 dezodorant antyperspiracyjny w kulce dla mężczyzn',
      barcode: '3607347856726',
      photo: 'https://xaxa.cfolks.pl/projekt/images/3607347856726.png'
    }
  ]
}

export const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {

  }
})

export default productSlice.reducer