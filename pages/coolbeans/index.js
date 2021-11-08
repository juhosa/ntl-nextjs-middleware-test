import { useRouter } from "next/router";
import { useState } from "react";

const CoolBeans = () => {
  const router = useRouter();

  const [params, setParams] = useState();
  return (
    <div>
      <h1>I'm behind a NextJS middleware!</h1>
      <h3>Route:</h3>
      <pre>{JSON.stringify(router.query)}</pre>
    </div>
  );
};

export default CoolBeans;
