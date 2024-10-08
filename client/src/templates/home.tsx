import { Header } from "../molecules";
import { Profile } from "../organisms";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="home w-full px-20 bg-slate-200 h-screen overflow-hidden ">
        <div className="w-full flex gap-2 lg:gap-4  pt-5 pb-10 h-full">
          {/* left */}
          <div className="hidden w-1/3 lg:w-1/4 md:flex flex-col gap-6 overflow-y-auto">
            <Profile />
            {/* <Friends /> */}
          </div>

          {/* middle */}
          <div className="flex-1 h-full px-4 flex flex-col gap-6 overflow-y-auto rounded-lg">
            {/* <AddPost />
            <Feed /> */}
          </div>

          {/* right */}
          <div className="hidden w-1/4 h-full lg:flex flex-col gap-8 overflow-y-auto">
            {/* <Requests />
            <Suggestions /> */}
          </div>
        </div>
      </div>
    </>
  );
};
