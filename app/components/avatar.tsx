import Image from 'next/image'

const Avatar = () => {
  return (
    <div
      className="bg-gradient-to-r  from-yellow-600 to-yellow-300 mb-12 p-1 flex"
      style={{
        borderRadius: "100%",
        margin: `auto`,
      }}
    >
      <Image
        src="/assets/Francesco-Rampazzo.jpg"
        alt="Francesco Rampazzo"
        width={250}
        height={250}
        style={{
          borderRadius: "100%",
        }}
      />
    </div>
  )
}

export default Avatar
