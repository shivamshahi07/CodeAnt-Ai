import StackedCards from "@/components/StackedCards";


const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen fixed grid grid-cols-1 lg:grid-cols-2">
      {/* Static Images */}
      <div className="w-full h-full hidden lg:flex items-center justify-center border-r border-[#D8DAE5] bg-[#FFFFFF]">
        <StackedCards />
        <img
          src={"/logoFaded.png"}
          alt={"logo"}
          className={`absolute left-0 bottom-0 w-[300px] aspect-square`}
        />
      </div>

      {/* Auth Form with Tabs */}
      <div className="w-full px-4 py-6 bg-[#FAFAFA]">{children}</div>
    </div>
  );
};

export default AuthLayout;
