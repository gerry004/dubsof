export default function Footer() {
  return (
    <footer className="bg-black text-gray-500 py-6">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p>
            &copy; {new Date().getFullYear()} The Dublin Software Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
