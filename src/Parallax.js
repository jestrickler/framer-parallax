import { motion as m, useScroll, useTransform } from 'framer-motion'

const Parallax = () => {
  const { scrollYProgress } = useScroll()
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%'])
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])

  return (
    <div className='relative grid h-screen w-full place-items-center overflow-hidden'>
      <m.h1
        style={{ y: textY }}
        className='relative z-10 text-7xl font-bold text-white md:text-9xl'
      >
        PARALLAX
      </m.h1>
      <m.div
        className='absolute inset-0 z-0'
        style={{
          backgroundImage: `url(/image-full.png)`,
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
          y: backgroundY
        }}
      />
      <div
        className='absolute inset-0 z-20'
        style={{
          backgroundImage: `url(/image-bottom.png)`,
          backgroundPosition: 'bottom',
          backgroundSize: 'cover'
        }}
      />
    </div>
  )
}

export { Parallax }
