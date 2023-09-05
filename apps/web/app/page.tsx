'use client';
import {
  useOrganization,
  useOrganizationList
} from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

export default function Page(props) {
  const {
    isLoaded,
    userMemberships,
  } = useOrganizationList();

  const router = useRouter();

  const org = useOrganization();

  if (isLoaded && !userMemberships.isLoading && !userMemberships.isFetching && !org.organization) {
    if (userMemberships.count === 0) {
      router.push('/create-organization');
    }
  }

  return (
    <p className="text-red-600">Hello!</p>
  );
}
