// ! records of deliveries under truck account
// ? getdeliveries
import { getTruckDeliveries } from '@/lib/data';
import React from 'react';

const DeliveryRecords = async () => {
  const records = await getTruckDeliveries('094293853');

  return <div>DeliveryRecords</div>;
};

export default DeliveryRecords;
