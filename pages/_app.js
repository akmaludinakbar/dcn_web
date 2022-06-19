import "../styles/globals.css";
import { cookie } from "../comps/helpers/cookie";
import Loading from "../comps/loading";
import React from "react";
import Unauthorized from "../comps/Unauthorize";

function MyApp({ Component, pageProps, router }) {
  const Layout = Component.Layout || EmptyLayout;
  const [isAuthenticated, setIsAuthenticated] = React.useState(
    router.pathname.includes("home") ? false : true
  );
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    if (router.pathname.includes("home")) {
      checkToken();
    }
  }, []);

  const checkToken = async () => {
    setIsLoading(true);
    let url = `${window.location.origin}/api/auth`;
    // token: cookie.get("token"),
    let data = {
      token: cookie.get("token"),
    };
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    try {
      let json = await res.json();
      setIsAuthenticated(json.status);
      setIsLoading(false);
    } catch (e) {
      setIsAuthenticated(false);
      setIsLoading(false);
    }
  };
  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <Layout>
      {isAuthenticated ? <Component {...pageProps} /> : <Unauthorized />}
    </Layout>
  );
}

const EmptyLayout = ({ children }) => <>{children}</>;
export default MyApp;
