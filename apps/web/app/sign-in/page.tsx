import { SignIn } from '@clerk/nextjs';

export default function Page() {
  const redirect = process.env.NEXT_PUBLIC_API_HOST + '/oauth';
  return <SignIn redirectUrl={redirect} />;
}
