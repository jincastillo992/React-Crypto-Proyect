import React, {lazy, Suspense} from 'react';
import Banner from '../../components/Banner/Banner';
import { LinearProgress } from '@material-ui/core';
const CoinsTable = lazy(()=> import('../../components/CoinsTable/CoinsTable'));

const Homepage = () => {
  return (
    <>
    <Suspense fallback={<LinearProgress style={{backgroundColor: "gold"}} />}>
      <Banner />
      <CoinsTable />
    </Suspense>
    </>
  )
}

export default Homepage