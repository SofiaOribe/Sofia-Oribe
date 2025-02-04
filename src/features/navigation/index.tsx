const Navigation = () => {
  const navigation = [
    {
      id: "about_me",
      name: "About Me",
    },
    {
      id: "collaborations",
      name: "Collaborations",
    },
    {
      id: "projects",
      name: "Projects",
    },
  ]

  const social = [
    {
      id: "linkedin",
      name: "linkedin",
      link: "#",
    },
    {
      id: "github",
      name: "github",
      link: "#",
    },
  ]

  return (
    <div className="navigation boxSizingBorderBox">
      <header className="top-nav displayRowJustifyEnd boxSizingBorderBox">
        <div className="">
          <div className="displayRowBetween gap_90">
            {navigation.map(item => {
              return (
                <a href={`#${item.id}`} key={item.id} className="thin_Lexend_Giga_16 textDecorationNone colorDark">
                  {item.name}
                </a>
              )
            })}
          </div>
        </div>
      </header>
      <aside className="side-nav boxSizingBorderBox">
        {social.map(media => {
          return (
            <div key={media.id} className="containerSocialSide boxSizingBorderBox">
              <a href={media.link} className="colorDark">
                {media.name}
              </a>
            </div>
          )
        })}
      </aside>
    </div>
  )
}

export default Navigation
