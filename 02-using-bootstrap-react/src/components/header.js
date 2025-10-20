function Header() {
  return (
    <header className="bg-warning p-3 d-flex justify-content-between align-items-center">
      <h1 className="m-0">لوگوی من 💫</h1>
      <nav>
        <a href="#" className="m-3 text-dark text-decoration-none">
          خانه
        </a>
        <a href="#" className="m-3 text-dark text-decoration-none">
          درباره
        </a>
        <a href="#" className="text-dark text-decoration-none">
          تماس
        </a>
      </nav>
    </header>
  );
}
export default Header;
