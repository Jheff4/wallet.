function Features() {
  const height = 440

  const wrapper = 'group [perspective:1000px]'

  const baseCard = `
    rounded-xl
    
  `
// transition-all duration-500 ease-out
    // shadow-none
    // group-hover:shadow-2xl
    // hover:-translate-y-4
    // hover:scale-[1.03]
  return (
    <div className="w-full py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* 1 — tilt right */}
        <div className={wrapper}>
          <div
            style={{ height }}
            // className={`${baseCard} bg-[#9B7BB0] hover:[transform:rotateY(6deg)_translateY(-16px)_scale(1.03)]`}
            className={`bg-[#9B7BB0] ${baseCard}`}

          />
        </div>

        {/* 2 — tilt left */}
        <div className={wrapper}>
          <div
            style={{ height }}
            // className={`${baseCard} bg-[linear-gradient(180deg,#FF7827_0%,#D05A13_100%)] hover:[transform:rotateY(-6deg)_translateY(-16px)_scale(1.03)]`}
            className={`bg-[linear-gradient(180deg,#FF7827_0%,#D05A13_100%)] ${baseCard}`}
          />
        </div>

        {/* 3 — tilt forward */}
        <div className={wrapper}>
          <div
            style={{ height }}
            // className={`${baseCard} bg-[#331642] hover:[transform:rotateX(6deg)_translateY(-16px)_scale(1.03)]`}
            className={`bg-[#331642] ${baseCard}`}
          />
        </div>

        {/* 4 — tilt backward */}
        <div className={wrapper}>
          <div
            style={{ height }}
            // className={`${baseCard} bg-[#070723] hover:[transform:rotateX(-6deg)_translateY(-16px)_scale(1.03)]`}
            className={`bg-[#070723] ${baseCard}`}
          />
        </div>

        {/* 5 — diagonal right */}
        <div className={wrapper}>
          <div
            style={{ height }}
            // className={`${baseCard} bg-[#FFC000] hover:[transform:rotateY(4deg)_rotateX(4deg)_translateY(-16px)_scale(1.03)]`}
            className={`bg-[#FFC000] ${baseCard}`}
          />
        </div>

        {/* 6 — diagonal left */}
        <div className={wrapper}>
          <div
            style={{ height }}
            // className={`${baseCard} bg-[#070723] hover:[transform:rotateY(-4deg)_rotateX(4deg)_translateY(-16px)_scale(1.03)]`}
            className={`bg-[#070723] ${baseCard}`}
          />
        </div>

        {/* 7 — subtle lift only */}
        <div className={wrapper}>
          <div
            style={{ height }}
            // className={`${baseCard} bg-[#FFFFFF] hover:[transform:translateY(-16px)_scale(1.03)]`}
            className={`bg-[#FFFFFF] ${baseCard}`}
          />
        </div>

        {/* 8 — gentle tilt */}
        <div className={wrapper}>
          <div
            style={{ height }}
            // className={`${baseCard} bg-[#9B7BB0] hover:[transform:rotateY(3deg)_translateY(-16px)_scale(1.03)]`}
            className={`bg-[#9B7BB0] ${baseCard}`}
          />
        </div>
      </div>
    </div>
  )
}

export default Features
