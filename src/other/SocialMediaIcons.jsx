const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
        <a 
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/saqo.petrosyan.1"
        target='_blank'
        rel="noreferrer"
        >
            <img src="images/facebook.png" alt="facebook" />
        </a>

        <a 
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/saq0000990/"
        target='_blank'
        rel="noreferrer"
        >
            <img src="images/instagram.png" alt="facebook" />
        </a>

        <a 
        className="hover:opacity-50 transition duration-500"
        href="https://am.linkedin.com/in/sargis-petrosyan-228b27248?trk=people-guest_people_search-card"
        target='_blank'
        rel="noreferrer"
        >
            <img src="images/linkedin.png" alt="facebook" />
        </a>

        <a 
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/codeFather2995"
        target='_blank'
        rel="noreferrer"
        >
            <img src="images/git.png" alt="facebook"  className="rounded-md"/>
        </a>

    </div>
  );
};

export default SocialMediaIcons;