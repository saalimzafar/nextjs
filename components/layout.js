export default function Layout({ children }) {
  return (
    <>
      <div id="main" className="main ui">
        <div className="content">{children}</div>
      </div>
    </>
  );
}
