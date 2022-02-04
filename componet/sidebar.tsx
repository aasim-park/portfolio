import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { GiTie } from 'react-icons/gi'
import { GoLocation } from 'react-icons/go'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const Sidebar = () => {
  const { theme, setTheme } = useTheme()

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <div>
      <Image
        src="/public/Avatar.jpg"
        alt="user avatar"
        className="mx-auto border rounded-full "
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green"> Aasim</span> Shaikh
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Web Developer
      </p>
      <a
        href="/public/Aasim Shaikh Resume.pdf"
        download="AasimshaikhResume.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <GiTie className="w-6 h-6 " />
        Download Resume
      </a>

      {/* Social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
        <a href="https://github.com/aasim-park">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="www.linkedin.com/in/aasim-shaikh-8b7a57176">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.youtube.com/channel/UC0VV97s8zrTc-5FA77bHERQ">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Mumbai,India </span>
        </div>
        <p className="my-2 "> asimshaikh1993@gmail.com </p>
        <p className="my-2"> 9920816963 </p>
      </div>

      {/* Email Button */}
      <button
        className="w-8/12 px-5 py-2 text-white rounded-full cursor-pointer from-green bg-gradient-to-r from-green-400 to-blue-400 hover:scale-105 focus:outline-none"
        onClick={() => window.open('mailto:code.asimshaikh1993@gmail.com')}
      >
        Email me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 text-white rounded-full cursor-pointer from-green bg-gradient-to-r from-green-400 to-blue-400 hover:scale-105 focus:outline-none"
      >
        {/* //TODO remove bg black */}
        Toggle Theme
      </button>
    </div>
  )
}

export default Sidebar
