import Layout from "../components/Layout";
import Image from "next/image";

const Contact = () => {
  return (
    <Layout title="Contact">
      <div className="bg-white text-center p-8 w-80 shadow-xl">
        <div className="mt-4">
          <p className="font-bold">Contact Info</p>
        </div>
        <div className="mt-4 flex justify-center">
          <Image
            className="rounded-full"
            src="/avatar.png"
            alt="Avatar"
            width={60}
            height={60}
          />
        </div>
        <div className="mt-4">
          <p className="font-bold">Address</p>
          <p className="text-xs mt-2 text-gray-600">1234 Street Name</p>
          <p className="font-bold mt-3">E-mail</p>
          <p className="text-xs mt-2 text-gray-600">abc@gmail.com</p>
          <p className="font-bold mt-3">Phone</p>
          <p className="text-xs mt-2 text-gray-600">000-123-456</p>
        </div>
        <div className="mt-6 flex justify-around">
          <div>
            <a
              href="https://nerdcave.com/tailwind-cheat-sheet"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                className="w-6 h-6 mr-3 text-blue-500"
                src="/icon-twitter.svg"
                alt="Avatar"
                width={30}
                height={30}
              />
            </a>
          </div>
          <div>
            <a
              href="https://nerdcave.com/tailwind-cheat-sheet"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                className="w-6 h-6 mr-3 text-blue-500"
                src="/icon-facebook.svg"
                alt="Avatar"
                width={30}
                height={30}
              />
            </a>
          </div>
          <div>
            <a
              href="https://nerdcave.com/tailwind-cheat-sheet"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                className="w-6 h-6 mr-3 text-blue-500"
                src="/icon-github.svg"
                alt="Avatar"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
