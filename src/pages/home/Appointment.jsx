import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup
  .object({
    name: yup.string().required(),
    gender:yup.string().required(),
    email: yup.string().required(),
    phone:yup.number().positive().integer().required(),
    doctor:yup.string(),
    department:yup.string(),
    message: yup.string()
  })
  .required()

function Appointment() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm({ resolver: yupResolver(schema),})
    
      const onSubmit = (data) => {
        console.log(data)
        reset()
      }
    return (
        <section className="">
            <div
                className="w-full p-8"
                style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
                <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Text Section */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left lg:mt-12 hidden md:block lg:block ">
                        <h2 className="text-4xl font-bold text-blue-600 mb-4">Book an Appointment</h2>
                        <p className="text-gray-200">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.
                            Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
                        </p>
                    </div>


                    {/* Form Section */}
                    <div className="w-full lg:w-1/2 bg-blue-900 p-6 rounded-lg shadow-lg lg:mt-0 lg:self-start">
                        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white">
                            <input {...register("name")} className="p-2 bg-blue-800 rounded placeholder-white" placeholder="Name" />
                            {errors.name && <p className="text-red-400">{errors.name.message}</p> }
                            <select
                                {...register("gender")}
                                id="gender"
                                className="bg-blue-800 border border-blue-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option selected>Choose a Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Non-binary">Non-binary</option>
                            </select>
                            {errors.gender && <p className="text-red-400">{errors.gender.message}</p> }
                            <input
                                {...register("email")}
                                type="email"
                                className="p-2 bg-blue-800 rounded text-white placeholder-white"
                                placeholder="Email"
                            />
                            {errors.email && <span className="text-red-400">{errors.email.message}</span> }
                            <input {...register("phone")} className="p-2 bg-blue-800 rounded placeholder-white" placeholder="Phone" />
                            {errors.phone && <p className="text-red-400">{errors.phone.message}</p> }
                            <input {...register("date")} type="date" className="p-2 bg-blue-800 rounded" />
                            <input {...register("time")} type="time" className="p-2 bg-blue-800 rounded" />
                            <select
                                {...register("doctor")}
                                id="doctor"
                                className="bg-blue-800 border border-blue-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option selected>Choose a Doctor</option>
                                <option value="Dr. John Doe">Dr. John Doe</option>
                                <option value="Dr. Jane Smith">Dr. Jane Smith</option>
                                <option value="Dr. Sarah Lee">Dr. Sarah Lee</option>
                                <option value="Dr. Adam Brown">Dr. Adam Brown</option>
                                <option value="Dr. Emily White">Dr. Emily White</option>
                            </select>
                            {errors.doctor && <p className="text-red-400">{errors.doctor.message}</p> }
                            <select
                                {...register("department")}
                                id="department"
                                className="bg-blue-800 border border-blue-500 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                <option selected>Choose a Department</option>
                                <option value="Neurology">Neurology</option>
                                <option value="Cardiology">Cardiology</option>
                                <option value="Orthopedics">Orthopedics</option>
                                <option value="Dermatology">Dermatology</option>
                                <option value="Pediatrics">Pediatrics</option>
                            </select>
                            {errors.department && <p className="text-red-400">{errors.department.message}</p> }
                            <textarea
                                {...register("message")}
                                className="p-2 bg-blue-800 rounded col-span-1 sm:col-span-2 placeholder-white"
                                placeholder="Message"></textarea>
                                {errors.message && <p className="text-red-400">{errors.message.message}</p> }
                            <button
                                type="submit"
                                className="p-2 bg-blue-600 rounded col-span-1 sm:col-span-2 hover:bg-blue-500">
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* Text Section for small screens */}
                    <div className="w-full text-center mt-4 block md:hidden">
                        <h2 className="text-2xl font-bold text-blue-900 mb-2">Book an Appointment</h2>
                        <p className="text-gray-700 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare.
                            Convallis felis vitae tortor augue. Velit nascetur proin massa in.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Appointment;
