import React from "react";
import Profile from "@/components/profile";
import { Settings2, UserPen } from "lucide-react";

const Settings = () => {
  return (
    <div className=" ml-10 pl-6 h-[97%] w-[94%]">
      <div className="flex items-center gap-2 p-3 font-bold tracking-tight sticky text-3xl">
        <Settings2 />
        Settings
      </div>
      <div className="w-full h-[90%] p-15 justify-center">
        <div className="w-[40%] flex gap-2 text-lg font-medium mb-10">
          <UserPen />
          Profile
        </div>
        <div className="border p-5 rounded-lg">
          <Profile />
        </div>
        <div className="w-[30%]"></div>
      </div>
    </div>
  );
};

export default Settings;
