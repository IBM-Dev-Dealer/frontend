import Image from "next/image";

const Avatar = ({
  className,
  src,
  alt = "no image",
  width = 100,
  height = 100,
  isInNextConfig = false,
  round = false,
  ...props
}) => {
  const imageClassName = `ring-2 w-${width} h-${height} ring-gray mr-5 ${
    round ? "rounded-full" : "rounded"
  } ${className}`;

  return src ? (
    isInNextConfig ? (
      <Image
        className={imageClassName}
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority
        {...props}
      />
    ) : (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        className={imageClassName}
        src={src}
        alt={alt}
        width={width}
        height={height}
        {...props}
      />
    )
  ) : (
    <div
      className={`overflow-hidden relative w-20 h-20 ${
        round ? "rounded-full" : "rounded"
      } bg-white ring-2 ring-gray shadow-md mr-5`}
    >
      <svg
        className=' text-gray-400'
        fill='#84c25e'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill-rule='evenodd'
          d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
          clip-rule='evenodd'
        ></path>
      </svg>
    </div>
  );
};

export default Avatar;
