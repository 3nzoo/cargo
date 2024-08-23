// !move the main truck page here
import styles from './companyBranches.module.css';

import BranchListTruck from '../../../components/branches/branchListTruck';
import { Suspense } from 'react';
import Loading from '../../loading';
import { getBranchesOnly } from '@/lib/data';

const CompanyBranches = async () => {
  const branches = await getBranchesOnly();

  return (
    <div className={styles.container}>
      <Suspense fallback={<Loading />}>
        <BranchListTruck branches={branches} />
      </Suspense>
    </div>
  );
};

export default CompanyBranches;
