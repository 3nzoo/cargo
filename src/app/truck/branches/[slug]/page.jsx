import DeliveriesList from '@/components/deliveriesList/deliveriesList';
import { getNewPostByBranch } from '@/lib/data';

const BranchDetails = async ({ params }) => {
  const { slug } = params;

  const posts = await getNewPostByBranch(slug);
  // slug.username;
  return (
    <div>
      <DeliveriesList username={slug} posts={posts} />
    </div>
  );
};

export default BranchDetails;

//?getNewPostByBranch
//! add a delivery list of new requests from slug branch
