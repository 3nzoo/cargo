'use client';

import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import { updateDelivery } from '@/lib/action';
import styles from './editDelivery.module.css';
import StatusSelect from '@/components/statusSelect/statusSelect';
import { useState } from 'react';
import Image from 'next/image';

const EditDelivery = (params) => {
  const [state, formAction] = useFormState(updateDelivery, undefined);

  const { status } = params.searchParams;
  const { slug } = params.params;
  const router = useRouter();

  const index = slug.indexOf('FC-');
  const result = slug.slice(0, index);
  const { add } = params.searchParams;
  const { delivery } = params.searchParams;
  const [selectedImage, setSelectedImage] = useState(null);
  const [deliveryStatus, setDeliveryStatus] = useState(delivery);

  if (state?.success) {
    setTimeout(() => {
      router.replace(`/truck/branches/${result}`);
    }, 1500);
  }

  const handleBack = () => {
    router.back();
  };

  const handleStatusChange = (event) => {
    setDeliveryStatus(event.target.value);
  };

  // const handleUpload = (e) => {
  //   const result = e.target.files;
  //   if (result?.length) {
  //     setImage(result[0]);
  //     setFormData({
  //       ...formData,
  //       img_Url: result[0].name,
  //     });
  //   }
  // };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      onImageUpload(file); // Pass the file back to the parent component if needed
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    onImageUpload(null); // Clear the uploaded image in the parent component
  };

  //! add form here for update
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={formAction} className={styles.formContainer}>
          <div className={styles.header}>
            <button className={styles.back} onClick={handleBack}>
              BACK
            </button>
          </div>
          <h1>Edit Delivery</h1>
          <div className={styles.content}>
            <h2>Address: {add}</h2>
            <StatusSelect
              value={deliveryStatus}
              onChange={handleStatusChange}
            />
          </div>

          <input type='hidden' name='username' value={slug} />
          <textarea type='text' name='remarks' placeholder='remarks' rows={5} />
          <div className={styles.imageUpload}>
            <label htmlFor='upload-button'>
              {selectedImage ? (
                <div className={styles.imageContainer}>
                  <Image
                    src={selectedImage}
                    alt='Selected'
                    width={150}
                    height={150}
                    className={styles.imagePreview}
                    objectFit='cover'
                  />
                </div>
              ) : (
                <div className={styles.btnUpload}>Click to upload an image</div>
              )}
            </label>
            <input
              id='upload-button'
              type='file'
              accept='image/*'
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
            {selectedImage && (
              <button
                className={styles.btn}
                type='button'
                onClick={handleRemoveImage}
              >
                Remove Image
              </button>
            )}
          </div>

          {/* <input type='file' onChange={handleUpload} accept={'image/*'} /> */}
          {/* <input type='text' name='status' value={slug} /> */}
          <button className={styles.add}>Save</button>
          <button className={styles.close} onClick={handleBack}>
            Cancel
          </button>
          {state?.success && <h2>Delivery Updated</h2>}
          {state?.error}
        </form>
      </div>
    </div>
  );
};
export default EditDelivery;
