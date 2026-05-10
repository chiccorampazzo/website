import Image from 'next/image'

const Avatar = () => {
  return (
    <div className="ring-2 ring-yellow-400 ring-offset-4 flex rounded-full w-fit mt-6">
      <Image
        src="/assets/Francesco-Rampazzo.jpg"
        alt="Francesco Rampazzo"
        width={160}
        height={160}
        className="rounded-full object-cover"
        priority
      />
    </div>
  )
}

export default Avatar
