import Image from 'next/image'
interface iImageConditionRenderProps {
  [key: string]: React.ReactNode
}

interface iCondition {
  condition: string
}

export const imageConditionRender = ({
  condition
}: iCondition): React.ReactNode => {
  const Images: iImageConditionRenderProps = {
    'Céu limpo': (
      <Image src="/sun.svg" width="70" height="70" alt="Wheater Icon" />
    ),
    'Poucas nuvens': (
      <Image
        src="/scatteredClouds.svg"
        width="70"
        height="70"
        alt="Wheater Icon"
      />
    ),
    'Nuvens dispersas': (
      <Image
        src="/scatteredClouds.svg"
        width="70"
        height="70"
        alt="Wheater Icon"
      />
    ),
    'Nuvens quebradas': (
      <Image
        src="/scatteredClouds.svg"
        width="70"
        height="70"
        alt="Wheater Icon"
      />
    ),
    'Chuva fraca': (
      <Image src="/rain.svg" width="70" height="70" alt="Wheater Icon" />
    ),
    'Chuva forte': (
      <Image src="/rain.svg" width="70" height="70" alt="Wheater Icon" />
    ),
    'Chuva moderada': (
      <Image src="/rain.svg" width="70" height="70" alt="Wheater Icon" />
    ),
    'Tempestade com chuva': (
      <Image src="/storm.svg" width="70" height="70" alt="Wheater Icon" />
    ),
    'Tempestade com chuva forte': (
      <Image src="/storm.svg" width="70" height="70" alt="Wheater Icon" />
    ),
    default: (
      <Image src="/cloud.svg" width="70" height="70" alt="Wheater Icon" />
    )
  }
  return Images[condition] || Images.default
}
