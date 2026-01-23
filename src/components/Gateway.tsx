function Gateway() {
  return (
    <div
      style={{
        backgroundImage: 'url(/gatewayBg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      className="bg-[#111111] py-20 text-white"
    >
      <div
        className="
          text-[5.5rem]
          leading-[1.4]
          tracking-wide
          font-black
          text-center
          drop-shadow-[0px_0px_12px_rgba(89,28,129,0.35)]
        "
        style={{
          textShadow: `
            0 0 0.5px #fff,
            0 0 1px #fff
          `,
        }}
      >
        Your Gateway into <br />the Blockchain
      </div>
    </div>
  );
}

export default Gateway;
