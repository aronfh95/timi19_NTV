interface LoginStatusProps {
  isLoggedIn: boolean;
  username: string;
}

export default function LoginStatus({
  isLoggedIn,
  username,
}: LoginStatusProps) {
  return (
    <div>
      <h1>Vefverslun</h1>

      {isLoggedIn && <p>þú ert innskráður sem {username}</p>}
    </div>
  );
}
