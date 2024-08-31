import Loading from '@/app/loading';
import { getPostBySlug } from '@/lib/data';
import React, { Suspense } from 'react';
import styles from './deliveryPage.module.css';
import Link from 'next/link';
import testImage from '../../../../public/contact.png';
import Image from 'next/image';
//! redirect to a page where driver can update the remarks and status.
//! a page where check auth user number same with contact.
//! page will update status and the truck_number when accepted
//! make the edit page use client

const DeliveryPage = async ({ params }) => {
  const { slug } = params;

  const index = slug.indexOf('FC-');
  const result = slug.slice(0, index);

  const post = await getPostBySlug(slug);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.buttons}>
            <h1>Delivery Details</h1>
          </div>
          <Link className={styles.back} href={`/truck/branches/${result}`}>
            Back
          </Link>
        </div>
        <div className={styles.section}>
          <h2>Name: </h2>
          <h3>- {post.name}</h3>
        </div>
        <div className={styles.section}>
          <h2>Delivery Address:</h2>
          <h3>- {post.address}</h3>
        </div>
        <div className={styles.section}>
          <h2>Contact Number:</h2>
          <h3>- {post.contact}</h3>
        </div>
        <div className={styles.section}>
          <h2>Status:</h2>
          <h3>- {post.status} </h3>
        </div>

        {post.status === 'New' && (
          <Link
            className={styles.accept}
            href={`/delivery/${slug}/edit?status=${post.id}&delivery=${post.status}&add=${post.address}`}
          >
            Accept
          </Link>
        )}
        <div className={styles.section}>
          <h2>Item Category:</h2>
          <h3>- {post.item_category} </h3>
        </div>
        {post.distance !== '-' && (
          <div className={styles.section}>
            <h2>Distance:</h2>
            <h3>
              {' '}
              - {post?.distance} {post?.distance > 0 ? 'km' : ''}
            </h3>
          </div>
        )}
        {post.truck_number !== '-' && (
          <div className={styles.section}>
            <h2>Truck Number:</h2>
            <h3>- {post.truck_number} </h3>
          </div>
        )}
        {post.remarks !== '-' && (
          <div className={styles.section}>
            <h2>Remarks:</h2>
            <h3> - {post?.remarks}</h3>
          </div>
        )}
        {post.img !== '-' && post.status !== 'canceled' && (
          <div className={styles.section}>
            <h2>Delivery Proof:</h2>
            <Image
              src={testImage}
              alt='Click download'
              width={150}
              height={150}
            />
            <h3>- {post.img} </h3>
            <a
              href='https://keaproof.s3.ap-southeast-1.amazonaws.com/Slice+1.png'
              className={styles.down1}
              download
            >
              Download1 proof
            </a>

            <a
              href='https://keaproof.s3.ap-southeast-1.amazonaws.com/Slice+1.png'
              className={styles.down2}
              download='proof.jpg'
            >
              Download2
            </a>

            <a
              href={`https://keaproof.s3.ap-southeast-1.amazonaws.com/Slice+1.png`}
              className={styles.down3}
              download='proof.png'
            >
              Download3
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeliveryPage;
