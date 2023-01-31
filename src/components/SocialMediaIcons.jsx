import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import twitter from "../assets/twitter.png"
import instagram from "../assets/instagram.png"

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-12 ml-1">
      <a
      className="hover:opacity-50 transition duration-500"
      href="https://www.linkedin.com/in/wael-hourani-14512219b/"
      target="_blank"
      rel="noreffer"
      >
        <img alt="linkedin-link" src={linkedin} />
      </a>
      <a
      className="hover:opacity-50 transition duration-500 w-[30px]"
      href="https://github.com/bluewael98?tab=repositories"
      target="_blank"
      rel="noreffer"
      >
        <img alt="GitHub-Repo" src={github} />
      </a>
      <a
      className="hover:opacity-50 transition duration-500 w-[30px]"
      href="https://www.instagram.com/"
      target="_blank"
      rel="noreffer"
      >
        <img alt="instagram" src={instagram} />
      </a>
      <a
      className="hover:opacity-50 transition duration-500 w-[30px]"
      href="https://twitter.com/"
      target="_blank"
      rel="noreffer"
      >
        <img alt="twitter" src={twitter} />
      </a>

    </div>
  )
}

export default SocialMediaIcons