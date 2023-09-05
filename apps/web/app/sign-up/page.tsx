import { SignUp } from '@clerk/nextjs';

export default function Page() {
  const redirect = process.env.NEXT_PUBLIC_API_HOST + '/oauth';
  return <SignUp redirectUrl={redirect} />;
}
