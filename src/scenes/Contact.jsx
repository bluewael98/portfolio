import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="md:py-52 py-24">
      {/* HEADINGS */}
      <motion.div
        className="basis-1/2 flex justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="flex flex-col items-center">
          <p className="font-playfair font-semibold xxs:text-2xl md:text-4xl mb-5 text-black">
            CONTACT ME TO GET STARTED
          </p>
          <p className="font-playfair xxs:text-2xl md:text-4xl xxs:w-[300px] ss:w-auto mb-5 text-black">
            Lets embark on this journey and create something spectacular,
            together.
          </p>
          <div className="flex md:justify-end my-5"></div>
        </div>
      </motion.div>

      {/* FORM */}
      <div className="md: flex justify-center gap-16 mt-5">
        <motion.div
          className="mt-10 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/e562502946854997d37372895dcbfc61"
            method="POST"
          >
            <input
              className="w-full bg-secondary font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxlength: 100,
              })}
            />
            {errors.name && (
              <p className=" text-red-800 mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className="w-full bg-secondary font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />

            {errors.email && (
              <p className=" text-red-800 mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full bg-secondary font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxlength: 2000,
              })}
            />

            {errors.message && (
              <p className=" text-red-800 mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max Length is 2000 char."}
              </p>
            )}
            <div className="flex justify-center">
              <button
                type="submit"
                className="p-5 bg-background font-semibold text-black mt-5 rounded-sm  hover:bg-secondary
              transition duration-500 "
              >
                SEND ME A MESSAGE
              </button>
            </div>
          </form>

          {/* CONTACT AND LOCATION */}
          <div className="flex justify-center items-center md:gap-5 md:flex-row flex-col  mx-auto">
            <div className="flex flex-wrap">
              <button
                className="p-5 bg-background font-semibold text-black mt-5 rounded-sm  hover:bg-secondary
              transition duration-500 "
              >
                +61 401 242 733
              </button>
            </div>
            <div className="flex flex-wrap">
              <button
                className="p-5 bg-background font-semibold text-black mt-5 rounded-sm  hover:bg-secondary
              transition duration-500 "
              >
                Sydney, Australia.
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
