import { NavLink } from "react-router-dom";
import Button from "../../components/reUse/Button";
import { FaBook } from "react-icons/fa6";

const LessonNote = () => {
  return (
    <div>
      <div className="min-h-[82vh] text-blue-950">
        <div>
          <h1 className="text-2xl pl-4 pt-2">Teacher's Lesson Note</h1>
          <div className="flex float-end">
            <NavLink to="/create-notes">
              <Button
                name="Add Note"
                className="py-4 px-4 bg-black text-white"
              />
            </NavLink>
          </div>
          <div className="py-9 w-full mt-24 p-3 border-b-2">
            <p className="font-bold mb-7">First Term Lesson Note</p>
            <div className="flex flex-wrap gap-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                {Array.from({ length: 5 }, () => (
                  <NavLink to="">
                    <div className="w-[270px] min-h-[200px] shadow-sm border-2 flex justify-center items-center flex-col gap-9 rounded-md ml-4">
                      <div className="card-body text-gray-500">
                        <div className="h-14 w-full flex justify-center items text-[30px]">
                          <FaBook />
                        </div>
                        <div className="flex flex-col text-center">
                          <h2 className="font-bold">Title</h2>
                          <p className="pt-5">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Magnam amet,
                          </p>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonNote;
