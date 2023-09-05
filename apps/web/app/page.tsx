'use client';
import {
  OrganizationSwitcher,
  UserButton,
  useOrganization,
  useOrganizationList,
} from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { Button, Header } from 'ui';

export default function Page(props) {
  const {
    isLoaded,
    createOrganization,
    setActive,
    userInvitations,
    userMemberships,
    userSuggestions,
  } = useOrganizationList();

  const router = useRouter();

  const org = useOrganization();

  if (isLoaded && !userMemberships.isLoading && !userMemberships.isFetching && !org.organization) {
    if (userMemberships.count === 0) {
      router.push('/create-organization');
    }
  }

  return (
    <>
      <Header text="Web" />
      <OrganizationSwitcher />
      <UserButton afterSignOutUrl="/" />
      <Button />
    </>
  );
}
