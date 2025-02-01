export default function Footer() {
  return (
    <footer className="bg-slate-700 text-white text-center py-6 shadow-inner">
      <p className="text-lg font-medium tracking-wide">
        © {new Date().getFullYear()} Tasty Ten. All rights reserved.
      </p>
    </footer>
  );
}
