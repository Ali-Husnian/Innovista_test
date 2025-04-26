import Navbar from '@/shared/common/Navbar';
import {Fragment} from 'react';
import HomeLayout from './home/page';

export default function page() {
 return (
  <Fragment>
         <Navbar />
         <HomeLayout/>
  </Fragment>
 );
}
