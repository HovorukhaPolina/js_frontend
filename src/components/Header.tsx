// components/Header.tsx
type HeaderProps = {
  title: string;
  description: string;
};

export function Header({ title, description }: HeaderProps) {
  return (
    <header className="hero">
      <nav className="navbar">
        <div className="logo">Forum DEV</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#posts">Posts</a>
          <a href="#categories">Categories</a>
          <button className="nav-btn">Get Started</button>
        </div>
      </nav>

      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>
      <div className="circle circle-4"></div>
      <div className="circle circle-5"></div>
      <div className="circle circle-6"></div>
      <div className="circle circle-7"></div>

      <div className="hero-content">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </header>
  );
}