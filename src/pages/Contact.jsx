import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-screen w-full min-h-screen flex flex-col mt-30 md:mt-25 mx-auto text-center">
      <h1 className="text-white font-monteseret-regular max-w-screen-sm text-xl md:text-3xl items-center mx-auto">
        <b className="text-orange-600">Get in touch</b> with us for our Digital
        Media Services.
      </h1>
      <div className="flex justify-around max-w-screen-xl w-full mx-auto min-h-96 rounded-2xl mt-5">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-10 m-2 h-full rounded-2xl"
          action=""
        >
          <input
            required
            type="text"
            name="name"
            placeholder="Name"
            className="outline-0 w-96 px-3 py-2 rounded-lg border-b-2 border-gray-300 focus:outline-none focus:border-orange-600 text-white"
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            className="outline-0 w-96 mt-4 px-3 py-2 rounded-lg border-b-2 border-gray-300 focus:outline-none focus:border-orange-600 text-white"
          />
          <input
            required
            type="text"
            name="phone"
            placeholder="Phone"
            className="outline-0 w-96 mt-4 px-3 py-2 rounded-lg border-b-2 border-gray-300 focus:outline-none focus:border-orange-600 text-white"
          />
          <input
            required
            type="text"
            name="company"
            placeholder="Company"
            className="outline-0 w-96 mt-4 px-3 py-2 rounded-lg border-b-2 border-gray-300 focus:outline-none focus:border-orange-600 text-white"
          />
          <textarea
            rows="4"
            name="message"
            placeholder="Message"
            className="outline-0 w-96 mt-4 px-3 py-2 rounded-lg border-b-2 border-gray-300 focus:outline-none focus:border-orange-600 text-white"
          ></textarea>
          <button
            type="submit"
            className="outline-0 w-96 mt-4 px-3 py-2 rounded-lg bg-orange-600 text-white hover:bg-orange-700 focus:outline-none"
          >
            Submit
          </button>
        </form>
        <div className="max-w-96 flex items-center justify-center flex-col w-full min-h-52 bg-slate-100 rounded-3xl my-4 text-black shrink-0 gap-3">
          <FontAwesomeIcon icon={faPhone} className="text-7xl text-orange-600" />
          <p className="text-center mt-2">86056 88071</p>
          <p className="text-center">info@anicomic.in</p>
          <div className="mt-20 font-bold">Nagpur | Mumbai | Chindwaara</div>
          <h1>Email : info@anicomic.in</h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
