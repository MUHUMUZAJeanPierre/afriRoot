import React from 'react'
import {HiOutlineLightBulb} from 'react-icons/hi';
import {BiServer} from 'react-icons/bi';
import {FaGraduationCap} from 'react-icons/fa';

const History = () => {
  return (
    <div>
      <div className="bg-[#F3F5F5] py-[6rem]">
        <div className="space-y-[2rem]">
          <h2
            style={{ color: "#CB8342" }}
            className="text-center  font-semibold text-xl uppercase font-serif"
          >
            Today's History
          </h2>
          {/* <p className="text-center text-[#3A3A3A]">Trending culture </p> */}
        </div>
        <div className="flex lg:flex-row md:flex-col space-y-6   flex-col p-[3rem] container mx-auto justify-around lg:space-x-8">
          <div className="bg-white rounded-lg p-6 mt-6">
            <h2
              style={{ color: "#CB8342" }}
              className="font-serif font-semibold text-lg flex flex-row items-center"
            >
              <span className="text-3xl px-2">
                <HiOutlineLightBulb />
              </span>
              1964
            </h2>
            <p className="max-w-md pl-12 pt-2 text-[#3A3A3A]">
              The United Republic of Tanganyika and Zanzibar (later renamed
              Tanzania) is officially formed, uniting the two formerly
              independent entities.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h2
              style={{ color: "#CB8342" }}
              className=" font-serif flex flex-row items-center font-semibold text-lg "
            >
              <span className="px-2 text-3xl">
                <HiOutlineLightBulb />
              </span>
              1987
            </h2>
            <p className="px-16 max-w-2xl text-[#3A3A3A]">
              The Kenyan government launches the "Nyayo Pioneer Youth
              Programme," a controversial initiative aimed at addressing
              unemployment and promoting self-reliance among youth, with mixed
              results.
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h2
              style={{ color: "#CB8342" }}
              className="font-serif font-semibold text-lg flex flex-row items-center "
            >
              <span className="text-3xl px-2">
                <HiOutlineLightBulb />
              </span>
              2003
            </h2>
            <p className="max-w-md pl-16 text-[#3A3A3A]">
              The Second Liberian Civil War officially ends with the signing of
              a comprehensive peace agreement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History