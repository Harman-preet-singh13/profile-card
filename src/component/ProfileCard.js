import React from "react";
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

export default function ProfileCard({
  userImgLg,
  userImgMd,
  userImgSm,
  userTitle,
  userFirstName,
  userLastName,
  userGender,
  userPhone,
  userLocationState,
  userLocationCountry,
}) {
  return (
    <div className="container">
      <div className="card">
        <div className="front h-[400px] ">
          <div className="h-full  bg-blue-200 border border-slate-200 shadow-xl">
            <div className="bg-white mb-5 flex justify-center">
              <img
                className="my-5 rounded-full object-center bg-slate-700"
                src={userImgLg}
              />
            </div>
            <div className=" bg-blue-200 ">
              <p className="text-lg font-semibold b">
                {`${userTitle} ${userFirstName} ${userLastName}`}
              </p>
              <p className="mt-2 flex justify-center">
                <IoPerson className="m-1 text-slate-600" />
                {userGender}
              </p>
              <p className="mt-2 flex justify-center">
                <FaPhone className="m-1 text-slate-600" />
                {userPhone}
              </p>
              <p className="mt-2 flex justify-center">
                <IoLocationSharp className="m-1 text-slate-600" />
                {`${userLocationState}, ${userLocationCountry}`}
              </p>
            </div>
            <div className="mt-10">
              <button className="font-semibold px-2  border-2 border-blue-900">
                Hover
              </button>
            </div>
          </div>
        </div>
        <div className="back h-[400px]">
          <div className="h-full  bg-blue-200 border border-slate-200 shadow-xl">
            <div className=" bg-blue-200 ">
              <div className=" flex justify-center">
                <img className="my-5 rounded-full profile-img bg-slate-700" src={userImgLg} />
              </div>
              <div className="bg-white py-5 about-section h-[250px]">
                <h2 className="text-lg pt-14 font-semibold">
                  About me
                </h2>
                <p className="text-sm leading-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  tincidunt ante sit amet sodales vulputate. Mauris elementum
                  placerat velit, eu sollicitudin nibh gravida ut. Nulla at
                  euismod libero. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
