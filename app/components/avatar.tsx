import Image from 'next/image'

const Avatar = () => {
  return (
    <div className="bg-white p-0.5 flex rounded w-fit">
      <Image
        src="/assets/Francesco-Rampazzo.jpg"
        alt="Francesco Rampazzo"
        width={60}
        height={60}
        className="rounded"
        priority
      />
    </div>
  )
}

export default Avatar
