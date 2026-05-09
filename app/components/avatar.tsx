import Image from 'next/image'

const Avatar = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-600 to-yellow-300 mb-6 p-1 flex rounded-full mx-auto w-fit">
      <Image
        src="/assets/Francesco-Rampazzo.jpg"
        alt="Francesco Rampazzo"
        width={200}
        height={200}
        className="rounded-full"
        priority
      />
    </div>
  )
}

export default Avatar
