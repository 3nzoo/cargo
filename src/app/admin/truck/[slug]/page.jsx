// import { getPost } from '@/lib/data';
import Loading from '@/app/loading';
import AdminUser from '@/components/adminUser/adminUser';
import DeliveriesList from '@/components/deliveriesList/deliveriesList';
import { auth } from '@/lib/auth';
import { getTruckDeliveries, getUserBySlug } from '@/lib/data';
import React, { Suspense } from 'react';

//  1. show complete User/branch details
// ! 2. show table below with latest delivery requests

// ! 3. sortby date
// ! 4. request to deactivate Branch/User
// ! 5. search feature

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  return {
    title: slug,
    description: `List of deliveries under ${slug}`,
  };
};

const TruckDetailsPage = async ({ params }) => {
  const { slug } = params;
  const user = await getUserBySlug(slug);
  const posts = await getTruckDeliveries(user.contact);

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <AdminUser username={user} />
      </Suspense>

      <DeliveriesList posts={posts} username={user.username} />
    </div>
  );
};

export default TruckDetailsPage;
