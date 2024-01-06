export default function Footer() {
  return (
    <footer className="dark:bg-brown-950 h-12 flex items-center justify-center sticky-bottom-0 left-0 w-full">
      <div className="flex gap-2">
        <span>&copy;</span>
        <span>{new Date().getFullYear()}</span>
        <span>Historia Haven. All rights reserved.</span>
      </div>
    </footer>
  );
}
