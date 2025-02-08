import { MdOutlineChat } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const CardBlog = ({ blog }) => {
    console.log("blog : ", blog);
    const BASE_URL = import.meta.env.VITE_BASE_URL;
    return (
        <>
            <div className="card glass w-full">
                <figure>
                    <img
                        src={`${BASE_URL}/${blog?.thumbnail}`}
                        alt="car!" />
                </figure>
                <div className="card-body">
                    <div className="w-full h-full">
                        <div className="flex gap-2 w-full items-center">
                            <div className="avatar w-fit">
                                <div className="ring-primary ring-offset-base-100 w-4 rounded-full ring ring-offset-2">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                                </div>
                            </div>
                            <div>
                            <p className="text-xs w-fit font-semibold">Shubham</p>
                            </div>
                            <div className="flex gap-2 items-center">
                            <MdOutlineChat className="text-xs" />
                            <p className="text-xs font-semibold text-zinc-300">0 Comments</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="mt-3 text-lg">Business Explained in Fewer than 140 Characters</h2>
                            <p className="text-sm text-zinc-400 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod...</p>
                        </div>
                        <div>
                            <NavLink to={`/blog/${blog?._id}`} className="flex gap-2 items-center mt-2">
                                <span className="text-sm text-zinc-500 border-b-2 border-zinc-400 cursor-pointer hover:text-zinc-300 duration-300 font-mono">
                                Know More 
                                </span>
                                 <FaArrowRightLong className="text-sm text-yellow-600" />
                            </NavLink>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CardBlog