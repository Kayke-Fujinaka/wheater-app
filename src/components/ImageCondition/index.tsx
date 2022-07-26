import Image from 'next/image'

interface imageConditionRenderProps {
  conditions: string
}

export function imageConditionRender(props: imageConditionRenderProps) {
  switch (props.conditions) {
    case 'Céu limpo':
      return <Image src="/sun.svg" width="47" height="30" alt="Wheater Icon" />
    case 'Poucas nuvens':
      return (
        <Image
          src="/scatteredClouds.svg"
          width="47"
          height="30"
          alt="Wheater Icon"
        />
      )
    case 'Nuvens dispersas':
      return (
        <Image
          src="/scatteredClouds.svg"
          width="47"
          height="30"
          alt="Wheater Icon"
        />
      )
    case 'Nuvens quebradas':
      return (
        <Image
          src="/scatteredClouds.svg"
          width="47"
          height="30"
          alt="Wheater Icon"
        />
      )
    case 'Chuva fraca':
      return <Image src="/rain.svg" width="47" height="30" alt="Wheater Icon" />
    case 'Chuva forte':
      return <Image src="/rain.svg" width="47" height="30" alt="Wheater Icon" />
    case 'Chuva moderada':
      return <Image src="/rain.svg" width="47" height="30" alt="Wheater Icon" />
    case 'Tempestade com chuva':
      return (
        <Image src="/storm.svg" width="47" height="30" alt="Wheater Icon" />
      )
    case 'Tempestade com chuva forte':
      return (
        <Image src="/storm.svg" width="47" height="30" alt="Wheater Icon" />
      )
    default:
      return (
        <Image src="/cloud.svg" width="47" height="30" alt="Wheater Icon" />
      )
  }
}
