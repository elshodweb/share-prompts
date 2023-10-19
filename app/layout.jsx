import "@styles/globals.css";
import "@components/Provider";
import Provider from "@components/Provider";
import Nav from "@components/Nav";

export const metadata = {
  title: "Promptopia",
  decription: "Discover and Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <Provider>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;

